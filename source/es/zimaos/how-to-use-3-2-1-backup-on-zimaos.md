---
title: Copia de seguridad 3-2-1 en ZimaOS
seo_title: "Plan de copias de seguridad de ZimaOS: estrategia 3-2-1 para los datos de tu NAS"
description: "Crea un plan de copias de seguridad completo en ZimaOS con la regla 3-2-1. Copia carpetas, unidades USB y almacenamiento en la nube en una sola tarea, programa ejecuciones automáticas y conserva una copia externa."
type: Docs
author: vicky
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Los discos duros fallan, los archivos se eliminan por accidente y las casas se inundan. Un plan de copias de seguridad es lo que evita que esos momentos provoquen la pérdida de todo.

Primero hay que dejar algo claro: RAID no es una copia de seguridad. RAID te protege frente al fallo de una sola unidad mientras el dispositivo sigue funcionando. No protege contra una eliminación accidental, el ransomware ni una subida de tensión que inutilice todo el equipo. Un verdadero plan de copias de seguridad también cubre esos riesgos.

## La regla 3-2-1

La regla 3-2-1 es la respuesta habitual a la pregunta de cuántas copias de seguridad son suficientes.

- **3 copias** de tus datos: el original y dos copias de seguridad, para que un único fallo no lo destruya todo.
- **2 tipos de soporte diferentes**: por ejemplo, las unidades del dispositivo y una unidad USB externa, para diversificar el riesgo.
- **1 copia externa**: en un lugar físicamente separado, para que un incendio o un robo en casa no se lleve todas las copias.

## Configura una tarea de copia de seguridad

ZimaOS incluye una aplicación Backup que gestiona todo desde un solo lugar.

1. Abre la aplicación **Backup** desde el panel.

![Escritorio de ZimaOS con el icono de la aplicación Backup para abrir la herramienta de copia de seguridad](https://manage.icewhale.io/api/static/docs/1755069939384_copyImage.png)

2. Haz clic en **Añadir nueva copia de seguridad** para abrir el asistente de creación de tareas.

![Asistente de creación de tareas de copia de seguridad con el botón Añadir nueva copia de seguridad](https://manage.icewhale.io/api/static/docs/1755069940811_copyImage.png)

3. Elige la fuente de datos: **Nube** (Google Drive, Dropbox y otros), **LAN** (carpetas compartidas de otros dispositivos), **USB** (unidades externas) o **Zima** (archivos guardados en este dispositivo).

Las copias de **[Copia de seguridad del teléfono](./phone-backup "Realiza automáticamente una copia de seguridad de tu teléfono en ZimaOS con ZimaClient")** y **[Copia de seguridad del ordenador](./computer-backup "Realiza una copia de seguridad de tu ordenador en ZimaOS mediante Finder, el Explorador o sincronización")** llegan al almacenamiento como carpetas normales, por lo que puedes incluirlas en una tarea igual que cualquier otro contenido guardado en el dispositivo.

![Selección de la fuente de datos de la copia de seguridad con las opciones Nube, LAN, USB y Zima](https://manage.icewhale.io/api/static/docs/1755069942195_copyImage.png)

4. Si has elegido una fuente en la nube, inicia sesión y autoriza el acceso.

![Pantalla de inicio de sesión de una cuenta de Google para autorizar el acceso a la copia de seguridad en la nube](https://manage.icewhale.io/api/static/docs/1755069943543_copyImage.png)

![Paso de autorización del almacenamiento en la nube en el asistente de tareas de copia de seguridad](https://manage.icewhale.io/api/static/docs/1755069944297_copyImage.png)

5. Selecciona las carpetas que quieras copiar o toda la estructura de directorios.

![Pantalla de selección de contenido de la copia de seguridad para elegir carpetas o directorios completos](https://manage.icewhale.io/api/static/docs/1755069945701_copyImage.png)

6. Define el destino: un disco local, otro dispositivo Zima, una unidad externa o la nube.

![Opciones de destino de la copia de seguridad para discos locales, otros dispositivos NAS, USB o la nube](https://manage.icewhale.io/api/static/docs/1755069947027_copyImage.png)

7. Haz clic en **Iniciar**. La copia se ejecutará y mostrará el progreso en tiempo real.

![Tarea de copia de seguridad en ejecución con el progreso mostrado en tiempo real](https://manage.icewhale.io/api/static/docs/1755069948294_copyImage.png)

Puedes ver un vídeo con los mismos pasos en [YouTube](https://www.youtube.com/watch?v=pUVMsS1tcyY).

## Automatiza las copias de seguridad

Un plan de copias de seguridad solo funciona si se ejecuta sin que tengas que recordarlo.

- La **copia programada** se ejecuta automáticamente con el intervalo que definas.
- Pueden ejecutarse **varias tareas** en paralelo sin interferirse, de modo que las fotos, los documentos y los datos de aplicaciones tengan cada uno su propio horario.
- La **reanudación y tolerancia a fallos** continúa una transferencia interrumpida en lugar de empezar desde cero.

![Lista de tareas de la aplicación Backup con varias tareas de copia de seguridad ejecutándose simultáneamente](https://manage.icewhale.io/api/static/docs/1755069949757_copyImage.png)

## La sincronización en la nube no es una copia de seguridad

Una carpeta sincronizada con la nube no es una copia de seguridad. La sincronización refleja los cambios en ambos sentidos, por lo que eliminar un archivo localmente lo elimina en todas partes. Una copia de seguridad conserva versiones y solo escribe hacia delante. Cuando utilices la nube en tu plan, elige el destino en la nube de la aplicación Backup para obtener versiones y puntos de restauración, en lugar de duplicar tus errores.

La nube también cumple la función de copia externa en tu plan 3-2-1. Consulta **[Conectar unidades en la nube](./cloud-drive-connect "Conecta Google Drive, Dropbox u OneDrive a ZimaOS para realizar copias de seguridad")** para trabajar con almacenamiento en la nube.

## Restaura y verifica

Una copia que nunca has restaurado es un plan que nunca has probado. Cuando termine la primera copia de seguridad, restaura un archivo y ábrelo. Diez minutos de verificación ahora son mejores que descubrir un problema silencioso el día que realmente necesites la copia.

## Siguiente

- **[Opciones RAID](./raid-options "Explicación de los niveles RAID y JBOD con instrucciones de configuración paso a paso")** — qué protege RAID y qué no
- **[Copia de seguridad del teléfono](./phone-backup "Realiza automáticamente una copia de seguridad de tu teléfono en ZimaOS con ZimaClient")** — incorpora los datos del teléfono al plan
- **[Mover datos entre unidades](./data-migration "Mueve imágenes Docker, datos de aplicaciones y carpetas entre unidades en ZimaOS")** — para cuando una unidad se llena
