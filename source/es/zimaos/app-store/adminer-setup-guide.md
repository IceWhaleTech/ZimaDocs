---
title: Instalar y usar Adminer en ZimaOS
seo_title: "Adminer en ZimaOS: instalación y acceso a bases de datos SQLite"
description: "Instala Adminer desde la App Store de ZimaOS, monta un directorio de base de datos e inspecciona bases de datos SQLite como la biblioteca de Emby."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Adminer es un gestor de bases de datos ligero y basado en navegador que admite SQLite, MySQL, PostgreSQL y otros sistemas de bases de datos. Consulta la [página de Adminer en la App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.adminer) para conocer los detalles más recientes de la app. Esta guía te muestra cómo instalar Adminer desde la App Store de ZimaOS y darle acceso a un directorio de base de datos SQLite, usando Emby como ejemplo.

> **Importante:** Adminer proporciona acceso directo a los datos de las aplicaciones. Haz una copia de seguridad de la base de datos antes de hacer cambios, evita exponer Adminer directamente a internet y usa consultas de solo lectura hasta que entiendas la estructura de la base de datos de la aplicación.

## Antes de empezar

- ZimaOS está instalado y en funcionamiento.
- Puedes acceder a la interfaz web de ZimaOS y a la App Store.
- Si quieres inspeccionar una base de datos SQLite existente, sabes qué directorio del host contiene sus archivos `.db`.
- Tienes una copia de seguridad actual de la base de datos antes de realizar operaciones de escritura.

También puedes instalar Adminer sin una base de datos existente y configurar el montaje del directorio más tarde.

## Instalar Adminer

1. Abre la **App Store** de ZimaOS.
2. Busca **Adminer**.
3. Abre la ficha de Adminer y haz clic en **Install**.
4. Espera a que termine la instalación y confirma que Adminer aparece en el panel de ZimaOS.

![Página de la app Adminer en la App Store de ZimaOS en la categoría Developer](/images/app-store/adminer-app-store.webp)

## Dar acceso a Adminer a un directorio de base de datos

1. En el panel de ZimaOS, abre el menú de la esquina superior derecha de la ficha de la app Adminer.
2. Selecciona **Manage Adminer** para abrir la página de configuración del contenedor.

![Página Edit Adminer con configuración de servicios, redes y el puerto 8080](/images/app-store/adminer-config-page.webp)

3. Expande **Volumes**, busca **Mount** y añade un montaje.
4. Establece el tipo de montaje como **Bind mount**.
5. En **Host**, selecciona el directorio que contiene los archivos de la base de datos. Para una instalación por defecto de Emby, el directorio suele ser `/DATA/AppData/emby/config/data`.
6. En **Container**, introduce `/config/data`.
7. Haz clic en **Save** y reinicia Adminer si ZimaOS no lo reinicia automáticamente.

![Volúmenes de Adminer con la carpeta de datos de Emby montada en el contenedor](/images/app-store/adminer-volumes-bind.webp)

Para otra aplicación, sustituye la ruta de host de Emby por el directorio de base de datos de esa aplicación. Monta solo el directorio que Adminer necesita en lugar de conceder acceso a una ruta de almacenamiento más amplia.

## Abrir una base de datos SQLite

1. Abre Adminer desde el panel de ZimaOS.
2. Selecciona **SQLite** como sistema de base de datos si está disponible en la imagen de Adminer instalada.
3. Navega hasta el directorio montado y selecciona el archivo de base de datos, como `/config/data/library.db`.
4. Introduce las credenciales que requiera la imagen de Adminer e inicia sesión.

Las imágenes y versiones de Adminer pueden diferir en cómo gestionan la autenticación de SQLite. Adminer v4+ exige una contraseña para las conexiones SQLite — la imagen oficial no te deja iniciar sesión con contraseña en blanco. Si la imagen instalada rechaza una conexión SQLite con contraseña en blanco, usa un complemento de contraseña del panel o una imagen de la comunidad como `finwo/adminer` (inicia sesión con `nopassword`). No debilites credenciales de aplicaciones no relacionadas ni expongas Adminer públicamente. Revisa el estado de actualización y seguridad de la imagen antes de un uso prolongado.

## Ejemplo: inspeccionar la base de datos de la biblioteca de Emby

Con el directorio de datos por defecto de Emby montado en `/config/data`, puedes encontrar estos archivos:

- `library.db` contiene los metadatos de la biblioteca multimedia.
- `users.db` contiene los datos de las cuentas de usuario.

Usa la página **SQL Command** para ejecutar comprobaciones de solo lectura. Para comprobar la integridad de la base de datos SQLite, ejecuta:

```sql
PRAGMA integrity_check;
```

Un resultado `ok` indica que SQLite no encontró errores de integridad. Para inspeccionar una pequeña muestra de nombres de medios y rutas almacenadas de Emby, ejecuta:

```sql
SELECT Name, Path FROM MediaItems LIMIT 20;
```

Los esquemas de base de datos pueden cambiar entre versiones de la aplicación. Si falta una tabla o columna, confirma el esquema antes de modificar la consulta. Evita `UPDATE`, `DELETE` o cambios de esquema a menos que tengas una copia de seguridad probada y entiendas las consecuencias.

## Conectarse a otros tipos de bases de datos

MySQL y PostgreSQL son servicios de base de datos en red, no archivos independientes. Para conectarte a ellos, Adminer necesita acceso de red al host de la base de datos, el puerto correcto y credenciales válidas. Un montaje de volumen por sí solo no es suficiente.

Si la base de datos se ejecuta en otro contenedor, confirma que ambos contenedores pueden comunicarse a través de una red Docker adecuada. No expongas el puerto de la base de datos públicamente solo para que Adminer se conecte.

## Consejos de seguridad y mantenimiento

- Mantén Adminer limitado a tu red local de confianza u otro método de acceso seguro.
- Haz copias de seguridad de las bases de datos antes de editarlas y detén la aplicación de origen antes de sustituir archivos de base de datos.
- Revisa la fecha de publicación y el estado de seguridad antes de usar una imagen de Adminer mantenida por la comunidad.
- Detén o elimina Adminer cuando ya no necesites acceso directo a la base de datos.

## Referencia

- [Sitio web oficial de Adminer](https://www.adminer.org/ "Sitio oficial de Adminer")
- [Referencia de PRAGMA de SQLite](https://www.sqlite.org/pragma.html "Referencia oficial de los comandos PRAGMA de SQLite")

## ¿Necesitas ayuda?

Si tienes cualquier problema al instalar o usar Adminer en ZimaOS, únete a la [comunidad de Discord de ZimaSpace](https://discord.gg/f9nzbmpMtU "Únete a la comunidad de Discord de ZimaSpace para soporte de ZimaOS"). Nuestro equipo y los miembros de la comunidad estarán encantados de ayudarte.
