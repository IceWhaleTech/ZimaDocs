---
title: Restablecer la configuración de red
description: 
type: Docs
author: icewhale123456
tip: El formato de la barra superior fijo no debe eliminarse, la descripción es la descripción del artículo, si no se completa, se tomará el primer párrafo del contenido
---
## Escenario
Si has configurado una IP estática en ZimaOS y necesitas restablecer la configuración de la red IP debido a cambios en la red, puedes utilizar este tutorial para restablecer el vínculo IP configurado.
### Formatear unidad USB
El formateo en Windows se puede hacer haciendo clic derecho en la unidad USB y seleccionando exFAT para formatear
![](https://manage.icewhale.io/api/static/docs/1730802271117_image.png)

El formateo en Mac puede seleccionar el disco en la herramienta de administración de discos y realizar la operación de borrado
![](https://manage.icewhale.io/api/static/docs/1730802287070_image.png)

### Escribir archivo _ResetNetwork
Crea un archivo en el directorio raíz del disco, nómbralo `_ResetNetwork`, recuerda no tener un sufijo, y el archivo debe estar vacío.
![](https://manage.icewhale.io/api/static/docs/1730802301568_image.png)

### Insértalo en ZimaOS y espera 20 segundos.
Cualquiera de las siguientes condiciones se considerará exitosa.
- La pantalla muestra que la IP ha cambiado.
- El archivo `_ResetNetwork` en la unidad USB ha sido eliminado.