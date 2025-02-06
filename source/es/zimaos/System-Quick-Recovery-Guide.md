---
title: Guía Rápida de Recuperación del Sistema ZimaOS
description: 
type: Docs
author: admin
tip: El formato de la barra superior está fijo, por favor no lo elimine, la descripción es para el artículo, si no se llena, se tomará el primer párrafo del contenido.
---
## Introducción
ZimaOS es un sistema operativo NAS liviano que utiliza un diseño de doble partición (Slot A y Slot B), cada partición tiene aproximadamente 6GB de tamaño. Cuando una partición falla, puedes cambiar fácilmente a la partición de respaldo para asegurar que el sistema continúe funcionando. Este tutorial te guiará sobre cómo cambiar a la partición de respaldo cuando haya un problema con el sistema.
## Preparación
Antes de comenzar, asegúrate de tener un monitor y un teclado conectados.
## Guía paso a paso:
**Paso 1: Arrancar el dispositivo**
- Enciende el dispositivo ZimaOS.

**Paso 2: Ingresa al menú GRUB**
- Cuando el sistema arranque, pon atención a la pantalla. Presiona rápidamente las teclas de flecha ↑ y ↓ en el teclado para mostrar el menú GRUB. El menú GRUB se muestra de la siguiente manera:
![](https://manage.icewhale.io/api/static/docs/1738826493349_image.png)

**Paso 3: Selecciona la partición de arranque**
- Usa las teclas de flecha para seleccionar la partición alternativa desde la cual deseas arrancar (por ejemplo, si Slot A falla, selecciona Slot B).

Paso 4: Arrancar la partición seleccionada
- Presiona Enter para arrancar desde la partición seleccionada.

**Ahora puedes ingresar con éxito al sistema ZimaOS**
![](https://manage.icewhale.io/api/static/docs/1738826615202_image.png)
## Consejos
**¿Cómo sé en qué partición estoy actualmente?**
1. Ejecuta el comando de terminal `rauc status` y verifica la salida para determinar la partición actualmente arrancada.
2. En la salida, `booted` indica la partición que se ha arrancado actualmente.
![](https://manage.icewhale.io/api/static/docs/1738827159260_image.png)
## Notas adicionales:
1. **Seguridad de los datos:**
- Cambiar de partición no afectará los datos del usuario, porque los datos del usuario de ZimaOS generalmente se almacenan en una partición separada (como /data).
2. **Comprender las opciones del menú:**
- "OK=1" significa que la partición está en buenas condiciones, "TRY=1" o "TRY=0" indica la cantidad de veces que se ha intentado arrancar la partición.
- La opción del shell de rescate es para usuarios avanzados para solucionar problemas o reparar el sistema, pero no es necesario seleccionarla a menos que sea necesario.
3. **Operaciones avanzadas:**
- Presiona la tecla 'e' para editar el comando de arranque y presiona la tecla 'c' para ingresar al modo de línea de comandos para usuarios experimentados.

**Si necesitas más asistencia o tienes otras preguntas, por favor contacta al equipo de ZimaOS: <feedback@zimaos.com>.**