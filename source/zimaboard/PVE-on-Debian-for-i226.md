---
title: Fixing NIC Issues in PVE
description: Resolve kernel panic and network instability issues on PVE environments for Intel NICs.
type: Docs
author: icewhale123456
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---
## Running Proxmox VE on Debian for i226 NICs

### 1. Solution Overview

This solution is designed for deploying a Proxmox VE virtualization environment on the ZimaBoard 2 platform with Intel i226 series NICs. The goal is to resolve the NIC driver null pointer dereference issue triggered by PCIe ASPM power management in high-version Linux kernels, thereby avoiding Kernel Panic and system unresponsiveness.

- **Hardware Platform**: ZimaBoard 2  
- **Software Version**: Debian 12.8.0  
- **Network Environment**: It is recommended to use a wired connection throughout the process. Prepare the router subnet information (example subnet in this guide: `10.0.0.1/16`).  
- **Core Objective**: Solve the ASPM power management conflict and kernel panic (Kernel Panic) issue of the i226 NIC under high-version Linux kernels, and build a stable virtualization environment.  
- **Prerequisite Knowledge**: When PCIe ASPM (especially L1 Substates) is enabled on the Intel i226-V NIC, it often triggers a NULL pointer dereference in the igc driver during physical link up/down events, driver reloads, or link renegotiation, resulting in kernel panic or system freeze. This solution adopts a "Debian Base + PVE Kernel" deployment model, constraining and aligning the power management and firmware environment before introducing the Proxmox kernel, achieving higher hardware compatibility and tuning flexibility.

#### Key Operation Steps

1. Install Debian 12.8: Network installation ISO, use entire disk, UEFI boot.  
2. Disable ASPM: Edit `/etc/default/grub`, add `pcie_aspm=off` to `GRUB_CMDLINE_LINUX_DEFAULT`, run `update-grub`, and reboot.  
3. Basic configuration: Switch to domestic mirrors, install `firmware-intel-misc`; temporarily configure IP and test connectivity.  
4. Prepare Proxmox: Configure `/etc/hosts`, add the Proxmox no-subscription repository and GPG key.  
5. Install Proxmox: `apt install proxmox-ve postfix open-iscsi`; if `pve-firmware` conflicts, run `dpkg --force-overwrite` to force installation, then `apt install -f` to fix dependencies.  
6. Configure bridged networking: Edit `/etc/network/interfaces`, add the physical NIC (e.g., `enp1s0`) to the bridge `vmbr0`, set static IP/gateway, and restart networking.  
7. Verify access: After reboot, access `https://<IP>:8006`.

### 2. Operation Steps

All commands below are executed under the Debian system with root or sudo privileges.

#### 2.1 Burn and Install Debian

To ensure the stability and controllability of the base system, this solution uses Debian 12.8 as the foundation.

1. **Software Resource Download**  
   - Debian 12.8.0: [https://chuangtzu.ftp.acc.umu.se/cdimage/archive/12.8.0/amd64/iso-cd/debian-12.8.0-amd64-netinst.iso](https://chuangtzu.ftp.acc.umu.se/cdimage/archive/12.8.0/amd64/iso-cd/debian-12.8.0-amd64-netinst.iso)  
   - Burning tool balenaEtcher: [https://etcher.balena.io/](https://etcher.balena.io/)

2. **Create a Bootable USB Drive**  
   - Insert a USB drive of at least 8GB.  
   - Open balenaEtcher, select your USB drive as the target device.  
   - Click "Flash from file", locate the downloaded `debian-12.8.0-amd64-netinst.iso`; the software will automatically select the disk.  
   - Click "Flash!" and wait for completion, then safely eject the USB drive.

3. **BIOS Boot**  
   - Insert the prepared USB drive into a USB port on the ZimaBoard.  
   - Power on and repeatedly press the **F11** key (some machines may use ESC or Delete, but the ZimaBoard 2 defaults to F11).  
   - In the Boot Menu, select the USB drive entry with "UEFI" in its name.

4. **Installation Procedure Summary**  
   After entering the Debian blue welcome screen, follow these guidelines:  
   - Installation mode: It is recommended to select **Graphical Install** (most user-friendly for beginners).  
   - Language and region: Choose "English" or your preferred language; keyboard select "American English".  
   - Disk partitioning: Select **"Use entire disk"**, choose the ZimaBoard's built-in eMMC or installed SSD, and then select **"All files in one partition"** as the partitioning scheme.

#### 2.2 Debugging the NIC on a Clean Debian System

1. **Disable PCIe Advanced Power Management (ASPM)**  
   ```bash
   nano /etc/default/grub
   ```
   Modify the line:
   ```
   GRUB_CMDLINE_LINUX_DEFAULT="quiet splash intel_iommu=on iommu=pt pcie_aspm=off"
   ```
   Save and exit, then update GRUB and reboot:
   ```bash
   update-grub
   reboot
   ```

2. **Switch to More Stable DNS Servers (Temporary)**  
   ```bash
   nano /etc/resolv.conf
   ```
   Add:
   ```
   nameserver 223.5.5.5
   nameserver 114.114.114.114
   ```

3. **Install Firmware**  
   ```bash
   # Clear cache
   rm -rf /var/lib/apt/lists/*
   # Update and install Intel NIC firmware
   apt update
   apt install firmware-intel-misc -y
   ```

4. **Temporarily Configure the NIC Interface**  
   In this example, the interface name is `enp8s0` and the router address is `10.0.0.1`.  
   ```bash
   # Flush existing IP settings
   ip addr flush dev enp8s0
   # Bring the interface down
   ip link set enp8s0 down
   # Set IP address and gateway
   ip addr add 10.0.1.100/16 dev enp8s0
   ip route add default via 10.0.0.1
   # Bring the interface up
   ip link set enp8s0 up
   ```

5. **Test Connectivity**  
   ```bash
   ping -I enp8s0 8.8.8.8
   ```
   If successful, the NIC is functioning correctly.

#### 2.3 Install the Proxmox VE Kernel

1. **Configure the Hosts File**  
   ```bash
   # Confirm hostname (in this example, hostname is "debian")
   hostname
   nano /etc/hosts
   ```
   Ensure the file contains:
   ```
   127.0.0.1       localhost
   10.0.1.21       debian.proxmox.com debian
   ```

2. **Add Proxmox Software Repository**  
   ```bash
   # Install curl if not present
   apt update && apt install curl -y
   # Add GPG key
   curl -fSsL http://download.proxmox.com/debian/proxmox-release-bookworm.gpg -o /etc/apt/trusted.gpg.d/proxmox-release-bookworm.gpg
   # Edit pve-no-subscription.list
   nano /etc/apt/sources.list.d/pve-no-subscription.list
   # Add the following line
   deb http://download.proxmox.com/debian/pve bookworm pve-no-subscription
   ```

3. **Install PVE Kernel and Core Components**  
   ```bash
   # Update and perform a full upgrade
   apt update
   apt full-upgrade -y
   # Install Proxmox VE core packages
   apt install proxmox-ve postfix open-iscsi -y
   ```
   - During installation, if a Postfix configuration window appears, press Tab to select "Local only" and continue.

   Because we previously installed Debian firmware packages, there may be file conflicts with `pve-firmware`. Overwrite them:
   ```bash
   dpkg -i --force-overwrite /var/cache/apt/archives/pve-firmware_*.deb
   # Fix any remaining dependency issues and reinstall the core if needed
   apt install -f
   apt install proxmox-ve
   ```

   After installation, reboot and check the kernel version:
   ```bash
   reboot
   # After reboot
   uname -a
   ```
   If the output shows something like `6.8.x-pve`, the installation was successful.

#### 2.4 Configure Networking

During the installation of `proxmox-ve`, the system removes the original network management tools and introduces Proxmox's network model. Therefore, we need to manually configure the main interface.

Edit the interfaces file:
```bash
nano /etc/network/interfaces
```

Assuming the physical NIC is `enp1s0`, and we want a static IP `10.0.1.21/16` with gateway `10.0.0.1`, modify the file to look like this:
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

Save and exit, then restart networking:
```bash
systemctl restart networking
```

#### 2.5 Verification and Web Interface Access

Open a web browser and navigate to:
```
https://10.0.1.21:8006
```
Click "Advanced" -> "Proceed to 10.0.1.21 (unsafe)", then log in with the root credentials of the Debian system. You should now have access to the Proxmox VE web interface.

### 3. Troubleshooting

**Q: The official download sources are slow or unreachable?**  

- **Debian**: Visit the [official mirror list](https://www.debian.org/mirror/list), choose a mirror in your country or region, and replace `deb.debian.org` and `security.debian.org` in the tutorial with that mirror's domain.  
- **Proxmox**: There is no official mirror list for Proxmox, but you can use well-known third-party mirrors or search for "proxmox mirror". Replace `download.proxmox.com` in the tutorial with the mirror address.  

After updating the sources, run `apt update` to apply the changes.