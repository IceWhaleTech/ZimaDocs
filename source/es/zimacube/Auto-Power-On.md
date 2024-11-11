---
title: Solución de Encendido Automático para ZimaCube
description:
type: “Docs”
tip: La barra superior tiene un formato fijo, no lo elimine, la descripción es para el artículo, si no se completa, se tomará el primer párrafo del contenido.
---
# Descripción del Requerimiento
Actualmente, ZimaCube requiere presionar el botón de encendido para iniciar después de ser conectado. Algunos usuarios desean una función de inicio automático al suministrar energía.

# Solución
Modificar los pines del jumper de la placa base.

# Pasos Detallados
## Paso 1: Asegúrese de que ZimaCube esté apagado y desconectado

## Paso 2: Abra la tapa superior de ZimaCube
![](https://manage.icewhale.io/api/static/docs/1722413156672_image.png)

## Paso 3: Localice AUTO-PWR1
![](https://manage.icewhale.io/api/static/docs/1722413204344_image.png)

## Paso 4: Modificar los pines del jumper
Mueva la posición de la tapa del jumper. Los dos pines cerca de AUTO indican la necesidad de presionar el botón de encendido después de enchufar, mientras que los dos pines cerca de PWR1 indican el inicio automático al enchufar.

A continuación se muestra la posición que requiere presionar el botón de encendido para iniciar después de apagarse:
![](https://manage.icewhale.io/api/static/docs/1722413242930_image.png)

A continuación se muestra la posición para el inicio automático después de enchufar:
![](https://manage.icewhale.io/api/static/docs/1722413266760_image.png)
Puede modificar la posición de acuerdo a sus necesidades.