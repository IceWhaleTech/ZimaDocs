---
title: ¿Cómo habilitar la transcodificación de hardware de Plex en ZimaCube?
description:
type: “Docs”
tip: La barra superior tiene un formato fijo, por favor no la elimine, la descripción es para el artículo, si no se llena, se tomará el texto del primer párrafo.
---
# Plex y Transcodificación por GPU
Plex Media Server es una plataforma versátil y popular para gestionar y transmitir su biblioteca de medios. Una forma de mejorar significativamente su rendimiento y capacidades de transcodificación es aprovechando la potencia de una GPU Intel / NVIDIA. En esta guía, le mostraremos los pasos para configurar Docker Plex con aceleración de GPU Intel / NVIDIA, lo que permite una transcodificación de hardware eficiente y una mejor transmisión de medios.
## ¿Por qué utilizar transmisión acelerada por hardware?
Para reproducir su video de forma fluida y en una gran variedad de dispositivos, Plex Media Server a menudo necesita convertir el video a una calidad diferente o a un formato compatible. La conversión del video (transcodificación) sucede automáticamente, en tiempo real, mientras lo está reproduciendo. Utilizando la transcodificación basada en software gratuita en Plex Media Server, las computadoras domésticas pueden convertir y transmitir video en tiempo real a cualquier aplicación de Plex sin problemas. Algunas computadoras con procesadores más potentes incluso pueden transmitir múltiples videos a la vez, especialmente en calidades más bajas.

Para convertir videos más rápido y con menos potencia de procesamiento, puede activar la transmisión acelerada por hardware en Plex Media Server. Cuando la aceleración de hardware está activada, Plex Media Server utilizará el soporte de hardware dedicado para decodificadores y codificadores de video en su computadora/dispositivo para convertir videos, permitiéndole transmitir video en HD o 4K de manera más fluida y transmitir a más dispositivos a la vez. Y si usa la misma computadora para trabajo y entretenimiento, la aceleración de hardware utiliza menos potencia de procesamiento durante la transmisión de video, devolviéndole la velocidad que necesita para sus otras actividades.
## La transmisión acelerada por hardware tiene varias ventajas:
- A menudo, más videos pueden transmitirse al mismo tiempo.
- Los videos pueden comenzar a transmitirse más rápido y tener menos interrupciones.
- Los videos de alta calidad, especialmente los de 4K y HEVC, pueden transmitirse de manera más fluida.
- Al descargar tareas de transcodificación que consumen mucho CPU a hardware dedicado, la transmisión de video tiene un menor impacto en el rendimiento de su computadora.
- Utilizar el hardware dedicado para decodificación/codificación de video es más eficiente en energía, por lo que consumirá menos energía.

## ¿Cómo habilitar la transmisión acelerada por hardware?
> La transmisión acelerada por hardware es una función premium y requiere una suscripción activa a Plex Pass.

### 1. Usando el GPU Intel integrado
ZimaCube utiliza procesadores Intel N100/1235U, los cuales incorporan las últimas GPU integradas de Intel, ambas con muy buenas capacidades de transcodificación por hardware.
  - Busque Plex en la tienda de aplicaciones e instálelo. （**Si ya está instalado, actualícelo a la última versión. Se recomienda una nueva instalación.**）
  - Abra la aplicación web de Plex.
  - Inicie sesión con una cuenta que tenga un Plex Pass.
  - Navegue a Configuración > Servidor > Transcoder para acceder a la configuración del servidor.
  - Active Mostrar avanzado en la esquina superior derecha para exponer la configuración avanzada.
  - Active Usar aceleración de hardware cuando esté disponible.
  - Elija Dispositivo de transcodificación por hardware: Alder Lake....
![](https://manage.icewhale.io/api/static/docs/1727266956851_image.png)
  - Haga clic en Guardar cambios en la parte inferior.
  - Después de guardar, seleccione una película para reproducir y seleccione Convertir automáticamente en la configuración de reproducción.
  - Normalmente, al usar el GPU integrado para la transcodificación, agregará un consumo de energía de 4-8W. Y muy poca potencia de CPU. Esto es muy emocionante.
![](https://manage.icewhale.io/api/static/docs/1727266979170_image.png)

| **Antes**        | **Después**         |
|-------------------|-------------------|
| ![Imagen Antes](https://manage.icewhale.io/api/static/docs/1727266997124_image.png) | ![Imagen Después](https://manage.icewhale.io/api/static/docs/1727267013579_image.png) |

### 2. Usando el GPU Nvidia
Si tiene un ZimaCube pro con un GPU Nvidia integrado, o si instaló un GPU Nvidia usted mismo, puede seguir los siguientes pasos para configurarlo:
  - Se recomienda una nueva instalación.
  - Para una lista de GPUs Nvidia actualmente soportadas por ZimaOS, consulte la sección GPUs NVIDIA actuales en https://us.download.nvidia.com/XFree86/Linux-x86_64/555.58.02/README/supportedchips.html
  - Encuentre la aplicación Plex en el panel de ZimaOS, haga clic en los tres puntos en la esquina superior derecha y haga clic en Configuración en el siguiente menú.
  - Agregue NVIDIA_VISIBLE_DEVICES all a las variables de entorno en Configuración y guarde.
![](https://manage.icewhale.io/api/static/docs/1727267065118_image.png)
  - Navegue a Configuración > Servidor > Transcoder para acceder a la configuración del servidor.
  - Active Mostrar avanzado en la esquina superior derecha para exponer la configuración avanzada.
  - Active Usar aceleración de hardware cuando esté disponible.
  - Elija Dispositivo de transcodificación por hardware: Desconocido (NVIDIA)
   ![](https://manage.icewhale.io/api/static/docs/1727267082104_image.png)
  - Haga clic en Guardar cambios en la parte inferior.
  - Después de guardar, seleccione una película para reproducir y seleccione Convertir automáticamente en la configuración de reproducción.
  - Normalmente, al usar el GPU Nvidia para la transcodificación, aumentará el consumo de energía en 10-25W. Al mismo tiempo, no consume nada de potencia de computación del CPU. Esto es muy emocionante.
  - Aunque el consumo de energía es mayor que el GPU integrado, debido al excelente rendimiento del GPU Nvidia, puede manejar la transcodificación de alta resolución más rápido y puede manejar múltiples flujos de video al mismo tiempo.
![](https://manage.icewhale.io/api/static/docs/1727267123811_image.png)

| **Antes**        | **Después**         |
|-------------------|-------------------|
| ![Imagen Antes](https://manage.icewhale.io/api/static/docs/1727267241180_image.png)| ![Imagen Después](https://manage.icewhale.io/api/static/docs/1727267268401_image.png)|

## Conclusión
Ambas soluciones pueden apoyar efectivamente la transmisión acelerada por hardware de Plex. La elección entre GPUs NVIDIA e Intel depende de sus necesidades específicas y presupuesto. Si necesita manejar videos de alta resolución o múltiples flujos, un GPU NVIDIA podría ser la mejor opción. Si se preocupa más por el costo y el consumo de energía, un GPU Intel podría ser más adecuado.