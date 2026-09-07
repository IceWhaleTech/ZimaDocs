---
title: Acceso remoto
seo_title: "Acceso remoto de ZimaOS: conéctate a tu servidor doméstico desde cualquier lugar"
description: "Cómo funciona el acceso remoto en ZimaOS: conexión cifrada de igual a igual, ruta más rápida automática, ID remoto del dispositivo, cambio entre dispositivos y protocolos estándar."
type: Docs
author: Lauren Pan
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---
El acceso remoto es esa función silenciosa que usas cada día sin pensarlo. Tu servidor doméstico se queda en casa y tú lo alcanzas desde una cafetería, una oficina u otro país. La conexión quedó configurada en el momento en que iniciaste sesión por primera vez.

## Cómo funciona el acceso remoto

ZimaClient y ZimaOS establecen un **canal cifrado de igual a igual** entre tu dispositivo y el servidor doméstico. Tus datos viajan directamente de uno a otro. **No hay ningún servidor de terceros en medio** y nadie puede leer lo que pasa por el canal.

![Diagrama del canal cifrado de igual a igual entre tu teléfono y tu servidor doméstico ZimaOS](/images/guides/remote-access-how-it-works.webp)

La conexión también elige la ruta más rápida por ti. En la red de casa utiliza la LAN local. Conecta Thunderbolt y cambia al cable directo. Fuera de casa funciona por internet o por un punto de acceso. No configuras nada de esto. ZimaClient encuentra la ruta más rápida y la toma.

El control se queda en tu dispositivo. ZimaOS ejecuta su propio controlador de red para las conexiones remotas, así que ninguna parte externa tiene derechos administrativos sobre tu red. ZimaOS no recopila, almacena ni tiene acceso a tus archivos, registros de conexión o datos de uso.

También puedes desactivar el acceso remoto por completo. Abre **Ajustes > Red** en el panel y apágalo. Las conexiones remotas se detienen ahí, mientras que tu red doméstica y las conexiones locales siguen funcionando con normalidad. Vuelve a activarlo cuando quieras tener el canal abierto de nuevo.

## Conectar desde el teléfono y el ordenador

El primer inicio de sesión en un dispositivo nuevo lo deja todo configurado. A partir de ahí, la conexión es automática. Abre ZimaClient y ya estás conectado, en casa o fuera. Consulta **[Primeros pasos](./get-started "Configura ZimaOS desde el primer arranque con ZimaClient y la creación de una cuenta")** si acabas de sacar el dispositivo de la caja.

Abre el cliente y obtienes algo más que una conexión. El panel del dispositivo muestra la IP de tu servidor doméstico y el estado de la conexión, con un botón que abre el panel de ZimaOS con un solo clic. Estés donde estés, el panel está a un toque.

![Panel del dispositivo en ZimaClient mostrando la IP del servidor doméstico, el estado de la conexión y el botón del panel](/images/guides/zimaclient-connection-info.png)

En el teléfono, el mismo cliente lleva las funciones que usas a diario. Archivos y Fotos mantienen tu contenido al alcance, y las copias de seguridad siguen funcionando cuando sales de casa. Consulta **[Copia de seguridad del teléfono](./phone-backup "Realiza automáticamente una copia de seguridad de tu teléfono en ZimaOS con ZimaClient")** y **[Fotos](./photos "Explora tu biblioteca de fotos por cronología, mapa y colecciones")** para esos casos.

En el ordenador, ZimaClient monta tu almacenamiento en Finder o en el Explorador de archivos y mantiene en marcha tus carpetas de copia de seguridad. Consulta **[Copia de seguridad del ordenador](./computer-backup "Realiza una copia de seguridad de tu ordenador en ZimaOS mediante Finder, el Explorador o sincronización")** para ver el proceso completo.

## El ID remoto de tu dispositivo

El ID remoto es la identidad única de tu dispositivo para las conexiones remotas. Otras personas llegan a tu dispositivo a través de él, así que trátalo como una contraseña para tus carpetas compartidas.

Para encontrarlo, abre **Ajustes** en el panel de ZimaOS, cambia a la pestaña **Red** y copia el ID remoto.

![Pestaña Red de Ajustes de ZimaOS mostrando el ID remoto del dispositivo con la opción de copiar](/images/guides/remote-id-location.webp)

Dos cosas que debes saber para mantenerlo seguro:

- Si el ID remoto se filtra, tus carpetas compartidas pueden quedar expuestas. Guárdalo para ti.
- Si sospechas una filtración, restablécelo con el botón **...** que aparece junto al ID remoto. La filtración deja de funcionar de inmediato. Las conexiones y los recursos compartidos existentes quedan invalidados, así que los dispositivos tendrán que volver a conectarse tras el restablecimiento.

![Pestaña Red de Ajustes de ZimaOS mostrando la opción de restablecer el ID remoto del dispositivo](/images/guides/remote-id-reset.png)

## Varios dispositivos

Tener más de un dispositivo ZimaOS es la norma, no la excepción. ZimaClient los muestra todos y cambiar de uno a otro es un toque en la lista de dispositivos.

![Lista de dispositivos de ZimaClient mostrando varios servidores domésticos ZimaOS entre los que cambiar](/images/guides/zimaclient-device-switch.png)

Dale a cada dispositivo su propio icono para distinguirlos fácilmente. En el panel de ZimaOS, abre **Ajustes > General** y haz clic en el botón de configuración junto a **Información del dispositivo**. El icono viaja con el dispositivo, así que el cliente muestra la misma identidad en cada pantalla que uses.

![Página General de Ajustes de ZimaOS con iconos de dispositivo personalizados, uno inspirado en la portada del álbum con ondas de púlsar](/images/guides/zimaclient-device-icons.png)

Para un segundo ordenador, Connect ID cubre el caso en el que tu dispositivo no está cerca. Inicia sesión con el Connect ID en lugar de un escaneo local y la conexión funciona igual. Más información en **[Funciones](./features "Recorre las funciones de acceso remoto, almacenamiento y aplicaciones de ZimaOS")**.

## ZimaClient o un protocolo estándar

ZimaClient es la vía integrada. Inicias sesión y la conexión remota funciona sin ninguna configuración de red por tu parte. La conexión es de igual a igual, por lo que tus datos se mueven directamente entre dispositivos.

Si prefieres que la conexión funcione sobre protocolos abiertos, la App Store oficial tiene cuatro aplicaciones para ello: Tailscale, WireGuard Easy, Firefly y NetBird. Aportas tu propia cuenta o tus propias claves, y la conexión funciona con clientes estándar en Linux, Android y otras plataformas. Consulta **[Acceso remoto con Tailscale y WireGuard](./app-store/tailscale-wireguard-remote-access "Configura el acceso remoto con Tailscale o WireGuard en tu servidor doméstico")** para ver la comparación y los pasos de configuración.

## Siguiente

- **[Descargar ZimaClient](./zimaclient-install "Instala y configura ZimaClient en el ordenador y el móvil para acceder al dispositivo")** — el cliente para cada dispositivo que llevas contigo
- **[Acceso remoto con Tailscale y WireGuard](./app-store/tailscale-wireguard-remote-access "Configura el acceso remoto con Tailscale o WireGuard en tu servidor doméstico")** — la vía de los protocolos estándar
- **[Compartir archivos por SMB](./smb-troubleshooting "Comparte archivos mediante SMB para que aparezcan en Finder y en el Explorador de archivos")** — compartir en la red local
