---
title: Desplegar Deepseek R1 en ZimaOS
description: 
type: Docs
author: admin
tip: No elimine el formato fijo de la barra superior. La descripción es el texto introductorio del artículo; si no se completa, se tomará el primer párrafo del contenido como descripción.
---
El lanzamiento de **Deepseek** ha generado una gran atención, con su sólido rendimiento y su enfoque de código abierto, lo que permite que más personas experimenten con los modelos de lenguaje de vanguardia. ¿Estás ansioso por explorar personalmente las potentes capacidades de Deepseek? ¡**ZimaOS** simplifica y agiliza el despliegue y uso de modelos grandes!
Este tutorial completo te guiará a través del despliegue sin problemas del modelo Deepseek R1 en ZimaOS mediante OpenWebUI, permitiéndote establecer rápidamente tu propio asistente AI local.
## Empezando
Para los nuevos en el mundo de la IA, podrías preguntarte: ¿Por qué elegir Deepseek R1:14B y ZimaOS? ¿Y qué es exactamente OpenWebUI?
![](https://manage.icewhale.io/api/static/docs/1739950777131_image.png)
**Deepseek R1:14B: Alto rendimiento con bajo requerimiento de recursos**
La serie Deepseek R1 se destaca por su excepcional rendimiento y naturaleza de código abierto. La versión 14B ofrece potentes capacidades de lenguaje mientras mantiene bajos los requerimientos de recursos, lo que la hace ideal para su despliegue en dispositivos personales o sistemas NAS.
![](https://manage.icewhale.io/api/static/docs/1739950805989_image.png)
**OpenWebUI: Interfaz fácil de usar, lista para usar**
OpenWebUI ofrece una interfaz web limpia e intuitiva, lo que te permite desplegar e interactuar fácilmente con modelos de lenguaje grandes. Accede a tu asistente AI en cualquier momento y lugar, directamente a través de tu navegador.
![](https://manage.icewhale.io/api/static/docs/1739950829035_image.png)
**ZimaOS: Despliegue simplificado con seguridad de datos**
ZimaOS sobresale en facilidad de uso y seguridad de datos. Con su integración con la App Store y OpenWebUI, desplegar Deepseek R1:14B es tan fácil como instalar una aplicación móvil, sin necesidad de configuraciones complejas de Docker. Una vez desplegado, tu asistente AI puede ser accesible desde todos los dispositivos de tu red local, garantizando "desplegar una vez, usar en todas partes".
En este tutorial, utilizaremos el **ZimaCube Pro Creator Pack** y el **modelo Deepseek R1:14B** como ejemplos. El ZimaCube Pro Creator Pack viene preinstalado con ZimaOS y está equipado con una GPU profesional NVIDIA RTX 2000 Ada, con 16 GB de VRAM, más que suficiente para ejecutar Deepseek R1:14B y modelos aún más grandes sin problemas.

Para usuarios con otros dispositivos x86, necesitarás lo siguiente:
**Un dispositivo con una GPU que tenga al menos 16 GB de VRAM**: Ejecutar modelos grandes requiere una cantidad significativa de memoria GPU.
**Instalar ZimaOS**: Visita la [guía de instalación de ZimaOS](https://www.zimaspace.com/docs/zimacube/How-to-Install-ZimaOS) para descargar e instalar ZimaOS en tu dispositivo.

## Instalación y Despliegue
**Inicia sesión en ZimaOS y abre la App Store**: Busca "Open WebUI" en la barra de búsqueda. Localiza e instala la aplicación Open WebUI. Una vez instalada, haz clic en el ícono de Open WebUI en la lista de aplicaciones para lanzarlo.
![](https://manage.icewhale.io/api/static/docs/1739950989104_image.png)
![](https://manage.icewhale.io/api/static/docs/1739950995830_image.png)
![](https://manage.icewhale.io/api/static/docs/1739951002382_image.png)
**Configura el modelo.** En tu primer lanzamiento de OpenWebUI, necesitarás configurarlo:
- Regístrate e inicia sesión en tu cuenta.
- En la interfaz de chat, haz clic en "Seleccionar un modelo" en la esquina superior izquierda.
- Ingresa "deepseek-r1:14b" y selecciona "Obtener 'deepseek-r1:14b' de [Ollama.com](https://ollama.com/)."

Espera pacientemente a que se descargue el archivo del modelo.
![](https://manage.icewhale.io/api/static/docs/1739951092182_image.png)
![](https://manage.icewhale.io/api/static/docs/1739951098726_image.png)
![](https://manage.icewhale.io/api/static/docs/1739951105561_image.png)
## Comienza a usar Deepseek
Ahora, todo lo que tienes que hacer es ingresar tu solicitud en la interfaz de chat, enviarla y esperar la respuesta del modelo.

Haz clic en "Nuevo Chat" en la barra de navegación izquierda de la interfaz de Open WebUI. Ingresa la tarea con la que te gustaría que el modelo te ayudara en el cuadro de diálogo. Haz clic en "Enviar", y Deepseek R1:14B generará una respuesta para ti.
![](https://manage.icewhale.io/api/static/docs/1739951128451_image.png)
¡Siéntete libre de participar en conversaciones de múltiples turnos con Deepseek R1:14B y explorar sus capacidades!

## El Valor y las Aplicaciones de la IA en el Borde
Los modelos grandes en el borde están transformando la experiencia de la inteligencia móvil con **seguridad + eficiencia**!
![](https://manage.icewhale.io/api/static/docs/1739951166823_image.png)
Aprovechando el procesamiento de datos localizados y una respuesta de baja latencia, proporcionan una base técnica confiable para la protección de la privacidad, trabajo fuera de línea y servicios personalizados. Deepseek R1:14B y modelos similares de IA en el borde ya cubren escenarios como gestión de conocimiento, lluvia de ideas creativas y asistencia en programación.

Con la solución simplificada de despliegue de ZimaOS, puedes tener fácilmente un modelo grande dedicado sin necesidad de configuraciones profesionales, logrando **"instalar tan fácil como una aplicación móvil, desplegar una vez y usar en todas partes."** Combinado con el control de hogares inteligentes y las capacidades de análisis de datos de campo cercano, tiene el potencial de convertirse en un compañero inteligente integral para el trabajo y la vida.

## Conclusión
Esperamos que este tutorial te haya proporcionado el conocimiento necesario para desplegar modelos grandes en ZimaOS usando OpenWebUI con solo un clic. La combinación de ZimaOS y Deepseek R1:14B abre la puerta al mundo de la IA local. ¡Comienza tu viaje con IA local hoy mismo!

Si encuentras algún problema durante el uso, no dudes en comunicarte con nosotros en cualquier momento. También puedes unirte a nuestra [comunidad](https://community.zimaspace.com/) y [Discord](https://discord.com/invite/uuNfKzG5) para hablar más sobre IA y ZimaOS. ¡Esperamos tus comentarios!

## Enlaces Relacionados
**ZimaOS**：https://github.com/IceWhaleTech/ZimaOS
**Deepseek**：https://www.deepseek.com/
**OpenWebUI**：https://github.com/open-webui/open-webui
**ZimaCube Pro Creator Pack**: https://shop.zimaspace.com/products/zimacube-pro-creator-pack
---