---

title: Carpeta de Cifrado en ZimaOS  
Descripción: Aprende cómo la Carpeta de Cifrado de ZimaOS protege tus datos privados con cifrado AES-256-GCM, el sistema de archivos Zima-OFS y un diseño avanzado de seguridad tanto para principiantes como para desarrolladores.  
type: Documentos  
author: icewhale123456  
tip: El formato fijo en la barra superior no debe ser eliminado, la descripción es el resumen del artículo, si no se completa, se tomará el primer párrafo del contenido como descripción.  
---

## Carpeta de Cifrado en ZimaOS  
A partir de la **v1.5.4**, ZimaOS ofrece una poderosa función de **Carpeta de Cifrado** diseñada para proteger tus datos más sensibles.  
Este documento explica qué es la carpeta de cifrado, por qué es segura y cómo ZimaOS garantiza la privacidad por diseño, ofreciéndote una visión clara de la tecnología e ingeniería detrás de ella.

## ¿Qué es una Carpeta de Cifrado?  
La **Carpeta de Cifrado** en ZimaOS es una solución integral que equilibra **protección de la privacidad**, **eficiencia en el rendimiento** y **flexibilidad de ingeniería**.

Permite almacenar datos altamente sensibles, como documentos personales, copias de seguridad, credenciales o archivos confidenciales de proyectos, en un espacio protegido sin preocuparse por accesos no autorizados o ataques por fuerza bruta.

![Imagen de Vista General de la Carpeta de Cifrado](https://manage.icewhale.io/api/static/docs/1766562591795_image.png)

## ¿Por qué es segura la Carpeta de Cifrado?

ZimaOS utiliza un **sistema de archivos auto-desarrollado basado en Zima-OFS**, combinado con **cifrado AES-256-GCM**, para proteger tus datos tanto en reposo como en ejecución.

Cada objeto dentro del contenedor cifrado es procesado con **cifrado y descifrado en flujo**, asegurando **protección en dos capas** tanto para datos estáticos como dinámicos.

A continuación, se detallan las características clave de seguridad e ingeniería:

### 📦 Experiencia del Directorio Original
- La carpeta de cifrado mantiene su nombre original de directorio.
- Desde el exterior, se comporta como una carpeta normal.
- Internamente, todos los datos y metadatos cifrados se gestionan a través de un directorio de control oculto.

### ⏱️ Diseño Orientado al Rendimiento
- Se agregan múltiples objetos pequeños en bloques de escritura secuenciales.
- Esto reduce la sobrecarga de metadatos y operaciones I/O aleatorias.
- Combinado con la desfragmentación en segundo plano, el rendimiento general mejora significativamente.

### ⚡ Optimización de Escritura por Lotes
- El cliente soporta la presentación en lote de operaciones de archivos.
- El servidor las fusiona y procesa todas juntas, reduciendo la sobrecarga de transacciones y los viajes de red.

### 🧩 Fragmentación de Archivos Grandes
- Los archivos que superan un umbral definido se dividen automáticamente.
- Cada fragmento se cifra de manera independiente y se escribe en paralelo.
- Esto permite un mayor rendimiento y recuperación parcial en caso de interrupción.

### 🔄 Reconocimiento Automático entre Dispositivos
- Un archivo de identificador oculto se almacena en el directorio raíz.
- Todos los parámetros de cifrado se registran en su interior.
- Esto permite que las carpetas cifradas se reconozcan automáticamente cuando se mueven entre dispositivos.

### 🔐 Bloqueo Automático con Temporizador
- Cada sesión de montaje incluye un temporizador de cuenta regresiva.
- Soporta recordatorios visuales, bloqueo manual y desmontaje automático.
- Previene la exposición a largo plazo causada por sesiones desbloqueadas olvidadas.

### ❌ No Recuperable por Diseño
- Las claves de metadatos del contenedor existen **solo en los archivos de configuración originales**.
- Reconstruir la base de datos o reinstalar el sistema **no puede restaurar el acceso**.
- Esto garantiza estrictas garantías de privacidad y resalta la importancia de realizar copias de seguridad adecuadas.

![Imagen de Arquitectura de Cifrado](https://manage.icewhale.io/api/static/docs/1766563539465_image.png)

## Preguntas Frecuentes

### 1. ¿Por qué la carpeta de cifrado se bloquea nuevamente después de que ZimaOS se reinicia?

ZimaOS **no almacena ningún archivo de configuración de cifrado internamente**.  
Después de un reinicio del sistema, todas las carpetas cifradas se **bloquean y desmontan automáticamente** para garantizar la máxima seguridad de los datos.

Este comportamiento evita la exposición accidental de datos causada por reinicios del sistema o accesos no supervisados.

### 2. ¿Por qué nadie puede recuperar los datos si se pierde la contraseña y el archivo de clave?

Cuando se crea una carpeta de cifrado, los archivos de configuración y clave se generan **solo una vez**.  
Después de eso, deben ser almacenados de manera segura por el usuario.

ZimaOS **no sube**, **respaldan** ni **retiene ninguna clave de cifrado** ni **datos privados** del usuario.  
Si tanto la contraseña como el archivo de clave se pierden, **los datos se vuelven permanentemente inaccesibles**, incluso para el equipo de ZimaOS.

Esta es una elección de diseño intencional para garantizar una verdadera protección de privacidad de extremo a extremo.

