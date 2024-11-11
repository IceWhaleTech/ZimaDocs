---
title: Construir Aplicaciones
description:
type: "Docs"
tip: No elimine el formato fijo de la barra superior, la descripción es el resumen del artículo, si no se llena, se tomará el primer párrafo del contenido.
---
# Manual de Adaptación de Aplicaciones Docker para ZimaOS
Cómo publicar aplicaciones en ZimaOS
1. Tutorial de publicación y adaptación de aplicaciones Docker
2. Tutorial de compilación de aplicaciones para PC y en línea
3. Tutorial de migración de aplicaciones a la nube

Lista de verificación de aplicaciones Docker para ZimaOS y configuración recomendada

Hito modular: Priorizar las actualizaciones de aplicaciones sin reiniciar
## Juicio sobre la tendencia de la aplicación
> Predecir preliminarmente la carga de trabajo de adaptación de la aplicación, si puede adaptarse directamente, si es necesario construir la imagen uno mismo, etc.

En términos generales, el sitio web oficial de la aplicación se puede dividir en las siguientes tres tendencias:
### Despliegue autónomo en Docker
- Dificultad: 🌟
- Características: El sitio web oficial o GitHub prioriza ofrecer opciones de despliegue autónomo.
- Ejemplos: LocalAI, OpenWebUI y Nextcloud, etc.
- Esto significa que el desarrollador de esta aplicación probablemente desarrolló y probó en un entorno de despliegue autónomo. También significa que esta aplicación tiene experiencia de despliegue autónomo por parte del desarrollador original y la comunidad, y generalmente es más fácil de adaptar.
- Es muy probable que se proporcione una imagen AIO con una configuración mínima, y luego podemos configurarla directamente.

### Despliegue autónomo en PC
- Dificultad: 🌟🌟🌟
- Características: El sitio web oficial o GitHub prioriza ofrecer descargas para Win/Mac/Linux, pero la interfaz principal se proporciona a través de WebUI.
- Ejemplo: AUTOMATIC1111/stable-diffusion-webui
- Representa el proceso de instalación de esta aplicación, que será verificado por los desarrolladores y la comunidad. Sin embargo, puede que no haya una imagen Docker adecuada, ya que esto no es una prioridad cuando se inicia el proyecto.
- Si no hay una imagen Docker lista, será relativamente fácil empaquetarla como una imagen Docker por nuestra cuenta, ya que casi no hay que preocuparse por errores en el proceso de instalación. Solo hay que configurar el entorno requerido e instalar las dependencias previas.

### Servicio en la Nube
- Dificultad: 🌟🌟🌟🌟🌟
- Características: El sitio web oficial o GitHub recomienda utilizar los servicios en la nube que proporcionan, y también ofrecen una forma de autodespliegue. Usualmente, la aplicación también se describe como una plataforma XX todo-en-uno que puede resolver diversas necesidades.
- Ejemplo: Dify, TaskingAI, etc.
- Los desarrolladores de esta aplicación generalmente dan prioridad al entorno de despliegue en clústeres en la nube, y probablemente prioricen el desarrollo basado en entornos de orquestación de contenedores como K8s. Las opciones de autodespliegue generalmente se construyen a través de Docker Compose o K8s. El inicio de una aplicación completa involucra múltiples servicios de contenedores y múltiples imágenes. Al mismo tiempo, se requieren una gran cantidad de variables de entorno e incluso archivos externos para permitir que la aplicación se inicie correctamente.
- Este tipo de aplicación requiere mucho esfuerzo para aprender las relaciones de los servicios necesarios para el proceso de inicio de la aplicación, así como el significado y los métodos de configuración de una gran cantidad de variables de entorno. Al mismo tiempo, si excede las capacidades de la aplicación de ZimaOS, será relativamente difícil construir una imagen por uno mismo, ya que se necesita comprender los métodos de configuración específicos de las diferentes pilas tecnológicas que utiliza este programa.

## Entender los componentes de la aplicación
> Analizar qué servicios duplicados depende la aplicación, el impacto de las diferentes configuraciones y qué necesitan cuidar los usuarios.

### Analizar los requisitos del servicio
Normalmente, cada aplicación tiene su propio front-end y back-end independiente, y puede depender de algunos servicios comunes como:
- Bases de datos varias: mysql, redis, pg, etc.
- APIs compartidas varias:
  - LLMs: Ollama, LocalAI, LM Studio
  - ……

> Dado que los servicios compartidos y las dependencias preinstaladas/recomendadas no son compatibles en esta etapa,
Para el desarrollador/adaptador de la aplicación:
Considerar dar prioridad a las imágenes AIO listas para usar cuando se adapten o considerar empaquetar los servicios necesarios en una imagen o compose.
Para el desarrollador de ZimaOS:
Considerar apoyar dependencias preinstaladas y recomendadas.

### Analizar los requisitos de almacenamiento de datos
- Directorios de archivos temporales generados cuando la aplicación está en ejecución
- Directorios de archivos persistentes requeridos cuando la aplicación se restaura/migra
- Directorios de archivos que los usuarios necesitan gestionar/utilizar

Una vez comprendido claramente, realizar el mapeo de inicialización correspondiente según la estructura de directorios de datos definida por ZimaOS e informar a los usuarios sobre los directorios que deben cuidar a través de las sugerencias adecuadas.

### Analizar los requisitos de puertos
- ¿Cuáles son los puertos de servicio WebUI, HTTP/HTTPS?
  - Normalmente pueden ser asignados libremente por el sistema, y los cambios no afectarán el uso normal.
  - Algunas aplicaciones pueden tener requisitos específicos para dichos puertos, los cuales deben ser identificados.
- Puertos de API
  - Muchos puertos de aplicación que exponen APIs son convencionales, primero deben usarse los puertos originales y luego considerar la asignación automática.
  - Cuando sea necesario, se debe informar a los usuarios a través de sugerencias.
  - Por ejemplo, 113114 de Ollama
- ¿Cuáles son los puertos con propósitos especiales y que deben existir, como DNS?
  - Algunos puertos tienen propósitos específicos y deben ser asignados, de lo contrario, las funciones principales fallarán.
  - Por ejemplo, el puerto DNS usado por adguard, etc.
- Puertos auxiliares específicos de la aplicación
  - Algunos puertos que deben tener su propio propósito especial, usados para descubrimiento de red interna, etc.
  - Estos puertos deben usar los puertos originales, de lo contrario, las funciones auxiliares fallarán.

> Dado que ZimaOS no soporta asignación flexible de puertos en esta etapa,
Para el desarrollador/adaptador de la aplicación:
Considerar configurar puertos y sugerencias de acuerdo con las características de la aplicación durante la adaptación.
Para el desarrollador de ZimaOS:
Considerar soportar un mecanismo definido para la asignación de puertos.

### Analizar los requisitos de dispositivos
- Requisitos de GPU
- Requisitos de CPU
- Requisitos de dispositivos USB
- …

Considerar configurar los dispositivos requeridos durante la adaptación y considerar si se puede recurrir a la CPU cuando la GPU no esté disponible.

> Dado que ZimaOS no soporta asignación flexible de dispositivos en esta etapa,
Para el desarrollador/adaptador de la aplicación:
Considerar configurar dispositivos y sugerencias de acuerdo con las características de la aplicación durante la adaptación.
Para el desarrollador de ZimaOS:
Considerar soportar un mecanismo definido para la asignación de dispositivos, así como un mecanismo de detección y retroalimentación para los requisitos de dispositivos.

### Analizar los requisitos de tiempo de ejecución
- nvidia
- …

Este tipo es raro, pero se recomienda entender los requisitos de tiempo de ejecución correspondientes cuando se adapten, configurarlos y escribirlos en las sugerencias de forma adecuada.

## Leer la solución oficial de autodespliegue
> Priorizar aprender las mejores prácticas oficiales cuando se adapte

Las soluciones y documentos oficiales de autodespliegue suelen contener casos prácticos y técnicas de despliegue excelentes, los cuales se pueden leer de antemano para acelerar la adaptación.

## Adaptado a la aplicación Docker de ZimaOS
> Ahora puedes integrar la información aprendida anteriormente y adaptarla a la aplicación ZimaOS.

Cuando comiences a escribir, puedes hacer referencia a los archivos aplicados previamente para empezar a escribir:
https://github.com/IceWhaleTech/CasaOS-AppStore/tree/main/Apps

1. Escribir docker-compose.yaml
2. Según la definición, añadir los metadatos de la aplicación en el campo x-casaos
  - El campo multilenguaje tiene al menos en_us, porque este es el campo de respaldo.
3. Preparar iconos y capturas de pantalla, y rellenar los enlaces correspondientes en el campo x-casaos.
4. Probar la instalación
5. Enviar a GitHub

### Definición del campo x-casaos
```language
x-casaos:
    architectures:                  # Lista de arquitecturas soportadas por la aplicación
        - amd64
        - arm
        - arm64
    main: syncthing                 # El nombre del servicio principal bajo `services`
    author: CasaOS team
    category: Backup
    description:                    # Soporta varios idiomas
        en_us: Syncthing es un programa de sincronización continua de archivos. Sincroniza archivos entre dos o más computadoras en tiempo real, protegiendo de forma segura tus datos de miradas curiosas. Tus datos te pertenecen solo a ti, y tienes derecho a elegir dónde almacenarlos, si compartirlos con terceros y cómo transferirlos