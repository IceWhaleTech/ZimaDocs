---
title: Cómo configurar Hermes Agent
description: Guía paso a paso para configurar Hermes Agent en ZimaOS — cubre la configuración de un proveedor de modelos personalizado, la integración de bots de Telegram y el acceso al Web Dashboard, con solución de problemas comunes.
type: Docs
author: icewhale123456
tip: Top bar fixed format, do not delete. description is the article description, if not filled, the first paragraph of the content will be extracted
---

## Descripción general

Este tutorial te guía a través de la configuración de servicios de modelos y plataformas de mensajería en un dispositivo con Hermes Agent desplegado, habilitando la interacción con modelos de IA a través de Telegram. Usando Telegram como ejemplo, cubre el flujo de trabajo completo desde la configuración del proveedor de modelos hasta la verificación del bot.

> **Nota:** En la mayoría de los casos, puedes configurar los modelos y la mensajería directamente a través de la WebUI de Hermes. Si no encuentras las opciones correspondientes, consulta este tutorial para completar la configuración en la terminal del contenedor.

### Entorno
- **Hardware:** ZimaBlade / ZimaBoard / ZimaCube
- **Software:** ZimaOS
- **Red:** El dispositivo debe tener acceso a internet y poder llegar a la API de Telegram. Se recomienda una conexión por cable para mayor estabilidad.

### Objetivos

Completar la configuración inicial de Hermes Agent, incluyendo:
- Conectar un proveedor de modelos personalizado
- Crear y vincular un bot de Telegram para chat privado con IA
- Ver y gestionar el estado de Hermes a través del Web Dashboard

### Requisitos previos
- La dirección IP del dispositivo host, usada para reemplazar `<ip>` en comandos posteriores
- Una API Key de un modelo de IA con conocimientos básicos de su uso
- Una cuenta de Telegram

### Pasos clave

1. Instalar Hermes: buscar e instalar desde la App Store de ZimaOS
2. Acceder por SSH al host de ZimaOS y obtener privilegios de root
3. Entrar al contenedor de Hermes como el usuario `hermes` y activar el entorno virtual
4. Iniciar el asistente de configuración, seleccionar un proveedor de modelo y completar los parámetros
5. Configurar el canal de Telegram: crear un bot para obtener un Token, ingresarlo en Hermes y establecer permisos de usuario
6. Enviar `/start` en Telegram para verificar la configuración y confirmar que el bot responde correctamente
7. Acceder al Web Dashboard para ver el estado de ejecución

## Pasos detallados

### Acceder por SSH al host de ZimaOS

Se recomienda iniciar sesión por SSH en el host de ZimaOS para facilitar copiar y pegar comandos.

```bash
ssh <username>@<ip>
```

Ejemplo:

```bash
ssh zima@192.168.50.20
```

Si es tu primera conexión, escribe `yes` en el aviso de confirmación y presiona Enter.

### Obtener privilegios de ejecución en el contenedor

Si el usuario actual no puede ejecutar directamente comandos Docker para entrar al contenedor, cambia primero a root:

```bash
sudo -i
```

Después del cambio, el prompt del terminal debería indicar que tienes privilegios de root. Estos privilegios solo se usan para entrar a contenedores en el host de ZimaOS.

### Entrar al contenedor de Hermes

Entrar al contenedor como el usuario `hermes`:

```bash
docker exec -it -u hermes hermes bash
```

![Terminal: entrando al contenedor de Hermes](https://manage.icewhale.io/api/static/docs/1779967418108_image.png)

Una vez que el prompt del terminal cambie, habrás entrado al contenedor de Hermes. Todas las operaciones de configuración posteriores deben realizarse dentro del contenedor. Si sales accidentalmente, simplemente ejecuta este comando nuevamente.

Activar el entorno virtual de Hermes:

```bash
source /opt/hermes/.venv/bin/activate
```

![Terminal: activando entorno virtual](https://manage.icewhale.io/api/static/docs/1779967433450_image.png)

Después de la activación, el comando `hermes` puede usarse directamente en la shell actual.

### Iniciar el asistente de configuración

Ejecutar dentro del contenedor:

```bash
hermes setup
```

![Terminal: hermes setup](https://manage.icewhale.io/api/static/docs/1779967453363_image.png)

Selecciona **Quick setup** para comenzar la configuración. El elemento resaltado es la opción seleccionada actualmente; presiona **Enter** para confirmar.

### Configurar el servicio de modelos

1. Selecciona el proveedor de modelos correspondiente. Aquí se usa un proveedor personalizado como ejemplo:
![Terminal: seleccionando proveedor de modelos](https://manage.icewhale.io/api/static/docs/1779967561032_image.png)

2. Introduce la **Base URL** y la **API Key**:
![Terminal: introduciendo Base URL y API Key](https://manage.icewhale.io/api/static/docs/1779967580671_image.png)

3. Selecciona el **modo de compatibilidad de API**:
![Terminal: seleccionando modo de compatibilidad de API](https://manage.icewhale.io/api/static/docs/1779967596242_image.png)

4. Selecciona el modelo que deseas usar:
![Terminal: seleccionando modelo](https://manage.icewhale.io/api/static/docs/1779967618229_image.png)

5. Introduce la longitud de contexto. Puedes presionar Enter para detección automática:
![Terminal: introduciendo longitud de contexto](https://manage.icewhale.io/api/static/docs/1779967635993_image.png)

6. Establece el nombre de visualización:
![Terminal: estableciendo nombre de visualización](https://manage.icewhale.io/api/static/docs/1779967649446_image.png)

7. Selecciona el backend de terminal. La configuración predeterminada es suficiente:
![Terminal: seleccionando backend de terminal](https://manage.icewhale.io/api/static/docs/1779967667150_image.png)

### Configurar plataforma de mensajería (ejemplo Telegram)

1. Elige configurar la mensajería en la terminal del contenedor Hermes o ejecuta el siguiente comando:

```bash
hermes gateway setup
```

![Terminal: hermes gateway setup](https://manage.icewhale.io/api/static/docs/1779967687091_image.png)

2. Selecciona la plataforma correspondiente:
![Terminal: seleccionando plataforma](https://manage.icewhale.io/api/static/docs/1779967700131_image.png)

#### Crear un bot de Telegram

- Abre Telegram, busca e inicia un chat con **@BotFather**
- Envía `/newbot`
- Establece un nombre visible, por ejemplo `Hermes Agent`
- Establece un nombre de usuario único que termine en `bot`, por ejemplo `my_zima_hermes_bot`
- Guarda el **API Token** devuelto por BotFather

**Mantén tu Bot Token seguro.** Cualquiera con este token puede controlar tu bot.

![Telegram: creación de bot con BotFather](https://manage.icewhale.io/api/static/docs/1779967716705_image.png)

#### Obtener tu Telegram User ID

Hermes usa un User ID numérico de Telegram para control de acceso. Envía cualquier mensaje a **@userinfobot** o **@get_id_bot** y guarda el User ID numérico devuelto.

![Telegram: obteniendo User ID](https://manage.icewhale.io/api/static/docs/1779967741377_image.png)

#### Introducir detalles de configuración

1. Introduce el Token del bot de Telegram en el contenedor de Hermes:
![Terminal: introduciendo token del bot](https://manage.icewhale.io/api/static/docs/1779967757562_image.png)

2. Introduce los User IDs de Telegram permitidos:
![Terminal: introduciendo User IDs permitidos](https://manage.icewhale.io/api/static/docs/1779967777379_image.png)

3. Permite que este User ID de Telegram acceda al canal principal:
![Terminal: permitiendo acceso al canal principal](https://manage.icewhale.io/api/static/docs/1779967831434_image.png)

4. Completa la configuración de la plataforma de mensajería:
![Terminal: completando configuración de mensajería](https://manage.icewhale.io/api/static/docs/1779967845729_image.png)

5. Después de completar la configuración de Telegram, Hermes solicitará reiniciar el Gateway. Confirma el aviso para aplicar la nueva configuración:
![Terminal: reiniciando gateway](https://manage.icewhale.io/api/static/docs/1779967857430_image.png)

#### Notas de grupos (opcional)

El modo de privacidad de Telegram está activado por defecto. En grupos, el bot solo puede ver comandos, respuestas a sus mensajes y ciertos mensajes del sistema por defecto.

Si Hermes funciona en chat privado pero no responde en grupos:
- Menciona directamente al bot con @
- Promueve el bot a administrador del grupo
- O desactiva el modo de privacidad en BotFather, luego elimina y vuelve a añadir el bot al grupo

### Uso

Abre Telegram y envía `/start` a tu bot. Luego envía un mensaje normal para confirmar que Hermes responde correctamente.

![Telegram: conversando con el bot](https://manage.icewhale.io/api/static/docs/1779967878149_image.png)

### Abrir el Web Dashboard

Accede a la siguiente URL en tu navegador:

```
http://<ip>:9119
```

Ejemplo:

```
http://192.168.50.20:9119
```

Desde el Dashboard puedes ver el estado de ejecución, inspeccionar sesiones y modificar la configuración del modelo.

### Reconfiguración posterior

Para modificar la configuración nuevamente, sigue los pasos siguientes.

Entrar de nuevo al contenedor:

```bash
docker exec -it -u hermes hermes bash
```

Activar el entorno virtual dentro del contenedor:

```bash
source /opt/hermes/.venv/bin/activate
```

Modificar el modelo:

```bash
hermes model
```

Modificar Telegram u otros gateways de mensajería:

```bash
hermes gateway setup
```

Cuando Hermes solicite reiniciar el Gateway, confirma el aviso. Sal del contenedor cuando termines:

```bash
exit
```

---

## Solución de problemas

### Error de permisos en `/opt/data`

Esto suele ocurrir cuando Hermes Gateway se ejecutó previamente como root, dejando archivos propiedad de root en `$HERMES_HOME`.

Primero, vuelve a entrar al contenedor como usuario `hermes`:

```bash
docker exec -it -u hermes hermes bash
```

Si el error de permisos persiste, revisa los logs de Hermes en el Dashboard de ZimaOS. Solo entra temporalmente a una shell de root cuando necesites corregir permisos de archivos.

### El bot de Telegram no responde

Revisa los logs de Hermes en el Dashboard de ZimaOS y verifica lo siguiente en orden:
- El Bot Token es correcto
- Tu Telegram User ID numérico está en la lista de permitidos
- El contenedor puede acceder a `api.telegram.org`
- Si se usa en grupo, la configuración de Privacy Mode y permisos del grupo es correcta