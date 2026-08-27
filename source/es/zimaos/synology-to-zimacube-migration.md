---
title: Migrar desde otro NAS
seo_title: "Migrar desde otro NAS a ZimaOS: guía para Synology"
description: "Mueve archivos desde un NAS Synology a ZimaOS mediante Files LAN Storage, siguiendo un proceso gradual que mantiene ambos dispositivos en funcionamiento."
type: Docs
author: Lauren Pan
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Cambiar de marca de NAS no debería obligarte a empezar desde cero. Los archivos se trasladan tal como están y puedes mantener el dispositivo anterior en funcionamiento mientras completas la transición. Esta página presenta el método recomendado; el tutorial detallado se encuentra en el manual enlazado a continuación.

## Método recomendado

La forma más sencilla es utilizar la aplicación Files. Esta se conecta al dispositivo anterior a través de la red y te permite copiar lo que quieras cuando quieras.

1. En el dispositivo anterior, comprueba que las carpetas que vas a mover estén compartidas.
2. En ZimaOS Files, añade el dispositivo anterior como LAN Storage.
3. Copia primero las carpetas más importantes y pégalas en el almacenamiento de ZimaOS.

Para consultar todos los pasos con capturas de pantalla, abre **[Transferencia manual desde Synology](./from-synology-to-zimacube-migrate-all-files "Monta recursos compartidos de Synology DSM en ZimaOS Files y copia los archivos paso a paso")**.

## Haz la migración a tu ritmo

No hay una fecha límite para completar el cambio. Una migración por fases funciona mejor que trasladarlo todo de una vez.

Empieza por las carpetas que utilizas a diario. Cuando estén disponibles en el dispositivo nuevo, continúa con el resto cuando te resulte conveniente. El dispositivo anterior seguirá sirviendo sus archivos hasta que termine la última copia.

Después de la migración, conviene configurar de inmediato un **[plan de copia de seguridad 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Protege los datos de tu NAS con la regla de copia de seguridad 3-2-1")**. Los archivos que acabas de trasladar son especialmente valiosos, y conservar una sola copia no constituye un plan de protección.

## Siguiente paso

- **[Transferencia manual desde Synology](./from-synology-to-zimacube-migrate-all-files "Monta recursos compartidos de Synology DSM en ZimaOS Files y copia los archivos paso a paso")** — el manual detallado
- **[Estrategia de copia de seguridad 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Protege los datos de tu NAS con la regla de copia de seguridad 3-2-1")** — protege los archivos que acabas de mover
- **[Copia de seguridad del teléfono](./phone-backup "Copia automáticamente el teléfono en ZimaOS con ZimaClient")** — incorpora el resto de los datos del hogar
