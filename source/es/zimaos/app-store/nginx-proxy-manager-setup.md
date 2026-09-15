---
title: Cómo ejecutar Nginx Proxy Manager en ZimaOS
seo_title: "Nginx Proxy Manager en ZimaOS: proxy inverso y configuración de HTTPS"
description: Instala Nginx Proxy Manager desde la App Store de ZimaOS — configura proxies inversos, certificados de Let's Encrypt y HTTPS para tus apps autogestionadas.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descripción general

Nginx Proxy Manager tiene soporte nativo en el App Catalog de ZimaOS. Consulta la [página de Nginx Proxy Manager en la App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.nginxproxymanager) para conocer los detalles más recientes de la app.

[Nginx Proxy Manager](https://nginxproxymanager.com/ "Sitio web oficial de Nginx Proxy Manager") es una herramienta gratuita y de código abierto que pone una interfaz web limpia sobre Nginx. Te permite configurar proxies inversos, certificados SSL (vía Let's Encrypt) y listas de acceso en minutos — así puedes exponer tus apps autogestionadas a internet por HTTPS sin editar archivos de configuración a mano. La app está diseñada con la autogestión como prioridad.

## Prerrequisitos

- Una instalación de ZimaOS en funcionamiento.
- *(Opcional)* Un nombre de dominio que apunte a la IP pública de tu servidor, si quieres certificados HTTPS automáticos vía Let's Encrypt.

## App Catalog

1. Encuentra Nginx Proxy Manager en el App Catalog de ZimaOS. Abre **App Store** → busca "Nginx Proxy Manager" → **Install**.

> **Consejo:** Al instalar por primera vez, es posible que veas un aviso de **"there are ports in use"**. Consulta el FAQ más abajo para saber cómo resolverlo.

![Página de la app Nginx Proxy Manager en la App Store de ZimaOS con el botón de instalación](/images/app-store/nginx-proxy-manager-app-store.png)

2. **¡Ya está listo para usar!**

![Icono de Nginx Proxy Manager en el panel de ZimaOS tras completarse la instalación](/images/app-store/nginx-proxy-manager-installed-dashboard.png)

3. Después de iniciar sesión, añade tu primer host de proxy.

![Panel de Nginx Proxy Manager con los contadores de hosts de proxy y redirecciones a cero](/images/app-store/nginx-proxy-manager-dashboard.webp)

## Primeros pasos

1. Inicia sesión en la interfaz de administración de Nginx Proxy Manager en `http://your-zimaos-ip:81`.
2. Añade tu primer **Proxy Host**:

   - **Domain Names** — introduce el dominio o subdominio que apunta a tu ZimaOS.
   - **Forward Hostname / IP** y **Forward Port** — la dirección del servicio que quieres exponer.
   - Activa **Block Common Exploits** y **Websockets Support** según necesites.

![Diálogo Add Proxy Host con los campos de dominio, host de reenvío y puerto de reenvío](/images/app-store/nginx-proxy-manager-add-proxy-host.png)

3. En la pestaña **SSL**, solicita un certificado gratuito de **Let's Encrypt** y activa **Force SSL** para HTTPS automático.

Ahora tus servicios son accesibles a través de un dominio amigable por HTTPS — Nginx Proxy Manager se encarga del enrutamiento, el SSL y el control de acceso por ti.

El proxy funciona cuando al abrir tu dominio en un navegador, tu aplicación carga por HTTPS sin advertencias de certificado.

## Antes de exponer servicios

Un proxy inverso hace públicas las apps — asegúrate de que cada una lo merezca:

- Pon una **Access List** delante de los servicios que no tienen su propio inicio de sesión.
- Mantén la interfaz de administración (puerto 81) fuera de internet; adminístrala desde tu red local o a través de [Tailscale](./tailscale-wireguard-remote-access "Accede a tu dispositivo ZimaOS de forma remota con Tailscale WireGuard") en lugar de exponer el puerto.
- Empieza con un servicio que tenga su propia autenticación y amplía el acceso solo cuando hayas verificado cómo se comporta públicamente.

## FAQ

### "there are ports in use"

![Aviso de puertos en uso al instalar Nginx Proxy Manager en ZimaOS](/images/app-store/nginx-proxy-manager-ports-in-use.webp)

Nginx Proxy Manager usa los puertos **80** (HTTP), **81** (interfaz de administración) y **443** (HTTPS). El puerto 80 suele estar ocupado por el ZimaOS Gateway, así que reasígalo manualmente: elige **Custom Installation**, cambia el mapeo del puerto 80 y haz clic en **Install**. (Reasigna también cualquier otro puerto que esté en uso — si reasignas el 81, la dirección de la interfaz de administración en Primeros pasos cambia con él.)

![Página de la app Nginx Proxy Manager con Custom Installation seleccionado antes de instalar](/images/app-store/nginx-proxy-manager-custom-install.webp)

![Mapeo de puertos de la instalación personalizada con el puerto 80 reasignado a 8010](/images/app-store/nginx-proxy-manager-port-remap.webp)

## Guías relacionadas

- ¿Exponer servicios sin abrir puertos en absoluto? Consulta [Acceso remoto con Tailscale WireGuard](./tailscale-wireguard-remote-access "Accede a tu dispositivo ZimaOS de forma remota con Tailscale WireGuard").

## ¿Necesitas ayuda?

Si tienes cualquier problema al instalar o usar Nginx Proxy Manager en ZimaOS, únete a la [comunidad de Discord de ZimaSpace](https://discord.gg/f9nzbmpMtU "Únete a la comunidad de Discord de ZimaSpace para soporte de ZimaOS"). Nuestro equipo y los miembros de la comunidad estarán encantados de ayudarte.
