Aquí tienes la traducción al español manteniendo el formato original:

---

title: Implementación de Frigate+Olama con Descripción AI en Pantalla utilizando ZimaOS  
description:  
type: Docs  
author: admin  
tip: No eliminar el formato fijo de la barra superior, la descripción es para la descripción del artículo, si no se llena, se tomará el primer párrafo del contenido.  
---  

## Background  
En la vida diaria, las cámaras de vigilancia se han convertido en herramientas importantes tanto para los hogares como para los negocios. Sin embargo, los sistemas de monitoreo tradicionales generalmente solo graban imágenes o simplemente detectan movimiento, y no pueden proporcionar explicaciones detalladas del contenido de las imágenes. Esto a menudo requiere que los usuarios juzguen por sí mismos lo que ocurrió al ver videos o recibir notificaciones.  
Frigate es una herramienta de análisis de video eficiente y de código abierto que puede identificar objetivos como personas, autos y animales en las imágenes y activar eventos relacionados. Pero su función se limita principalmente al nivel de "ver" y no puede decirte directamente "qué ocurrió".  
Para compensar esta deficiencia, introdujimos Ollama, una herramienta que puede generar descripciones en lenguaje natural. A través de ella, podemos convertir el contenido visual detectado por Frigate en explicaciones claras en texto, como 'alguien entró al jardín' o 'un auto estacionado en la puerta'.  
Este tutorial te guiará sobre cómo usar ZimaOS para combinar Frigate y Ollama para crear un sistema práctico de descripción visual. Ya sea que desees mejorar la conveniencia de la seguridad en el hogar o agregar características inteligentes a proyectos pequeños, esta solución puede satisfacer tus necesidades.  

## Preparación del hardware  
1. **Cámaras que soporten el protocolo RTSP**  
Utilizadas para proporcionar entrada de transmisión de video en tiempo real a Frigate.  
2. **Tarjeta gráfica compatible con ZimaBoard2**  
Utilizada para acelerar localmente la inferencia de modelos de IA (como las tarjetas gráficas de la serie NVIDIA). Tarjeta gráfica de referencia [https://www.zimaspace.com/docs/zh/zimacube/GPU-Expansion](https://www.zimaspace.com/docs/zh/zimacube/GPU-Expansion)  
3. **Un disco duro con capacidad de 6GB o más**  
Utilizado para almacenar archivos de modelos de IA, instantáneas de video y datos del sistema.  

## Instalación del software  
La instalación del software de este sistema se puede dividir en los siguientes tres pasos:  
1. Migración de datos  
2. Instalar Ollama y configurar el modelo LLaVA  
3. Instalar y configurar Frigate  

### Paso 1: Migración de Datos  
Debido al gran tamaño de los modelos de IA, se recomienda instalar un disco duro independiente de antemano y migrar los directorios de datos de Docker y los datos personales al disco duro para evitar problemas como fallos o falta de espacio de almacenamiento durante el proceso de descarga, con el fin de garantizar el funcionamiento estable del sistema y espacio de almacenamiento suficiente.  
> ¡Por favor, haz una copia de seguridad de los archivos importantes para prevenir la pérdida de datos! ¡Puede haber riesgos al migrar datos!  

#### Conectar la tarjeta gráfica al disco duro, iniciar el dispositivo y entrar al sistema operativo.  
![](https://manage.icewhale.io/api/static/docs/1745202079506_image.png)  

#### Migración de datos  
1. Haz clic en el ícono de **"Configuración"** en el menú superior izquierdo  
2. Haz clic en **"Aplicaciones"**  
3. Busca la aplicación o elemento de gestión de datos relevante, haz clic en el botón **"Migrar"** y espera a que la migración se complete.  
![](https://manage.icewhale.io/api/static/docs/1745202168758_image.png)  

### Paso 1: Instalar Ollama y configurar el modelo LLaVA  
Para más detalles sobre los modelos soportados, por favor visita [la documentación oficial de Frigate](https://docs.frigate.video/configuration/genai/) y [la página oficial de Ollama](https://ollama.com/).  

#### Instalar Ollama  
1. Abre la **Tienda de Aplicaciones** e ingresa **"Ollama"** en la barra de búsqueda  
2. Elige la versión adecuada para la instalación según tu tipo de tarjeta gráfica (como una versión que soporte NVIDIA)  
![](https://manage.icewhale.io/api/static/docs/1745202389678_image.png)  

#### Configurar el modelo LLaVA  
1. Abre la **terminal de Olama** y haz clic en el ícono de menú en la esquina superior derecha  
2. Selecciona **"Configuraciones"** para entrar a la interfaz de configuración  
![](https://manage.icewhale.io/api/static/docs/1745203245150_image.png)  
3. Haz clic en el ícono de **"Terminal"** para ingresar a la interfaz de control de la línea de comandos  
![](https://manage.icewhale.io/api/static/docs/1745203281707_image.png)  
4. Ingresa el siguiente comando en la línea de comandos para descargar el modelo e instalar llava-llama3  
```language  
ollama pull llava-llama3  
```  
![](https://manage.icewhale.io/api/static/docs/1745203346880_image.png)  
5. La aparición de la palabra **"Éxito"** indica que la descarga del modelo ha finalizado y Ollama está listo  
![](https://manage.icewhale.io/api/static/docs/1745203380348_image.png)  
6. Después de iniciar Olama, **registra la dirección IP y el número de puerto de la IP en ejecución** (como `http://10.0.1.3:11434` ) Será utilizado más adelante al configurar Frigate.  
![](https://manage.icewhale.io/api/static/docs/1745203428242_image.png)  

### Paso 3: Instalar y configurar Frigate  
#### Instalar Frigate  
1. Haz clic en el botón **"más"** en la esquina superior derecha de la interfaz principal.  
2. Selecciona 'Instalar una aplicación personalizada'.  
![](https://manage.icewhale.io/api/static/docs/1745203508399_image.png)  
3. Haz clic en el botón 'Importar'.  
4. Importa el archivo de configuración frigate.yaml de abajo.  
> name: pure_grace  
services:  
  frigate:  
    cpu_shares: 90  
    command: []  
    container_name: frigate  
    deploy:  
      resources:  
        limits:  
          memory: 7766M  
    devices:  
      - /dev/bus/usb:/dev/bus/usb  
      - /dev/apex_0:/dev/apex_0  
      - /dev/video11:/dev/video11  
      - /dev/dri/renderD128:/dev/dri/renderD128  
    image: ghcr.io/blakeblackshear/frigate:0.15.0  
    labels:  
      icon: https://icon.casaos.io/main/all/frigate.png  
    ports:  
      - target: 8971  
        published: "8971"  
        protocol: tcp  
      - target: 8554  
        published: "8554"  
        protocol: tcp  
      - target: 8555  
        published: "8555"  
        protocol: tcp  
      - target: 8555  
        published: "8555"  
        protocol: udp  
    privileged: true  
    restart: unless-stopped  
    shm_size: "67108864"  
    volumes:  
      - type: bind  
        source: /etc/localtime  
        target: /etc/localtime  
      - type: bind  
        source: /DATA/AppData/frigate/config  
        target: /config  
      - type: bind  
        source: /DATA/Media  
        target: /media/frigate  
    cap_add: []  
    environment: []  
    network_mode: bridge  
x-casaos:  
  author: self  
  category: self  
  hostname: ""  
  icon: https://icon.casaos.io/main/all/frigate.png  
  index: /  
  is_uncontrolled: false  
  port_map: "8971"  
  scheme: https  
  store_app_id: pure_grace  
  tips: null  
  title:  
    custom: ""  
    en_us: frigate  

5. Haz clic en "Enviar".  
![](https://manage.icewhale.io/api/static/docs/1745203744283_image.png)  
6. Haz clic en "Instalar" y espera a que la instalación termine.  
![](https://manage.icewhale.io/api/static/docs/1745203764783_image.png)  

#### Obtener cuenta y contraseña de Frigate  
Después de iniciar Frigate, por favor revisa y registra la cuenta y contraseña predeterminadas en el log.  
![](https://manage.icewhale.io/api/static/docs/1745203839741_image.png)  
1. Abre la **terminal de Frigate** y haz clic en el ícono de **menú** en la esquina superior derecha.  
2. Selecciona **"Configuración"** para acceder a la interfaz de configuración.  
![](https://manage.icewhale.io/api/static/docs/1745203882560_image.png)  
3. Haz clic en el ícono de **"Terminal"** dentro de la aplicación.  
4. Cambia a la pestaña de **"Logs"** para ver los logs de inicio.  
5. Haz clic en el botón de **"Pantalla Completa"** en la esquina superior derecha para encontrar fácilmente el nombre de usuario y la contraseña predeterminados.  
![](https://manage.icewhale.io/api/static/docs/1745203925603_image.png)  
6. La cuenta y la contraseña se mostrarán aquí, por favor regístralas.  
![](https://manage.icewhale.io/api/static/docs/1745203946052_image.png)  

#### Configurar firmate  
1. Ingresa la cuenta y contraseña obtenidas previamente y accede al sistema.  
![](https://manage.icewhale.io/api/static/docs/1745203986368_image.png)  
2. Haz clic en el botón de **"Configuración"** en el menú izquierdo.  
3. Selecciona **"Editor de Configuración"** para acceder a la interfaz de edición del archivo de configuración.  
![](https://manage.icewhale.io/api/static/docs/1745204019481_image.png)  
4. En el editor de configuración, agrega o modifica las configuraciones relacionadas con las cámaras. Puedes consultar el siguiente ejemplo para configurarlas:  

```language  
mqtt:  
  enabled: false  

cameras:  
  abc: # Nombre de la cámara, personalizable  
    genai:  
      enabled: true  
      use_snapshot: True  
      objects:  
        - person  

    ffmpeg:  
      inputs:  
        - path: rtsp://admin:HTC123456@10.0.171.52/stream1  # Dirección RTSP de la cámara, reemplázala con la URL de tu dispositivo  
          roles:  
            - detect  
    detect:  
      enabled: true  
      width: 1280  
      height: 720  
      fps: 10  
      max_disappeared: 10  

    motion:  
      enabled: true  
      mask: []  
      threshold: 25  

    snapshots:  
```  
```language  
      enabled: true  
      timestamp: true  
      bounding_box: true  
      retain:  
        default: 3  

semantic_search:  
  enabled: true  
  reindex: False  

genai:  
  enabled: true  
  provider: ollama  
  base_url: http://10.0.1.12:11434   # Dirección del host y puerto donde se ejecuta el servicio Ollama  
  model: llava-llama3 # Modelo multimodal utilizado para análisis de imágenes + texto  
  prompt: "Describe lo que está haciendo {label} en estas imágenes de la cámara {camera}. Enfócate en las acciones e intenciones posibles."  
  object_prompts:  
    person: "¿Qué está haciendo esta persona?" # Prompt específico para analizar "persona"  
    car: "¿Qué está haciendo este auto? ¿Está estacionado, dando vueltas, o haciendo algo inusual?"  

version: 0.15-1  
```  

**Por favor, asegúrate de reemplazar el enlace `rtsp` con la dirección de tu propia cámara y configura la IP y el puerto de Ollama con la dirección de ejecución real (por ejemplo `http://10.0.1.3:11434` ). De lo contrario, Frigate no podrá acceder a las transmisiones de video ni conectar los modelos de IA para el análisis.**  
![](https://manage.icewhale.io/api/static/docs/1745204529636_image.png)  

5. Después de completar la configuración, haz clic en "Guardar" y Frigate aplicará automáticamente la nueva configuración y comenzará a ejecutarse.  
Cuando Frigate detecte un objeto de persona en la pantalla de monitoreo, capturará automáticamente una instantánea y llamará al modelo de IA para generar la descripción correspondiente de la imagen. También puedes ajustar libremente los objetos de detección, el modelo utilizado y el contenido del prompt según el escenario de aplicación real, creando así una experiencia de monitoreo más inteligente y personalizada.  

## Construcción completada  
![](https://manage.icewhale.io/api/static/docs/1745204647915_image.png)  

En este punto, el sistema de monitoreo inteligente de Frigate y Ollama ha sido exitosamente construido. Puedes verificar el efecto de detección a través de la pantalla en tiempo real, o ingresar a la página de logs e instantáneas para verificar si el análisis de IA está funcionando normalmente.  
Para optimizar aún más la experiencia, puedes intentar acceder a los servicios de notificación, ajustar los parámetros del modelo o agregar más cámaras.  