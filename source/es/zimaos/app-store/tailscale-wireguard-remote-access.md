---
title: Acceso remoto con Tailscale y WireGuard
seo_title: "Conecta con tu servidor doméstico ZimaOS desde cualquier lugar con Tailscale y WireGuard"
description: "Accede a tu servidor doméstico ZimaOS con Tailscale, WireGuard Easy, Firefly o NetBird desde la App Store oficial. Protocolos abiertos, tus propias claves, control total."
type: Docs
author: Lauren Pan
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---
ZimaClient gestiona el acceso remoto en ZimaOS desde el momento en que inicias sesión. Pero muchos de vosotros ya utilizáis redes Tailscale o servidores WireGuard, y el motivo suele ser el mismo. Quieres que la conexión esté construida sobre protocolos abiertos, con cuentas y claves que controlas tú. Esta guía cubre esas vías, instaladas directamente desde la App Store.

## Por qué protocolos estándar

ZimaOS no recopila datos de usuario, sea cual sea la forma en que te conectes. La diferencia entre las vías está en dónde reside el control.

El acceso remoto integrado funciona a través de ZimaClient. Inicias sesión y la conexión queda configurada por ti, de igual a igual y cifrada. Los protocolos estándar ponen esa configuración en tus manos. Aportas tu propia cuenta de Tailscale o tus propias claves de WireGuard. El tráfico sigue siendo de igual a igual, los clientes funcionan en Linux, Android y otras plataformas, y nada queda atado a un único proveedor. Si algún día dejas ZimaOS atrás, tu red y tus configuraciones se van contigo.

La App Store oficial incluye cuatro aplicaciones para esto: **Tailscale**, **WireGuard Easy**, **Firefly** y **NetBird**.

## Elige tu aplicación

| Aplicación | Qué es | Ideal para |
|---|---|---|
| Tailscale | Una VPN de malla basada en WireGuard que no necesita puertos abiertos | Unir tus dispositivos en una red privada con una configuración mínima |
| WireGuard Easy | Una interfaz web para gestionar un servidor VPN WireGuard | Ejecutar tu propio servidor WireGuard con un panel |
| Firefly | Un servidor VPN WireGuard basado en wg-easy | Un servidor WireGuard con los valores predeterminados ya elegidos |
| NetBird | Una red superpuesta basada en WireGuard con SSO, MFA y controles de acceso | Equipos y reglas de acceso detalladas |

Tailscale y NetBird utilizan sus propios servicios para coordinar los dispositivos, mientras que el tráfico sigue siendo de igual a igual. WireGuard Easy y Firefly lo guardan todo en tu dispositivo, claves incluidas.

## Instalar desde la App Store

Los primeros pasos son los mismos para las cuatro aplicaciones:

1. Abre la **App Store** en tu dispositivo ZimaOS.
2. Busca la aplicación y haz clic en **Instalar**.
3. Abre la aplicación desde tus aplicaciones instaladas.

![Tarjeta de la aplicación Tailscale en la App Store de ZimaOS con el botón Instalar y la descripción](/images/app-store/tailscale-app-store-card.webp)

Tailscale necesita algunos pasos más, que se explican a continuación. Las otras tres aplicaciones se cubren después de la configuración del cliente.

### Tailscale

En el primer arranque, Tailscale te pide que inicies sesión con tu cuenta de Tailscale. Se abre una página del navegador, autorizas el dispositivo y tu dispositivo ZimaOS se une a tu tailnet.

![Página de inicio de sesión de Tailscale pidiéndote que autorices tu servidor doméstico en el tailnet](/images/app-store/tailscale-sign-in.png)

Dale un nombre reconocible y búscalo después en la [consola de administración de Tailscale](https://login.tailscale.com/admin/machines "Gestiona tus dispositivos Tailscale en la consola de administración oficial") con su dirección 100.x.

![Consola de administración de Tailscale mostrando el servidor doméstico con su dirección 100.x](/images/app-store/tailscale-admin-console-device.webp)

Cualquier dispositivo de tu tailnet puede ahora llegar a tu servidor doméstico ZimaOS a través de esa dirección, sin importar dónde esté cada uno. Guarda la URL del panel en los marcadores de tu portátil e inicia sesión desde cualquier lugar.

## Instalar las aplicaciones cliente

El lado del cliente es sencillo. Instala la aplicación oficial desde la tienda de aplicaciones de tu dispositivo y conéctala a tu red.

En iOS, ambas aplicaciones están en la App Store. En Android, descarga la aplicación oficial de Tailscale o WireGuard desde Google Play. En Linux, instala el cliente oficial de Tailscale o wireguard-tools desde tu distribución.

La configuración es un solo paso:

- Tailscale: abre la aplicación e inicia sesión con tu cuenta de Tailscale. El dispositivo aparece en tu tailnet.
- WireGuard: importa el archivo de configuración o escanea el código QR que creaste en ZimaOS.

![Aplicación Tailscale en iOS mostrando el servidor doméstico conectado al tailnet](/images/app-store/tailscale-ios-app.png)

## WireGuard Easy, Firefly y NetBird

Las otras tres aplicaciones siguen el mismo flujo de instalación desde la App Store. Cada una abre su página de gestión tras la instalación.

**WireGuard Easy** ejecuta un servidor VPN WireGuard con una interfaz web. Crea un cliente por dispositivo y entrega a cada uno su configuración como código QR o archivo de configuración.

**Firefly** es el servidor WireGuard más sencillo, basado en wg-easy. Crea un cliente, escanea el código QR en tu teléfono y ya estás conectado.

**NetBird** conecta tus dispositivos en una red superpuesta basada en WireGuard con SSO, MFA y controles de acceso detallados. Aprueba los dispositivos y define las reglas de acceso desde el panel de NetBird.

Ten en cuenta:

- Los servidores WireGuard escuchan en un puerto UDP. Para llegar a WireGuard Easy o Firefly desde fuera de tu red doméstica, ese puerto necesita una dirección IP pública o un reenvío de puertos en tu router.
- NetBird gestiona el inicio de sesión y las reglas de acceso a través de su propio servicio. Tu cuenta de ZimaOS no participa.

## Escritorio y configuración avanzada

En el escritorio, el flujo es el mismo que en el móvil. Instala el cliente oficial de Tailscale o WireGuard para Windows, macOS o Linux y luego inicia sesión con tu cuenta de Tailscale o importa tu configuración de WireGuard.

Para la configuración avanzada, la documentación oficial cubre los detalles:

- Tailscale: [Base de conocimientos de Tailscale](https://tailscale.com/kb/ "Documentación oficial de Tailscale para la configuración inicial y avanzada")
- WireGuard: [Sitio oficial de WireGuard](https://www.wireguard.com/install/ "Sitio oficial de WireGuard con clientes e instrucciones de configuración")
- WireGuard Easy: [Repositorio de wg-easy](https://github.com/wg-easy/wg-easy "Repositorio oficial de wg-easy con detalles de instalación y configuración")
- NetBird: [Documentación de NetBird](https://docs.netbird.io/ "Documentación oficial de NetBird sobre SSO, MFA y reglas de acceso")

## Lo que estas aplicaciones no hacen

- No sustituyen a ZimaClient. La navegación de fotos, la **[copia de seguridad del teléfono](../phone-backup "Realiza automáticamente una copia de seguridad de tu teléfono en ZimaOS con ZimaClient")**, la **[copia de seguridad del ordenador](../computer-backup "Realiza una copia de seguridad de tu ordenador en ZimaOS mediante Finder, el Explorador o sincronización")**, el Connect ID y el interruptor de acceso remoto en los ajustes de ZimaOS pertenecen a ZimaClient. Tailscale y WireGuard transportan la conexión. No hacen copias de seguridad ni sincronizan nada.
- Tailscale y NetBird coordinan los dispositivos a través de sus propios servicios, así que tu cuenta vive en el proveedor. El tráfico sigue siendo de igual a igual. Si te importa guardar cada pieza en tu propio hardware, WireGuard Easy y Firefly lo hacen.
- ZimaOS no recopila datos de usuario en ninguna de estas vías.

## Siguiente

- **[Acceso remoto](../remote-access "Configura el acceso remoto para poder llegar a tu servidor doméstico desde cualquier lugar")** — la opción integrada
- **[Descargar ZimaClient](../zimaclient-install "Instala y configura ZimaClient en el ordenador y el móvil para acceder al dispositivo")** — clientes para escritorio y móvil
- **[Aplicaciones autoalojadas](./self-hosted-apps "Explora aplicaciones autoalojadas que puedes ejecutar en tu servidor doméstico ZimaOS")** — qué más puede ejecutar tu dispositivo
