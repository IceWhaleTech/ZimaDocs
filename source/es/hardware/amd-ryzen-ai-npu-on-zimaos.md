---
title: ZimaOS en la NPU AMD Ryzen AI MAX+ 395
seo_title: "ZimaOS en la NPU AMD Ryzen AI MAX+ 395: prueba práctica y límites reales"
description: "Evaluación práctica de la NPU AMD Ryzen AI MAX+ 395 (XDNA2) en ZimaOS (kernel 6.18.9). Cubre la habilitación de la NPU, los bloqueos de versiones de firmware y controladores, y si la inferencia de IA basada en NPU es utilizable hoy en Linux."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descripción general

Este artículo documenta un intento práctico de ejecutar un modelo de IA pequeño en la NPU de un procesador AMD Ryzen AI MAX+ 395 con ZimaOS en el kernel `6.18.9`. Recorre la habilitación de la NPU XDNA2, su validación a nivel de controlador y la prueba de todas las rutas de inferencia realistas. El resultado es una imagen clara de lo que la NPU puede y no puede hacer hoy en Linux, y por qué.

## TL;DR

La pila de software de inferencia de la NPU AMD XDNA2 en Linux no ha superado el umbral de validación de ingeniería y todavía no puede usarse como entorno de producción. Todos los bloqueos provienen de la madurez del software de AMD en el lado Linux, no del hardware en sí.

| Dimensión | Veredicto | Base en una línea |
|---|---|---|
| Hardware de la NPU | Maduro | IP de producción, correctamente detectada y capaz de computar en este host |
| Pila de software de Windows | Madura | El EP oficial de ONNX Runtime y whisper.cpp funcionan |
| Pila de software de Linux | No lista para producción | La cadena controlador/firmware/runtime está rota; faltan los frameworks oficiales |
| Estado más alto alcanzado localmente | Habilitada + programable + ejecuta operadores + prefill de modelo real | La generación completa del modelo está bloqueada por la versión del controlador |

En Windows la NPU es un producto; en Linux es un campo de juegos para desarrolladores. Para producción, usa la iGPU/dGPU (ROCm o Vulkan) para la inferencia de IA y marca la ruta de la NPU como "re-evaluar cuando madure la pila de AMD en Linux". Hoy puedes levantar el controlador de cómputo y ejecutar operadores, pero las rupturas de versión entre firmware, controlador y runtime, junto con la ausencia de frameworks oficiales, impiden que la NPU funcione como un producto completo en Linux.

## Entorno de prueba

- Procesador: AMD Ryzen AI MAX+ 395 (Strix Halo), NPU XDNA2 con 50 TOPS nominales
- Plataforma: ZimaOS 1.7 o posterior, kernel `6.18.9`
- ID del dispositivo PCI de la NPU: `0x1022:0x17f0`

Objetivo: ejecutar un modelo pequeño en la NPU de este host.

## Detección y habilitación

Detección: `lspci` confirma una NPU XDNA2. El módulo del kernel `amdxdna` se carga, pero `/dev/accel/accel0` no se crea porque falta el firmware. El controlador espera `amdnpu/17f0_11/npu.sbin`, que no existe en ningún lugar del disco.

Habilitación: XRT se compiló desde el código fuente como versión `2.21.75` (el repositorio de Ubuntu solo trae `2.13`), usando un contenedor para la compilación. Tras sortear dos escollos, la NPU queda reconocida:

```text
$ xrt-smi examine
XRT  Version: 2.21.75 · amdxdna Version: 6.18.9 · NPU Firmware Version: 1.0.0.166
|BDF            |Name         |
|[0000:c7:00.1] |RyzenAI-npu5 |
```

Hubo dos escollos.

1. El contenedor debe arrancar con `--ulimit memlock=-1`; el límite predeterminado de 8 MB hace fallar el mapeo del dispositivo.
2. El host debe reservar hugepages y montar `/dev/hugepages`. El firmware del host lo gestiona el paquete `zimaos-driver` de ZimaOS en `/opt/zimaos/drivers/firmware/`.

## Verificación de bajo nivel

Acceso programable mediante pyxrt:

```text
$ python3 verify_pyxrt.py
device: <pyxrt.device object at 0x7f46d2a039f0>  ·  pyxrt roundtrip: OK
```

Ejecución del operador IRON/axpy (mlir-aie 1.4.2, los 160 tests pasan):

```text
$ python -m pytest test.py -x -q
============================= 160 passed in 36.22s =============================
```

La NPU está totalmente habilitada, es programable y ejecuta de verdad operadores AIE. Esta es la línea base de la capacidad de la NPU en este host.

## Intento 1: EP oficial de ONNX Runtime - no habilitado en Linux

Investigación a partir de la documentación oficial de AMD y de los issue trackers oficiales:

- La [documentación del Execution Provider Vitis-AI de ONNX Runtime](https://onnxruntime.ai/docs/execution-providers/Vitis-AI-ExecutionProvider.html "Documentación oficial del Execution Provider Vitis-AI de ONNX Runtime") indica "Ryzen AI Linux support is not enabled in this release" — el provider solo está disponible en Windows para AMD64.
- Los issues oficiales de AMD #319/#333/#341 siguen abiertos sin respuesta (falta el módulo `voe` / falta `onnxruntime_providers_ryzenai.so`).
- Las notas de la versión AMD Ryzen AI 1.8 indican: "Model generation is not supported on Linux in this release."

**Conclusión**: la ruta del framework de inferencia oficial no existe en Linux x86_64. Esta vía queda descartada.

## Intento 2: FastFlowLM - bloqueado por el protocolo firmware/controlador

La imagen se compila correctamente (463 MB) y Llama-3.2-1B-NPU2 se descarga bien, pero la inferencia se aborta de inmediato:

```text
$ flm run llama3.2:1b
[FLM]  Prefill chunk 1/1 with 46 tokens
[ERROR]  Insertion error: runlist failed execution (ERT_CMD_STATE_ABORT)
```

`validate` informa del motivo exacto (fallan las versiones de firmware y de controlador):

```text
$ fastflowlm validate -j
{ "fw_build": 166, "fw_major": 1, "fw_minor": 0, "fw_ok": false,
  "drm_version": "0.1", "kernel_ok": false, "ready": false }
```

La lectura del código fuente `main.cpp` de FastFlowLM confirma sus requisitos estrictos: el firmware debe ser al menos `1.1.0.0`, y la versión DRM del dispositivo `amdxdna` debe ser al menos `0.6` (el controlador mainline informa `0.1`).

## Experimento de actualización de firmware: el bloqueo del protocolo

Se localizó un firmware más nuevo `npu.sbin.1.1.2.65` (incorpora "Release 1.1.2.65", mayor o igual que 1.1.0.0) en la rama amd-ipu-staging del proyecto kernel-firmware/drm-firmware de GitLab. Tras instalarlo, el probe falla:

```text
$ dmesg | grep -iE "amdxdna.*protocol"
amdxdna 0000:c7:00.1: [drm] *ERROR* aie2_check_protocol: Incompatible firmware protocol major 7 minor 2
amdxdna 0000:c7:00.1: [drm] *ERROR* aie2_hw_start: firmware is not alive
```

Leyendo el código fuente del kernel mainline en `aie2_check_protocol`: el protocol major del firmware debe ser igual al `protocol_major` del controlador. El controlador mainline `6.18.9` (npu5) usa el protocolo **6.12**; el firmware `1.1.2.65` habla el protocolo **7**, así que son incompatibles. El cambio se revirtió y el entorno XRT/pyxrt quedó intacto.

**Hallazgo clave**: la versión del protocolo del controlador está rota entre releases. El firmware nuevo (protocolo 7) necesita un controlador nuevo (protocolo 7), que necesita un kernel que todavía no se distribuye en ninguna rama estable. El código fuente del kernel confirma que el soporte del protocolo 7 solo existe en master sin publicar (futuro 6.20/7.0); los kernels estables 6.18/6.19 no lo tienen.

## Intento 3: controlador out-of-tree - el kernel personalizado de ZimaOS no lo carga

Para obtener un controlador de protocolo 7, se compiló el árbol de cabeceras mainline `6.18.9` desde kernel.org y se compiló el `amdxdna.ko` upstream de xdna-driver con una coincidencia exacta de vermagic. La carga falla:

```text
$ insmod amdxdna.ko
insmod: ERROR: could not insert module ...: Unknown symbol in module
$ dmesg | grep amdxdna
amdxdna: Unknown symbol drm_gem_shmem_pin_locked (err -2)
amdxdna: Unknown symbol drm_gem_shmem_vmap_locked (err -2)  ... (13 drm_gem_shmem_* symbols missing in total)
```

**Causa raíz**: el kernel de ZimaOS es una compilación personalizada de Buildroot cuyo `drm_shmem_helper` no coincide con el código fuente mainline `6.18.9`, de modo que la ABI del controlador out-of-tree oficial de AMD no encaja. Esto se revirtió. Con ello, la ruta de FastFlowLM queda completamente cerrada (firmware, controlador y kernel forman una cadena rota).

## Intento 4: IRON Llama - un avance en prefill, y un muro final en decode

Se tomó una ruta distinta con la cadena de herramientas near-metal mlir-aie/IRON, que no depende de FastFlowLM ni del protocolo 7. El entorno se construyó desde el repositorio amd/IRON (mlir_aie 1.4.2.dev16 más torch solo-CPU y dependencias de operadores), y el modelo se descargó a través de ModelScope para evitar necesitar un token de HF.

Compilación: todos los operadores AIE (RMSNorm/GEMM/GEMV/RoPE/Softmax/FFN) compilan correctamente.

Prefill funciona — un forward pass completo de transformer se ejecuta en la NPU y produce correctamente el primer token:

```text
$ python llama_npu.py model.safetensors tokenizer.model --num-tokens 1 --prompt-len 13
SCENE I. King John
[Prefill] Time to first token: 2.022 s   [Total] Tokens per second: 0.495
```

El decode falla, bloqueado en dos capas:

Primero, a la API de XRT (2.21.75) le falta:

```text
AttributeError: 'pyxrt.run' object has no attribute 'get_ctrl_scratchpad_bo'
```

Segundo, tras autocompilar un módulo pyxrt 2.26 (libs de XRT 2.26 extraídas de la imagen de FastFlowLM más una compilación dirigida del código fuente de xdna-driver, verificada como compatible con el controlador mainline: `get_ctrl_scratchpad_bo: True` y la comunicación dispositivo/BO pasa), el kernel fusionado sigue sin ejecutarse:

```text
RuntimeError: DRM_IOCTL_AMDXDNA_EXEC_CMD IOCTL failed (err=-22): Invalid argument
$ dmesg | grep amdxdna
amdxdna 0000:c7:00.1: [drm] *ERROR* amdxdna_cmd_submit: HW Context is not ready
```

Leyendo el código fuente del controlador en `amdxdna_ctx.c`: el envío requiere el estado de hwctx `READY`; el kernel fusionado de decode carga hwctx a través de ELF, una ruta nueva que el controlador mainline `6.18.9` no puede llevar a READY.

**Conclusión**: el prefill (forward pass de un modelo real) en la NPU se consigue; el decode (generación completa) está bloqueado por la versión del controlador — el mismo muro que FastFlowLM.

## Análisis de la pila de software por capas

| Capa | Madurez | Conclusión clave | Evidencia |
|---|---|---|---|
| Hardware (XDNA2) | Lista | IP de producción, las 8 columnas detectadas y capaces de computar | Detección y habilitación |
| Controlador del kernel (amdxdna) | Limitada | El protocolo 6.12 funciona; el protocolo 7 nunca entra en un kernel estable; el controlador out-of-tree no carga | Detección / experimento de actualización / out-of-tree |
| Firmware | Limitada | 1.0.x va ligado al protocolo 6, 1.1.x al protocolo 7; el firmware nuevo necesita un controlador nuevo | Experimento de actualización de firmware |
| Runtime de espacio de usuario (XRT) | Limitada | 2.21 y 2.26 están divididos; las APIs nuevas dependen de versiones nuevas | IRON Llama |
| Framework de inferencia | No lista | El EP oficial no está habilitado en Linux; FastFlowLM depende de una coincidencia de versiones; IRON es near-metal y no es de extremo a extremo | Intentos 1, 2, 4 |
| Formato de modelo | Limitada | No hay formato universal ni pipeline de despliegue; cada proveedor tiene su propia cadena de compilación propietaria | Intentos 2, 4 |
| Integración de sistema | Limitada | Fuerte dependencia de la distribución; el kernel personalizado de ZimaOS y el `/lib/modules` de solo lectura bloquean las actualizaciones | Detección / out-of-tree |

## Bloqueos y causas raíz

1. **Bloqueo de protocolo**: el firmware nuevo (protocolo 7), un controlador nuevo (protocolo 7) y un kernel estable (sin protocolo 7) no forman un bucle cerrado.
2. **Sin framework oficial**: el EP Vitis-AI de ONNX Runtime no está explícitamente habilitado en Linux x86_64, y los issues oficiales siguen sin respuesta y sin hoja de ruta.
3. **Dependencia de la distribución**: la capa DRM del kernel personalizado de ZimaOS difiere de mainline, así que ni siquiera el controlador out-of-tree oficial de AMD puede cargarse.
4. **Fragmentación del ecosistema**: no hay un formato de modelo ni un pipeline de despliegue estándar; la compilación del modelo depende de la cadena de herramientas propietaria de cada proveedor.
5. **Experiencia de depuración**: los errores (EINVAL, protocol mismatch, "hwctx not ready") no tienen una ruta oficial de resolución y los resuelve la comunidad.

## Comparación de madurez por plataforma

| Dimensión | Windows | Linux (actual) |
|---|---|---|
| EP oficial de ONNX | Listo | No habilitado |
| Frameworks de inferencia NPU (whisper.cpp y similares) | Listos | "Planned" |
| Gestión de versiones de controlador/firmware | Gestionada por el proveedor | Fragmentada entre distribuciones |
| Usabilidad en producción | Lista | No supera la validación de ingeniería |

## Conclusión y recomendaciones

**Conclusión técnica**: el hardware de la NPU es maduro y la pila de software de Windows es madura. La pila de software de Linux (evolución del protocolo del controlador, frameworks oficiales, gestión de versiones) está en desarrollo activo y no ha superado la validación de ingeniería. El estado más alto alcanzado localmente es habilitar + programar + ejecutar operadores + prefill de un modelo real; la generación completa del modelo no es posible. El bloqueo es de software, no de hardware, y en teoría debería levantarse a medida que madure la pila de AMD en Linux.

Recomendaciones:

1. **Selección para producción**: en Linux, no dependas de la inferencia en NPU. Usa la iGPU/dGPU (ROCm o Vulkan) para la inferencia de IA — llama.cpp con Vulkan ya ejecuta modelos de 14B a 35B en este host.
2. **Hoja de ruta de la NPU**: márcala como "re-evaluar cuando madure la pila de AMD en Linux".
3. **Si insistes en la NPU**: solo sirve para prototipos o validación de borde de bajo consumo y requiere desarrollo IRON de nivel experto; no es una ruta de producción.
4. **Reserva técnica**: este entorno (IRON, pyxrt 2.26, modelos, árbol de cabeceras del kernel) está archivado y puede reintentarse rápidamente tras una actualización del kernel.

**Condiciones de desbloqueo (checklist)**:

- [ ] Un kernel estable (6.20/7.0 o posterior) incluye amdxdna de protocolo 7
- [ ] AMD publica una wheel de onnxruntime-vitisai / voe para Linux
- [ ] ZimaOS actualiza su kernel (FastFlowLM o el decode de IRON podrían funcionar directamente entonces)
- [ ] whisper.cpp con descarga a NPU gana soporte en Linux

## Apéndice: activos verificados (para reutilizar tras una actualización del kernel)

| Activo | Ubicación |
|---|---|
| Entorno IRON (mlir_aie 1.4.2.dev16 + torch) | contenedor `npu-dev`, `/work/ironenv2/` |
| pyxrt 2.26 autocompilado | `/work/pyxrt_build/build/` |
| Libs de XRT 2.26 (aisladas) | `/work/xrt226/` |
| Modelo Llama-3.2-1B | `/DATA/npu-dev/llama-3.2-1b/` |
| Árbol de cabeceras del kernel | `/DATA/npu-dev/kernel-src/` |
| Imagen y caché de modelos de FastFlowLM | `/DATA/npu-dev/fastflowlm/`, `/DATA/npu-dev/flm-cache/` |
| Copias de seguridad de firmware/controlador y scripts de rollback | `/DATA/npu-dev/fw-backup/` |
