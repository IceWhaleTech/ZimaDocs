---
title: PVE em Debian para i226  
description: Executando Proxmox VE em Debian para NICs i226  
type: Docs  
author: icewhale123456  
tip: O formato fixo da barra superior não deve ser removido, a descrição deve ser preenchida com o conteúdo do artigo. Caso não preencha, o conteúdo será extraído da primeira seção do artigo.  
---  
## Executando Proxmox VE em Debian para NICs i226  

### 1. Visão Geral da Solução  

Esta solução foi projetada para implantar um ambiente de virtualização Proxmox VE na plataforma ZimaBoard 2 com NICs Intel i226. O objetivo é resolver o problema de desreferência de ponteiro nulo do driver de NIC causado pela gestão de energia PCIe ASPM em kernels Linux de versão mais alta, evitando assim o Kernel Panic e a falta de resposta do sistema.

- **Plataforma de Hardware**: ZimaBoard 2  
- **Versão do Software**: Debian 12.8.0  
- **Ambiente de Rede**: Recomenda-se usar uma conexão cabeada durante todo o processo. Prepare as informações da sub-rede do roteador (exemplo de sub-rede neste guia: `10.0.0.1/16`).  
- **Objetivo Principal**: Resolver o conflito de gerenciamento de energia ASPM e o problema de Kernel Panic da NIC i226 em kernels Linux de versão alta, criando um ambiente de virtualização estável.  
- **Conhecimento Prévio Necessário**: Quando o PCIe ASPM (especialmente os Subestados L1) é ativado na NIC Intel i226-V, ele frequentemente desencadeia uma desreferência de ponteiro NULL no driver igc durante eventos de subida/descida de link físico, recarregamentos de driver ou renegociação de link, resultando em kernel panic ou congelamento do sistema. Esta solução adota um modelo de implantação "Base Debian + Kernel PVE", restringindo e alinhando o ambiente de gerenciamento de energia e firmware antes de introduzir o kernel Proxmox, garantindo maior compatibilidade de hardware e flexibilidade de ajustes.

#### Etapas Principais de Operação  

1. Instale o Debian 12.8: ISO de instalação de rede, use o disco inteiro, inicialize via UEFI.  
2. Desative o ASPM: Edite `/etc/default/grub`, adicione `pcie_aspm=off` a `GRUB_CMDLINE_LINUX_DEFAULT`, execute `update-grub` e reinicie.  
3. Configuração básica: Troque para espelhos nacionais, instale `firmware-intel-misc`; configure temporariamente o IP e teste a conectividade.  
4. Prepare o Proxmox: Configure `/etc/hosts`, adicione o repositório sem assinatura do Proxmox e a chave GPG.  
5. Instale o Proxmox: `apt install proxmox-ve postfix open-iscsi`; se houver conflito com `pve-firmware`, execute `dpkg --force-overwrite` para forçar a instalação, depois `apt install -f` para corrigir dependências.  
6. Configure a rede em bridge: Edite `/etc/network/interfaces`, adicione a NIC física (por exemplo, `enp1s0`) à bridge `vmbr0`, defina IP/gateway estático e reinicie a rede.  
7. Verifique o acesso: Após reiniciar, acesse `https://<IP>:8006`.

### 2. Etapas de Operação  

Todos os comandos abaixo são executados no sistema Debian com privilégios de root ou sudo.

#### 2.1 Gravar e Instalar o Debian  

Para garantir a estabilidade e controlabilidade do sistema base, esta solução utiliza o Debian 12.8 como base.

1. **Download dos Recursos de Software**  
   - Debian 12.8.0: [https://chuangtzu.ftp.acc.umu.se/cdimage/archive/12.8.0/amd64/iso-cd/debian-12.8.0-amd64-netinst.iso](https://chuangtzu.ftp.acc.umu.se/cdimage/archive/12.8.0/amd64/iso-cd/debian-12.8.0-amd64-netinst.iso)  
   - Ferramenta de gravação balenaEtcher: [https://etcher.balena.io/](https://etcher.balena.io/)

2. **Criar um Pen Drive Inicializável**  
   - Insira um pen drive de pelo menos 8GB.  
   - Abra o balenaEtcher, selecione seu pen drive como dispositivo de destino.  
   - Clique em "Flash from file", localize o arquivo `debian-12.8.0-amd64-netinst.iso` baixado; o software selecionará automaticamente o disco.  
   - Clique em "Flash!" e aguarde a conclusão, depois ejete com segurança o pen drive.

3. **Inicialização pelo BIOS**  
   - Insira o pen drive preparado em uma porta USB do ZimaBoard.  
   - Ligue o computador e pressione repetidamente a tecla **F11** (alguns modelos podem usar ESC ou Delete, mas o ZimaBoard 2 usa F11 por padrão).  
   - No Menu de Inicialização, selecione a entrada do pen drive com "UEFI" no nome.

4. **Resumo do Procedimento de Instalação**  
   Após acessar a tela azul de boas-vindas do Debian, siga estas orientações:  
   - Modo de instalação: Recomenda-se selecionar **Graphical Install** (mais amigável para iniciantes).  
   - Idioma e região: Escolha "Inglês" ou seu idioma preferido; selecione o teclado "American English".  
   - Particionamento de disco: Selecione **"Use entire disk"**, escolha o eMMC embutido ou SSD instalado no ZimaBoard e depois selecione **"All files in one partition"** como esquema de particionamento.

#### 2.2 Depuração da NIC em um Sistema Debian Limpo  

1. **Desativar o Gerenciamento Avançado de Energia PCIe (ASPM)**  
   ```bash
   nano /etc/default/grub
   ```
   Modifique a linha:
   ```
   GRUB_CMDLINE_LINUX_DEFAULT="quiet splash intel_iommu=on iommu=pt pcie_aspm=off"
   ```
   Salve e saia, depois atualize o GRUB e reinicie:
   ```bash
   update-grub
   reboot
   ```

2. **Trocar para Servidores DNS Mais Estáveis (Temporariamente)**  
   ```bash
   nano /etc/resolv.conf
   ```
   Adicione:
   ```
   nameserver 223.5.5.5
   nameserver 114.114.114.114
   ```

3. **Instalar Firmware**  
   ```bash
   # Limpar cache
   rm -rf /var/lib/apt/lists/*
   # Atualizar e instalar o firmware da NIC Intel
   apt update
   apt install firmware-intel-misc -y
   ```

4. **Configurar Temporariamente a Interface da NIC**  
   Neste exemplo, o nome da interface é `enp8s0` e o endereço do roteador é `10.0.0.1`.  
   ```bash
   # Limpar configurações de IP existentes
   ip addr flush dev enp8s0
   # Derrubar a interface
   ip link set enp8s0 down
   # Configurar IP e gateway
   ip addr add 10.0.1.100/16 dev enp8s0
   ip route add default via 10.0.0.1
   # Subir a interface
   ip link set enp8s0 up
   ```

5. **Testar Conectividade**  
   ```bash
   ping -I enp8s0 8.8.8.8
   ```
   Se bem-sucedido, a NIC está funcionando corretamente.

#### 2.3 Instalar o Kernel Proxmox VE  

1. **Configurar o Arquivo de Hosts**  
   ```bash
   # Confirmar o nome do host (neste exemplo, o nome é "debian")
   hostname
   nano /etc/hosts
   ```
   Certifique-se de que o arquivo contenha:
   ```
   127.0.0.1       localhost
   10.0.1.21       debian.proxmox.com debian
   ```

2. **Adicionar Repositório de Software do Proxmox**  
   ```bash
   # Instalar curl se não presente
   apt update && apt install curl -y
   # Adicionar chave GPG
   curl -fSsL http://download.proxmox.com/debian/proxmox-release-bookworm.gpg -o /etc/apt/trusted.gpg.d/proxmox-release-bookworm.gpg
   # Editar pve-no-subscription.list
   nano /etc/apt/sources.list.d/pve-no-subscription.list
   # Adicionar a seguinte linha
   deb http://download.proxmox.com/debian/pve bookworm pve-no-subscription
   ```

3. **Instalar o Kernel PVE e Componentes Principais**  
   ```bash
   # Atualizar e realizar uma atualização completa
   apt update
   apt full-upgrade -y
   # Instalar pacotes principais do Proxmox VE