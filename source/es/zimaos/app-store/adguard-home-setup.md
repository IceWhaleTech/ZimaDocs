---
title: Cómo ejecutar AdGuard Home en ZimaOS
seo_title: "AdGuard Home en ZimaOS: bloqueo de anuncios y rastreadores en toda la red"
description: Instala AdGuard Home desde la App Store de ZimaOS — bloquea anuncios, rastreadores y dominios maliciosos para todos los dispositivos de tu red con tu propio servidor DNS.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descripción general

AdGuard Home tiene soporte nativo en el App Catalog de ZimaOS. Consulta la [página de AdGuard Home en la App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.adguardhome) para conocer los detalles más recientes de la app.

AdGuard Home es un servidor DNS de bloqueo de anuncios y rastreadores para toda la red que se ejecuta en tu propio hardware: bloquea anuncios, rastreadores y dominios maliciosos para todos los dispositivos de tu red, desde teléfonos hasta dispositivos de hogar inteligente, sin instalar nada en los propios dispositivos.

## Prerrequisitos

- Un sistema ZimaOS en funcionamiento.
- Puertos **82** y **3001** disponibles en el dispositivo — son los puertos del host de ZimaOS asignados al puerto 80 de AdGuard Home (interfaz web) y al 3000 (asistente de configuración).
- El puerto **53** también debe estar libre para DNS.

## App Catalog

1. Encuentra AdGuard Home en el App Catalog de ZimaOS. Abre **App Store** → busca "AdGuard Home" → haz clic en **Install**.

![Página de la app AdGuard Home en la App Store de ZimaOS con instalación e instalación personalizada](/images/app-store/adguard-app-store.webp)

2. **¡Ya está listo para usar!**

![Icono de AdGuard Home en el panel de ZimaOS tras completarse la instalación](/images/app-store/adguard-installed-dashboard.webp)

## Configuración

Una vez completada la descarga, abre los ajustes de la app y añade una regla de reenvío de puertos:

1. Haz clic en el botón **'+'** bajo **Port forwarding** y añade una regla que asigne `82` a `80`.

![Reglas de reenvío de puertos de AdGuard Home con un nuevo mapeo TCP de 82 a 80](/images/app-store/adguard-port-forwarding.webp)

> **Consejo:** Si al añadir la regla aparece un error, es probable que el puerto `82` ya esté en uso por otra app. Cambia `82` por otro puerto libre y recuerda actualizar todas las menciones de `82` para que coincidan. No cambies el mapeo del puerto `53` — es necesario para DNS.

## Configuración inicial

1. Haz clic en el icono de AdGuard Home para abrir la configuración inicial.
2. Mantén todos los ajustes por defecto y completa la configuración, creando tu nombre de usuario y contraseña de administrador.

> La interfaz de administración de AdGuard Home escucha en todas las interfaces de red por defecto. Para cambiar esta configuración, consulta la guía de AdGuard sobre [cómo ejecutar AdGuard Home de forma segura](https://adguard-dns.io/kb/adguard-home/running-securely/ "Guía oficial de seguridad de AdGuard Home").

## Después de la configuración

1. Vuelve al panel de ZimaOS y abre de nuevo los ajustes de la app. En el campo **Web URL** (webURL), cambia `3001` por `82`.

![Ajustes de la app AdGuard Home con el campo Web URL cambiado de 3001 a 82](/images/app-store/adguard-web-url.webp)

2. Haz clic en el icono de AdGuard Home e inicia sesión con el nombre de usuario y la contraseña que configuraste durante la instalación.

![Pantalla de inicio de sesión de AdGuard Home con campos de usuario y contraseña](/images/app-store/adguard-login.webp)

## Configura una IP estática

Antes de apuntar tu router a AdGuard Home, asigna al dispositivo ZimaOS una dirección fija. Si mantiene una dirección asignada por DHCP y esa dirección cambia más tarde, todos los dispositivos de tu red perderán la resolución DNS hasta que se actualice.

1. Abre **Settings** → **Network** de ZimaOS y selecciona tu interfaz de red.
2. Cámbiala de automática (DHCP) a **Manual** y rellena los campos.
3. Guarda los ajustes.

![Ajustes de red de ZimaOS en modo manual con IP estática, puerta de enlace y DNS](/images/app-store/adguard-static-ip.webp)

Los campos que se muestran en la captura son ejemplos — sustitúyelos por los valores que coincidan con tu propia red:

- Dirección IP: p. ej. `10.0.1.91`
- Máscara de subred: p. ej. `255.255.255.0` (o una longitud de prefijo como /24, según tu configuración)
- Puerta de enlace: p. ej. `10.0.1.1`
- DNS: p. ej. `94.140.14.14` (primario), `94.140.15.15` (secundario)

Como alternativa, puedes reservar la dirección en la página DHCP de tu router para que el dispositivo reciba siempre la misma IP.

## Apunta tu router a AdGuard Home

Cuando hayas terminado de configurar AdGuard Home, abre los ajustes de tu router y busca la sección **DHCP/DNS**, e introduce la dirección del dispositivo que ejecuta AdGuard Home — por ejemplo `10.0.1.91`. Guarda los ajustes y ya estás listo.

> Algunos routers no permiten configurar un servidor DNS personalizado en absoluto. En ese caso, puedes usar el servidor DHCP propio de AdGuard Home.

## Añadir listas de bloqueo

AdGuard Home incluye el **filtro DNS de AdGuard** activado por defecto, por lo que el filtrado funciona en cuanto se completa la configuración. Para filtrar de forma más agresiva, abre **Filters** → **DNS blocklists** → **Add blocklist** para añadir listas de bloqueo DNS adicionales — cualquier dominio de esas listas se bloquea para todos los dispositivos de tu red.

## Qué bloquea AdGuard Home

El bloqueo basado en DNS funciona por dominio, por lo que puede bloquear:

- anuncios y rastreadores servidos desde dominios dedicados de publicidad y seguimiento
- dominios maliciosos y de phishing
- telemetría de apps y dispositivos de hogar inteligente

Ten en cuenta: AdGuard Home no puede eliminar anuncios servidos desde el mismo dominio que el contenido, como los anuncios dentro de los vídeos de YouTube y la mayoría de los anuncios dentro de apps. Esos requieren un bloqueador a nivel de dispositivo. Para los anuncios de YouTube y de las apps en tu teléfono u ordenador, prueba AdGuard Ad Blocker con el código ZIMAGUARD30 y obtén un 30 % de descuento.

El filtrado a nivel de red está activo cuando las solicitudes de los clientes aparecen en el **Query Log** de AdGuard Home y las solicitudes bloqueadas aparecen en las estadísticas del **Dashboard**.

![Panel de AdGuard Home con recuentos de consultas DNS y estadísticas de clientes](/images/app-store/adguard-dashboard-stats.webp)

## Actualizaciones

AdGuard Home se ejecuta como un contenedor Docker, y las actualizaciones automáticas están desactivadas en las instalaciones Docker por diseño. Por lo tanto, el botón **Update** dentro de la interfaz de AdGuard Home no funcionará. Para actualizar, instala la versión más reciente desde la **App Store de ZimaOS**.

## Guías relacionadas

- ¿Buscas otra opción? Consulta [Configuración de Pi-hole](./pi-hole-setup "Bloquea anuncios y rastreadores en toda la red con Pi-hole en ZimaOS").

## ¿Necesitas ayuda?

Si tienes cualquier problema al instalar o usar AdGuard Home en ZimaOS, únete a la [comunidad de Discord de ZimaSpace](https://discord.gg/f9nzbmpMtU "Únete a la comunidad de Discord de ZimaSpace para soporte de ZimaOS"). Nuestro equipo y los miembros de la comunidad estarán encantados de ayudarte.
