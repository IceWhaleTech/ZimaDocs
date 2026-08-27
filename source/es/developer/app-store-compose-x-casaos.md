---
title: Docker Compose y x-casaos
seo_title: "Referencia de Docker Compose y x-casaos para aplicaciones ZimaOS"
description: "Define servicios Docker y metadatos x-casaos para aplicaciones self-hosted distribuidas mediante ZimaOS, servidores domésticos, homelabs y entornos NAS OS."
type: Docs
author: IceWhaleTech
tip: No elimine este bloque de front matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Utiliza esta referencia al empaquetar servicios Docker como aplicaciones self-hosted para ZimaOS u otro NAS OS compatible.

Cada aplicación se encuentra en `Apps/<folder>/docker-compose.yml`.

## Alcance de esta página

Esta página se centra en el bloque superior `x-casaos`, que constituye el contrato de metadatos específico de la tienda utilizado por el pipeline de compilación.

Para el resto del archivo Compose:

- sigue la referencia oficial de archivos Docker Compose: https://docs.docker.com/reference/compose-file/
- utiliza la referencia oficial de `services` para definir servicios: https://docs.docker.com/reference/compose-file/services/
- utiliza la referencia oficial del `name` superior: https://docs.docker.com/reference/compose-file/version-and-name/

En otras palabras:

- la configuración estándar de ejecución de contenedores pertenece a Docker Compose
- los metadatos de la aplicación visibles en la tienda pertenecen a `x-casaos`

## Modelo fuente

Debes crear un archivo Compose por aplicación. Ese archivo contiene:

- contenido Docker Compose estándar
- un bloque `x-casaos` en el nivel superior

El nombre del directorio fuente dentro de `Apps/` no es la identidad del protocolo. El proceso de compilación obtiene la identidad del propio contenido de Compose, especialmente del `name` superior y de `x-casaos.id`.

## Ejemplo mínimo

```yaml
name: my-app
services:
  my-app:
    image: myrepo/my-app:1.0.0
    ports:
      - target: 8080
        published: "8080"
        protocol: tcp
    restart: unless-stopped
x-casaos:
  id: com.example.myapp
  main: my-app
  index: /
  port_map: "8080"
  scheme: http
  icon: https://cdn.example.com/my-app/icon.svg
  title:
    en_US: My App
  tagline:
    en_US: Does amazing things
  description:
    en_US: A great app that does amazing things.
  author: Your Name
  developer: Original Developer
  category: Productivity
  architectures:
    - amd64
  version: "1.0.0"
  update_at: "2026-03-01"
  release_notes:
    en_US: First release
```

## Reglas de Compose fuera de `x-casaos`

Para todo el contenido que no pertenezca a `x-casaos`, este repositorio no redefine la semántica de Docker Compose. Utiliza la documentación oficial como fuente de referencia:

- Referencia de archivos Compose: https://docs.docker.com/reference/compose-file/
- Referencia de servicios: https://docs.docker.com/reference/compose-file/services/
- Referencia del `name` del proyecto: https://docs.docker.com/reference/compose-file/version-and-name/
- Comportamiento de nombres de proyecto: https://docs.docker.com/compose/how-tos/project-name/

Los requisitos específicos del repositorio se limitan a:

- Compose debe ser YAML válido
- Compose debe superar `docker compose config -q`
- el `name` superior debe cumplir las reglas de validación del repositorio
- los bloques heredados `services.<name>.x-casaos` en el nivel de servicio se eliminan durante la compilación v2

## Descripción general de x-casaos

El bloque superior `x-casaos` contiene dos clases de campos:

- campos de ejecución y entrada visual que permanecen en el `docker-compose.yml` compilado
- campos de metadatos que se extraen al `meta.json` compilado

## Matriz de campos

| Campo | Tipo | Obligatorio | Localizado en la fuente | Ubicación en la salida compilada |
|---|---|---:|---:|---|
| `id` | `string` | Sí | No | Compose compilado + salidas derivadas de `meta.json`/índice |
| `main` | `string` | Sí | No | Compose compilado |
| `index` | `string` | Sí en la práctica | No | Compose compilado |
| `port_map` | `string` | Sí | No | Compose compilado |
| `scheme` | `string` | No | No | Compose compilado |
| `icon` | `string` | Sí | No | Compose compilado; se reescribe durante la compilación |
| `title` | `object` | Sí | Sí | Compose compilado; se resuelve por locale |
| `tagline` | `object` | Recomendado | Sí | `meta.json`, listado del índice |
| `description` | `object` | Recomendado | Sí | `meta.json` |
| `thumbnail` | `string` | No | No | `meta.json` como ruta de recurso compilado |
| `screenshot_link` | `string[]` | No | No | `meta.json` como rutas de recursos compilados |
| `tips` | `object` | No | Sí | `meta.json` |
| `author` | `string` | Recomendado | No | `meta.json`, listado del índice |
| `developer` | `string` | Recomendado | No | `meta.json`, listado del índice |
| `category` | `string` | Sí | No | `meta.json`, listado del índice |
| `architectures` | `string[]` | Recomendado | No | `meta.json`, listado del índice |
| `version` | `string` | Sí | No | `meta.json`, listado del índice |
| `update_at` | `string` | No | No | `meta.json` |
| `release_notes` | `object` | No | Sí | `meta.json.release_note` |
| `website` | `string` | No | No | `meta.json` |
| `repo` | `string` | No | No | `meta.json` |
| `support` | `string` | No | No | `meta.json` |
| `docs` | `string` | No | No | `meta.json` |

## Campos de ejecución

### `id`

Objetivo:
Identidad estable de la aplicación en el protocolo de la tienda.

Reglas:

- obligatorio en el Compose fuente de todas las aplicaciones
- debe usar un estilo de dominio inverso, como `com.example.myapp`
- solo se permiten letras, dígitos, `.`, `_` y `-`
- se normaliza a minúsculas durante la compilación
- debe contener al menos dos segmentos no vacíos separados por puntos

Comportamiento de compilación:

- permanece en el Compose compilado
- también se propaga a los metadatos y datos de listado compilados

Errores comunes:

- tratar el nombre del directorio de la aplicación como identidad
- usar una cadena corta que no siga el estilo de dominio

### `main`

Objetivo:
Indica el servicio que proporciona la interfaz principal orientada al navegador.

Reglas:

- obligatorio
- debe coincidir con un nombre de servicio dentro de `services`
- debe apuntar al servicio web que usa el usuario, no a un contenedor auxiliar

Comportamiento de compilación:

- permanece en el Compose compilado

Errores comunes:

- hacer que `main` apunte a un contenedor de base de datos

### `index`

Objetivo:
Define la ruta que se añade a la URL de entrada de la aplicación cuando los clientes abren la interfaz.

Reglas:

- normalmente `/`
- debe reflejar la ruta de entrada web real de la aplicación

Comportamiento de compilación:

- permanece en el Compose compilado

### `port_map`

Objetivo:
Define el puerto publicado de la interfaz web expuesto a los usuarios.

Reglas:

- obligatorio
- debe ser una cadena YAML, por ejemplo `"8080"`
- debe coincidir con el puerto que los usuarios abren realmente en el navegador

Comportamiento de compilación:

- permanece en el Compose compilado

Errores comunes:

- escribir `port_map: 8080` sin comillas

### `scheme`

Objetivo:
Especifica si la aplicación debe abrirse con `http` o `https`.

Reglas:

- opcional
- debe coincidir con el protocolo expuesto real

Comportamiento de compilación:

- permanece en el Compose compilado

### `icon`

Objetivo:
Proporciona la URL del icono del panel de la aplicación instalada.

Reglas:

- obligatorio
- el Compose fuente puede usar cualquier URL accesible
- la salida de compilación reescribe el campo con la URL del recurso compilado bajo `--base-url`

Comportamiento de compilación:

- permanece en el Compose compilado
- se reescribe para apuntar a `apps/{app-id}/assets/icon.*`

Errores comunes:

- suponer que este valor fuente exacto permanecerá sin cambios después de la compilación

### `title`

Objetivo:
Proporciona el nombre visible de la aplicación.

Reglas:

- obligatorio
- objeto indexado por locale en la fuente
- debe incluir `en_US`

Comportamiento de compilación:

- permanece en el Compose compilado
- se resuelve como texto de cadena simple en cada salida de locale generada

Errores comunes:

- escribir una cadena simple en lugar de un objeto indexado por locale

## Campos de metadatos

### `tagline`

Objetivo:
Resumen breve de una línea utilizado en los listados y detalles de la aplicación.

Reglas:

- recomendado
- objeto indexado por locale en la fuente

Comportamiento de compilación:

- se extrae al `meta.json` compilado
- también puede emitirse en datos de listado como `index.json`

### `description`

Objetivo:
Descripción detallada de la aplicación.

Reglas:

- recomendado
- objeto indexado por locale en la fuente
- puede contener texto Markdown, según la compatibilidad del cliente

Comportamiento de compilación:

- se extrae al `meta.json` compilado
- se resuelve como cadena simple en cada archivo de locale generado

### `thumbnail`

Objetivo:
Proporciona una imagen promocional más grande para enriquecer la presentación de la aplicación.

Reglas:

- opcional
- normalmente hace referencia a un archivo del directorio de la aplicación

Comportamiento de compilación:

- se emite en `meta.json` como ruta de recurso compilado
- el archivo fuente se transforma en una salida dentro de `apps/{app-id}/assets/`

### `screenshot_link`

Objetivo:
Proporciona una o varias capturas para la vista detallada de la aplicación.

Reglas:

- opcional
- matriz de nombres de archivo de capturas en la fuente

Comportamiento de compilación:

- se emite en `meta.json` como rutas de recursos compilados

### `tips`

Objetivo:
Contiene indicaciones para el usuario antes o durante la instalación.

Reglas:

- opcional
- objeto cuyos valores son texto indexado por locale

Ejemplo:

```yaml
tips:
  before_install:
    en_US: This app requires at least 4GB RAM.
    zh_CN: This app requires at least 4GB RAM.
```

Comportamiento de compilación:

- se extrae al `meta.json` compilado
- los valores de locale se resuelven para cada locale generado

### `author`

Objetivo:
Identifica a quien empaqueta o mantiene la definición de la aplicación dentro de la tienda.

Reglas:

- recomendado
- cadena simple

Comportamiento de compilación:

- se emite en `meta.json`
- suele incluirse en los datos de listado de la aplicación

### `developer`

Objetivo:
Identifica el proyecto de origen o al desarrollador original.

Reglas:

- recomendado
- cadena simple

Comportamiento de compilación:

- se emite en `meta.json`
- suele incluirse en los datos de listado de la aplicación

### `category`

Objetivo:
Asigna la aplicación a una categoría estandarizada de la tienda ZimaOS.

Reglas:

- en la práctica es obligatorio para una visualización correcta
- debe ser uno de estos valores:
  - `Media`
  - `Productivity`
  - `Home`
  - `Networking`
  - `AI`
  - `Finance`
  - `Social`
  - `Developer`
  - `Others`

Comportamiento de compilación:

- se emite en `meta.json`
- suele incluirse en los datos de listado de la aplicación

Errores comunes:

- usar nombres de categoría libres

### `architectures`

Objetivo:
Declara las arquitecturas de CPU compatibles con el paquete de la aplicación.

Reglas:

- recomendado
- matriz de cadenas
- los valores comunes incluyen `amd64` y `arm64`

Comportamiento de compilación:

- se emite en `meta.json`
- suele incluirse en los datos de listado de la aplicación

### `version`

Objetivo:
Versión de la aplicación que se muestra a los usuarios y permite comprender las actualizaciones.

Reglas:

- obligatoria para las aplicaciones publicadas en la nueva tienda
- cadena simple
- debe cambiar cuando una actualización publicada deba presentarse a los usuarios como una nueva versión
- debe usar un valor de estilo semver siempre que sea posible, por ejemplo `1.2.3`

Comportamiento de compilación:

- se emite en `meta.json`
- también puede aparecer en los datos de listado

Por qué es importante:

- las decisiones futuras de actualización dependen de este campo para determinar a qué versión se moverán los usuarios
- sin él, usuarios y clientes deben recurrir a señales de cambio de menor nivel, como `content_hash`
- una versión ausente o que no use semver reduce la transparencia de las actualizaciones y puede omitirse de algunas salidas de listado

Errores comunes:

- considerar `version` como un campo meramente decorativo
- olvidar actualizarlo al publicar un cambio importante de la aplicación
- usar cadenas arbitrarias que no se comportan como una versión normal

### `update_at`

Objetivo:
Fecha de actualización opcional que enriquece la presentación de la tienda.

Reglas:

- opcional
- formato recomendado: `YYYY-MM-DD`

Comportamiento de compilación:

- se emite en `meta.json`

### `release_notes`

Objetivo:
Proporciona notas de la versión o un resumen de cambios.

Reglas:

- opcional
- objeto indexado por locale en la fuente
- el nombre del campo fuente sigue siendo `release_notes`

Comportamiento de compilación:

- se extrae al `meta.json` compilado
- cambia de nombre a `release_note`

Errores comunes:

- escribir `release_note` en la fuente en lugar de `release_notes`

### `website`

Objetivo:
Enlaza al producto o página principal oficial.

Reglas:

- opcional
- URL como cadena simple

Comportamiento de compilación:

- se emite en `meta.json`

### `repo`

Objetivo:
Enlaza al repositorio del código fuente o del proyecto.

Reglas:

- opcional
- URL como cadena simple

Comportamiento de compilación:

- se emite en `meta.json`

### `support`

Objetivo:
Enlaza a la página de soporte, gestor de incidencias, foro o centro de ayuda.

Reglas:

- opcional
- URL como cadena simple

Comportamiento de compilación:

- se emite en `meta.json`

### `docs`

Objetivo:
Enlaza a la documentación de la aplicación empaquetada.

Reglas:

- opcional
- URL como cadena simple

Comportamiento de compilación:

- se emite en `meta.json`

## Qué permanece en el Compose compilado y qué se mueve a `meta.json`

Permanece en el Compose compilado:

- `id`
- `main`
- `index`
- `port_map`
- `scheme`
- `icon`
- `title`

Se mueve al `meta.json` compilado:

- `tagline`
- `description`
- `thumbnail`
- `screenshot_link`
- `tips`
- `author`
- `developer`
- `category`
- `architectures`
- `version`
- `update_at`
- `release_note`
- `website`
- `repo`
- `support`
- `docs`

## Regla de ubicación de campos

Utiliza esta separación al crear el Compose fuente:

- la información de ejecución y entrada pertenece a los campos `x-casaos` de ejecución
- los metadatos de presentación de la tienda pertenecen a los campos `x-casaos` de metadatos
- los detalles de ejecución del contenedor pertenecen a secciones estándar de Docker Compose como `services`, `volumes`, `networks` y `environment`

## Resumen de errores comunes

- usar cadenas simples donde se esperan objetos indexados por locale
- hacer que `main` apunte a un servicio sin interfaz de usuario
- usar un entero en lugar de una cadena entre comillas para `port_map`
- usar valores de categoría no oficiales
- olvidar que `title` permanece en el Compose compilado mientras `tagline` se mueve a `meta.json`
