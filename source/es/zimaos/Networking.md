---
title: Redes
description:ZimaOS no tiene interfaz de escritorio, conecta el cable Ethernet y estará listo. La pantalla conectada muestra la información del dispositivo y las direcciones IP, mientras que el panel de control permite ver las velocidades de enlace por puerto, cambiar a una IP estática o habilitar el acceso remoto.
type: “Docs”
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
permalink: /es/zimaos/networking.html
---
**ZimaOS** no tiene un entorno de escritorio. Cuando conectas un monitor a tu dispositivo, la pantalla muestra una vista general de consola con la versión de ZimaOS, el modelo del dispositivo y las direcciones IP que puedes usar para acceder al panel web de ZimaOS.

Ejemplo de lo que verás en la pantalla:

![Zimaos display UI](https://manage.icewhale.io/api/static/docs/1783495730981_image.png)


De forma predeterminada, ZimaOS obtiene una dirección IP automáticamente mediante DHCP; solo conecta el cable Ethernet y el dispositivo estará listo. Si necesitas cambiar la configuración de red, abre el panel de control y ve a **Settings > Network**.

## Configuración de red

La página **Network** muestra todos los puertos Ethernet físicos de tu dispositivo de un vistazo. Para cada puerto puedes ver:

- Nombre de la interfaz (por ejemplo, `eth0`, `eth1`)
- Estado del enlace (Connected / Disconnected)
- Velocidad de enlace actual (por ejemplo, 1000 Mbps, 2500 Mbps)
- Dirección IP asignada (mediante DHCP)

Esto facilita verificar que cada puerto negocia a la velocidad esperada y ha recibido una IP válida de tu router.

## Configuración de una IP estática

Cada interfaz de red puede cambiarse de una configuración automática (DHCP) a una configuración manual de IP estática:

1. Haz clic en la interfaz que deseas configurar
2. Cambia el modo de **DHCP** a **Manual**
3. Introduce la dirección IP, máscara de subred, puerta de enlace y servidor DNS deseados
4. Haz clic en **Save**
![Setting Page](https://manage.icewhale.io/api/static/docs/1783495665542_image.png)

El cambio se aplica inmediatamente. Si la nueva IP está en una subred diferente, tu sesión actual del panel se desconectará; utiliza la nueva IP mostrada en el monitor conectado para volver a conectarte.

## Acceso remoto

El interruptor de **Remote Access** en la página Networking permite habilitar el acceso entrante a tu panel de ZimaOS a través de Internet. Cuando está habilitado, ZimaOS establece una conexión de retransmisión segura para que puedas acceder a tu dispositivo desde cualquier lugar sin configurar el reenvío de puertos en tu router.

Para obtener más detalles, consulta [Remote Access](https://www.zimaspace.com/docs/zimaos/remote-access).