---
title: Solucionando problemas de NIC en PVE  
description: Resolver los problemas de pánico del núcleo e inestabilidad de la red en entornos PVE para NICs Intel.  
type: Docs  
author: icewhale123456  
tip: No elimine el formato fijo en la barra superior, description es la descripción del artículo, si no se llena, se tomará el primer párrafo del contenido como descripción.  
---  
## Ejecutando Proxmox VE en Debian para NICs i226

### 1. Descripción general de la solución

Esta solución está diseñada para desplegar un entorno de virtualización Proxmox VE en la plataforma ZimaBoard 2 con NICs Intel de la serie i226. El objetivo es resolver el problema de desreferencia de puntero nulo en el controlador de NIC provocado por la gestión de energía PCIe ASPM en los núcleos de Linux de versión alta, evitando así el pánico del núcleo y la falta de respuesta del sistema.

- **Plataforma de hardware**: ZimaBoard 2  
- **Versión de software**: Debian 12.8.0  
- **Entorno de red**: Se recomienda utilizar una conexión por cable durante todo el proceso. Prepare la información de la subred del enrutador (ejemplo de subred en esta guía: `10.0.0.1/16`).  
- **Objetivo principal**: Resolver el conflicto de gestión de energía ASPM y el problema de pánico del núcleo (Kernel Panic) de la NIC i226 bajo núcleos de Linux de versión alta, y construir un entorno de virtualización estable.  
- **Conocimientos previos necesarios**: Cuando se habilita PCIe ASPM (especialmente L1 Substates) en la NIC Intel i226-V, a menudo se produce una desreferencia de puntero NULL en el controlador igc durante eventos de enlace físico arriba/abajo, recargas del controlador o renegociación de enlace, lo que resulta en pánico del núcleo o congelamiento del sistema. Esta solución adopta un modelo de despliegue "Base Debian + Núcleo PVE", limitando y alineando el entorno de gestión de energía y firmware antes de introducir el núcleo Proxmox, logrando una mayor compatibilidad de hardware y flexibilidad de ajuste.

#### Pasos clave de operación

1. Instalar Debian 12.8: ISO de instalación de red, usar todo el disco, arranque UEFI.  
2. Desactivar ASPM: Editar `/etc/default/grub`, añadir `pcie_aspm=off` a `GRUB_CMDLINE_LINUX_DEFAULT`, ejecutar `update-grub` y reiniciar.  
3. Configuración básica: Cambiar a espejos nacionales, instalar `firmware-intel-misc`; configurar temporalmente la IP y probar la conectividad.  
4. Preparar Proxmox: Configurar `/etc/hosts`, agregar el repositorio sin suscripción de Proxmox y la clave GPG.  
5. Instalar Proxmox: `apt install proxmox-ve postfix open-iscsi`; si hay conflictos con `pve-firmware`, ejecutar `dpkg --force-overwrite` para forzar la instalación, luego `apt install -f` para solucionar dependencias.  
6. Configurar red puenteada: Editar `/etc/network/interfaces`, agregar la NIC física (por ejemplo, `enp1s0`) al puente `vmbr0`, configurar IP/gateway estático y reiniciar la red.  
7. Verificar acceso: Después del reinicio, acceder a `https://<IP>:8006`.

### 2. Pasos de operación

Todos los comandos a continuación se ejecutan bajo el sistema Debian con privilegios de root o sudo.

#### 2.1 Grabar e instalar Debian

Para garantizar la estabilidad y controlabilidad del sistema base, esta solución usa Debian 12.8 como base.

1. **Descargar recursos de software**  
   - Debian 12.8.0: [https://chuangtzu.ftp.acc.umu.se/cdimage/archive/12.8.0/amd64/iso-cd/debian-12.8.0-amd64-netinst.iso](https://chuangtzu.ftp.acc.umu.se/cdimage/archive/12.8.0/amd64/iso-cd/debian-12.8.0-amd64-netinst.iso)  
   - Herramienta de grabación balenaEtcher: [https://etcher.balena.io/](https://etcher.balena.io/)

2. **Crear una unidad USB de arranque**  
   - Inserte una unidad USB de al menos 8GB.  
   - Abra balenaEtcher, seleccione la unidad USB como dispositivo de destino.  
   - Haga clic en "Flash from file", localice el archivo descargado `debian-12.8.0-amd64-netinst.iso`; el software seleccionará automáticamente el disco.  
   - Haga clic en "Flash!" y espere a que termine, luego expulse de manera segura la unidad USB.

3. **Arranque en BIOS**  
   - Inserte la unidad USB preparada en un puerto USB de la ZimaBoard.  
   - Encienda y presione repetidamente la tecla **F11** (algunas máquinas pueden usar ESC o Delete, pero la ZimaBoard 2 por defecto usa F11).  
   - En el menú de arranque, seleccione la entrada de la unidad USB con "UEFI" en su nombre.

4. **Resumen del procedimiento de instalación**  
   Después de ingresar a la pantalla de bienvenida azul de Debian, siga estas pautas:  
   - Modo de instalación: Se recomienda seleccionar **Instalación Gráfica** (más amigable para principiantes).  
   - Idioma y región: Elija "Inglés" o su idioma preferido; selección de teclado "Inglés estadounidense".  
   - Particionamiento de disco: Seleccione **"Usar todo el disco"**, elija la eMMC integrada de la ZimaBoard o SSD instalado, y luego seleccione **"Todos los archivos en una partición"** como esquema de particionamiento.

#### 2.2 Depuración de la NIC en un sistema Debian limpio

1. **Desactivar PCIe Advanced Power Management (ASPM)**  
   ```bash
   nano /etc/default/grub
   ```
   Modifique la línea:
   ```
   GRUB_CMDLINE_LINUX_DEFAULT="quiet splash intel_iommu=on iommu=pt pcie_aspm=off"
   ```
   Guarde y salga, luego actualice GRUB y reinicie:
   ```bash
   update-grub
   reboot
   ```

2. **Cambiar a servidores DNS más estables (temporalmente)**  
   ```bash
   nano /etc/resolv.conf
   ```
   Agregue:
   ```
   nameserver 223.5.5.5
   nameserver 114.114.114.114
   ```

3. **Instalar firmware**  
   ```bash
   # Limpiar caché
   rm -rf /var/lib/apt/lists/*
   # Actualizar e instalar firmware de la NIC Intel
   apt update
   apt install firmware-intel-misc -y
   ```

4. **Configurar temporalmente la interfaz de la NIC**  
   En este ejemplo, el nombre de la interfaz es `enp8s0` y la dirección del enrutador es `10.0.0.1`.  
   ```bash
   # Limpiar configuraciones de IP existentes
   ip addr flush dev enp8s0
   # Apagar la interfaz
   ip link set enp8s0 down
   # Configurar IP y gateway
   ip addr add 10.0.1.100/16 dev enp8s0
   ip route add default via 10.0.0.1
   # Encender la interfaz
   ip link set enp8s0 up
   ```

5. **Probar conectividad**  
   ```bash
   ping -I enp8s0 8.8.8.8
   ```
   Si tiene éxito, la NIC está funcionando correctamente.

#### 2.3 Instalar el núcleo de Proxmox VE

1. **Configurar el archivo de hosts**  
   ```bash
   # Confirmar el nombre de host (en este ejemplo, el nombre de host es "debian")
   hostname
   nano /etc/hosts
   ```
   Asegúrese de que el archivo contenga:
   ```
   127.0.0.1       localhost
   10.0.1.21       debian.proxmox.com debian
   ```

2. **Agregar el repositorio de software de Proxmox**  
   ```bash
   # Instalar curl si no está presente
   apt update && apt install curl -y
   # Agregar la clave GPG
   curl -fSsL http://download.proxmox.com/debian/proxmox-release-bookworm.gpg -o /etc/apt/trusted.gpg.d/proxmox-release-bookworm.gpg
   # Editar pve-no-subscription.list
   nano /etc/apt/sources.list.d/pve-no-subscription.list
   # Agregar la siguiente línea
   deb http://download.proxmox.com/debian/pve bookworm pve-no-subscription
   ```

3. **Instalar el núcleo PVE y los componentes principales**  
   ```bash
   # Actualizar e instalar una actualización completa
   apt update
   apt full-upgrade -y
   # Instalar paquetes principales de Proxmox VE
   apt install proxmox-ve postfix open-iscsi -y
   ```
   - Durante la instalación, si aparece una ventana de configuración de Postfix, presione Tab para seleccionar "Solo local" y continúe.

   Debido a que previamente instalamos los paquetes de firmware de Debian, puede haber conflictos de archivos con `pve-firmware`. Sobrescríbalos:
   ```bash
   dpkg -i --force-overwrite /var/cache/apt/archives/pve-firmware_*.deb
   # Solucionar problemas de dependencias restantes e instalar el núcleo si es necesario
   apt install -f
   apt install proxmox-ve
   ```

   Después de la instalación, reinicie y verifique la versión del núcleo:
   ```bash
   reboot
   # Después del reinicio
   uname -a
   ```
   Si la salida muestra algo como `6.8.x-pve`, la instalación fue exitosa.

#### 2.4 Configurar la red

Durante la instalación de `proxmox-ve`, el sistema elimina las herramientas originales de gestión de redes e introduce el modelo de red de Proxmox. Por lo tanto, necesitamos configurar manualmente la interfaz principal.

Edite el archivo de interfaces:
```bash
nano /etc/network/interfaces
```

Suponiendo que la NIC física sea `enp1s0`, y queramos una IP estática `10.0.1.21/16` con gateway `10.0.0.1`, modifique el archivo de la siguiente manera:
```
iface enp1s0 inet manual

auto vmbr0
iface vmbr0 inet static
    address 10.0.1.21/16
    gateway 10.0.0.1
    bridge-ports enp1s0
    bridge-stp off
    bridge-fd 0
```

Guarde y salga, luego reinicie la red:
```bash
systemctl restart networking
```

#### 2.5 Verificación y acceso a la interfaz web

Abra un navegador web y navegue a:
```
https://10.0.1.21:8006
```
Haga clic en "Advanced" -> "Proceed to 10.0.1.21 (unsafe)", luego inicie sesión con las credenciales de root del sistema Debian. Ahora debería tener acceso a la interfaz web de Proxmox VE.

### 3. Resolución de problemas

**P: ¿Las fuentes de descarga oficiales son lentas o inalcanzables?**

- **Debian**: Visite la [lista oficial de espejos](https://www.debian.org/mirror/list), elija un espejo de su país o región, y reemplace `deb.debian.org` y `security.debian.org` en el tutorial con el dominio de ese espejo.  
- **Proxmox**: No hay lista oficial de espejos para Proxmox, pero puede usar espejos de terceros bien conocidos o buscar "proxmox mirror". Reemplace `download.proxmox.com` en el tutorial con la dirección del espejo.

Después de actualizar las fuentes, ejecute `apt update` para aplicar los cambios.