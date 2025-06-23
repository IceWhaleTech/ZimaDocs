---
title: ¿2 ZimaBlades, 1 Clúster? ¡PVE hace que tu servicio sea migrable!
type: “Docs”
tip: Formato fijo de la barra superior, no lo elimines
---
Imagina que tu servidor local ejecuta servicios esenciales como VPN, transcodificación de medios, DNS, o incluso un servidor de juegos. ¿Alguna vez has pensado en migrar estos servicios a una nueva máquina algún día? Migrar servicios entre diferentes máquinas es una necesidad común, ¡y sería aún mejor si pudieras migrar automáticamente los servicios a un nuevo dispositivo en caso de que falle el servidor! ¿Cómo podemos lograr esto con ZimaBlade?

![](https://manage.icewhale.io/api/static/docs/1720063069079_copyImage.jpeg)

[ZimaBlade](https://shop.zimaspace.com/products/zimablade-single-board-server-for-cyber-native) es una computadora de servidor compacta pero potente. PVE (Proxmox Virtual Environment) es una solución de gestión de virtualización de servidores. Puedes usar ZimaBlade con PVE para gestionar máquinas virtuales, contenedores y clústeres altamente disponibles.

![](https://manage.icewhale.io/api/static/docs/1720063069927_copyImage.png)

  

Hoy configuraremos nuestro Clúster PVE usando 2 unidades ZimaBlade para lograr la migración de servicios.

  

Esto es lo que necesitas:

*   2 Kits ZimaBlade: [ZimaBlade Single Board Server](https://shop.zimaspace.com/products/zimablade-single-board-server-for-cyber-native)
    
*   2 Discos Duros (SATA)
    
*   Adicionalmente:
    
    *   1 Unidad USB para crear el medio de instalación de PVE
        
    *   1 Hub USB para conectar tanto el teclado como la unidad USB al ZimaBlade
        
    *   2 cables RJ45 con conexiones LAN para la red
        
    *   1 Teclado y Monitor para la configuración inicial
        

## Instalación del Sistema PVE

Estos son los pasos sencillos para instalar PVE en ZimaBlade:

  

Usando `Rufus`, escribe el archivo ISO de PVE en una unidad USB. Puede que necesites estos recursos:

Obtener Rufus: [Descargar Rufus](https://rufus.ie/)

Obtener ISO de PVE: [Descargar Proxmox](https://www.proxmox.com/en/downloads)

Escribe PVE en la unidad USB para crear el medio de instalación de PVE:

*   Inserta la unidad USB en un host Windows y lanza el programa Rufus en ese host.
    
*   En Rufus, bajo "Dispositivo", selecciona la unidad USB que acabas de insertar.
    
*   Bajo "Selección de arranque", haz clic en el botón SELECCIONAR para elegir el archivo ISO de PVE de tu disco.
    

![](https://manage.icewhale.io/api/static/docs/1720063070516_copyImage.png)

*   Haz clic en el botón INICIAR para escribir el archivo de instalación en tu unidad USB.
    

  

Instala la memoria, conecta el cable Ethernet y los cables de video al ZimaBlade. Para una guía detallada paso a paso sobre cómo instalar la memoria y otros componentes en ZimaBlade, consulta este tutorial completo: [Configura un NAS con ZimaBlade](https://www.zimaspace.com/docs/docs/How-to-set-up-a-NAS-with-ZimaBlade.html).

  

Ahora, vamos a instalar PVE:

*   Extrae de forma segura la unidad USB de la máquina Windows y conéctala, junto con el teclado, al Hub USB.
    
*   Conecta el Hub USB a ZimaBlade.
    
*   Enciende el monitor.
    
*   Conecta la fuente de alimentación a ZimaBlade y luego presiona rápidamente y repetidamente la tecla DEL en el teclado para entrar en el BIOS de ZimaBlade.
    

![](https://manage.icewhale.io/api/static/docs/1720063071163_copyImage.jpeg)

*   Usa las teclas de flecha en el teclado para navegar por el BIOS y encuentra el menú "Guardar y Salir".
    
*   Bajo "Anulación de arranque", localiza tu unidad USB y presiona Enter.
    
*   Ahora entrarás en la interfaz de instalación de PVE.
    

  

Al instalar PVE en las 2 unidades ZimaBlade, ten en cuenta estos puntos:

*   Instala PVE en almacenamiento externo (no en el eMMC interno).
    
*   Asegúrate de que tengan configuraciones de localización consistentes. Aquí tienes un ejemplo:

![](https://manage.icewhale.io/api/static/docs/1720063616916_image.png)

*   Usa nombres de host diferentes para cada ZimaBlade.
    
*   Asigna manualmente direcciones IP diferentes a cada ZimaBlade (dependiendo de tu configuración de LAN). Aquí tienes un ejemplo:

  ![](https://manage.icewhale.io/api/static/docs/1720063563445_image.png)

Sigue las indicaciones y espera a que se complete la instalación.

Crear un Clúster PVE
-------------

Elige cualquiera de tus unidades ZimaBlade y accede a la WebUI de PVE en `https://PVE1IP:8006`:

![](https://manage.icewhale.io/api/static/docs/1720063072977_copyImage.png)

  

Haz clic en "Clúster", luego en "Crear Clúster". Asigna un nombre a tu clúster y haz clic en "Crear":

![](https://manage.icewhale.io/api/static/docs/1720063073525_copyImage.png)![](https://manage.icewhale.io/api/static/docs/1720063074070_copyImage.png)

Una vez que veas "TAREA OK", cierra la ventana, haz clic en "Información de unión" y luego en "Copiar información":

![](https://manage.icewhale.io/api/static/docs/1720063074636_copyImage.png)

A continuación, accede a la WebUI de PVE en el segundo ZimaBlade en `https://PVE2IP:8006`:

![](https://manage.icewhale.io/api/static/docs/1720063075226_copyImage.png)

Haz clic en "Clúster", luego en "Unirse al Clúster", pega la información de unión que copiaste anteriormente, ingresa la contraseña de root del otro ZimaBlade y haz clic en "Unirse al **Clúster**":

![](https://manage.icewhale.io/api/static/docs/1720063075739_copyImage.png)

Ahora, esta máquina es parte del Clúster. Si tienes más máquinas, los pasos son los mismos. Una vez que varios nodos se unan al Clúster, al iniciar sesión en la WebUI de PVE en cualquier ZimaBlade, verás la presencia de otros nodos.

![](https://manage.icewhale.io/api/static/docs/1720063076277_copyImage.png)

¡Ahora puedes instalar máquinas virtuales y servicios en cualquier nodo!

Caso de uso del Clúster: Migración de servicios
-----------------------------------

Para migrar un servicio que se ejecuta en un nodo a otro nodo en el Clúster:

*   Elige un nodo para instalar el sistema. Aquí usaré Debian como ejemplo.
    
    *   Para un tutorial en video sobre cómo instalar un sistema en PVE, consulta nuestro video: [Cómo instalar un sistema en PVE](https://www.youtube.com/watch?v=K4pOkBwJMg8)
        
*   Una vez instalado, haz clic en el botón "Iniciar" a la derecha para arrancar la máquina virtual.
    
*   Desde otra máquina Windows en la misma LAN, haz ping a esta máquina virtual.
    

![](https://manage.icewhale.io/api/static/docs/1720063076945_copyImage.png)

*   Ahora, migraré la máquina virtual de PVE2 a PVE1. Sigue los pasos para completar la migración del servicio.
    

![](https://manage.icewhale.io/api/static/docs/1720063077580_copyImage.png)![](https://manage.icewhale.io/api/static/docs/1720063078124_copyImage.png)

*   Durante el proceso de migración, el servicio original continuará funcionando.
    

![](https://manage.icewhale.io/api/static/docs/1720063078794_copyImage.png)![](https://manage.icewhale.io/api/static/docs/1720063079381_copyImage.png)

*   Después de una breve interrupción, la migración del servicio se completa y el ping se reanudará.
    

![](https://manage.icewhale.io/api/static/docs/1720063080183_copyImage.png)

*   ¡Listo! Has migrado con éxito tu máquina virtual.
    

Otros Recursos
---------------

La migración de servicios es solo el comienzo. ¡Con Ceph, puedes migrar automáticamente servicios a otros nodos en el Clúster cuando un nodo falla! En futuros artículos, te mostraremos el proceso completo de configuración para ZimaBlade + Clúster + Ceph + HA.

  

Si encuentras algún problema durante el uso, no dudes en hacérnoslo saber en cualquier momento. También puedes unirte a nuestra [comunidad](https://icewhale.community/) y a nuestro [Discord](https://discord.gg/uuNfKzG5) para discutir más sobre PVE y ZimaBlade. ¡Esperamos tus comentarios!
