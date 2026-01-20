---
title: Ubuntu LTS Minimal, Discos em Espelho, e Docker Engine
description:
type: Docs
author: icewhale123456
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---

>Este guia foi originalmente criado por **<u>ZaNgA</u>**. Agradecemos sinceramente a sua contribuição.

Este tutorial orienta-o através da configuração de um **ZimaBoard** como um servidor de laboratório doméstico compacto e fiável ou servidor edge:

1. Instalar o **Ubuntu LTS mais recente (minimal)** no ZimaBoard
2. Configurar **dois discos SATA num espelho RAID‑1** usando `mdadm`
3. Instalar e validar o **Docker Engine**

O guia assume familiaridade básica com a linha de comandos Linux e usa o **Ubuntu Server LTS** (minimal, sem interface gráfica).

---

## 1. Pré-requisitos

### Hardware

* ZimaBoard (qualquer modelo)
* Teclado USB + monitor HDMI **ou** acesso série/SSH
* Pen USB (≥ 4 GB)
* 2× discos SATA (SSD ou HDD, mesmo tamanho recomendado)
* Cabos de alimentação e dados SATA (incluídos com o ZimaBoard)

### Software

* Ubuntu Server **latest LTS** ISO (minimal)
* Ferramenta de criação: **Balena Etcher**, **Rufus**, ou `dd`

---

## 2. Transferir Ubuntu Server LTS (Minimal)

1. Vá à página oficial de transferências do Ubuntu
2. Transfira o **Ubuntu Server LTS** (por exemplo, 24.04 LTS)
3. Não são necessários pacotes adicionais — o ISO do servidor já é minimal

---

## 3. Criar o USB de Arranque

No Linux:

```bash
sudo dd if=ubuntu-24.04-live-server-amd64.iso of=/dev/sdX bs=4M status=progress oflag=sync
```

Substitua `/dev/sdX` pelo seu dispositivo USB.

No Windows/macOS:

* Use **Balena Etcher** ou **Rufus**

---

## 4. Instalar o Ubuntu no ZimaBoard

1. Insira a pen USB no ZimaBoard
2. Ligue-o e pressione **DEL** ou **F7** para entrar na BIOS
3. Defina o USB como primeiro dispositivo de arranque
4. Guarde e reinicie

### Escolhas do Instalador

* Idioma e teclado: conforme preferência
* Rede: DHCP (predefinição)
* Proxy: deixar vazio
* Mirror: mirror predefinido do Ubuntu

### Configuração de Armazenamento (Importante)

* Selecione **Disposição de armazenamento personalizada**
* Instale o Ubuntu **apenas no eMMC interno**
* **NÃO formate ainda os discos SATA**

Disposição típica:

* `/` no eMMC
* Sem swap (opcional)

Proceda com a instalação e reinicie.

---

## 5. Ativar o Ubuntu Pro (Plano Gratuito)

O Ubuntu Pro fornece manutenção de segurança estendida (ESM) e recursos adicionais de endurecimento. Para uso pessoal e em pequena escala, **o Ubuntu Pro é gratuito para até 5 máquinas**.

### 5.1 Obter um Token Gratuito do Ubuntu Pro

1. Visite o site do Ubuntu Pro
2. Inicie sessão com uma conta Ubuntu One
3. Copie o seu **token do Ubuntu Pro**

---

### 5.2 Anexar o Ubuntu Pro

No ZimaBoard:

```bash
sudo pro attach <YOUR_TOKEN_HERE>
```

Verificar estado:

```bash
pro status
```

Deverá ver `esm-infra` e `esm-apps` ativados.

---

### 5.3 Ativar Serviços Recomendados

```bash
sudo pro enable esm-infra esm-apps
```

Opcional (recomendado para servidores):

```bash
sudo pro enable livepatch
```

> Livepatch permite correções de segurança do kernel sem reiniciar.

---

### 5.4 Atualizar o Sistema

```bash
sudo apt update && sudo apt full-upgrade -y
sudo reboot
```

---

## 6. Atualizar o Sistema Base

Inicie sessão e atualize:

```bash
sudo apt update && sudo apt full-upgrade -y
sudo reboot
```

---

## 7. Identificar os Discos SATA

Listar dispositivos de bloco:

```bash
lsblk -o NAME,SIZE,TYPE,MODEL
```

Exemplo:

```
sda   1.8T disk  Samsung_SSD
sdb   1.8T disk  Samsung_SSD
mmcblk0 32G disk eMMC
```

Vamos espelhar **/dev/sda** e **/dev/sdb**.

---

## 8. Instalar Ferramentas RAID

```bash
sudo apt install -y mdadm
```

Durante a instalação, escolha **Sim** quando perguntado para iniciar arrays RAID automaticamente.

---

## 9. Criar o Espelho RAID‑1

### Limpar Assinaturas Existentes (Recomendado)

```bash
sudo wipefs -a /dev/sda
sudo wipefs -a /dev/sdb
```

### Criar o Array

```bash
sudo mdadm --create /dev/md0 \
  --level=1 \
  --raid-devices=2 \
  /dev/sda /dev/sdb
```

Monitorizar progresso de sincronização:

```bash
cat /proc/mdstat
```

---

## 10. Criar um Sistema de Ficheiros

Formatar o array (exemplo: ext4):

```bash
sudo mkfs.ext4 /dev/md0
```

Criar um ponto de montagem:

```bash
sudo mkdir -p /srv/data
```

Montar:

```bash
sudo mount /dev/md0 /srv/data
```

---

## 11. Persistir a Configuração RAID

### Guardar configuração mdadm

```bash
sudo mdadm --detail --scan | sudo tee -a /etc/mdadm/mdadm.conf
sudo update-initramfs -u
```

### Persistir a Montagem

Obter UUID:

```bash
blkid /dev/md0
```

Editar `/etc/fstab`:

```bash
sudo nano /etc/fstab
```

Adicionar:

```
UUID=<uuid>  /srv/data  ext4  defaults,nofail  0  2
```

Testar:

```bash
sudo umount /srv/data
sudo mount -a
```

---

## 12. Instalar Docker Engine

### Instalar Dependências

```bash
sudo apt install -y ca-certificates curl gnupg
```

### Adicionar Chave GPG do Docker

```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
  sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

### Adicionar Repositório Docker

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

## 13. Configuração Pós-Instalação do Docker

Permitir que o seu utilizador execute Docker sem sudo:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

Testar Docker:

```bash
docker run --rm hello-world
```

---

## 14. (Opcional) Usar Armazenamento RAID para Docker

Recomendado para contentores e volumes:

```bash
sudo systemctl stop docker
sudo mkdir -p /srv/data/docker
sudo rsync -aHAX /var/lib/docker/ /srv/data/docker/
```

Editar configuração do Docker:

```bash
sudo nano /etc/docker/daemon.json
```

Adicionar:

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

## 15. Verificações de Saúde e Manutenção

Verificar estado do RAID:

```bash
cat /proc/mdstat
sudo mdadm --detail /dev/md0
```

Ativar monitorização SMART:

```bash
sudo apt install -y smartmontools
sudo smartctl -a /dev/sda
```

---

## 16. Básicos do Docker Compose e Exemplos

O Docker Compose é a forma recomendada para definir e gerir aplicações multi-contentor no seu ZimaBoard.

### Instalar Plugin do Docker Compose

Se seguiu a secção Docker Engine acima, o plugin Compose já está instalado.
Verificar:

```bash
docker compose version
```

---

## 17.1 Criar uma Disposição de Diretório Padrão

Usar o array RAID‑1 para dados persistentes é a melhor prática:

```bash
sudo mkdir -p /srv/data/compose
sudo chown -R $USER:$USER /srv/data/compose
```

Cada aplicação obtém a sua própria pasta:

```
/srv/data/compose/
├── portainer/
├── samba/
├── uptime-kuma/
└── monitoring/
```

---

## 17.2 Exemplo 1: Portainer (Interface de Gestão Docker)

Criar diretório:

```bash
mkdir -p /srv/data/compose/portainer
cd /srv/data/compose/portainer
```

Criar `docker-compose.yml`:

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

Aceder:

```
http://<zimaboard-ip>:9000
```

---

## 17.3 Exemplo 2: Servidor de Ficheiros Samba (no Armazenamento RAID)

Criar diretório:

```bash
mkdir -p /srv/data/compose/samba
cd /srv/data/compose/samba
```

Criar pasta partilhada:

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
      -u "utilizador;palavra-passe" \
      -s "dados;/mount;yes;no;no"
```

Iniciar:

```bash
docker compose up -d
```

---

## 17.4 Exemplo 3: Uptime Kuma (Monitorização de Serviços)

Criar diretório:

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

Aceder:

```
http://<zimaboard-ip>:3001
```

---

## 17.5 Exemplo 4: Monitorização Básica (cAdvisor + Node Exporter)

Criar diretório:

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

## 17.6 Comandos Comuns do Docker Compose

```bash
# Iniciar serviços
docker compose up -d

# Parar serviços
docker compose down

# Ver registos
docker compose logs -f

# Atualizar imagens
docker compose pull
docker compose up -d
```

---

## 18. Resultado

Agora tem:

* Ubuntu **LTS minimal** no eMMC
* Um **array RAID‑1 espelhado** para segurança dos dados
* Um **Docker Engine** totalmente funcional

