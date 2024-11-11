---
title: Guía de Auto-Prueba y Solución de Problemas de ZimaCube
description: 
type: Docs
author: icewhale123456
tip: El formato fijo de la barra superior no debe eliminarse, la descripción es para el artículo, y si no se llena, se cortará el primer párrafo del contenido
---

Como un producto NAS de alto rendimiento, ZimaCube está diseñado para proporcionar una solución confiable para profesionales creativos y entusiastas de la tecnología. Sin embargo, en el uso diario, los usuarios pueden encontrar diversos problemas técnicos o fallos, que generalmente pueden resolverse por sí mismos a través de simples pasos de solución de problemas. El objetivo de esta guía es ayudar a los usuarios a identificar y resolver rápida y efectivamente problemas comunes de ZimaCube para evitar tiempos de inactividad innecesarios.

## Problemas de Hardware
### El dispositivo no puede iniciar
Retire los dispositivos externos, incluidos discos duros, SSD y dispositivos PCIe adicionales, y vuelva a intentarlo.
### Paso 1 Solucionar problemas de alimentación
Asegúrese de que la luz de encendido naranja del dispositivo pueda encenderse correctamente. Si no, confirme que el cable de alimentación esté correctamente conectado y que la luz de encendido verde se pueda encender normalmente. Si la luz de encendido verde no puede encenderse, se considera que es un problema de alimentación.
### Paso 2 Solucionar problemas de DDR
1. Si está usando ZimaCube Pro, intente insertar solo un DDR para ver si puede iniciar.
2. Si no hay problemas en lo anterior, puede intentar ejecutar memtest para solucionar problemas de DDR. Para pasos específicos, consulte el siguiente enlace:
https://www.zimaspace.com/docs/zimacube/Memory-Test-Tutorial

### Paso 3 Restablecer el dispositivo
Puede consultar los siguientes pasos para restablecer la batería RTC
https://www.zimaspace.com/docs/zimacube/Resets-CMOS
### Solución:
Si no puede iniciar según los pasos anteriores, puede contactar a nuestro equipo de postventa a support@icewhale.org para que le reemplacen la placa base.

## Problema de Software
### Anomalía en el inicio del sistema
1. Vuelva a conectar el disco del sistema en la placa madre y verifique si el disco del sistema puede ser reconocido normalmente.
2. Puede reinstalar ZimaOS según el método en el siguiente enlace
https://www.zimaspace.com/docs/zimacube/How-to-Install-ZimaOS
3. Intente utilizar otros SSD disponibles para ver si puede iniciar con éxito.

### HDD o NVMe no reconocido
**Paso 1 Abrir la carcasa**
Retire cuidadosamente la tapa superior de la carcasa para acceder a la placa madre.
![](https://manage.icewhale.io/api/static/docs/1730874467873_image.png)
**Paso 2 Verifique si el cable EDP y el cable de alimentación de la placa base están correctamente** conectados. Vuelva a conectar el cable EDP y el cable de alimentación de la placa base según el siguiente método.
![](https://manage.icewhale.io/api/static/docs/1730875959034_image.png)
![](https://manage.icewhale.io/api/static/docs/1730875970165_image.png)
**Paso 3 Ingrese lsblk para verificar si es reconocido**
Puede abrir SSH en ZimaOS siguiendo el método siguiente e ingresando el comando "lsblk".
https://www.zimaspace.com/docs/zimaos/How-to-Open-SSH-in-ZimaOS
1. Si todos pueden ser reconocidos, se considera que es un problema de software o un problema de disco duro. Se recomienda actualizar a la versión más reciente del software y verificar si el disco duro ha creado un arreglo. Puede intentar inicializarlo después de reconocerlo en otros dispositivos.
2. Si algunos pueden ser reconocidos, se recomienda intentar reiniciar suavemente o hacer intercambio en caliente del disco duro. Si los métodos anteriores no son útiles, intercambie la posición del disco duro para descartar el problema de un disco duro fijo o de disco.
3. Si ninguno puede ser reconocido, primero determine si el disco es un disco empresarial. Si es un disco empresarial, intente aislar el pin de 3.3V.

![](https://manage.icewhale.io/api/static/docs/1730876010218_image.png)
El siguiente enlace enumera los modelos de discos duros que pueden usarse normalmente en la prueba interna.
https://www.zimaspace.com/docs/zimacube/HDD-Interface-Usage-Guide
**Solución:**
Si los métodos anteriores no permiten que el disco duro funcione normalmente, puede contactar a nuestro equipo de postventa a support@icewhale.org para que le reemplacen la placa de conexión.