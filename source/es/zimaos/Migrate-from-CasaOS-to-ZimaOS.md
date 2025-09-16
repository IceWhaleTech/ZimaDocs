---
title: Migrar de CasaOS a ZimaOS  
description: Guía paso a paso para migrar de CasaOS a ZimaOS. Aprende cómo transferir archivos, mover aplicaciones Docker con CTOZ y configurar tu nuevo servidor doméstico sin problemas.  
type: Docs  
author: Lauren  
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字  
---

Esta guía se centra en **migrar de CasaOS a ZimaOS** en solo dos sencillos pasos. Si tienes curiosidad por una comparación completa del sistema, consulta este blog – [link].

¿Listo para actualizar de **CasaOS** al más potente **ZimaOS**? No te preocupes: ¡el proceso de migración es más fácil de lo que piensas! Para ayudarte a planificar con claridad, hemos dividido el proceso en **tres etapas**, y puedes elegir las que se adapten a tus necesidades:

- 📁 **Transferencia de archivos**: Como copiar archivos en tu computadora, puedes usar el uso compartido por LAN para mover toda tu biblioteca de CasaOS a ZimaOS: películas, copias de fotos, documentos de trabajo, todo. Este es el paso más básico. (Por supuesto, si solo deseas migrar aplicaciones, puedes omitir esta parte).  
- 🚀 **Migración de aplicaciones**: ¿Tienes aplicaciones como Jellyfin o Immich totalmente configuradas? Con una excelente herramienta de código abierto llamada CTOZ, puedes migrar aplicaciones con sus datos y configuraciones casi con “un clic”, sin necesidad de reconfigurar desde cero.  
- ⚙️ **Configuraciones avanzadas**: Para configuraciones de sistema muy personalizadas o contenedores especiales, aún no existe una automatización completa. Pero te mostraremos rutas de copia de seguridad y restauración manuales. Para la mayoría de los usuarios, sin embargo, una instalación limpia en el nuevo sistema puede ser la opción más sencilla.  

¿Tienes ya la visión general? Perfecto—entremos en cada paso en detalle y te guiaremos a una actualización fluida y sin complicaciones.  

---

## Paso 1: Migración de datos de archivos (a través de uso compartido LAN)

La forma más directa y eficiente de mover tus archivos personales y datos de aplicaciones de **CasaOS a ZimaOS** es mediante **uso compartido en LAN (protocolo SMB)**. Este método no requiere herramientas adicionales, es sencillo de operar y garantiza velocidades rápidas de transferencia—perfecto para **migrar archivos grandes como películas, fotos, documentos** e incluso directorios de **AppData**.

**Pasos rápidos de migración:**

**1\. Habilitar el uso compartido en CasaOS**  
Abre el administrador de archivos de CasaOS, selecciona el directorio que deseas migrar (como la unidad principal de almacenamiento de datos o la carpeta AppData), configúralo como compartido y confirma que el uso compartido esté habilitado.  

![The UI of CasaOS File App](https://manage.icewhale.io/api/static/docs/1758012883305_copyImage.png)

**2\. Conectar el directorio compartido de CasaOS en Archivos de ZimaOS**  
Asegúrate de que ambos dispositivos estén en la misma red local. En el **administrador de archivos de ZimaOS**, añade un nuevo almacenamiento en red, introduce la **dirección IP de CasaOS** junto con tus credenciales de cuenta y conéctate a la carpeta compartida.  

![Map CasaOS sharing on ZimaOS](https://manage.icewhale.io/api/static/docs/1758013661424_copyImage.png)

**3\. Migrar o respaldar con un clic a ZimaOS**  
En **Archivos de ZimaOS**, usa la función **Migrar** o la característica integrada de **Respaldo** para transferir o respaldar directamente las carpetas compartidas desde CasaOS a ZimaOS.  

<table>
  <tr>
    <td valign="middle" style="width:50%;">
<img src="https://manage.icewhale.io/api/static/docs/1758013956988_Clip_20250916_171221.png" alt="migrate in ZimaOS" />
    </td>
    <td valign="middle" style="width:50%; ">
      <ul>
<li>Haz clic derecho en la <strong>carpeta compartida de CasaOS</strong> conectada</li>
<li>Haz clic en el botón <strong>Migrar</strong></li>
      </ul>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td valign="middle" style="width:50%;">
<img src="https://manage.icewhale.io/api/static/docs/1758014844720_Clip_20250916_172717.png" alt="migrate in ZimaOS"/>
    </td>
    <td valign="middle" style="width:50%; ">
      <ul>
<li>Selecciona un <strong>directorio de destino</strong></li>
<li>Elige cómo manejar conflictos y si conservar los datos originales (se recomiendan las configuraciones predeterminadas)</li>
<li>Finalmente, haz clic en <strong>Iniciar</strong></li>
      </ul>
    </td>
  </tr>
</table>

¡La tarea de migración comenzará! Una vez completada, **ZimaOS** también generará un **informe detallado de migración de datos**, asegurando que tus archivos se hayan transferido y verificado de forma confiable.  

![data migration report of ZimaOS](https://manage.icewhale.io/api/static/docs/1758016357148_Clip_20250916_175232.png)

💡 Aún mejor: ¡este método no se limita a **CasaOS**!  
Tus carpetas de **TrueNAS, Unraid, Synology DSM** o incluso **macOS** compartidas mediante **SMB** también pueden ser reconocidas y montadas por **ZimaOS**. Esto significa que, ya sea que estés realizando **copias de seguridad entre sistemas** de datos importantes o consolidando archivos de varios dispositivos, ZimaOS hace que el proceso sea confiable y sencillo.  

---

## Paso 2: Migración de aplicaciones de CasaOS a ZimaOS (la herramienta de migración CTOZ con un clic)

Una vez que tus archivos se han transferido, el siguiente paso es reinstalar y configurar tus contenedores de aplicaciones en **ZimaOS**. Para simplificar este proceso, la comunidad ha desarrollado la herramienta de código abierto **CTOZ** (abreviatura de CasaOS a ZimaOS), que automatiza la migración con un clic de los datos y configuraciones de aplicaciones.  

La **herramienta CTOZ** cubre tanto la **configuración de aplicaciones como la migración de datos**—incluyendo todo lo que está bajo el directorio **AppData de CasaOS** y los correspondientes **archivos Docker Compose (YAML)**. Tras la migración, CTOZ reinstala automáticamente las aplicaciones en ZimaOS utilizando esos archivos YAML. Esto significa que la mayoría de las aplicaciones en contenedores instaladas a través de CasaOS, junto con sus datos, pueden transferirse y permanecer en el mismo estado funcional.  

Es importante señalar: dado que **CasaOS y ZimaOS difieren en arquitectura de sistema**, CTOZ se centra únicamente en **migrar contenedores y sus datos**, no en configuraciones a nivel de sistema (que trataremos en la siguiente sección).  

**Pasos básicos para usar la herramienta CTOZ:**  
1. **Descargar e instalar CTOZ** – Importa cualquier aplicación de Docker CLI o Docker Compose en ZimaOS en solo tres pasos.  

(...)

---

¿Quieres que traduzca **todo el documento hasta el final** (incluyendo las secciones de notas, configuraciones avanzadas y conclusión), o prefieres que lo divida en varias partes para que sea más fácil de manejar?