---
title: Configuración de App Store
seo_title: "Configuración de App Store ZimaOS para aplicaciones Docker y self-hosted"
description: "Configura la identidad, localización, responsable y URL públicas de una App Store Docker para servidores domésticos y homelabs con ZimaOS."
type: Docs
author: IceWhaleTech
tip: No elimine este bloque de front matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

En un catálogo de homelab público o privado, mantén estable la identidad de la tienda después de que los usuarios de servidores domésticos y NAS OS se suscriban.

`store-config.json` define la identidad de la tienda en el nivel del repositorio.

## Objetivo

El script de compilación lee `store-config.json` y genera:

- `dist/store.json`
- `dist/store.{locale}.json` para los locales definidos explícitamente en los campos de texto localizado de la tienda

## Ejemplo mínimo

```json
{
  "version": 2,
  "store_id": "my-awesome-apps",
  "name": {
    "en_US": "My Awesome Apps",
    "zh_CN": "我的应用商店"
  },
  "description": {
    "en_US": "A collection of apps for home server enthusiasts"
  },
  "maintainer": "your-github-username",
  "url": "https://github.com/username/my-appstore"
}
```

## Campos

| Campo | Tipo | Obligatorio | Notas |
|------|------|----------|------|
| `version` | `int` | Sí | Debe ser `2` |
| `store_id` | `string` | Sí | Identificador único de la tienda |
| `name` | `object` | Sí | Nombre visible indexado por locale |
| `description` | `object` | No | Descripción de la tienda indexada por locale |
| `maintainer` | `string` | Sí | Nombre del responsable o propietario |
| `url` | `string` | No | URL del proyecto o página principal |
| `icon` | `string` | No | URL del icono de la tienda |

## Referencia de campos

### `version`

- obligatorio
- debe ser el entero `2`
- identifica la versión del protocolo fuente usada por el proceso de compilación

### `store_id`

- obligatorio
- identidad principal de la tienda
- debe permanecer estable después de que los usuarios empiecen a suscribirse
- debe ser un valor distintivo a escala global

### `name`

- obligatorio
- debe ser un objeto indexado por locale, no una cadena simple
- siempre debe incluir `en_US`
- se convierte en el nombre visible de `store.json` generado

### `description`

- opcional
- objeto indexado por locale
- resulta útil como texto de presentación de la tienda en los clientes

### `maintainer`

- obligatorio
- cadena simple con el responsable, propietario u organización de la tienda

### `url`

- opcional
- URL pública del proyecto, repositorio o página principal

### `icon`

- opcional
- URL pública del icono de nivel de tienda
- a diferencia de los recursos de cada aplicación, no se genera mediante el pipeline de recursos del directorio de una aplicación

## Reglas de `store_id`

- solo letras, dígitos, `.`, `_` y `-`
- se permiten mayúsculas en la entrada, pero se normalizan a minúsculas
- debe contener al menos una letra o un dígito
- debe ser distintivo a escala global
- no uses valores reservados como `zimaos-appstore`

## Requisitos de validación

Considera estas reglas como el contrato de la fuente:

- el archivo debe ser JSON válido
- `version` debe coincidir con la versión activa del protocolo
- `name` debe ser un objeto
- las claves locale deben usar el formato `ll_CC`
- los campos URL deben ser ya públicos y accesibles

## Comportamiento de localización

El script de compilación resuelve el texto localizado de nivel de tienda desde:

- `name`
- `description`

Solo se generan archivos `store.{locale}.json` para los locales definidos explícitamente en estos campos.

## Comportamiento de la salida

El script de compilación siempre genera un archivo para el locale predeterminado:

- `dist/store.json`

Además, genera archivos con sufijo de locale únicamente cuando ese locale está presente de forma explícita en el texto localizado de la tienda:

- `dist/store.zh_CN.json`
- `dist/store.de_DE.json`

Esto mantiene pequeña la salida y, al mismo tiempo, admite metadatos de tienda localizados.

## Correspondencia entre entrada y salida

| Campo fuente | Ubicación generada | Notas |
|---|---|---|
| `version` | `store.json.version` | se conserva como metadato del protocolo |
| `store_id` | `store.json.store_id` | se normaliza durante la compilación si es necesario |
| `name.<locale>` | `store.{locale}.name` | se resuelve para cada archivo de locale |
| `description.<locale>` | `store.{locale}.description` | se genera solo para locales explícitos |
| `maintainer` | `store.json.maintainer` | se copia como cadena simple |
| `url` | `store.json.url` | se copia como cadena simple |
| `icon` | `store.json.icon` | se copia como URL de cadena simple |

## Recomendaciones prácticas

- Proporciona siempre `name.en_US`
- Añade `description` cuando la tienda necesite una presentación visible en el cliente
- Mantén estable `store_id` cuando los usuarios ya estén suscritos

## Errores comunes

- escribir `name` como cadena simple en lugar de un objeto indexado por locale
- cambiar `store_id` después de que los clientes ya usen la tienda
- usar claves locale como `en_us` en lugar de `en_US`
- suponer que cada locale de `supported-languages.json` producirá automáticamente un archivo `store.{locale}.json`
