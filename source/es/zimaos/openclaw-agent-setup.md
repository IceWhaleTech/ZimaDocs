---
title: Cómo desplegar OpenClaw
description: Esta guía explica cómo desplegar OpenClaw en dispositivos CasaOS/ZimaOS, configurar un modelo de IA personalizado, vincular un bot de Telegram y acceder a la interfaz web para gestionar e interactuar con la IA.
type: Docs
author: icewhale123456
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
## 1. Overview

Este tutorial lo guía a través del despliegue de OpenClaw en un dispositivo que ejecuta CasaOS/ZimaOS, completando la configuración básica y habilitando la interacción con el modelo de IA a través de Telegram. Usando un bot de Telegram como ejemplo, este tutorial cubre todo el proceso desde la configuración del proveedor del modelo hasta el emparejamiento del bot.

### 1.1 Goals

- Completar la configuración inicial de OpenClaw, incluyendo:

- Conectar un proveedor de modelo de IA personalizado

- Crear y vincular un bot de Telegram para habilitar el chat con IA mediante mensajes directos

- Ver y gestionar el estado de OpenClaw a través de la interfaz web

### 1.2 Environment

- Especificaciones de hardware recomendadas: 
  - 4 GB de RAM
  - 20 GB de almacenamiento

- Software：CasaOS v0.4.15 / ZimaOS v1.5.4 (última versión)

- Red：El dispositivo debe estar conectado a internet y poder acceder a la API de Telegram. Se recomienda una conexión por cable para mayor estabilidad.

### 1.3 Usage Notes

- **Operación continua:** OpenClaw está diseñado para funcionar 24/7. Coloque su ZimaBlade en un área bien ventilada con temperatura ambiental estable para garantizar un rendimiento confiable a largo plazo y evitar la limitación térmica.

- **Expansión de almacenamiento:** El almacenamiento interno de ZimaBlade es limitado. Si planea usar funciones de memoria o registro extensivamente, se recomienda encarecidamente conectar un disco externo para almacenar el historial de conversaciones y los datos de la aplicación.

### 1.3 Prerequisites

- La dirección IP de su dispositivo, usada para reemplazar el marcador de posición `<ip>` en los comandos.
  
  Consulte el Paso 3 en https://www.zimaspace.com/docs/zimaboard/Power-on-Zimablade para saber cómo encontrarla.

- Una clave API de un modelo de IA y familiaridad básica con su uso.

- Una cuenta de Telegram.

> **Nota:** En la interfaz de configuración de OpenClaw, use la **barra espaciadora** para seleccionar una opción y **Enter** para confirmar.

### 1.4 Steps at a Glance

- Instale OpenClaw desde la App Store de CasaOS / ZimaOS.

- Abra un terminal — conéctese vía SSH (recomendado) o use el terminal local.

- Cambie al modo administrador: ejecute `su` e ingrese la contraseña predeterminada `casaos`.

- Ingrese al contenedor de OpenClaw: `docker exec -it openclaw bash`

- Inicie el asistente de configuración: `node /app/dist/index.js config`

- Configure el proveedor del modelo: seleccione **Model**, elija **custom provider**, luego ingrese la Base URL, API Key y Model ID.

- Configure el canal de Telegram: seleccione **Channels → Configure/link → Telegram**, cree un bot a través de BotFather, ingrese el Token y establezca la política de DM a **Pairing** (recomendado).

- Complete el emparejamiento: envíe `/start` a su bot en Telegram para recibir un código de emparejamiento, luego ejecute `openclaw pairing approve telegram <pairing-code>` en el terminal.

- Acceda a la interfaz web en `https://<ip>:24190?token=casaos`.

---

## 2. Detailed Steps (CasaOs Example)

### 2.1 Open a Terminal 

Después de instalar OpenClaw mediante la interfaz web de CasaOS, abra un terminal para comenzar la configuración. Hay dos maneras de hacerlo:

**A. SSH desde su computadora (recomendado — más fácil copiar y pegar comandos)**

Abra el **Terminal**.
Ejecute el siguiente comando:
```bash
   ssh <username>@<ip>
```
   Por ejemplo: `ssh casaos@10.0.1.7`
   ![Terminal mostrando el comando SSH ingresado](https://manage.icewhale.io/api/static/docs/1773220372637_image.png)
Si es la primera vez que se conecta, verá el mensaje:
```
   Are you sure you want to continue connecting (yes/no)?
```
   Escriba `yes` y presione Enter.

**B. Entrada directamente en ZimaBlade**

Conecte un teclado y monitor directamente al ZimaBlade y use el terminal local.

---

### 2.2 Switch to Administrator Mode

Ejecute el siguiente comando y presione Enter:
```bash
   su
```
Ingrese la contraseña predeterminada `casaos`.

   > La contraseña no se mostrará mientras la escribe — esto es normal.
> Si está usando ZimaOS, no se requiere contraseña.

![Terminal mostrando que el prompt cambió al usuario root](https://manage.icewhale.io/api/static/docs/1773220537700_image.png)

Ahora tiene los privilegios de administrador necesarios para modificar la configuración del sistema.

---

### 2.3 Enter the Configuration Wizard

**Paso 1 — Ingrese al contenedor de OpenClaw:**
```bash
docker exec -it openclaw bash
```
![Prompt del terminal cambiado a root@openclaw:/app](https://manage.icewhale.io/api/static/docs/1773220664655_image.png)

Cuando el prompt cambie a `root@openclaw:/app`, habrá ingresado con éxito al contenedor. Todas las configuraciones posteriores deben realizarse desde dentro de este contenedor. Si sale accidentalmente, ejecute este comando nuevamente.

**Paso 2 — Inicie el asistente de configuración:**
```bash
node /app/dist/index.js config
```
![Pantalla inicial del asistente de configuración](https://manage.icewhale.io/api/static/docs/1773220692606_image.png)


**Paso 3 — Seleccione la ubicación del Gateway:**

Cuando se le pregunte **Where will the Gateway run?**, seleccione **Local (this machine)**.
![Local (this machine) resaltado en el menú de selección](https://manage.icewhale.io/api/static/docs/1773220726788_image.png)

La opción resaltada es la actualmente seleccionada. Presione **Enter** para confirmar.

---

### 2.4 Configure the Model

#### 1. Select a Provider

En **Select sections to configure**, elija **Model**.
  ![Cursor en la opción Model](https://manage.icewhale.io/api/static/docs/1773220763191_image.png)


En **Model / auth provider**, seleccione **custom provider**.
![custom provider resaltado](https://manage.icewhale.io/api/static/docs/1773220810816_image.png)

#### 2. Enter Model Parameters

Ingrese la **Base URL** (por ejemplo, `https://api.openai.com/v1`).
![Campo de entrada de Base URL](https://manage.icewhale.io/api/static/docs/1773220830104_image.png)

Ingrese su **API Key**.
  ![Campo de entrada de API Key](https://manage.icewhale.io/api/static/docs/1773220843480_image.png)

Seleccione el **API format**.
![Menú de selección de API format](https://manage.icewhale.io/api/static/docs/1773220866935_image.png)

Seleccione el **Model ID** que desea usar.
![Lista de selección de Model ID](https://manage.icewhale.io/api/static/docs/1773220891482_image.png)

---

### 2.5 Configure a Channel (Telegram Example)

#### 1. Open Channel Settings

En **Select sections to configure**, elija **Channels**.
![Cursor en la opción Channels](https://manage.icewhale.io/api/static/docs/1773220923167_image.png)


Seleccione **Configure / link**.
![Submenú de Channels mostrando "Telegram: needs token"](https://manage.icewhale.io/api/static/docs/1773220933540_image.png)

Seleccione **Telegram** de la lista.
![Telegram seleccionado en la lista de canales](https://manage.icewhale.io/api/static/docs/1773220953934_image.png)

#### 2. Get a Bot Token

Abra una conversación con **@BotFather** en Telegram y envíe `/newbot` para comenzar a crear un bot.
BotFather le pedirá que proporcione:

 > **Bot Name:** El nombre visible de su bot
**Username:** Un identificador único que debe terminar en `bot` 

Una vez creado, BotFather devolverá un **HTTP API Token** 
![Conversación con BotFather](https://manage.icewhale.io/api/static/docs/1773221077004_image.png)

> **Guarde este Token** — lo necesitará en el siguiente paso.

#### 3. Enter the Bot Token

Seleccione **Enter Telegram bot token**.
![Opción de entrada del token en el menú](https://manage.icewhale.io/api/static/docs/1773221116186_image.png)

Pegue o escriba el Token que recibió de BotFather.
  ![Campo de entrada del Token](https://manage.icewhale.io/api/static/docs/1773221130505_image.png)


#### 4. Set the DM Access Policy

Cuando se le pregunte **Configure DM access policies now? (default: pairing)**, seleccione **Yes**.
![Mensaje de configuración de políticas](https://manage.icewhale.io/api/static/docs/1773221160225_image.png)

En **Telegram DM policy**, seleccione **Pairing (recommended)**.
![Opción Pairing resaltada](https://manage.icewhale.io/api/static/docs/1773221182974_image.png)

Regrese a **Select sections to configure** y elija **Continue (Done)** para finalizar la configuración de Telegram.
  ![Opción Continue (Done) resaltada](https://manage.icewhale.io/api/static/docs/1773221202944_image.png)

#### 5. Complete Pairing

Abra el chat de su bot en Telegram y envíe `/start`. Espere a que el bot responda con un código de emparejamiento.
![Conversación de Telegram mostrando el código de emparejamiento del bot](https://manage.icewhale.io/api/static/docs/1773221237858_image.png)

En el terminal, ejecute el siguiente comando, reemplazando `<your-pairing-code>` con el código recibido:

```bash id="b8c2zg"
   openclaw pairing approve telegram <your-pairing-code>
```

Un mensaje de éxito confirma que el emparejamiento se ha completado. Ahora puede chatear con la IA directamente a través de su bot de Telegram.

---

### 2.6 Access the Web Interface

Una vez completada la configuración, abra un navegador y navegue a:

```
https://<ip>:24190?token=casaos
```

Reemplace `<ip>` con la dirección IP de su dispositivo.
Después de abrir la interfaz web por primera vez, es posible que vea un mensaje **“pairing required”** en el panel del Gateway en lugar de conectarse directamente.
![](https://manage.icewhale.io/api/static/docs/1778125516229_image.png)
Este comportamiento es esperado en las versiones más recientes de OpenClaw. El dispositivo de la interfaz web debe aprobarse primero desde dentro del contenedor.

![](https://manage.icewhale.io/api/static/docs/1778125603653_image.png)

#### 1. Enter the OpenClaw container
Ejecute:
```bash id="rvb5dp"
docker exec -it openclaw bash
```
#### 2. List pending devices
Dentro del contenedor, ejecute:
```bash id="v2i5kv"
node /app/dist/index.js devices list
```
Si existe un dispositivo no emparejado, OpenClaw mostrará un request_id.
#### 3. Approve the device
Ejecute el siguiente comando y reemplace <request_id> con el ID real mostrado arriba:
```bash id="frgqex"
node /app/dist/index.js devices approve <request_id>
```
Después de que la aprobación sea exitosa, actualice la página de la interfaz web y vuelva a conectarse.
La advertencia **“pairing required”** debería desaparecer y el panel se conectará normalmente.
Finalmente, ¡disfrute de OpenClaw!