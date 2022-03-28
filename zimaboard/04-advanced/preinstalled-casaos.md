---
sidebar_label: Pre-installed CasaOS
title: Pre-installed CasaOS | Advanced | ZimaBoard
---

# Pre-installed CasaOS

## Introdution

All shipped ZimaBoards are pre-installed with CasaOS (Based on Debian). It provides the out-of-the-box experience provided in [Get Started](/zimaboard/category/get-started).

The pre-installed CasaOS is based on Debian with some modifications and comes pre-installed with CasaOS and some common apps.

## Latest Version

### ZimaBoard 216 (16GB eMMC)

- 2022.02.10
  - Update:
    - Add AX210 driver
    - Update APT Packages
    - Install intel-microcode
- 2021.12.16
  - Update:
    - Initial Version

### ZimaBoard 432/832 (32GB eMMC)

- 2022.02.23
  - Update:
    - Add AX210 driver
    - Update APT packages
    - Install intel-microcode
    - Deactivate sleep, suspend, hibernate, hybrid-sleep targets
- 2021.12.16
  - Update:
    - Initial Version

## CasaOS Related Default Setups

### Pre-installed CasaOS Apps

:::tip

**Default Account for All Pre-installed Apps**

Username: `casaos`

Password: `casaos`

:::

- FileBrowser
  - Upload, delete, preview, rename, edit and share your files.
- Jellyfin
  - Enables you to collect, manage, and stream your media.
- PhotoPrism
  - An AI-powered app for browsing, organizing & sharing your photo collection.
- qBittorrent
  - Free BitTorrent downloader

## Base OS Related Default Setups

### Version

Debian 11 nonfree

### Default Account

User:

- Username: `casaos`
- Password: `casaos`

Root:

- Username: `root`
- Password: `casaos`

### Modifications

#### /etc/profile

1. Combined PATH variable
2. Add CASAOS_VERSION variable, Used to identify the system version.

````diff title='/etc/profile'
  ......

- if [ "$(id -u)" -eq 0 ]; then
-   PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
- else
-   PATH="/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games"
- fi
+ PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/games:/usr/games"
  export PATH

+ CASAOS_VERSION="yyyymmdd-vv"
+ export CASAOS_VERSION

  ......
````

#### /etc/network/interfaces

Delete the primary network interface related statement. Make both NICs hot-pluggable and recognize the network.

````diff title='/etc/network/interfaces'
  # This file describes the network interfaces available on your system
  # and how to activate them. For more information, see interfaces(5).

  source /etc/network/interfaces.d/*

- # The primary network interface
- allow-hotplug enp2s0
- iface enp2s0 inet dhcp
````

#### Add testing source (32G eMMC Only)

````diff title='/etc/apt/preferences.d/stable.pref'
+ # 500 <= P < 990: causes a version to be installed unless there is a
+ # version available belonging to the target release or the installed
+ # version is more recent
+ 
+ Package: *
+ Pin: release a=stable
+ Pin-Priority: 900
````

````diff title='/etc/apt/preferences.d/testing.pref'
+ # 100 <= P < 500: causes a version to be installed unless there is a
+ # version available belonging to some other distribution or the installed
+ # version is more recent
+ 
+ Package: *
+ Pin: release a=testing
+ Pin-Priority: 400
````

````shell title='Shell: Add Testing Source'
cd /etc/apt/sources.list.d
cp ../sources.list stable.list
mv ../sources.list ../sources.list.orignal
cp stable.list testing.list
sed -i 's/ bullseye/ testing/g' testing.list
apt update
````

### Pre-installed packages

- curl
- sudo
- network-manager
- samba
- avahi-daemon
- unzip
- wsdd
- Gnome desktop environment (32G eMMC Only)
- xrdp *testing (32G eMMC Only)

#### sudo setup

````shell title='Shell: Make sudo available to casaos user of base OS'
adduser casaos sudo
````

#### samba setup

````diff title='/etc/samba/smb.conf'
  ......

+ [Data]
+    comment = CasaOS Data
+    path = /DATA
+    public = Yes
+    browseable = Yes
+    read only = No
+    guest ok = Yes
+    create mask = 0777
+    directory mask = 0777
````

#### wsdd setup

````shell title='Shell: Install wsdd'
wget https://github.com/christgau/wsdd/archive/master.zip
unzip -o master.zip
mv -f wsdd-master/src/wsdd.py wsdd-master/src/wsdd
cp wsdd-master/src/wsdd /usr/bin
````

````diff title='/etc/systemd/system/wsdd.service'
+ [Unit]
+ Description=Web Services Dynamic Discovery host daemon
+ ; Start after the network has been configured
+ After=network-online.target
+ Wants=network-online.target
+ ; It makes sense to have Samba running when wsdd starts, but is not required
+ ;Wants=smb.service
+ 
+ [Service]
+ Type=simple
+ ExecStart=/usr/bin/wsdd --shortlog
+ ; Replace those with an unprivledged user/group that matches your environment,
+ ; like nobody/nogroup or daemon:daemon or a dedicated user for wsdd
+ ; User=nobody 
+ ; Group=nobody
+ ; The following lines can be used for a chroot execution of wsdd.
+ ; Also append '--chroot /run/wsdd/chroot' to ExecStart to enable chrooting
+ ;AmbientCapabilities=CAP_SYS_CHROOT
+ ;ExecStartPre=/usr/bin/install -d -o nobody -g nobody -m 0700 /run/wsdd/chroot
+ ;ExecStopPost=rmdir /run/wsdd/chroot
+ 
+ [Install]
+ WantedBy=multi-user.target
````

````shell title='Shell: Enable wsdd'
systemctl daemon-reload
systemctl start wsdd
systemctl enable wsdd
````

#### Gnome desktop environment setups (32G eMMC Only)

````shell title='Shell: Setting the power policy'
RUID=$(who | awk 'FNR == 1 {print $1}')
RUSER_UID=$(id -u ${RUID})
sudo -u ${RUID} DBUS_SESSION_BUS_ADDRESS="unix:path=/run/user/${RUSER_UID}/bus" gsettings set org.gnome.settings-daemon.plugins.power sleep-inactive-ac-timeout 0
sudo -u ${RUID} DBUS_SESSION_BUS_ADDRESS="unix:path=/run/user/${RUSER_UID}/bus" gsettings set org.gnome.desktop.session idle-delay 0
````

### Pre-installed firmware/driver

#### intel-microcode

`New after 20220210`

````shell title='Shell: Install intel-microcode'
apt update
apt install intel-microcode -y
reboot
````

#### AX210 driver

`New after 20220210`

````shell title='Shell: Install AX210 driver'
wget https://wireless.wiki.kernel.org/_media/en/users/drivers/iwlwifi-ty-59.601f3a66.0.tgz
tar -xzvf iwlwifi-ty-59.601f3a66.0.tgz
cp ./iwlwifi-ty-59.601f3a66.0/iwlwifi-ty-a0-gf-a0-59.ucode /lib/firmware/
rm -rf iwlwifi-ty-59.601f3a66.0 iwlwifi-ty-59.601f3a66.0.tgz
reboot
````

## Useful Resources

- [CasaOS Docs](/casaos/intro)
- [Debian Wiki](https://wiki.debian.org)