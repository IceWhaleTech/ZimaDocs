---
title: Cómo usar la CLI para navegar en ZimaOS
description:
type: “Docs”
tip: El formato fijo de la barra superior no debe ser eliminado, la descripción es para el artículo, si no se llena, se extraerá el primer párrafo de texto.
---
ZimaOS 3 es un cambio de juego para los entusiastas de NAS, usuarios profesionales y usuarios de estudio. Su interfaz intuitiva simplifica la copia de seguridad y la gestión de datos, asegurando que sus archivos críticos estén siempre seguros. ZimaOS destaca en la instalación de aplicaciones Docker, agilizando el proceso con solo unos pocos clics.

¿Alguna vez has pensado en lo que hay detrás de la glamorosa interfaz de ZimaOS? Hoy, utilizamos otra interfaz para acceder a nuestro ZimaOS.
![](https://manage.icewhale.io/api/static/docs/1727176855906_image.png)

> La GUI (Interfaz Gráfica de Usuario) ofrece una experiencia interactiva visual con íconos y menús, diseñada para una navegación intuitiva, dirigida a usuarios de todos los niveles de habilidad por su facilidad de uso. La CLI (Interfaz de Línea de Comandos), por otro lado, es una interfaz basada en texto para ejecutar comandos, favorecida por expertos por su eficiencia y capacidades de scripting.
>
![](https://manage.icewhale.io/api/static/docs/1727176878586_image.png)
## Tres formas de acceder a la CLI en ZimaOS

### Método 1: Usa tu teclado y pantalla

Conecta tu dispositivo Zima a un teclado y una pantalla. Al iniciar, ZimaOS mostrará una interfaz como esta en la pantalla:
![](https://manage.icewhale.io/api/static/docs/1727177117363_image.png)
Presiona **Alt+F2**, y accederás a una página de inicio de sesión. Ahora, ingresa root y presiona Enter. Si es la primera vez que ingresas a esta página, no necesitarás una contraseña y estarás en la CLI de ZimaOS directamente. Te recomendamos que configures una contraseña para tu cuenta de root. Ingresa passwd-root y esta herramienta te pedirá que establezcas la contraseña para root. Ten en cuenta que una contraseña para root es necesaria para iniciar sesión por SSH.

### Método 2: Usa tu Cliente SSH

SSH es un método de acceso remoto ampliamente utilizado. ZimaOS también se puede acceder utilizando SSH.

De nuevo, se necesita una contraseña para root para iniciar sesión por SSH. Consulta el contenido anterior.

Abre una terminal. Aquí, usamos el terminal de Windows como ejemplo. Ingresa **ssh root@tuZimaOSIP** y presiona **Enter**. Se te pedirá que confíes en una huella digital de clave y que ingreses la contraseña. Después de eso, estarás en la CLI de ZimaOS a través de SSH.
![](https://manage.icewhale.io/api/static/docs/1727177214909_image.png)
### Método 3: Usa la aplicación ttydBridge

Este es el método sugerido para usar la CLI en ZimaOS. Inicia sesión en la WebUI de ZimaOS a través de la IP de tu dispositivo Zima. En la WebUI de ZimaOS, podemos instalar el ttydBridge desde nuestra tienda de aplicaciones.
![](https://manage.icewhale.io/api/static/docs/1727177258550_image.png)
Después de la instalación, lanza el ttydBridge desde el panel de control y se te pedirá que ingreses el nombre de usuario y la contraseña. Dado que has iniciado sesión en nuestra WebUI, puedes ingresar admin como nombre de usuario y la contraseña como la contraseña para ttydBridge. Ahora, verás una hermosa CLI como esta:
![](https://manage.icewhale.io/api/static/docs/1727177269954_image.png)
### Diferencias y comandos comunes
Por razones de seguridad, la mayoría de las carpetas del sistema son de solo lectura incluso si inicias sesión como root, lo que distingue el sistema de archivos de ZimaOS de otras distribuciones de linux.

Los datos de usuario y los datos de aplicaciones se colocarán en /DATA. Siéntete libre de utilizar comandos para crear, eliminar y modificar archivos y carpetas dentro de los subdirectorios de /DATA. Por supuesto, te recomendamos que crees una nueva subcarpeta dentro de /DATA para realizar estos experimentos.

Aquí también compartimos contigo algunos comandos y herramientas comúnmente utilizados.
![](https://manage.icewhale.io/api/static/docs/1727177290437_image.png)
![](https://manage.icewhale.io/api/static/docs/1727177297428_image.png)
![](https://manage.icewhale.io/api/static/docs/1727177303590_image.png)
Estos comandos funcionan bien en ZimaOS. Esperamos que esta tabla te ayude a comprender mejor cómo funciona la CLI en ZimaOS.

Si encuentras algún problema durante el uso, no dudes en hacérnoslo saber en cualquier momento. Simplemente comenta a continuación. También puedes unirte a nuestro [Discord](https://discord.com/invite/uuNfKzG5) para hablar más sobre la aplicación Docker y ZimaOS. ¡Esperamos tus comentarios!