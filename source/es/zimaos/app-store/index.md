---
title: Resumen de la tienda de apps
seo_title: "Tienda de apps de ZimaOS: multimedia, aplicaciones autoalojadas e IA en tu NAS"
description: "Descubre lo que puedes crear con tu NAS Zima: servidores multimedia, aplicaciones autoalojadas, agentes de IA y servidores de juegos ejecutados en tu propio hardware."
type: "Docs"
author: Lauren Pan
tip: No elimines este bloque de metadatos. El campo description se utiliza como resumen del artículo; si se deja vacío, se usará el primer párrafo.
---

Nos encanta ver lo que la gente construye con estas máquinas. Con los años, la comunidad ha convertido dispositivos Zima en centros multimedia, bloqueadores de anuncios, asistentes de IA y servidores de juegos. Cada vez que creemos haberlo visto todo, aparece una idea nueva.

Ejecutar tus propios servicios ofrece una sensación especial: el hardware es tuyo, los datos permanecen contigo y nadie puede retirar el servicio ni cambiarte el precio.

## Servidor multimedia

La mayoría de las personas empieza aquí. Convierte el NAS en un centro de streaming para ver películas, series, música y fotos desde cualquier pantalla de la casa.

- **[Sincronización masiva de fotos](./cli-guide "Sincroniza miles de fotos desde la línea de comandos")** — ideal para migrar bibliotecas de gran tamaño
- **[Copia de fotos con Immich](./immich-photo-backup "Configura Immich en profundidad para proteger tu fototeca")** — ajustes avanzados de copia de seguridad
- **[Servidor multimedia Jellyfin](./media-server-setup-with-jellyfin "Configura Jellyfin para transmitir películas, series y música desde el NAS")** — gratuito, de código abierto y compatible con muchos dispositivos
- **[Servidor de cámaras NVR](./nvr-camera-server "Conecta cámaras de seguridad al NAS con detección de objetos por IA")** — vigilancia y detección de objetos en tu propio servidor
- **[Sincronización de fotos con Immich](./sync-photos-with-immich "Sincroniza las fotos del teléfono con el NAS mediante Immich")** — una alternativa autoalojada a Google Photos
- **[Servidor multimedia Plex](./plex-setup-guide "Instala Plex Media Server y transmite tu biblioteca a cualquier dispositivo")** — interfaz cuidada y aplicaciones para prácticamente cualquier plataforma
- **[Servidor DLNA](./dlna-server-setup "Transmite contenido a televisores antiguos y dispositivos DLNA")** — compatible con televisores y reproductores DLNA
- **[Transcodificación de Plex por GPU](./plex-and-gpu-transcoding "Activa la transcodificación por hardware para reproducir 4K con fluidez")** — utiliza aceleración de hardware para el contenido 4K
- **[Servidor Emby](./setup-emby-server "Configura Emby Media Server para transmitir contenido entre dispositivos")** — un buen punto intermedio entre Jellyfin y Plex
- **[Komga](./komga-setup "Ejecuta Komga en ZimaOS como servidor de cómics y libros electrónicos")** — un servidor multimedia para cómics, manga y libros electrónicos

## Aplicaciones autoalojadas

Estas son algunas de las aplicaciones más utilizadas por la comunidad. Cada una sustituye un servicio de suscripción por otro que tú controlas.

- **[Sincronización con Syncthing](./syncthing-setup "Mantén carpetas sincronizadas entre dispositivos con Syncthing")** — sincroniza ordenadores y teléfonos
- **[Bloqueador de anuncios Pi-hole](./pi-hole-setup "Bloquea anuncios en toda la red doméstica con Pi-hole")** — protege automáticamente todos los dispositivos de la red
- **[Gestión de documentos](./paperless-ngx-install "Administra y busca documentos escaneados con Paperless-ngx")** — convierte documentos en papel en un archivo consultable
- **[Procesamiento de documentos con IA](./paperless-ai-install "Clasifica y etiqueta documentos automáticamente con Paperless-AI")** — añade clasificación automática a Paperless
- **[Gestor de películas Radarr](./radarr-setup "Automatiza las descargas y la administración de películas")** — elige las películas y deja que Radarr gestione el resto
- **[Radio por Internet](./azuracast-install "Ejecuta tu propia emisora con AzuraCast")** — crea y administra una emisora en línea
- **[Monitorización de servidores](./zabbix-install-guide "Supervisa servidores y redes con los paneles de Zabbix")** — controla el estado de la infraestructura
- **[Descargador de torrents](./webtorrent-feature "Descarga torrents directamente en el almacenamiento del NAS")** — guarda las descargas directamente en el NAS
- **[Guía de configuración de Syncthing](./syncthing-install "Configura opciones avanzadas de Syncthing")** — ajustes más detallados para varios dispositivos

## Agentes e inferencia

Ejecutar IA en tu propio hardware evita que los datos salgan de casa. La comunidad está avanzando con rapidez en esta dirección.

- **[DeepSeek Harness](./deepseek-harness-setup "Ejecuta DeepSeek Harness en tu servidor doméstico como agente físico")** — un agente de IA físico en tu servidor doméstico que hace vibe coding y automatiza tareas
- **[Activar la búsqueda con IA](./enable-ai "Busca archivos mediante lenguaje natural en el servidor doméstico")** — encuentra contenido con preguntas normales
- **[Desplegar DeepSeek R1](./deploy-deepseek-r1 "Ejecuta DeepSeek R1 localmente en tu servidor de agentes")** — utiliza un modelo potente en hardware Zima
- **[Descargar modelos de IA](./llm-manual-download "Descarga modelos para instalaciones sin conexión")** — prepara entornos aislados o con poco ancho de banda
- **[Descripción de fotos con IA](./frigate-ollama-setup "Etiqueta y describe automáticamente las fotos mediante IA")** — organiza la fototeca de forma automática
- **[Agente OpenClaw](./openclaw-agent-setup "Ejecuta OpenClaw las 24 horas y conversa mediante Telegram")** — un agente siempre disponible desde Telegram
- **[Agente Hermes](./hermes-agent-setup "Ejecuta un agente Hermes que aprende y recuerda información")** — un agente que aprende de ti y conserva memoria

## Proyectos creativos

Algunos proyectos no encajan en una categoría sencilla y precisamente por eso son los más sorprendentes.

- **[Arcade con Batocera](./batocera-arcade-setup "Convierte el dispositivo Zima en una consola retro con Batocera")** — crea una consola de juegos clásicos
- **[Servidor de Minecraft](./minecraft-friendship-service "Aloja un mundo persistente de Minecraft")** — administra tu propio mundo de juego
- **[Streaming de Oculus VR](./oculus-quest-media-server "Transmite juegos de PC VR de forma inalámbrica a Oculus Quest")** — juega en Quest desde el PC
- **[Migración de clúster PVE](./zimablade-cluster-pve "Mueve servicios entre hosts de un clúster Proxmox")** — migra servicios entre hosts
- **[Ejecutar PVE sobre Debian](./pve-on-debian-for-i226 "Ejecuta Proxmox VE sobre Debian con adaptadores Intel i226")** — una configuración para NIC Intel i226
- **[Tiendas de apps de la comunidad](./awesome-third-party-stores "Explora tiendas de aplicaciones mantenidas por la comunidad")** — fuentes de aplicaciones de terceros
- **[Resumen de aplicaciones autoalojadas](./self-hosted-apps "Descubre más opciones de autoalojamiento en un servidor doméstico")** — más ideas para ZimaBoard
- **[Jellyfin en ZimaBoard](./jellyfin-setup "Configura Jellyfin en un servidor doméstico ZimaBoard")** — una guía específica para este hardware

## Siguiente paso

Empieza con una aplicación y avanza poco a poco. Parte de la diversión está en convertirla en un servicio realmente tuyo.

- Especificaciones: **[Resumen de hardware](../../hardware/ "Compara ZimaCube, ZimaBoard y ZimaBlade")** — detalles de las tres líneas de producto
- Profundizar: **[Resumen de desarrollo](../../developer/ "Aprende sobre ZFS, RAID, redes y la API de ZimaOS")** — ZFS, RAID, redes y API de ZimaOS
