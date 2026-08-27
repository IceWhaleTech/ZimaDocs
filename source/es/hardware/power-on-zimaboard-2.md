---
title: Primeros pasos con ZimaBoard 2
description: "Desembala y configura tu servidor de placa única ZimaBoard 2. Incluye una descripción del hardware, el primer arranque, la conexión de periféricos y el acceso al panel del sistema."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
## Introducción
**ZimaBoard 2 — Crea nuevas reglas**
Un **servidor de placa única de alto rendimiento** diseñado para makers y creadores. Compacto pero potente, puede funcionar como **mini NAS**, **servidor doméstico**, **plataforma autoalojada** o **router por software**, y permite ejecutar inferencia de **IA local** y despliegues en **clúster**.
 Con **doble 2.5GbE**, una ranura **PCIe**, **doble SATA 3.0** y expansión **USB 3.1**, ZimaBoard 2 te permite construir tu propio centro digital privado de alto rendimiento.

 ## Características
- **CPU Intel® N150 de cuatro núcleos**, hasta **3.6 GHz** para ofrecer un rendimiento ágil.
- **8GB** o **16GB de memoria LPDDR5x** para gestionar varias tareas.
- **32GB** o **64GB de eMMC** para un arranque rápido del sistema.
- **2 puertos LAN 2.5GbE** para conexiones de red de alta velocidad.
- **2 conexiones SATA 3.0 con alimentación** para conectar directamente HDD/SSD de 2.5"/3.5".
- **2 puertos USB 3.1** para periféricos y unidades externas de alta velocidad.
- **1 ranura PCIe 3.0** para una **NIC de 10GbE**, un **adaptador NVMe** o una **GPU**.
- **1 Mini DisplayPort 1.4**, compatible con salida **4K@60Hz**.
- **Refrigeración pasiva sin ventilador** para un funcionamiento silencioso y estable.

## Interfaces
![Diagrama de interfaces de ZimaBoard 2: doble 2.5GbE, USB 3.1, MiniDP, alimentación de CC, PCIe y SATA.](https://manage.icewhale.io/api/static/docs/1756795953605_zimaboard2-interface-pinout.png)


## Conectar almacenamiento y dispositivos PCIe
### HDD/SSD SATA de 2.5"/3.5"
- Utiliza el **cable de datos SATA + cable de alimentación** incluidos para conectar la unidad al puerto SATA de la placa.
- Instala la unidad en un **soporte NAS** adecuado o en una bandeja externa.
<mark>*Consejo: dos unidades de **3.5"** requieren una corriente de arranque mayor; utiliza una fuente de alimentación **estable de 12V/5A**.*</mark>
### Tarjetas de expansión PCIe
- Instala una **NIC de 10GbE**, un **adaptador NVMe** o una **GPU discreta de bajo consumo** (consulta la lista de compatibilidad de GPU para obtener más información).
- Si la GPU requiere alimentación externa, prepara los cables adecuados y comprueba que la fuente tenga capacidad suficiente (consulta el mismo documento de compatibilidad).

## Primer arranque y red
- Conecta el **adaptador de corriente** a ZimaBoard 2.
- Conecta un **cable Ethernet** al router o switch.
<img src="https://manage.icewhale.io/api/static/docs/1756796033890_zimaboard2-power-network.png"
     alt="E/S trasera de ZimaBoard 2 con Ethernet 2.5GbE y alimentación de 12V conectadas, y LED de encendido iluminado durante la configuración inicial del mini NAS."
     width="50%" />

- ZimaBoard 2 **arranca automáticamente** con **ZimaOS preinstalado** y obtiene una dirección IP de forma automática.
  - Visita https://www.zimaspace.com/zimaos/download para descargar **ZimaClient**, buscar el dispositivo y abrir directamente su página.
  - También puedes encontrar la IP en la **lista DHCP del router** o en una **pantalla** conectada.
  - La **aplicación Zima** también está disponible para facilitar la detección y gestión del dispositivo.

## [Iniciar sesión y usar ZimaOS](../zimaos/get-started)
- Abre la página de inicio de sesión mediante la IP del dispositivo, ZimaClient o la aplicación.
- Crea tu cuenta y completa la configuración inicial: idioma, zona horaria y red.
- Actualiza el sistema a la última versión de ZimaOS para obtener la máxima estabilidad y compatibilidad con aplicaciones.

## Opciones más avanzadas
- **Instalar un sistema operativo de terceros**: distribuciones Linux, OpenWrt, [UnRAID](./unraid-install) y otros.
- **Activar WOL (Wake on LAN)**: actívalo en la BIOS y en el sistema operativo (consulta el [tutorial para activar WOL](./wake-on-lan-setup)).
- **Usar un módulo Wi-Fi**: sigue la guía de controladores y configuración para ZimaOS o el sistema operativo que elijas ([tutorial: guía del usuario de AX210](./ax210-wifi-6e)).
- **Añadir un módulo de refrigeración**: consulta la guía de instalación del módulo de refrigeración si vas a ejecutar cargas de trabajo intensivas.
-  **Descargar el modelo 3D**: [Google Drive](https://drive.google.com/file/d/1paE2loHLjRjftefT0xsKo4lIFok9-Itc/view?usp=sharing)

## Preguntas frecuentes
- **¿Cómo recupero o reinstalo ZimaOS?**
 Consulta la guía de recuperación/reinstalación de ZimaOS para crear un medio de arranque y ejecutar el instalador.
- **¿Cómo borro o inicializo la CMOS?**
 Apaga el dispositivo, pulsa el botón de reinicio —o retira la batería durante unos segundos—, vuelve a conectar la alimentación y carga los valores predeterminados de la BIOS. Consulta la guía de inicialización de la CMOS para obtener más detalles.
