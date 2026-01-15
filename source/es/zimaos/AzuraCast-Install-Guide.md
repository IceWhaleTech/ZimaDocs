---  
title: Guía completa para instalar AzuraCast en ZimaOS a través de la línea de comandos  
description:   
type: Docs  
author: icewhale123456  
tip: No elimines el formato fijo de la barra superior, description es una descripción del artículo. Si no se llena, se tomará el primer párrafo del contenido.  
---  
> _Esta guía está adaptada del artículo original, [Guía completa para instalar AzuraCast en ZimaOS a través de la línea de comandos](https://community.zimaspace.com/t/a-comprehensive-guide-to-installing-azuracast-on-zimaos-via-the-command-line/7818), por el miembro de la comunidad **Muditha Liyanagama**. Les extendemos nuestro sincero agradecimiento por su trabajo._  

## Introducción  
**AzuraCast** es una poderosa suite de gestión de radio web autohospedada todo en uno. Te permite gestionar múltiples estaciones de radio en línea, administrar listas de reproducción, configurar AutoDJ y explorar muchas otras opciones creativas de transmisión.

Anteriormente, escribí una guía sobre cómo instalar AzuraCast usando la interfaz gráfica de ZimaOS. Sin embargo, tras más pruebas, descubrí que el método GUI es inestable y el actualizador web de AzuraCast no funciona correctamente cuando se instala de esa manera.

En esta guía, te mostraré un método más confiable: instalar AzuraCast en ZimaOS usando la línea de comandos. Este enfoque es significativamente más estable y las actualizaciones web funcionan correctamente.

Este tutorial está destinado para uso doméstico o privado, accesible dentro de tu red local o a través de Tailscale. Si planeas exponer tu instancia de AzuraCast a Internet público, es posible que necesites configurar ajustes adicionales de red y seguridad.

Este método ha sido probado tanto en **Zimaboard 1** como en **Zimaboard 2**.

Comencemos.

### Paso 1: Habilitar el modo de desarrollador y el acceso SSH  
![página de configuración y abrir la ventana del modo desarrollador](https://manage.icewhale.io/api/static/docs/1768468645225_image.png)

![habilitar acceso SSH y abrir la terminal web](https://manage.icewhale.io/api/static/docs/1768468682300_image.png)

1. Ve a **Configuración** de ZimaOS → **General** → **Modo desarrollador**
2. Haz clic en **Ver**
3. Habilita **Acceso SSH**
4. Haz clic en **Terminal basada en la web**

Se abrirá una nueva pestaña del navegador con la interfaz de la terminal de ZimaOS.

### Paso 2: Iniciar sesión en la terminal como root  
En la terminal:

1. Ingresa tu **nombre de usuario** → presiona **Enter**
2. Ingresa tu **contraseña** → presiona **Enter**
3. Escribe: `sudo -i`
4. Presiona **Enter**
5. Ingresa tu **contraseña** nuevamente → presiona **Enter**

Ahora has iniciado sesión como usuario root.  
![entrar en la terminal e iniciar sesión con la cuenta root](https://manage.icewhale.io/api/static/docs/1768468838713_image.png)

### Paso 3: Crear el directorio de instalación de AzuraCast  
AzuraCast debe instalarse dentro del directorio AppData.

#### 1. Ve a tu carpeta de AppData  
(Camino de ejemplo, puede ser diferente en tu caso)

`cd /ZimaOS-HD/AppData`

#### 2. Crea un directorio para AzuraCast  
`mkdir azuracast`

#### 3. Entra en el directorio  
`cd /ZimaOS-HD/AppData/azuracast`

### Paso 4: Descargar y ejecutar el instalador de AzuraCast  
Ejecuta los siguientes comandos:  
```language  
curl -fsSL https://raw.githubusercontent.com/AzuraCast/AzuraCast/main/docker.sh > docker.sh  
chmod a+x docker.sh  
./docker.sh install  
```  
Esto iniciará la instalación de AzuraCast en el directorio actual.

Durante la instalación, se te pedirá que selecciones varias opciones, incluidos los números de puerto.  
**Recomendación**: Mantén todos los valores predeterminados a menos que estés seguro de querer cambiarlos.

Una vez que la instalación termine, los servicios de AzuraCast y el actualizador web estarán desplegados.

### Paso 5: Corregir conflictos de puertos (si los hay)  
Si algún puerto necesario ya está en uso, el instalador mostrará un error indicando qué puertos están en conflicto.

#### 1. Detén los servicios de AzuraCast  
`docker compose down`

Espera hasta que todos los servicios se detengan.

#### 2. Edita el archivo Docker Compose  
`nano docker-compose.yml`

Al editar:

Cambia solo el lado izquierdo (**puertos publicados**)  
NO cambies el lado derecho (**puertos de destino**)

**Ejemplo:**  
```language  
8080:80 ← cambia 8080 si es necesario, mantiene 80  
```

#### 3. Guarda el archivo  
Presiona:

1. Ctrl + X  
2. Y  
3. Enter  

#### 4. Vuelve a desplegar AzuraCast  
`docker-compose up -d`

Puede que necesites repetir este proceso varias veces, ya que Docker suele informar conflictos de puertos uno a la vez. Después de corregir un conflicto, puede que detecte otro.

Una vez resueltos todos los conflictos, AzuraCast se desplegará completamente.

### Paso 6: Acceder a la interfaz web de AzuraCast  
Abre tu navegador y ve a:

`http://TU_IP_DEL_SERVIDOR:80`

Si cambiaste el puerto publicado, reemplaza 80 con el número de puerto que elegiste.

---  

**<u>Cosas importantes a tener en cuenta</u>**  
Existen algunas limitaciones al usar este método:

- Esta instalación **no puede ser gestionada a través de la GUI de ZimaOS**.  
- Editarla o detenerla desde la GUI podría causar bloqueos.  
- El panel de ZimaOS **no mostrará el uso de CPU ni de RAM** para AzuraCast.  
- Toda la gestión y solución de problemas debe hacerse a través de la **línea de comandos** o de una aplicación de terceros con GUI, como **Portainer**.  

Sin embargo, a pesar de estas limitaciones:

- Este método de instalación es **mucho más estable**  
- Las **actualizaciones web de AzuraCast funcionan correctamente**  
- Es más adecuado para servidores de radio personales o domésticos a largo plazo.