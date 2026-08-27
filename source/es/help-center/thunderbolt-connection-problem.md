---
title: Comprobación del problema de conexión Thunderbolt
description: 
type: Docs
author: icewhale123456
tip: El formato fijo de la barra superior no debe ser eliminado, la descripción es el resumen del artículo. Si no se completa, se tomará el primer párrafo del contenido.
---
Si no hay respuesta después de la conexión Thunderbolt, puede verificar según los siguientes ítems:

1. Confirmar que ZimaCube es la versión Pro
Solo la versión Pro de ZimaCube tiene la función Thunderbolt. Puede ver dos interfaces Thunderbolt cerca de la fuente de alimentación en el panel trasero, como se muestra en la figura a continuación.
![](https://manage.icewhale.io/api/static/docs/1731392263987_image.png)

2. Confirmar que el cliente tiene un puerto Thunderbolt
Generalmente, Thunderbolt tendrá un logo de Thunderbolt, o puede consultar la información de hardware correspondiente para confirmar que es una interfaz Thunderbolt.
![](https://manage.icewhale.io/api/static/docs/1731392292731_image.png)

3. Confirmar el cable Thunderbolt
Los cables Thunderbolt generalmente tienen logotipos especiales, y también puede verificar si el hardware admite la transmisión Thunderbolt.
![](https://manage.icewhale.io/api/static/docs/1731392311295_image.png)

4. Confirmar que ZimaCube reconoce el hardware Thunderbolt (lspci)
Ejecute el comando ‘lspci | grep Thunderbolt’, y el resultado es el siguiente
![](https://manage.icewhale.io/api/static/docs/1731392323684_image.png)

5. Confirmar que el puerto Thunderbolt de ZimaCube puede reconocer el hardware
- Encuentre un USB tipo C y conéctelo a ZimaCube, y verifique si puede ser reconocido en ZimaOS.
- Encuentre una pantalla tipo C y vea si puede emitir video normalmente después de conectarla.

Si el problema aún no se puede resolver según los pasos de solución de problemas anteriores, comuníquese con nosotros nuevamente y háganos saber el paso de solución de problemas.