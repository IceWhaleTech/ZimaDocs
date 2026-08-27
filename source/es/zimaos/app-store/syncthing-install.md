---
title: Una guía sencilla para instalar Syncthing en ZimaOS
description:  
type: Docs  
author: admin  
tip: El formato fijo en la barra superior no debe ser eliminado, description es la descripción del artículo, si no se rellena se tomará el primer párrafo del contenido como descripción.  
---  
> _Publicado originalmente en el foro de la Comunidad IceWhale por_ _**Muditha Liyanagama (Contribuyente de la Comunidad)**:_ _[Fuente original](https://community.zimaspace.com/t/a-simple-guide-to-installing-syncthing-on-zimaos/7456?utm_source=chatgpt.com)_

¡Hola, entusiastas de ZimaOS y Zimaboard!

He encontrado que, aunque la comunidad de ZimaOS y el equipo de Ice-whale ofrecen un soporte fantástico, encontrar guías de instalación claras, organizadas y detalladas puede ser a veces un desafío. Para aquellos de nosotros que preferimos un enfoque directo y paso a paso, especialmente cuando se trata de resolver esos pequeños problemas frustrantes, esta guía es para ti. Este es el primero de una serie de artículos que planeo escribir sobre ZimaOS y Zimaboard, y espero que sea útil.

Realicé esta instalación en un Zimaboard2 con las siguientes especificaciones:

* **CPU:** Intel(R) N150 4 Núcleos 2.90 GHz 4 Hilos  
* **RAM:** 16 GB 6400 MHz LPDDR5  
* **GPU:** Intel Corporation Alder Lake-N \[Gráficos de Intel\]  
* **Sistema Operativo:** ZimaOS v1.5.3 Plus  

Vamos a instalar Syncthing

### **Paso 1: Acceder a la** **Tienda de Aplicaciones**

1. Inicia sesión en tu interfaz de ZimaOS.  
2. Navega a la **Tienda de Aplicaciones**.

![app_store](https://manage.icewhale.io/api/static/docs/1767081086850_copyImage.png)

### **Paso 2: Buscar y Seleccionar Syncthing**

1. En la barra de búsqueda de la Tienda de Aplicaciones, escribe Syncthing.  
2. Selecciona **Syncthing (Backup)** de los resultados de búsqueda.

![synctin](https://manage.icewhale.io/api/static/docs/1767081087737_copyImage.png)

### **Paso 3: Instalación Personalizada**

1. Localiza el botón de **Instalar**. En lugar de hacer clic directamente, haz clic en la pequeña **flecha hacia abajo** junto a él.  
2. Selecciona **Instalación Personalizada**.

![custom_install](https://manage.icewhale.io/api/static/docs/1767081088482_copyImage.png)

### **Paso 4: Configuración Crítica Antes de la Instalación**

Aquí configuramos los parámetros esenciales para que Syncthing funcione correctamente.

* **Ruta de la Carpeta de Syncthing:**  
  Esta es la ubicación principal donde Syncthing gestionará tus archivos sincronizados. Cualquier subcarpeta que crees dentro de esta ruta será accesible para la sincronización.

* **Nota Importante:** No puedes usar la raíz de ningún disco montado o carpetas del sistema (como Galería, Medios, Documentos, etc.) como tu ruta de carpeta de Syncthing. Esto se debe a que ejecutar Syncthing con estas rutas generalmente requiere privilegios de usuario root, lo cual no se recomienda por razones de seguridad.

* **PGID y PUID:**  
  Estos son identificadores cruciales que le indican a Syncthing qué permisos de usuario usar. Configurarlos incorrectamente puede causar problemas de sincronización y puede requerir una desinstalación completa y reinstalación para corregirlo.

* **Cómo encontrar tu PGID y PUID:**

1. En ZimaOS, ve a **Configuración**.  
2. Navega a **General**.  
3. Habilita **Modo de Desarrollador**.  
4. Ve a **Ver**.  
5. Haz clic en **Acceso SSH** para habilitarlo.  
6. Haz clic en **Terminal basado en web**.  
7. Inicia sesión usando tu nombre de usuario y contraseña de ZimaOS.  
8. Una vez dentro del terminal, ingresa los siguientes comandos, presionando Enter después de cada uno. **Recuerda reemplazar** _username_ **por tu nombre de usuario real de ZimaOS.** _id -u username_ _id -g username_

La salida mostrará tu **PUID** (ID de Usuario) y **PGID** (ID de Grupo). **Copia y pega cuidadosamente estos números** en los campos correspondientes en la sección de **Variables de Entorno** en la pantalla de instalación personalizada de Syncthing, como se muestra en la imagen de ejemplo proporcionada. Para mí, el PGID era 1000 y el PUID era 999.

![set](https://manage.icewhale.io/api/static/docs/1767081089336_copyImage.png)

* **Verificación:** Antes de continuar, **revisa muy cuidadosamente todos tus ajustes**. Asegúrate de que la ruta de la carpeta de Syncthing sea válida y que los valores de PGID y PUID estén ingresados correctamente.

* **Instalar:** Una vez que estés seguro de que todos los ajustes son correctos, haz clic en el botón **Instalar**.

### **Paso 5: Después de la Instalación - Mejores Prácticas de Sincronización**

Después de que Syncthing se haya instalado con éxito:

* Cuando estés sincronizando carpetas, **siempre crea la ruta de la carpeta de destino** _**a través de Syncthing mismo**_.  
* **NO crees la carpeta de destino directamente utilizando el explorador de archivos predeterminado de ZimaOS.** Hacerlo puede generar problemas inesperados de sincronización.

¡Espero que esta guía detallada haga que la instalación de Syncthing en tu dispositivo ZimaOS sea una experiencia fluida y exitosa! ¡Feliz sincronización!