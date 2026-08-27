---
title: Migrar una App Store de v1 a v2
seo_title: "Migrar una App Store CasaOS o ZimaOS de v1 a v2"
description: "Migra una App Store Docker del formato de paquete v1 de CasaOS o ZimaOS al protocolo estático v2, conservando la compatibilidad heredada."
type: Docs
author: IceWhaleTech
tip: No elimine este bloque de front matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Utiliza esta estrategia cuando una App Store Docker existente de CasaOS o ZimaOS atienda a usuarios de servidores domésticos o homelabs y deba migrar de v1 al protocolo v2 de NAS OS.

Esta sección está destinada a responsables que ya tienen una App Store CasaOS/ZimaOS v1 basada en archivos zip y quieren admitir v2 con los mínimos cambios en la fuente.

El punto importante es que normalmente no necesitas reconstruir todas las aplicaciones desde cero. Conserva el árbol `Apps/` existente, normaliza los metadatos fuente, añade los archivos v2 de nivel de tienda y genera ambas salidas desde el mismo repositorio.

## Qué cambia de v1 a v2

| Tema | Tienda v1 | Tienda v2 |
|---|---|---|
| Distribución | zip empaquetado o paquete sysroot | archivos estáticos dentro de `dist/` |
| Entrada del cliente | paquete heredado como `main.zip` | `store.json` e `index.json` |
| Identidad de tienda | no requiere archivo de identidad de nivel de tienda | requiere `store-config.json` |
| Lista de locales | se deduce del contenido de las aplicaciones | se declara en `supported-languages.json` y solo se genera cuando existen campos |
| Identidad de aplicación | suele basarse en convenciones de Compose o nombre | requiere `x-casaos.id` en el nivel superior |
| Metadatos | `appfile.json` más `x-casaos` | `x-casaos` superior, dividido entre Compose compilado y `meta.json` |
| Categorías | valores heredados o libres como `Utilities` | categorías v2 normalizadas |
| Actualizaciones | actualización del paquete | actualizaciones incrementales de aplicaciones mediante `content_hash` |
| Compatibilidad | los clientes v1 consumen zip | la compatibilidad v1 se conserva generando `dist/store/main.zip` |

## Modelo mínimo de migración

1. Conserva `Apps/<App>/docker-compose.yml` como fuente de referencia.
2. Mueve o confirma los metadatos visibles de la aplicación en el bloque superior `x-casaos`.
3. Añade un `x-casaos.id` estable a cada aplicación.
4. Normaliza claves locale como `en_us` a `en_US`.
5. Normaliza las categorías de aplicación según la lista v2.
6. Añade `store-config.json` y `supported-languages.json`.
7. Añade campos visuales v2 opcionales como `version`, `update_at` y `release_notes` cuando resulten útiles.
8. Compila `dist/` v2.
9. Sigue compilando el zip v1 si todavía admites clientes heredados.

## Patrón de compatibilidad

El repositorio actual compila ambos formatos:

- v2: `dist/store.json`, `dist/index.json`, `dist/apps/<app-id>/...`
- v1: `dist/store/main.zip`

Aquí `<app-id>` es el valor normalizado del `x-casaos.id` superior de cada aplicación.

Este es el patrón de migración más seguro para tiendas existentes. Los clientes nuevos pueden suscribirse a la URL estática v2 y los antiguos pueden seguir usando el artefacto v1 hasta que decidas dejar de admitirlo.

## Qué puede permanecer

Estos archivos o directorios de la etapa v1 pueden conservarse cuando todavía necesites compatibilidad:

- `Apps/`
- configuración de ejecución existente de Compose
- recursos como iconos, miniaturas y capturas
- `category-list.json` y `recommend-list.json` si el empaquetado v1 todavía los utiliza
- pasos del workflow de empaquetado v1

La compilación v2 no exige escribir a mano los archivos de `dist/`.

## Qué debe cambiar

Como mínimo, v2 necesita:

- `store-config.json` en la raíz
- `supported-languages.json` en la raíz
- `x-casaos.id` superior en el Compose de cada aplicación
- categorías v2 compatibles
- claves locale normalizadas como `en_US`, `zh_CN` y `de_DE`
- un workflow de compilación y publicación v2

## Versión y otros campos visuales añadidos en v2

La migración puede terminar después de los cambios obligatorios anteriores. Sin embargo, `version` es obligatorio en la nueva tienda. Los campos restantes mejoran las páginas de detalle, los listados y la presentación de las actualizaciones.

Añade estos campos al bloque superior `x-casaos` cuando dispongas de la información:

| Campo | Tipo fuente | Nota de migración |
|---|---|---|
| `version` | `string` | Nuevo y obligatorio. Se usa para seguimiento de versión, comunicación de actualizaciones y una presentación más rica. |
| `update_at` | `string` | Nuevo y opcional. Fecha de actualización, recomendada como `YYYY-MM-DD`, por ejemplo `"2026-03-01"`. |
| `release_notes` | `object` | Nuevo y opcional. Notas indexadas por locale en la fuente; cada valor es texto simple. La salida usa `release_note`. |
| `website` | `string` | Nuevo y opcional. URL del sitio oficial para una presentación más completa. |
| `repo` | `string` | Nuevo y opcional. URL del repositorio fuente para una presentación más completa. |
| `support` | `string` | Nuevo y opcional. URL de soporte para una presentación más completa. |
| `docs` | `string` | Nuevo y opcional. URL de documentación para una presentación más completa. |

Ejemplo:

```yaml
x-casaos:
  version: "1.0.0"
  update_at: "2026-03-01"
  release_notes:
    en_US: "First v2-compatible release."
  website: "https://example.com"
  repo: "https://github.com/example/myapp"
  support: "https://github.com/example/myapp/issues"
  docs: "https://docs.example.com"
```

## Páginas siguientes

1. [Lista de cambios mínimos](./app-store-v1-v2-migration-checklist)
2. [Configuración de la tienda](./app-store-config)
3. [Compose y x-casaos](./app-store-compose-x-casaos)
4. [Salida de compilación](./app-store-build-output)
5. [Reutilizar las acciones oficiales](./app-store-github-actions)
