---
title: ¡ZimaBoard + Syncthing!
description:
type: “Docs”
tip: La barra superior tiene un formato fijo, por favor no la elimine. La descripción es para el artículo, si no se llena se tomará el primer párrafo del contenido.
---
**Protege tus datos y disfruta de una experiencia de copia de seguridad y sincronización sin preocupaciones
¡Copia de seguridad y sincronización sin esfuerzo, deja que tus datos fluyan libremente!**
ZimaBoard + Syncthing, integrados sin problemas, te brindan la mejor solución de gestión de datos. Ya sean fotos valiosas, documentos importantes o música querida, tus datos siempre estarán respaldados y sincronizados de manera segura y confiable. ZimaBoard ofrece un soporte de hardware confiable, mientras que Syncthing proporciona potentes capacidades de sincronización y compartición de archivos. Con procesos de copia de seguridad automatizados y sincronización en tiempo real, tus datos permanecen sincronizados contigo para siempre. No importa dónde estés, ya no tienes que preocuparte por la pérdida de datos. ZimaBoard + Syncthing te permite concentrarte en crear, trabajar y disfrutar de la vida.
# Introducción
Syncthing es un software de sincronización y compartición de archivos de código abierto que permite la sincronización segura de archivos y carpetas entre múltiples computadoras. Es una aplicación de pares que opera sin un servidor central, y toda comunicación está encriptada y se realiza directamente a través de la red local. Syncthing proporciona soporte multiplataforma y puede ejecutarse en sistemas operativos como Windows, Mac OS, Linux y Android.

ZimaBoard es un potente servidor de placa única diseñado para creadores, desarrolladores y usuarios individuales. Proporciona una plataforma de hardware de alto rendimiento y alta confiabilidad para construir servidores personales, centros multimedia en el hogar, aplicaciones de IoT y una variedad de otras tareas de computación.

El hardware de ZimaBoard tiene una amplia gama de casos de uso en la vida real. A continuación se presentan algunos casos de aplicación práctica comunes:
- **Servidor personal:** ZimaBoard se puede utilizar como un servidor personal para almacenar y gestionar datos personales, construir sitios web personales, blogs o servicios de compartición de archivos. Puedes acceder y gestionar tus datos en cualquier momento y lugar a través de acceso remoto.

- **Centro multimedia en casa:** Combina ZimaBoard con software de centro multimedia (como Kodi) para crear un potente centro multimedia en el hogar. Puedes almacenar archivos multimedia en una ubicación centralizada con ZimaBoard y reproducirlos sin problemas en tu televisor u otros dispositivos.

- **Aplicaciones de Internet de las cosas (IoT):** La interfaz extendida y la conectividad de red de ZimaBoard lo hacen ideal para construir aplicaciones de IoT. Puedes conectar una variedad de sensores y dispositivos e integrarlos en ZimaBoard para realizar hogar inteligente, monitoreo ambiental, control remoto y otras aplicaciones.

- **Oficina remota y acceso remoto:** Al configurar ZimaBoard como un servidor de acceso remoto, puedes realizar fácilmente oficina remota y acceso. No importa dónde estés, solo conéctate a ZimaBoard para acceder a tus archivos, aplicaciones y otros recursos.

## Ventajas de usar ZimaBoard + Syncthing:
- 1. Privacidad y seguridad de los datos: Al usar un servidor personal, tienes control total sobre tus datos. Tus datos no se almacenan en servidores de proveedores de servicios en la nube de terceros, lo que reduce el riesgo de acceso, filtraciones o uso indebido de datos. Además, puedes implementar medidas de seguridad en tu servidor, como firewalls y controles de acceso, para mejorar la privacidad y seguridad de los datos.

- 2. Copia de seguridad y sincronización de datos: Con Syncthing combinado con ZimaBoard, puedes realizar fácilmente copias de seguridad y sincronización de datos. Puedes elegir los archivos y carpetas para respaldar y sincronizar, almacenándolos en tu servidor personal. De esta manera, incluso si tus dispositivos sufren fallos o se pierden, aún puedes recuperar y acceder a tus datos desde el servidor personal.

- 3. Acceso y compartición entre dispositivos: ZimaBoard te permite compartir y acceder a datos entre múltiples dispositivos. Puedes sincronizar y acceder a los mismos datos en diferentes computadoras, smartphones, tablets y más, asegurando que tus archivos de trabajo y personales se mantengan sincronizados y consistentes entre dispositivos.

- 4. Flexibilidad y personalización: ZimaBoard proporciona ventajas de flexibilidad y personalización. Puedes elegir el hardware y el sistema operativo que se adapten a tus preferencias para construir tu servidor personal y configurarlo y ampliarlo según tus necesidades. Puedes establecer la capacidad de almacenamiento, la potencia de procesamiento y el ancho de banda de la red del servidor según tus requisitos de gestión de datos personales.

A continuación se proporcionará una explicación detallada sobre cómo sincronizar datos de dispositivos informáticos con CasaOS utilizando Syncthing.

# Pasos de operación
## 1. Instalación de sincronización
Para comenzar, necesitas instalar Syncthing en tu dispositivo informático. Visita el sitio web oficial en https://syncthing.net/ y descarga el paquete de instalación adecuado para tu sistema operativo. El proceso de instalación es similar al de cualquier otro software.
![](https://manage.icewhale.io/api/static/docs/1727262326663_image.png)
## 2. Ver el ID del dispositivo
Al ejecutar el software, a cada dispositivo se le asigna un ID de dispositivo único (una larga cadena de caracteres) para identificar el dispositivo, que utilizaremos más tarde en la sincronización. Haz clic en Acciones → para mostrar el ID y verlo.
![](https://manage.icewhale.io/api/static/docs/1727262345800_image.png)
## 3. Agregar una carpeta compartida
Selecciona la carpeta que deseas subir en ese dispositivo, después de lo cual todo el contenido de la carpeta aparecerá en ZimaBoard. Al mismo tiempo, si el operador agrega o elimina archivos de la carpeta, ZimaBoard también cambiará.
![](https://manage.icewhale.io/api/static/docs/1727262377851_image.png)
Por ejemplo, lo que estamos agregando son documentos de descargas. Solo necesitas ingresar la etiqueta, el ID y la ruta local de la carpeta para completar la adición.
Por ejemplo, lo que estamos agregando son documentos de descargas. Solo necesitas ingresar la etiqueta, el ID y la ruta local de la carpeta para completar la adición.
# 4. Agregar Dispositivos Remotos
Ejecuta Syncthing en CasaOS, haz clic en Agregar Dispositivo Remoto y conéctate con el dispositivo informático. (Para evitar confusiones, configuramos Syncthing en CasaOS en modo oscuro)
![](https://manage.icewhale.io/api/static/docs/1727262413245_image.png)
![](https://manage.icewhale.io/api/static/docs/1727262418895_image.png)

Ingresa el ID del dispositivo de la computadora.

![](https://manage.icewhale.io/api/static/docs/1727262438326_image.png)

Después de hacer clic en Guardar, puedes ver que la conexión es exitosa.

![](https://manage.icewhale.io/api/static/docs/1727262453826_image.png)

## 5. Configurar la sincronización de archivos
En el lado del dispositivo, Syncthing configura los archivos compartidos.

Haz clic en el botón de Opciones debajo de la carpeta compartida sincronizada y selecciona los dispositivos que deseas sincronizar en la interfaz de Compartición; Syncthing monitorea las notificaciones del sistema de archivos para detectar elementos cambiados y sincronizarlos.
![](https://manage.icewhale.io/api/static/docs/1727262752262_image.png)
![](https://manage.icewhale.io/api/static/docs/1727262756052_image.png)
Más tarde, el dispositivo aparecerá con una solicitud de carpeta compartida, haz clic en el botón Agregar en Syncthing en CasaOS para completar la configuración de sincronización.
![](https://manage.icewhale.io/api/static/docs/1727262766182_image.png)
Finalmente, la sincronización se completa.
## 6. Se completa la sincronización, compara datos
Por defecto, las carpetas compartidas de ambos dispositivos permanecen exactamente iguales.
## 7. Precauciones
Durante la operación, encontramos que si modificamos el contenido en cierta palabra en la carpeta del lado del dispositivo, Syncthing en CasaOS no puede cambiar en consecuencia, y si deseas actualizarlo completamente, necesitas volver a subir el sobreescritura. Este problema se resuelve en la nueva versión de FilesBrowser.

# Resumen
Con los métodos anteriores, puedes lograr copias de seguridad automáticas y sincronización en tiempo real de cualquier archivo, fotos, videos, etc., y soportar dispositivos multiplataforma, sin importar qué dispositivo o sistema operativo utilices. Lo mejor de todo: Syncthing utiliza comunicación encriptada entre pares para garantizar que tus archivos estén protegidos mientras están en tránsito. ZimaBoard proporciona un entorno de hardware estable y confiable para proteger tus datos de fallos o corrupción del hardware. Asegúrate de que tus datos siempre estén seguros y protegidos.