---
title: ¿Cómo hago una copia de seguridad de los archivos de mi Mac en ZimaCube usando Time Machine?
description: 
type: Docs
author: admin
tip: El formato fijo de la barra superior no debe ser eliminado, la descripción es una descripción del artículo, si no se llena, se cortará el primer párrafo del contenido
---
¿Quieres mantener tus archivos de Mac seguros? Con la nueva función de Time Machine de ZimaOS, puedes hacer una copia de seguridad de tus archivos en ZimaCube de manera fácil. Esta poderosa función no solo es rápida y sencilla, sino que también garantiza que tus datos importantes estén siempre protegidos. Aquí tienes los pasos fáciles de seguir para configurar rápidamente una copia de seguridad.

Antes de comenzar, asegúrate de haber descargado e instalado la última versión de ZimaOS: https://github.com/IceWhaleTech/ZimaOS/releases

## Paso 1: Configurar una carpeta compartida de ZimaOS
1. Abre tu panel de control de ZimaOS (por ejemplo, accediendo a `http://<tu_ip_nas>`).
2. Ve a la página de **Archivos**.
3. Encuentra la carpeta que quieres usar como destino de la copia de seguridad, como **Time Machine**.
4. Haz clic derecho en la carpeta y selecciona **Compartir a través de Samba**.
![](https://manage.icewhale.io/api/static/docs/1738916403063_image.png)
5. En la ventana emergente:
- Confirma que el nombre de la carpeta y la ubicación de almacenamiento son correctos.
- Marca la opción **Configurar para Time Machine**.
- Recuerda: tu usuario predeterminado se usará para la autenticación de Time Machine.
- (Opcional) Haz clic en **+ Agregar** para asignar permisos de acceso a otros usuarios.
![](https://manage.icewhale.io/api/static/docs/1738916455895_image.png)
6. Haz clic en Crear para completar la configuración de la carpeta compartida.
  ![](https://manage.icewhale.io/api/static/docs/1738916492447_image.png)
## Paso 2: Configurar Time Machine en tu Mac
1. Abre **Preferencias del Sistema** o **Configuración del Sistema** (macOS Ventura y posteriores).
2. Haz clic en **Time Machine**.
![](https://manage.icewhale.io/api/static/docs/1738916795038_image.png)
3. Selecciona **Agregar Disco de Respaldo...**.
![](https://manage.icewhale.io/api/static/docs/1738916825362_image.png)
4. En la lista de discos, encuentra y selecciona la carpeta compartida previamente configurada en ZimaOS (por ejemplo: **Time Machine**). Haz clic en **Configurar Disco**.
![](https://manage.icewhale.io/api/static/docs/1738917029430_image.png)
5. Ingresa tu nombre de usuario y contraseña cuando se te solicite para completar la configuración del disco.
![](https://manage.icewhale.io/api/static/docs/1738917049915_image.png)
## Paso 3: Iniciar copia de seguridad
1. Asegúrate de que tu Mac y ZimaCube estén en la misma red local (LAN).
2. Time Machine identificará automáticamente la carpeta de destino y comenzará a hacer la copia de seguridad.
![](https://manage.icewhale.io/api/static/docs/1738917181052_image.png)
## Precauciones
**Espacio de almacenamiento**: Asegúrate de que ZimaCube tenga suficiente espacio libre para cumplir con los requisitos de copia de seguridad.
**Conexión de red**: Si la copia de seguridad falla, por favor verifica la conexión de red y confirma que el servicio SMB de ZimaCube esté habilitado.
**Problema de entrada de contraseña de permisos**: Al ingresar la contraseña, macOS puede no poder ingresar. Si encuentras este problema, intenta hacer clic primero en el espacio en blanco, luego haz clic nuevamente en el cuadro de entrada de contraseña e intenta de nuevo.

## Resumen
Siguiendo los pasos anteriores, has realizado con éxito una copia de seguridad de tus archivos de Mac en ZimaCube, añadiendo una sólida barrera a la seguridad de tus datos. Si tienes alguna pregunta durante la operación, no dudes en contactar a nuestro equipo de soporte <feedback@zimaos.com>. ¡Deja que ZimaOS proporcione una protección más eficiente para tu trabajo y tu vida!

## Lectura adicional:
**Cómo restaurar archivos usando Time Machine**: Guía del usuario de macOS: [Restaurar elementos respaldados con Time Machine en Mac](https://support.apple.com/zh-cn/guide/mac-help/mh11422/11.0/mac/11.0)