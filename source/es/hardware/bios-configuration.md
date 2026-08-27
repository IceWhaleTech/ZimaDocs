---
title: Configuración de la BIOS
seo_title: "Configuración de la BIOS de ZimaCube: orden de arranque, ventiladores y alimentación"
description: "Configura la BIOS de ZimaCube: cómo acceder, cambiar el orden de arranque, ajustar las curvas de ventilación, definir las opciones de alimentación y activar funciones de hardware."
type: Docs
author: Lauren Pan
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

La BIOS de ZimaCube permite controlar el orden de arranque, la velocidad de los ventiladores, el comportamiento de la alimentación y otros ajustes de hardware. La mayoría de los usuarios no necesitará modificarla, pero conviene conocer algunas opciones.

## Entrar en la BIOS

1. Conecta un teclado y un monitor a ZimaCube.
2. Enciende el dispositivo.
3. Pulsa **F11** repetidamente durante la pantalla de arranque hasta que aparezca el menú de inicio.
4. Selecciona **Enter Setup** para abrir la interfaz de la BIOS.

Si F11 no funciona, prueba con **Delete** o **F2**; la tecla exacta depende de la versión de la BIOS.

## Orden de arranque

Si necesitas arrancar desde una unidad USB, por ejemplo para instalar o recuperar el sistema operativo, cambia el orden de arranque:

1. En la BIOS, abre la pestaña **Boot**.
2. Busca **Boot Option Priorities**.
3. Utiliza las teclas +/- para mover el dispositivo USB a la primera posición de la lista.
4. Pulsa **F10** para guardar y salir.

ZimaCube intentará ahora arrancar primero desde el USB. Recuerda restablecer el orden cuando termines o retirar la unidad USB antes de reiniciar.

## Control de los ventiladores

ZimaCube tiene dos ventiladores de sistema. Puedes ajustar su funcionamiento desde la BIOS:

1. Accede a **Advanced > Hardware Monitor**.
2. Busca **CPU Fan Settings** y **System Fan Settings**.
3. Elige un modo:
   - **Standard**: Los ventiladores aumentan de velocidad a medida que sube la temperatura. Es adecuado para el uso diario.
   - **Silent**: Reduce la velocidad de los ventiladores para un funcionamiento más silencioso. Utilízalo si ZimaCube está en una zona habitable y no soporta una carga intensa.
   - **Full Speed**: Proporciona la máxima refrigeración. Utilízalo si ZimaCube se encuentra en un entorno caluroso o funciona con carga constante.
4. Pulsa **F10** para guardar.

## Ajustes de alimentación

- **Restore on AC Power Loss**: Determina qué ocurre después de un corte de corriente. Selecciona **Power On** si quieres que ZimaCube se inicie automáticamente cuando vuelva la alimentación. Consulta la **[guía de encendido automático](./auto-power-on)** para obtener más información.
- **Wake on LAN**: Activa esta opción si quieres encender ZimaCube de forma remota a través de la red. Después de habilitarla en la BIOS, también tendrás que configurarla en ZimaOS. Consulta **[Activar Wake-on-LAN](./enable-wol-on-zimacube)**.

## Configuración del hardware

La mayoría de los ajustes de hardware deben conservar sus valores predeterminados, salvo que exista un motivo concreto para modificarlos:

- **VT-d / Virtualization Technology**: Está activado de forma predeterminada. Déjalo habilitado si vas a ejecutar máquinas virtuales.
- **SATA Mode**: Debe estar configurado como **AHCI**. No lo cambies sin conocer sus consecuencias; pasar al modo RAID sin la configuración adecuada puede hacer que las unidades dejen de ser legibles.
- **Above 4G Decoding**: Permite utilizar dispositivos PCIe de gran tamaño, como las GPU. Actívalo si vas a instalar una tarjeta gráfica dedicada.

Si algún cambio impide que el sistema arranque, consulta la **[guía para restablecer la CMOS](../help-center/resets-cmos)** y restaura los valores predeterminados de la BIOS.
