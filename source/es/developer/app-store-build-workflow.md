---
title: Workflow de compilación de App Store
seo_title: "Workflow de compilación para App Stores Docker de ZimaOS"
description: "Compila salida estática v2, paquetes v1 heredados, informes y artefactos reutilizables para una App Store Docker self-hosted de ZimaOS."
type: Docs
author: IceWhaleTech
tip: No elimine este bloque de front matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Este workflow convierte definiciones de aplicaciones Docker self-hosted en artefactos reutilizables para su distribución en homelabs y NAS OS.

Esta página documenta [`.github/workflows/release.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/release.yml), el workflow de compilación de artefactos.

## Objetivo

Convierte las definiciones fuente del repositorio en entregables de compilación reutilizables.

## Disparadores

- push a `main`
- ejecución manual mediante `workflow_dispatch`

## Etapas principales

1. Obtener el código fuente del repositorio.
2. Restaurar las cachés de compilación.
3. Compilar `dist/` del protocolo v2.
4. Compilar la salida zip v1 heredada.
5. Subir los informes y artefactos entregables.
6. Guardar las cachés de compilación.
7. Escribir el resumen del job.

## Salidas de compilación

Actualmente el workflow produce al menos:

- salida estática `dist/` para el protocolo v2
- archivo heredado `dist/store/main.zip`
- informes JSON de los resultados de compilación v1 y v2

## Por qué es importante

Este workflow explica el contrato de compilación del repositorio:

- los archivos fuente no son directamente el protocolo publicado
- `dist/` es el artefacto de publicación
- los informes subidos son artefactos de depuración, no archivos del protocolo

## Workflow de publicación relacionado

La publicación basada en etiquetas se encuentra en el [Workflow de publicación](./app-store-publishing-workflow).

Si estás diseñando un repositorio para una tienda de terceros, consulta [Reutilizar las acciones oficiales](./app-store-github-actions) para conocer el proceso recomendado.

Esta página también resulta útil para responsables de tiendas externas que no copien exactamente el workflow oficial, porque muestra qué pasos son esenciales para el protocolo y cuáles son detalles de implementación.
