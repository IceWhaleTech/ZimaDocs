---
ZimaBoard Tutorial: Ubuntu LTS Minimal, Mirrored Disks, and Docker Engine
description: 
type: Docs
author: icewhale123456
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---

>This guide was originally created by **<u>ZaNgA</u>**. We gratefully acknowledge his contribution.

This tutorial walks you through setting up a **ZimaBoard** as a compact and reliable home‑lab or edge server:

1. Install the **latest Ubuntu LTS (minimal)** on the ZimaBoard
2. Configure **two SATA disks in a RAID‑1 mirror** using `mdadm`
3. Install and validate the **Docker Engine**

The guide assumes basic Linux command‑line familiarity and uses **Ubuntu Server LTS** (minimal, no GUI).

---

## 1. Prerequisites

### Hardware

* ZimaBoard (any model)
* USB keyboard + HDMI monitor **or** serial/SSH access
* USB flash drive (≥ 4 GB)
* 2× SATA disks (SSD or HDD, same size recommended)
* SATA power and data cables (included with ZimaBoard)

### Software

* Ubuntu Server **latest LTS** ISO (minimal)
* Imaging tool: **Balena Etcher**, **Rufus**, or `dd`

---

## 2. Download Ubuntu Server LTS (Minimal)

1. Go to the official Ubuntu download page
2. Download **Ubuntu Server LTS** (e.g. 24.04 LTS)
3. No additional packages are needed — the server ISO is already minimal

---

## 3. Create the Bootable USB

On Linux:

```bash
sudo dd if=ubuntu-24.04-live-server-amd64.iso of=/dev/sdX bs=4M status=progress oflag=sync
```

Replace `/dev/sdX` with your USB device.

On Windows/macOS:

* Use **Balena Etcher** or **Rufus**

---

## 4. Install Ubuntu on the ZimaBoard

1. Insert the USB stick into the ZimaBoard
2. Power it on and press **DEL** or **F7** to enter BIOS
3. Set USB as first boot device
4. Save and reboot

### Installer Choices

* Language and keyboard: as preferred
* Network: DHCP (default)
* Proxy: leave empty
* Mirror: default Ubuntu mirror

### Storage Configuration (Important)

* Select **Custom storage layout**
* Install Ubuntu **only on the internal eMMC**
* **Do NOT format the SATA disks yet**

Typical layout:

* `/` on eMMC
* No swap (optional)

Proceed with installation and reboot.

---

## 5. Activate Ubuntu Pro (Free Plan)

Ubuntu Pro provides extended security maintenance (ESM) and additional hardening features. For personal and small-scale use, **Ubuntu Pro is free for up to 5 machines**.

### 5.1 Obtain a Free Ubuntu Pro Token

1. Visit the Ubuntu Pro website
2. Sign in with an Ubuntu One account
3. Copy your **Ubuntu Pro token**

---

### 5.2 Attach Ubuntu Pro

On the ZimaBoard:

```bash
sudo pro attach <YOUR_TOKEN_HERE>
```

Verify status:

```bash
pro status
```

You should see `esm-infra` and `esm-apps` enabled.

---

### 5.3 Enable Recommended Services

```bash
sudo pro enable esm-infra esm-apps
```

Optional (recommended for servers):

```bash
sudo pro enable livepatch
```

> Livepatch allows kernel security fixes without rebooting.

---

### 5.4 Update the System

```bash
sudo apt update && sudo apt full-upgrade -y
sudo reboot
```

---

## 6. Update the Base System

Log in and update:

```bash
sudo apt update && sudo apt full-upgrade -y
sudo reboot
```

---

## 7. Identify the SATA Disks

List block devices:

```bash
lsblk -o NAME,SIZE,TYPE,MODEL
```

Example:

```
sda   1.8T disk  Samsung_SSD
sdb   1.8T disk  Samsung_SSD
mmcblk0 32G disk eMMC
```

We will mirror **/dev/sda** and **/dev/sdb**.

---

## 8. Install RAID Tools

```bash
sudo apt install -y mdadm
```

During installation, choose **Yes** when asked to start RAID arrays automatically.

---

## 9. Create the RAID‑1 Mirror

### Wipe Existing Signatures (Recommended)

```bash
sudo wipefs -a /dev/sda
sudo wipefs -a /dev/sdb
```

### Create the Array

```bash
sudo mdadm --create /dev/md0 \
  --level=1 \
  --raid-devices=2 \
  /dev/sda /dev/sdb
```

Monitor sync progress:

```bash
cat /proc/mdstat
```

---

## 10. Create a Filesystem

Format the array (example: ext4):

```bash
sudo mkfs.ext4 /dev/md0
```

Create a mount point:

```bash
sudo mkdir -p /srv/data
```

Mount it:

```bash
sudo mount /dev/md0 /srv/data
```

---

## 11. Persist RAID Configuration

### Save mdadm Configuration

```bash
sudo mdadm --detail --scan | sudo tee -a /etc/mdadm/mdadm.conf
sudo update-initramfs -u
```

### Persist the Mount

Get UUID:

```bash
blkid /dev/md0
```

Edit `/etc/fstab`:

```bash
sudo nano /etc/fstab
```

Add:

```
UUID=<uuid>  /srv/data  ext4  defaults,nofail  0  2
```

Test:

```bash
sudo umount /srv/data
sudo mount -a
```

---

## 12. Install Docker Engine

### Install Dependencies

```bash
sudo apt install -y ca-certificates curl gnupg
```

### Add Docker GPG Key

```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
  sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

### Add Docker Repository

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo $VERSION_CODENAME) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### Install Docker

```bash
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

---

## 13. Post‑Installation Docker Setup

Allow your user to run Docker without sudo:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

Test Docker:

```bash
docker run --rm hello-world
```

---

## 14. (Optional) Use RAID Storage for Docker

Recommended for containers and volumes:

```bash
sudo systemctl stop docker
sudo mkdir -p /srv/data/docker
sudo rsync -aHAX /var/lib/docker/ /srv/data/docker/
```

Edit Docker config:

```bash
sudo nano /etc/docker/daemon.json
```

Add:

```json
{
  "data-root": "/srv/data/docker"
}
```

Restart Docker:

```bash
sudo systemctl start docker
```

---

## 15. Health Checks & Maintenance

Check RAID status:

```bash
cat /proc/mdstat
sudo mdadm --detail /dev/md0
```

Enable SMART monitoring:

```bash
sudo apt install -y smartmontools
sudo smartctl -a /dev/sda
```

---

## 16. Docker Compose Basics & Examples

Docker Compose is the recommended way to define and manage multi‑container applications on your ZimaBoard.

### Install Docker Compose Plugin

If you followed the Docker Engine section above, the Compose plugin is already installed.
Verify:

```bash
docker compose version
```

---

## 17.1 Create a Standard Directory Layout

Using the RAID‑1 array for persistent data is best practice:

```bash
sudo mkdir -p /srv/data/compose
sudo chown -R $USER:$USER /srv/data/compose
```

Each application gets its own folder:

```
/srv/data/compose/
├── portainer/
├── samba/
├── uptime-kuma/
└── monitoring/
```

---

## 17.2 Example 1: Portainer (Docker Management UI)

Create directory:

```bash
mkdir -p /srv/data/compose/portainer
cd /srv/data/compose/portainer
```

Create `docker-compose.yml`:

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

Start:

```bash
docker compose up -d
```

Access:

```
http://<zimaboard-ip>:9000
```

---

## 17.3 Example 2: Samba File Server (on RAID Storage)

Create directory:

```bash
mkdir -p /srv/data/compose/samba
cd /srv/data/compose/samba
```

Create shared folder:

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
      -u "user;password" \
      -s "data;/mount;yes;no;no"
```

Start:

```bash
docker compose up -d
```

---

## 17.4 Example 3: Uptime Kuma (Service Monitoring)

Create directory:

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

Access:

```
http://<zimaboard-ip>:3001
```

---

## 17.5 Example 4: Basic Monitoring (cAdvisor + Node Exporter)

Create directory:

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

## 17.6 Common Docker Compose Commands

```bash
# Start services
docker compose up -d

# Stop services
docker compose down

# View logs
docker compose logs -f

# Update images
docker compose pull
docker compose up -d
```

---

## 18. Result

You now have:

* Ubuntu **LTS minimal** on eMMC
* A **mirrored RAID‑1 array** for data safety
* A fully functional **Docker Engine**

