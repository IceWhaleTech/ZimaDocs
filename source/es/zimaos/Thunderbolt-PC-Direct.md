---
title: Cómo conectar ZimaCube a través de un cable Thunderbolt
description: 
type: "Docs"
tip: La barra superior está fijada, por favor no la elimine, la descripción es para el artículo, si no se completa se tomará el primer párrafo del contenido
---

Si desea conectar su computadora al ZimaCube utilizando un cable Thunderbolt para obtener velocidades de conexión más rápidas, puede seguir estos pasos:

## Mac
- Si aún no se ha conectado a ZimaCube usando ZimaClient, por favor consulte la [documentación](https://www.zimaspace.com/docs/zimaos/Features.html#Download-the-Zima-Client) para descargar e instalar [ZimaClient](https://find.zimaspace.com/). ZimaClient priorizará e identificará dispositivos con conexiones Thunderbolt durante el escaneo inicial.

![](https://manage.icewhale.io/api/static/docs/1728443998198_image.png)

1. Conecte un extremo del cable Thunderbolt al puerto Thunderbolt en el panel trasero del ZimaCube (cualquiera de los dos puertos) y el otro extremo al puerto Thunderbolt de su computadora.
   - a. Cable Thunderbolt: Requiere un cable estándar Thunderbolt 3 o Thunderbolt 4; los cables más cortos proporcionan mejor estabilidad y velocidad de transmisión.
   - b. Nota: Los puertos en el panel frontal de ZimaCube Pro no soportan la funcionalidad Thunderbolt, y ZimaCube en sí no soporta la funcionalidad Thunderbolt.

| ![](https://manage.icewhale.io/api/static/docs/1728444041984_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728444057975_image.png) |
|:---:|:---:|
| 1.1 Conecte el cable Thunderbolt al panel trasero del ZimaCube | 1.2 Conecte el otro extremo al puerto Thunderbolt de su computadora. |

2. Después de enchufar el cable, ZimaClient se adaptará automáticamente y cambiará a la conexión Thunderbolt.
   - Si aún no se ha conectado a ZimaCube utilizando ZimaClient, por favor consulte la [documentación](https://www.zimaspace.com/docs/zimaos/Features.html#Download-the-Zima-Client) para descargar e instalar [ZimaClient](https://find.zimaspace.com/).

| ![](https://manage.icewhale.io/api/static/docs/1728444146303_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728444152947_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728444159320_image.png) |
|:---:|:---:|:---:|
| 1. Antes de insertar el cable Thunderbolt <br> Por ejemplo: dirección IP 10.0.187.209 | 2. Espere aproximadamente 2 minutos <br> El cable Thunderbolt será reconocido como insertado. | 3. Cable Thunderbolt conectado correctamente <br> Por ejemplo: dirección IP 169.254.1.1 |

3. Basado en la nueva dirección IP de la conexión del cable Thunderbolt, vuelva a abrir el tablero, configure el uso compartido Samba y utilice las funciones correspondientes.
   - Nota: Cuando tanto el cable Thunderbolt como el cable LAN están conectados, estarán en dos direcciones IP diferentes. Debe acceder a la dirección IP correspondiente al cable Thunderbolt en su computadora para beneficiarse de la transmisión más rápida de Thunderbolt.
     
| ![](https://manage.icewhale.io/api/static/docs/1728444289229_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728444304099_image.png) |
|:---:|:---:|
|  Reabra el tablero |  Reconfigure el uso compartido Samba |

## Windows
- Si aún no se ha conectado a ZimaCube usando ZimaClient, por favor consulte la [documentación](https://www.zimaspace.com/docs/zimaos/Features.html#Download-the-Zima-Client) para descargar e instalar [ZimaClient](https://find.zimaspace.com/). ZimaClient priorizará e identificará dispositivos con conexiones Thunderbolt durante el escaneo inicial.
1. Use el cable Thunderbolt para conectarse al conector Thunderbolt en el panel trasero del ZimaCube (cualquiera de los dos conectores) y el otro extremo para conectarse al conector Thunderbolt de su PC con Windows.
  - a. Cable Thunderbolt: se requiere un cable estándar Thunderbolt 3 o Thunderbolt 4, cuanto más corto sea el cable, mejor será la estabilidad y la velocidad de transmisión.
  - b. Nota: La interfaz en el panel frontal de ZimaCube Pro no admite la función Thunderbolt, ZimaCube no admite la función Thunderbolt.

| ![](https://manage.icewhale.io/api/static/docs/1729589901877_image.png) | ![](https://manage.icewhale.io/api/static/docs/1729589918266_image.png) |
|:---:|:---:|
|  Cable eléctrico conecta al conector Thunderbolt en el panel trasero del ZimaCube. |  El otro extremo del cable se conecta al conector Thunderbolt de su computadora |


2. Una vez que el cable esté conectado, ZimaClient se adaptará automáticamente y cambiará a la conexión Thunderbolt.
  - Si aún no ha usado ZimaClient para conectarse a ZimaCube, consulte la documentación y descargue e instale ZimaClient primero.
  - Abra el cliente y verá que su dispositivo se ha conectado correctamente al ZimaCube a través de Thunderbolt.
  - Haga clic para conectarse.

| ![](https://manage.icewhale.io/api/static/docs/1729590200515_image.png) | ![](https://manage.icewhale.io/api/static/docs/1729590218016_image.png) |
| - | - |


3. Conectar exitosamente el cable Thunderbolt
![](https://manage.icewhale.io/api/static/docs/1729590231315_image.png)

4. Basado en la dirección IP de la nueva conexión del cable Thunderbolt, vuelva a abrir el Tablero, configure el uso compartido Samba, etc., y utilice las funciones correspondientes.
- Nota: Cuando el cable Thunderbolt y el cable LAN están ambos conectados, se encontrarán en 2 direcciones IP diferentes, y solo se transmitirá con el cable Thunderbolt más rápido cuando se acceda a la dirección IP correspondiente del cable Thunderbolt en la computadora.

## Lectura Extendida
  1. Cómo acceder y modificar archivos en ZimaCube en Finder de MacOS y Explorador de Windows, consulte [más](https://www.zimaspace.com/docs/zimaos/Using-Samba-as-a-Member).
  2. Aprenda sobre las velocidades de transferencia más rápidas que se pueden lograr con una conexión Thunderbolt en el ZimaCube, consulte: [Análisis de Velocidades de Transferencia de Conexión Thunderbolt de ZimaCube](https://www.zimaspace.com/docs/zimacube/Transfer-Speeds-Over-Thunderbolt).

## Resolución de Problemas (por completar)
1. Si el cliente no se muestra, verifique la configuración de red en Mac y Windows.
2. Si el ZimaCube está enchufado a una tarjeta gráfica, intente reiniciar el ZimaCube y luego intente nuevamente.

## Preguntas Frecuentes
**1. ¿Qué es ZimaCube? ¿En qué se diferencia de los dispositivos de almacenamiento USB externos?**
   - a. ZimaCube es un dispositivo de nube personal que supera la conectividad DAS en condiciones de velocidad similares. Tiene capacidades tanto de NAS como de DAS, permitiendo conexiones rápidas a computadoras personales a través de cables Thunderbolt 4 mientras mantiene una conexión a internet independiente para ZimaCube.
   - b. A diferencia de los dispositivos de almacenamiento USB, ZimaCube tiene su propia placa base y CPU; no es solo un dispositivo de almacenamiento. Por lo tanto, cuando se conecta a una computadora personal a través de un cable Thunderbolt, establece una conexión de red Thunderbolt y se muestra como un dispositivo de puente Thunderbolt en lugar de un dispositivo de almacenamiento USB. Conectar ZimaCube a una computadora personal no afecta la operación de ZimaCube ni su conexión a internet; opera simultáneamente como NAS y DAS.
   - c. Conectar ZimaCube a una computadora personal a través de un puente Thunderbolt no resulta en velocidades más lentas en comparación con los dispositivos de almacenamiento USB externos. La velocidad de conexión depende principalmente del cable y del disco duro. Sin embargo, si ZimaCube está conectado simultáneamente a los cables LAN y Thunderbolt, la computadora personal puede conectarse a ZimaCube a través de cualquiera de los métodos. Con ZimaClient instalado, cambiará automáticamente a la conexión más rápida. Si se conecta manualmente, ZimaCube aparecerá como dos IPs (dispositivos) en la red.

**2. ¿Es Thunderbolt 4 la conexión más rápida en ZimaCube Pro?**
   - Sí.

**3. ¿Hay funciones en ZimaCube Pro que solo se pueden utilizar a través de Thunderbolt?**
   - TB4 admite todas las funciones de expansión, como pantallas externas, dispositivos de almacenamiento, periféricos USB, dispositivos PCIe, redes y carga.

**4. ¿Necesito instalar controladores adicionales al usar Thunderbolt 4?**
   - ZimaOS instalado en ZimaCube ya tiene los controladores.
   - El cliente debe asegurarse de que los controladores estén instalados y actualizados.

**5. ¿Por qué la velocidad de transferencia de archivos es la misma que mi velocidad LAN cuando ambos Thunderbolt 4 y LAN están conectados? ¿Por qué no Thunderbolt 4? (Mac)**
   - Cuando tanto Thunderbolt como LAN están conectados, macOS por defecto utiliza la red LAN en lugar de TB4.
   - Este es un problema de mecanismo del sistema con macOS. ZimaOS está trabajando en optimizar esto. Mientras tanto, se recomienda desconectar la red LAN y solo conectarse a través de TB4.

**6. ¿Qué debo hacer si las velocidades de transferencia de archivos a través de SMB o uso compartido de archivos son muy lentas?**
   - Instale ZimaClient. ZimaClient cambiará automáticamente a una conexión más rápida. Después del cambio, recuerde hacer clic en "Abrir en Finder/Explorador" nuevamente para asegurarse de que está utilizando la conexión Thunderbolt.

**7. ¿Cuál es la velocidad real de Thunderbolt 4 en ZimaCube Pro?**
   - Las pruebas de velocidad pueden alcanzar hasta 20Gbps, pero las velocidades de transferencia reales pueden disminuir debido a limitaciones del disco duro, tamaños de archivos y protocolos.

**8. ¿Cómo puedo lograr velocidades óptimas de Thunderbolt 4 en ZimaCube Pro?**
   - a. Compre cables Thunderbolt 4 genuinos.
   - b. Asegúrese de que los discos duros y la configuración RAID dentro de ZimaCube puedan soportar velocidades de lectura/escritura superiores a 20Gbps.
   - c. En macOS, las velocidades de transferencia Samba pueden estar limitadas por Finder.
   - d. Al transferir un gran número de archivos pequeños, las velocidades pueden estar limitadas.

**9. ¿Cuáles son las diferencias entre Thunderbolt 4 y las interfaces USB?**
   - Por favor consulte: [Comparación de Intel](https://www.intel.com/content/www/us/en/architecture-and-technology/thunderbolt/thunderbolt-4-vs-usb-c.html)

**10. ¿Cuáles son los pasos de resolución de problemas si la interfaz Thunderbolt 4 no se puede habilitar?**
   - a. Verifique si el dispositivo y el cable admiten TB4, especialmente el cable.
   - b. ¿Puede la PC detectar el dispositivo Thunderbolt cuando está enchufado?
   - c. ¿Puede ZimaCube conectarse a otros dispositivos o docks Thunderbolt?

**11. ¿Son compatibles hacia atrás las interfaces y dispositivos Thunderbolt 4?**
   - TB4 es compatible hacia atrás con TB3.

**12. ¿Puede el puerto Thunderbolt 4 en ZimaCube Pro soportar conexiones en cadena Daisy Chain?**
   - Sí.

**13. ¿Puedo usar ZimaCube Pro como un dispositivo de almacenamiento Thunderbolt directo como un disco duro externo regular?**
   - No, a diferencia de los dispositivos de almacenamiento USB, ZimaCube tiene su propia placa base y CPU, y la transferencia de datos pasará a través de ellos.

**14. ¿Conectar varios cables a Mac/PC a través de los dos puertos Thunderbolt 4 aumentará la velocidad?**
   - No, la red TB no admite agregación de enlaces como los cables Ethernet duales.