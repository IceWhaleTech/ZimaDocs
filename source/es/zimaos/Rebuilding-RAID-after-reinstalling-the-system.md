---
title: Título del artículo
description: 
type: Docs
author: admin
tip: El formato de la barra superior es fijo, no lo elimine; la descripción es la descripción del artículo, y si no se completa, se tomará el primer párrafo del contenido.
---
## Propósito
Este tutorial te guiará a través del uso de la aplicación `Archivos` para descargar y reemplazar el archivo `local-storage.db`, lo que te permitirá migrar o restaurar datos de configuración de RAID después de reinstalar el sistema.
## Pasos de operación
1. **Descargar el archivo local-storage.db**
  a. Accede a `Archivos` en ZimaCube.
  b. En `Archivos`, establece la ruta de acceso en `/ZimaOS-HD/.casaos/db`.
  c. Encuentra el archivo `local-storage.db` y descárgalo a tu dispositivo local.
2. **Reinstalar el sistema**
  a. Apaga ZimaCube de forma segura, asegurándote de que el dispositivo esté completamente apagado.
  b. Reemplaza el disco SSD del sistema según sea necesario y reinstala ZimaOS.
  c. Inicia ZimaCube, asegurándote de que ZimaOS esté instalado con éxito y funcionando normalmente.
3. **Cargar y reemplazar el archivo local-storage.db**
  a. Abre `Archivos` y navega nuevamente al directorio `/ZimaOS-HD/.casaos/db`.
  b. Encuentra el archivo `local-storage.db` en el directorio actual y renómbralo a `local-storage.db.bak` para mantener una copia de seguridad.
  c. Carga el archivo `local-storage.db` descargado en el Paso 1 al directorio actual.
4. **Reiniciar ZimaCube:**
  Después de reemplazar el archivo, reinicia el dispositivo ZimaCube para asegurarte de que todos los cambios surtan efecto.
## Notas
- Asegúrate de que todos los datos importantes estén respaldados antes de continuar para evitar la pérdida de datos debido a errores.
- Si tienes problemas con la instalación o la configuración, verifica tu conexión de red o contacta con el soporte técnico.