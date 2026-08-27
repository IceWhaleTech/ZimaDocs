---
title: Expansión de GPU  
description:  
type: "Docs"  
tip: La barra superior tiene un formato fijo, no debe eliminarse. La descripción es para el artículo, si no se llena, se tomará el primer párrafo del contenido.  
---  
# Introducción  
ZimaCube es un dispositivo de computación que puede satisfacer las necesidades de trabajo profesional. A través de su diseño modular, permite a los usuarios ampliar el hardware según los requisitos personales, incluida la instalación de una Unidad de Procesamiento Gráfico (GPU). Una GPU es crucial para los usuarios que necesitan manejar tareas extensas de procesamiento gráfico y computación en paralelo.  

# Guía de instalación y ejemplos de aplicaciones  
## 1. Pasos para la instalación de la GPU  
### Paso 1: Retirar la cubierta del puerto IO.  
  - Antes de instalar la GPU, retire la cubierta del puerto PCIe.  

| ![](https://manage.icewhale.io/api/static/docs/1728614816722_image.png)|![](https://manage.icewhale.io/api/static/docs/1728614828318_image.png)|
|:---:|:---:|  
### Paso 2: Instalar la GPU en la orientación correcta.  
  - Asegúrese de que la GPU esté alineada correctamente, coincidiendo los contactos dorados con el puerto PCIe.  
  - Inserte suavemente la GPU en el puerto hasta que esté completamente asegurada.  

| ![](https://manage.icewhale.io/api/static/docs/1728614909590_image.png)|![](https://manage.icewhale.io/api/static/docs/1728614920088_image.png)|
|:---:|:---:|  
#### Consejos:  
  - Al instalar o retirar la GPU, presione la pestaña del puerto PCIe. Esto asegura que la GPU quede bien fijada o liberada.  
![](https://manage.icewhale.io/api/static/docs/1728614946501_copyImage.png)  
## 2. Ejemplos de aplicaciones: Transcodificación con GPU y aplicaciones de IA  
### Transcodificación con hardware:  

Utilizar la GPU para transcodificación con hardware puede mejorar enormemente el rendimiento en el procesamiento de medios. Por ejemplo, Plex Media Server puede usar la GPU en ZimaOS para habilitar la transcodificación eficiente con hardware (nota: descargue la versión profesional de GPU de Plex).  
![](https://manage.icewhale.io/api/static/docs/1728615170049_image.png)  
- Seleccionar dispositivo de transcodificación con hardware: Desconocido (NVIDIA)  
- Haga clic en Guardar para comenzar la transcodificación  

| ![](https://manage.icewhale.io/api/static/docs/1728615235531_image.png)|![](https://manage.icewhale.io/api/static/docs/1728615252888_image.png)|
|:---:|:---:|  

| Antes: |      Después: |  
| - | - |  
| ![](https://manage.icewhale.io/api/static/docs/1728615297358_image.png)|![](https://manage.icewhale.io/api/static/docs/1728615306943_image.png)|  

Para una lista de las GPUs de Nvidia actualmente soportadas por ZimaOS, consulte la sección de GPUs NVIDIA actuales: https://us.download.nvidia.com/XFree86/Linux-x86_64/555.58.02/README/supportedchips.html  
### Ejemplos de aplicaciones de IA:  
En ZimaOS, puede utilizar Open WebUI para experimentar con avanzados clientes de conversación de IA.  
Es compatible con los modelos de lenguaje más recientes, incluidos, entre otros, Llama3 y Gemma, y es compatible con la API de OpenAI. Además, Open WebUI utilizará la GPU NVIDIA 2000 Ada incorporada en el ZimaCube Pro Creator para reducir la latencia de procesamiento.  
Lo más importante es que todos sus datos (incluidos los detalles de inicio de sesión) se almacenan localmente en su dispositivo. Open WebUI garantiza estricta confidencialidad bajo su autorización, sin solicitudes externas, protegiendo su privacidad y mejorando su seguridad.  

![](https://manage.icewhale.io/api/static/docs/1728615600750_094e8811-903b-4bb0-8053-548119f56272.gif)  
- La versión ha integrado Stable Diffusion.  

![](https://manage.icewhale.io/api/static/docs/1728615658463_2.gif)  

- Hay otras aplicaciones de IA en nuestra AppStore, como Tasking AI y Anything AI.  

![](https://manage.icewhale.io/api/static/docs/1728615689023_image.png)  
Tasking AI es una herramienta de gestión de tareas inteligente que utiliza la tecnología de IA para ayudar a los usuarios a organizar y gestionar más eficientemente las tareas diarias. Puede priorizar, recordar y automatizar tareas de manera inteligente, mejorando la eficiencia en el trabajo y la vida.  

Anything AI es una aplicación multifuncional de IA que proporciona una variedad de herramientas y servicios prácticos de IA, como generación de texto, traducción de idiomas y reconocimiento de voz. Su objetivo es simplificar el trabajo y la vida diaria de los usuarios mediante poderosa tecnología de IA.  

Con estas aplicaciones de IA, ¡puede aprovechar al máximo las ventajas de la inteligencia artificial para mejorar su eficiencia laboral y calidad de vida!  
## 3. Precauciones  
  - Apagar: Asegúrese de que ZimaCube esté completamente apagado antes de realizar cualquier operación y póngase a tierra para evitar daños por electricidad estática en el dispositivo.  
  - Manejo suave: Evite el uso de fuerza excesiva al instalar o retirar la GPU para evitar daños.  
  - Limpieza: Asegúrese de que el puerto y el dispositivo estén libres de polvo u objetos extraños durante la instalación o retirada para evitar contactos deficientes.  
  - Instalación de controladores: Instale los controladores correctos para lograr un rendimiento y estabilidad óptimos.  

## 4. Conclusión  
  Esta guía debería ayudarlo a instalar con éxito una GPU en ZimaCube y comprender su importancia en diversas aplicaciones. Lo invitamos a probar la instalación y explorar más funciones de la GPU para mejorar su eficiencia laboral y calidad de vida.  

  ¡Esperamos saber más sobre sus experiencias!  

# Lista de compatibilidad  
El ZimaCube es compatible con tarjetas gráficas **de bajo perfil**, típicamente alrededor de 64.41 mm (2.536 pulgadas) de altura. El puerto PCIe proporciona hasta **75W** de potencia, por lo que se recomienda seleccionar tarjetas gráficas dentro de este tamaño y rango de potencia para garantizar la compatibilidad con el diseño compacto y las limitaciones de energía de ZimaCube.  
**Tenga en cuenta que otras tarjetas gráficas pueden requerir energía externa para un funcionamiento adecuado.**  

{% note warn Nota: %}  
Hemos compilado esta lista en base a los controladores compatibles con ZimaOS, con los modelos "verificados" marcados en consecuencia. Si ha ejecutado **Assist** con otro modelo de tarjeta gráfica, por favor ayúdenos a actualizar esta lista utilizando la función 'Mejorar' en la esquina superior derecha. ¡Gracias por su contribución!  
{% endnote %}  

| **Categoría**                          | **Modelos**                                                       |  
| :-------------------------------- | ------------------------------------------------------------ |  
| GeForce RTX 40 Series (Portátiles) | GeForce RTX 4090 Laptop GPU, GeForce RTX 4080 Laptop GPU, GeForce RTX 4070 Laptop GPU, GeForce RTX 4060 Laptop GPU, GeForce RTX 4050 Laptop GPU |  
| GeForce RTX 40 Series             | NVIDIA GeForce RTX 4090 D, NVIDIA GeForce RTX 4090, NVIDIA GeForce RTX 4080, NVIDIA GeForce RTX 4070 Ti, NVIDIA GeForce RTX 4070, NVIDIA GeForce RTX 4060 Ti(verificado), NVIDIA GeForce RTX 4060 |  
| GeForce RTX 30 Series (Portátiles) | GeForce RTX 3080 Ti Laptop GPU, GeForce RTX 3080 Laptop GPU, GeForce RTX 3070 Ti Laptop GPU, GeForce RTX 3070 Laptop GPU, GeForce RTX 3060 Laptop GPU, GeForce RTX 3050 Ti Laptop GPU, GeForce RTX 3050 Laptop GPU |  
| GeForce RTX 30 Series             | GeForce RTX 3090 Ti, GeForce RTX 3090, GeForce RTX 3080 Ti, GeForce RTX 3080, GeForce RTX 3070 Ti, GeForce RTX 3070, GeForce RTX 3060 Ti(verificado), GeForce RTX 3060, GeForce RTX 3050 |  
| GeForce RTX 20 Series (Portátiles) | GeForce RTX 2080 SUPER, GeForce RTX 2080, GeForce RTX 2070 SUPER, GeForce RTX 2070, GeForce RTX 2060, GeForce RTX 2050 |  
| GeForce RTX 20 Series             | GeForce RTX 2080 Ti, GeForce RTX 2080 SUPER, GeForce RTX 2080, GeForce RTX 2070 SUPER, GeForce RTX 2070, GeForce RTX 2060 SUPER, GeForce RTX 2060 |  
| GeForce MX500 Series (Portátiles)  | GeForce MX570, GeForce MX550                                 |  
| GeForce MX400 Series (Portátiles)  | GeForce MX450                                                |  
| GeForce MX300 Series (Portátiles