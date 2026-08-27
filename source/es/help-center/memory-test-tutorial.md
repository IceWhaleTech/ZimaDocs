---
title: Tutorial de Prueba de Memoria
description: 
type: "Docs"
tip: El formato fijo de la barra superior no debe eliminarse, description es la descripción del artículo, si no se completa se cortará el texto del primer párrafo.
---
# Si la placa base no arranca correctamente, o hay distorsión o congelamiento de la pantalla durante el uso, siga los pasos a continuación para solucionar el problema de la memoria.
## Entorno hardware:
1X ZimaCube  
1X Monitor  
1X Cable HDMI/DP  
1X Teclado  
1X Unidad flash USB  
## Paso 1: Descargar la imagen de Memtest86
Primero, necesita descargar el archivo de imagen de Memtest86, que puede descargar desde el siguiente enlace:  
https://www.memtest86.com/download.htm  
![](https://manage.icewhale.io/api/static/docs/1729233669049_image.png)  
## Paso 2: Instalar la imagen en la unidad USB
Después de que la descarga esté completa, necesita grabar el archivo de imagen en la unidad USB. Se recomienda usar la herramienta Rufus para realizar este proceso. Los pasos son los siguientes:  
1. Descargue e instale Rufus.  
2. Abra Rufus y seleccione el archivo de imagen de Memtest86 que ha descargado.  
3. Inserte la unidad USB y selecciónela como el dispositivo objetivo.  
4. Haga clic en el botón "INICIAR" para comenzar el proceso de grabación.  
![](https://manage.icewhale.io/api/static/docs/1729233702813_image.png)  
## Paso 3: Inicie ZimaCube y arranque desde USB
1. Inserte la unidad USB con la imagen de Memtest86 en el puerto USB de ZimaCube.  
2. Conecte el teclado, presione F11 continuamente y seleccione arrancar desde USB.  
![](https://manage.icewhale.io/api/static/docs/1729233729784_image.png)  
3. Ingrese a la interfaz de Memtest y seleccione Iniciar Prueba.  
![](https://manage.icewhale.io/api/static/docs/1729233755009_image.png)  
![](https://manage.icewhale.io/api/static/docs/1729233761336_image.png)  
![](https://manage.icewhale.io/api/static/docs/1729233768385_image.png)  
## Paso 4: Determinar si hay un problema con la memoria según los resultados de feedback
Si aparece la interfaz PASS, no hay problema con la memoria  
![](https://manage.icewhale.io/api/static/docs/1729233805061_image.png)  
Puede usar los métodos anteriores para determinar si su memoria tiene problemas de estabilidad y solucionar más problemas de la placa base. Al mismo tiempo, puede ponerse en contacto con nuestro soporte técnico por correo electrónico a support@icewhale.org y adjuntar los resultados de la prueba para obtener más ayuda.