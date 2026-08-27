---
title: Preguntas frecuentes para desarrolladores de App Store
seo_title: "Preguntas frecuentes de App Store Docker ZimaOS para servidores self-hosted"
description: "Respuestas sobre IDs Docker, localización, compilaciones, alojamiento, URL de CDN y compatibilidad v1 en App Stores ZimaOS y homelab."
type: Docs
author: IceWhaleTech
tip: No elimine este bloque de front matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Estas respuestas cubren preguntas habituales de responsables de App Stores Docker y self-hosted para ZimaOS, servidores domésticos, homelabs y entornos NAS OS.

Esta página reúne respuestas breves a preguntas recurrentes sobre tiendas que usan el protocolo v2, la migración, el alojamiento y la compatibilidad.

## ¿Puedo usar el mismo ID de aplicación que la tienda oficial?

Sí. Las aplicaciones de la tienda oficial y las de tiendas de terceros están aisladas en ZimaOS y pueden coexistir aunque su `id` fuente coincida.

En una tienda de terceros, sigue eligiendo IDs estables con formato de dominio inverso para que tus usuarios reciban actualizaciones predecibles.

## ¿Qué ocurre si otra tienda de terceros usa el mismo ID que la mía?

ZimaOS aísla las instalaciones según el contexto de la tienda, por lo que los mismos IDs fuente en tiendas diferentes no colisionan en el nivel del proyecto Docker.

## ¿Necesito `supported-languages.json`?

Sí, para la estructura fuente v2 de este repositorio. Declara los locales candidatos que debe considerar la compilación.

No crea automáticamente una salida localizada por sí solo. Los archivos específicos de locale solo se generan cuando existen campos localizados coincidentes en los archivos fuente.

## ¿Necesito ejecutar el script de compilación?

Sí. La compilación transforma los archivos fuente en la salida de protocolo consumida por los clientes:

- `store-config.json` en `store.json`
- Compose fuente en Compose compilado y `meta.json`
- listados de toda la tienda con `content_hash`
- recursos optimizados y salidas específicas de locale

## ¿Qué problemas son advertencias y cuáles hacen fallar el workflow?

La acción de compilación intenta seguir procesando aplicaciones independientes para que el resumen muestre varios problemas en una sola ejecución.

Advertencias que no hacen fallar la compilación v2:

- ausencia de `supported-languages.json`: la compilación recurre a `en_US`
- ausencia de `store-config.json`: todavía puede generarse la salida de las aplicaciones, pero se omite `store.json`
- directorios de aplicaciones sin un `x-casaos` superior: la aplicación se omite
- límites del registro, fallos al fijar el digest o al estimar el tamaño de una imagen: la aplicación sigue compilándose cuando es posible y el problema se notifica como advertencia
- fallos de optimización de imágenes o de conversión SVG a PNG alternativa: se conserva el recurso original cuando es posible y la advertencia aparece en los logs
- `x-casaos.version` que no usa semver: la versión se omite en `index.json`

Errores recopilados por aplicación que hacen fallar la compilación v2 después de procesar las demás aplicaciones:

- metadatos no válidos, incluida la ausencia o invalidez de `x-casaos.id`
- YAML de aplicación no válido
- icono, miniatura o captura referenciados que faltan
- arquitectura declarada no compatible con la imagen del contenedor
- otros fallos de procesamiento de Compose, metadatos, recursos o registro en el nivel de la aplicación

Errores que detienen la compilación globalmente:

- `base-url` no válido
- ausencia del directorio `Apps/`
- `store-config.json` o `store_id` no válidos
- JSON no válido en `supported-languages.json`
- fallos de preparación de dependencias antes de iniciar el script de compilación

## ¿Dónde puedo consultar el resumen de compilación?

Abre la ejecución de GitHub Actions, selecciona el job de compilación o validación y consulta el resumen al principio de la página. Este repositorio genera el resumen desde informes JSON estructurados.

El informe sin procesar también se sube como artefacto del workflow, por ejemplo `build-v2-report`, `build-v2-validation-report` o `validation-report`.

## ¿Puedo alojar la tienda en otro lugar que no sea GitHub Pages?

Sí. Cualquier alojamiento estático HTTPS funciona siempre que los archivos generados sean accesibles.

## ¿Tengo que usar jsDelivr?

No. `jsDelivr` es solo una posible ruta de CDN. Cualquier `base-url` correcto es válido.

## ¿Por qué es importante `base-url`?

Porque los datos de listado generados contienen rutas de recursos y archivos de aplicaciones que necesitan un prefijo de host público resoluble.

Configúralo con la URL pública final desde la que se sirve `dist/`.

## ¿Puedo conservar la compatibilidad con v1?

Sí. Sigue generando el artefacto heredado:

```text
dist/store/main.zip
```

El repositorio oficial compila los archivos estáticos v2 y, después, genera este zip v1 desde el mismo árbol fuente.

## ¿Cuál es la estructura mínima viable de una tienda?

```text
my-appstore/
├── Apps/
│   └── MyApp/
│       ├── docker-compose.yml
│       └── icon.svg
├── store-config.json
└── supported-languages.json
```

Añade `scripts/build_dist.sh` si quieres un ayudante local. CI puede invocar directamente `IceWhaleTech/build-appstore-action`.
