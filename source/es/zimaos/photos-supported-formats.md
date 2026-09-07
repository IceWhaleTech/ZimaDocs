---
title: Formatos compatibles de Photos
seo_title: "Formatos compatibles de ZimaOS Photos: imágenes, RAW y metadatos de vídeo"
description: "Los formatos que ZimaOS Photos indexa y entiende. Formatos de imagen, compatibilidad con RAW de cámara, comportamiento de miniaturas y metadatos de vídeo en una sola referencia."
type: Docs
author: Collin
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---
**Photos está disponible a partir de ZimaOS 1.8.**

Photos está hecho para recibir todo lo que disparas, desde el teléfono del bolsillo hasta los RAW de la tarjeta de tu cámara. Esta página enumera lo que entra en la biblioteca y cómo se comporta cada formato una vez dentro.

## Cómo funciona el soporte

A un archivo pueden pasarle tres cosas en Photos, y no siempre vienen juntas:

- **Indexación.** El archivo se acepta en la biblioteca.
- **Miniaturas.** Se genera una imagen de vista previa para la galería.
- **Metadatos.** Se leen y se muestran la cámara, el objetivo y los ajustes.

Un formato puede estar indexado mientras su miniatura depende del propio archivo. Los RAW son el ejemplo principal: una cámara que incluye una vista previa JPEG obtiene una miniatura rápida, mientras que un archivo sin ella necesita decodificación. Ambos acaban en la biblioteca con sus metadatos.

## Formatos de imagen

| Familia de formatos | Indexado | Miniaturas | Metadatos |
|---|---|---|---|
| JPEG (.jpg, .jpeg, .jfif, .mpo) | Sí | Se sirve directamente o se escala | Campos estándar más etiquetas de fabricante |
| HEIC, HEIF, AVIF | Sí | Extractor integrado, evita la decodificación completa | Sí, incluidos los datos de Live Photo |
| PNG, WebP, GIF, BMP, ICO | Sí | Canal genérico | Campos básicos |
| TIFF (.tif, .tiff) | Sí | Prefiere la vista previa integrada | Sí |
| Contenedores profesionales (PSD, PSB, JPEG XL, JPEG 2000, EXR) | Sí | Canal genérico | Sí |

Los campos de metadatos estándar son cámara, objetivo, distancia focal, apertura, tiempo de exposición, ISO, GPS, orientación y fecha. Los metadatos de fabricante, como MakerNote y XMP privado, se leen para las marcas habituales de teléfonos y cámaras.

## Formatos RAW

Los archivos RAW siguen una de tres estrategias de miniatura, según lo que incorpore la cámara:

| Grupo | Formatos | Comportamiento de la miniatura |
|---|---|---|
| Vista previa integrada primero | ARW, TIFF | Photos lee la vista previa JPEG que incorporó la cámara, sin decodificar la imagen del sensor. |
| Vista previa cuando está disponible | CR2, CR3, CRW, DNG, NEF, NRW, ORF, ORI, PEF, RW2, SR2, SRF y otros | La vista previa integrada se usa cuando es lo bastante grande para la solicitud. Si no, Photos decodifica el RAW. |
| Depende del decodificador | 3FR, DCR, ERF, IIQ, KDC, MEF, MOS, MRW, RAF, RWL, SRW | Rara vez llevan una vista previa utilizable. Las miniaturas se generan decodificando y dependen del soporte del decodificador. |
| Miniatura nativa | X3F | Photos lee directamente la miniatura RGB integrada de la cámara. |

Si un formato no tiene vista previa integrada ni soporte de decodificador, el archivo sigue indexado y sus metadatos se conservan. La miniatura simplemente no está disponible.

## Metadatos de vídeo

Los archivos de vídeo usan una vía de metadatos independiente. Los archivos QuickTime e ISO-BMFF (MOV, MP4), AVI y Matroska (MKV) se analizan todos, de modo que los metadatos de vídeo aparecen junto a las fotos.

## Siguiente

- **[Fotos](./photos "Explora, busca y redescubre tu biblioteca de fotos en ZimaOS")** — la propia biblioteca
- **[Copia de seguridad del teléfono](./phone-backup "Realiza automáticamente una copia de seguridad de tu teléfono en ZimaOS con ZimaClient")** — mete las fotos del teléfono
