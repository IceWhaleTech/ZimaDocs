---
sidebar_label: AppFile v2 Definition
title: AppFile v2 Definition | App Store | CasaOS
hide_title: true
toc_max_heading_level: 5
---

# AppFile v2 Definition

:::info
AppFile v2 Definition is a work in progress.

The formal definition will be completed when the App Store is open for contributions.
:::

## Detailed description

### version*

Used to identify the version of CasaOS AppFile to do compatibility adaptations

Type: string

Example:

```json
"version": "2.0"
```

### title*

Display Name

Type: string

Example:

```json
"title": "FileBrowser"
```

### name*

Name, For system and container manager naming

Type: string

Example: 

```json
"name": "filebrowser"
```

### icon*

App Icon url, used to display icons in the Apps list

Type: string

Example: 

```json
"icon": "https://cdn.jsdelivr.net/gh/IceWhaleTech/CasaOS-AppStore@main/Apps/FileBrowser/icon.png"
```

### tagline

A one-sentence description of the App features or value

Type: string

Example: 

```json
"tagline": "Upload, delete, preview, rename, edit and share your files."
```

### overview
Details of the App

Type: string

Example: 

```json
"overview": "File Browser - Webbased File Browser including sharing functions etc."
```

### thumbnail

Thumbnail url for Featured Apps list

Type: string

Example: 

```json
"thumbnail": "https://cdn.jsdelivr.net/gh/IceWhaleTech/CasaOS-AppStore@main/Apps/FileBrowser/thumbnail.jpg"
```

### screenshots

screenshots of the app

Type: string[]

Example: 

```json
"screenshots": [
        "https://cdn.jsdelivr.net/gh/IceWhaleTech/CasaOS-AppStore@main/Apps/FileBrowser/screenshot-1.jpg",
        "https://cdn.jsdelivr.net/gh/IceWhaleTech/CasaOS-AppStore@main/Apps/FileBrowser/screenshot-2.jpg",
        "https://cdn.jsdelivr.net/gh/IceWhaleTech/CasaOS-AppStore@main/Apps/FileBrowser/screenshot-3.jpg"
    ]
```

### category*

Category url of this App, can contain multiple categories

Type: string[]

Category reference: AppFile Template Manual 

Example: 

```json
"category": [
        "Cloud",
        "Utilities",
        "Documents"
    ],
```

### developer*

Original developer of this App

Type: object

Example:

```json
"developer": {
        "name": "CasaOS Team",
        "website": "https://www.casaos.io",
        "donate_text": "",
        "donate_link": ""
    },
```

#### developer.name*

Name of this developer

Type: string

Example:
```json
"name": "CasaOS Team"
```

#### developer.website

Website url of this developer

Type: string

Example:

```json
"website": "https://www.casaos.io"
```

#### developer.donate_text

Donate text of this developer

Type: string

Recommended values: Donate, Buy me a coffee, Ko-fi, Patreon etc.

Example:

```json
"donate_text": "Buy me a coffee"
```

#### developer.donate_link

Donate url of this developer

Type: string

Example:

```json
"donate_link": "https://www.patreon.com/dbtech"
```

### adaptor

Adaptor of this App

Type: object

Example:

```json
"adaptor": {
        "name": "CasaOS Team",
        "website": "https://www.casaos.io",
        "donate_text": "",
        "donate_link": ""
    },
```

#### adaptor.name

Name of this adaptor

Type: string

Example:

```json
"name": "CasaOS Team"
```

#### adaptor.website

Website url of this adaptor

Type: string

Example:

```json
"website": "https://www.casaos.io"
```

#### adaptor.donate_text

donate text of this adaptor

Type: string

Recommended values: Donate, Buy me a coffee, Ko-fi, Patreon etc.

Example:

```json
"donate_text": "Buy me a coffee"
```

#### adaptor.donate_link

donate url of this adaptor

Type: string

Example:

```json
"donate_link": "https://www.patreon.com/dbtech"
```


### container*

Container configuration when the app is container-based

Type: object


#### container.health_check

health_check path after web ui port and path

Type: string

Example:

```json
"health_check": "/health"
```

#### container.ports

##### container.ports.#.configurable

no, basic, advanced

- no
  - User not configurable
  - 用户不可配置
- basic
  - User can configure in Basic
  - 用户可以在基础中配置
- advanced
  - User can configure in Advanced
  - 用户可以在高级中配置

#### container.envs

##### container.envs.#.configurable

no, basic, advanced

- no
  - User not configurable
  - 用户不可配置
- basic
  - User can configure in Basic
  - 用户可以在基础中配置
- advanced
  - User can configure in Advanced
  - 用户可以在高级中配置

#### container.volumes

##### container.volumes.#.configurable

no, basic, advanced

- no
  - User not configurable
  - 用户不可配置
- basic
  - User can configure in Basic
  - 用户可以在基础中配置
- advanced
  - User can configure in Advanced
  - 用户可以在高级中配置

##### container.volumes.#.allocation

required, optional, folder_or_empty_folder, file_or_empty_file, empty_folder, empty_file

- required
  - This file/directory must be present to continue mounting the volume and installing it.
  - 必须有这个文件/目录，才能继续挂载卷并安装。
- optional
  - If this file/directory is present, mount the volume, if not, do not mount it. Both can continue with the install.
  - 如果有这个文件/目录就挂载卷，没有就不挂载。都可以继续安装。
- automatic
  - Follow the processing logic of container, mount the volume if you have this file/directory, create the directory and mount it if you don't.
  - 遵循container的处理逻辑，有这个文件/目录就挂载卷，没有就创建目录然后挂载。

#### container.devices

##### container.devices.#.configurable

no, basic, advanced

- no
  - User not configurable
  - 用户不可配置
- basic
  - User can configure in Basic
  - 用户可以在基础中配置
- advanced
  - User can configure in Advanced
  - 用户可以在高级中配置

##### container.devices.#.allocation

required, optional

- required
  - Continue mounting and installing only if this device is available.
  - 如果有这个设备，才继续挂载和安装。
- optional
  - If this device is present, mount the device, if not, do not mount it. Both can continue with the install.
  - 如果有这个设备就挂载设备，没有就不挂载。都可以继续安装。

#### container.ports

##### container.ports.#.allocation

required, optional, preferred, automatic

- required
  - Only use this host port, otherwise do not continue the install
  - 只能用这个主机端口，否则不继续安装
- optional
  - If this host port is available, map it, if it is not available, do not map it. Both can continue to install
  - 如果这个主机端口可用，就映射，如果不可用则不映射。都可以继续安装
- preferred
  - If this host port is available, it is mapped, if not available it is automatically assigned by the system. Then continue with the installation.
  - 如果这个主机端口可用，就映射，如果不可用则由系统分配映射。然后继续安装。
- automatic
  - The host port is automatically assigned by the system. Then continue with the installation.
  - 由系统自动分配主机端口。然后继续安装。

### tips

App related tips

Type: object

#### tips.before_install

Tips before install app

Type: object[]

Example:

Each object represents one row of information.

The content will be displayed directly and the value will be highlighted after the content.

```json
"before_install": [
    {
        "content": "Default Account"
    },
    {
        "content": "Username: ",
        "value": "admin"
    },
    {
        "content": "Password: ",
        "value": "adminadmin"
    }
]
```
