---
title: Prueba de rendimiento de inferencia de LLM local de la NVIDIA RTX 4000 SFF Ada
seo_title: "Inferencia LLM de la NVIDIA RTX 4000 SFF Ada en ZimaOS: contexto de 256K a 74.5 t/s"
description: "Un benchmark práctico de la NVIDIA RTX 4000 SFF Ada 20 GB en un ZimaCube con ZimaOS: llama.cpp en contenedor con Qwen3.6-35B-A3B, contabilidad de memoria del contexto de 256K, decodificación especulativa MTP, consumo de energía y la configuración recomendada."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descripción general

Este artículo documenta un benchmark práctico de la NVIDIA RTX 4000 SFF Ada Generation 20 GB — una tarjeta de 70 W sin conector de alimentación externo que cabe en el ZimaCube — ejecutando inferencia de LLM local en ZimaOS 1.7.1 a través de un servidor llama.cpp en contenedor. Los 20 GB de VRAM son la diferencia clave frente a la [RTX PRO 2000](./rtx-pro-2000-on-zimaos "Informe completo de referencia de la NVIDIA RTX PRO 2000 en ZimaOS") de 16 GB: desbloquean la ventana de contexto nativa de 256K del modelo.

Para el recorrido de despliegue en cinco pasos, consulta [Inferencia de LLM local](../zimaos/local-llm-inference "Ejecuta una IA privada en tu NAS ZimaOS con una configuración 35B MoE verificada").

## TL;DR

| Hallazgo | Resultado |
|---|---|
| Despliegue | En contenedor — `ghcr.io/ggml-org/llama.cpp:server-cuda`, sin compilación local |
| Mejor modelo | **Qwen3.6-35B-A3B, unsloth UD-IQ3_XXS (13.21 GB)** |
| Velocidad de decodificación | **74.5 t/s** (Q3_K_S llega a 83.3 t/s pero cuesta 2.3 GB más) |
| Contexto | **Contexto nativo de 256K logrado** con cuantización KV q4 |
| Decodificación especulativa MTP | Probada y descartada — aceptación 62–72% pero la ganancia de decodificación es pequeña e inestable |
| Energía | 69.8 W en el muro de 70 W, 83 °C a plena carga |

En una frase: con 20 GB de VRAM, la RTX 4000 SFF Ada ejecuta el mismo modelo MoE de 35B que el nivel de 16 GB pero con la ventana de contexto completa de 256K — la configuración recomendada cabe en 14.5 GB con margen de sobra.

## Entorno de pruebas

| Componente | Especificación |
|---|---|
| GPU | NVIDIA RTX 4000 SFF Ada Generation, Compute Capability 8.9, 20475 MiB |
| Dispositivo | ZimaCube (ranura PCIe compatible, 70 W sin alimentación externa) |
| SO | ZimaOS 1.7.1 — controlador 580.105.08 activado automáticamente al insertar la tarjeta |
| Runtime | Docker + nvidia-container-toolkit, verificado `--gpus all` |
| Motor | `ghcr.io/ggml-org/llama.cpp:server-cuda` (imagen de 4.3 GB, kernels CUDA sm_80–120 incluidos, sin compilación local) |
| Formato de modelo | GGUF |

Salvo que se indique lo contrario, los benchmarks usan llama-bench con `-p 512 -n 256 -r 3` (prompt de 512 tokens, generación de 256 tokens, media de 3 ejecuciones).

## Resultados del benchmark

### Comparación de cuantizaciones (llama-bench, 512/256)

La fuente de la cuantización decide si el modelo conserva su **capa MTP (predicción del siguiente token)**: las cuantizaciones `prithivMLmods/...-MTP-GGUF` conservan MTP, mientras que las cuantizaciones UD de `unsloth/...-GGUF` la eliminan (la carga informa `model doesn't contain MTP layers`).

| Cuantización | Tamaño | MTP | Decodificación t/s | Prefill t/s | Notas |
|---|---|---|---|---|---|
| Q3_K_S (K-quant estándar) | 15.55 GB | Sí | **83.3** | 1692.6 | Mejor ajuste de kernels CUDA |
| **IQ3_XXS (unsloth UD)** | **13.21 GB** | No | **74.5** | **1771.2** | Decodificación 10.6% más lenta, ahorra 2.3 GB |

La tarjeta de 20 GB debería usar **IQ3_XXS**: deja espacio para el contexto de 256K con KV q4. Q3_K_S a 15.55 GB ni siquiera puede cargar en una tarjeta de 16 GB.

La elección de modelo es la misma que en el nivel de 16 GB: Qwen3.6-35B-A3B es el modelo más fuerte que cabe en esta clase de tarjeta, y su arquitectura MoE híbrida está pensada para escenarios de agentes y programación — el análisis completo del ancho de banda está en la página de la [RTX PRO 2000](./rtx-pro-2000-on-zimaos "Informe completo de referencia de la NVIDIA RTX PRO 2000 en ZimaOS"). Para cargas serias de programación y bases de conocimiento, el nivel 122B / Flash es el siguiente paso y requiere tarjetas más grandes.

### Prueba A/B de conmutadores de optimización (llama-bench, 512/256, media de 3 ejecuciones)

| Configuración | Prefill | Decodificación |
|---|---|---|
| Línea base (sin optimizaciones) | 1713.3 | 83.7 |
| + flash-attn | 1295.6 (−24%) | 84.2 |
| + KV q8 | 1692.6 | 83.3 |
| + ubatch 2048 | **2312.9 (+36%)** | — |

### Flash attention y contexto largo

| Prompt | Prefill con fa=on |
|---|---|
| 4096 | 1691.7 |
| 8192 | 1635.1 |
| 16384 | 1580.8 |

Con fa=off, incluso 4096 tokens fallan con `failed to create context`. La flash attention es un requisito duro para contextos largos con este modelo.

### Contabilidad de memoria del contexto de 256K

| Configuración | Resultado | VRAM |
|---|---|---|
| KV f16 + 256K | Sin memoria | >20 GB |
| KV q8 + 256K (sin MTP) | Funciona | ~18.35 GB (Q3_K_S) / 16186 MiB (IQ3_XXS) |
| KV q4 + 256K (sin MTP) | Funciona | **14906 MiB (IQ3_XXS)** |
| KV q4 + 256K + MTP | Funciona (Q3_K_S) | 18894 MiB |

### Decodificación especulativa MTP

| Medición | Resultado |
|---|---|
| Tasa de aceptación real (registros del servidor) | **62–72%** |
| Ganancia de decodificación, respuestas cortas naturales | +3.9% |
| Ganancia de decodificación, 256 tokens fijos, temp=0.8 | +26.1% |
| Ganancia de decodificación, voraz temp=0 | −10.1% |

MTP queda descartado para el nivel de 20 GB: la aceptación es alta, pero la decodificación está limitada por el ancho de banda — el modelo MoE debe leer unos 3B de expertos activos por token de todos modos. La ganancia es pequeña e inestable, así que la recomendación es saltarse MTP.

### Carga de trabajo de agente: DeepSeek Harness con contexto largo

Medido con una sesión real de agente de DeepSeek Harness como carga de trabajo:

| Contexto total | Decodificación t/s |
|---|---|
| 76K | 39.2 |
| 101K | 33.0 |

La decodificación se ralentiza a medida que crece el contexto (lecturas de KV más grandes y más atención). Es el coste inherente del contexto largo, no un fallo — sin desbordamiento, sin truncado. Incluso a unos 100K de contexto, unos 33 t/s siguen siendo fluidos para un agente en streaming. Para agentes de programación estilo DeepSeek Harness y Codex, esta ventana de 256K es la razón para elegir esta tarjeta en lugar del nivel de 16 GB.

### Consumo y temperatura (a plena carga)

| Elemento | Valor |
|---|---|
| Consumo de energía | 69.8 W (en el límite de 70 W) |
| Temperatura | 83 °C (normal; el umbral de limitación térmica está en ~90 °C+) |
| Utilización | 96–100% |
| Ajuste del límite de energía | No ajustable (`-pl` rechazado, exit 4) |

## Por qué MTP no ayuda aquí

En la [RTX PRO 2000](./rtx-pro-2000-on-zimaos "Informe completo de referencia de la NVIDIA RTX PRO 2000 en ZimaOS") de 16 GB, la decodificación está limitada por el ancho de banda de memoria en unos 65–70 t/s. La 4000 SFF Ada tiene más ancho de banda (320 GB/s), lo que eleva la decodificación a 74–83 t/s — pero la misma lógica de ancho de banda de MoE sigue aplicando: cada token debe leer los ~3B de expertos activos. MTP añade un modelo borrador encima y, con una aceptación del 62–72%, la ganancia real es de un pequeño porcentaje en texto natural y negativa con muestreo voraz. La memoria se aprovecha mejor en KV q4 y la ventana de 256K.

## Configuración recomendada (nivel de 20 GB)

| Elemento | Valor |
|---|---|
| Cuantización | Qwen3.6-35B-A3B **UD-IQ3_XXS** (13.21 GB) |
| Flash attention | Activada |
| Caché KV | q4_0 |
| Contexto | 256K |
| ubatch | 2048 |
| MTP | Saltar |
| VRAM | **14906 MiB (14.56 GB, ~5.5 GB de margen)** |

Arranca el servidor con un comando:

```bash
docker run -d --name llm-server --gpus all -p 8080:8080 \
  -v "$PWD/models/llm:/models" \
  ghcr.io/ggml-org/llama.cpp:server-cuda \
  -m /models/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf \
  --host 0.0.0.0 --port 8080 \
  -c 262144 --n-gpu-layers 999 \
  -fa on --cache-type-k q4_0 --cache-type-v q4_0
```

El servicio expone un endpoint compatible con OpenAI en `http://<host-ip>:8080/v1` (la API key es un marcador de posición, el servidor no autentica). Cualquier cliente o agente en formato OpenAI puede conectarse directamente.

## Comparación de niveles

| Nivel | Combinación | VRAM |
|---|---|---|
| 20 GB | IQ3_XXS + 256K + KV q4 | 14.5 GB |
| 20 GB | Q3_K_S + 256K + KV q4 + MTP | 18.45 GB (ajustado) |
| 16 GB | IQ3_XXS + 128K + KV q4 | ~14 GB (Q3_K_S se queda sin memoria al cargar) |

## Limitaciones

1. Los puntos de datos de MTP y la caída en contexto largo son muestras únicas; la varianza no se evaluó estrictamente. La matriz de optimización (tabla A/B) es una media de 3 ejecuciones.
2. Solo se verificó en hardware el nivel de una sola tarjeta de 20 GB. Los niveles de 16/24/32 GB siguen la matriz de compatibilidad teórica y no están cubiertos por estas mediciones.
3. NVFP4 (solo Blackwell), EAGLE y el ajuste del límite de energía no están disponibles en esta tarjeta y no se incluyeron.
