---
title: Cómo ejecutar VoceChat en ZimaOS
seo_title: "VoceChat en ZimaOS: servidor de chat de equipo autogestionado"
description: Instala VoceChat desde la App Store de ZimaOS — un servidor de chat ligero y privado con chats de grupo, uso compartido de archivos y un widget integrable en tu propio hardware.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descripción general

VoceChat tiene soporte nativo en el App Catalog de ZimaOS. Consulta la [página de VoceChat en la App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.vocechat) para conocer los detalles más recientes de la app.

VoceChat es un servidor de chat autogestionado y ligero: te ofrece chats de grupo privados, mensajes directos, uso compartido de archivos, menciones @, bots y un widget de chat integrable, todo ejecutándose en tu propio hardware en lugar de en la nube de un proveedor de mensajería.

## Prerrequisitos

- Una instalación de ZimaOS en funcionamiento.
- Un puerto libre para el servidor de chat (por defecto: **3009**).

## App Catalog

1. Encuentra VoceChat en el App Catalog de ZimaOS. Abre **App Store** → busca "VoceChat".

![Página de la app VoceChat en la App Store de ZimaOS con el botón de instalación](/images/app-store/vocechat-app-store.webp)

2. **¡Ya está listo para usar!**

![Icono de VoceChat en el panel de ZimaOS tras completarse la instalación](/images/app-store/vocechat-installed-dashboard.webp)

## Configuración

Los siguientes pasos **NO son necesarios** — puedes empezar de inmediato con la configuración **PREDETERMINADA**.

ZimaOS admite varios métodos de configuración, incluida la edición mediante formulario y la edición secundaria en YAML.

![Ajustes del contenedor VoceChat con el puerto 3009 y el montaje del volumen de datos](/images/app-store/vocechat-config-form.webp)

Los ajustes principales que quizás quieras modificar:

- **Volúmenes** — dónde se almacenan tu historial de chat y los archivos subidos (por defecto: `/DATA/AppData/vocechat/home/vocechat-server/data`, montado en `/home/vocechat-server/data`).
- **Puerto** — el puerto externo para acceder a la interfaz web (por defecto: 3009).

## Configuración inicial

En ZimaOS, la configuración inicial es igual de sencilla — sin archivos de configuración que editar. Después de la instalación, abre VoceChat y sigue el asistente de configuración:

1. Pon un nombre a tu servidor.
2. Crea tu cuenta de administrador (correo + contraseña).
3. Elige el modo de registro (registro abierto o solo por invitación).

![Pantalla de bienvenida de VoceChat con opciones para invitar a compañeros y mejorar](/images/app-store/vocechat-first-run-welcome.webp)

Cuando termines, comparte el enlace de invitación con tu familia o equipo y empieza a chatear de inmediato. VoceChat también ofrece apps oficiales para iOS/Android y un widget de chat integrable para tu sitio web.

## ¿Necesitas ayuda?

Si tienes cualquier problema al instalar o usar VoceChat en ZimaOS, únete a la [comunidad de Discord de ZimaSpace](https://discord.com/invite/f9nzbmpMtU "Únete a la comunidad de Discord de ZimaSpace para soporte de ZimaOS"). Nuestro equipo y los miembros de la comunidad estarán encantados de ayudarte.
