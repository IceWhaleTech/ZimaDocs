---
title: Comienza con ZimaBoard 2  
description:  
type: “Docs”  
tip: Formato fijo de la barra superior, no eliminar. *description* es la descripción del artículo; si no se rellena, se tomará el primer párrafo del contenido.  
---
## Introducción  
**ZimaBoard 2 — Hackea Nuevas Reglas**  
Un **servidor de placa única de alto rendimiento** diseñado para creadores y makers. Compacto pero potente, puede ser tu **mini NAS**, **servidor doméstico**, **plataforma autohospedada** o **router de software**, y es capaz de realizar inferencia de **IA local** y despliegues en **clúster**.  
Con **doble 2.5GbE**, una ranura **PCIe**, **doble SATA 3.0** y expansión **USB 3.1**, ZimaBoard 2 te permite construir tu propio centro digital privado de alto rendimiento.  

## Características  
- **CPU Intel® N150 de cuatro núcleos**, hasta **3.6 GHz** para un rendimiento ágil.  
- **8GB** o **16GB LPDDR5x** de memoria para multitarea.  
- **32GB** o **64GB eMMC** para un arranque rápido del sistema.  
- **2 × puertos LAN 2.5GbE** para redes de alta velocidad.  
- **2 × SATA 3.0 con alimentación** para conectar directamente HDDs/SSDs de 2.5"/3.5".  
- **2 × USB 3.1** para periféricos y unidades externas de alta velocidad.  
- **1 × ranura PCIe 3.0** para una **NIC 10GbE**, **adaptador NVMe** o una **GPU**.  
- **1 × Mini DisplayPort 1.4**, con soporte de salida **4K@60Hz**.  
- **Refrigeración pasiva sin ventilador** para un funcionamiento silencioso y estable.  

## Interfaz  
![Diagrama de interfaz de ZimaBoard 2—dual 2.5GbE, USB 3.1, MiniDP, alimentación DC, PCIe, SATA.](https://manage.icewhale.io/api/static/docs/1756385752551_image.png)  

## Conectar Almacenamiento y Dispositivos PCIe  
### HDD/SSD SATA 2.5"/3.5"  
- Usa el **cable de datos SATA + cable de alimentación** incluido para conectar la unidad al puerto SATA de la placa.  
- Monta la unidad en un **soporte NAS** adecuado o en una bandeja externa.  
*Consejo: Los **discos de 3.5" dobles** requieren mayor corriente de arranque—asegúrate de contar con una fuente de alimentación estable de **12V/5A**.*  

### Tarjetas de Expansión PCIe  
- Instala una **NIC 10GbE**, un **adaptador NVMe** o una **GPU discreta de bajo consumo** (consulta la lista de compatibilidad de GPU).  
- Si la GPU requiere alimentación externa, prepara los cables adecuados y verifica la capacidad de la PSU (consulta el mismo documento de compatibilidad).  

## Primer Arranque y Red  
- Conecta el **adaptador de corriente** a ZimaBoard 2.  
- Conecta un **cable Ethernet** a tu router o switch.  
<img src="https://manage.icewhale.io/api/static/docs/1756386839952_image.png"
     alt="Parte trasera de ZimaBoard 2 con Ethernet 2.5GbE y alimentación 12V conectados, LED de encendido activo—configuración inicial de mini NAS."
     width="50%" />  
- ZimaBoard 2 **se inicia automáticamente** con **ZimaOS preinstalado** y obtiene una dirección IP de forma automática.  
  - Encuentra la IP en la **lista DHCP de tu router** o en una **pantalla conectada**.  
  - O visita https://find.zimaspace.com/ para descargar **ZimaClient**, escanear y abrir directamente la página del dispositivo.  
  - También está disponible la **App Zima** para facilitar el descubrimiento y gestión del dispositivo.  

## [Iniciar Sesión y Usar ZimaOS](https://www.zimaspace.com/docs/zimaos/Get-Started)  
- Abre la página de inicio de sesión (mediante la IP del dispositivo, ZimaClient o la app).  
- Crea tu cuenta y completa la configuración inicial (idioma, zona horaria, red).  
- Actualiza el sistema a la última versión de ZimaOS para mayor estabilidad y compatibilidad de aplicaciones.  

## Opciones Avanzadas  
- **Instalar sistemas operativos de terceros**: distribuciones Linux, OpenWrt, [UnRAID](https://www.zimaspace.com/docs/zimaboard/Unraid-First-Experience-at-$129-Installation) y más.  
- **Habilitar WOL (Wake on LAN)**: Actívalo en BIOS y en el sistema operativo (consulta el [Tutorial: habilitar WOL](https://www.zimaspace.com/docs/zimaboard/Enable-WOL-on-Zimaboard)).  
- **Usar un módulo Wi-Fi**: Sigue la guía de controladores/configuración para ZimaOS o el sistema que elijas ([Tutorial: guía de usuario AX210](https://www.zimaspace.com/docs/zimaboard/AX210-Wi-Fi)).  
- **Agregar un módulo de refrigeración**: Consulta la guía de instalación del módulo de refrigeración si planeas cargas de trabajo intensivas.  

## Preguntas Frecuentes (FAQ)  
- **¿Cómo recupero o reinstalo ZimaOS?**  
  Consulta la Guía de Recuperación/Reinstalación de ZimaOS para crear un medio de arranque y ejecutar el instalador.  
- **¿Cómo borro/inicializo el CMOS?**  
  Apaga el dispositivo, presiona el botón de reinicio (o retira la batería durante algunos segundos), luego vuelve a conectar la alimentación y carga los valores predeterminados de BIOS. Consulta la Guía de Inicialización de CMOS para más