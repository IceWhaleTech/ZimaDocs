:::writing{variant="document" id="71642"}
---
title: Restablecer la configuración de red
description: "Cómo restablecer la configuración de red y la configuración de IP estática de ZimaOS utilizando una unidad USB cuando los cambios en la red provocan problemas de conectividad."
type: Docs
author: icewhale123456
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Si ha configurado una IP estática en ZimaOS y necesita restablecer la configuración de IP de la red debido a cambios en la red, puede utilizar este tutorial para restablecer la vinculación de IP configurada.

{% note warn  %} 
**Nota:** Antes de intentar el procedimiento de restablecimiento mediante USB que se describe a continuación, pruebe a conectarse a un puerto de red diferente y luego utilice ZimaClient para buscar la red nuevamente.
{% endnote %}

### Formatear la unidad USB
En Windows, puede formatear la unidad USB haciendo clic con el botón derecho sobre ella y seleccionando exFAT como sistema de archivos.
![](https://manage.icewhale.io/api/static/docs/1730802271117_image.png)

En Mac, puede seleccionar el disco en la herramienta de administración de discos y realizar la operación de borrado.
![](https://manage.icewhale.io/api/static/docs/1730802287070_image.png)

### Escribir el archivo _ResetNetwork
Cree un archivo en el directorio raíz del disco con el nombre `_ResetNetwork`; recuerde que no debe tener extensión y que el archivo debe estar vacío.
![](https://manage.icewhale.io/api/static/docs/1730802301568_image.png)

### Insértelo en ZimaOS y espere 20 segundos.
Cualquiera de las siguientes condiciones se considerará un restablecimiento exitoso.
- La pantalla muestra que la IP ha cambiado.
- El archivo `_ResetNetwork` de la unidad USB ha sido eliminado.
:::