---
title: Copia de seguridad 3-2-1 en ZimaOS
seo_title: "Plan de copias de seguridad de ZimaOS: estrategia 3-2-1 para los datos de tu NAS"
description: "Crea un plan de copias de seguridad completo en ZimaOS con la regla 3-2-1. Copia carpetas, unidades USB y almacenamiento en la nube en una sola tarea, programa ejecuciones automáticas y conserva una copia externa."
type: Docs
author: vicky
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Los discos fallan, los archivos se borran por accidente y las casas se inundan. Un plan de copias de seguridad es lo que se interpone entre esos momentos y perderlo todo.

Una cosa que hay que dejar clara primero: RAID no es una copia de seguridad. RAID te protege del fallo de un solo disco mientras el dispositivo sigue funcionando. No hace nada contra el borrado accidental, el ransomware o una subida de tensión que se lleve toda la máquina. Un plan de copias de verdad cubre también todo eso.

## La regla 3-2-1

La regla 3-2-1 es la respuesta estándar a la pregunta de cuántas copias son suficientes.

- **3 copias** de tus datos: el original más dos copias, para que ningún fallo único lo destruya todo.
- **2 tipos de soporte distintos**: como los discos de tu dispositivo más un disco USB externo, para diversificar el riesgo.
- **1 copia externa**: en un lugar físicamente separado, para que un incendio o un robo en casa no se lleve todas las copias.

ZimaOS soporta esta estrategia a nivel de sistema. Una sola aplicación cubre todos los anillos del plan.

## Una aplicación, todas las direcciones

La regla 3-2-1 pide copias en sitios distintos. La mayoría de los NAS responden cosiendo tres o cuatro herramientas diferentes: una para copias USB, otra para sincronizar con la nube, otra para transferencias LAN. ZimaOS adopta un enfoque distinto.

La aplicación Backup funciona con una idea simple de origen a destino. Elige de dónde vienen los datos: **Cloud**, **LAN**, **USB** o **Zima**. Elige a dónde van: un disco local, otro dispositivo Zima, una unidad externa o la nube. Cada combinación es una tarea, una programación, un viaje.

Esa única abstracción cubre todo el plan 3-2-1: la copia de trabajo, el segundo soporte y el anillo externo. No aprendes cuatro herramientas. Aprendes una.

## Configurar una tarea de copia

1. Abre la aplicación **Backup** desde el panel.

![Escritorio de ZimaOS mostrando el icono de la aplicación Backup](https://manage.icewhale.io/api/static/docs/1755069939384_copyImage.png)

2. Haz clic en **Add new backup** para abrir el asistente de creación de tareas.

![Asistente de creación de tareas de copia con el botón Add new backup](https://manage.icewhale.io/api/static/docs/1755069940811_copyImage.png)

3. Elige la fuente de datos: **Cloud** (Google Drive, Dropbox y más), **LAN** (carpetas compartidas de otros dispositivos), **USB** (unidades externas) o **Zima** (archivos almacenados en este dispositivo).

Las copias de **[Copia de seguridad del teléfono](./phone-backup "Realiza automáticamente una copia de seguridad de tu teléfono en ZimaOS con ZimaClient")** y **[Copia de seguridad del ordenador](./computer-backup "Realiza una copia de seguridad de tu ordenador en ZimaOS mediante Finder, el Explorador o sincronización")** aterrizan en tu almacenamiento como carpetas normales, así que encajan en una tarea de copia como cualquier otra cosa del dispositivo.

![Selección de fuente de datos de copia mostrando las opciones Cloud, LAN, USB y Zima](https://manage.icewhale.io/api/static/docs/1755069942195_copyImage.png)

4. Si elegiste una fuente en la nube, inicia sesión y autoriza el acceso.

5. Selecciona las carpetas que quieras copiar, o toda la estructura de directorios.

![Pantalla de selección de contenido de copia para elegir carpetas o directorios completos](https://manage.icewhale.io/api/static/docs/1755069945701_copyImage.png)

6. Establece el destino: un disco local, otro dispositivo Zima, una unidad externa o la nube.

![Opciones de destino de copia para discos locales, otros NAS, USB o la nube](https://manage.icewhale.io/api/static/docs/1755069947027_copyImage.png)

7. Haz clic en **Start**. La copia se ejecuta con el progreso en tiempo real.

![Tarea de copia en ejecución con el progreso en tiempo real](https://manage.icewhale.io/api/static/docs/1755069948294_copyImage.png)

Hay un recorrido en vídeo de los mismos pasos en [YouTube](https://www.youtube.com/watch?v=pUVMsS1tcyY).

## Copiar automáticamente

Un plan de copias solo funciona si se ejecuta sin que tengas que acordarte de lanzarlo.

- **Copia programada** se ejecuta sola en el intervalo que establezcas.
- **Varias tareas** pueden funcionar en paralelo sin interferir, para que fotos, documentos y datos de aplicaciones tengan cada uno su propia programación.
- **Reanudación y tolerancia a fallos** continúa una transferencia interrumpida en lugar de empezar de cero.

![Lista de tareas de la aplicación Backup mostrando varias tareas ejecutándose a la vez](https://manage.icewhale.io/api/static/docs/1755069949757_copyImage.png)

## Un origen, muchos destinos

Algunas carpetas merecen más de una copia. Fotos familiares, documentos de trabajo, registros financieros: cuando los datos son irremplazables, la regla 3-2-1 pide tenerlos en varios sitios a la vez.

La aplicación Backup lo resuelve con un origen y muchos destinos. Apunta cada tarea a la misma carpeta y dale a cada tarea su propio destino:

- **Segundo soporte:** la misma carpeta a otro disco local o a otro dispositivo Zima en la LAN.
- **Anillo externo:** la misma carpeta a la nube.

![Lista de tareas de la aplicación Backup mostrando dos tareas que copian la misma carpeta a destinos distintos](/images/guides/backup-one-source-many-destinations.png)

Cada tarea mantiene su propia programación, así que los dos anillos pueden funcionar a ritmos distintos: la copia local cada noche y la copia en la nube una vez a la semana. Las tareas son independientes, así que un problema en un destino nunca detiene al otro.

## Sincronizar con la nube no es una copia

Una carpeta sincronizada con la nube no es una copia de seguridad. La sincronización refleja los cambios en ambas direcciones, así que borrar un archivo en local lo borra en todas partes. Una copia guarda versiones y solo escribe hacia delante. Cuando uses la nube en tu plan de copias, usa el destino de nube de la aplicación Backup para obtener versiones y puntos de restauración, no un espejo de tus errores.

La nube también se gana su puesto como copia externa de tu plan 3-2-1. Consulta **[Conectar unidades en la nube](./cloud-drive-connect "Conecta Google Drive, Dropbox o OneDrive a ZimaOS")** para trabajar con almacenamiento en la nube.

## Restaurar y verificar

Una copia que nunca has restaurado es un plan que nunca has probado. Después de tu primera copia, restaura un archivo y ábrelo. Diez minutos de verificación ahora valen más que descubrir un problema silencioso el día que de verdad necesitas la copia.

## Siguiente

- **[Opciones de RAID](./raid-options "Compara los niveles RAID y JBOD con instrucciones de configuración")** — qué protege RAID y qué no
- **[Copia de seguridad del teléfono](./phone-backup "Realiza automáticamente una copia de seguridad de tu teléfono en ZimaOS con ZimaClient")** — mete los datos del teléfono en el plan
- **[Conectar otro NAS](./synology-to-zimacube-migration "Conecta otro NAS a ZimaOS para mover archivos o hacer copias entre dispositivos")** — el anillo LAN del plan
