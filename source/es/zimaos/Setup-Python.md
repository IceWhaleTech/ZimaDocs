---
title: Configurar Python
description:
type: “Docs”
tip: La barra superior tiene un formato fijo que no debe eliminarse, description es la descripción del artículo; si no se llena, se tomará el primer párrafo del contenido
---
# Modificar /etc/profile
Agregue las siguientes dos líneas al perfil
```language
export HOME="/DATA"
export PATH="/DATA/.local/bin:/opt/bin:$PATH"
```
Ejecutar actualizaciones
`source /etc/profile`
# Instalar opkg
`wget -O - http://bin.entware.net/x64-k3.2/installer/generic.sh | /bin/sh`
# Problemas relacionados con git
## Instalar git-http
`opkg install git-http`
# Cómo clonar proyectos de GitHub sin contraseña
Cómo clonar proyectos de GitHub sin contraseña
Debido a algunos problemas, git no puede encontrar la clave pública ssh normalmente. Por lo tanto, podemos usar la herramienta gh para evitar la contraseña.
Descargue gh en `/opt/bin` (gestionado por el paquete opkg). Luego inicie sesión en la cuenta con gh.
Al clonar el proyecto, utilice el tercer método de gh pull, para que git y pull puedan funcionar.
## Python
ZimaOS ha instalado Python 3.12.5
![](https://manage.icewhale.io/api/static/docs/1727164432814_image.png)
Se recomienda usar el entorno virtual nevn para el desarrollo
```language
mkdir project
cd project
python -m venv .
source ./bin/activate
```
# Modificar la configuración de vscode
Agregue la siguiente configuración a la configuración del modo código
```language
"remote.SSH.serverInstallPath": {
        "XXX.XXX.XXX.XXX": "/DATA",
    },
```
![](https://manage.icewhale.io/api/static/docs/1727164529080_image.png)