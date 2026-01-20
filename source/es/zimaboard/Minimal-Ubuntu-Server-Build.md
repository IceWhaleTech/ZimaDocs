---
title: Ubuntu LTS Minimal, Discos en Espejo, y Docker Engine
description:
type: Docs
author: icewhale123456
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---

>Esta guía fue creada originalmente por **<u>ZaNgA</u>**. Agradecemos sinceramente su contribución.

Este tutorial le guía a través de la configuración de un **ZimaBoard** como un servidor de laboratorio doméstico compacto y fiable o servidor edge:

1. Instalar la **última versión de Ubuntu LTS (minimal)** en el ZimaBoard
2. Configurar **dos discos SATA en un espejo RAID‑1** usando `mdadm`
3. Instalar y validar el **Docker Engine**

La guía asume familiaridad básica con la línea de comandos de Linux y usa **Ubuntu Server LTS** (minimal, sin interfaz gráfica).

---

## 1. Requisitos Previos

### Hardware

* ZimaBoard (cualquier modelo)
* Teclado USB + monitor HDMI **o** acceso serie/SSH
* Memoria USB (≥ 4 GB)
* 2× discos SATA (SSD o HDD, mismo tamaño recomendado)
* Cables de alimentación y datos SATA (incluidos con el ZimaBoard)

### Software

* Ubuntu Server **latest LTS** ISO (minimal)
* Herramienta de creación: **Balena Etcher**, **Rufus**, o `dd`

---

## 2. Descargar Ubuntu Server LTS (Minimal)

1. Vaya a la página oficial de descargas de Ubuntu
2. Descargue **Ubuntu Server LTS** (por ejemplo, 24.04 LTS)
3. No se necesitan paquetes adicionales — el ISO del servidor ya es minimal

---

## 3. Crear el USB Arrancable

En Linux:

```bash
sudo dd if=ubuntu-24.04-live-server-amd64.iso of=/dev/sdX bs=4M status=progress oflag=sync
```

Reemplace `/dev/sdX` con su dispositivo USB.

En Windows/macOS:

* Use **Balena Etcher** o **Rufus**

---

## 4. Instalar Ubuntu en el ZimaBoard

1. Inserte la memoria USB en el ZimaBoard
2. Enciéndalo y presione **DEL** o **F7** para entrar a la BIOS
3. Configure el USB como primer dispositivo de arranque
4. Guarde y reinicie

### Opciones del Instalador

* Idioma y teclado: según preferencia
* Red: DHCP (predeterminado)
* Proxy: dejar vacío
* Mirror: mirror predeterminado de Ubuntu

### Configuración de Almacenamiento (Importante)

* Seleccione **Disposición de almacenamiento personalizada**
* Instale Ubuntu **solo en el eMMC interno**
* **NO formatee aún los discos SATA**

Disposición típica:

* `/` en eMMC
* Sin swap (opcional)

Proceda con la instalación y reinicie.

---

## 5. Activar Ubuntu Pro (Plan Gratuito)

Ubuntu Pro proporciona mantenimiento de seguridad extendido (ESM) y características adicionales de endurecimiento. Para uso personal y a pequeña escala, **Ubuntu Pro es gratuito para hasta 5 máquinas**.

### 5.1 Obtener un Token Gratuito de Ubuntu Pro

1. Visite el sitio web de Ubuntu Pro
2. Inicie sesión con una cuenta Ubuntu One
3. Copie su **token de Ubuntu Pro**

---

### 5.2 Adjuntar Ubuntu Pro

En el ZimaBoard:

```bash
sudo pro attach <YOUR_TOKEN_HERE>
```

Verificar estado:

```bash
pro status
```

Debería ver `esm-infra` y `esm-apps` activados.

---

### 5.3 Activar Servicios Recomendados

```bash
sudo pro enable esm-infra esm-apps
```

Opcional (recomendado para servidores):

```bash
sudo pro enable livepatch
```

> Livepatch permite correcciones de seguridad del kernel sin reiniciar.

---

### 5.4 Actualizar el Sistema

```bash
sudo apt update && sudo apt full-upgrade -y
sudo reboot
```

---

## 6. Actualizar el Sistema Base

Inicie sesión y actualice:

```bash
sudo apt update && sudo apt full-upgrade -y
sudo reboot
```

---

## 7. Identificar los Discos SATA

Listar dispositivos de bloque:

```bash
lsblk -o NAME,SIZE,TYPE,MODEL
```

Ejemplo:

```
sda   1.8T disk  Samsung_SSD
sdb   1.8T disk  Samsung_SSD
mmcblk0 32G disk eMMC
```

Vamos a espejar **/dev/sda** y **/dev/sdb**.

---

## 8. Instalar Herramientas RAID

```bash
sudo apt install -y mdadm
```

Durante la instalación, elija **Sí** cuando se le pregunte si desea iniciar arrays RAID automáticamente.

---

## 9. Crear el Espejo RAID‑1

### Limpiar Firmas Existentes (Recomendado)

```bash
sudo wipefs -a /dev/sda
sudo wipefs -a /dev/sdb
```

### Crear el Array

```bash
sudo mdadm --create /dev/md0 \
  --level=1 \
  --raid-devices=2 \
  /dev/sda /dev/sdb
```

Monitorear el progreso de sincronización:

```bash
cat /proc/mdstat
```

---

## 10. Crear un Sistema de Archivos

Formatear el array (ejemplo: ext4):

```bash
sudo mkfs.ext4 /dev/md0
```

Crear un punto de montaje:

```bash
sudo mkdir -p /srv/data
```

Montarlo:

```bash
sudo mount /dev/md0 /srv/data
```

---

## 11. Persistir la Configuración RAID

### Guardar configuración de mdadm

```bash
sudo mdadm --detail --scan | sudo tee -a /etc/mdadm/mdadm.conf
sudo update-initramfs -u
```

### Persistir el Montaje

Obtener UUID:

```bash
blkid /dev/md0
```

Editar `/etc/fstab`:

```bash
sudo nano /etc/fstab
```

Agregar:

```
UUID=<uuid>  /srv/data  ext4  defaults,nofail  0  2
```

Probar:

```bash
sudo umount /srv/data
sudo mount -a
```

---

## 12. Instalar Docker Engine

### Instalar Dependencias

```bash
sudo apt install -y ca-certificates curl gnupg
```

### Agregar Clave GPG de Docker

```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
  sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

### Agregar Repositorio de Docker

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo $VERSION_CODENAME) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### Instalar Docker

```bash
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

---

## 13. Configuración Posterior a la Instalación de Docker

Permitir que su usuario ejecute Docker sin sudo:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

Probar Docker:

```bash
docker run --rm hello-world
```

---

## 14. (Opcional) Usar Almacenamiento RAID para Docker

Recomendado para contenedores y volúmenes:

```bash
sudo systemctl stop docker
sudo mkdir -p /srv/data/docker
sudo rsync -aHAX /var/lib/docker/ /srv/data/docker/
```

Editar configuración de Docker:

```bash
sudo nano /etc/docker/daemon.json
```

Agregar:

```json
{
  "data-root": "/srv/data/docker"
}
```

Reiniciar Docker:

```bash
sudo systemctl start docker
```

---

## 15. Verificaciones de Salud y Mantenimiento

Verificar estado del RAID:

```bash
cat /proc/mdstat
sudo mdadm --detail /dev/md0
```

Activar monitoreo SMART:

```bash
sudo apt install -y smartmontools
sudo smartctl -a /dev/sda
```

---

## 16. Conceptos Básicos de Docker Compose y Ejemplos

Docker Compose es la forma recomendada de definir y gestionar aplicaciones multi-contenedor en su ZimaBoard.

### Instalar Plugin de Docker Compose

Si siguió la sección Docker Engine anterior, el plugin Compose ya está instalado.
Verificar:

```bash
docker compose version
```

---

## 17.1 Crear una Estructura de Directorios Estándar

Usar el array RAID‑1 para datos persistentes es la mejor práctica:

```bash
sudo mkdir -p /srv/data/compose
sudo chown -R $USER:$USER /srv/data/compose
```

Cada aplicación obtiene su propia carpeta:

```
/srv/data/compose/
├── portainer/
├── samba/
├── uptime-kuma/
└── monitoring/
```

---

## 17.2 Ejemplo 1: Portainer (Interfaz de Gestión Docker)

Crear directorio:

```bash
mkdir -p /srv/data/compose/portainer
cd /srv/data/compose/portainer
```

Crear `docker-compose.yml`:

```yaml
version: "3.8"
services:
  portainer:
    image: portainer/portainer-ce:latest
    container_name: portainer
    restart: unless-stopped
    ports:
      - "9000:9000"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - portainer_data:/data

volumes:
  portainer_data:
```

Iniciar:

```bash
docker compose up -d
```

Acceder:

```
http://<zimaboard-ip>:9000
```

---

## 17.3 Ejemplo 2: Servidor de Archivos Samba (en Almacenamiento RAID)

Crear directorio:

```bash
mkdir -p /srv/data/compose/samba
cd /srv/data/compose/samba
```

Crear carpeta compartida:

```bash
mkdir -p /srv/data/share
```

`docker-compose.yml`:

```yaml
version: "3.8"
services:
  samba:
    image: dperson/samba
    container_name: samba
    restart: unless-stopped
    ports:
      - "139:139"
      - "445:445"
    volumes:
      - /srv/data/share:/mount
    command: >
      -u "usuario;contraseña" \
      -s "datos;/mount;yes;no;no"
```

Iniciar:

```bash
docker compose up -d
```

---

## 17.4 Ejemplo 3: Uptime Kuma (Monitoreo de Servicios)

Crear directorio:

```bash
mkdir -p /srv/data/compose/uptime-kuma
cd /srv/data/compose/uptime-kuma
```

`docker-compose.yml`:

```yaml
version: "3.8"
services:
  uptime-kuma:
    image: louislam/uptime-kuma:latest
    container_name: uptime-kuma
    restart: unless-stopped
    ports:
      - "3001:3001"
    volumes:
      - uptime-kuma-data:/app/data

volumes:
  uptime-kuma-data:
```

Acceder:

```
http://<zimaboard-ip>:3001
```

---

## 17.5 Ejemplo 4: Monitoreo Básico (cAdvisor + Node Exporter)

Crear directorio:

```bash
mkdir -p /srv/data/compose/monitoring
cd /srv/data/compose/monitoring
```

`docker-compose.yml`:

```yaml
version: "3.8"
services:
  cadvisor:
    image: gcr.io/cadvisor/cadvisor:latest
    container_name: cadvisor
    restart: unless-stopped
    ports:
      - "8080:8080"
    volumes:
      - /:/rootfs:ro
      - /var/run:/var/run:ro
      - /sys:/sys:ro
      - /var/lib/docker/:/var/lib/docker:ro

  node-exporter:
    image: prom/node-exporter:latest
    container_name: node-exporter
    restart: unless-stopped
    ports:
      - "9100:9100"
```

---

## 17.6 Comandos Comunes de Docker Compose

```bash
# Iniciar servicios
docker compose up -d

# Detener servicios
docker compose down

# Ver registros
docker compose logs -f

# Actualizar imágenes
docker compose pull
docker compose up -d
```

---

## 18. Resultado

Ahora tiene:

* Ubuntu **LTS minimal** en eMMC
* Un **array RAID‑1 en espejo** para seguridad de datos
* Un **Docker Engine** completamente funcional

