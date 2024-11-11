---
title: Aplicaciones de Auto-Despliegue
description:
typora-root-url: ..
---
# Razón

**Para satisfacer las necesidades de instalar su propia carga de aplicaciones, CasaOS ofrece a los usuarios una variedad de formas de instalar. Este documento le ayudará a encontrar más aplicaciones Docker y usarlas simplemente copiándolas. El sitio de búsqueda recomendado para este documento es **[linuxserver.io](https://www.linuxserver.io/)****


# linuxserver.io

![Linuxserver](/images/Self-Deploying-Applications/application-introduce-linuxserver.png)

Como se describe en su sitio web oficial.
Somos un grupo de entusiastas afines de todo el mundo que construyen y mantienen la colección más grande de imágenes Docker en la web, y en nuestro núcleo están los principios detrás del Software Libre y de Código Abierto. Nuestro objetivo principal es proporcionar imágenes Docker fáciles de usar y optimizadas con documentación clara y concisa. 
**¡Sí, creo que lo han logrado!**


# Buscar la Imagen Docker Deseada

**Paso 1** Abra LinuxServer y haga clic en **[’fleet’](https://fleet.linuxserver.io/)**

![Linuxserver Fleet](/images/Self-Deploying-Applications/application-linuxserver-fleet1.png)

**Paso 2** Busque la aplicación que desea en **[’fleet’](https://fleet.linuxserver.io/)**

![Linuxserver Fleet](/images/Self-Deploying-Applications/application-linuxserver-fleet.png)

# Instalación de aplicaciones 

**Ejemplo:** Instalación de la **[API de Apprise](https://hub.docker.com/r/linuxserver/apprise-api)** en CasaOS y su uso

## ¿Qué es **[API de Apprise](https://hub.docker.com/r/linuxserver/apprise-api)**?

![Appriseapi](/images/Self-Deploying-Applications/applicatin-appriseapi-logo.png)

 Apprise le permite enviar notificaciones a casi todos los servicios de notificación más populares que tenemos disponibles hoy en día, como Telegram, Discord, Slack, Amazon SNS, Gotify y más. Esta API proporciona una puerta de enlace simple para acceder a ella directamente a través de una interfaz HTTP. Instalación de la API de Apprise en CasaOS

## Buscar la CLI de Docker 
Vaya al hub de la API de Apprise y copie la CLI de Docker adecuada -apprise-api

![Copiar Appriseapi Cli](/images/Self-Deploying-Applications/application-docker-cli.png)


## Siga estos pasos en orden 

Abra CasaOS y vaya a la pantalla de instalación definida por el usuario, péguelo y espere a que se complete la instalación.

![Copiar Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps1.png)

![Copiar Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps2.png)

![Copiar Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps3.png)

![Copiar Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps4.png)

## Copiar la CLI de Docker de la API de Apprise 

![Copiar Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps5.png)

## Pegar la CLI de Docker de la API de Apprise 

![Copiar Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps6.png)

## Agregar Puerto de Web UI

![Copiar Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps7.png)

## Esperar a la Instalación

Esto puede tardar unos minutos

![Copiar Appriseapi Cli](/images/Self-Deploying-Applications/application-install-apps8.png)

## Instalación Exitosa y Clic para Usar

![Copiar Appriseapi Cli](/images/Self-Deploying-Applications/application-using-appriseapi.png)

**Atención**
El AutoRelleno solo le ayuda a completar parte de la información de configuración, 
incluyendo:
- el puerto y la ruta de la Web UI
- la ubicación de montaje del volumen o archivo
- el mapeo de puertos del Host
- elementos de configuración opcionales
Estos incluyen, pero no se limitan a estos casos y aún necesitan ser confirmados o modificados por usted. ¡Siéntase libre de sugerir mejoras a esta función en el Servidor de Discord!

# Conclusión

Lo anterior es el método de instalación de la **[API de Apprise](https://hub.docker.com/r/linuxserver/apprise-api)**, y lo mismo es cierto para otras aplicaciones. Pero tenga en cuenta: cada aplicación en sí requiere ciertas condiciones.

Se deben verificar varias partes en la interfaz de Docker Hub durante la instalación.

**Por ejemplo**

- Arquitectura Soportada 
  Identifica la arquitectura soportada por la aplicación. Si no, consulte las Etiquetas anteriores (contiene el historial de versiones actualizadas)
- Parámetros : 
  La imagen del contenedor se regula usando los parámetros pasados en tiempo de ejecución, y algunas aplicaciones tienen configurados contraseñas predeterminadas para mostrarse aquí también.

Más Información——https://docs.linuxserver.io/images/docker-airsonic-advanced#docker-cli-click-here-for-more-info

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)