Aquí tienes la traducción al español, manteniendo el formato original:

---

title: Cómo usar una UPS (Fuente de Alimentación Ininterrumpida) en ZimaOS  
description: Aprende cómo conectar, habilitar y configurar una UPS USB en ZimaOS 1.5.3 o posterior para que tu NAS pueda apagarse de manera segura durante cortes de energía y evitar la pérdida de datos.  
type: Docs  
author: icewhale123456  
tip: La barra superior tiene un formato fijo, no lo elimines, la descripción es el resumen del artículo. Si no se rellena, se tomará el primer párrafo del contenido.  
---  
## Introducción  
A partir de **ZimaOS v1.5.3**, ZimaOS soporta oficialmente **UPS (Fuente de Alimentación Ininterrumpida)**, lo que permite que tu NAS continúe funcionando durante cortes de energía y se apague de manera segura cuando sea necesario. Tras conectar una UPS USB compatible, ZimaOS puede:  
- Leer el nivel de batería, voltaje y tiempo estimado de funcionamiento de la UPS  
- Mantener el NAS funcionando durante un periodo durante un corte de energía  
- Realizar un apagado controlado según tus configuraciones  
Puedes descargar la última versión de ZimaOS aquí. https://github.com/IceWhaleTech/ZimaOS/releases  

Esta guía te muestra cómo **conectar**, **habilitar** y **configurar** una UPS en ZimaOS.

---  
## Requisitos  
Antes de comenzar, prepara:  
- Un NAS o servidor que ejecute ZimaOS v1.5.3 o posterior  
- Una UPS compatible con USB que pueda comunicarse a través de USB (Por ejemplo, modelos comunes de consumo como APC o Santak que soportan USB)  
---  
## Paso 1 – Conectar el hardware de la UPS  
![Los dispositivos ZimaOS se conectan a las unidades UPS mediante un cable USB y un adaptador de corriente, que se enchufan en tomas de corriente estándar.](https://manage.icewhale.io/api/static/docs/1766748897632_image.png)  
1. Conecta el dispositivo ZimaOS y su adaptador de corriente a las tomas de salida de la UPS.  
2. Conecta la UPS al dispositivo ZimaOS utilizando un cable de datos USB.  
---  
## Paso 2 – Habilitar la protección contra pérdida de energía (UPS)  
![Página de configuración general de ZimaOS (IceWhale), con opciones de configuración](https://manage.icewhale.io/api/static/docs/1766749473078_image.png)  
1. Abre la interfaz web de ZimaOS en tu navegador.  
2. Ve a Configuración → General → Protección contra pérdida de energía (UPS)  
3. Actívalo.  
---  
## Paso 3 – Elegir el tipo de UPS y el dispositivo  
En la ventana de configuración de la UPS, debes especificar cómo ZimaOS se comunica con la UPS y qué UPS utilizar.  
![Página de configuración de la UPS, selecciona un modelo de UPS conectado por USB](https://manage.icewhale.io/api/static/docs/1766749743361_image.png)  
Verás campos como:  
| Configuración   | Descripción |
|-----------------|-------------|
| **Tipo de UPS** | Selecciona el método de comunicación. Actualmente, ZimaOS solo soporta **USB-UPS**. |
| **Dispositivo UPS** | Selecciona el modelo de UPS que ZimaOS ha detectado. |  
---  
## Paso 4 – Configurar el comportamiento en caso de corte de energía  
En la misma ventana de configuración de la UPS, puedes decidir qué debe hacer ZimaOS cuando ocurra un corte de energía.  
![Configuración de protección contra pérdida de energía de la UPS en ZimaOS](https://manage.icewhale.io/api/static/docs/1766751218471_image.png)  
Hay dos modos de apagado:  
### Hasta que la batería se agote  
En este modo, ZimaOS apaga el sistema cuando el nivel de batería de la UPS es **inferior al 15%**.  
Esta opción es fácil de usar y se centra en proteger tus datos y hardware cuando la batería está casi vacía.  
### Tiempo personalizado  
En este modo, ZimaOS inicia un temporizador cuando la UPS pasa a batería y ejecuta un apagado seguro una vez que haya pasado el tiempo establecido.

**Sin embargo**, el umbral de seguridad del 15% aún se aplica:  

- Si el nivel de batería de la UPS baja al 15% antes de que se cumpla el tiempo personalizado, ZimaOS apagará el sistema inmediatamente al llegar al 15%, sin esperar más.  

Esta opción es útil cuando:  

- Quieres evitar apagados por cortes de energía muy cortos.  
- Aún deseas que el sistema se apague de manera segura si el corte de energía se extiende y la batería baja al 15%.  
---  
Haz clic en `Confirmar` para aplicar la configuración.  

A partir de ahora, ZimaOS seguirá la estrategia de apagado seleccionada cada vez que la UPS esté usando energía de batería.  

---  
## Paso 5 – Verificar el estado de la UPS en ZimaOS  
Después de configurar, puedes verificar si ZimaOS está leyendo correctamente los datos de la UPS.  
![Interfaz de estado mostrando la condición en tiempo real](https://manage.icewhale.io/api/static/docs/1766751527944_image.png)  
En la página de estado o configuración de la UPS, deberías ver información como:

- **Porcentaje de batería**, por ejemplo: Batería 98%  
- **Tiempo estimado restante**, por ejemplo: Estimado 59 min  
- **Voltaje de energía**, por ejemplo: 13.5 V  

Si estos valores son visibles y se actualizan con el tiempo, significa que la protección contra pérdida de energía está `activa`.  

Cuando se apague la electricidad:  

1. La UPS continuará alimentando tu dispositivo ZimaOS.  
2. ZimaOS seguirá la regla de apagado seleccionada  
3. Esto ayuda a reducir el riesgo de daños en el disco, errores en el sistema de archivos, pérdida de datos y caídas de servicio causadas por cortes de energía repentinos.  

Tu NAS ahora tiene **protección real contra cortes de energía** y puede funcionar de manera más segura y confiable.

---  
## Recomendaciones de uso  

| Recomendación | Razón |
|-----------------|-------------|
| Usa **Tiempo personalizado** para configurar un apagado retrasado | Ayuda a evitar apagados frecuentes debido a cortes de energía cortos o temporales |
| Conecta la UPS junto con un switch o router de red | Previene que el NAS quede inaccesible debido a un corte de red después del inicio |
| Revisa regularmente la salud de la batería de la UPS | La capacidad de la batería puede degradarse con el uso a largo plazo y afectar el tiempo de respaldo |

---  
## Lista de dispositivos compatibles  
[Lista de compatibilidad de dispositivos UPS con ZimaOS](https://www.zimaspace.com/docs/zimaos/zimaos-ups-compatibility-list)  

Esta lista no es exhaustiva y puede actualizarse con el tiempo.  
Si tu UPS no está en la lista, no significa automáticamente que no sea compatible.  

---  
## Obtener ayuda  
Si tienes algún problema al usar una UPS con ZimaOS, contacta al equipo de desarrollo de ZimaOS  `feedback@zimaos.com`

---