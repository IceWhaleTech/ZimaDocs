---
title: Cómo ejecutar Frigate en ZimaOS
seo_title: "Frigate en ZimaOS: NVR local con IA para vigilancia y grabación de cámaras"
description: Instala Frigate desde la App Store de ZimaOS — vigilancia de cámaras con IA, detección de movimiento y grabación en tu propio hardware.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descripción general

Frigate tiene soporte nativo en el App Catalog de ZimaOS. Consulta la [página de Frigate en la App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.frigate) para conocer los detalles más recientes de la app.

Frigate es un grabador de vídeo en red (NVR) de código abierto con detección de objetos en tiempo real impulsada por IA: te ofrece vigilancia de cámaras local y privada, detección de movimiento y grabación, todo ejecutándose en tu propio hardware y sin enviar imágenes a la nube.

## Prerrequisitos

- Una instalación de ZimaOS en funcionamiento.
- Una o más cámaras IP compatibles con RTSP u ONVIF.
- Un puerto libre para la interfaz web (por defecto: **8971**).
- *(Opcional)* Un Google Coral TPU o una iGPU de Intel/AMD para acelerar la detección de objetos.

## App Catalog

1. Encuentra Frigate en el App Catalog de ZimaOS. Abre **App Store** → busca "Frigate".

![Página de la app Frigate en la App Store de ZimaOS con el botón de instalación](/images/app-store/frigate-app-store.webp)

2. **¡Ya está listo para usar!**

![Icono de Frigate en el panel de ZimaOS tras completarse la instalación](/images/app-store/frigate-installed-dashboard.webp)

## Configuración

Los siguientes pasos **NO son necesarios** — puedes empezar de inmediato con la configuración **PREDETERMINADA**.

ZimaOS admite varios métodos de configuración, incluida la edición mediante formulario y la edición secundaria en YAML.

![Ajustes del contenedor Frigate con puertos, volúmenes y mapeos de dispositivos](/images/app-store/frigate-config-form.webp)

Los ajustes principales que quizás quieras modificar:

- **Volúmenes** — dónde se almacenan tu configuración y tus grabaciones de Frigate (por defecto: `/DATA/AppData/frigate/config`, montado en `/config`, y `/DATA/AppData/frigate/media`, montado en `/media/frigate`).
- **Puerto** — el puerto externo para acceder a la interfaz web (por defecto: 8971).
- **Dispositivo de detección** — *(opcional)* asigna un Coral PCIe (`/dev/apex_0`), un Coral USB (`/dev/bus/usb`) o una iGPU de Intel/AMD (`/dev/dri/renderD128`) para detección con aceleración por hardware.

## Configuración inicial

1. Abre Frigate desde el panel de ZimaOS. La primera vez que lo abras, es posible que veas una advertencia de seguridad — es normal, ya que Frigate usa un certificado autofirmado. Haz clic en **Advanced** y luego en **Continue to ...** para continuar.
2. En el primer inicio de sesión necesitarás tu nombre de usuario y contraseña iniciales. Haz clic en los tres puntos de la esquina superior derecha del icono de la app Frigate → **Settings**, abre **Terminal and Logs**, haz clic en **Logs** y después en el icono de pantalla completa para ampliar la vista.

![Ajustes de la app Frigate con los registros abiertos y ampliados a pantalla completa](/images/app-store/frigate-logs-view.webp)

3. Busca la sección rodeada de asteriscos (`****`): contiene tu nombre de usuario y contraseña. Usa esa información para iniciar sesión en Frigate.

![Registro de arranque de Frigate con las credenciales de administrador por defecto entre asteriscos](/images/app-store/frigate-logs-credentials.webp)

4. Añade tus cámaras y configura la detección, la grabación y más editando el archivo `config.yml` en `/DATA/AppData/frigate/config/config.yml`. Consulta la referencia completa en la documentación oficial más abajo.

5. Frigate funciona cuando puedes abrir su interfaz, iniciar sesión y ver una cámara conectada sin errores de transmisión. Abre **Live** y confirma que la cámara muestra una imagen actual.

## Guías relacionadas

- Combina Frigate con un LLM local para generar descripciones por IA de los eventos detectados — consulta [Descripción de fotos con IA usando Frigate y Ollama](./frigate-ollama-setup "Describe eventos de cámara en lenguaje natural con Frigate y un modelo local de Ollama").
- ¿Prefieres un servidor de cámaras más sencillo y basado en navegador? Consulta [Servidor de cámaras NVR](./nvr-camera-server "Configura un NVR Kerberos.io para videovigilancia en ZimaOS") como alternativa.

## Documentación oficial

Los ajustes a nivel de app de Frigate — cámaras, detección de objetos, grabación, instantáneas, notificaciones, Home Assistant, aceleración por hardware y más — viven todos dentro del archivo `config.yml` y son independientes de ZimaOS. Para la referencia completa, sigue la documentación oficial de Frigate:

- [Documentación de Frigate](https://docs.frigate.video/ "Documentación oficial de Frigate")
- [Referencia de configuración](https://docs.frigate.video/configuration/ "Referencia de configuración de Frigate para todos los ajustes")
- [Cámaras](https://docs.frigate.video/configuration/cameras "Guía de configuración de cámaras de Frigate")
- [Detección de objetos](https://docs.frigate.video/configuration/objects "Ajustes de detección de objetos de Frigate")
- [Detectores](https://docs.frigate.video/configuration/object_detectors "Configuración de detectores de Frigate para Coral TPU y GPUs")
- [Aceleración por hardware](https://docs.frigate.video/configuration/hardware_acceleration_video "Guía de aceleración por hardware de Frigate")
- [Grabación](https://docs.frigate.video/configuration/record "Configuración de grabación de Frigate")
- [Instantáneas](https://docs.frigate.video/configuration/snapshots "Configuración de instantáneas de Frigate")
- [Zonas y máscaras](https://docs.frigate.video/configuration/zones "Guía de zonas y máscaras de Frigate")
- [Notificaciones](https://docs.frigate.video/configuration/notifications "Configuración de notificaciones de Frigate")
- [Autenticación](https://docs.frigate.video/configuration/authentication "Ajustes de autenticación de Frigate")
- [Home Assistant](https://docs.frigate.video/integrations/home-assistant "Guía de integración de Frigate con Home Assistant")

## ¿Necesitas ayuda?

Si tienes cualquier problema al instalar o usar Frigate en ZimaOS, únete a la [comunidad de Discord de ZimaSpace](https://discord.gg/f9nzbmpMtU "Únete a la comunidad de Discord de ZimaSpace para soporte de ZimaOS"). Nuestro equipo y los miembros de la comunidad estarán encantados de ayudarte.
