---
title: Agente de IA local en ZimaOS
seo_title: "Agente de IA local en ZimaOS: conecta DeepSeek Harness a tu servidor LLM local"
description: "Conecta DeepSeek Harness a tu servidor LLM local en ZimaOS y lanza tu primera tarea totalmente local — procesamiento de datos, automatización o monitorización del hogar inteligente, sin nube de por medio."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descripción general

Tienes dos piezas funcionando en tu NAS: [DeepSeek Harness](./app-store/deepseek-harness-setup "Instala DeepSeek Harness desde la App Store de ZimaOS y crea tu primer espacio de trabajo"), un agente de programación, y un [servidor LLM local](./local-llm-inference "Ejecuta una IA privada en tu NAS ZimaOS con una configuración 35B MoE verificada") que responde a 65–70 tokens por segundo. Esta guía conecta ambos y lanza tu primera tarea totalmente local.

A partir de ahí, tu agente no tiene factura de API, ni límites de velocidad, ni datos que salgan de casa. Ejecuta tantas tareas como quieras — procesamiento de datos, automatización, monitorización del hogar inteligente — todo el día en tu propio hardware.

## Antes de empezar

- Un servidor LLM local en marcha. Si todavía no tienes uno, [Desplegar inferencia de LLM local en ZimaOS](./local-llm-inference "Ejecuta una IA privada en tu NAS ZimaOS con una configuración 35B MoE verificada") lo deja listo en cinco pasos.
- DeepSeek Harness instalado y un espacio de trabajo creado — consulta [Desplegar DeepSeek Harness](./app-store/deepseek-harness-setup "Instala DeepSeek Harness desde la App Store de ZimaOS y crea tu primer espacio de trabajo").
- La dirección IP de tu NAS y el puerto del servidor, normalmente el `8080`.

## Conecta el agente a tu servidor local

1. Abre DeepSeek Harness y ve a **Settings > Models**.

2. Añade un proveedor de modelos:

| Campo | Valor |
|---|---|
| Base URL | `http://<your-nas-ip>:8080/v1` |
| API key | Cualquier marcador de posición, como `sk-none` — el servidor no autentica |

3. Haz clic en **Fetch available models**. DeepSeek Harness consulta el servidor local y lista los modelos que sirve. El modelo local aparece en la lista, listo para usar.

4. El comportamiento del modelo se midió, no se adivinó — consulta la [prueba de rendimiento de la RTX PRO 2000](../hardware/rtx-pro-2000-on-zimaos "Informe completo de referencia de la NVIDIA RTX PRO 2000 en ZimaOS") para ver todos los hallazgos. Un punto importa en el uso: la temperatura se fija al arrancar el servidor (la guía de despliegue usa 0.7 — nunca 0, el muestreo voraz hace que el modelo se repita para siempre).

5. **El contexto empieza en 128K.** Las conversaciones de los agentes crecen, y la ventana nativa de este modelo es de 256K. Arranca el servidor con un contexto de 128K en una tarjeta de 16 GB (ajustado pero viable, verificado en 14.8 GB), o alcanza los 256K completos con KV q4 en una tarjeta de 20 GB — la página de la [RTX 4000 SFF Ada](../hardware/rtx-4000-ada-on-zimaos "Informe completo de referencia de la NVIDIA RTX 4000 SFF Ada en ZimaOS") tiene el comando verificado.

6. En el diálogo de chat, selecciona el modelo local antes de enviar. A partir de entonces, cada conversación corre en tu propio hardware. Envía un mensaje corto y confirma que llega la respuesta. Si quieres la prueba de que salió de tu propia máquina, mira los registros del servidor mientras responde.

## Lanza tu primera tarea

Elige una, pégala en una sesión y deja que el agente trabaje. Cada prompt de abajo es un punto de partida — el agente planifica los detalles y tú diriges en la conversación.

**Procesa datos locales.**

> Recorre la carpeta Documents del NAS, lista lo que hay dentro, agrupa los archivos por tema y escribe un índice resumen en Markdown. No modifiques ni borres ningún archivo sin preguntarme primero.

**Automatiza una tarea recurrente.**

> Configura un trabajo diario a las 23:00 que revise la carpeta Downloads, mueva los archivos de más de 30 días a una carpeta Archive ordenada por meses y escriba un registro breve de lo que movió.

**Vigila tu hardware con una alerta estilo hogar inteligente.**

> Monitoriza la temperatura del disco y el espacio libre de este NAS. Si la temperatura supera los 55 °C o el espacio libre baja del 10%, escribe un informe de salud y hazlo visible para que pueda revisarlo.

## Mantenlo en marcha 24/7

El agente corre en el propio NAS, así que las tareas largas siguen funcionando con tu portátil cerrado. Comprueba el progreso desde el teléfono con ZimaClient — la misma interfaz web, en cualquier lugar. La [guía de DeepSeek Harness](./app-store/deepseek-harness-setup "Instala DeepSeek Harness desde la App Store de ZimaOS y crea tu primer espacio de trabajo") cubre el acceso móvil y la autorización de carpetas que el agente necesita para las tareas con archivos.

## Cuando algo no funciona

- **Las respuestas se repiten para siempre.** La temperatura está a 0 — mira la nota de arriba.
- **La velocidad bajó de repente.** Parte del modelo cayó a la CPU. La [guía de LLM local](./local-llm-inference "Ejecuta una IA privada en tu NAS ZimaOS con una configuración 35B MoE verificada") tiene la lista completa de soluciones.
- **El agente no llega al modelo.** Abre `http://<your-nas-ip>:8080/v1/models` en un navegador de tu LAN. Una lista JSON significa que el servidor está activo y el problema está en el campo Base URL; un error significa que el propio servidor necesita un reinicio.

## Enlaces de referencia

- DeepSeek Harness – [guía de instalación y despliegue](./app-store/deepseek-harness-setup "Instala DeepSeek Harness desde la App Store de ZimaOS y crea tu primer espacio de trabajo")
- Servidor LLM local – [guía de despliegue](./local-llm-inference "Ejecuta una IA privada en tu NAS ZimaOS con una configuración 35B MoE verificada")
