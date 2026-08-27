---
title: Crear una App Store de ZimaOS desde cero
seo_title: "Crear una App Store Docker para ZimaOS, servidores domésticos y homelabs"
description: "Crea una tienda de aplicaciones Docker compatible con ZimaOS para un servidor doméstico self-hosted, un homelab o un NAS OS. Define aplicaciones, genera la salida v2 y publica archivos estáticos."
type: Docs
author: IceWhaleTech
tip: No elimine este bloque de front matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Esta guía explica cómo crear un catálogo de aplicaciones Docker y self-hosted compatible con ZimaOS para un servidor doméstico, un homelab o un NAS OS. Incluye los archivos fuente mínimos, el proceso de compilación v2 y la ruta de publicación estática.

Utiliza este procedimiento cuando vayas a crear una nueva tienda de terceros compatible con ZimaOS.

Si ya tienes una tienda v1 basada en archivos zip, consulta primero [Estrategia de migración](./app-store-v1-v2-migration). La migración reutiliza la mayor parte del árbol `Apps/` existente y requiere menos pasos.

## Archivos fuente mínimos

Una tienda nueva que use el protocolo v2 comienza con:

- `store-config.json`: identidad de la tienda y textos localizados de nivel de tienda.
- `supported-languages.json`: locales candidatos para la salida generada.
- `Apps/<AppName>/docker-compose.yml`: un archivo Compose fuente por aplicación.
- recursos de la aplicación como `icon.svg`, `thumbnail.png` y `screenshot-1.png`.

`scripts/build_dist.sh` es opcional, pero se recomienda para compilaciones locales. CI puede invocar directamente `IceWhaleTech/build-appstore-action`.

## Proceso de compilación

1. Crea la estructura descrita en [Estructura del repositorio](./app-store-repository-structure).
2. Añade `store-config.json` con un `store_id` estable, `name` localizado, `maintainer` y una descripción opcional.
3. Añade `supported-languages.json` con los locales que debe considerar la compilación.
4. Añade un directorio por aplicación dentro de `Apps/`.
5. Coloca la configuración de ejecución Docker en las secciones estándar de Compose.
6. Coloca los metadatos de la tienda en el bloque superior `x-casaos`.
7. Ejecuta la acción de compilación o `./scripts/build_dist.sh`.
8. Publica el directorio `dist/` generado en un alojamiento estático.

## Lista de comprobación de la primera aplicación

Para cada aplicación, comprueba que el Compose fuente incluya:

- `name` en el nivel superior de Compose
- `services`
- `x-casaos.id` en el nivel superior
- `x-casaos.main`
- `x-casaos.index`
- `x-casaos.port_map`
- `x-casaos.icon`
- `x-casaos.title`
- `x-casaos.category`

Metadatos recomendados:

- `tagline`
- `description`
- `author`
- `developer`
- `architectures`
- `version`
- `website`, `repo`, `support` o `docs` cuando estén disponibles

## Destino de publicación

Las tiendas que usan el protocolo v2 se consumen como archivos estáticos. Cualquier alojamiento estático HTTPS es válido:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Nginx self-hosted
- cualquier CDN o almacenamiento de objetos que sirva los archivos generados sin modificarlos

Configura `base-url` de la compilación con la URL pública final desde la que se podrá acceder a `dist/`. Esta URL se escribe en las rutas generadas de archivos y recursos de las aplicaciones.

## Páginas siguientes

1. [Estructura del repositorio](./app-store-repository-structure)
2. [Configuración de la tienda](./app-store-config)
3. [Compose y x-casaos](./app-store-compose-x-casaos)
4. [Salida de compilación](./app-store-build-output)
5. [Introducción a CI/CD](./app-store-ci-cd)
