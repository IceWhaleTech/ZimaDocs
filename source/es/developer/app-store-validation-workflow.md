---
title: Workflow de validación de App Store
seo_title: "Validar aplicaciones Docker para App Stores ZimaOS con GitHub Actions"
description: "Valida la sintaxis Docker Compose, los metadatos x-casaos y la salida v2 antes de integrar aplicaciones en una tienda compatible con ZimaOS."
type: Docs
author: IceWhaleTech
tip: No elimine este bloque de front matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

La validación evita que archivos Docker Compose o metadatos de aplicación defectuosos lleguen a usuarios de servidores domésticos o NAS OS.

El workflow de validación se define en [`.github/workflows/validator.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/validator.yml).

## Objetivo

Valida las fuentes antes de integrarlas y detecta regresiones con antelación.

## Disparadores

- pull requests con eventos `opened` y `synchronize`
- ejecución manual mediante `workflow_dispatch`

## Comprobaciones principales

1. Ejecutar la acción local `validate-compose` sobre los archivos fuente de las aplicaciones.
2. Subir un artefacto con el informe de validación estructurado.
3. Restaurar las cachés compartidas de compilación.
4. Ejecutar la acción local `build-store-v2` como validación de una compilación completa.
5. Subir el informe de validación de la compilación y escribir el resumen del job.
6. Hacer fallar el workflow si falla la validación de Compose o la compilación v2.

## Acciones locales implicadas

- `validate-compose`: comprueba el `name` superior, `x-casaos.id` y `docker compose config -q`
- `build-store-v2`: envuelve la acción pública `IceWhaleTech/build-appstore-action`
- `write-job-summary`: convierte los informes JSON en el resumen de GitHub Actions

## Por qué es importante

Este workflow protege el contrato del repositorio fuente:

- la sintaxis de Compose debe ser válida
- los nombres deben cumplir las reglas del repositorio
- el repositorio debe seguir generando un `dist/` válido

## Cuándo leer esta página

Utiliza esta página cuando:

- una PR falla durante la validación
- quieres saber qué reglas de la fuente se aplican automáticamente
- estás diseñando una CI de tienda de terceros basada en este repositorio
