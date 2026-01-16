---
title: Zabbix Installation Guide for ZimaOS
description: Turn your ZimaOS device into a powerful, centralized monitoring server for your entire network.
type: Docs
author: icewhale123456
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---

## Version Information

- **Zabbix Version:** 7.0 LTS
- **Guide Version:** 1.8
- **Last Updated:** January 2026
- **Tested On:** ZimaOS (Buildroot-based)
-**Created by:** Holger Kuehn aka Lintuxer

---
  

## Why Use ZimaOS as Your Monitoring Platform?

ZimaOS devices (ZimaBoard, ZimaCube) are ideal candidates for running Zabbix monitoring:

| Advantage | Description |
|-----------|-------------|
| **Always-on** | Low power consumption, designed for 24/7 operation |
| **Compact** | Small form factor, fits anywhere in your network |
| **Docker-native** | Perfect for containerized services like Zabbix |
| **Cost-effective** | No need for dedicated server hardware |
| **Silent** | Fanless or quiet operation |

Instead of dedicating an expensive server to monitoring, your ZimaOS device can serve as a central monitoring hub that watches over:

- **Windows Servers** – Domain controllers, file servers, application servers
- **Linux Servers** – Web servers, databases, Docker hosts
- **Network Devices** – Switches, routers, access points (via SNMP)
- **IoT & Smart Home** – Any device with network connectivity
- **The ZimaOS device itself** – Full self-monitoring included

## Overview

This guide covers:
- Deploying Zabbix Server on ZimaOS as your central monitoring platform
- Network configuration for Docker container communication
- Monitoring the ZimaOS host itself
- Adding Windows Servers to monitoring (including VLAN-isolated environments)
- Adding Linux servers and other network devices
- Backup, restore, and keeping Zabbix updated

## Use Case Example

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

**Active Mode for VLAN-isolated networks:** Agents connect outbound to Zabbix – no inbound firewall rules needed in your secured VLANs.

## Prerequisites

- ZimaOS installed and running
- SSH access to your ZimaOS device
- Basic understanding of Docker concepts
- Network access between monitoring targets and Zabbix server

## Why Docker Installation for ZimaOS?

There are two main ways to install Zabbix:

| Method | Description | Best For |
|--------|-------------|----------|
| **Traditional** | Install packages via apt/yum directly on OS | Debian, Ubuntu, RHEL servers |
| **Docker** | Run services as containers | ZimaOS, container-first environments |

**For ZimaOS, Docker is the only practical option because:**

1. **No package manager** – ZimaOS uses Buildroot, which doesn't include apt, yum, or similar tools
2. **Immutable base system** – ZimaOS is designed to remain unchanged; apps run as containers
3. **Easy updates** – Pull new images instead of complex package upgrades
4. **Clean separation** – Each service isolated, easy to backup/restore via volumes
5. **Native to ZimaOS** – CasaOS/ZimaOS is built around Docker

**Why the default "Zabbix server" host doesn't work:**

Traditional Zabbix installations run the server and agent on the same machine, so `127.0.0.1:10050` reaches the local agent. In Docker, each service runs in its own isolated container with its own network namespace. The server container's `127.0.0.1` points to itself (where no agent runs), not to the agent container. That's why we delete this default host and create a new one pointing to `zabbix-agent` via Docker DNS.

## Architecture

```
┌─────────────────────────────────────────────────────┐
│              zabbix-net (Docker Network)            │
│                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │
│  │  postgres   │  │zabbix-server│  │ zabbix-web  │  │
│  │  Port 5432  │  │ Port 10051  │  │  Port 8080  │  │
│  │  (internal) │  │  (exposed)  │  │  (exposed)  │  │
│  └─────────────┘  └─────────────┘  └─────────────┘  │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
             ┌─────────────────────────┐
             │   Zabbix Agents         │
             │   - ZimaOS (container)  │
             │   - Windows (active)    │
             │   - Linux (active)      │
             └─────────────────────────┘
```

## Part 1: Zabbix Server Installation

### Step 1: Create Docker Network

ZimaOS uses the default Docker bridge network which **does not support DNS resolution** between containers. You must create a custom network.

```bash
sudo docker network create zabbix-net
```

### Step 2: Deploy PostgreSQL Database

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

**Important:** The `--network-alias postgres` is critical - other containers will use this hostname to connect.

**Wait for PostgreSQL to initialize:**
```bash
# Wait 15 seconds for database initialization
sleep 15

# Verify PostgreSQL is running
sudo docker logs zabbix-postgres 2>&1 | tail -5
```

You should see: `database system is ready to accept connections`

### Step 3: Deploy Zabbix Server

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

**Wait for Zabbix Server to initialize:**
```bash
# Wait 10 seconds for server initialization
sleep 10

# Verify server is starting (may show some warnings initially, that's normal)
sudo docker logs zabbix-server 2>&1 | tail -5
```

### Step 4: Deploy Zabbix Web Interface

```bash
sudo docker run -d \
  --name zabbix-web \
  --network zabbix-net \
  -e DB_SERVER_HOST=postgres \
  -e ZBX_SERVER_HOST=zabbix-server \
  -e POSTGRES_USER=zabbix \
  -e POSTGRES_PASSWORD=zabbix \
  -e POSTGRES_DB=zabbix \
  -p 8080:8080 \
  --restart unless-stopped \
  zabbix/zabbix-web-nginx-pgsql:alpine-7.0-latest
```

### Step 5: Verify Installation

Check all containers are running:

```bash
sudo docker ps | grep zabbix
```

Check network connectivity:

```bash
sudo docker network inspect zabbix-net --format '{{range .Containers}}{{.Name}} {{end}}'
```

Expected output: `zabbix-postgres zabbix-server zabbix-web`

### Step 6: Access Web Interface

1. Open browser: `http://<zimaos-ip>:8080`
2. Login with default credentials:
   - Username: **Admin**
   - Password: **zabbix**
3. **Change the password immediately!**

### Verification Checklist

In the Zabbix dashboard, verify:
- "Zabbix server is running" shows **Yes**
- Server version displays correctly

---

## Part 2: Monitoring ZimaOS Host

Since ZimaOS is Buildroot-based (no apt/package manager), the Zabbix agent runs as a container. This section covers comprehensive host monitoring including system metrics and Docker container monitoring.

### Why Containerized Agent?

ZimaOS uses Buildroot which provides a minimal Linux environment without traditional package managers like apt or yum. The containerized Zabbix Agent 2 provides:

- Full system monitoring via mounted host filesystem
- Docker container monitoring via socket access
- No modifications to the base ZimaOS system
- Easy updates by pulling new container images

### Step 1: Deploy Zabbix Agent Container

```bash
sudo docker run -d \
  --name zabbix-agent \
  --network zabbix-net \
  --network-alias zabbix-agent \
  --privileged \
  --pid=host \
  --user root \
  -e ZBX_HOSTNAME="ZimaOS" \
  -e ZBX_SERVER_HOST="zabbix-server" \
  -v /:/rootfs:ro \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /proc:/host/proc:ro \
  -v /sys:/host/sys:ro \
  --restart unless-stopped \
  zabbix/zabbix-agent2:alpine-7.0-latest
```

**Explanation of parameters:**

| Parameter | Purpose |
|-----------|---------|
| `--network zabbix-net` | Same network as Zabbix server for communication |
| `--network-alias zabbix-agent` | DNS name for the agent container |
| `--privileged` | Required for full system access |
| `--pid=host` | Access to host process information |
| `--user root` | Required for Docker socket access |
| `-v /:/rootfs:ro` | Mount entire host filesystem (read-only) |
| `-v /var/run/docker.sock` | Docker API access for container monitoring |
| `-v /proc:/host/proc:ro` | Host process information |
| `-v /sys:/host/sys:ro` | Host system information |
| `ZBX_HOSTNAME` | Must match exactly with host name in Zabbix UI |
| `ZBX_SERVER_HOST` | Zabbix server hostname (uses Docker DNS) |

> ⚠️ **Note:** The `--user root` flag and Docker socket without `:ro` are required for Docker monitoring to work. Without these, you'll get "permission denied" errors for Docker metrics.

### Step 2: Verify Agent is Running

```bash
# Check container status
sudo docker ps | grep zabbix-agent

# Check agent logs
sudo docker logs zabbix-agent --tail 20
```

Expected log output:
```
Starting Zabbix Agent 2 [ZimaOS]. Zabbix 7.0.x
Press Ctrl+C to exit.
```

### Step 3: Add ZimaOS Host in Zabbix UI

1. Navigate to: **Data collection → Hosts → Create host**

2. **Host Tab:**
   - **Host name:** `ZimaOS` (must match ZBX_HOSTNAME exactly!)
   - **Visible name:** `ZimaOS Server` (optional, for display)
   - **Host groups:** Click Select → Choose "Linux servers" or create new
   - **Interfaces:** Click Add → Agent
     - **Type:** Agent
     - **IP address:** `127.0.0.1` (placeholder, required but not used)
     - **DNS name:** `zabbix-agent`
     - **Connect to:** Click on **DNS** button (must be highlighted/active!)
     - **Port:** `10050`
   
   > ⚠️ **Important:** The "DNS" button must be actively selected (highlighted). If "IP" is selected, the agent won't be reachable!

3. **Templates Tab:**
   Click Select and add these templates:
   - `Linux by Zabbix agent` - System monitoring
   - `Docker by Zabbix agent 2` - Container monitoring

4. Click **Add**

### Step 4: Verify Data Collection

After adding the host, wait 1-2 minutes then verify:

1. **Check host availability:**
   - Data collection → Hosts
   - Look for green **ZBX** icon in Availability column

2. **View collected data:**
   - Monitoring → Hosts → ZimaOS → Latest data
   - You should see metrics populating

### Step 5: Remove Default "Zabbix server" Host

Zabbix comes with a pre-configured "Zabbix server" host that tries to monitor itself on `127.0.0.1:10050`. Since no agent runs inside the server container, this will always show as unavailable.

**Recommendation:** Delete this host to avoid confusion.

1. **Data collection → Hosts**
2. Check the box next to **"Zabbix server"**
3. Click **Delete** at the bottom
4. Confirm deletion

> **Note:** This only removes the monitoring entry, not the actual Zabbix server! Your Zabbix installation will continue to work normally.

### Available Metrics

#### System Metrics (Linux by Zabbix agent)

| Category | Metrics |
|----------|---------|
| **CPU** | Utilization, load average, context switches, interrupts |
| **Memory** | Total, available, used, cached, buffers, swap |
| **Disk** | Space used/free per mount, I/O operations, read/write rates |
| **Network** | Traffic in/out per interface, packets, errors |
| **System** | Uptime, boot time, number of processes, logged in users |
| **File Systems** | Inode usage, mount point status |

#### Docker Metrics (Docker by Zabbix agent 2)

| Category | Metrics |
|----------|---------|
| **Containers** | Running, stopped, total count |
| **Per Container** | CPU %, memory usage, network I/O, status |
| **Images** | Total images, size |
| **Volumes** | Volume count and usage |

### Step 5: Customize Monitoring (Optional)

#### Add Custom Items

You can monitor ZimaOS-specific items. Example - monitor CasaOS app status:

1. Data collection → Hosts → ZimaOS → Items → Create item
2. Configure:
   - **Name:** `CasaOS Service Status`
   - **Type:** Zabbix agent
   - **Key:** `system.run["docker ps --filter name=casaos --format '{{.Status}}'"]`
   - **Type of information:** Text

#### Create Custom Dashboard

1. Dashboards → Create dashboard
2. Add widgets:
   - **Graph** - CPU/Memory usage over time
   - **Problems** - Current alerts
   - **Host availability** - ZimaOS status
   - **Data overview** - Key metrics at a glance

### Troubleshooting ZimaOS Agent

#### Problem: Agent container not starting

**Check logs:**
```bash
sudo docker logs zabbix-agent
```

**Common causes:**
- Network `zabbix-net` doesn't exist
- Port conflict on 10050

#### Problem: No data in Zabbix UI

**Verify network connectivity:**
```bash
# From agent container, test connection to server
sudo docker exec zabbix-agent zabbix_agent2 -t agent.ping
```

**Check if agent is in correct network:**
```bash
sudo docker network inspect zabbix-net --format '{{range .Containers}}{{.Name}} {{end}}'
```

Should include: `zabbix-agent`

#### Problem: "Get value from agent failed: cannot connect"

**Solution:** Ensure the agent has the network alias:
```bash
sudo docker network disconnect zabbix-net zabbix-agent
sudo docker network connect --alias zabbix-agent zabbix-net zabbix-agent
sudo docker restart zabbix-agent
```

#### Problem: Docker metrics not appearing

**Verify Docker socket access:**
```bash
sudo docker exec zabbix-agent ls -la /var/run/docker.sock
```

**Test Docker discovery:**
```bash
sudo docker exec zabbix-agent zabbix_agent2 -t docker.containers.discovery
```

### Monitoring Multiple ZimaOS Devices

If you have multiple ZimaOS devices (e.g., ZimaBoard, ZimaCube), deploy an agent on each:

**On second device:**
```bash
sudo docker run -d \
  --name zabbix-agent \
  --privileged \
  --pid=host \
  --user root \
  -e ZBX_HOSTNAME="ZimaCube" \
  -e ZBX_SERVER_HOST="<zabbix-server-ip>" \
  -e ZBX_ACTIVESERVERS="<zabbix-server-ip>:10051" \
  -v /:/rootfs:ro \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /proc:/host/proc:ro \
  -v /sys:/host/sys:ro \
  -p 10050:10050 \
  --restart unless-stopped \
  zabbix/zabbix-agent2:alpine-7.0-latest
```

**Note:** For remote ZimaOS devices, use `ZBX_ACTIVESERVERS` for Active Mode if they're in different VLANs (see Windows Server section for VLAN considerations).

Then add each device as a separate host in Zabbix UI with matching hostname.

---

## Part 3: Monitoring Windows Servers

### Scenario: VLAN-Isolated Windows Server

For environments with VLAN isolation where the Zabbix server cannot initiate connections to monitored hosts, use **Active Mode**. The Windows agent initiates the connection outbound.

### Firewall Requirements

Allow the following traffic:
- **From:** Windows Server VLAN
- **To:** ZimaOS IP, Port 10051/TCP
- **Direction:** Outbound from Windows perspective

### Windows Agent Installation

1. **Download** Zabbix Agent from: https://www.zabbix.com/download_agents
   - Select: Windows → MSI package → amd64

2. **Run installer** with these settings:
   - **Host name:** `WindowsServer01` (use a descriptive name)
   - **Zabbix server IP/DNS:** `<zimaos-ip>` (e.g., 192.168.0.225)
   - **Agent listen port:** `10050`
   - **Server or Proxy for active checks:** `<zimaos-ip>:10051`

3. **Verify service is running:**
   ```powershell
   Get-Service *zabbix*
   ```

4. **Test connectivity:**
   ```powershell
   Test-NetConnection -ComputerName <zimaos-ip> -Port 10051
   ```
   
   Expected: `TcpTestSucceeded: True`

5. **Check agent logs:**
   ```powershell
   Get-Content "C:\Program Files\Zabbix Agent\zabbix_agentd.log" -Tail 20
   ```
   
   Look for: `Active check configuration update from [<ip>:10051] is working again`

### Add Windows Host in Zabbix UI

1. Navigate to: **Data collection → Hosts → Create host**
2. Configure:
   - **Host name:** `WindowsServer01` (must match agent config EXACTLY - case sensitive!)
   - **Host groups:** Select or create "Windows servers"
   - **Templates:** `Windows by Zabbix agent active`
   - **Interfaces:** Leave empty (Active Mode doesn't need interface definition)
3. Click **Add**

### Troubleshooting Windows Agent

**Problem:** `host [HostName] not found` in agent log

**Solution:** The hostname in the agent configuration must match EXACTLY (case-sensitive) with the host name configured in Zabbix UI.

---

## Part 4: Troubleshooting

### Container Communication Issues

**Symptom:** `PostgreSQL server is not available. Waiting 5 seconds...`

**Cause:** Containers are in the default bridge network which lacks DNS resolution.

**Solution:**
```bash
# Check current network
sudo docker inspect <container-name> --format '{{range $k, $v := .NetworkSettings.Networks}}{{$k}} {{end}}'

# If in "bridge" instead of "zabbix-net", reconnect:
sudo docker stop <container-name>
sudo docker network disconnect bridge <container-name>
sudo docker network connect --alias <alias> zabbix-net <container-name>
sudo docker start <container-name>
```

### Zabbix Server Not Running

**Symptom:** Dashboard shows "Zabbix server is running: No"

**Solution:** Add network alias for zabbix-server:
```bash
sudo docker network disconnect zabbix-net zabbix-server
sudo docker network connect --alias zabbix-server zabbix-net zabbix-server
sudo docker restart zabbix-server zabbix-web
```

### Agent Not Connecting

**Checklist:**
1. Hostname matches exactly (case-sensitive)
2. Network connectivity exists (Test-NetConnection)
3. Firewall allows traffic on port 10051
4. Agent service is running
5. Correct template selected (active vs. passive)

---

## Part 5: Post-Installation Tasks

### Recommended Initial Configuration

1. **Change admin password**
   - User settings → Password

2. **Create host groups**
   - Data collection → Host groups → Create host group
   - Examples: "Windows servers", "Linux servers", "Network devices"

3. **Configure alerting**
   - Alerts → Media types (Email, Telegram, etc.)
   - Alerts → Actions → Create action

4. **Explore built-in templates**
   - Data collection → Templates
   - Available for: Docker, VMware, SNMP devices, databases, etc.

### Useful Navigation

| Task | Location |
|------|----------|
| View all metrics | Monitoring → Latest data |
| See graphs | Monitoring → Hosts → [Host] → Graphs |
| Current problems | Monitoring → Problems |
| Configure alerts | Alerts → Actions |
| Add hosts | Data collection → Hosts |
| Manage templates | Data collection → Templates |

---

## Part 6: Backup & Restore

### What to Backup

| Component | Location | Contains |
|-----------|----------|----------|
| **PostgreSQL Data** | Docker volume `zabbix-postgres-data` | All configuration, hosts, history, trends |
| **Zabbix Config** | Inside database | Templates, users, dashboards, alerts |

The PostgreSQL volume contains everything – hosts, templates, historical data, user accounts, dashboards. Back this up regularly!

### Manual Backup

**Option 1: Database Dump (Recommended)**

```bash
# Create backup directory
mkdir -p ~/zabbix-backups

# Dump database to SQL file
sudo docker exec zabbix-postgres pg_dump -U zabbix zabbix > ~/zabbix-backups/zabbix_$(date +%Y%m%d_%H%M%S).sql

# Verify backup was created
ls -lh ~/zabbix-backups/
```

**Option 2: Volume Backup**

```bash
# Stop containers first (ensures data consistency)
sudo docker stop zabbix-web zabbix-server zabbix-agent

# Backup the volume
sudo docker run --rm \
  -v zabbix-postgres-data:/source:ro \
  -v ~/zabbix-backups:/backup \
  alpine tar czf /backup/zabbix-volume_$(date +%Y%m%d_%H%M%S).tar.gz -C /source .

# Start containers again
sudo docker start zabbix-postgres zabbix-server zabbix-web zabbix-agent
```

### Automated Backup (Cron)

Create a backup script:

```bash
cat << 'EOF' > ~/zabbix-backup.sh
#!/bin/bash
BACKUP_DIR=~/zabbix-backups
KEEP_DAYS=7

# Create backup
docker exec zabbix-postgres pg_dump -U zabbix zabbix > "$BACKUP_DIR/zabbix_$(date +%Y%m%d_%H%M%S).sql"

# Delete backups older than KEEP_DAYS
find "$BACKUP_DIR" -name "zabbix_*.sql" -mtime +$KEEP_DAYS -delete
EOF

chmod +x ~/zabbix-backup.sh
```

Add to crontab (daily at 2 AM):

```bash
(crontab -l 2>/dev/null; echo "0 2 * * * ~/zabbix-backup.sh") | crontab -
```

### Restore from Backup

**From SQL Dump:**

```bash
# Stop server and web (keep postgres running)
sudo docker stop zabbix-web zabbix-server zabbix-agent

# Drop and recreate database
sudo docker exec -i zabbix-postgres psql -U zabbix -c "DROP DATABASE zabbix;"
sudo docker exec -i zabbix-postgres psql -U zabbix -c "CREATE DATABASE zabbix;"

# Restore from backup
sudo docker exec -i zabbix-postgres psql -U zabbix zabbix < ~/zabbix-backups/zabbix_YYYYMMDD_HHMMSS.sql

# Start containers
sudo docker start zabbix-server zabbix-web zabbix-agent
```

**From Volume Backup:**

```bash
# Stop all containers
sudo docker stop zabbix-web zabbix-server zabbix-agent zabbix-postgres

# Remove old volume
sudo docker volume rm zabbix-postgres-data

# Create new volume and restore
sudo docker volume create zabbix-postgres-data
sudo docker run --rm \
  -v zabbix-postgres-data:/target \
  -v ~/zabbix-backups:/backup \
  alpine tar xzf /backup/zabbix-volume_YYYYMMDD_HHMMSS.tar.gz -C /target

# Start containers
sudo docker start zabbix-postgres
sleep 10
sudo docker start zabbix-server zabbix-web zabbix-agent
```

---

## Part 7: Updating Zabbix

### Update Strategy

Zabbix follows semantic versioning: **Major.Minor.Patch** (e.g., 7.0.22)

| Update Type | Risk | Downtime | Example |
|-------------|------|----------|---------|
| **Patch** (7.0.x → 7.0.y) | Low | ~1 min | Bug fixes, security |
| **Minor** (7.x → 7.y) | Medium | ~5 min | New features |
| **Major** (6.x → 7.x) | High | 10+ min | Breaking changes, DB migration |

> ⚠️ **Always backup before updating!**

### Check Current Version

```bash
# In Zabbix UI: Bottom right shows version
# Or via command:
sudo docker exec zabbix-server zabbix_server -V
```

### Check Available Updates

```bash
# Pull latest images (doesn't affect running containers)
sudo docker pull zabbix/zabbix-server-pgsql:alpine-7.0-latest
sudo docker pull zabbix/zabbix-web-nginx-pgsql:alpine-7.0-latest
sudo docker pull zabbix/zabbix-agent2:alpine-7.0-latest
sudo docker pull postgres:15-alpine
```

### Perform Update

**Step 1: Backup**

```bash
sudo docker exec zabbix-postgres pg_dump -U zabbix zabbix > ~/zabbix-backups/zabbix_pre_update_$(date +%Y%m%d).sql
```

**Step 2: Stop and Remove Old Containers**

```bash
sudo docker stop zabbix-web zabbix-server zabbix-agent
sudo docker rm zabbix-web zabbix-server zabbix-agent
```

> **Note:** Don't remove zabbix-postgres unless you're updating PostgreSQL!

**Step 3: Pull New Images**

```bash
sudo docker pull zabbix/zabbix-server-pgsql:alpine-7.0-latest
sudo docker pull zabbix/zabbix-web-nginx-pgsql:alpine-7.0-latest
sudo docker pull zabbix/zabbix-agent2:alpine-7.0-latest
```

**Step 4: Start New Containers**

```bash
# Zabbix Server
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

sleep 10

# Zabbix Web
sudo docker run -d \
  --name zabbix-web \
  --network zabbix-net \
  -e DB_SERVER_HOST=postgres \
  -e ZBX_SERVER_HOST=zabbix-server \
  -e POSTGRES_USER=zabbix \
  -e POSTGRES_PASSWORD=zabbix \
  -e POSTGRES_DB=zabbix \
  -p 8080:8080 \
  --restart unless-stopped \
  zabbix/zabbix-web-nginx-pgsql:alpine-7.0-latest

# Zabbix Agent
sudo docker run -d \
  --name zabbix-agent \
  --network zabbix-net \
  --network-alias zabbix-agent \
  --privileged \
  --pid=host \
  --user root \
  -e ZBX_HOSTNAME="ZimaOS" \
  -e ZBX_SERVER_HOST="zabbix-server" \
  -v /:/rootfs:ro \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /proc:/host/proc:ro \
  -v /sys:/host/sys:ro \
  --restart unless-stopped \
  zabbix/zabbix-agent2:alpine-7.0-latest
```

**Step 5: Verify**

```bash
sudo docker ps | grep zabbix
sudo docker logs zabbix-server --tail 20
```

Check Web UI – version should be updated.

### Update PostgreSQL (Careful!)

PostgreSQL major version updates require data migration. Only update if necessary.

```bash
# Check current version
sudo docker exec zabbix-postgres postgres --version

# For minor updates within same major version (e.g., 15.x to 15.y):
sudo docker stop zabbix-postgres
sudo docker rm zabbix-postgres
sudo docker pull postgres:15-alpine

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

> ⚠️ For major PostgreSQL version upgrades (e.g., 15 → 16), you need to dump/restore the database. This is beyond the scope of this guide.

### Rollback if Update Fails

If something goes wrong:

```bash
# Stop broken containers
sudo docker stop zabbix-web zabbix-server zabbix-agent
sudo docker rm zabbix-web zabbix-server zabbix-agent

# Restore database from backup
sudo docker exec -i zabbix-postgres psql -U zabbix -c "DROP DATABASE zabbix;"
sudo docker exec -i zabbix-postgres psql -U zabbix -c "CREATE DATABASE zabbix;"
sudo docker exec -i zabbix-postgres psql -U zabbix zabbix < ~/zabbix-backups/zabbix_pre_update_YYYYMMDD.sql

# Pull previous version (specify exact tag instead of 'latest')
sudo docker pull zabbix/zabbix-server-pgsql:alpine-7.0.22
# ... then redeploy with the specific version tag
```

---

## Quick Reference: Docker Commands

```bash
# View all Zabbix containers
sudo docker ps | grep zabbix

# View logs
sudo docker logs zabbix-server --tail 50
sudo docker logs zabbix-web --tail 50
sudo docker logs zabbix-postgres --tail 50

# Restart all Zabbix containers
sudo docker restart zabbix-postgres zabbix-server zabbix-web

# Check network membership
sudo docker network inspect zabbix-net

# Stop and remove everything (start fresh)
sudo docker stop zabbix-web zabbix-server zabbix-postgres zabbix-agent
sudo docker rm zabbix-web zabbix-server zabbix-postgres zabbix-agent
sudo docker network rm zabbix-net
sudo docker volume rm zabbix-postgres-data
```

---

## Appendix: Complete Single-Script Installation

For a fresh installation, save this as `install-zabbix.sh`:

```bash
#!/bin/bash

# Create network
sudo docker network create zabbix-net

# PostgreSQL
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

echo "Waiting for PostgreSQL to initialize..."
sleep 15

# Zabbix Server
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

echo "Waiting for Zabbix Server to initialize..."
sleep 10

# Zabbix Web
sudo docker run -d \
  --name zabbix-web \
  --network zabbix-net \
  -e DB_SERVER_HOST=postgres \
  -e ZBX_SERVER_HOST=zabbix-server \
  -e POSTGRES_USER=zabbix \
  -e POSTGRES_PASSWORD=zabbix \
  -e POSTGRES_DB=zabbix \
  -p 8080:8080 \
  --restart unless-stopped \
  zabbix/zabbix-web-nginx-pgsql:alpine-7.0-latest

# Zabbix Agent for ZimaOS
sudo docker run -d \
  --name zabbix-agent \
  --network zabbix-net \
  --network-alias zabbix-agent \
  --privileged \
  --pid=host \
  --user root \
  -e ZBX_HOSTNAME="ZimaOS" \
  -e ZBX_SERVER_HOST="zabbix-server" \
  -v /:/rootfs:ro \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /proc:/host/proc:ro \
  -v /sys:/host/sys:ro \
  --restart unless-stopped \
  zabbix/zabbix-agent2:alpine-7.0-latest

echo ""
echo "Installation complete!"
echo "Access Zabbix at: http://$(hostname -I | awk '{print $1}'):8080"
echo "Default login: Admin / zabbix"
```

Run with:
```bash
chmod +x install-zabbix.sh
./install-zabbix.sh
```

**After running the script:** You still need to add the ZimaOS host in Zabbix UI (see Part 2, Step 3) to start collecting metrics.

---

