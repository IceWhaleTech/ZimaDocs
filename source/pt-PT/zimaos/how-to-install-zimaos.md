---
title: Como instalar o ZimaOS
description: "Aprenda a instalar o ZimaOS passo a passo: transfira a imagem, grave-a numa unidade USB, conclua a instalação e inicie sessão através do ZimaClient ou do endereço IP."
type: Docs
author: admin
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

## O que irá aprender
O ZimaOS é um sistema operativo NAS leve concebido para equipamentos x86-64 genéricos.
Este guia apresenta o processo completo para **transferir, gravar e instalar o ZimaOS** de forma rápida e correta.

---

## O que é necessário
- Um **dispositivo Zima** ou um equipamento x86-64 genérico com pelo menos 25 GB de armazenamento.
- Uma unidade USB com 4 GB ou mais.

---

## Preparação
Para arrancar o ZimaOS, ative o modo de arranque UEFI no BIOS e desative o Secure Boot.

### Passo 1: Transferir a imagem de instalação do ZimaOS
Transfira o ficheiro `.img` mais recente do ZimaOS a partir da página oficial de versões no GitHub:
👉 [Versões do ZimaOS no GitHub](https://github.com/IceWhaleTech/ZimaOS/releases)


### Passo 2: Criar uma unidade USB de arranque
Grave a imagem do ZimaOS numa unidade USB. A ferramenta mais simples é o **Balena Etcher**.

1. Transfira e instale o [Balena Etcher](https://etcher.balena.io/#download-etcher)
2. Abra o Etcher e selecione o ficheiro `.img` do ZimaOS.
3. Introduza a unidade USB e selecione-a como destino.
4. Clique em **Flash** para iniciar a gravação.

![Balena Etcher aberto com a imagem do instalador do ZimaOS](https://manage.icewhale.io/api/static/docs/1758610770697_open-balenaetcher-and-mount-zimaos-installer-img.png)
![Balena Etcher a selecionar a unidade USB de destino para instalar o ZimaOS](https://manage.icewhale.io/api/static/docs/1758610775577_select-target-usb-device-for-zimaos-image.png)
![Gravação da imagem do ZimaOS na unidade USB concluída](https://manage.icewhale.io/api/static/docs/1758610785477_flash-zimaos-installer-img-completed.png)



### Passo 3: Arrancar o dispositivo por USB
1. Introduza a unidade USB de arranque no dispositivo.
2. Abra o BIOS ou o menu de arranque e selecione **Boot from USB**.

![Menu principal do instalador para escolher entre instalar o ZimaOS ou reiniciar](https://manage.icewhale.io/api/static/docs/1758611834229_select-boot-to-install-zimaos.png)

![Menu de instalação rápida para selecionar o dispositivo ou espaço onde instalar o ZimaOS](https://manage.icewhale.io/api/static/docs/1758611857595_select-space-to-install-zimaos.png)

![Confirmação anterior à instalação com a opção Yes](https://manage.icewhale.io/api/static/docs/1758611899595_confirmaton-before-install.png)

![Última oportunidade para cancelar a instalação com a opção Yes](https://manage.icewhale.io/api/static/docs/1758611906569_last-chance-to-abort-the-installation.png)

![Barra de progresso da instalação](https://manage.icewhale.io/api/static/docs/1758611912717_installing.png)


### Passo 4: Concluir a instalação do ZimaOS
Siga as instruções apresentadas para instalar o ZimaOS.
Quando o sistema solicitar, retire a unidade USB e reinicie o dispositivo.
O equipamento arrancará automaticamente no **ZimaOS**.
![Retirar a unidade USB e reiniciar](https://manage.icewhale.io/api/static/docs/1758613053107_installation-zimaos-done.png)



### Passo 5: Aceder ao ZimaOS
Depois de reiniciar, a forma mais simples de iniciar sessão é utilizar o **ZimaClient**, que deteta automaticamente o dispositivo na rede e permite aceder rapidamente ao ZimaOS.

👉 Transfira o ZimaClient e siga este guia: [Guia de início rápido do ZimaOS](./get-started)

![Ecrã de boas-vindas da interface Web do ZimaOS](https://manage.icewhale.io/api/static/docs/1758611011147_Zimaos-webUI.png)


Também pode consultar o endereço IP do dispositivo na rede e introduzi-lo num navegador para abrir a **interface Web do ZimaOS**.
![Ecrã de informações do ZimaOS com o endereço IP e a versão do sistema](https://manage.icewhale.io/api/static/docs/1758611045998_zimaos-Information-Display-Interface.png)


🎉 **Parabéns!** Instalou o ZimaOS e já pode explorar todas as funcionalidades de NAS.

---

## Passos seguintes com o ZimaOS

Depois de instalar o ZimaOS no servidor, pode começar a criar a nuvem pessoal e o servidor doméstico.
Algumas ideias:

- 🔧 **Configure RAID ou conjuntos de armazenamento** para proteger os dados.
- 📂 **Ative a partilha de ficheiros (SMB/FTP)** entre dispositivos.
- 🎞️ **Execute um servidor multimédia (Plex, Jellyfin)** para transmitir filmes e música.
- 🐳 **Implemente aplicações Docker** a partir da App Store do ZimaOS.
- ☁️ **Crie cópias de segurança dos dados importantes** em unidades externas ou na nuvem.

👉 Pretende utilizar mais funcionalidades?
- Continue em **[Começar a utilizar](./get-started)** para concluir o primeiro arranque
- Configure o **[Acesso remoto](./remote-access)** para se ligar em qualquer lugar
- Participe no **[Fórum da comunidade](https://community.zimaspace.com/)**

💡 Guarde este guia para futuras atualizações. As novas versões do ZimaOS incluem frequentemente melhorias de desempenho e novas aplicações.
