---
title: Começar a utilizar o ZimaBoard 2
description: "Desembale e configure o seu servidor de placa única ZimaBoard 2. Inclui uma visão geral do hardware, o primeiro arranque, a ligação de periféricos e o acesso ao painel do sistema."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
## Introdução
**ZimaBoard 2 — Crie novas regras**
Um **servidor de placa única de desempenho extremo** concebido para makers e criadores. Compacto, mas potente, pode ser o seu **mini NAS**, **servidor doméstico**, **plataforma autoalojada** ou **router de software**, além de permitir inferência de **IA local** e implementações em **cluster**.
 Com **duas portas 2.5GbE**, uma ranhura **PCIe**, **duas ligações SATA 3.0** e expansão **USB 3.1**, o ZimaBoard 2 permite-lhe criar o seu próprio centro digital privado de alto desempenho.

 ## Funcionalidades
- **CPU Intel® N150 de quatro núcleos**, até **3.6 GHz**, para um desempenho ágil.
- **8GB** ou **16GB de memória LPDDR5x** para lidar com várias tarefas.
- **32GB** ou **64GB de eMMC** para um arranque rápido do sistema.
- **2 portas LAN 2.5GbE** para redes de alta velocidade.
- **2 ligações SATA 3.0 com alimentação** para ligar diretamente HDD/SSD de 2.5"/3.5".
- **2 portas USB 3.1** para periféricos e unidades externas de alta velocidade.
- **1 ranhura PCIe 3.0** para uma **NIC de 10GbE**, um **adaptador NVMe** ou uma **GPU**.
- **1 Mini DisplayPort 1.4**, compatível com saída **4K@60Hz**.
- **Arrefecimento passivo sem ventoinha** para um funcionamento silencioso e estável.

## Interfaces
![Diagrama das interfaces do ZimaBoard 2: duas portas 2.5GbE, USB 3.1, MiniDP, alimentação CC, PCIe e SATA.](https://manage.icewhale.io/api/static/docs/1756795953605_zimaboard2-interface-pinout.png)


## Ligar armazenamento e dispositivos PCIe
### HDD/SSD SATA de 2.5"/3.5"
- Utilize o **cabo de dados SATA + cabo de alimentação** incluídos para ligar a unidade à porta SATA da placa.
- Instale a unidade num **suporte NAS** adequado ou num tabuleiro externo.
<mark>*Sugestão: duas unidades de **3.5"** exigem uma corrente de arranque superior; utilize uma fonte de alimentação **estável de 12V/5A**.*</mark>
### Placas de expansão PCIe
- Instale uma **NIC de 10GbE**, um **adaptador NVMe** ou uma **GPU dedicada de baixo consumo** (saiba mais na lista de compatibilidade de GPU).
- Se a GPU exigir alimentação externa, prepare os cabos adequados e confirme que a fonte tem capacidade suficiente (consulte o mesmo documento de compatibilidade).

## Primeiro arranque e rede
- Ligue o **adaptador de corrente** ao ZimaBoard 2.
- Ligue um **cabo Ethernet** ao router ou switch.
<img src="https://manage.icewhale.io/api/static/docs/1756796033890_zimaboard2-power-network.png"
     alt="E/S traseira do ZimaBoard 2 com Ethernet 2.5GbE e alimentação de 12V ligadas, e LED de alimentação aceso durante a configuração inicial do mini NAS."
     width="50%" />

- O ZimaBoard 2 **arranca automaticamente** com o **ZimaOS pré-instalado** e obtém um endereço IP de forma automática.
  - Visite https://www.zimaspace.com/zimaos/download para transferir o **ZimaClient**, procurar o dispositivo e abrir diretamente a respetiva página.
  - Em alternativa, encontre o IP na **lista DHCP do router** ou num **ecrã** ligado.
  - A **aplicação Zima** também está disponível para facilitar a descoberta e gestão do dispositivo.

## [Iniciar sessão e utilizar o ZimaOS](../zimaos/get-started)
- Abra a página de início de sessão através do IP do dispositivo, do ZimaClient ou da aplicação.
- Crie a sua conta e conclua a configuração inicial: idioma, fuso horário e rede.
- Atualize o sistema para a versão mais recente do ZimaOS para obter a melhor estabilidade e compatibilidade com aplicações.

## Opções mais avançadas
- **Instalar um sistema operativo de terceiros**: distribuições Linux, OpenWrt, [UnRAID](./unraid-install) e outros.
- **Ativar WOL (Wake on LAN)**: ative-o na BIOS e no sistema operativo (consulte o [tutorial para ativar WOL](./wake-on-lan-setup)).
- **Utilizar um módulo Wi-Fi**: siga o guia de controlador/configuração para o ZimaOS ou para o sistema operativo escolhido ([tutorial: guia do utilizador da AX210](./ax210-wifi-6e)).
- **Adicionar um módulo de arrefecimento**: consulte o guia de instalação do módulo de arrefecimento se planear cargas de trabalho intensivas.
-  **Transferir o modelo 3D**: [Google Drive](https://drive.google.com/file/d/1paE2loHLjRjftefT0xsKo4lIFok9-Itc/view?usp=sharing)

## Perguntas frequentes
- **Como posso recuperar ou reinstalar o ZimaOS?**
 Consulte o Guia de recuperação/reinstalação do ZimaOS para criar um suporte de arranque e executar o instalador.
- **Como posso limpar/inicializar a CMOS?**
 Desligue o dispositivo, prima o botão de reposição —ou retire a pilha durante alguns segundos—, volte a ligar a alimentação e carregue as predefinições da BIOS. Consulte o Guia de inicialização da CMOS para obter detalhes.
