---
title: Sistema de enrutamiento todo en uno - Instalar OpenWRT
typora-root-url: ..
---

# Introduciendo OpenWRT

![](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/openwrt-logo.svg)

Tributo a la gran [Documentación de OpenWRT](https://oldwiki.archive.openwrt.org/start), este artículo solo documenta la instalación de OpenWRT en el ZimaBoard. Actualmente hay otro artículo sobre cómo escribir el sistema OpenWRT para el eMMC del ZimaBoard.

**OpenWRT es el mejor compañero para la versión de inicio de sesión del stick USB ZimaBoard– 5 pasos para grabar tu firmware OpenWRT favorito**


{% note dinfo %}
**Temas**

Con un rendimiento entre Raspberry Pi y MicroServer y una posición de precio, el mejor uso del ZimaBoard para muchos jugadores es sin duda ser un enrutador x86 personalizable OpenWRT / pfSense de cien dólares con suficiente poder de cómputo. Así que, basado en este sencillo tutorial, demostraremos cómo hacer un disco de arranque USB y, después de unos pocos pasos, iniciar sesión en OpenWRT.
{% endnote %}

## **Preparación**

1. PC Host
2. ZimaBoard (Acceso a la misma LAN que el PC)
3. Disco U
4. Teclado 
5. Adaptador Minidp a HDMI o DP
6. Monitor
7. Cable Ethernet 
8. Imagen de OpenWrt (O descarga el espejo recomendado por el equipo a través de este enlace)
9. balenaEther (O cualquiera de tus herramientas habituales para la creación de imágenes en disco USB)

# Pasos de operación

## 1. Creando un sistema OpenWRT en un stick USB
Para pasos detallados, consulte la instalación del sistema Universal de Terceros

![](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-creat-mirror.png)

## 2. Conectar el equipo relacionado

**ZimaBoard a través de miniDP a cable HDMI / DP, acceso a la pantalla, teclado USB al ZimaBoard**

![sistema de enrutador openwrt conexión zimaboard](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-zimaboard-connect.png)

## 3. Entrar en BIOS

**Inserte el stick USB en el ZimaBoard, encienda y haga clic en "DEL" para ingresar a la página de BIOS**

![Entrar en BIOS de OpenWRT](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-enter-to-bios.png)

## 4. Selección en BIOS

**En la opción de Arranque, configure la unidad flash USB como Opción de Arranque #1, guarde la configuración y reinicie. Después del arranque, ingrese al OpenWRT de la unidad USB**

![Elegir Arranque de OpenWRT](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-choose-boot.png)

## 5. Encontrar la IP e iniciar sesión en OpenWRT

**Configure la información de dirección IP de su sistema OpenWRT y use un navegador de PC para iniciar sesión en la página Luci de OpenWRT**

![Iniciar sesión en OpenWRT Luci](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-enter-openwrt-luci.png)

# ¡Inicio de sesión exitoso!!!

![Instalación completa de OpenWRT](/images/All_in_one_routing_All-in-one%20routing%20system-OpenWRT/install-openwrt-router-system-complete-install-openwrt.jpeg)

# Resumen

**Hacer que OpenWRT funcione en un stick USB es una forma relativamente simple. Pero como un jugador aspirante, puedes consultar el siguiente tutorial si deseas escribir tu sistema OpenWrt en un eMMC de ZimaBoard. Si estás interesado en ejecutar servicios de software más interesantes para la mejora de la red y la gestión de datos en la nube doméstica en OpenWRT, ¡consulta este enlace!**

**Por supuesto, hay otros métodos, y también se proporciona aquí la dirección de descarga del firmware—— [Dirección de descarga del firmware](https://supes.top/?version=22.03&target=x86%2F64&id=generic)**
**Por favor, no abuses por el amor al poder**


[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)