---
title: Guía de reemplazo de la placa posterior del ZimaCube
description: "Guía paso a paso para retirar y reemplazar la placa posterior de discos duros del ZimaCube, incluyendo herramientas, notas de seguridad, manejo de los cables planos y verificación posterior."
type: Docs
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Esta guía se aplica a la serie ZimaCube y explica cómo retirar y reemplazar la placa posterior de los discos duros. Siga los pasos en orden; para volver a montar, invierta los pasos de desmontaje.

## Herramientas que necesitará

- Destornillador Phillips M3 (para los tornillos de la placa posterior y del soporte)
- Llave hexagonal H2 (para los tornillos de los paneles laterales)
- Pinzas o una espátula de plástico (recomendado, para hacer palanca en el panel con clip y despegar la cinta negra)

## Notas importantes

{% note warn Apague y descargue la energía %}
Antes de reemplazar la placa posterior, apague el dispositivo y desconecte el cable de alimentación. Espere unos 30 segundos para que se descargue la energía residual y evitar descargas eléctricas o daños en los componentes.
{% endnote %}

{% note warn Protección contra ESD %}
Toque una superficie metálica o use una pulsera antiestática antes de manipular los componentes para evitar dañar la placa posterior.
{% endnote %}

- Los tornillos de distintas ubicaciones pueden tener longitudes diferentes. Manténgalos ordenados para que cada uno vuelva al lugar correcto.
- Los cables planos (FPC) son frágiles. Despegue la cinta, levante los pestillos y conecte o desconecte con suavidad para evitar rasgar el cable o romper un pestillo.
- Al conectar o desconectar, sujete el conector en sí. Nunca tire de los cables.
- Los cables planos solo se insertan en una orientación. Tome una foto para registrar la orientación antes de retirarlos, alinee con la muesca al reinstalar y nunca fuerce un conector que no encaje.

## Pasos de desmontaje

### 1. Apague y retire las unidades

1. Apague el dispositivo y desconecte el cable de alimentación.
2. Retire todas las bandejas de discos (incluida la de la séptima bahía) y déjelas a un lado de forma segura.

![Estructura interna del ZimaCube con las bandejas de discos y el disipador visibles](/images/zimacube-backplane-replacement/remove-drives.webp)

### 2. Retire los paneles laterales y abra la tapa superior

1. Retire los tornillos de fijación de ambos lados del chasis (4 por lado).

![Tornillos laterales marcados con recuadros rojos](/images/zimacube-backplane-replacement/side-screws.webp)

2. Abra la tapa superior.
3. Levante los paneles laterales hacia arriba para dejar espacio para acceder a los cables más adelante.

### 3. Retire el panel trasero y el soporte

1. El panel trasero está montado con clips. Simplemente haga palanca para abrirlo y retírelo.

![Panel trasero retirado, dejando ver los ventiladores](/images/zimacube-backplane-replacement/rear-panel.webp)

2. Retire los 6 tornillos del soporte trasero (ubicados detrás del panel con clip, que fijan los ventiladores y la placa posterior) y desconecte los dos conectores de los ventiladores.

![Tornillos del soporte trasero y conectores de los ventiladores marcados](/images/zimacube-backplane-replacement/bracket-screws.webp)

### 4. Desconecte el cable de alimentación de la placa posterior

1. Desconecte el cable de alimentación de la placa posterior en el lado izquierdo.

![Cable de alimentación de la placa posterior marcado con un recuadro rojo](/images/zimacube-backplane-replacement/power-cable.webp)

### 5. Retire los cables planos

1. Despegue con cuidado la cinta negra de los cables planos.
2. Levante los pestillos de ambos conectores de cables planos uno a la vez y, a continuación, tire suavemente de los cables.
3. Ambos extremos de cada cable se manipulan de la misma manera. Mantenga la orientación (el conector tiene una muesca) y alinee con la muesca al reinstalar.

![Conectores de cables planos de la placa posterior etiquetados BP CON1, 2P y 8P](/images/zimacube-backplane-replacement/flat-cables.webp)

### 6. Retire la placa posterior antigua

1. Retire los 3 tornillos de la placa posterior.

![Los tres tornillos de la placa posterior marcados con recuadros rojos](/images/zimacube-backplane-replacement/remove-backplane.webp)

2. Levante suavemente la placa posterior antigua.

## Instale la nueva placa posterior

### 1. Instale la nueva placa posterior y vuelva a conectar los cables

1. Coloque la nueva placa posterior en su posición y alinee los orificios de los tornillos.
2. Fíjela con los 3 tornillos de la placa posterior.
3. Vuelva a conectar los cables planos: conecte los cables CON1 y CON2 en sus ranuras correspondientes, haciendo coincidir las etiquetas de la placa posterior y la placa base. Alinee con la muesca, inserte, presione el pestillo y vuelva a aplicar la cinta negra.

> Cómo distinguir los dos cables (vea las figuras siguientes): CON1 es el cable más largo y CON2 el más corto, cada uno etiquetado en el cable. El extremo marcado "BP" se conecta a la placa posterior y el extremo marcado "MB" a la placa base.

{% note info Los cables planos son universales %}
Los cables planos son universales y funcionan tanto con los Cube de primera como de segunda generación.
{% endnote %}

![Ranuras de la placa posterior etiquetadas BP CON1 y BP CON2](/images/zimacube-backplane-replacement/con1-con2-slots.webp)

![Posiciones de conexión de CON1 y CON2 en la placa base](/images/zimacube-backplane-replacement/con1-con2-positions.webp)

![Los dos cables planos con los extremos BP y MB etiquetados](/images/zimacube-backplane-replacement/con1-con2-cables.webp)

### 2. Vuelva a montar en orden inverso

1. Vuelva a conectar el cable de alimentación de la placa posterior en el lado izquierdo.
2. Vuelva a instalar el soporte trasero, vuelva a conectar los dos cables de los ventiladores y apriete los 6 tornillos.
3. Vuelva a encajar el panel trasero con clip.
4. Vuelva a instalar los dos paneles laterales.
5. Vuelva a colocar la tapa superior.
6. Apriete los tornillos de ambos lados del chasis (4 por lado).
7. Vuelva a instalar todas las bandejas de discos (incluida la de la séptima bahía).

### 3. Encienda y verifique

Conecte la alimentación, encienda y confirme que los ventiladores giran con normalidad y que todas las bahías se detectan correctamente.

Ejecute `lspci` en la terminal: si ve las dos partes marcadas en la imagen siguiente, el reemplazo se ha realizado correctamente.

![Salida de terminal de lspci mostrando los dispositivos ASMedia](/images/zimacube-backplane-replacement/lspci-verify.webp)
