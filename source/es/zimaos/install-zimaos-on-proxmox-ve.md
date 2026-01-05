---
title: Instalar ZimaOS en Proxmox VE Usando la Imagen ISO  
description:  
type: Docs  
author: icewhale123456  
tip: No elimine el formato fijo de la barra superior. Si no se llena la descripción, se tomará el primer párrafo del contenido.  
---  

**Con el lanzamiento oficial de la **imagen ISO de ZimaOS**, ahora puedes instalar y desplegar ZimaOS más fácilmente en entornos virtualizados como **Proxmox VE (PVE)**.  
Esta imagen ISO está **específicamente optimizada para la instalación en máquinas virtuales**, lo que te permite desplegar ZimaOS sin necesidad de hardware físico y explorar rápidamente sus características principales.  
Este método de instalación es ideal para **pruebas, aprendizaje, evaluación y escenarios de uso liviano**.  

## Introducción  
Instalar ZimaOS en Proxmox VE (PVE) significa ejecutar ZimaOS como una **máquina virtual usando una imagen ISO**, en lugar de instalarlo directamente en hardware físico. Este enfoque te permite experimentar el sistema completo de ZimaOS y la interfaz de gestión basada en la web dentro de un entorno de virtualización estándar.  
Al desplegar ZimaOS en PVE, puedes crear rápidamente una instancia aislada de ZimaOS en tu servidor existente o laboratorio doméstico. En comparación con la instalación en hardware físico, este método ofrece varias ventajas:  
- Configuración más rápida con una curva de aprendizaje más baja  
- Menor riesgo en comparación con la instalación directa en hardware  
- Fácil replicación del entorno con instantáneas y copias de seguridad  
- Asignación flexible de recursos (CPU, memoria, almacenamiento)  
Es especialmente adecuado para **evaluación de características, validación de soluciones y despliegue de servicios ligeros**.  

---

## Requisitos  
Requisitos de Hardware y Entorno  
- Un entorno Proxmox VE (PVE) funcional y accesible  
- Un procesador x86_64 con soporte de virtualización habilitado  
Configuración mínima recomendada:  
- CPU: 2 núcleos o más (se recomiendan 4 núcleos)  
- Memoria: 4 GB o más (se recomiendan 8 GB)  
- Almacenamiento: al menos 32 GB de espacio libre en disco  

Requisitos de Software y Sistema  
- Imagen ISO de instalación de ZimaOS  
- Proxmox VE 6.x / 7.x / 8.x / 9.x  
- Modo de arranque de la máquina virtual: UEFI  
- Tipo de BIOS de la VM: OVMF (UEFI)  

---

## Pasos de Instalación  
Nota:  
La imagen ISO de ZimaOS necesaria para este tutorial se puede descargar desde:  
https://github.com/IceWhaleTech/ZimaOS/releases  

### Subir la Imagen ISO de ZimaOS  
1. Inicia sesión en la interfaz web de Proxmox VE  
2. Navega a **local → Imágenes ISO → Subir**  
![](https://manage.icewhale.io/api/static/docs/1767616598247_copyImage.png)  
3. Selecciona la **imagen ISO de ZimaOS descargada** y haz clic en **Subir**  
![](https://manage.icewhale.io/api/static/docs/1767616612358_image.png)  

### Crear una Máquina Virtual  
1. Haz clic en el botón **Crear VM**  
![](https://manage.icewhale.io/api/static/docs/1767616679913_image.png)  
2. En la página del sistema operativo, selecciona la imagen ISO de ZimaOS  
![](https://manage.icewhale.io/api/static/docs/1767616694612_image.png)  
3. En la página de sistema:  
  - Configura el BIOS en UEFI  
  - Desmarca **Agregar disco EFI**  
![](https://manage.icewhale.io/api/static/docs/1767616715004_image.png)  
4. En la página de **CPU**, ajusta el número de núcleos de CPU  
**Propósito**:  
Asignar más núcleos de CPU mejora el rendimiento multihilo y ayuda a asegurar un funcionamiento fluido bajo carga.  
**Recomendado**: 4 núcleos de CPU o más  
![](https://manage.icewhale.io/api/static/docs/1767616752746_image.png)  
5. En la página de **Memoria**, ajusta el tamaño de la memoria  
**Propósito**:  
Más memoria permite que ZimaOS ejecute servicios adicionales, mejora el rendimiento de multitarea y reduce las caídas durante operaciones frecuentes.  
**Recomendado**: 8 GB (8192 MB) o más  
![](https://manage.icewhale.io/api/static/docs/1767616800421_image.png)  

### Instalar ZimaOS  
1. Después de crear la máquina virtual, haz clic en **Iniciar**  
![](https://manage.icewhale.io/api/static/docs/1767616824433_image.png)  
2. Haz clic en **Consola** para abrir la consola de la máquina virtual  
![](https://manage.icewhale.io/api/static/docs/1767616843275_image.png)  
3. Presiona **Enter** para iniciar el proceso de instalación de ZimaOS  
![](https://manage.icewhale.io/api/static/docs/1767616860449_image.png)  
4. Selecciona **Instalar ZimaOS** y presiona **Enter**  
![](https://manage.icewhale.io/api/static/docs/1767616872278_image.png)  
5. Selecciona el disco de destino para la instalación y presiona **Enter**  
![](https://manage.icewhale.io/api/static/docs/1767616901998_image.png)  
6. Confirma el disco seleccionado eligiendo Sí y presiona Enter  
![](https://manage.icewhale.io/api/static/docs/1767616916757_image.png)  
7. Confirma nuevamente para proceder con la instalación  
![](https://manage.icewhale.io/api/static/docs/1767616933805_image.png)  
8. Cuando la instalación termine, aparecerá la pantalla de finalización  
![](https://manage.icewhale.io/api/static/docs/1767616945992_image.png)  

---

### Eliminar la Imagen ISO  
1. Regresa a la interfaz de Proxmox VE  
2. Selecciona la máquina virtual, elige **CD** y haz clic en **Editar**  
![](https://manage.icewhale.io/api/static/docs/1767616981489_image.png)  
3. Selecciona **No usar ningún medio** y haz clic en **OK**  
![](https://manage.icewhale.io/api/static/docs/1767616998638_image.png)  
4. Después de cambiar, la configuración debería verse como se muestra a continuación  
![](https://manage.icewhale.io/api/static/docs/1767617011570_image.png)  

---

### Iniciar y Acceder a ZimaOS  
1. Inicia la máquina virtual ZimaOS  
2. Haz clic en **Consola** para acceder a la consola de la máquina virtual  
3. Espera a que el sistema termine de arrancar  
4. La dirección IP se mostrará en la consola  
Abre un navegador web e ingresa la dirección IP para acceder a la Interfaz de Gestión Web de ZimaOS.  
![](https://manage.icewhale.io/api/static/docs/1767617057004_image.png)  

---

## Continuar Explorando ZimaOS  

Ahora que ZimaOS está en funcionamiento en tu máquina virtual, puedes seguir explorando sus características y flujos de trabajo a tu propio ritmo.  
Para aprender cómo comenzar con la configuración del sistema, la gestión de almacenamiento y el despliegue de aplicaciones, visita la siguiente guía:  

👉** [Comienza con ZimaOS ](https://www.zimaspace.com/docs/zimaos/Get-Started) **  

Esta guía te ayudará a dar los próximos pasos y aprovechar al máximo tu entorno ZimaOS.  
