---
title: Instalar y usar Adminer en ZimaOS
seo_title: "Adminer en ZimaOS: instalación y acceso a bases de datos SQLite"
description: "Instala Adminer desde la App Store de ZimaOS, monta un directorio de base de datos e inspecciona bases de datos SQLite como la biblioteca de Emby."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Adminer es un gestor de bases de datos ligero y basado en el navegador que admite SQLite, MySQL, PostgreSQL y otros sistemas de bases de datos. Esta guía explica cómo instalar Adminer desde la App Store de ZimaOS y darle acceso a un directorio de bases de datos SQLite, utilizando Emby como ejemplo.

> **Importante:** Adminer proporciona acceso directo a los datos de las aplicaciones. Haz una copia de seguridad de la base de datos antes de realizar cambios, evita exponer Adminer directamente a Internet y utiliza consultas de solo lectura hasta que comprendas la estructura de la base de datos de la aplicación.

## Antes de empezar

- ZimaOS está instalado y en funcionamiento.
- Puedes acceder a la interfaz web y a la App Store de ZimaOS.
- Si quieres inspeccionar una base de datos SQLite existente, conoces el directorio del host que contiene sus archivos `.db`.
- Tienes una copia de seguridad actual de la base de datos antes de realizar operaciones de escritura.

Puedes instalar Adminer sin disponer de una base de datos y configurar el montaje del directorio más adelante.

## Instalar Adminer

1. Abre la **App Store** de ZimaOS.
2. Busca **Adminer**.
3. Abre la ficha de Adminer y haz clic en **Install**.
4. Espera a que termine la instalación y confirma que Adminer aparece en el panel de ZimaOS.

![Ficha de Adminer en la App Store de ZimaOS](/images/guides/adminer-app-store.webp)

## Dar acceso a Adminer a un directorio de base de datos

1. En el panel de ZimaOS, abre el menú de la esquina superior derecha de la tarjeta de la aplicación Adminer.
2. Selecciona **Manage Adminer** para abrir la página de configuración del contenedor.
3. Despliega **Volumes**, busca **Mount** y añade un montaje.
4. Establece el tipo de montaje en **Bind mount**.
5. En **Host**, selecciona el directorio que contiene los archivos de la base de datos. En una instalación predeterminada de Emby, el directorio suele ser `/DATA/AppData/emby/config/data`.
6. En **Container**, introduce `/config/data`.
7. Haz clic en **Save** y reinicia Adminer si ZimaOS no lo reinicia automáticamente.

![Montaje del directorio de la base de datos de Emby en la configuración del contenedor de Adminer](/images/guides/adminer-volume-mount.webp)

Para otra aplicación, sustituye la ruta del host de Emby por el directorio de base de datos de esa aplicación. Monta únicamente el directorio que Adminer necesita en lugar de conceder acceso a una ruta de almacenamiento más amplia.

## Abrir una base de datos SQLite

1. Abre Adminer desde el panel de ZimaOS.
2. Selecciona **SQLite** como sistema de base de datos si está disponible en la imagen de Adminer instalada.
3. Busca el directorio montado y selecciona el archivo de base de datos, por ejemplo `/config/data/library.db`.
4. Introduce las credenciales que requiera la imagen de Adminer e inicia sesión.

Las imágenes y versiones de Adminer pueden gestionar la autenticación de SQLite de manera diferente. Si la imagen instalada rechaza una conexión SQLite sin contraseña, no debilites las credenciales de otras aplicaciones ni expongas Adminer públicamente. Utiliza una imagen o configuración de autenticación de Adminer compatible con tu base de datos y revisa su estado de actualización y seguridad antes de usarla a largo plazo.

## Ejemplo: inspeccionar la base de datos de la biblioteca de Emby

Con el directorio de datos predeterminado de Emby montado en `/config/data`, puedes encontrar estos archivos:

- `library.db` contiene los metadatos de la biblioteca multimedia.
- `users.db` contiene los datos de las cuentas de usuario.

Utiliza la página **SQL Command** para ejecutar comprobaciones de solo lectura. Para comprobar la integridad de la base de datos SQLite, ejecuta:

```sql
PRAGMA integrity_check;
```

Un resultado `ok` indica que SQLite no ha encontrado errores de integridad. Para consultar una pequeña muestra de nombres de contenidos y rutas almacenadas por Emby, ejecuta:

```sql
SELECT Name, Path FROM MediaItems LIMIT 20;
```

Los esquemas de las bases de datos pueden cambiar entre versiones de una aplicación. Si falta una tabla o columna, confirma el esquema antes de modificar la consulta. Evita `UPDATE`, `DELETE` o los cambios de esquema salvo que dispongas de una copia de seguridad probada y comprendas las consecuencias.

## Conectarse a otros tipos de bases de datos

MySQL y PostgreSQL son servicios de bases de datos en red, no archivos independientes. Para conectarse a ellos, Adminer necesita acceso de red al host de la base de datos, el puerto correcto y credenciales válidas. Un montaje de volumen por sí solo no es suficiente.

Si la base de datos se ejecuta en otro contenedor, confirma que ambos contenedores pueden comunicarse mediante una red Docker adecuada. No expongas públicamente el puerto de la base de datos solo para permitir que Adminer se conecte.

## Consejos de seguridad y mantenimiento

- Limita Adminer a tu red local de confianza o a otro método de acceso protegido.
- Haz copias de seguridad antes de editar bases de datos y detén la aplicación de origen antes de sustituir archivos de base de datos.
- Revisa la fecha de publicación y el estado de seguridad antes de utilizar una imagen de Adminer mantenida por la comunidad.
- Detén o elimina Adminer cuando ya no necesites acceso directo a las bases de datos.

## Referencias

- [Sitio web oficial de Adminer](https://www.adminer.org/)
- [Referencia de PRAGMA de SQLite](https://www.sqlite.org/pragma.html)

## ¿Necesitas ayuda?

Si tienes problemas al instalar o utilizar Adminer en ZimaOS, únete a la comunidad de ZimaSpace en Discord. El equipo de IceWhale y los miembros de la comunidad pueden ayudarte a solucionar la configuración.

[Únete al Discord de ZimaSpace](https://discord.gg/f9nzbmpMtU)
