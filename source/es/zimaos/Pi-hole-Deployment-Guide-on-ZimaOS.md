Aquí tienes la traducción al español del contenido solicitado:

---

---
title: Guía de despliegue de Pi-hole en ZimaOS
description: 
type: Docs
author: icewhale123456
tip: La barra superior tiene un formato fijo, no la elimines. description es la descripción del artículo. Si no se llena, se tomará el primer párrafo del contenido.
---
### Introducción
Pi-hole es una poderosa herramienta de bloqueo de anuncios a nivel de red que te ayuda a bloquear anuncios y proteger tu privacidad. En este tutorial, te mostraremos cómo instalar y configurar Pi-hole en ZimaOS para hacer tu red doméstica más limpia y eficiente.

---
### Requisitos previos
- Un dispositivo con ZimaOS instalado.
- La capacidad de acceder a la interfaz web de ZimaOS o a SSH.
- Privilegios de red y administrador configurados.

---
### Paso 1: Instalar Docker Pi-hole
1. Ingresa a la interfaz web de ZimaOS.
2. Accede a la **App Store** y busca Pi-hole para instalarlo.
![](https://manage.icewhale.io/api/static/docs/1734678654109_image.png)

3. Haz clic en Instalar.
4. Antes de iniciar sesión en Pi-hole, haz clic en la interfaz de configuración de la aplicación y encuentra la contraseña (la contraseña de muestra es your_password).

| ![](https://manage.icewhale.io/api/static/docs/1734678694677_image.png) | ![](https://manage.icewhale.io/api/static/docs/1734678703824_image.png) |
| - | - |

5. Haz clic en la aplicación e ingresa la contraseña para acceder a la interfaz.
![](https://manage.icewhale.io/api/static/docs/1734678749177_image.png)

![](https://manage.icewhale.io/api/static/docs/1734678754268_image.png)

---
### Paso 2: Configurar la red
**2.1 Cambiar la configuración de DNS del router**
Beneficio: Cambiar la configuración de DNS del router permitirá que toda la red de dispositivos use automáticamente Pi-hole para bloquear anuncios, sin necesidad de configurarlo manualmente en cada uno.
1. Inicia sesión en la interfaz de administración del router.
2. Configura la dirección del servidor DNS del router con la IP local del dispositivo ZimaOS donde está corriendo Pi-hole.
- Ejemplo: Si la IP local de ZimaOS es `10.0.201.187`, configura la dirección del servidor DNS en `10.0.201.187`.
**2.2 Configurar DNS manualmente en los dispositivos cliente**
- Si no deseas modificar la configuración de toda la red, puedes configurar una dirección DNS personalizada en un solo dispositivo con la IP de ZimaOS.
**Configurar DNS en un dispositivo Windows**
1. En la ventana de configuración, encuentra "Más opciones de adaptador" y haz clic en Editar.
![](https://manage.icewhale.io/api/static/docs/1734679538566_image.png)

2. Encuentra y haz doble clic en "Protocolo de Internet Versión 4 (TCP/IPv4)".
3. Completa lo siguiente:
- Servidor DNS preferido: 10.0.201.187 (IP de tu servidor Pi-hole).
- Servidor DNS alternativo: 1.1.1.1 (DNS de Cloudflare) o 8.8.8.8 (DNS de Google, como respaldo).
![](https://manage.icewhale.io/api/static/docs/1734679557759_image.png)

4. Haz clic en "OK" para guardar la configuración.
Consejos: Si el bloqueo de anuncios no funciona, prueba a limpiar la caché DNS:
En el símbolo del sistema, ejecuta:
```
ipconfig /flushdns
```

Esto forzará al dispositivo a usar la nueva configuración de DNS.

---
### Paso 3: Optimizar la configuración (opcional)
**3.1 Habilitar más listas de filtrado de anuncios**
1. En el panel de control de Pi-hole, navega hasta Adlists.
![](https://manage.icewhale.io/api/static/docs/1734679945680_image.png)

2. Agrega más listas de bloqueo de anuncios, por ejemplo:
- [StevenBlack/hosts](https://github.com/StevenBlack/hosts)
- [oisd.nl](https://oisd.nl/)
Pega la URL copiada en Dirección, completa el comentario y haz clic en añadir para agregarla.
![](https://manage.icewhale.io/api/static/docs/1734680053090_image.png)

**3.2 Configurar el caché de DNS y mejorar la privacidad**
1. En Configuración > DNS, selecciona un servidor DNS ascendente confiable (como Cloudflare o Google).
![](https://manage.icewhale.io/api/static/docs/1734680136362_image.png)

2. Activa DNSSEC para mayor seguridad.
![](https://manage.icewhale.io/api/static/docs/1734680141523_image.png)

---
Paso 4: Probar el bloqueo de anuncios
1. Visita un sitio web con muchos anuncios (por ejemplo, un portal de noticias).
2. Verifica si los anuncios han sido bloqueados con éxito.
3. Verifica el número de solicitudes bloqueadas en el panel de Pi-hole.
![](https://manage.icewhale.io/api/static/docs/1734680159332_image.png)

---
### Conclusión
¡Ahora que has desplegado con éxito Pi-hole en ZimaOS, disfruta de una experiencia en línea sin anuncios! Pi-hole no solo mejora la velocidad de tu red, sino que también protege tu privacidad. Siéntete libre de ajustar la configuración o agregar más características según tus necesidades. Si tienes alguna pregunta, ¡discutámoslo en nuestra comunidad!
### Preguntas frecuentes
1. Haz clic en Instalar para evitar la ocupación de puertos. Simplemente cambia el puerto.
![](https://manage.icewhale.io/api/static/docs/1734680182479_image.png)

El puerto 10443 generalmente se usa para la interfaz de gestión HTTPS de Pi-hole. Cambiar el puerto no afectará la función principal de DNS de Pi-hole.
No se recomienda cambiar el puerto 67, ya que afectará el funcionamiento normal del servicio DHCP y causará que el cliente no pueda obtener automáticamente una dirección IP. Si hay un conflicto de puertos, la mejor solución es deshabilitar el servicio conflictivo.
- Primero, encuentra el proceso que ocupa el puerto 67 en la interfaz de línea de comandos y usa el comando
```
sudo ss -ulnp | grep :67
```

![](https://manage.icewhale.io/api/static/docs/1734680210741_image.png)

- Usa el siguiente comando para finalizar el proceso en conflicto y la instalación será exitosa
```
sudo kill -9 <PID>
```

---

Espero que te sea útil. Si necesitas algún ajuste adicional, ¡avísame!