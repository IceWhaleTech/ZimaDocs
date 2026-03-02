---
title: PVE en Debian para i226  
description: Ejecutando Proxmox VE en Debian para NICs i226  
type: Docs  
author: icewhale123456  
tip: Por favor no elimine el formato fijo de la barra superior, la descripción es el resumen del artículo; si no se rellena, se tomará el primer párrafo como descripción.  
---  

## Ejecutando Proxmox VE en Debian para NICs i226  

### 1. Descripción General de la Solución  

Esta solución está diseñada para desplegar un entorno de virtualización Proxmox VE en la plataforma ZimaBoard 2 con NICs de la serie Intel i226. El objetivo es resolver el problema de desreferencia de punteros nulos en los controladores de NICs, provocado por la gestión de energía PCIe ASPM en los núcleos de Linux de versión alta, evitando así el Kernel Panic y la falta de respuesta del sistema.

- **Plataforma de Hardware**: ZimaBoard 2  
- **Versión de Software**: Debian 12.8.0  
- **Entorno de Red**: Se recomienda utilizar una conexión por cable durante todo el proceso. Prepare la información de subred del enrutador (ejemplo de subred en esta guía: `10.0.0.1/16`).  
- **Objetivo Principal**: Resolver el conflicto de gestión de energía ASPM y el problema del Kernel Panic de la NIC i226 en núcleos de Linux de versión alta, y construir un entorno de virtualización estable.  
- **Conocimiento Previo Requerido**: Cuando PCIe ASPM (especialmente L1 Substates) está habilitado en la NIC Intel i226-V, a menudo provoca una desreferencia de puntero nulo en el controlador igc durante los eventos de enlace físico, recargas de controladores o renegociación de enlace, lo que resulta en un Kernel Panic o bloqueo del sistema. Esta solución adopta un modelo de implementación "Base Debian + Kernel PVE", restringiendo y alineando el entorno de gestión de energía y el firmware antes de introducir el kernel de Proxmox, logrando una mayor compatibilidad de hardware y flexibilidad de ajuste.

#### Pasos Clave de Operación  

1. Instalar Debian 12.8: ISO de instalación de red, usar disco completo, arranque UEFI.  
2. Deshabilitar ASPM: Editar `/etc/default/grub`, agregar `pcie_aspm=off` a `GRUB_CMDLINE_LINUX_DEFAULT`, ejecutar `update-grub` y reiniciar.  
3. Configuración básica: Cambiar a espejos nacionales, instalar `firmware-intel-misc`; configurar temporalmente IP y probar conectividad.  
4. Preparar Proxmox: Configurar `/etc/hosts`, agregar el repositorio sin suscripción de Proxmox y la clave GPG.  
5. Instalar Proxmox: `apt install proxmox-ve postfix open-iscsi`; si hay conflictos con `pve-firmware`, ejecutar `dpkg --force-overwrite` para forzar la instalación, luego `apt install -f` para corregir dependencias.  
6. Configurar red puente: Editar `/etc/network/interfaces`, agregar la NIC física (por ejemplo, `enp1s0`) al puente `vmbr0`, configurar IP/gateway estáticos y reiniciar la red.  
7. Verificar acceso: Después del reinicio, acceder a `https://<IP>:8006`.

### 2. Pasos de Operación  

Todos los comandos a continuación se ejecutan bajo el sistema Debian con privilegios de root o sudo.

#### 2.1 Quemar e Instalar Debian  

Para asegurar la estabilidad y controlabilidad del sistema base, esta solución utiliza Debian 12.8 como base.

1. **Descarga de Recursos de Software**  
   - Debian 12.8.0: [https://chuangtzu.ftp.acc.umu.se/cdimage/archive/12.8.0/amd64/iso-cd/debian-12.8.0-amd64-netinst.iso](https://chuangtzu.ftp.acc.umu.se/cdimage/archive/12.8.0/amd64/iso-cd/debian-12.8.0-amd64-netinst.iso)  
   - Herramienta de grabado balenaEtcher: [https://etcher.balena.io/](https://etcher.balena.io/)

2. **Crear un USB Booteable**  
   - Inserte una unidad USB de al menos 8GB.  
   - Abra balenaEtcher, seleccione su unidad USB como dispositivo de destino.  
   - Haga clic en "Flash from file", localice el archivo `debian-12.8.0-amd64-netinst.iso` descargado; el software seleccionará automáticamente el disco.  
   - Haga clic en "Flash!" y espere a que se complete, luego expulse de forma segura la unidad USB.

3. **Arranque desde BIOS**  
   - Inserte la unidad USB preparada en un puerto USB del ZimaBoard.  
   - Encienda el dispositivo y presione repetidamente la tecla **F11** (en algunas máquinas puede ser ESC o Supr, pero el ZimaBoard 2 usa F11 por defecto).  
   - En el menú de arranque, seleccione la entrada de la unidad USB con "UEFI" en su nombre.

4. **Resumen del Procedimiento de Instalación**  
   Después de entrar en la pantalla de bienvenida azul de Debian, siga estas pautas:  
   - Modo de instalación: Se recomienda seleccionar **Instalación Gráfica** (la más amigable para principiantes).  
   - Idioma y región: Elija "Inglés" o su idioma preferido; teclado seleccione "Inglés Americano".  
   - Particionamiento del disco: Seleccione **"Usar todo el disco"**, elija el eMMC integrado del ZimaBoard o el SSD instalado, y luego seleccione **"Todos los archivos en una partición"** como el esquema de particionamiento.

#### 2.2 Depuración de la NIC en un Sistema Debian Limpio  

1. **Deshabilitar la Gestión Avanzada de Energía PCIe (ASPM)**  
   ```bash
   nano /etc/default/grub
   ```
   Modifique la línea:
   ```
   GRUB_CMDLINE_LINUX_DEFAULT="quiet splash intel_iommu=on iommu=pt pcie_aspm=off"
   ```
   Guarde y cierre, luego actualice GRUB y reinicie:
   ```bash
   update-grub
   reboot
   ```

2. **Cambiar a Servidores DNS Más Estables (Temporalmente)**  
   ```bash
   nano /etc/resolv.conf
   ```
   Agregue:
   ```
   nameserver 223.5.5.5
   nameserver 114.114.114.114
   ```

3. **Instalar Firmware**  
   ```bash
   # Limpiar caché
   rm -rf /var/lib/apt/lists/*
   # Actualizar e instalar firmware para NIC Intel
   apt update
   apt install firmware-intel-misc -y
   ```

4. **Configurar Temporalmente la Interfaz de la NIC**  
   En este ejemplo, el nombre de la interfaz es `enp8s0` y la dirección del enrutador es `10.0.0.1`.  
   ```bash
   # Limpiar configuraciones IP existentes
   ip addr flush dev enp8s0
   # Apagar la interfaz
   ip link set enp8s0 down
   # Configurar IP y gateway
   ip addr add 10.0.1.100/16 dev enp8s0
   ip route add default via 10.0.0.1
   # Encender la interfaz
   ip link set enp8s0 up
   ```

5. **Probar Conectividad**  
   ```bash
   ping -I enp8s0 8.8.8.8
   ```
   Si es exitoso, la NIC está funcionando correctamente.

#### 2.3 Instalar el Kernel de Proxmox VE  

1. **Configurar el Archivo de Hosts**  
   ```bash
   # Confirmar nombre de host (en este ejemplo, el nombre del host es "debian")
   hostname
   nano /etc/hosts
   ```
   Asegúrese de que el archivo contenga:
   ```
   127.0.0.1       localhost
   10.0.1.21       debian.proxmox.com debian
   ```

2. **Agregar Repositorio de Software de Proxmox**  
   ```bash
   # Instalar curl si no está presente
   apt update && apt install curl -y
   # Agregar clave GPG
   curl -fSsL http://download.proxmox.com/debian/proxmox-release-bookworm.gpg -o /etc/apt/trusted.gpg.d/proxmox-release-bookworm.gpg
   # Editar pve-no-subscription.list
   nano /etc/apt/sources.list.d/pve-no-subscription.list
   # Agregar la siguiente línea
   deb http://download.proxmox.com/debian/pve bookworm pve-no-subscription
   ```

3. **Instalar Kernel PVE y Componentes Principales**  
   ```bash
   # Actualizar y realizar una actualización completa
   apt update
   apt full-upgrade -y
   # Instalar los paquetes principales de Proxmox VE
   apt install proxmox-ve postfix open-iscsi -y
   ```
   - Durante la instalación, si aparece una ventana de configuración de Postfix, presione Tab para seleccionar "Solo local" y continuar.

   Debido a que previamente instalamos los paquetes de firmware de Debian, puede haber conflictos de archivos con `pve-firmware`. Sobreescríbalos:
   ```bash
   dpkg -i --force-overwrite /var/cache/apt/archives/pve-firmware_*.deb
   # Corregir cualquier problema restante de dependencias y reinstalar el núcleo si es necesario
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

#### 2.4 Configurar Red  

Durante la instalación de `proxmox-ve`, el sistema elimina las herramientas de gestión de red originales e introduce el modelo de red de Proxmox. Por lo tanto, debemos configurar manualmente la interfaz principal.

Edite el archivo de interfaces:
```bash
nano /etc/network/interfaces
```

Suponiendo que la NIC física sea `enp1s0`, y queramos una IP estática `10.0.1.21/16` con gateway `10.0.0.1`, modifique el archivo para que se vea así:
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

Guarde y cierre, luego reinicie la red:
```bash
systemctl restart networking
```

#### 2.5 Verificación y Acceso a la Interfaz Web  

Abra un navegador web y navegue a:  
```
https://10.0.1.21:8006
```
Haga clic en "Advanced" -> "Proceed to 10.0.1.21 (unsafe)", luego inicie sesión con las credenciales root del sistema Debian. Ahora debería tener acceso a la interfaz web de Proxmox VE.

### 3. Solución de Problemas  

**P: ¿Las fuentes de descarga oficiales son lentas o inalcanzables?**  

- **Debian**: Visite la [lista oficial de espejos](https://www.debian.org/mirror/list), elija un espejo en su país o región, y reemplace `deb.debian.org` y `security.debian.org` en el tutorial por el dominio del espejo seleccionado.  
- **Proxmox**: No existe una lista oficial de espejos para Proxmox, pero puede utilizar espejos de terceros conocidos o buscar "espejo proxmox". Reemplace `download.proxmox.com` en el tutorial con la dirección del espejo.

Después de actualizar las fuentes, ejecute `apt update` para aplicar los cambios.
