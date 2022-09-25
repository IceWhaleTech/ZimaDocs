---
title: Experience of OMV
---

# First Login

## Method of Login

![menthod of login omv](/images/Small-body-Big-applications-(OMV+Zima)/menthod-of-login.jpeg)

To login to OMV for the first time, type **`openmediavault.local/ `**into your browser
info
{% note info %}
**User Name**: `admin`
**Password**: `openmediavault`(Users can change the default password after the first login)

{% endnote %}

## Dashboard

![Omv Dashboard](/images/Small-body-Big-applications-OMV-First-Experience/omv-dashboard.jpeg)

**Users can customize the layout of the Dashboard through the settings (gear-shaped button) in the upper right corner.**

![Change OMV Dashboard](/images/Small-body-Big-applications-OMV-First-Experience/change-dashboard.jpeg)

# Three elements of Initialization

## Groups/Users

**Users -> Group -> Create**

![Omv Creat Users](/images/Small-body-Big-applications-OMV-First-Experience/omv-creat-users.jpeg)

 **When creating a new user group, the user can add the newly created user ID to this user group.**

 ![Creat Omv Users Id](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-users-id.jpeg)

**Users -> Users -> Create**

![Creat Omv Permissions](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-permissions.jpeg)

 **The new user belongs to the users group by default, but users can also customize the user group according to their actual needs to differentiate their use.**

 ![Creat Omv Permissions with groups](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-permissions-with-groups.jpeg)

  **The new user's access rights to the shared folder are set by the permissions of the shared folder (please refer to the tutorial content of the shared folder)**
![Creat Omv Permissions with Shared Folders](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-permissions-with-%20share-folders.jpeg)

## Shared Folders

**Storage - File Systems - Mounting Ext3/4 partitions (Mount)**
  **OMV supports direct mounting of existing Ext3 or Ext4 partitions, if the currently connected hard disk does not have such partitions, the relevant disk management (partitioning or formatting) can be performed on the existing partitions of the hard disk**

{% note danger %}
**Mounted partitions are a prerequisite for new shared folders**
{% endnote %}

![Creat Omv Shared Folders](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-share-folders.jpeg)

**Storage -> Shared Folders -> Create**

![Creat Omv Shared Folders](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-share-folders1.jpeg)

**Users can choose to create a new shared folder in the mounted partition and set the appropriate access rights (read/write)**

![Creat Omv Shared Folders Permissions](/images/Small-body-Big-applications-OMV-First-Experience/creat-omv-share-folders-permissions.jpeg)

## Plugins Management

**System -> Update Management -> Updates**

![Omv System Upadtes](/images/Small-body-Big-applications-OMV-First-Experience/omv-system-upadtes.jpeg)

{% note danger %}
**System updates are usually official system patches or updated contents of OMV, so it is recommended to operate the first time after initialization.**
{% endnote %}

**System -> Plugins**

 As mentioned at the beginning of this article, OMV is a Debian Linux-based network attached storage (NAS) solution for a home environment or small office, and its official plug-in library can meet most of the user's daily application requirements.
![Omv System plugins instal ](/images/Small-body-Big-applications-OMV-First-Experience/omv-plugins-install.jpeg)

{% note primary %}
**Must install plug-in recommendation**

**- File manager: [Filebrowser](https://filebrowser.org/)**
**- Netbook: [Onedrive](https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage)**
**- Image Manager: [Photoprism](https://photoprism.app/)**
**- Airport Push: [Shairport](https://github.com/mikebrady/shairport-sync)**
**- OMV system partition sharing: sharerootfs (if the user wants to experience and use Zima's emmc as a shared folder without an external hard drive)**
**- Virtual Machine Manager: [Kvm](https://www.linux-kvm.org/page/Main_Page)**
**- SSH terminal browser: [Wetty](https://github.com/butlerx/wetty)**

{% endnote %}

## Tips for use

### Automatic logout time

![Omv System Automatic logout time](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-automatic-logout-times.jpeg)

**In the process of daily use, most of the users will feel: only after a short time away, you have to re-enter the login and password ...... In fact, this is because the default automatic logout time of OMV is only 5 minutes.**
**System - Workbench - Auto logout**
**Just set the time a little longer to solve this problem.**

### Time Zone

![Omv System Time Zone](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-a-times-zone.jpeg)

**Some users find that when they use data synchronization: I have set it to synchronize data every afternoon, but why it actually synchronizes data early in the morning? This is because users do not set their own time zone.**
**`System - Date & Time - Time zone`**
**You can solve this problem completely.**

###  Reminder notice

![Omv System  Reminder notice](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-reminder-notice.jpeg)

**The small bell in the upper right corner of the OMV desktop often pops up unknown notifications, which users often find annoying because they are not related to them.**
**`System - Notification - Notifications`**
**The user just needs to remove the options that have no effect on their use.**

### Fixed IP address

![Omv System Fixed IP address ](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-fixed-ip-address.jpeg)


**Some users, because of the environmental factors of the LAN, the address of OMV will always change, although you can use Host (openmediavault.local/) to access the management page, but the actual application operation is still not very convenient, at this time, the**
**`Network -> Interface`**
**Users can modify the existing network interface IP from the default DHCP's variable IP address to Static's fixed IP address.**

**Translated with www.DeepL.com/Translator (free version)**

### SMB/CIFS

![Omv System SMB/CIFS ](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-smb-cifs.jpeg)

**SMB service is one of the most basic NAS applications, first time users of OMV will encounter the embarrassment of not being able to create SMB service correctly, in fact, users just need to follow the steps in this guide to complete the initialization of the three elements of the shared folder settings, the creation of SMB service can be easily fixed (the same as NFS service open).**

# OMV Advance Play

## Community Plugin Library

**In addition to the official plugins that come with the system, OMV also has a large library of fan-built/maintained community plugins, the most important of which is full support for Docker.**


**a)** Users can use the official plug-in Wetty [Services (Services) - Wetty] recommended in the previous article

![Omv System Community Plugins ](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-community-plugins.jpeg)


**b)** Open the Web version of Wetty's SSH browser and log in by entering the root account and password set during system installation.

**c) **Login and enter:**<code>`wget -O - https://github.com/OpenMediaVault-Plugin-Developers/packages/raw/master/install | bash`<code>**

![Omv System Community Plugins ](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-community-plugins1.jpeg)


**d)** Once the community plugin repository is installed, users can install Docker

![Omv System Community Plugins ](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-community-plugins2.jpeg)

## Docker与CasaOS

**a)** Login to Wetty's SSH with the root account password and enter.
**<code>`wget -qO- https://get.icewhale.io/casaos.sh | bash`<code>**

![Omv System with-casaos ](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-with-casaos.jpeg)

**b)** After the installation is completed, users must remember the CasaOS login address.

![Omv System with-casaos ](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-with-casaos1.jpeg)

**c)** Enter CasaOS home page, users can easily enjoy our customized Docker application collection

![Omv System with-casaos ](/images/Small-body-Big-applications-OMV-First-Experience/Omv-system-with-casaos2.jpeg)

# Summary

**As a Debian Linux-based network attached storage (NAS) solution for a home environment or small office, OMV's system is small enough to help users meet their daily needs with its own plug-in library, plus a large Docker library and our user-tailored CasaOS, compared to other large NAS systems on the market such as Synology, QNAP and UNAS.**

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)