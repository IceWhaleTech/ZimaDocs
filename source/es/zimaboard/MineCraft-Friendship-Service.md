---
title: Servidor de Minecraft–Construye un servidor de Minecraft con ZimaBoard
---

# Razón

**COVID-19** nos obligó a pasar más tiempo con nuestras familias. Anteriormente, hubo una introducción sobre cómo construir una versión doméstica de un teatro 4K usando ZimaBoard. Recientemente, el teatro ya no es suficiente para la familia. Así que encontramos algunos juegos divertidos en casa que son más adecuados tanto para adultos como para niños. Los buenos juegos pueden hacer que los miembros de la familia se acerquen y mejorar las habilidades creativas de los niños.

## Introducción a [**Minecraft**](https://www.minecraft.net/zh-hans)

![minecraft-casa-home-page](/images/Minecraft-Friendship-Service/minecraft-introduce-home-page.png)

[**Minecraft**](https://www.minecraft.net/zh-hans) es un juego de construcción en un mundo abierto creado por Markus Persson, fundador de Mojang AB, e inspirado en Endless Miner, Dwarf Fortress y Dungeon Keeper. El actual desarrollador principal es Jens Bergensten. Los jugadores pueden crear y destruir una multitud de cubos en el espacio tridimensional del juego e incluso experimentar diferentes modos de juego en servidores multijugador frente a mundos de un solo jugador para crear exquisitas edificaciones, creaciones y obras de arte.

# Preparación anticipada

Por defecto, ya sabes cómo usar ZimaBoard al leer este tutorial: [**Tutorial de ZimaBoard**](/docs/)

De manera similar, aquí ya has adquirido una cuenta de My World por defecto: [**Enlace de compra de MineCraft**](https://www.minecraft.net/zh-hans/about-minecraft)

| Artículo  | Descripción |
| ----------- | ----------- |
| Software    | [**Enlaces de instalación de MineCraft**](https://www.minecraft.net/en-us/download) |
| Párrafo     | ZimaBoard 216|

# Comienza a construir un servidor de Minecraft

## Ingresa a CasaOS

![minecraft-casa-home-page](/images/Minecraft-Friendship-Service/minecraft-casa-home-page.png)

## Abre la tienda de aplicaciones y selecciona instalación personalizada

```
 docker run -d \
-p 25565:25565 \
-v /DATA/AppData/mc-data/:/data \
-e EULA=TRUE \
--name minecraft \
itzg/minecraft-server
```

## Copia [Cli]（<https://hub.docker.com/r/itzg/minecraft-server>)

![Copia Minecraft Server Cli](/images/Minecraft-Friendship-Service/minecraft-copy-cli.png).

## Verifica el entorno

![Verifica el entorno del servidor de Minecraft](/images/Minecraft-Friendship-Service/minecraft-check-environment.png)

{% note dinfo %}
**Atención**

Variables de entorno **EULA=TRUE**

Asegúrate de incluir siempre -e EULA=TRUE en tus comandos y definiciones de contenedor, ya que Mojang/Microsoft requiere la aceptación de EULA.
{% endnote %}

## Abre el cliente MY World

**Ahora abre el cliente de My World que instalaste anteriormente, aquí se está utilizando MAC**

![](/images/Minecraft-Friendship-Service/minecraft-open-minecraft-client.png)

## Haz clic en Multijugador ##

![Abrir cliente de Minecraft](/images/Minecraft-Friendship-Service/minecraft-click-multiplayer.png)

## Agregar servidor ##

![Agregar servidor de Minecraft](/images/Minecraft-Friendship-Service/minecraft-add-minecraft-server.png)

## Ingresa tu dirección IP y añade 25565

![Agregar servidor de Minecraft](/images/Minecraft-Friendship-Service/minecraft-add-minecraft-server.png)

![Agregar dirección de Minecraft](/images/Minecraft-Friendship-Service/minecraft-add-server-address.png)

Si no conoces tu dirección IP, puedes consultar el tutorial—["**Encuentra tu dirección IP de CasaOS**"](/Users/lijian/Documents/GitHub/ZimaDocs/zimaboard/02-get-started/09-find-casaos-ip-address.md)

## Tu servidor de Minecraft ya está listo ##

![Mostrar servidor de Minecraft](/images/Minecraft-Friendship-Service/minecraft-show-minecraft-server.png)

## Jugar ##

![Mostrar página del juego de Minecraft](/images/Minecraft-Friendship-Service/minecraft-show-minecraft-game-page.png)

![Mostrar página del juego de Minecraft](/images/Minecraft-Friendship-Service/minecraft-show-minecraft-game-page2.png)

# Ajustando parámetros del servidor

## Por ejemplo

Por defecto, los servidores de [**Minecraft**](https://www.minecraft.net/zh-hans) están configurados para funcionar en modo Supervivencia. Puedes cambiar el modo usando **MODE** donde puedes proporcionar los valores numéricos estándar o los valores abreviados:

- creativo
- supervivencia
- aventura
- espectador (solo para [**Minecraft**](https://www.minecraft.net/zh-hans) 1.8 o posterior)

```
docker run -d -e MODE=creative ...
```

**Anunciar logros de los jugadores**

```
docker run -d -e ANNOUNCE_PLAYER_ACHIEVEMENTS=true
```

**Más información** - [**Servidor Docker Minecraft**](https://github.com/itzg/docker-minecraft-server)

### Adiciones Extendidas ###

1. Más adelante habrá una aplicación docker para servidor mc en la tienda de aplicaciones de CasaOS (realizar un minuto para un clic para instalar el servidor de MC).

2. Zimaboard & [**Minecraft**](https://www.minecraft.net/zh-hans) Versión avanzada de juego.

## Conclusión ##

La filosofía detrás de [**Minecraft**](https://www.minecraft.net/zh-hans) es muy simple: crear un mundo que te pertenezca; por favor, guía a tus hijos correctamente, participa con ellos y controla el tiempo de juego. Creo que podrás obtener más que pura alegría y felicidad.

[![Tarjeta de Discord](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)