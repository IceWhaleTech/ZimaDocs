---
title: CI/CD de App Store
seo_title: "CI/CD para App Stores Docker en ZimaOS y servidores domésticos"
description: "Valida, compila y publica una App Store Docker self-hosted mediante CI/CD para ZimaOS, servidores domésticos, homelabs y despliegues NAS OS."
type: Docs
author: IceWhaleTech
tip: No elimine este bloque de front matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Utiliza este modelo de CI/CD para validar y publicar un catálogo de aplicaciones Docker para un servidor doméstico ZimaOS, un laboratorio self-hosted o un homelab más amplio.

CI/CD explica cómo los archivos fuente se convierten en artefactos de tienda validados, compilados y publicados.

Para la mayoría de las tiendas de terceros, el objetivo práctico es:

1. validar los archivos Compose de las aplicaciones en las pull requests
2. compilar `dist/` v2
3. compilar opcionalmente el archivo heredado v1 `dist/store/main.zip`
4. publicar `dist/` en un alojamiento estático

## División actual de los workflows oficiales

Este repositorio usa tres workflows principales de GitHub Actions:

- [`validator.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/validator.yml): valida los archivos Compose y ejecuta una comprobación completa de compilación v2.
- [`release.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/release.yml): compila artefactos v2 y v1 para inspección o reutilización.
- [`release-store.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/release-store.yml): publica la salida etiquetada de la tienda en `gh-pages` y GitHub Releases.

## Responsabilidades de los workflows

| Workflow | Cuándo se ejecuta | Objetivo principal | Salida principal |
|---|---|---|---|
| Validator | pull request o ejecución manual | detectar rápidamente fuentes no válidas | informes de validación y compilación |
| Release | push a `main` o ejecución manual | producir artefactos reutilizables | `dist/`, `main.zip`, informes |
| Release-store | etiqueta de release o ejecución manual | publicar la tienda | `gh-pages`, recursos de GitHub Release |

## Acciones locales del repositorio

Estos workflows se componen de pequeñas acciones:

- `validate-compose`: valida los archivos Compose fuente.
- `build-store-v2`: wrapper local del repositorio para `IceWhaleTech/build-appstore-action`.
- `build-store-v1`: compila el archivo heredado `main.zip`.
- `write-job-summary`: convierte el JSON del informe en el resumen de GitHub Actions.
- `render-report`: convierte el JSON del informe en HTML cuando es necesario.

Para responsables externos, el punto de entrada público recomendado es `IceWhaleTech/build-appstore-action`. Consulta [Reutilizar las acciones oficiales](./app-store-github-actions).

## Informes de compilación y resumen del job

La acción de compilación v2 escribe un informe JSON estructurado cuando se configura `report-json`. Este repositorio lo sube como artefacto y lo presenta en el resumen del job de GitHub Actions.

Para consultarlo:

1. Abre la ejecución de GitHub Actions.
2. Abre el job correspondiente, como `validate`, `build` o `release`.
3. Lee el resumen situado al principio de la página del job.
4. Descarga el artefacto del informe cuando necesites todos los detalles JSON.

Nombres habituales de los artefactos:

- `validation-report`
- `build-v2-validation-report`
- `build-v2-report`
- `release-build-v2-report`

El resumen incluye el estado de compilación, recuentos de aplicaciones, cantidades de advertencias y errores, problemas principales, artefactos generados y contexto del repositorio.

## Comportamiento ante errores de compilación

La acción separa los problemas de cada aplicación de los fallos globales.

Los errores de una aplicación se recopilan para poder procesar las aplicaciones siguientes. Si existe cualquier error de aplicación, se escribe el informe y la compilación v2 termina fallando. Algunos ejemplos son metadatos no válidos, ausencia de `x-casaos.id`, recursos referenciados que faltan, YAML no válido o incompatibilidad de arquitectura.

Las advertencias se notifican sin hacer fallar la compilación v2 cuando todavía se puede generar la salida. Algunos ejemplos son la ausencia de `supported-languages.json`, directorios de aplicaciones omitidos por no tener un `x-casaos` superior, límites del registro, fallos al fijar el digest de una imagen, fallos al estimar su tamaño o una `x-casaos.version` que no usa semver.

Los fallos globales detienen la compilación de todo el repositorio. Algunos ejemplos son un `base-url` no válido, la ausencia de `Apps/`, JSON no válido en la configuración de la tienda, un `store_id` no válido, un `supported-languages.json` no válido o fallos al preparar dependencias.

## Comportamiento de compatibilidad

Los workflows oficiales generan deliberadamente ambas salidas:

- archivos estáticos v2 para clientes nuevos
- `dist/store/main.zip` v1 para clientes heredados

Si tu tienda es nueva y no necesita compatibilidad con v1, puedes omitir el paso de compilación v1.

## Páginas siguientes

- [Reutilizar las acciones oficiales](./app-store-github-actions)
- [Workflow de validación](./app-store-validation-workflow)
- [Workflow de compilación](./app-store-build-workflow)
- [Workflow de publicación](./app-store-publishing-workflow)
