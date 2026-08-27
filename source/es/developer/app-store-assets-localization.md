---
title: Recursos y localización de App Store
seo_title: "Recursos y localización de aplicaciones Docker para App Stores de ZimaOS"
description: "Prepara iconos, miniaturas, capturas y metadatos localizados para aplicaciones Docker self-hosted distribuidas mediante ZimaOS y otros NAS OS."
type: Docs
author: IceWhaleTech
tip: No elimine este bloque de front matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Unos recursos y datos de locale coherentes permiten que las aplicaciones Docker self-hosted se muestren correctamente en interfaces de servidores domésticos y NAS OS.

Esta página reúne dos comportamientos del protocolo que influyen mucho en la salida generada: el procesamiento de recursos y la expansión de texto localizado.

## Recursos

Todos los recursos compilados se escriben en `apps/{app-id}/assets/`.

`{app-id}` es el valor normalizado del `x-casaos.id` superior de la fuente.

### Formatos fuente compatibles

| Recurso | Formatos de entrada | Comportamiento de salida |
|------|---------------|----------------|
| `icon` | `.svg`, `.png`, `.jpg`, `.webp` | SVG se conserva y puede obtener un fallback PNG; los iconos raster se copian |
| `thumbnail` | `.png`, `.jpg`, `.jpeg`, `.webp` | se optimiza cuando hay herramientas disponibles; la extensión final depende de la salida generada |
| `screenshot-{n}` | `.png`, `.jpg`, `.jpeg`, `.webp` | se optimiza cuando hay herramientas disponibles; la extensión final depende de la salida generada |

### Detalles del comportamiento de los recursos

#### `icon`

- se espera en todas las aplicaciones
- es preferible proporcionarlo como `icon.svg`
- también puede generar una alternativa PNG si las herramientas están disponibles

#### `thumbnail`

- opcional
- se usa principalmente para una presentación más rica de la tienda
- se normaliza como ruta de recurso compilado

#### `screenshot-{n}`

- opcional
- admite varias capturas numeradas
- se normaliza como ruta de recurso compilado

## Recomendaciones para los recursos

- utiliza preferentemente `icon.svg` cuando sea posible
- usa una miniatura específica para la presentación en la tienda
- procura que las capturas representen la interfaz real

Los recursos raster distintos del icono se optimizan durante la compilación y pueden reducirse si son demasiado anchos.
Según la versión de la acción de compilación y las herramientas de imagen disponibles, las miniaturas y capturas generadas pueden conservar la extensión original o emitirse como archivos WebP optimizados. Considera las rutas escritas en `index.json` y `meta.json` como la salida autoritativa.

## Comportamiento de los iconos

Los iconos aparecen en dos ubicaciones:

- en los listados de aplicaciones, mediante la ruta de icono emitida en `index.json`
- en la entrada del panel de la aplicación instalada, mediante `x-casaos.icon` en el Compose compilado

Durante la compilación, la URL del icono del Compose compilado se reescribe como la URL del recurso generado bajo el `--base-url` configurado.

## Claves locale

Las claves locale deben usar el formato `ll_CC`:

- `en_US`
- `zh_CN`
- `de_DE`

El script normaliza automáticamente las claves locale, pero los archivos fuente deben seguir usando el formato esperado.

## Campos fuente de localización

Texto localizado de nivel de tienda:

- `store-config.json.name`
- `store-config.json.description`

Texto localizado de nivel de aplicación:

- `x-casaos.title`
- `x-casaos.tagline`
- `x-casaos.description`
- `x-casaos.release_notes`
- valores indexados por locale dentro de `x-casaos.tips`

## Salida multilingüe

Los locales candidatos proceden de `supported-languages.json`.

Comportamiento importante:

- siempre se genera la salida predeterminada
- los archivos de locale solo se generan cuando dicho locale está definido explícitamente
- si falta `supported-languages.json`, solo se genera la salida `en_US`

## Reglas de generación por locale

Considera la generación por locale como un proceso de dos etapas:

1. `supported-languages.json` declara qué locales son candidatos.
2. Los campos de localización de la fuente determinan qué archivos específicos de locale se generan realmente.

Por tanto, un locale puede aparecer en la lista de candidatos y no producir salida si ningún campo de la tienda o de las aplicaciones lo define explícitamente.

## Ejemplo

Fuente:

```yaml
title:
  en_US: My App
  zh_CN: 我的应用
```

Salida posible:

- `dist/index.json`
- `dist/index.zh_CN.json`
- `dist/apps/com.example.myapp/meta.json`
- `dist/apps/com.example.myapp/meta.zh_CN.json`

Aquí `com.example.myapp` representa el `x-casaos.id` fuente normalizado.

## Errores comunes

- esperar que `supported-languages.json` cree por sí solo archivos localizados
- suponer que los recursos se duplican para cada locale
- olvidar que los iconos afectan tanto al listado como al panel de la aplicación instalada
