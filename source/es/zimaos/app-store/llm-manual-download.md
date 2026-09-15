---
title: Cómo Descargar Manualmente el Modelo de Lenguaje Grande
seo_title: "Descargar Modelos LLM Manualmente en ZimaOS para IA sin Conexión"
description: "Descarga modelos LLM en un PC y muévelos a tu NAS ZimaOS por USB o LAN: la ruta sin conexión para dispositivos con internet limitado."
type: Docs
author: Lauren Pan
tip: La barra superior tiene un formato fijo, por favor no la elimine; description es la descripción del artículo, si no se rellena, se cortará el texto en el primer párrafo.
---

## Descripción general

La guía de [Inferencia LLM local](../local-llm-inference "Ejecuta una IA privada en tu NAS ZimaOS con una configuración 35B MoE verificada") descarga el modelo directamente desde Hugging Face: la ruta más rápida cuando tu NAS tiene una buena conexión. Esta página cubre la ruta sin conexión: descarga el modelo en un PC y muévelo al NAS por USB o por tu red local.

Los pasos siguientes usan el mismo modelo que la guía principal — `Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf`, unos 12,3 GB — y la misma carpeta de destino. El patrón de descarga y transferencia funciona con cualquier modelo GGUF.

## Antes de empezar

- Un PC con acceso a internet
- Unos 13 GB de espacio libre en el PC, y lo mismo en el NAS
- Una memoria USB, o el NAS accesible desde tu red local

## Paso 1: Descarga el modelo en tu PC

La CLI de Hugging Face es la forma más sencilla: reanuda descargas interrumpidas:

```bash
pip install -U huggingface_hub
hf download unsloth/Qwen3.6-35B-A3B-GGUF \
  Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf --local-dir models/llm
```

También puedes descargarlo desde la [página del modelo](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF "Página del modelo Qwen3.6-35B-A3B GGUF en Hugging Face") en un navegador.

## Paso 2: Mueve el modelo al NAS

**Por USB:** copia la carpeta `models/llm` a la memoria, conéctala al NAS y, en ZimaOS Files, mueve la carpeta al directorio `models/llm` del NAS (crédlo si no existe).

**Por LAN:** envía el archivo desde el PC con `scp`. Crea primero la carpeta de destino en el NAS:

```bash
ssh <usuario>@<ip-de-tu-nas> mkdir -p models/llm
scp models/llm/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf <usuario>@<ip-de-tu-nas>:models/llm/
```

## Paso 3: Verifica el archivo

Las descargas grandes pueden corromperse en silencio. En el NAS, comprueba el tamaño y la suma de comprobación:

```bash
ls -lh models/llm
sha256sum models/llm/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf
```

Compara ambos con la ficha del archivo en la [página del modelo](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF "Página del modelo Qwen3.6-35B-A3B GGUF en Hugging Face"): el archivo debería pesar unos 12,3 GB.

## Paso 4: Continúa la configuración

El modelo ya está en `models/llm`, exactamente donde lo espera la guía de [Inferencia LLM local](../local-llm-inference "Ejecuta una IA privada en tu NAS ZimaOS con una configuración 35B MoE verificada"). Salta el paso de descarga de esa guía y continúa con el arranque del servidor.

## Enlaces de referencia

- Hugging Face – [documentación de la CLI huggingface_hub](https://huggingface.co/docs/huggingface_hub "Documentación oficial de la CLI huggingface_hub")
- unsloth – [ficha del modelo Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF "Página del modelo Qwen3.6-35B-A3B GGUF en Hugging Face")
