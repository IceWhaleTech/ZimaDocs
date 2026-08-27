---
title: Lista de migración de App Store de v1 a v2
seo_title: "Lista de migración de App Store ZimaOS de v1 a v2"
description: "Sigue la lista de cambios mínimos para migrar una App Store Docker self-hosted de v1 a v2 en ZimaOS, servidores domésticos y homelabs."
type: Docs
author: IceWhaleTech
tip: No elimine este bloque de front matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Esta lista conserva la compatibilidad de una App Store Docker self-hosted al migrar su catálogo de servidor doméstico o homelab de v1 a v2.

Utilízala cuando ya tengas una tienda v1 y quieras aplicar el conjunto práctico de cambios más pequeño para admitir v2.

Objetivo: un repositorio fuente, salida estática v2 y compatibilidad opcional con el zip v1.

## 1. Conservar el árbol de aplicaciones existente

Conserva la estructura actual:

```text
Apps/
└── MyApp/
    ├── docker-compose.yml
    ├── icon.png
    ├── thumbnail.png
    └── screenshot-1.png
```

Puedes añadir iconos SVG o recursos más limpios más adelante. Sustituir los recursos no es el primer bloqueo de la migración.

## 2. Añadir `store-config.json`

Crea este archivo en la raíz del repositorio:

```json
{
  "version": 2,
  "store_id": "your-store-id",
  "name": {
    "en_US": "Your Store Name"
  },
  "maintainer": "your-name",
  "url": "https://github.com/username/your-appstore"
}
```

Comprobaciones:

- `version` es `2`
- `store_id` es distintivo a escala global y estable
- `store_id` solo usa letras, dígitos, puntos (`.`), guiones bajos (`_`) y guiones (`-`)
- existe `name.en_US`

## 3. Añadir `supported-languages.json`

Crea este archivo en la raíz del repositorio:

```json
[
  "en_US"
]
```

Añade cada locale que pueda aparecer en los metadatos fuente, como `zh_CN` o `de_DE`.

## 4. Añadir `x-casaos.id` a cada aplicación

Cada aplicación necesita un ID estable en el nivel superior:

```yaml
x-casaos:
  id: com.example.myapp
```

Comprobaciones:

- cada `docker-compose.yml` fuente incluye `x-casaos.id` en el nivel superior
- se usa un formato de dominio inverso como `com.example.myapp`
- el ID contiene al menos dos segmentos no vacíos separados por puntos
- solo usa letras, dígitos, puntos (`.`), guiones bajos (`_`) y guiones (`-`)

## 5. Normalizar la estructura de metadatos heredada

Limpiezas habituales al pasar de v1 a v2:

| Fuente heredada | Fuente v2 |
|---|---|
| `en_us` | `en_US` |
| `zh_cn` | `zh_CN` |
| metadatos visuales en `appfile.json` | campos superiores `x-casaos` |

No necesitas conservar `appfile.json` para v2. Si el empaquetado v1 todavía lo utiliza, consérvalo únicamente para el pipeline heredado.

## 6. Normalizar categorías

Configura `x-casaos.category` de cada aplicación con uno de estos valores:

`Media`, `Productivity`, `Home`, `Networking`, `AI`, `Finance`, `Social`, `Developer`, `Others`

Por ejemplo, los antiguos valores `Utilities` suelen tener que convertirse en la categoría v2 más cercana, normalmente `Productivity` u `Others`.

## 7. Compilar la salida v2

```bash
BASE_URL="https://your-store-domain" \
./scripts/build_dist.sh
```

Comprobaciones:

- existe `dist/store.json`
- existe `dist/index.json`
- existe `dist/apps/<app-id>/docker-compose.yml`, donde `<app-id>` es el `x-casaos.id` normalizado
- existe `dist/apps/<app-id>/meta.json`
- los elementos del listado generado incluyen `id`, `compose_url`, `meta_url` y `content_hash`

## 8. Añadir la versión y otros campos visuales

`version` es obligatorio en la nueva tienda, aunque los repositorios fuente antiguos no contuvieran un campo equivalente.

Los campos restantes no son necesarios para la compatibilidad, pero mejoran la experiencia de la tienda:

| Campo | Tipo | Nota |
|---|---|---|
| `version` | `string` | Nuevo y obligatorio. Las futuras decisiones de actualización dependen de este campo. Usa un valor semver siempre que sea posible. |
| `update_at` | `string` | Nueva fecha de actualización opcional. Usa `YYYY-MM-DD` cuando sea posible. |
| `release_notes` | `object` | Nuevas notas opcionales indexadas por locale. Cada valor es texto simple. |
| `website` | `string` | Nueva URL opcional del sitio oficial. |
| `repo` | `string` | Nueva URL opcional del repositorio fuente. |
| `support` | `string` | Nueva URL opcional de soporte. |
| `docs` | `string` | Nueva URL opcional de documentación. |

## 9. Conservar la compatibilidad v1 si es necesaria

Si los clientes antiguos todavía dependen de la tienda v1, conserva un paso del workflow que genere:

```text
dist/store/main.zip
```

El repositorio oficial lo hace ejecutando la compilación v1 después de la v2. De este modo, un solo árbol fuente atiende a:

- consumidores de la tienda estática v2
- consumidores del zip v1 heredado

## 10. Desplegar los archivos generados

Publica `dist/` en un alojamiento estático. La URL que añadan los usuarios debe coincidir con el `base-url` de la compilación.

## Comprobación final antes de la release

- [ ] `store-config.json` existe y es válido
- [ ] `supported-languages.json` existe y es válido
- [ ] cada aplicación tiene un `x-casaos.id` válido
- [ ] las claves locale antiguas están normalizadas
- [ ] `x-casaos.version` existe y está actualizado para esta release
- [ ] se han añadido campos visuales opcionales donde resultan útiles
- [ ] todas las categorías usan valores v2
- [ ] `dist/store.json` y `dist/index.json` son accesibles
- [ ] `dist/store/main.zip` se genera si todavía se necesita compatibilidad v1
