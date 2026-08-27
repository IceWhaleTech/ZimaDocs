---
title: Salida de compilación de App Store
seo_title: "Salida de App Store ZimaOS: Docker Compose, metadatos y recursos"
description: "Comprende los archivos Docker Compose generados, metadatos, índices localizados, recursos y hashes de contenido de las App Stores ZimaOS."
type: Docs
author: IceWhaleTech
tip: No elimine este bloque de front matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Estos son los archivos que consume un cliente de servidor doméstico ZimaOS o de homelab cuando termina la compilación de la App Store Docker.

El protocolo se consume desde los archivos generados dentro de `dist/`.

## Archivos de salida

El script de compilación puede generar:

- `dist/store.json`
- `dist/store.{locale}.json`
- `dist/index.json`
- `dist/index.{locale}.json`
- `dist/apps/<app-id>/docker-compose.yml`
- `dist/apps/<app-id>/docker-compose.{architecture}.yml`
- `dist/apps/<app-id>/meta.json`
- `dist/apps/<app-id>/meta.{locale}.json`
- `dist/apps/<app-id>/assets/*`

## `index.json`

`index.json` es el listado de aplicaciones de toda la tienda.

Cada elemento de aplicación incluye datos como:

- `id`
- `title`
- `tagline`
- `category`
- `version`
- `author`
- `developer`
- `architectures`
- `icon`
- `thumbnail`
- `compose_url`
- `meta_url`
- `content_hash`

### Significado de los campos del listado

#### `id`

- identificador normalizado a partir del `x-casaos.id` superior de la fuente
- también se usa como nombre del directorio de salida en `dist/apps/`

#### `title`

- nombre visible de la aplicación resuelto para el locale de destino

#### `tagline`

- resumen breve resuelto para el locale de destino

#### `category`

- valor de categoría estandarizado utilizado para mostrar y agrupar

#### `version`

- versión de la aplicación procedente de `x-casaos.version`
- importante para que el usuario comprenda las actualizaciones y para el seguimiento de versiones

#### `author`

- atribución de quien empaqueta la aplicación o de la tienda

#### `developer`

- atribución del proyecto de origen

#### `architectures`

- lista de arquitecturas de CPU compatibles
- la compilación la utiliza para generar variantes de Compose por arquitectura cuando es posible

#### `icon`

- ruta o URL del recurso compilado relativa a `--base-url`

#### `thumbnail`

- ruta o URL de la miniatura compilada relativa a `--base-url`

#### `compose_url`

- ruta al archivo Compose compilado de la aplicación

#### `meta_url`

- ruta al archivo de metadatos compilado de la aplicación

#### `content_hash`

- hash que representa todos los archivos generados relevantes de la aplicación
- se utiliza para detectar actualizaciones incrementales en el cliente

Se genera como:

- `dist/index.json`
- `dist/index.{locale}.json` cuando al menos una aplicación define explícitamente ese locale en campos que aparecen en el listado

## `docker-compose.yml` compilado

Los archivos Compose compilados conservan únicamente los campos `x-casaos` orientados a la ejecución:

- `id`
- `main`
- `index`
- `port_map`
- `scheme`
- `icon`
- `title`

Todos los metadatos se eliminan del Compose compilado y se mueven a `meta.json`.

### Comportamiento del Compose compilado

El Compose compilado no es una copia directa del Compose fuente.

Durante la compilación:

- se eliminan los metadatos `x-casaos` que no son de ejecución
- se reescribe `icon`
- el `title` indexado por locale se resuelve como una cadena simple para el locale generado

## `meta.json` compilado

El `meta.json` compilado contiene los metadatos de la aplicación, incluidos campos relacionados con actualizaciones y presentación:

- `version`
- `update_at`
- `release_note`
- `website`
- `repo`
- `support`
- `docs`

En la práctica, `version` no debe tratarse como un extra decorativo. Es un campo clave para comunicar las actualizaciones de la aplicación en la nueva tienda.

`title` e `icon` no se escriben deliberadamente en `meta.json`, porque siguen formando parte de la información de ejecución y presentación del Compose compilado.

### Grupos de campos de metadatos compilados

En la práctica, `meta.json` agrupa:

- contenido descriptivo como `tagline` y `description`
- recursos de presentación como `thumbnail` y `screenshot_link`
- atribución como `author` y `developer`
- datos de compatibilidad como `architectures`
- campos opcionales de mejora como `version`, `update_at` y `release_note`

## Comportamiento de las rutas

Las rutas generadas relativas a una aplicación suelen tener este aspecto:

- `apps/com.example.myapp/docker-compose.yml`
- `apps/com.example.myapp/meta.json`
- `apps/com.example.myapp/assets/icon.svg`

En estos ejemplos, `com.example.myapp` es el valor normalizado del `x-casaos.id` fuente.

Estas rutas se resuelven con respecto al `--base-url` configurado.

Por tanto, la misma compilación lógica puede publicarse en diferentes hosts públicos cambiando `--base-url`.

## Hash de contenido

`content_hash` se calcula a partir de los archivos del directorio generado de cada aplicación, entre ellos:

- Compose compilado
- variantes de Compose específicas de arquitectura
- variantes de metadatos
- recursos

Esto permite realizar actualizaciones incrementales eficientes en el cliente.

## Comportamiento de las actualizaciones

Las comprobaciones de actualizaciones del cliente se basan en `index.json` y en el `content_hash` de cada aplicación.

Esto significa que:

- las aplicaciones sin cambios se omiten
- las aplicaciones modificadas solo vuelven a descargar sus archivos Compose y de metadatos
- la tienda no necesita descargar de nuevo el paquete completo en cada actualización

## Errores comunes

- suponer que los archivos de `dist/` deben escribirse a mano
- suponer que `meta.json` contiene `title`
- tratar `content_hash` como un campo de versión manual
- olvidar que los archivos de índice y metadatos por locale solo existen para locales definidos explícitamente
