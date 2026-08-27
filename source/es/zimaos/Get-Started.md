---
title: Primeros pasos con ZimaOS
description: "Instala ZimaClient en el ordenador o el móvil, crea una cuenta de ZimaOS, elige el idioma y completa la configuración inicial en Windows, macOS, iOS o Android."
type: Docs
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Configurar un dispositivo nuevo no debería convertirse en una tarea complicada. Después de repetir este primer arranque muchas veces, la versión corta es sencilla: instala el cliente, crea una cuenta y empieza a utilizarlo.

## Antes de empezar

El dispositivo Zima debe estar encendido y conectado a la misma red que el ordenador utilizado para configurarlo. Si todavía no has instalado ZimaOS, consulta primero **[Instalar ZimaOS](./how-to-install-zimaos "Guía paso a paso para instalar ZimaOS desde cero en tu dispositivo")**.

## Instalar ZimaClient

ZimaClient conecta el ordenador o el teléfono con el dispositivo Zima. Detecta automáticamente el dispositivo en la red y configura el acceso remoto.

**Ordenador** — Descarga la aplicación para **[Windows o macOS](https://www.zimaspace.com/zimaos/download "Descarga ZimaClient para Windows y macOS")**. Instálala y ábrela; buscará dispositivos disponibles en la red.

**Móvil** — Descarga ZimaClient para **[iOS](https://www.zimaspace.com/zimaos/download "Descarga ZimaClient para iOS desde App Store")** desde App Store o para **[Android](https://www.zimaspace.com/zimaos/download "Descarga ZimaClient para Android desde Google Play")** desde Google Play. La aplicación móvil permite comprobar el estado del sistema, gestionar aplicaciones y sincronizar archivos del teléfono.

![Página de descarga de ZimaClient con opciones para macOS, Windows, iOS y Android](https://manage.icewhale.io/api/static/docs/1773888170981_20260318-185643.jpeg)

## Iniciar sesión y configurar

Cuando ZimaClient encuentre el dispositivo, haz clic para conectarte. Aparecerá la pantalla de configuración de ZimaOS.

**Elige el idioma.** ZimaOS admite inglés, chino, japonés y otros idiomas. La comunidad continúa ampliando las traducciones disponibles.

![Pantalla de configuración inicial de ZimaOS con un selector de inglés, chino y japonés](https://manage.icewhale.io/api/static/docs/1727082127778_image.png)

**Crea la cuenta.** La primera cuenta será la cuenta principal, con privilegios de propietario y administrador. Elige un nombre de usuario y una contraseña segura.

![Pantalla de ZimaOS para crear una cuenta local con campos de usuario y contraseña](https://manage.icewhale.io/api/static/docs/1727082165610_image.png)

Después de crearla, ZimaOS mostrará un breve resumen de las funciones principales. El dispositivo ya está listo.

![Asistente de ZimaOS con un resumen de acceso remoto, RAID, almacenamiento Btrfs y NAS OS](https://manage.icewhale.io/api/static/docs/1727082245929_image.png)

## Funciones que ya están configuradas

Algunas funciones están disponibles inmediatamente y no requieren ajustes adicionales.

**Acceso remoto.** Después de conectarte por primera vez mediante ZimaClient, podrás acceder al dispositivo desde fuera de casa. La conexión está cifrada y es punto a punto, sin redirección de puertos ni configuración del router.

Puedes abrir un archivo del NAS desde una cafetería, revisar una descarga mientras viajas o compartir una carpeta sin subirla primero a un servicio de terceros. El dispositivo se convierte en un servidor doméstico accesible desde cualquier lugar y los datos permanecen bajo tu control. El acceso remoto se puede desactivar desde Settings con un solo clic. Los datos nunca atraviesan servidores de terceros.

**Uso compartido mediante Samba.** Todos los espacios de almacenamiento se comparten de forma predeterminada en la red local y están protegidos con la cuenta y contraseña de ZimaOS. ZimaClient gestiona automáticamente la conexión P2P. Una vez conectado, las carpetas compartidas aparecen en Finder en Mac o en el Explorador de archivos de Windows y puedes mover archivos como en cualquier otra carpeta.

Si un equipo trabaja en el mismo proyecto o una familia comparte fotos y vídeos, todos pueden utilizar el mismo almacenamiento sin instalar software adicional. Los permisos están vinculados a las cuentas de ZimaOS, por lo que decides quién puede ver cada contenido.

## Siguiente paso

- **[Resumen de funciones](./features "Recorrido por el acceso remoto, el almacenamiento y las aplicaciones de ZimaOS")** — descubre el panel de ZimaOS y sus posibilidades
- **[Descargar ZimaClient](./zimaclient-install "Instala y configura ZimaClient en ordenadores y móviles")** — consulta más detalles sobre la aplicación de escritorio
- **[Acceso remoto](./remote-access "Configura el acceso remoto para utilizar el servidor doméstico desde cualquier lugar")** — configura y gestiona conexiones remotas

## Solución de problemas

Si ZimaClient no encuentra el dispositivo, comprueba que ambos estén en la misma red. También puedes conectarte directamente mediante la dirección IP: busca la IP del dispositivo en la lista de clientes DHCP del router e introdúcela en el navegador. La pantalla de configuración será la misma.
