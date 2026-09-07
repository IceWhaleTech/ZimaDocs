---
title: Resumen de ZimaOS
seo_title: "Guías de ZimaOS: almacenamiento, uso compartido, copias de seguridad y sistema"
description: "Guías de ZimaOS para tu NAS: instala el sistema, configura almacenamiento y la biblioteca Photos, haz copias, conecta nubes y gestiona el acceso remoto."
type: "Docs"
author: Lauren Pan
tip: No elimines este bloque de metadatos. El campo description se utiliza como resumen del artículo; si se deja vacío, se usará el primer párrafo.
---

Hemos reunido estas guías para que puedas familiarizarte con ZimaOS, tanto si acabas de abrir la caja como si llevas tiempo utilizándolo.

## Configuración y almacenamiento

Empieza aquí después del primer arranque. Primero conviene dejar bien configurados los elementos básicos.

- **[Primeros pasos](./get-started "Configura ZimaOS desde el primer arranque con ZimaClient y la creación de una cuenta")** — configura el idioma, la red y la cuenta
- **[Resumen de funciones](./features "Recorre las funciones de acceso remoto, almacenamiento y aplicaciones de ZimaOS")** — conoce Data Station, la administración de aplicaciones y los ajustes
- **[Configuración del almacenamiento](./storage-setup "Elige las unidades y la configuración de almacenamiento adecuadas")** — selecciona las unidades apropiadas para tu caso de uso
- **[Opciones de RAID](./raid-options "Compara los niveles RAID y JBOD con instrucciones de configuración")** — consulta la referencia detallada de RAID
- **[Rutas de almacenamiento de aplicaciones](./docker-app-paths "Consulta dónde se guardan los datos de las aplicaciones y cómo moverlos")** — decide en qué unidad se almacenan los datos de las aplicaciones

## Sincronización y copias de seguridad

Cuando la base esté lista, incorpora tus contenidos y decide dónde vivirá cada cosa.

- **[Copia de seguridad del teléfono](./phone-backup "Copia automáticamente fotos y archivos del teléfono en ZimaOS con ZimaClient")** — protege automáticamente las fotos y los archivos del teléfono
- **[Copia de seguridad del ordenador](./computer-backup "Copia el ordenador en ZimaOS mediante Finder, el Explorador o sincronización")** — configura el acceso y las copias programadas del portátil
- **[Fotos](./photos "Explora, busca y redescubre tu biblioteca de fotos en ZimaOS")** — la biblioteca de todo lo que disparas
- **[Formatos compatibles de Photos](./photos-supported-formats "Los formatos que ZimaOS Photos indexa, con su comportamiento de miniaturas y metadatos")** — qué lee y qué reproduce Photos
- **[Conectar unidades en la nube](./cloud-drive-connect "Conecta Google Drive, Dropbox o OneDrive a ZimaOS")** — importa datos desde Google Drive, Dropbox y OneDrive
- **[Conectar otro NAS](./synology-to-zimacube-migration "Conecta otro NAS a ZimaOS para mover archivos o hacer copias entre dispositivos")** — mueve archivos o añádelo a tu plan de copias
- **[Migración de datos](./data-migration "Mueve imágenes Docker, datos de aplicaciones y carpetas entre unidades")** — utiliza la herramienta integrada cuando una unidad se llena
- **[Copia de seguridad 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Protege los datos del NAS con la regla de copia 3-2-1")** — crea un plan que proteja todos tus datos importantes

## Acceso y uso compartido

Cuando los datos estén en su sitio, hazlos accesibles de forma segura.

- **[Acceso remoto](./remote-access "Configura el acceso remoto para conectarte al servidor doméstico desde cualquier lugar")** — entra en ZimaOS cuando estés fuera de casa
- **[Tailscale y WireGuard](./app-store/tailscale-wireguard-remote-access "Configura el acceso remoto con Tailscale o WireGuard en tu servidor doméstico")** — la vía de los protocolos estándar
- **[Descargar ZimaClient](./zimaclient-install "Instala ZimaClient en el escritorio y el móvil para acceder al dispositivo")** — instala el cliente y navega por tus archivos
- **[Conexión directa Thunderbolt](./thunderbolt-direct-connect "Conecta tu ordenador a ZimaOS mediante Thunderbolt para obtener la máxima velocidad")** — el cable más rápido entre tu ordenador y el NAS
- **[Archivos compartidos por SMB](./smb-troubleshooting "Comparte archivos por SMB para verlos en Finder y el Explorador")** — comparte archivos dentro de la red local
- **[Compartir mediante enlace](./share-via-link "Crea enlaces que permitan descargar archivos sin una cuenta")** — genera un enlace para compartir archivos
- **[Samba multiusuario](./samba-member-setup "Configura permisos por usuario para los recursos Samba")** — asigna permisos diferentes a cada usuario

## Métodos de instalación

Elige la forma de instalar ZimaOS que mejor se adapte a tu hardware y entorno.

- **[Instalar ZimaOS](./how-to-install-zimaos "Instala ZimaOS desde cero paso a paso")** — escribe la imagen en una unidad USB y arranca el dispositivo
- **[Instalar en Proxmox](./install-zimaos-on-proxmox-ve "Ejecuta ZimaOS como máquina virtual en Proxmox VE")** — utiliza ZimaOS dentro de una máquina virtual
- **[Migrar desde CasaOS](./casaos-to-zimaos-migration "Traslada el servidor doméstico de CasaOS a ZimaOS")** — migra tu configuración existente
- **[Restablecer la contraseña](./password-recovery "Recupera o cambia la contraseña de la cuenta de ZimaOS")** — recupera el acceso a tu cuenta

## Sistema

Mantén el dispositivo estable y preparado para recuperarse ante un fallo.

- **[Configuración de UPS](./ups-setup "Conecta un UPS al NAS para protegerlo frente a cortes de energía")** — evita daños por apagones inesperados
- **[Recuperación del sistema](./system-recovery "Restaura ZimaOS después de un fallo o restablecimiento")** — recupera el sistema cuando algo sale mal
- **[Restablecer configuración de red](./reset-network-settings "Restablece la red de ZimaOS para resolver problemas de conexión")** — resuelve problemas de conexión restableciendo
- **[Instalación sin conexión](./offline-install "Instala ZimaOS sin conexión a Internet")** — despliega el sistema en un entorno aislado
- **[Función de búsqueda](./zimaos-search "Busca rápidamente archivos en todo el NAS")** — encuentra archivos en todas las unidades
- **[Copia con Time Machine](./time-machine-backup "Realiza copias del Mac en ZimaOS a través de la red")** — protege tu Mac mediante Time Machine

---

## Siguiente paso

No necesitas aprenderlo todo de una vez. Continúa por la ruta que corresponda a lo que quieres hacer ahora.

- Comparar dispositivos: **[Resumen de hardware](../hardware/ "Compara ZimaCube, ZimaBoard y ZimaBlade")** — consulta las tres líneas de producto
- Ejecutar aplicaciones: **[Resumen de la tienda de apps](./app-store/ "Explora aplicaciones multimedia, autoalojadas y de IA")** — servidores multimedia, aplicaciones autoalojadas y agentes de IA
- Profundizar: **[Resumen de desarrollo](../developer/ "Aprende sobre ZFS, RAID, redes y la API de ZimaOS")** — ZFS, RAID, redes y API de ZimaOS
