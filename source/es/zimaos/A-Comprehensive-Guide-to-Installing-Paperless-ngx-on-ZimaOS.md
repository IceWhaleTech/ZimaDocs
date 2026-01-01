Aquí está la traducción del contenido solicitado al español:

---
title: Guía completa para instalar Paperless-ngx en ZimaOS
description: 
type: Docs
author: icewhale123456
tip: La barra superior está fija, por favor no la elimines, la descripción es para el artículo, si no se llena, se tomará el primer párrafo del contenido.
---
> _Publicado originalmente en el foro de la Comunidad IceWhale por_ _**Muditha Liyanagama**_ _:_ _[https://community.zimaspace.com/](https://community.zimaspace.com/t/a-comprehensive-guide-to-installing-paperless-ngx-on-zimaos/7474)_

¡Hola, entusiastas de ZimaOS y Zimaboard!

He notado que, aunque la comunidad de ZimaOS y el equipo de Ice-whale brindan un excelente soporte, a veces es un desafío encontrar guías de instalación claras, organizadas y detalladas. Para aquellos de nosotros que preferimos un enfoque directo y paso a paso, especialmente cuando se trata de esos pequeños obstáculos técnicos, esta guía está hecha para ti. Este artículo es el segundo de una serie que estoy desarrollando sobre ZimaOS y Zimaboard, y espero sinceramente que te resulte útil.

Esta guía se centra en la instalación de Paperless-ngx con sus funciones esenciales para uso doméstico, accesible dentro de tu red local o una red de Tailscale. Si tu intención es exponer tu instancia de Paperless-ngx a internet público, algunas de las configuraciones que se describen a continuación pueden necesitar ajustes.

Realicé esta instalación en un Zimaboard 2 con las siguientes especificaciones:

*   **CPU:** Intel(R) N150 4 núcleos 2.90 GHz 4 hilos
    
*   **RAM:** 16 GB 6400 MHz LPDDR5
    
*   **GPU:** Intel Corporation Alder Lake-N \[Gráficos Intel\]
    
*   **Sistema Operativo:** ZimaOS v1.5.3 Plus
    

¡Vamos a instalar Paperless-ngx!

### **Paso 1: Acceder a la** **App** **Store**

1.  Inicia sesión en la interfaz web de ZimaOS.
    
2.  Navega a la **App Store**.
    

### **Paso 2: Buscar y seleccionar Paperless-ngx**

1.  En la barra de búsqueda de la App Store, escribe Paperless-ngx.
    
2.  Selecciona **Paperless-ngx (BigBearCasaOS)** de los resultados de búsqueda.
    

### **Paso 3: Instalación personalizada**

1.  Localiza el botón **Instalar**. En lugar de hacer clic directamente, haz clic en la pequeña flecha hacia abajo junto a él.
    
2.  Selecciona **Instalación personalizada**.
    

### **Paso 4: Configuración crucial antes de la instalación**

Esta es la fase crítica donde configuramos los parámetros esenciales para que Paperless-ngx funcione correctamente.

En la sección **Volúmenes**, realiza los siguientes cambios. (Si prefieres la configuración predeterminada, puedes dejarlos sin cambios. Consulta la imagen a continuación como referencia.)

*   **Establecer una ruta personalizada para el volumen de** **/usr/src/paperless/consume**: Se recomienda encarecidamente definir una ruta específica y fácil de usar para tu carpeta de consumo. Esto facilita mucho la gestión de tus documentos.
    

![Ruta de configuración](https://manage.icewhale.io/api/static/docs/1767274710302_copyImage.png)

Agrega las siguientes variables ambientales. (Consulta la imagen a continuación como referencia.)

*   **PAPERLESS\_ADMIN\_USER**: Cambia el valor predeterminado por el nombre de usuario administrativo que prefieras.
    
*   **PAPERLESS\_ADMIN\_PASSWORD**: Cambia el valor predeterminado por la contraseña administrativa que prefieras.
    
*   _Estos parámetros crearán tu cuenta administrativa al instalar._
    
*   **PAPERLESS\_CONSUMER\_DELETE\_ORIGINALS: true**:
    
*   _Este parámetro habilita la eliminación automática de archivos de la carpeta_ _/consume_ _después de que hayan sido procesados y absorbidos por Paperless-ngx._
    
*   **PAPERLESS\_CONSUMER\_RECURSIVE: true**:
    
*   _Este parámetro habilita el consumo recursivo de archivos dentro de la carpeta_ _/consume_, lo que significa que procesará subcarpetas y su contenido._
    
*   **PAPERLESS\_OCR\_CLEAN: clean-final**:
    
*   **PAPERLESS\_OCR\_LANGUAGES: <código de 3 letras para los idiomas soportados por OCR, separados por espacios (por ejemplo, eng sin)>**:
    
*   _Estas configuraciones habilitan funciones básicas y necesarias de OCR para Paperless-ngx. Sin embargo, la configuración específica_ _clean-final_ _y los idiomas OCR deseados deberán ser habilitados y configurados dentro de la interfaz gráfica de usuario (GUI) de Paperless-ngx después de la instalación._
    
*   **PAPERLESS\_CSRF\_TRUSTED\_ORIGINS:** _**http://tu\_servidor**_ _**dirección:puerto**_
    
*   **PAPERLESS\_URL:** _**http://tu\_servidor**_ _**dirección:puerto**_
    
*   _Estas configuraciones son críticas. No incluyas una barra inclinada (/__**/**__) al final de las URL. Configurar estos parámetros incorrectamente resultará en un mensaje de error "Forbidden (403) CSRF verification failed. Request aborted" cuando intentes iniciar sesión._
    
*   **Nota:** Reemplaza con la dirección IP o el nombre de host de tu Zimaboard (por ejemplo, 192.168.1.100). Reemplaza con el puerto que Paperless-ngx usará (a menudo 8000 por defecto, pero puedes verificar esto en la configuración de la App Store de ZimaOS).
    

![Confirmar ruta](https://manage.icewhale.io/api/static/docs/1767274711098_copyImage.png)

Deja sin cambios el resto de la configuración.

**Revisión final:** Antes de continuar, revisa cuidadosamente todos tus ajustes. Una vez que estés seguro de que todos los parámetros son correctos, haz clic en el botón **Instalar**.

### **Configuración y operación post-instalación**

Después de la instalación, inicia sesión en la interfaz de Paperless-ngx y configura los ajustes de OCR de la siguiente manera:

1.  Navega a **Configuración de la Aplicación** → **Ajustes de OCR**.
    
2.  Establece **Clean** en clean-final.
    
3.  Habilita **Deskew**.
    
4.  Establece **Idioma** en los códigos de 3 letras para los idiomas de OCR que prefieras, separados por un signo de más (+) (por ejemplo, eng+sin).
    
5.  Haz clic en **Guardar**.
    

![Ajustes de OCR](https://manage.icewhale.io/api/static/docs/1767274711641_copyImage.png)

Luego, regresa al **Tablero de la Aplicación** en ZimaOS y reinicia **Paperless-ngx**.

![reiniciar](https://manage.icewhale.io/api/static/docs/1767274712173_copyImage.png)

**Nota operativa importante:** Siempre que agregues un lote grande de documentos a tu carpeta /consume para su procesamiento, es recomendable reiniciar Paperless-ngx. Si no lo haces, podrías enfrentar problemas de permisos de archivos que dificulten el procesamiento de documentos. Alternativamente, puedes cargar documentos directamente a través de la GUI de Paperless-ngx, lo cual generalmente no requiere un reinicio.