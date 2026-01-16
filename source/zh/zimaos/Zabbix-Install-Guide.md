---
标题：ZimaOS的Zabbix安装指南  
描述：将你的ZimaOS设备转变为一个强大的、集中式的网络监控服务器。  
类型：文档  
作者：icewhale123456  
提示：顶部栏固定格式请勿删除，描述为文章描述，不填时将截取内容最前一段文字  
---

## 版本信息

- **Zabbix版本：** 7.0 LTS  
- **指南版本：** 1.8  
- **最后更新：** 2026年1月  
- **测试平台：** ZimaOS（基于Buildroot）  
- **创建者：** Holger Kuehn aka Lintuxer  

---

## 为什么选择ZimaOS作为你的监控平台？

ZimaOS设备（如ZimaBoard、ZimaCube）非常适合运行Zabbix监控：

| 优势      | 描述                                      |
|-----------|-----------------------------------------|
| **全天候** | 低功耗设计，适合24/7运行                       |
| **紧凑**   | 小巧的外形，适合放置在网络中的任何地方              |
| **原生Docker支持** | 完美支持容器化服务，如Zabbix                   |
| **高性价比** | 不需要专门的服务器硬件                           |
| **静音**   | 无风扇或安静运行                                |

你无需为监控专门配置一台昂贵的服务器，ZimaOS设备可以作为一个中央监控中心，监控：

- **Windows服务器** — 域控制器、文件服务器、应用服务器  
- **Linux服务器** — Web服务器、数据库、Docker主机  
- **网络设备** — 交换机、路由器、接入点（通过SNMP）  
- **物联网与智能家居** — 所有具备网络连接的设备  
- **ZimaOS设备本身** — 包含自我监控  

## 概述

本指南包括：
- 在ZimaOS上部署Zabbix服务器作为中央监控平台
- 配置Docker容器之间的网络通信
- 监控ZimaOS主机本身
- 添加Windows服务器进行监控（包括VLAN隔离环境）
- 添加Linux服务器及其他网络设备
- 备份、恢复以及保持Zabbix更新

## 使用案例示例

```
                         ┌─────────────────────────────┐
                         │        ZimaOS Device        │
                         │    (Monitoring Platform)    │
                         │                             │
                         │  ┌───────────────────────┐  │
                         │  │   Zabbix Server       │  │
                         │  │   + Web Interface     │  │
                         │  │   + PostgreSQL        │  │
                         │  └───────────────────────┘  │
                         └──────────────┬──────────────┘
                                        │
            ┌───────────────────────────┼───────────────────────────┐
            │                           │                           │
            ▼                           ▼                           ▼
   ┌─────────────────┐        ┌─────────────────┐        ┌─────────────────┐
   │ Windows Server  │        │  Linux Server   │        │ Network Devices │
   │ (Active Agent)  │        │ (Active Agent)  │        │    (SNMP)       │
   │                 │        │                 │        │                 │
   │ • File Server   │        │ • Web Server    │        │ • UniFi Switch  │
   │ • Domain Ctrl   │        │ • Docker Host   │        │ • Access Points │
   │ • SQL Server    │        │ • NAS           │        │ • Router        │
   └─────────────────┘        └─────────────────┘        └─────────────────┘
```

**VLAN隔离网络的活动模式：** 代理从Zabbix发起连接，无需在受保护的VLAN中配置入站防火墙规则。

## 先决条件

- 已安装并运行ZimaOS
- 可以通过SSH访问ZimaOS设备
- 基础的Docker概念了解
- 监控目标和Zabbix服务器之间的网络访问

## 为什么在ZimaOS上选择Docker安装？

有两种主要方式可以安装Zabbix：

| 方法        | 描述                                      | 最适合对象                           |
|-------------|-----------------------------------------|------------------------------------|
| **传统方式**   | 通过apt/yum直接在操作系统上安装包              | Debian、Ubuntu、RHEL服务器            |
| **Docker方式** | 将服务作为容器运行                          | ZimaOS、以容器为优先的环境            |

**对于ZimaOS，Docker是唯一实际可行的选项，原因如下：**

1. **没有包管理器** — ZimaOS使用Buildroot，未包含apt、yum等工具
2. **不可变的基础系统** — ZimaOS旨在保持不变，应用程序作为容器运行
3. **简便的更新** — 通过拉取新的镜像而非复杂的包升级
4. **清晰的隔离** — 每个服务独立运行，易于备份/恢复
5. **ZimaOS原生支持** — CasaOS/ZimaOS是围绕Docker构建的

**为什么默认的“Zabbix服务器”主机不可用：**

传统的Zabbix安装将服务器和代理运行在同一台机器上，所以`127.0.0.1:10050`能连接到本地代理。在Docker中，每个服务在其独立的容器中运行，具有自己的网络命名空间。服务器容器的`127.0.0.1`指向的是自己（没有代理运行），而不是代理容器。因此，我们删除这个默认主机，创建一个新的，指向通过Docker DNS解析的`zabbix-agent`。

## 架构

```
┌─────────────────────────────────────────────────────┐
│              zabbix-net（Docker网络）              │
│                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │
│  │  postgres   │  │zabbix-server│  │ zabbix-web  │  │
│  │ 端口5432    │  │ 端口10051   │  │ 端口8080    │  │
│  │  (内部)    │  │  (外部暴露) │  │  (外部暴露) │  │
│  └─────────────┘  └─────────────┘  └─────────────┘  │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
             ┌─────────────────────────┐
             │   Zabbix代理            │
             │   - ZimaOS（容器）      │
             │   - Windows（活动代理） │
             │   - Linux（活动代理）   │
             └─────────────────────────┘
```

## 部分1：Zabbix服务器安装

### 步骤1：创建Docker网络

ZimaOS使用默认的Docker桥接网络，而**该网络不支持容器间的DNS解析**。你必须创建一个自定义网络。

```bash
sudo docker network create zabbix-net
```

### 步骤2：部署PostgreSQL数据库

```bash
sudo docker run -d \
  --name zabbix-postgres \
  --network zabbix-net \
  --network-alias postgres \
  -e POSTGRES_USER=zabbix \
  -e POSTGRES_PASSWORD=zabbix \
  -e POSTGRES_DB=zabbix \
  -v zabbix-postgres-data:/var/lib/postgresql/data \
  --restart unless-stopped \
  postgres:15-alpine
```

**重要提示：** `--network-alias postgres`非常关键——其他容器将使用这个主机名进行连接。

**等待PostgreSQL初始化：**
```bash
# 等待15秒以初始化数据库
sleep 15

# 查看PostgreSQL是否正在运行
sudo docker logs zabbix-postgres 2>&1 | tail -5
```

你应该能看到：`database system is ready to accept connections`

### 步骤3：部署Zabbix服务器

```bash
sudo docker run -d \
  --name zabbix-server \
  --network zabbix-net \
  --network-alias zabbix-server \
  -e DB_SERVER_HOST=postgres \
  -e POSTGRES_USER=zabbix \
  -e POSTGRES_PASSWORD=zabbix \
  -e POSTGRES_DB=zabbix \
  -p 10051:10051 \
  --restart unless-stopped \
  zabbix/zabbix-server-pgsql:alpine-7.0-latest
```

**等待Zabbix服务器初始化：**
```bash
# 等待10秒以初始化服务器
sleep 10

# 查看服务器启动情况（可能会显示一些警告，正常）
sudo docker logs zabbix-server 2>&1 | tail -5
```

### 步骤4：部署Zabbix Web界面

```bash
sudo docker run -d \
  --name zabbix-web \
  --network zabb