---
title: Acceso remoto
seo_title: "Acceso remoto de ZimaOS: conéctate a tu servidor doméstico desde cualquier lugar"
description: "Accede a tus datos de ZimaOS desde cualquier lugar. Configura el acceso remoto mediante un túnel de Cloudflare y ZimaClient para gestionar archivos de forma segura mientras te desplazas."
type: Docs
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---
## Datos disponibles mientras viajas
¿Alguna vez has querido consultar las cámaras de seguridad o acceder a los archivos del servidor doméstico durante un viaje, pero los datos no estaban disponibles? El miembro de la comunidad Grandil accedió correctamente a ZimaOS desde Noruega, conectándose a servidores de Irlanda, y disfrutó de una conexión fluida incluso mediante itinerancia móvil. Puedes ver su reseña [aquí](https://www.youtube.com/watch?v=ZDmO2h0tE0c).

En una vida cada vez más acelerada, acceder a los datos de forma eficiente es esencial tanto para el uso personal como para el profesional. El acceso remoto aumenta la productividad, mantiene la seguridad y elimina las barreras geográficas.

### Descargar ZimaClient
Si todavía no has conectado ZimaCube mediante ZimaClient, visita https://www.zimaspace.com/zimaos/download desde el dispositivo principal para descargar el cliente.
![](https://manage.icewhale.io/api/static/docs/1728381740811_image.png)
### Conectarse correctamente al dispositivo
1. Comprueba que ZimaCube esté encendido y conectado a la red.
2. Abre ZimaClient y selecciona Scan and Connect Zima.
<div style="display: flex; justify-content: space-between;">
  <img src="https://manage.icewhale.io/api/static/docs/1728439070524_image.png" alt="Imagen 1" style="height: 200px; object-fit: cover; margin-right: 10px;" />
  <img src="https://manage.icewhale.io/api/static/docs/1728439097159_image.png" alt="Imagen 2" style="height: 200px; object-fit: cover;" />
</div>

3. Selecciona en la lista la dirección IP de ZimaCube y haz clic en Connect. Sigue las indicaciones para crear un nombre de usuario y una contraseña.
<div style="display: flex; justify-content: space-between;">
  <img src="https://manage.icewhale.io/api/static/docs/1728381985338_image.png" alt="Imagen 1" style="height: 200px; object-fit: cover; margin-right: 10px;" />
  <img src="https://manage.icewhale.io/api/static/docs/1728381994632_image.png" alt="Imagen 2" style="height: 200px; object-fit: cover;" />
</div>

Cuando **te hayas conectado correctamente al dispositivo**, ZimaCube aparecerá aquí con una opción como Connect via..., lo que indica que el acceso remoto ya está configurado.
![](https://manage.icewhale.io/api/static/docs/1728459310497_image.png)

*Si desactivas el acceso remoto en los ajustes de ZimaOS, no podrás conectarte.*
![](https://manage.icewhale.io/api/static/docs/1728459277560_image.png)

### Disfrutar del acceso remoto
Después de la primera conexión correcta, el dispositivo guardará automáticamente la información de conexión. Estés donde estés, solo tienes que abrir ZimaClient para establecer rápidamente una conexión remota.
Cuando salgas de la red LAN doméstica, el estado del acceso remoto de ZimaCube aparecerá así:
![](https://manage.icewhale.io/api/static/docs/1728382289343_image.png)

### Acceso desde un segundo dispositivo principal
Si tienes un **segundo** ordenador en la oficina y ZimaCube no está contigo, puedes utilizar Connect ID. Obtén más información [aquí](./features#Second-host-device-access).


### Información de referencia
La conexión entre el portátil y ZimaCube se establece automáticamente mediante ZimaClient y ZimaOS, utilizando comunicación P2P. La transferencia de datos entre ambos está cifrada y se realiza directamente entre los dos dispositivos.

Además, cuando te conectas correctamente a ZimaOS por primera vez mediante ZimaClient, el canal de acceso remoto queda configurado. A partir de ese momento, puedes utilizar el dispositivo para acceder a ZimaOS desde cualquier lugar y en cualquier momento.
