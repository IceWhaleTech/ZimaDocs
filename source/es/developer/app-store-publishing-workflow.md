---
title: Workflow de publicación de App Store
seo_title: "Publicar una App Store Docker ZimaOS en GitHub Pages y una CDN"
description: "Publica una App Store Docker compatible con ZimaOS en GitHub Pages, GitHub Releases y una CDN para usuarios de servidores domésticos y homelabs."
type: Docs
author: IceWhaleTech
tip: No elimine este bloque de front matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Este workflow de publicación entrega una App Store Docker mediante alojamiento estático para que puedan consumirla los servidores domésticos ZimaOS y los homelabs.

Esta página documenta [`.github/workflows/release-store.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/release-store.yml), el workflow de publicación utilizado para releases etiquetadas.

## Objetivo

Toma la salida preparada para una release y la publica en los destinos públicos de entrega.

## Disparadores

- push de etiquetas que coincidan con `v*`
- ejecución manual mediante `workflow_dispatch`

Las ejecuciones manuales pueden definir `purge_only` para actualizar los archivos modificados por el despliegue más reciente en `gh-pages` sin volver a compilar ni desplegar la tienda.

## Etapas principales

1. Obtener el código fuente del repositorio.
2. Restaurar las cachés de compilación.
3. Compilar `dist/` del protocolo v2.
4. Compilar la salida zip v1 heredada.
5. Crear los paquetes de la release.
6. Subir los artefactos e informes de la release.
7. Guardar las cachés de compilación.
8. Escribir el resumen de la release.
9. Desplegar `dist/` en `gh-pages`.
10. Recopilar los archivos modificados por el despliegue y actualizar sus entradas de caché en jsDelivr.
11. Crear una GitHub Release con los paquetes adjuntos.

La actualización de caché se ejecuta después del despliegue en `gh-pages`. Compara las revisiones anterior y actual de `gh-pages`, incluye siempre los puntos de entrada de la tienda y envía las rutas a jsDelivr por lotes. El script consulta el resultado de la purga, reintenta fallos HTTP transitorios y falla de forma visible si jsDelivr informa de limitación o de una purga no satisfactoria. Una comprobación posterior compara los hashes de la respuesta de origen y de la CDN para que una solicitud de purga aceptada no se confunda con una caché realmente actualizada.

## Salidas publicadas

Actualmente el workflow publica o adjunta:

- salida estática `dist/` en `gh-pages` para el protocolo v2
- `main.zip` para compatibilidad con v1
- paquetes zip de la release para descargar
- informes JSON de compilación para solucionar problemas

## Por qué es importante

Este workflow es la referencia más cercana si quieres que un repositorio de tienda de terceros siga el proceso de publicación oficial.

Muestra cómo el repositorio oficial separa:

- los artefactos generados durante la compilación
- el despliegue durante la publicación
- los archivos adjuntos a la release para descarga manual

## Workflow de compilación relacionado

El workflow de compilación que no publica se documenta en [Workflow de compilación](./app-store-build-workflow).

Si estás diseñando un repositorio externo, consulta [Reutilizar las acciones oficiales](./app-store-github-actions) para conocer el proceso recomendado.
