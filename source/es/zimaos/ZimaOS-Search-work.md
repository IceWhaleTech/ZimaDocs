---
title: Cómo funciona ZimaOS-Search
description: 
type: Docs
author: admin
tip: No elimine el formato fijo en la barra superior, la descripción es para el artículo, si no se llena, se cortará el primer párrafo del contenido.
permalink: /es/zimaos/zimaos-search.html
---
## Principio de funcionamiento del sistema
### Diseño de arquitectura en tres capas
1. **Capa de monitoreo de archivos en tiempo real**
- Percepción en tiempo real de los cambios en el sistema de archivos (crear/renombrar/eliminar)
Índice de nombres de archivos (respuesta de segundo nivel)
Índice de contenido de archivos (procesamiento unificado durante las horas de menor actividad por la madrugada)
- Procesamiento asincrónico por lotes de actualizaciones de índice (lectura, escritura, eliminación, corutinas independientes)
- Auditoría completa diaria a medianoche para garantizar la consistencia final
2. **Capa de construcción de índices inteligentes**
- El algoritmo Snowflake genera el ID del documento (capacidad de generación de 400,000+ por segundo)
- Reconocimiento automático de formatos que admite más de 70 tipos de archivos
3. **Capa de búsqueda multimodal**
  - Búsqueda conjunta en cuatro dimensiones:
Búsqueda de texto completo (nombre/contenido/etiqueta/resumen)
Coincidencia difusa de nombres de archivos
Coincidencia exacta de nombres de archivos
Búsqueda semántica (actualmente solo admite imágenes)

## Ventajas clave
### 🚀Construcción rápida de índices
- Datos de prueba: Tamaño total 65.5GB, número de archivos 200000
- Configuración del equipo: CPU N100 de 4 núcleos, HDD de 500GB

| **Índice** | **Solución tradicional (para un sistema similar)** | **Este sistema** | **Multiplicador de aumento** |
| - | - | - | - |
| **Tiempo de índice de nombre de archivo** | 18 minutos | 1.4S | 771 veces |
| **Tiempo de indexación de contenido de archivos (seleccionar documentos de Office y PDF)** | 1h 23min | 2min21S | **35.2 veces** |
| **Uso de memoria del índice** | 176MB | 26MB | **6.77 veces** |
| **Ocupación de disco del índice** | 156MB | 28MB | **5.6 veces** |
| **Número de servicios backend** | 7 | 2 | **3.5 veces** |
### 💡Programación inteligente de recursos
- **Mecanismo de carga bajo demanda**: Los archivos del modelo se descargan según las necesidades reales de uso, con un inicio rápido y ligero
- **Estrategia dinámica de limitación de corriente**:
  Límite de procesamiento único: 100000 documentos/tipo
  Tiempo máximo de procesamiento: 5 minutos/tipo
- **Protección contra barreras de escritura**: Evita que las escrituras de alta frecuencia causen picos en la CPU
## Escenarios aplicables
- **Gestión de bases de conocimiento**: Localizar documentos rápidamente
- **Archivo multimedia**: Buscar imágenes/videos a través de contenido
- **Auditoría de cumplimiento**: Rastrear con precisión el historial de cambios de documentos
- **Colaboración en equipo**: Recuperación de contenido cruzado entre formatos
Tabla de soporte de búsqueda de texto completo y método de procesamiento

| Categoría | Extensión de formato | Método de manejo | Notas |
| - | - | - | - |
| **Categoría de texto** | .txt .md .log .htm .html .mht .mhtml .xml | 1. Lectura directa 2. Extracción basada en densidad de texto HTML | Los archivos de código no se indexan por defecto |
| **Documento PDF** | .pdf | 1. Análisis directo de Pdfium 2. El fotocopiado usa OCR Tesseract | Límite: ≤ 200 páginas, resultado de OCR ≤ 800KB |
| **e-book** | .epub .fb2 .djvu | Conversión Doconverter a txt | .djvu procesa documentos escaneados |
| **Documento Word** | .doc .docm .docx .docxf .dot .dotm .dotx .fodt .odt .ott .oxps .rtf .stw .sxw .wps .wpt .xps | Convertir Doconverter a docx y analizarlo | Soporta el formato completo de WPS |
| **Documento de tabla** | .csv .et .ett .fods .ods .ots .sxc .xls .xlsb .xlsm .xlsx .xlt .xltm .xltx | Convertir Doconverter a CSV y leerlo |  |
| **Documento PPT** | .dps .dpt .fodp .odp .otp .pot .potm .potx .pps .ppsm .ppsx .ppt .pptm .pptx .sxi | Análisis de conversión Doconverter a pptx |  |
| **Documento IWork** | .pages .numbers .key | Conversión Iwork2text (soporta reconocimiento OCR) |  |
| **Imagen**★ | .bmp .raw .jpg .jpeg .jpe .jfif .png .gif .tif .tiff .webp .mat .pbm .pgm .ppm .pfm .pnm .fits .fit .fts .exr .hdr .v .vips | Reconocimiento OCR usando el modelo MiniCPM-o-2.6 | Restricciones: ≤ 20MB por hoja |
| **Video**★ | .mp4 .wmv .mkv .avi .mov .webm .flv .mpeg .mpg .3gp .asf .rm .rmv .rmvb .m4v .swf | Extracción de subtítulos de Whisper Large v3 más rápida |  |
| **Audio**★ | .mp3 .aac .wav .flac .ogg .m4a .aiff .wma .ape | Transcripción de voz Whisper-Large-v3 más rápida |  |
| **Documento CAD** | .dwg .dxf | El análisis de contenido no es compatible actualmente | Solo se indexan los metadatos del paquete comprimido |
| **Archivo comprimido** | .zip .rar .7z .sz .xz .gz .tar .bz2 .br .zz .zst .lz4 | El análisis de contenido no es compatible actualmente | Solo se indexan los metadatos del paquete comprimido |

> Nota: El formato marcado con ★ requiere que el módulo de IA de ZimaOS esté habilitado, y la capacidad de procesamiento completa depende de la configuración de hardware. El sistema actualiza continuamente la lista de soporte, consulte la documentación oficial para obtener la lista más reciente de formatos soportados.
> 
### 🌐 Búsqueda mejorada con IA
- Procesamiento de imágenes: OCR MiniCPM-o-2.6 + reconocimiento de etiquetas
- Procesamiento de audio y video: Generación de subtítulos Whisper-large-v3
- Análisis semántico: Vectorización semántica MiniLM-L6
- Documento de referencia: [Habilitar búsqueda con IA en ZimaOS](https://www.zimaspace.com/docs/zimaos/Enable-AI)
