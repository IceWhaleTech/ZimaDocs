---
title: Resumen de desarrollo
seo_title: "Guía para desarrolladores de ZimaOS: ZFS, RAID, redes y API"
description: "Documentación de ZimaOS sobre aplicaciones Docker y autoalojadas, almacenamiento para home server y homelab, redes, SSH, API de NAS OS, publicación de App Store y contribuciones."
type: "Docs"
author: Lauren Pan
tip: No elimines este bloque de metadatos. El campo description se utiliza como resumen del artículo; si se deja vacío, se usará el primer párrafo.
---

Esta sección es para quienes quieren trabajar bajo el capó. Reúne sistemas de almacenamiento, redes, la API de ZimaOS y todo lo que necesita un usuario avanzado o desarrollador.

## Almacenamiento y sistemas de archivos

ZimaOS incluye compatibilidad con ZFS, RAID, NFS e iSCSI. Estas guías explican cómo empezar a utilizarlos.

- **[Configuración de ZFS](./zfs-setup "Configura ZFS con instantáneas, sumas de comprobación e integridad de datos")** — crea y administra grupos ZFS
- **[Resumen de opciones RAID](../zimaos/raid-options "Compara niveles RAID y JBOD")** — elige el nivel adecuado para tu caso
- **[Crear RAID 6](./raid6-setup "Crea un RAID 6 con protección de doble paridad")** — configura el arreglo paso a paso
- **[Reconstruir RAID](./raid-rebuild-after-reinstall "Recupera el RAID después de reinstalar ZimaOS")** — restaura el arreglo tras reinstalar el sistema
- **[Archivos compartidos por NFS](./nfs-on-zimaos "Comparte archivos con clientes Linux y macOS mediante NFS")** — configura recursos para Linux y macOS
- **[Guía de uso de iSCSI](./iscsi-guide "Configura almacenamiento iSCSI a nivel de bloque")** — crea almacenamiento de bloques en el NAS
- **[Configuración de iSCSI](./iscsi-setup "Configura iSCSI en ZimaOS con detalle")** — recorrido completo por los ajustes
- **[Clones de copia con Rsync](./rsync-backup-clones "Clona unidades o conjuntos de datos completos con rsync")** — duplica datos completos mediante rsync
- **[Conectar Synology por SMB](./synology-smb-connect "Conecta ZimaOS a un NAS Synology existente")** — utiliza recursos SMB de Synology
- **[Sincronización bidireccional con QTS](./zimaos-qts-two-way-sync-guide "Mantén carpetas sincronizadas entre ZimaOS y QNAP")** — sincroniza datos con un NAS QNAP
- **[Carpetas cifradas](./folder-encryption "Cifra carpetas sensibles en el sistema de archivos")** — protege los datos confidenciales

## Redes y protocolos

Una red bien configurada mejora la velocidad y la fiabilidad de todos los demás servicios.

- **[Configuración de red](./networking "Configura interfaces, rutas y direcciones IP estáticas")** — ajusta interfaces y direccionamiento
- **[Activar SSH](./how-to-open-ssh-in-zimaos "Activa SSH y configura el acceso remoto básico")** — abre el servicio SSH
- **[Configuración avanzada de SSH](./ssh-setup "Refuerza SSH con claves, puertos y ajustes de seguridad")** — utiliza autenticación por claves y endurecimiento
- **[Velocidad de transferencia](./nas-transfer-speed-troubleshooting "Encuentra y resuelve transferencias lentas en la red del NAS")** — localiza los cuellos de botella

## Desarrollo

Construye sobre ZimaOS mediante aplicaciones Docker, scripts de Python o contribuciones directas al proyecto.

- **[Entorno de Python](./python-setup "Configura Python para scripts y automatización")** — ejecuta automatizaciones en ZimaOS
- **[Guía de contribución](./how-to-contribute "Aporta código, documentación o comentarios a ZimaOS")** — participa en el proyecto
- **[Contribuciones de la comunidad](./contributions "Consulta controladores y mejoras aportados por usuarios")** — revisa mejoras implementadas por la comunidad

## Desarrollo de App Store

Crea aplicaciones Docker y autoalojadas para un home server con ZimaOS, mantén un catálogo de homelab o publica una tienda compatible con otro entorno NAS OS.

- **[Crear y publicar aplicaciones](./docker-app-publishing "Adapta y empaqueta una aplicación Docker para ZimaOS")** — prepara una aplicación individual para la tienda
- **[Crear una App Store](./app-store-create-from-scratch "Crea una tienda Docker para ZimaOS, home servers y homelabs")** — construye una tienda compatible con v2
- **[Docker Compose y x-casaos](./app-store-compose-x-casaos "Configura Docker Compose y metadatos x-casaos")** — consulta los campos de ejecución y metadatos
- **[CI/CD de App Store](./app-store-ci-cd "Valida, compila y publica una tienda Docker")** — automatiza validación, artefactos y alojamiento
- **[Migrar de v1 a v2](./app-store-v1-v2-migration "Migra una tienda CasaOS o ZimaOS al protocolo v2")** — conserva compatibilidad durante la migración
- **[FAQ para desarrolladores](./app-store-faq "Preguntas frecuentes para responsables de tiendas Docker")** — ID, idiomas, alojamiento, compilación y compatibilidad

## API de ZimaOS

La API permite automatizar operaciones de archivos, usuarios y ajustes del sistema desde tu propio código.

- **[Guía de la API de ZimaOS](./openapi-developer-guide "Consulta autenticación, endpoints y ejemplos de integración")** — autenticación, interfaces y ejemplos
- **[Explorador de la API](./openapi-live-preview "Prueba llamadas de la API de ZimaOS en el navegador")** — ejecuta solicitudes en tiempo real

## Historial de versiones

La barra lateral incluye las notas de todas las versiones de ZimaOS desde v1.2.2 hasta la más reciente.

## Siguiente paso

Empieza por lo que necesites ahora; el resto de la documentación seguirá aquí cuando quieras profundizar.

- Configurar ZimaOS: **[Resumen de ZimaOS](../zimaos/ "Consulta la instalación, el almacenamiento y el uso compartido")** — instalación, almacenamiento y sistema
- Ejecutar aplicaciones: **[Resumen de la tienda de apps](../zimaos/app-store/ "Explora aplicaciones multimedia, autoalojadas y de IA")** — multimedia, autoalojamiento y agentes de IA
