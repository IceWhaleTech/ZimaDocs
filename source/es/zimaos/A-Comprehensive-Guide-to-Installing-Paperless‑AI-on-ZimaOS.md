---
title: Guía completa para instalar Paperless‑AI en ZimaOS  
description:  
type: Docs  
author: admin  
tip: Fije el formato superior, por favor no lo elimine, la descripción es la descripción del artículo, si no se rellena, se tomará el primer párrafo como descripción  
---  
> _Publicado originalmente en el foro de la Comunidad IceWhale por_ _**Muditha Liyanagama**_ _:_ _[https://community.zimaspace.com/](https://community.zimaspace.com/t/a-comprehensive-guide-to-installing-paperless-ai-on-zimaos/7557)_  

¡Hola, entusiastas de ZimaOS y Zimaboard!  

Aunque la comunidad de ZimaOS y el equipo de Ice‑Whale brindan un excelente soporte, a veces encontrar guías de instalación claras y detalladas puede ser un desafío. Si prefieres un enfoque simple, paso a paso—especialmente para navegar por los pequeños pero frustrantes obstáculos técnicos—esta guía está diseñada para ti.  

Este es el tercer artículo de mi serie continua sobre ZimaOS y Zimaboard. Espero que facilite tu proceso de instalación y te ahorre tiempo.  

Esta guía cubre cómo instalar Paperless‑AI con todas las funciones esenciales necesarias para su uso doméstico, accesible desde tu red local o a través de Tailscale. Si planeas acceder a Paperless‑AI desde Internet público, es posible que debas ajustar algunas configuraciones. Paperless‑NGX debe estar instalado previamente en la misma máquina, ya que Paperless‑AI depende de él. (Si aún no lo has configurado, te recomiendo leer primero mi [guía de instalación de Paperless‑NGX](https://community.zimaspace.com/t/a-comprehensive-guide-to-installing-paperless-ngx-on-zimaos/7474)).  

Realicé esta instalación en un Zimaboard 2 con el siguiente hardware y software:  

• CPU: Intel(R) N150, 4 núcleos, 2.90 GHz, 4 hilos  

• RAM: 16 GB 6400 MHz LPDDR5  

• GPU: Intel Alder Lake‑N Graphics  

• Sistema Operativo: ZimaOS v1.5.3 Plus  

Comencemos  

**Sección 01: Preparando el archivo Docker Compose modificado**  

Utilicé la página oficial de Paperless‑AI en GitHub como referencia e hice varios ajustes al archivo original de Docker Compose para hacerlo más conveniente para ZimaOS. Una vez importado en ZimaOS como una aplicación personalizada, deberás hacer algunas modificaciones antes de la instalación.  

Aquí tienes el archivo Docker Compose modificado que usarás:

    name: paperless-ai
    services:
      paperless-ai:
        cap_drop:
          - ALL
        cpu_shares: 90
        command: []
        container_name: paperless-ai
        deploy:
          resources:
            limits:
              memory: 16508313600
            reservations:
              devices: []
        environment:
          - PAPERLESS_AI_PORT=3000
          - PGID=1000
          - PUID=999
          - RAG_SERVICE_ENABLED=true
          - RAG_SERVICE_URL=http://192.168.68.81:8005
        image: clusterzx/paperless-ai:latest
        labels:
          icon: https://i.imgur.com/LGVPJ8g.png
        ports:
          - target: 3000
            published: "3009"
            protocol: tcp
        restart: unless-stopped
        security_opt:
          - no-new-privileges=true
        volumes:
          - type: bind
            source: /media/Storage/AppData/paperless-ai/app/data
            target: /app/data
          - type: bind
            source: /media/Storage/AppData/paperless-ai/var/lib/paperless-ai
            target: /var/lib/paperless-ai
        devices: []
        cap_add: []
        network_mode: bridge
        privileged: false
    x-casaos:
      author: self
      category: self
      hostname: ""
      icon: https://i.imgur.com/LGVPJ8g.png
      index: /
      is_uncontrolled: false
      port_map: "3009"
      scheme: http
      store_app_id: paperless-ai
      title:
        custom: paperless-ai
        en_us: paperless-ai  

**Sección 02: Importando la aplicación personalizada en ZimaOS**  

1. Inicia sesión en ZimaOS y haz clic en el ícono de más en la esquina superior derecha del panel de control.  

2. Selecciona "Instalar una aplicación personalizada".  

3. En la ventana emergente, haz clic en "Importar" en la esquina superior derecha.  

4. Aparecerá una nueva ventana. Navega hasta la pestaña "Docker Compose", pega el archivo YAML en el área de texto y haz clic en "Enviar".  

5. Cuando aparezca otra ventana emergente con instrucciones o advertencias, haz clic en "OK".  

![Instalar una aplicación personalizada](https://manage.icewhale.io/api/static/docs/1767457548038_copyImage.png)  

![Importar compose](https://manage.icewhale.io/api/static/docs/1767457548475_copyImage.png)  

![Enviar](https://manage.icewhale.io/api/static/docs/1767457548976_copyImage.png)  

![Ventana de confirmación](https://manage.icewhale.io/api/static/docs/1767457549511_copyImage.png)  

**Sección 03: Editando las configuraciones necesarias antes de la instalación**  

**Volúmenes** Establece las rutas de carpeta adecuadas para los siguientes directorios: /app/data /var/lib/paperless-ai  

**Variables de entorno: Configurando PUID y PGID** Estos valores determinan los permisos del sistema que Paperless‑AI utilizará. Si son incorrectos, podrías experimentar problemas con el etiquetado, renombrado o gestión de archivos que requerirán una reinstalación completa para corregir. Para encontrar tu PUID y PGID correctos:  

1. Abre la Configuración de ZimaOS.  

2. Ve a General y habilita el Modo Desarrollador.  

3. Abre el menú Ver y habilita el Acceso SSH.  

4. Lanza la terminal web e inicia sesión con tu nombre de usuario y contraseña de ZimaOS.  

5. Ejecuta los siguientes comandos, reemplazando “username” con tu nombre de usuario real: id -u username id -g username  

6. Toma nota de los números que aparecen. Estos son tu PUID (ID de usuario) y PGID (ID de grupo). Ingresa estos valores en los campos correspondientes bajo las Variables de Entorno. (Por ejemplo, mi PGID era 1000 y mi PUID era 999).  

**URL del servicio RAG** Actualiza RAG_SERVICE_URL para que coincida con la URL de tu instalación existente de Paperless‑NGX. Una vez que todo esté configurado correctamente, haz clic en Instalar.  

![Configuración correcta](https://manage.icewhale.io/api/static/docs/1767457550083_copyImage.png)  

**Sección 04: Configuración posterior a la instalación**  

**Configuración inicial**  

Paperless‑AI incluye una útil guía de configuración integrada. Aquí están los pasos esenciales:  

1. Lanza Paperless‑AI y crea una cuenta de administrador.  

2. Inicia sesión y configura los ajustes de conexión.  

3. Abre las configuraciones de AI y elige tu proveedor de AI preferido. Ingresa tu clave API.  

4. Para mejores resultados, elige "Custom" como el proveedor de AI y configura manualmente tanto la URL base como el modelo. Probé OpenAI, Mistral AI y Google Gemini; todos funcionaron perfectamente.  

5. Configura los Ajustes Avanzados y la Descripción del Prompt.  

6. Haz clic en Guardar. Si se te pide sobre el procesamiento automático de documentos, haz clic en "Sí, Continuar". Paperless‑AI se reiniciará y comenzará a analizar los documentos desde Paperless‑NGX.  

![Crear una cuenta de administrador](https://manage.icewhale.io/api/static/docs/1767457550603_copyImage.png)  

![Ingresa tu clave API](https://manage.icewhale.io/api/static/docs/1767457551058_copyImage.png)  

![Configura la URL base y el modelo](https://manage.icewhale.io/api/static/docs/1767457551609_copyImage.png)  

**Sección 05: Rendimiento del procesamiento de documentos**  

Si tienes muchos documentos en Paperless‑NGX, la fase inicial de procesamiento podría tardar un poco.  

_Para referencia:_  

* Procesé casi 9,000 documentos en mi Zimaboard 2. El proceso completo tomó alrededor de 3 días. A pesar de la larga duración, el sistema se mantuvo ligero en CPU y RAM, funcionando sin problemas en segundo plano.  

**Conclusión** Con esta configuración, tendrás un sistema de documentos potente y privado mejorado por AI funcionando sin problemas en tu Zimaboard. Una vez que Paperless‑AI esté completamente configurado, mejorará drásticamente la capacidad de búsqueda, etiquetado y análisis de documentos—todo funcionando de manera segura en tu propio entorno.  

Si encuentras útil esta guía, solo déjanos un pequeño comentario.  

¡Saludos!