---
title: Desplegar inferencia de LLM local en ZimaOS
seo_title: "Ejecuta una IA privada en tu NAS ZimaOS: configuración verificada de 35B MoE"
description: "Convierte tu ZimaCube en un servidor de IA privado — deja que un agente de IA haga la configuración o sigue los pasos manuales verificados con Qwen3.6-35B-A3B y llama.cpp."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descripción general

Convierte tu NAS ZimaOS en un servidor de IA privado. Sin nube, sin factura de API, todo se queda en tus discos.

**Un motor, no un chatbot.** Esta guía despliega un servidor de API compatible con OpenAI — el endpoint en `http://<your-nas-ip>:8080/v1` no es una ventana de chat. Un chatbot es solo uno de sus clientes. El valor mayor: cada app de IA y cada agente de tu LAN puede conectarse a este único endpoint. Apunta [DeepSeek Harness](./app-store/deepseek-harness-setup "Instala DeepSeek Harness desde la App Store de ZimaOS y crea tu primer espacio de trabajo") o cualquier agente de programación hacia él, y el agente en sí — no solo tus chats — se ejecuta totalmente en local en tu propio hardware.

**El rendimiento es medido, no teórico.** Un ZimaCube con una GPU RTX PRO 2000 responde a **65–70 tokens por segundo** con un modelo de mezcla de expertos de 35B — las respuestas fluyen más rápido de lo que puedes leerlas. Condensa una semana de notas de reuniones, responde preguntas sobre tus propios documentos, atiende las peticiones de tu agente de hogar inteligente: la respuesta ya está fluyendo mientras todavía lees tu propia pregunta. La tarjeta que hace el trabajo consume solo 70 W — una fracción de un PC de juegos de escritorio. A esta velocidad, la mayor parte del trabajo rutinario de agentes — y los datos personales que hay detrás — puede quedarse por completo en tu propio hardware.

## Antes de empezar

- Un dispositivo ZimaOS con una ranura PCIe libre y una **GPU NVIDIA** — Compute Capability 8.0 o superior, 16 GB de VRAM o más. La configuración siguiente se verificó en un ZimaCube con una RTX PRO 2000.
- **ZimaOS 1.7 o posterior**, que activa el controlador NVIDIA automáticamente al insertar la tarjeta.
- Verifica la tarjeta: abre una terminal y ejecuta `nvidia-smi`. Si ves la tarjeta, estás listo.

> Si la tarjeta no se reconoce, consulta [Expansión de GPU](../hardware/gpu-expansion "Añade una tarjeta gráfica a tu ZimaCube para IA y transcodificación") para la instalación física.

## Ruta A: deja que un agente de IA lo haga

Si tienes DeepSeek Harness (u otro agente de programación) en tu ZimaOS, toda la configuración se convierte en una conversación.

1. **Instala DeepSeek Harness** desde la App Store — consulta [Desplegar DeepSeek Harness](./app-store/deepseek-harness-setup "Instala DeepSeek Harness desde la App Store de ZimaOS y crea tu primer espacio de trabajo").

2. **Dale al agente los permisos que necesita.**

   - Una autorización de carpeta le permite trabajar en tus discos.
   - La autorización del socket de Docker permite la gestión de contenedores a nivel de sistema.

   Ambos están cubiertos en las notas de uso de la guía de DeepSeek Harness.

   La tarea solo pide al agente que instale y configure software — tus datos quedan fuera. Concede el nivel de socket para la configuración; revócalo después si lo prefieres.

3. **Inicia una conversación y comparte lo que sabemos.** Pega lo siguiente en el chat y sigue hablando hasta que el agente informe de éxito:

   > Configura un servidor LLM local en este host ZimaOS. Aquí tienes todo lo que necesitas:
   >
   > - **Modelo:** Qwen3.6-35B-A3B, formato GGUF, cuantización IQ3_XXS. Descarga `Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf` (unos 12,3 GB) del repositorio de Hugging Face `unsloth/Qwen3.6-35B-A3B-GGUF` usando la CLI `hf`.
   > - **Motor:** ejecuta el servidor llama.cpp desde la imagen de contenedor `ghcr.io/ggml-org/llama.cpp:server-cuda`. No hay nada que compilar.
   > - **GPU:** mantén cada capa en la GPU (`--n-gpu-layers 99`). Si el modelo cae a la CPU en esta máquina de clase NAS, la velocidad se desploma.
   > - **Ajustes:** contexto de 128K en una tarjeta de 16 GB, flash attention activado, temperatura de muestreo 0.7. Nunca pongas la temperatura a 0 — el muestreo voraz hace que este modelo se repita para siempre.
   > - **Verifica:** el endpoint compatible con OpenAI debe responder en `http://<host-ip>:8080/v1`. Envía una finalización de chat corta para confirmar y luego informa del nombre del contenedor y un resumen de lo que hiciste.
   >
   > Si algo falla, explica qué intentaste y qué dice el error. Pregúntame antes de cambiar nada a nivel de sistema.

4. **Verifica en tu navegador.** Abre `http://<your-nas-ip>:8080/v1/models` — una lista JSON de modelos significa que el servidor está activo.

   Si algo salió mal, muestra al agente las notas de la sección «Cuando algo no funciona» y continúa la conversación.

**Un último paso para la privacidad total:** cambia el proveedor de modelos del agente a tu nuevo endpoint local en sus ajustes de modelo. A partir de ahí, el agente corre en tu propio modelo en tu propio hardware — todo el ciclo se queda en casa.

## Ruta B: configuración manual

Cinco pasos, directos por terminal.

### Paso 1: Instala la GPU

Abre la caja, asienta la tarjeta en la ranura PCIe, listo — la tarjeta no necesita cable de alimentación.

Recorrido completo: [Expansión de GPU](../hardware/gpu-expansion "Añade una tarjeta gráfica a tu ZimaCube para IA y transcodificación").

### Paso 2: Descarga la imagen del motor

El servidor llama.cpp en contenedor incluye los kernels CUDA para sm_80–120, así que no hay nada que compilar:

```bash
docker pull ghcr.io/ggml-org/llama.cpp:server-cuda
```

### Paso 3: Consigue el modelo

Descarga el archivo GGUF de **Qwen3.6-35B-A3B** en cuantización **IQ3_XXS** — unos 12,3 GB, elegido para que el modelo completo quepa en 16 GB de VRAM con espacio para un contexto de 128K.

Si tu dispositivo tiene internet limitado, consulta [Cómo descargar manualmente el modelo de lenguaje grande](./app-store/llm-manual-download "Descarga modelos LLM manualmente para uso sin conexión en ZimaOS").

```bash
mkdir -p models/llm
hf download unsloth/Qwen3.6-35B-A3B-GGUF \
  Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf --local-dir models/llm
```

### Paso 4: Inicia el servidor

```bash
docker run -d --name llm-server --gpus all -p 8080:8080 \
  -v "$PWD/models/llm:/models" \
  ghcr.io/ggml-org/llama.cpp:server-cuda \
  -m /models/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf \
  --host 0.0.0.0 --port 8080 \
  -c 131072 --n-gpu-layers 99 -fa on --temp 0.7 --parallel 1
```

`--n-gpu-layers 99` mantiene cada capa en la GPU. En CPUs de clase NAS esto no es opcional — en el momento en que el modelo se desborda a la CPU, la velocidad se desploma.

### Paso 5: Di hola

El servidor expone una API compatible con OpenAI en `http://<your-nas-ip>:8080/v1`:

```python
from openai import OpenAI
client = OpenAI(base_url="http://<nas-ip>:8080/v1", api_key="sk-none")
resp = client.chat.completions.create(
    model="Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf",
    messages=[{"role": "user", "content": "Summarize my Documents folder"}],
    temperature=0.7,
    max_tokens=2048,
)
print(resp.choices[0].message.content)
```

Esa es toda la configuración. Apunta cualquier cosa hacia él — la búsqueda de IA de una app de notas, un organizador de fotos, tus propios scripts — y cada uno de ellos ahora corre en tu propio hardware.

## Números verificados

Medido en un ZimaCube con ZimaOS y la RTX PRO 2000:

| Qué | Resultado |
|---|---|
| Velocidad de respuesta | 65–70 tokens/s — más rápido de lo que puedes leer. Un modelo denso de 27B en la misma tarjeta alcanza 18–23; la arquitectura MoE es la razón |
| Contexto | 64K cómodo — el contexto de una novela larga; 128K viable — una pequeña biblioteca de tus propios documentos; 256K no cabe en 16 GB |
| Potencia | 55–70 W bajo carga, 6–12 W en reposo — menos que un portátil gaming, silencioso hasta olvidar que está encendido. Apto para 24/7 |
| Estabilidad | Conversaciones multigiro y recuperación de documentos largos verificadas |

## Cuando algo no funciona

- **El servidor nunca arranca.** Ejecuta `nvidia-smi` y confirma que la GPU aparece. Luego lee los registros con `docker logs llm-server` — las primeras líneas suelen nombrar la pieza que falta.
- **Conflicto de puerto al arrancar.** Los registros muestran un error de enlace de puerto: otra aplicación del NAS ya usa el 8080, un puerto muy común en el mundo del self-hosting. Elige un puerto de host libre y apunta todos los clientes a él — por ejemplo, inicia el contenedor con `-p 8088:8080` y usa `http://<your-nas-ip>:8088/v1` como URL base.
- **La velocidad bajó de repente.** Parte del modelo cayó a la CPU. Mantén `--n-gpu-layers 99` y, si usas Ollama en su lugar, ejecuta `ollama ps` para ver la división GPU/CPU — Ollama descarga silenciosamente.
- **El modelo se repite para siempre.** Pusiste la temperatura a 0. Esta familia de modelos necesita **0.6–0.7**; el muestreo voraz lo rompe.
- **Las respuestas se cortan a mitad de frase.** Se quedó sin espacio para pensar. El modelo piensa antes de responder, y los tokens de pensamiento cuentan para el límite — mantén `max_tokens` en **2048 o más**.

## Enlaces de referencia

- llama.cpp – [Repositorio de GitHub](https://github.com/ggml-org/llama.cpp "Código fuente y releases de llama.cpp en GitHub")
- Servidor llama.cpp – [documentación del servidor](https://github.com/ggml-org/llama.cpp/tree/master/tools/server "Documentación del servidor HTTP de llama.cpp")
