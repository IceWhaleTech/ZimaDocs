Aquí está la traducción al español:

---
title: Cómo desplegar OpenClaw  
description: Esta guía explica cómo desplegar OpenClaw en dispositivos CasaOS/ZimaOS, configurar un modelo de IA personalizado, vincular un bot de Telegram y acceder a la interfaz web para gestionar e interactuar con la IA.  
type: Docs  
author: icewhale123456  
tip: El formato fijo en la barra superior no debe eliminarse, la descripción es el resumen del artículo. Si no se rellena, se tomará el primer párrafo del contenido.  
---  

## 1. Visión General  

Este tutorial te guiará a través del proceso de desplegar OpenClaw en un dispositivo que ejecute CasaOS, completar la configuración básica y habilitar la interacción con el modelo de IA a través de Telegram. Usando un bot de Telegram como ejemplo, este tutorial cubre todo el proceso desde la configuración del proveedor del modelo hasta el emparejamiento del bot.

### 1.1 Entorno  

- Software: CasaOS v0.4.15 / ZimaOS v1.5.4 (más reciente)  

- Red: El dispositivo debe estar conectado a internet y ser capaz de acceder a la API de Telegram. Se recomienda una conexión por cable para mayor estabilidad.

### 1.2 Objetivos  

Completar la configuración inicial de OpenClaw, incluyendo:

- Conectar un proveedor de modelo de IA personalizado  

- Crear y vincular un bot de Telegram para habilitar el chat con la IA a través de mensajes directos  

- Ver y gestionar el estado de OpenClaw a través de la interfaz web  

### 1.3 Requisitos Previos  

- La dirección IP de tu dispositivo, que se usará para reemplazar el marcador de posición `<ip>` en los comandos.  
   
  Consulta el paso 3 en https://www.zimaspace.com/docs/zimaboard/Power-on-Zimablade para ver cómo encontrarla.  

- Una clave API del modelo de IA y familiaridad básica con cómo usarla.  

- Una cuenta de Telegram.  

> **Nota:** En la interfaz de configuración de OpenClaw, utiliza la **barra espaciadora** para seleccionar una opción y **Enter** para confirmar.  

### 1.4 Pasos a Primera Vista  

- Instalar OpenClaw desde la tienda de aplicaciones de CasaOS / ZimaOS.  

- Abrir un terminal — conectarse por SSH (recomendado) o usar el terminal de CasaOS.  

- Cambiar al modo administrador: ejecutar `su` e ingresar la contraseña predeterminada `casaos`.  

- Ingresar al contenedor OpenClaw: `docker exec -it openclaw bash`  

- Iniciar el asistente de configuración: `node /app/dist/index.js config`  

- Configurar el proveedor del modelo: seleccionar **Modelo**, elegir **proveedor personalizado**, luego ingresar la URL base, la clave API y el ID del modelo.  

- Configurar el canal de Telegram: seleccionar **Canales → Configurar/vincular → Telegram**, crear un bot a través de BotFather, ingresar el token y establecer la política de DM a **Emparejamiento** (recomendado).  

- Completar el emparejamiento: enviar `/start` a tu bot en Telegram para recibir un código de emparejamiento, luego ejecutar `openclaw pairing approve telegram <pairing-code>` en el terminal.  

- Acceder a la interfaz web en `https://<ip>:24190?token=casaos`.  

---

## 2. Pasos Detallados  

### 2.1 Abrir un Terminal  

Después de instalar OpenClaw a través de la interfaz web de CasaOS, abre un terminal para comenzar la configuración. Hay dos formas de hacerlo:

**A. Conexión SSH desde tu computadora (recomendado — más fácil para copiar y pegar comandos)**  

Presiona **Win + X** en tu computadora para abrir el menú de acceso rápido y selecciona **Terminal**.  
Ejecuta el siguiente comando:  
```bash  
   ssh <username>@<ip>  
```  
   Por ejemplo: `ssh casaos@10.0.1.7`  
   ![Terminal mostrando el comando SSH siendo ingresado](https://manage.icewhale.io/api/static/docs/1773220372637_image.png)  
Si es la primera vez que te conectas, verás el siguiente mensaje:  
```
   ¿Estás seguro de que deseas continuar con la conexión (sí/no)?
```  
   Escribe `sí` y presiona Enter.  

**B. Ingresar directamente en ZimaBlade**  

Conecta un teclado y un monitor directamente al ZimaBlade y usa el terminal local.  

---

### 2.2 Cambiar al Modo Administrador  

Ejecuta el siguiente comando y presiona Enter:  
```bash  
   su  
```  
Ingresa la contraseña predeterminada `casaos`.  
   > La contraseña no se mostrará mientras la escribes — esto es normal.  

![Terminal mostrando que el prompt ha cambiado a usuario root](https://manage.icewhale.io/api/static/docs/1773220537700_image.png)  

Ahora tienes privilegios de administrador para modificar la configuración del sistema.  

---

### 2.3 Ingresar al Asistente de Configuración  

**Paso 1 — Ingresar al contenedor OpenClaw:**  
```bash  
docker exec -it openclaw bash  
```  
![Prompt del terminal cambiado a root@openclaw:/app](https://manage.icewhale.io/api/static/docs/1773220664655_image.png)  

Cuando el prompt cambie a `root@openclaw:/app`, habrás ingresado al contenedor correctamente. Toda la configuración posterior debe realizarse desde dentro de este contenedor. Si sales accidentalmente, simplemente ejecuta este comando nuevamente.

**Paso 2 — Iniciar el asistente de configuración:**  
```bash  
node /app/dist/index.js config  
```  
![Pantalla inicial del asistente de configuración](https://manage.icewhale.io/api/static/docs/1773220692606_image.png)

**Paso 3 — Seleccionar la ubicación del Gateway:**  

Cuando se te pregunte **¿Dónde se ejecutará el Gateway?**, selecciona **Local (este dispositivo)**.  
![Opción "Local (este dispositivo)" resaltada en el menú de selección](https://manage.icewhale.io/api/static/docs/1773220726788_image.png)  

La opción resaltada es la seleccionada actualmente. Presiona **Enter** para confirmar.

---

### 2.4 Configurar el Modelo  

#### 1. Seleccionar un Proveedor  

En **Seleccionar secciones para configurar**, elige **Modelo**.  
  ![Cursor sobre la opción Modelo](https://manage.icewhale.io/api/static/docs/1773220763191_image.png)

En **Proveedor de modelo / autenticación**, selecciona **proveedor personalizado**.  
![Proveedor personalizado resaltado](https://manage.icewhale.io/api/static/docs/1773220810816_image.png)

#### 2. Ingresar los Parámetros del Modelo  

Ingresa la **URL base** (ejemplo: `https://api.openai.com/v1`).  
![Campo de entrada para la URL base](https://manage.icewhale.io/api/static/docs/1773220830104_image.png)

Ingresa tu **clave API**.  
  ![Campo de entrada para la clave API](https://manage.icewhale.io/api/static/docs/1773220843480_image.png)

Selecciona el **formato API**.  
![Menú de selección de formato API](https://manage.icewhale.io/api/static/docs/1773220866935_image.png)

Selecciona el **ID del modelo** que deseas usar.  
![Lista de selección de ID de modelo](https://manage.icewhale.io/api/static/docs/1773220891482_image.png)

---

### 2.5 Configurar un Canal (Ejemplo con Telegram)  

#### 1. Abrir la Configuración del Canal  

En **Seleccionar secciones para configurar**, elige **Canales**.  
![Cursor sobre la opción Canales](https://manage.icewhale.io/api/static/docs/1773220923167_image.png)

Selecciona **Configurar / vincular**.  
![Submenú de Canales mostrando el estado "Telegram: necesita token"](https://manage.icewhale.io/api/static/docs/1773220933540_image.png)

Selecciona **Telegram** de la lista.  
![Telegram seleccionado en la lista de canales](https://manage.icewhale.io/api/static/docs/1773220953934_image.png)

#### 2. Obtener un Token para el Bot  

Abre una conversación con **@BotFather** en Telegram y envía `/newbot` para comenzar a crear un bot.  
BotFather te pedirá que proporciones:

 > **Nombre del Bot:** El nombre que verá la gente  
**Usuario:** Un identificador único que debe terminar en `bot`

Una vez creado, BotFather te dará un **Token de API HTTP**  
![Conversación con BotFather](https://manage.icewhale.io/api/static/docs/1773221077004_image.png)

> **Guarda este Token** — lo necesitarás en el siguiente paso.

#### 3. Ingresar el Token del Bot  

Selecciona **Ingresar token de Telegram bot**.  
![Opción para ingresar el token en el menú](https://manage.icewhale.io/api/static/docs/1773221116186_image.png)

Pega o escribe el Token recibido de BotFather.  
  ![Campo de entrada para el token](https://manage.icewhale.io/api/static/docs/1773221130505_image.png)

#### 4. Configurar la Política de Acceso de DM  

Cuando se te pregunte **¿Configurar las políticas de acceso DM ahora? (predeterminado: emparejamiento)**, selecciona **Sí**.  
![Pantalla de configuración de política](https://manage.icewhale.io/api/static/docs/1773221160225_image.png)

En **Política de DM en Telegram**, selecciona **Emparejamiento (recomendado)**.  
![Opción Emparejamiento resaltada](https://manage.icewhale.io/api/static/docs/1773221182974_image.png)

Regresa a **Seleccionar secciones para configurar** y elige **Continuar (Listo)** para terminar la configuración de Telegram.  
  ![Opción Continuar (Listo) resaltada](https://manage.icewhale.io/api/static/docs/1773221202944_image.png)

#### 5. Completar el Emparejamiento  

Abre el chat con tu bot en Telegram y envía `/start`. Espera a que el bot te devuelva un código de emparejamiento.  
![Conversación de Telegram mostrando la respuesta con el código de emparejamiento del bot](https://manage.icewhale.io/api/static/docs/1773221237858_image.png)

En el terminal, ejecuta el siguiente comando, reemplazando `<your-pairing-code>` con el código que recibiste:  

```bash id="anp87w"
   openclaw pairing approve telegram <your-pairing-code>  
```  

Un mensaje de éxito confirmará que el emparejamiento se completó. Ahora puedes chatear directamente con la IA a través de tu bot de Telegram.  

---

### 2.6 Acceder a la Interfaz Web  

Una vez completada la configuración, abre un navegador y navega a:  

```
https://<ip>:24190?token=casaos  
```

Reemplaza `<ip>` con la dirección IP de tu dispositivo. Esta página te permite ver el estado de ejecución de OpenClaw, los registros y la configuración actual.  

¡Finalmente, disfruta de OpenClaw!