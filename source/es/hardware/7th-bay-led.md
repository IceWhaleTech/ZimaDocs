---
title: 7º Bay LED
description:
type: “Docs”
tip: El formato fijo de la barra superior no debe ser eliminado, la descripción es para el artículo, si no se llena se cortará el texto en el primer párrafo.
---
# Introducción
## Visión General del Proyecto
El ZimaCube 7º Bay está diseñado no solo para proporcionar capacidades esenciales de expansión SSD para dispositivos de gama alta, sino también para aportar una mayor sensación de vitalidad a la computación en el hogar mediante iluminación personalizable. La integración de una iluminación personalizable abre un mundo de posibilidades: utiliza la tira de luces del 7º Bay para indicar el estado del sistema, mostrar las velocidades de transferencia de datos, indicar el progreso de las descargas, señalar la actividad de inteligencia artificial local o incluso sincronizar con la música de tu escritorio.

Para realizar estas ideas, el ZimaCube 7º Bay se basa en el microcontrolador ESP32 de Espressif Systems. Las capacidades de Bluetooth y WiFi a bordo permiten el control independiente de la iluminación a través de ZimaOS u otros dispositivos IoT. El ESP32 se dedica exclusivamente al control de las luces y está aislado de todas las funciones de red y almacenamiento del ZimaCube. Además, el ESP32 sirve como un pequeño servidor web, ofreciendo actualizaciones de firmware OTA (Over The Air) para personalizar los efectos de luz.
### Personalizando la Iluminación del ZimaCube 7º Bay
Hay dos maneras de personalizar los efectos de luz del ZimaCube 7º Bay:
1. Usando el protocolo de firmware oficial para controlar la luz DIY escribiendo scripts en ZimaOS.
2. Desarrollando tu propio firmware y protocolo ESP32 para el control total de la tira de luces del 7º Bay.
### Ventajas y Desventajas de Cada Método:
**Método 1**:
- Ventajas: Implementación simple y rápida, utiliza características existentes, bajo riesgo.
- Desventajas: Funcionalidad y rendimiento limitados.

**Método 2**:
- Ventajas: Control total, alta flexibilidad, operación independiente, rendimiento optimizado.
- Desventajas: Alta dificultad de desarrollo, largo ciclo de desarrollo.
# Cómo Escribir un Script para Control de Luz
### Introducción al Protocolo de Firmware del 7º Bay
**Conexión WiFi**: El ESP32 crea una red WiFi a la que se conecta ZimaOS para control remoto y actualizaciones OTA.

**Control JSON**: Controla los efectos de luz utilizando comandos JSON, proporcionando flexibilidad y fácil personalización.

**Actualizaciones OTA**: Admite actualizaciones OTA, permitiendo actualizaciones de firmware sin acceso físico al dispositivo.

**Varios Efectos de Luz**: Soporta múltiples efectos de luz predefinidos, como efecto de respiración, modo de luz constante, modo personalizado, etc.

### Métodos de Control de Luz
**Conectándose al Wi-Fi de ZimaCube**
1. Conéctate a la red Wi-Fi:
- - Nombre de Wi-Fi: "ZimaCube"
- - Contraseña de Wi-Fi: "homecloud"

**Usando el Selector de Color**
Para facilitar la selección de colores, utiliza la siguiente herramienta de selección de color en línea: [Selector de Color en Línea](https://www.w3schools.com/colors/colors_picker.asp).

**Pasos**:
1. Abre el Selector de Color en Línea.
2. Usa el ratón para seleccionar el color deseado.
3. Los valores correspondientes de HSV (Tono, Saturación, Valor) se mostrarán en la interfaz del selector de color.
4. Registra estos valores de HSV y conviértelos a un rango adecuado para datos JSON:
- - **Tono (H)**: h = (Valor del tono / 360) * 255
- - **Saturación (S)**: s = (Valor de saturación / 100) * 255
- - **Valor (V)**: v = (Valor / 100) * 255

**Ejemplo**:
Seleccionar naranja en el selector de color proporciona los siguientes valores de HSV:
- **Tono (H)**: 30
- **Saturación (S)**: 100
- **Valor (V)**: 100

Valores convertidos:
- **Tono (H)**: h = (30 / 360) * 255 ≈ 21
- **Saturación (S)**: s = 255
- **Valor (V)**: v = 255

Aplica estos valores a los datos JSON para el control de luz.

**Modos de Control**
**Modo 1: Modo de Respiración**
En el modo de respiración, la tira de luces muestra un efecto de gradiente de un solo color. Ajusta la velocidad y los parámetros de color para controlar el efecto.
- **Velocidad**: Rango 0 ~ 10
- **Parámetros de Color**:
- - **Tono (H)**: Rango 0 ~ 255
- - **Saturación (S)**: Rango 0 ~ 255
- - **Valor (V)**: Rango 0 ~ 255

**Ejemplo de Datos JSON**:
```language
{
  "id": 1,  // ID para el modo de respiración
  "speed": 4,  // Velocidad de la transición de color, rango 0-10
  "data": [
    {"h": 21, "s": 255, "v": 255}
  ]
}
```
*** Enviando Datos al ESP32:***

1. El ESP32 crea una red WiFi predeterminada a la que se conecta ZimaOS. Verifica la conexión con:
```language
ping 172.16.1.1
```
2. Envía una solicitud HTTP POST a `172.16.1.1` con los datos JSON:
```language
curl -X POST -H "Content-Type: application/json" -d @yourfile.json http://172.16.1.1/post
```
3. Verifica el efecto de la iluminación.

**Modo 2: Modo de Luz Constante**
En el modo de luz constante, la tira de luces permanece de un solo color.

**Parámetros de Color:**
- **Tono (H)**: Rango 0 ~ 255
- **Saturación (S)**: Rango 0 ~ 255
-** Valor (V)**: Rango 0 ~ 255

**Ejemplo de Datos JSON**:
```language
{
  "id": 2,
  "data": [
    {"h": 21, "s": 255, "v": 255}
  ]
}
```
*** Enviando Datos al ESP32:***

1. El ESP32 crea una red WiFi predeterminada a la que se conecta ZimaOS. Verifica la conexión con:

```language
ping 172.16.1.1
```

2. Envía una solicitud HTTP POST a `172.16.1.1` con los datos JSON:

```language
curl -X POST -H "Content-Type: application/json" -d @yourfile.json http://172.16.1.1/post
```

3. Verifica el efecto de la iluminación.

**Modos 3 y 4**
- En desarrollo.

**Modo 5: Modo Personalizado**
En el modo personalizado, puedes controlar el color y el brillo de cada luz individualmente.

- Parámetros de Color:
- - Tono (H): Rango 0 ~ 255
- - Saturación (S): Rango 0 ~ 255
- - Valor (V): Rango 0 ~ 255

**Ejemplo de Datos JSON**:
```language
{
  "id": 5,  // ID para el modo personalizado
  "data": [
    // Cada objeto representa la configuración de color y brillo para una luz
    {"h": 0, "s": 255, "v": 255},  // Luz 1 Roja
    {"h": 85, "s": 255, "v": 255},  // Luz 2 Verde
    {"h": 168, "s": 255, "v": 255},  // Luz 3 Azul
    {"h": 42, "s": 255, "v": 255},  // Luz 4 Amarilla
    {"h": 212, "s": 255, "v": 255},  // Luz 5 Púrpura
    {"h": 128, "s": 255, "v": 255},  // Luz 6 Cian
    {"h": 21, "s": 255, "v": 255},  // Luz 7 Naranja
    {"h": 128, "s": 255, "v": 255},  // Luz 8 Cian
    {"h": 212, "s": 255, "v": 255},  // Luz 9 Púrpura
    {"h": 42, "s": 255, "v": 255},  // Luz 10 Amarilla
    {"h": 168, "s": 255, "v": 255},  // Luz 11 Azul
    {"h": 85, "s": 255, "v": 255},   // Luz 12 Verde
    {"h": 0, "s": 255, "v": 255}   // Luz 13 Roja
  ]
}
```
*** Enviando Datos al ESP32:***

1. El ESP32 crea una red WiFi predeterminada a la que se conecta ZimaOS. Verifica la conexión con:

```language
ping 172.16.1.1
```

2. Envía una solicitud HTTP POST a `172.16.1.1` con los datos JSON:

```language
curl -X POST -H "Content-Type: application/json" -d @yourfile.json http://172.16.1.1/post
```

3. Verifica el efecto de la iluminación.
# Cómo Desarrollar Tu Propio Firmware para el 7º Bay
### Introducción
Utilizando un ordenador con Windows, demostramos cómo desarrollar tu propio firmware ESP32 y efectos de luz, así como cómo cargar tu nuevo firmware.

### Requisitos de Hardware
- ZimaCube's 7º Bay
- Cable de datos tipo C
- Ordenador con Windows

### Información del Hardware
- Número de LEDs: 13
- GPIO 2: Conecta a la línea de datos de la tira de LED WS2812B
- 5V y GND: Conecta a la alimentación y tierra de la placa de desarrollo ESP32

### Detalles del ESP32:
- Diagrama de Bloques del ESP32: [Descargar](https://github.com/IceWhaleTech/7th-bay/blob/main/Hardware/ESP32-C3Dimensions.png)
- Esquema del ESP32: [Descargar](https://github.com/IceWhaleTech/7th-bay/blob/main/Hardware/ESP32_C3Schematic.png)
- Archivos de Altium Designer del ESP32: [Descargar](https://github.com/IceWhaleTech/7th-bay/blob/main/Hardware/Super%20Mini-ESP32C3-Form%20Factor.PcbDoc)
### Guía de Uso
**Requisitos del Sistema**
- Sistema Operativo: Windows 10
- Herramientas Necesarias: Arduino IDE

**Pasos de Instalación**
1. Instala Arduino IDE: [Descargar](https://www.arduino.cc/en/software)

2. Instala la Placa ESP32
![](https://manage.icewhale.io/api/static/docs/1727168990232_image.png)
3. Descarga e instala las bibliotecas:
- Adafruit_NeoPixel
- ArduinoJson
- Metro
- Colócalas en la carpeta de bibliotecas de tu instalación de Arduino IDE.

**Configuración de Desarrollo**
1. Abre Arduino IDE.
2. Selecciona la placa: Herramientas -> Placa -> ESP32 -> Módulo de Desarrollo ESP32C3
3. Selecciona el puerto correcto: Herramientas -> Puerto
4. Compila y carga el código al ESP32: Haz clic en el botón de Cargar
5. Resultado de carga exitosa:
![](https://manage.icewhale.io/api/static/docs/1727169097528_image.png)

**Tutorial de Actualización OTA**
1. Conéctate a WiFi
- - Conecta tu ordenador a la red WiFi:
- - - Nombre: "ZimaCube"
- - - Contraseña: "homecloud"
2. Ingresa la URL
- - Abre un navegador y ve a `172.16.1.1`
3. Carga el Firmware
- - Obtén el firmware de la siguiente dirección: [Descarga del Firmware](https://github.com/IceWhaleTech/7th-bay/tree/main/Firmware)