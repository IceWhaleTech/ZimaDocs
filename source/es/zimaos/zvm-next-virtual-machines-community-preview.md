---
title: "Qué estamos desarrollando a continuación para las máquinas virtuales en ZimaOS"
seo_title: "El futuro de las máquinas virtuales de ZimaOS | ZimaSpace"
description: "Vista previa de importaciones de imágenes de VM más sencillas, redes más seguras, instantáneas de disco, copias de seguridad y mejoras de fiabilidad para ZimaOS."
type: Docs
author: Ns2Kracy
tip: No elimines este bloque de front matter. El campo description se utiliza para el resumen del artículo; si se deja vacío, se utilizará en su lugar el primer párrafo.
---

# Qué estamos desarrollando a continuación para las máquinas virtuales en ZimaOS

**Una vista previa del desarrollo de importaciones de imágenes más sencillas, redes más seguras, instantáneas de disco, copias de seguridad y las mejoras de fiabilidad que las sustentan.**

> **Vista previa de desarrollo:** Este no es un anuncio de lanzamiento ni una promesa sobre una fecha de entrega. Las funciones marcadas como **En validación**, **Prototipo** o **Investigación** pueden cambiar antes de llegar a una versión pública de ZimaOS. La disponibilidad también puede depender del despliegue de paquetes de ZimaOS, el hardware del host, el sistema operativo invitado y la configuración de almacenamiento o red.

![Resumen dibujado a mano de las cuatro líneas de trabajo de ZVM Next: importación de imágenes, redes, recuperación y compatibilidad.](/images/guides/zvm-next-workstreams.svg)

*Cuatro líneas de trabajo que avanzan a ritmos diferentes. Las etiquetas de estado de este artículo siguen siendo la fuente de referencia.*

Algunas cargas de trabajo encajan perfectamente en un contenedor. Otras necesitan un sistema operativo completo.

Una utilidad exclusiva de Windows. Un dispositivo virtual de Home Assistant. Una máquina Linux aislada para pruebas. Un laboratorio de routers que puedes reconstruir sin tocar el resto de la red. Estos son los trabajos en los que una VM se gana su lugar en un servidor doméstico.

ZVM es el servicio de máquinas virtuales que hace posible esa experiencia en ZimaOS. Ya proporciona la base para crear y ejecutar máquinas virtuales, pero la comunidad también nos ha mostrado qué partes de la experiencia deben mejorar. Importar una imagen de disco existente aún requiere demasiados pasos manuales. Las redes en puente son fáciles de malinterpretar. El inicio automático, las instantáneas, las copias de seguridad y la recuperación necesitan medidas de protección más claras. Y cuando una operación falla, el mensaje debería ayudarte a solucionarlo, no limitarse a indicar que algo salió mal.

Hemos convertido esos informes en una dirección más definida para ZVM. A continuación explicamos qué estamos reforzando ahora, qué se encuentra en validación activa y qué sigue en fase de investigación.

## Resumen de estados

| Estado | Qué significa | Ejemplos actuales |
| --- | --- | --- |
| **Base alfa** | El código se encuentra en la línea alfa actual; la disponibilidad en cada dispositivo aún depende del despliegue de paquetes de ZimaOS. | Refuerzo de la autenticación para la ruta de la consola de VM basada en navegador. |
| **En validación** | La implementación principal existe, pero las pruebas de compatibilidad y actualización siguen en curso. | Importación directa de imágenes, conversión por etapas, comprobaciones de integridad y limpieza tras fallos. |
| **Prototipo** | El diseño funciona en el código y las pruebas, pero su comportamiento y su interfaz de usuario aún pueden cambiar. | Redes multimodo, cambios de puente protegidos, eventos de inicio automático, instantáneas de disco y creación de copias de seguridad completas. |
| **Investigación** | Una dirección que estamos investigando, no una función cuyo lanzamiento esté confirmado. | Passthrough de USB, PCIe, GPU y NIC físicas; copias de seguridad incrementales; flujos de trabajo de migración más amplios. |

Usamos estas etiquetas de forma intencionada. Que una función aparezca en una rama de desarrollo o en un prototipo no significa que esté lista para tu VM de producción.

## Importa la imagen que ya tienes

Muchos proyectos autoalojados publican un disco virtual listo para usar en lugar de un instalador. Para incorporar esa imagen a una VM, es posible que tengas que convertirla manualmente, moverla al directorio correcto y conectarla después a una máquina nueva.

La experiencia que buscamos es mucho más sencilla: elige la imagen, elige dónde debe almacenarla la VM y deja que ZVM se encargue de prepararla.

El primer objetivo de compatibilidad incluye:

- Medios de instalación ISO
- QCOW2
- VDI
- VMDK
- Discos raw o IMG
- Paquetes OVA con metadatos OVF

![Flujo de importación de imágenes de ZVM desde la selección del origen hasta la detección del contenido, la verificación, la preparación y la finalización atómica.](/images/guides/image-import-pipeline.svg)

*Cada proceso termina con una copia verificada y lista para la VM o con un paso de limpieza, nunca con un disco a medio terminar presentado como listo.*

Admitir un formato implica más que confiar en la extensión del nombre del archivo. ZVM inspecciona el contenido, valida la imagen y la copia o la convierte en la ubicación de almacenamiento seleccionada para la VM. Los discos que no son ISO se convierten en QCOW2 de forma predeterminada, mientras que raw sigue siendo una opción avanzada. La VM terminada apunta a la copia gestionada, por lo que eliminar la carga o descarga original no debería dañarla.

El proceso de importación se ha diseñado para gestionar los fallos con el mismo cuidado que los casos correctos:

1. Prepara el origen sin tratarlo como un disco terminado.
2. Detecta el formato real y rechaza las imágenes incompatibles o dañadas.
3. Comprueba un valor SHA-256 opcional.
4. Inspecciona los archivos OVA y rechaza los intentos de salir del directorio de extracción y otras entradas no seguras.
5. Copia o convierte el contenido en un archivo temporal `.partial`.
6. Sincroniza, verifica y cambia de forma atómica el nombre de la imagen completada.
7. Elimina los datos temporales después de una cancelación o un fallo.

Cuando es posible, este proceso también conserva el comportamiento de los discos dispersos. Un disco con una gran capacidad virtual no debería consumir de inmediato esa misma cantidad de almacenamiento físico.

El objetivo a largo plazo para la interfaz de usuario es que las cargas locales, las rutas seleccionadas en ZimaOS Files, las descargas desde URL y las plantillas de sistema integradas converjan en el mismo flujo de configuración de VM. Esta etapa se centra en importar una imagen para una VM. No es una biblioteca de imágenes independiente ni incluye la exportación de VM.

**Estado: En validación.** El backend de importación directa y las pruebas de regresión existen, incluida una corrección para nombres con versiones como `appliance-1.2.3.qcow2`. Aún se necesita ampliar la cobertura de dispositivos, imágenes y sistemas operativos invitados.

## La red debería ser una elección, no una prueba de vocabulario

Los modos de red virtual pueden parecer casi idénticos en un formulario y comportarse de forma muy diferente en la red. ZVM debería explicar esa diferencia antes de que pulses Guardar.

El prototipo de red asigna un modo explícito a cada NIC virtual:

- **NAT** para una red privada sencilla con acceso saliente.
- **Puente Linux** cuando la VM debe aparecer directamente en la LAN y comunicarse con el host.
- **macvtap** para una conexión más directa, con una advertencia clara de que la comunicación del host al invitado suele no estar disponible.
- **Desconectado** para un laboratorio aislado o una NIC que se conectará más adelante.

![Cuatro tarjetas de topología comparan NAT, puente Linux, macvtap y redes de VM desconectadas.](/images/guides/vm-network-modes.svg)

*Las etiquetas pueden parecer similares en un formulario de configuración, pero el host, la VM y la LAN no se comunican de la misma manera.*

El objetivo del producto es admitir 1-8 NIC configuradas de forma independiente por VM. La planificación de NAT también incluye reservas DHCP y reenvío de puertos TCP o UDP. Si un puerto del host está duplicado o ya está ocupado, ZVM debería informar de un conflicto en lugar de sustituir otra regla sin avisar.

Los cambios de puente requieren especial cuidado en un servidor doméstico sin monitor. Mover la interfaz física que transporta la conexión de administración de ZimaOS puede desconectar el mismo navegador que se está utilizando para realizar el cambio. El prototipo trata esa operación como una transacción: comprueba la configuración propuesta, la aplica, supervisa la conectividad y la revierte si la nueva ruta no llega a funcionar correctamente.

La misma claridad debería aplicarse a los cambios que requieren apagar la VM. Si el host o el invitado no pueden conectar una NIC en caliente de forma segura, ZVM debería guardar la configuración solicitada, marcarla como pendiente de reinicio y evitar dar a entender que la VM activa ya coincide con ella.

**Estado: Prototipo.** Los modos de interfaz explícitos, las API de interfaz, las políticas NAT persistentes, las reglas de reenvío, la configuración inicial de red estática y los cambios protegidos de puente Linux cuentan con implementaciones funcionales en ramas de desarrollo. Las matrices de hardware y actualización no están completas.

## Una instantánea no es una copia de seguridad

Una instantánea es un punto de restauración cercano. Una copia de seguridad es una copia independiente destinada a sobrevivir a un problema con la VM o el almacenamiento originales. Ocultar ambas detrás de un único botón ambiguo dificultaría la recuperación en vez de facilitarla.

![Comparación en paralelo de una instantánea que solo incluye los discos y un paquete de copia de seguridad completa e independiente.](/images/guides/snapshot-vs-backup.svg)

*Las instantáneas y las copias de seguridad resuelven problemas diferentes. La restauración de copias de seguridad sigue siendo un hito posterior.*

### Instantáneas de disco para restauración local

El primer diseño de instantáneas solo incluye los discos. No captura la RAM ni reanuda una aplicación exactamente en la instrucción en la que se detuvo.

En una VM QCOW2 apagada, ZVM puede copiar directamente un disco estable. En una VM en ejecución, el prototipo crea una superposición externa temporal para establecer una vista del disco en un momento concreto, copia la base estable y después confirma los cambios y redirige el disco activo a su ruta original. La VM no queda dependiendo de una cadena creciente de superposiciones gestionadas por ZVM.

El valor predeterminado es **consistente ante fallos**, similar al estado del disco después de una pérdida de alimentación inesperada. Si el invitado dispone de un QEMU Guest Agent que responde, ZVM puede ofrecer una captura **en reposo** para que el sistema de archivos pueda volcar los datos y congelarse durante la instantánea. ZVM comprueba esa capacidad en tiempo de ejecución en lugar de mostrar un interruptor que podría no funcionar.

Para restaurar una instantánea de disco, la VM debe estar apagada. Antes de sustituir los discos, el prototipo escribe un registro de recuperación y gestiona temporalmente el inicio automático. Si se interrumpe la restauración de varios discos, puede revertirla en lugar de dejar la VM con discos de distintos momentos. Las capturas en vivo también comprueban el espacio disponible y supervisan la superposición temporal mientras se realiza la copia.

### Copias de seguridad completas para disponer de una copia independiente

El prototipo de copia de seguridad crea un paquete `.zvm-backup` en un directorio existente seleccionado mediante ZimaOS Files. Registra la configuración inactiva de la VM, copias independientes de los discos QCOW2, sumas de comprobación SHA-256, tamaños de archivo, asignaciones de los discos originales y un manifiesto versionado.

La seguridad del destino forma parte de la función. ZVM se ejecuta con acceso elevado al almacenamiento, por lo que la implementación rechaza las rutas del sistema operativo, las ubicaciones de metadatos de ZVM y los escapes mediante enlaces simbólicos, en lugar de depender de una simple comprobación de texto.

**Limitación importante:** la creación y enumeración de paquetes de copia de seguridad forman parte del prototipo actual. Restaurar una VM desde un paquete de copia de seguridad es un hito independiente y no debe darse por disponible. Las instantáneas de disco tampoco incluyen el estado de la memoria.

**Estado: Prototipo.** La API, la implementación del servicio, los registros de interrupciones, las comprobaciones de rutas y las pruebas específicas existen en el código en desarrollo. Las pruebas con libvirt real, pérdida de alimentación, poco espacio y varios discos siguen siendo requisitos para el lanzamiento.

## El inicio automático no debería ser un interruptor misterioso

El inicio automático resulta útil para Home Assistant, una VM de router o cualquier servicio que deba volver a funcionar después de reiniciar el host. También conlleva riesgos cuando una VM depende de almacenamiento o redes que aún no están disponibles.

El trabajo actual expone mediante la API la configuración de inicio automático existente y registra eventos de éxito o fallo cuando cambia. El diseño más amplio añade prioridad de inicio y un retraso configurable y, a continuación, espera a que los recursos necesarios del host estén disponibles antes de iniciar las VM dependientes.

**Estado: Prototipo.** El control básico del inicio automático y los informes de eventos se están probando ahora. El orden basado en dependencias y el retraso son objetivos de diseño, no comportamientos terminados.

## Las pequeñas correcciones también importan

Las funciones nuevas no ayudan si una actualización, una sesión de consola o una operación fallida dejan una VM en un estado incierto. Varias correcciones menos visibles avanzan junto con las mejoras de mayor alcance:

- **Seguridad de acceso a la consola:** el proxy VNC basado en navegador ahora sigue la ruta de autenticación prevista en la línea de código alfa actual. La disponibilidad en cada dispositivo sigue dependiendo del despliegue de paquetes de ZimaOS.
- **Gestión de identidad más segura:** la autenticación ya no confía en una dirección reenviada controlada por el cliente para decidir si una solicitud es local.
- **Nombres de imágenes con puntos:** los nombres de archivo como `appliance-1.2.3.qcow2` conservan su versión útil en lugar de acortarse incorrectamente.
- **Cargas canceladas:** cuando se interrumpe la carga de una imagen, se elimina su archivo parcial en lugar de dejarlo como si se pudiera utilizar.
- **Configuración guardada frente a configuración activa:** las mejoras de red leen la definición persistente de la VM y pueden mostrar un reinicio pendiente, en lugar de confundir el estado en ejecución con el estado guardado.
- **Conciliación de red:** las reservas DHCP duplicadas, los conflictos de reenvío y las políticas de red del host aplicadas parcialmente reciben una validación explícita y un tratamiento orientado a la reversión.

Otros informes, como los relacionados con tramas binarias de la consola del navegador, bucles de reconexión, comportamiento del teclado, instalación de Windows, visualización de GRUB y compatibilidad de actualizaciones, siguen formando parte del plan de regresión. No se han corregido todos por el mero hecho de que se estén investigando.

## Tu VM existente debe seguir siendo tuya

Las VM de la comunidad suelen contener XML editado a mano, dispositivos poco habituales, firmware personalizado o ajustes creados por una versión anterior de ZimaOS. Reescribir toda la definición para cambiar un solo campo podría borrar justo la personalización que hace útil la VM.

El diseño de ZVM Next adopta un enfoque aditivo:

- Detecta las VM existentes sin modificarlas.
- Modifica únicamente los nodos XML que corresponden a la operación solicitada.
- Conserva los UUID, las direcciones MAC existentes, las rutas de disco, la NVRAM, el inicio automático y los dispositivos no modificados.
- Explica si una función puede aplicarse en vivo, requiere apagar la VM, necesita una conversión explícita o no es compatible.
- Evita que una operación nueva fallida impida arrancar la VM con su configuración anterior.

Antes de una versión estable, la matriz de regresión prevista abarca las VM existentes con Windows, Linux, Home Assistant OS y OpenWRT o pfSense en escenarios de uso de funciones, reinicio, actualización y reversión.

## El passthrough no es solo una casilla

El passthrough de hardware es una de las funciones que más solicita la comunidad. También es una de las que más fácilmente pueden volverse inseguras si se oculta demasiada complejidad.

La asignación de dispositivos USB puede tener un impacto relativamente acotado. El passthrough de PCIe y GPU depende de los grupos IOMMU, el firmware, la vinculación de controladores, el comportamiento de restablecimiento de los dispositivos y qué otros elementos comparten el mismo grupo. El passthrough de una NIC física puede retirar una interfaz que el propio ZimaOS necesita. Una casilla no puede hacer seguro un hardware incompatible.

Por eso, el passthrough de PCIe, GPU y NIC físicas sigue siendo una dirección de **Investigación/Vista previa**. Cualquier vista previa pública necesita una matriz de compatibilidad, advertencias claras sobre el impacto en el host, instrucciones de recuperación y una forma de desactivar la función de manera independiente.

Las copias de seguridad incrementales, la migración de almacenamiento en línea, la migración entre hosts, los clústeres, la alta disponibilidad, el almacenamiento distribuido, las instantáneas de RAM y la deduplicación de copias de seguridad también quedan fuera del alcance principal actual.

## Ayúdanos a probar cargas de trabajo reales

Compartimos tanto los límites como las ideas porque los comentarios más útiles parten de una carga de trabajo real.

Cuéntanos:

1. ¿Qué formato de imagen y dispositivo virtual quieres importar?
2. ¿Necesitas NAT, un puente Linux real, macvtap o un laboratorio aislado con varias NIC?
3. ¿Te sigue resultando útil una instantánea consistente ante fallos cuando QEMU Guest Agent no está instalado?
4. ¿Dónde deberían almacenarse las copias de seguridad completas y qué protección de espacio libre esperas?
5. ¿Qué dispositivo USB, PCIe, GPU o NIC quieres usar mediante passthrough?
6. ¿Qué error actual de VM te impide avanzar hoy?

Para informar de un error, incluye tu modelo de hardware Zima o de host x86, las versiones de ZimaOS y ZVM, el sistema operativo invitado, el tipo de firmware de la VM, el formato y la ubicación de almacenamiento del disco, el modo de red, la acción exacta que falló y el error completo que muestra la interfaz de usuario.

Únete a la conversación en la [comunidad de ZimaSpace](https://community.zimaspace.com/). Estos detalles ayudan a otros miembros de la comunidad y al equipo de Zima a comparar tu informe con los casos conocidos.

Nuestro objetivo no es trasladar cada interruptor de libvirt a un formulario web. Queremos que los flujos de trabajo de VM importantes para un servidor doméstico sean comprensibles, recuperables y lo bastante seguros como para confiar en ellos durante el próximo reinicio.

## Preguntas frecuentes

### ¿Están disponibles ahora todas estas funciones?

No. La tabla de estados separa el trabajo de base alfa, la validación activa, los prototipos y la investigación. Este artículo informa sobre la dirección del proyecto; no contiene notas de la versión.

### ¿Incluirán las instantáneas el estado de la memoria de la VM?

No en el diseño principal actual. La primera implementación solo captura los discos. Las instantáneas de VM en ejecución son consistentes ante fallos de forma predeterminada y pueden poner en reposo el sistema de archivos cuando QEMU Guest Agent está disponible.

### ¿Se pueden importar todas las imágenes OVA, VMDK o VDI?

Estos formatos forman parte del objetivo de compatibilidad, pero las imágenes reales varían. El firmware, la arquitectura, los controladores, los drivers, el cifrado, la corrupción y los metadatos OVF específicos de cada proveedor pueden hacer que una imagen sea incompatible. ZVM debería rechazar los casos no compatibles con una explicación que permita actuar, en lugar de crear una VM que no pueda arrancar.

### ¿Ya se pueden restaurar copias de seguridad?

No. El prototipo actual crea y enumera paquetes de copia de seguridad completa. La restauración desde esos paquetes está prevista como un flujo de trabajo independiente sometido a pruebas específicas.

### ¿Funcionará el passthrough de GPU en todos los dispositivos Zima?

No. Depende de la CPU, el firmware, la agrupación IOMMU, la GPU, el controlador del host, el controlador del invitado y el comportamiento de restablecimiento. Sigue siendo un área de investigación y vista previa hasta que la matriz de compatibilidad y la ruta de recuperación estén claras.
