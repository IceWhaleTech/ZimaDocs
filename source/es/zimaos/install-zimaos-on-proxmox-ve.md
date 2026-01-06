---
title: Instalar ZimaOS en Proxmox VE usando la imagen ISO  
description:  
type: Docs  
author: icewhale123456  
tip: No elimine el formato fijo de la barra superior, la descripción es para el artículo, si no se llena, se tomará el primer párrafo como resumen.  
---  

**Con el lanzamiento oficial de la imagen ISO de **ZimaOS**, ahora puede instalar y desplegar ZimaOS más fácilmente en entornos virtualizados como **Proxmox VE (PVE)**. Esta imagen ISO está **específicamente optimizada para la instalación en máquinas virtuales**, lo que le permite desplegar ZimaOS sin hardware físico y explorar rápidamente sus características principales.  
Este método de instalación es ideal para **pruebas, aprendizaje, evaluación y escenarios de uso ligero**.

## Introducción  
Instalar ZimaOS en Proxmox VE (PVE) significa ejecutar ZimaOS como una **máquina virtual utilizando una imagen ISO**, en lugar de instalarlo directamente en hardware físico. Este enfoque le permite experimentar todo el sistema ZimaOS y la interfaz de gestión basada en la web dentro de un entorno de virtualización estándar.  
Al desplegar ZimaOS en PVE, puede crear rápidamente una instancia aislada de ZimaOS en su servidor o laboratorio doméstico existente. Comparado con la instalación en hardware físico, este método ofrece varias ventajas:  
- Configuración más rápida con una curva de aprendizaje más baja  
- Menor riesgo comparado con la instalación directa en hardware  
- Fácil replicación del entorno con instantáneas y copias de seguridad  
- Asignación flexible de recursos (CPU, memoria, almacenamiento)  
Es especialmente adecuado para **evaluación de características, validación de soluciones y despliegue de servicios ligeros**.  

---

## Requisitos  
Requisitos de hardware y entorno  
- Un entorno Proxmox VE (PVE) operativo y accesible  
- Un CPU x86_64 con soporte de virtualización habilitado  
  Configuración mínima recomendada:  
  - CPU: 2 núcleos o más (se recomiendan 4 núcleos)  
  - Memoria: 4 GB o más (se recomiendan 8 GB)  
  - Almacenamiento: Al menos 32 GB de espacio disponible  

Requisitos de software y sistema  
- Imagen ISO de instalación de ZimaOS  
- Proxmox VE 6.x / 7.x / 8.x / 9.x  
- Modo de arranque de máquina virtual: UEFI  
- Tipo de BIOS de la VM: OVMF (UEFI)  

---  
## Pasos de instalación  

{% note warn Nota: %}  
La imagen ISO de ZimaOS necesaria para este tutorial se puede descargar desde:  
https://github.com/IceWhaleTech/ZimaOS/releases  
{% endnote %}  

### Subir la imagen ISO de ZimaOS  
1. Inicie sesión en la interfaz web de Proxmox VE  
2. Vaya a **local → ISO Images → Subir**  
![](https://manage.icewhale.io/api/static/docs/1767616598247_copyImage.png)  
3. Seleccione la **imagen ISO de ZimaOS** descargada y haga clic en **Subir**  
![](https://manage.icewhale.io/api/static/docs/1767616612358_image.png)  

### Crear una máquina virtual  
1. Haga clic en el botón Crear VM  
![](https://manage.icewhale.io/api/static/docs/1767616679913_image.png)  
2. En la página de Sistema operativo, seleccione la imagen ISO de ZimaOS  
![](https://manage.icewhale.io/api/static/docs/1767616694612_image.png)  
3. En la página de Sistema:  
  - Establezca el BIOS en UEFI  
  - Desmarque la opción de agregar disco EFI  
![](https://manage.icewhale.io/api/static/docs/1767616715004_image.png)  
4. En la página de **CPU**, ajuste el número de núcleos de CPU  

{% note warn  %} **Propósito**: Asignar más núcleos de CPU mejora el rendimiento de múltiples hilos y ayuda a asegurar un funcionamiento suave bajo carga.  
**Recomendado**: 4 núcleos de CPU o más  
{% endnote %}  

![](https://manage.icewhale.io/api/static/docs/1767616752746_image.png)  
5. En la página de **Memoria**, ajuste el tamaño de la memoria  
{% note warn  %} **Propósito**: Más memoria permite que ZimaOS ejecute servicios adicionales, mejora el rendimiento multitarea y reduce la lentitud durante operaciones frecuentes.  
**Recomendado**: 8 GB (8192 MB) o más  
{% endnote %}  

![](https://manage.icewhale.io/api/static/docs/1767616800421_image.png)  

### Instalar ZimaOS  
1. Después de crear la máquina virtual, haga clic en **Iniciar**  
![](https://manage.icewhale.io/api/static/docs/1767616824433_image.png)  
2. Haga clic en **Consola** para abrir la consola de la VM  
![](https://manage.icewhale.io/api/static/docs/1767616843275_image.png)  
3. Presione `Enter` para comenzar el proceso de instalación de ZimaOS  
![](https://manage.icewhale.io/api/static/docs/1767616860449_image.png)  
4. Seleccione `Instalar ZimaOS` y presione `Enter`  
![](https://manage.icewhale.io/api/static/docs/1767616872278_image.png)  
5. Seleccione el disco de destino para la instalación y presione `Enter`  
![](https://manage.icewhale.io/api/static/docs/1767616901998_image.png)  
6. Confirme el disco seleccionado eligiendo `Sí` y presione `Enter`  
![](https://manage.icewhale.io/api/static/docs/1767616916757_image.png)  
7. Confirme nuevamente para proceder con la instalación  
![](https://manage.icewhale.io/api/static/docs/1767616933805_image.png)  
8. Cuando termine la instalación, aparecerá la pantalla de finalización  
![](https://manage.icewhale.io/api/static/docs/1767616945992_image.png)  

---  
### Eliminar la imagen ISO  
1. Regrese a la interfaz de Proxmox VE  
2. Seleccione la máquina virtual, elija **CD**, y haga clic en **Editar**  
![](https://manage.icewhale.io/api/static/docs/1767616981489_image.png)  
3. Seleccione **No usar ningún medio** y haga clic en **OK**  
![](https://manage.icewhale.io/api/static/docs/1767616998638_image.png)  
4. Después del cambio, la configuración debería aparecer como se muestra a continuación  
![](https://manage.icewhale.io/api/static/docs/1767617011570_image.png)  

---  

### Iniciar y acceder a ZimaOS  
1. Inicie la máquina virtual de ZimaOS  
2. Haga clic en Consola para acceder a la consola de la VM  
3. Espere a que el sistema termine de arrancar  
4. La dirección IP se mostrará en la consola  
Abra un navegador web e ingrese la dirección IP para acceder a la interfaz de gestión web de ZimaOS.  
![](https://manage.icewhale.io/api/static/docs/1767617057004_image.png)  

---  

## Continúe explorando ZimaOS  

Ahora que ZimaOS está funcionando en su máquina virtual, puede seguir explorando sus características y flujos de trabajo a su propio ritmo.  
Para aprender cómo comenzar con la configuración del sistema, gestión de almacenamiento y despliegue de aplicaciones, por favor visite la siguiente guía:  

👉[Comenzar con ZimaOS](https://www.zimaspace.com/docs/zimaos/Get-Started)  

Esta guía le ayudará a dar los siguientes pasos y aprovechar al máximo su entorno ZimaOS.