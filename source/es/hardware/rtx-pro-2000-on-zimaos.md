---
title: Prueba de rendimiento de inferencia de LLM local de la NVIDIA RTX PRO 2000
seo_title: "Inferencia LLM de la NVIDIA RTX PRO 2000 en ZimaOS: 65–70 t/s verificados"
description: "Un benchmark práctico de la NVIDIA RTX PRO 2000 Blackwell 16 GB en un ZimaCube con ZimaOS: velocidad de decodificación de llama.cpp con Qwen3.6-35B-A3B MoE, límites de contexto, consumo de energía y la configuración recomendada."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descripción general

Este artículo documenta un benchmark práctico de la NVIDIA RTX PRO 2000 Blackwell 16 GB — la opción oficial de GPU del ZimaCube Creator — ejecutando inferencia de LLM local en ZimaOS 1.7.1. Cubre benchmarks sintéticos, generación de conversación real, validación de contexto largo y consumo de energía, y termina con el modelo y la configuración de despliegue recomendados.

Para el recorrido de despliegue en cinco pasos, consulta [Inferencia de LLM local](../zimaos/local-llm-inference "Ejecuta una IA privada en tu NAS ZimaOS con una configuración 35B MoE verificada"). Para la instalación física, consulta [Expansión de GPU](./gpu-expansion "Añade una tarjeta gráfica a tu ZimaCube para IA y transcodificación").

## TL;DR

| Hallazgo | Resultado |
|---|---|
| ¿Puede ejecutar LLM locales? | Sí — CUDA 13.0 / Compute Capability 12.0 totalmente compatible |
| Mejor modelo | **Qwen3.6-35B-A3B (cuantización IQ3_XXS)** |
| Velocidad de decodificación | **Unos 65–70 tokens por segundo** |
| Contexto largo | 64K estable, 128K viable |
| Frente a un modelo denso de 27B | Solo 18–23 t/s — el modelo MoE es unas 3.5 veces más rápido |
| El cuello de botella real | 16 GB de VRAM, no el cómputo ni la energía |

En una frase: la RTX PRO 2000 es una de las mejores tarjetas de 16 GB para inferencia local de agentes — 70 W, arquitectura Blackwell y, con un modelo MoE, decodifica varias veces más rápido que un modelo denso de huella similar.

## Entorno de pruebas

### Hardware

| Componente | Especificación |
|---|---|
| Dispositivo | NAS ZimaCube (modelo de entrada de primera generación, hardware oficial ZimaOS) |
| SO | ZimaOS 1.7.1 |
| CPU | Intel N100 (4 núcleos, 0.7–3.4 GHz) |
| Memoria | 16 GB (unos 15 GB utilizables) + 5.2 GB de swap |
| GPU | **NVIDIA RTX PRO 2000 Blackwell** |
| VRAM | 16 GB GDDR7 |
| CUDA | 13.0, controlador 580.105.08 — activado automáticamente por ZimaOS 1.7.1 al insertar la tarjeta |
| Compute capability | 12.0 (sm_120, Blackwell) |
| Límite de energía | 70 W |

Este es un dispositivo con GPU fuerte y CPU débil. El N100 es un núcleo de eficiencia de bajo consumo, así que cada modelo debe caber entero en la VRAM. En el momento en que la inferencia se derrama a la CPU, la velocidad se desploma.

El dispositivo probado es el ZimaCube de entrada de primera generación. En un ZimaCube 2, la CPU más potente solo puede mejorar los resultados — las cifras del lado de la GPU se mantienen porque la tarjeta es idéntica.

### Software

| Software | Versión / notas |
|---|---|
| Motor de inferencia | llama.cpp (compilado desde el código fuente con el backend CUDA sm_120; usa CUDA 12.8 para compilar — 13.1 tiene problemas conocidos con los kernels MMQ) |
| Servidor | llama-server (API compatible con OpenAI) |
| Formato de modelo | GGUF (incluida la cuantización Unsloth Dynamic) |

La RTX PRO 2000 es una tarjeta Blackwell (sm_120). Necesita un runtime CUDA y un backend de inferencia recientes — los lanzamientos precompilados antiguos de llama.cpp pueden no reconocer la tarjeta.

## Metodología

1. **Benchmark sintético**: `llama-bench` con descarga completa en GPU (`-ngl 99`), probando el procesamiento de prompts (512/2048 tokens) y la generación de tokens (128/512 tokens).
2. **Generación real**: `llama-cli` con `--temp 0.7`, modo de un solo turno, semilla aleatoria fija, preguntas y respuestas reales en chino.
3. **Multigiro y contexto largo**: conversaciones multigiro y recuperación de aguja en un pajar a través de la API de llama-server compatible con OpenAI.
4. **Capacidad de contexto**: cargar el modelo a 64K / 128K de contexto y medir el uso de VRAM.

### Modelos probados

| Modelo | Arquitectura | Parámetros totales | Parámetros activos | Cuantización | Tamaño |
|---|---|---|---|---|---|
| Qwen3.8-27B | Denso | 27.3B | 27.3B (todos activos) | Q3_K_XL / Q2_K_XL / IQ2_XXS | 8.4–12.5 GiB |
| Qwen3.6-35B-A3B | MoE híbrido | 34.7B | Unos 3B | IQ3_XXS / Q2_K_XL | 11.4–12.3 GiB |

Qwen3.6-35B-A3B es una arquitectura híbrida: 10 capas de atención completa y 30 capas SSM (Mamba) + MoE, 256 expertos con 8 activos por token. Está orientada a escenarios de agentes y programación.

## Resultados del benchmark

### Sintético (llama-bench, descarga completa en GPU, tokens/s)

| Modelo (cuantización) | Tamaño | Prefill pp2048 | Decodificación tg512 |
|---|---|---|---|
| Qwen3.8-27B Q3_K_XL | 12.51 GiB | 670 | 17.9 |
| Qwen3.8-27B Q2_K_XL | 9.93 GiB | 670 | 20.7 |
| Qwen3.8-27B IQ2_XXS | 8.38 GiB | 570 | 23.1 |
| **Qwen3.6-35B-A3B IQ3_XXS** | 12.29 GiB | 1490 | **68.1** |
| **Qwen3.6-35B-A3B Q2_K_XL** | 11.44 GiB | 1564 | **74.4** |

### Generación real (llama-cli, --temp 0.7, preguntas y respuestas en chino)

| Cuantización | Velocidad de generación |
|---|---|
| IQ3_XXS | **64.7 t/s** |
| Q2_K_XL | **70.3 t/s** |

### Validación multigiro y de contexto largo

| Prueba | Resultado |
|---|---|
| Retención de contexto multigiro | Superada — el turno 2 recordó correctamente información anterior |
| Recuperación de aguja en un pajar | Superada — recuperó contenido anterior |
| Estabilidad en llamadas repetidas | Superada — estable en unos 63 t/s |

### Idoneidad para cargas de trabajo de agentes

La arquitectura híbrida de Qwen3.6-35B-A3B está orientada a escenarios de agentes y programación, y las mediciones lo confirman: la retención de contexto multigiro y la recuperación de aguja en un pajar se superan ambas, y las llamadas repetidas se mantienen estables en unos 63 t/s. Para un agente de programación estilo DeepSeek Harness o Codex, es una velocidad interactiva fluida, y los 35B de parámetros totales aportan una capacidad de razonamiento y programación que un modelo denso pequeño no tiene.

La limitación en esta tarjeta de 16 GB es el contexto. Las conversaciones de los agentes crecen y, aunque 64K es cómodo, 128K queda ajustado. Si tus cargas de trabajo de agente necesitan la ventana nativa de 256K del modelo, la [RTX 4000 SFF Ada](./rtx-4000-ada-on-zimaos "Informe completo de referencia de la NVIDIA RTX 4000 SFF Ada en ZimaOS") de 20 GB lo consigue con cuantización KV q4.

## Por qué el modelo MoE es 3.5 veces más rápido que un 27B denso

Este es el hallazgo más valioso de la prueba.

- Un **modelo denso** lee todos los 27B de pesos por cada token generado, así que la velocidad de decodificación queda limitada por el ancho de banda de memoria. El ancho de banda efectivo de decodificación medido es de unos 224 GiB/s, lo que deja a un modelo de 27B en 18–23 t/s.
- El **modelo MoE** activa solo 8 de 256 expertos (unos 3B de parámetros) por token, leyendo un orden de magnitud menos de pesos y esquivando el cuello de botella del ancho de banda. Así es como alcanza los 65–70 t/s.

En dispositivos con VRAM limitada, MoE es la mejor forma de conseguir a la vez capacidad de parámetros y velocidad de decodificación.

## La VRAM es el único límite duro

- La cuantización IQ3_XXS de 35B-A3B ocupa solo 12.3 GiB, dejando unos 2.4 GB de margen en 16 GB.
- Las cuantizaciones superiores (Q4 son unos 19–20 GB) o modelos más grandes superan los 16 GB. En cuanto entra la descarga a CPU, el N100 arrastra la velocidad a niveles inutilizables.
- «El MoE más fuerte que cabe en 16 GB» es el techo de rendimiento de este dispositivo.

## Consumo de energía

Medido a plena carga de generación, la tarjeta consume unos 55–70 W (en el límite de 70 W sin superarlo) y 6–12 W en reposo. Para un NAS encendido 24/7, la eficiencia es excelente.

## Capacidad de contexto

| Contexto | VRAM usada | Margen | Veredicto |
|---|---|---|---|
| 64K | 13.5 GB | 2.4 GB | Cómodo, recomendado |
| 128K | 14.8 GB | 1.1 GB | Viable, ajustado |
| ~150K | ~15.6 GB | ~0.3 GB | Límite teórico |
| 256K (nativo del modelo) | >16 GB | — | No cabe |

La sobrecarga de contexto es mínima (unos 22 MiB por cada 1K tokens) porque solo las 10 capas de atención necesitan caché KV; las capas SSM mantienen un estado constante.

## Conclusión y recomendaciones

### Mejor modelo

**Recomendado: Qwen3.6-35B-A3B (cuantización IQ3_XXS, 3.06 bpw)**

1. Es el modelo más grande y potente que cabe entero en 16 GB de VRAM.
2. Decodificar a unos 65 t/s — 3.5 veces un modelo denso de 27B — basta para una experiencia de agente fluida.
3. Los 35B de parámetros totales aportan mucho más conocimiento, razonamiento y capacidad de programación que cualquier modelo denso de la misma huella.
4. IQ3_XXS es el punto dulce entre calidad y velocidad. Q2_K_XL es un 8% más rápido, pero la pérdida de calidad de 2 bits es más notable.

En una tarjeta de 16 GB, este es el techo del nivel. Para cargas serias de programación y bases de conocimiento, el nivel 122B / Flash es el siguiente paso — no cabe en 16 GB y pertenece a tarjetas más grandes.

### Notas de uso

1. **Muestrea a 0.6–0.7, nunca con muestreo voraz (temp=0).** El muestreo voraz hace que este modelo de razonamiento degenere en repetición infinita.
2. **Es un modelo de razonamiento.** Emite una cadena de pensamiento antes de la respuesta, y los tokens de pensamiento cuentan para el límite. Mantén `max_tokens` en 2048 o más, o la respuesta se corta a mitad del pensamiento.
3. **Campos de respuesta.** La respuesta final está en `content`; el rastro de razonamiento está en `reasoning_content` (el mismo campo de extensión que DeepSeek).

### Casos de uso

- Agentes locales: programación, orquestación de tareas, llamadas a herramientas
- Asistente de IA privado y preguntas y respuestas RAG sobre una base de conocimiento en un NAS
- Inferencia local de bajo consumo, siempre encendida
- No apto para: contextos más allá de 128K, o modelos más grandes con cuantización alta

## Despliegue (servidor compatible con OpenAI)

Usa el mismo servidor en contenedor que la guía de despliegue — nada que compilar, la imagen incluye kernels CUDA hasta sm_120:

```bash
docker run -d --name llm-server --gpus all -p 8080:8080 \
  -v "$PWD/models/llm:/models" \
  ghcr.io/ggml-org/llama.cpp:server-cuda \
  -m /models/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf \
  --host 0.0.0.0 --port 8080 \
  -c 131072 --n-gpu-layers 99 -fa on --temp 0.7 --parallel 1
```

El servidor expone una API compatible con OpenAI que los frameworks de agentes habituales (el SDK de OpenAI y otros) pueden llamar directamente:

```python
from openai import OpenAI
client = OpenAI(base_url="http://<zima-cube-ip>:8080/v1", api_key="sk-none")
resp = client.chat.completions.create(
    model="/models/Qwen3.6-35B-A3B-UD-IQ3_XXS.gguf",
    messages=[{"role": "user", "content": "Hello"}],
    temperature=0.7,
    max_tokens=2048,          # mantenlo grande, o el pensamiento se come el límite
)
print(resp.choices[0].message.content)             # respuesta final
print(resp.choices[0].message.reasoning_content)   # rastro de razonamiento (opcional)
```

## Apéndice: perfil de GPU verificado

```text
NVIDIA RTX PRO 2000 Blackwell
Compute Capability: 12.0 (sm_120)
VRAM: 16311 MiB (15848 MiB usable by CUDA)
Driver: 580.105.08 / CUDA 13.0
Power limit: 70 W
```
