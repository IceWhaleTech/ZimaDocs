---
title: Solución de encendido automático para ZimaCube
description: "Configura ZimaCube para que se encienda automáticamente después de un corte de corriente mediante este procedimiento paso a paso desde la BIOS."
type: Docs
author: Lauren Pan
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

De forma predeterminada, ZimaCube espera a que pulses el botón de encendido después de conectarlo. Si quieres que se inicie automáticamente —por ejemplo, porque está guardado en un armario o porque debe recuperarse tras un corte de corriente— puedes configurarlo de dos maneras.

Esta guía explica el método de la BIOS. Si tu BIOS no incluye la opción **Restore on AC Power Loss**, utiliza el **[método con puente](./auto-power-on-setup)**.

## Método desde la BIOS

1. Apaga ZimaCube y conecta un teclado y un monitor.
2. Enciéndelo y pulsa **F11** repetidamente durante el arranque para abrir el menú de inicio. A continuación, selecciona **Enter Setup** para entrar en la BIOS.
3. Utiliza las teclas de dirección para acceder a la pestaña **Advanced**.
4. Busca **Restore on AC Power Loss** o una opción con un nombre parecido. Su ubicación exacta depende de la versión de la BIOS; normalmente se encuentra en Advanced > Power Management o Advanced > Chipset Configuration.
5. Cambia el ajuste a **Power On**.
6. Pulsa **F10** para guardar y salir.

Después de guardar, desconecta el cable de alimentación, espera unos segundos y vuelve a conectarlo. ZimaCube debería iniciarse automáticamente sin necesidad de pulsar el botón de encendido.

Si no encuentras la opción **Restore on AC Power Loss**, es posible que tu versión de la BIOS no la incluya. En ese caso, utiliza el método con puente enlazado anteriormente; funciona en todos los modelos de ZimaCube.

## Cuándo utilizar cada método

- **Método desde la BIOS**: Es más rápido y no requiere abrir la carcasa. Funciona en la mayoría de las unidades ZimaCube distribuidas después de mediados de 2024.
- **Método con puente**: Funciona en todos los modelos de ZimaCube, independientemente de la versión de la BIOS. Requiere abrir la cubierta superior y mover un pequeño puente de plástico en la placa base.
