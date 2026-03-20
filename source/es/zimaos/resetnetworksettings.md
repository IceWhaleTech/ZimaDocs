---
title: Restablecer la configuración de red
description: 
type: Docs
author: icewhale123456
tip: La barra superior tiene un formato fijo, no lo elimines. La descripción es para el artículo, si no se llena, se tomará el primer párrafo del contenido.
---
Si has configurado una IP estática en ZimaOS y necesitas restablecer la configuración de red debido a cambios en la red, puedes utilizar este tutorial para restablecer el enlace de la IP configurada.

{% note warn  %} 
**Nota:** Antes de intentar el procedimiento de restablecimiento mediante USB a continuación, intenta conectar el dispositivo a otro puerto de red y luego usa ZimaClient para buscar nuevamente la red.
{% endnote %}

### Formatear unidad USB
El formato en Windows se puede hacer haciendo clic derecho sobre la unidad USB y seleccionando exFAT para formatear.
![](https://manage.icewhale.io/api/static/docs/1730802271117_image.png)

En Mac, selecciona el disco en la herramienta de administración de discos y realiza la operación de borrar.
![](https://manage.icewhale.io/api/static/docs/1730802287070_image.png)

### Escribir el archivo _ResetNetwork
Crea un archivo en el directorio raíz del disco, nómbralo como `_ResetNetwork`, recuerda que no debe tener sufijo, y el archivo debe estar vacío.
![](https://manage.icewhale.io/api/static/docs/1730802301568_image.png)

### Insertarlo en ZimaOS y esperar 20 segundos.
Cualquiera de las siguientes condiciones se considerará un éxito:
- La pantalla muestra que la IP ha cambiado.
- El archivo `_ResetNetwork` ha sido eliminado de la unidad USB.