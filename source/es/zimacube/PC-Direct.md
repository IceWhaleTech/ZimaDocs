---
title: PC Direct
description:
type: “Docs”
tip: La barra superior tiene un formato fijo, no la elimines, la descripción es para el artículo, si no se llena, se tomará el primer párrafo del contenido.
---
# Una Manera Diferente de Configurarse
Ya sea que estés utilizando un dispositivo ZimaOS para fines personales o profesionales, entender cómo conectarse a él a través de varias redes es esencial. Esta guía cubrirá tres tipos principales de conexiones de red: conexión directa, Red de área local (LAN) y Red de área amplia (WAN). Cada método tiene beneficios y aplicaciones únicos, asegurando que puedas acceder y gestionar tus datos sin problemas, ya estés en casa o en movimiento.

Este artículo es para entender conexiones bajo diferentes redes. 

## Conexión Directa
![](https://manage.icewhale.io/api/static/docs/1726131286208_image.png)

Las conexiones directas son ideales para configuraciones rápidas y sencillas, ofreciendo una forma rápida y segura de enlazar dispositivos sin necesidad de una red más amplia. Este método es perfecto para transferencias de archivos o para usar aplicaciones específicas que requieren acceso a alta velocidad.

{% note warn Tips: %}
Si encuentras algún problema al utilizar Thunderbolt, puedes obtener información más detallada [aquí](/zimacube/Connecting-ZimaCube-via-Thunderbolt.html)
{% endnote %}

**Lo Que Necesitas:**

* Cable de red o cable Thunderbolt para conexiones de alta velocidad

* Dispositivo ZimaOS (ZimaCube Pro está equipado con Thunderbolt) y dispositivo cliente (laptop, PC de sobremesa, etc.)

Pasos:

1. **Establece la Conexión:** Usa un cable de red estándar para conectar tu dispositivo cliente directamente al dispositivo ZimaOS o utiliza el cable Thunderbolt (para usuarios de ZimaCube Pro) para velocidades de hasta 20G, ideal para tareas exigentes.

2. **Configuración de Red:** La IP se asigna a través de características de auto-configuración. Y será algo como 169.254.x.x.
![](https://manage.icewhale.io/api/static/docs/1726131302533_image.png)

3. **Esto Significa Que Tu Conexión fue Exitosa:** Una IP como 169.254.x.x mostrada en la pantalla indica un éxito de conexión directa.
![](https://manage.icewhale.io/api/static/docs/1726131333502_image.png)

**Ejemplo de Aplicación y Casos de Uso:** Aprovecha la conexión de alta velocidad, especialmente útil para la edición de video u otras tareas que consumen ancho de banda. Es ideal para escenarios donde la baja latencia y la transferencia de datos a alta velocidad son cruciales.

## Conexión de Red de Área Local (LAN)
![](https://manage.icewhale.io/api/static/docs/1726131416246_image.png)

Conectar tus dispositivos ZimaOS a través de una LAN proporciona un entorno de red robusto y estable, perfecto para hogares o pequeñas empresas donde múltiples dispositivos necesitan compartir recursos de manera eficiente.

**Lo Que Necesitas:**

* Router o switch de red

* Dispositivo ZimaOS (ZimaCube Pro está equipado con NIC de 10G) y dispositivo cliente (teléfono, laptop, PC de sobremesa, etc.)

**Pasos:**

1. **Conéctate a la Red:** Conecta tu dispositivo ZimaOS y otros dispositivos clientes al router o switch.

2. **Configuración de Red:** Verifica que todos los dispositivos estén en la misma subred y puedan comunicarse entre sí. Será algo como 192.168.x.x o 10.0.x.x, dependiendo de tu configuración de LAN. Puedes asignar direcciones IP estáticas manualmente para una identificación consistente de los dispositivos, o confiar en DHCP para la asignación automática.

3. **Esto Significa Que Tu Conexión Fue Exitosa:** Una IP como 192.168.x.x mostrada en la pantalla indica un éxito de conexión LAN. La IP LAN depende de tu configuración de LAN.
![](https://manage.icewhale.io/api/static/docs/1726131462130_image.png)

**Ejemplo de Aplicación y Casos de Uso:** Transmitir y gestionar contenido multimedia entre dispositivos, disfrutando de acceso sin interrupciones a tu biblioteca. Lo mejor para entornos que requieren acceso a una red local fiable y rápida, como servidores multimedia o almacenamiento compartido de archivos.
![](https://manage.icewhale.io/api/static/docs/1726131473384_image.png)

## ¿Cuál Elegir?
Cuando tienes tanto una conexión directa como una conexión LAN, ¿cuál elegirás?
![](https://manage.icewhale.io/api/static/docs/1726131488677_image.png)

Si has leído nuestro tutorial 4 sobre SAMBA, una forma importante de experimentar NAS, probablemente dominarás la manera correcta de montar tu unidad NAS al dispositivo cliente. El punto es que hay dos reglas aquí a tener en cuenta:

1. Thunderbolt es preferido cuando usas la aplicación Zima.

2. Puedes elegir la conexión específica montando manualmente las carpetas a través de la IP correspondiente.
![](https://manage.icewhale.io/api/static/docs/1726131521116_image.png)

## Conexión de Red de Área Amplia (WAN)
![](https://manage.icewhale.io/api/static/docs/1726131531121_image.png)

Las conexiones WAN permiten el acceso remoto a tus dispositivos ZimaOS, permitiéndote conectarte desde cualquier lugar con conexión a Internet. Esto es particularmente útil para el trabajo remoto o el acceso a datos personales mientras viajas.

Para mejorar la seguridad y la facilidad de acceso, utilizamos Zerotier para crear una red virtual, simplificando así el proceso de conexión.
![](https://manage.icewhale.io/api/static/docs/1726131539225_image.png)

**Lo Que Necesitas:**

* Conexión a Internet para cada dispositivo

* Obtén el ID de inicio de sesión remoto del dispositivo ZimaOS. Este ID es un ID de Zerotier, que puedes obtener desde el panel de control de ZimaOS → Red → Inicio de Sesión Remoto.
![](https://manage.icewhale.io/api/static/docs/1726131699787_image.png)

* Para tu Windows/Mac, se necesita una [APP de Zima](https://find.zimaspace.com) 5 (integrada con Zerotier).
**Pasos:**

1. **Establece la Conexión:** Descarga y ejecuta la aplicación Zima en tu Windows/Mac. Haz clic en el ícono de la aplicación a la derecha de la barra de tareas del sistema y selecciona Conectar por ID de red. Después, es posible que necesites ingresar tu nombre de usuario y contraseña del WebUI.
![](https://manage.icewhale.io/api/static/docs/1726131911735_image.png)

2. **Configuración de Red:** Básicamente, no necesitas ninguna configuración de red adicional ya que la aplicación Zima ha hecho esto por ti.

3. **Esto Significa Que Tu Conexión Fue Exitosa:** Serás dirigido al panel de control de ZimaOS.
![](https://manage.icewhale.io/api/static/docs/1726131933130_image.png)

**Ejemplo de Aplicación y Casos de Uso:** Usa conexiones WAN para acceder de manera segura a archivos críticos o gestionar dispositivos en emergencias. Es ideal para usuarios que necesitan gestionar o acceder a sus dispositivos ZimaOS de forma remota, asegurando la disponibilidad continua de datos importantes.
![](https://manage.icewhale.io/api/static/docs/1726131946008_image.png)

Opcional: Una dirección IP pública con DNS dinámico configurado sería una opción, ya que puedes acceder a tu dispositivo a través de un nombre de dominio directamente.

## Conclusión
No importa cuáles sean tus necesidades, ZimaOS ofrece opciones de conectividad flexibles y poderosas para adaptarse a cualquier situación. Desde conexiones directas de alta velocidad hasta acceso remoto conveniente a través de WAN, puedes gestionar tus dispositivos y datos sin esfuerzo. Siempre considera las medidas de seguridad, especialmente al tratar con conexiones WAN, para proteger tu información y mantener operaciones fluidas.

Si encuentras algún problema durante su uso, no dudes en hacérnoslo saber en cualquier momento. También puedes unirte a nuestra comunidad y Discord para discutir más sobre ZimaCube y ZimaOS. ¡Esperamos tus comentarios!