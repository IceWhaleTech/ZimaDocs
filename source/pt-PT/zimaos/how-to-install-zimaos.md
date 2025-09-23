---
title: Como Instalar o ZimaOS
description: Aprenda a instalar o ZimaOS com este guia passo a passo. Inclui download da imagem, gravação numa pen USB, processo de instalação e início de sessão via ZimaClient ou endereço IP.
type: Docs
author: admin
tip: 顶部栏固定格式请勿删除,description为文章描述，不填时将截取内容最前一段文字
---

## O que vai aprender
O ZimaOS é um sistema operativo NAS leve, concebido para o ZimaCube e outros dispositivos de servidor doméstico.  
Este guia fornece um processo completo, passo a passo, para o ajudar a **transferir, gravar e instalar o ZimaOS** de forma rápida e bem-sucedida.

---

## O que vai precisar
- Um **dispositivo Zima** ou um x86-64 genérico com pelo menos 25GB de espaço de armazenamento.  
- Uma pen USB (recomendado 4GB ou superior).  

---

## Primeiros Passos
Para iniciar o ZimaOS, a BIOS precisa de ter o modo de arranque UEFI ativado e o Secure Boot desativado.

### Passo 1: Transferir a Imagem de Instalação do ZimaOS
Para começar, transfira o ficheiro `.img` mais recente do ZimaOS a partir da página oficial de lançamentos no GitHub:  
👉 [ZimaOS GitHub Releases](https://github.com/IceWhaleTech/ZimaOS/releases)

### Passo 2: Criar uma Pen USB de Arranque
Precisa de gravar a imagem do ZimaOS numa pen USB. A ferramenta mais simples para isto é o **Balena Etcher**.

1. Transfira e instale o [**Balena Etcher**](https://etcher.balena.io/#download-etcher)  
2. Abra o Etcher e selecione o ficheiro `.img` do ZimaOS.  
3. Insira a sua pen USB e escolha-a como destino.  
4. Clique em **Flash** para iniciar a gravação da imagem.  

![balena etcher tool open zimaos installer image file](https://manage.icewhale.io/api/static/docs/1758610770697_open-balenaetcher-and-mount-zimaos-installer-img.png)
![balena etcher select flash device as a target to install zimaos](https://manage.icewhale.io/api/static/docs/1758610775577_select-target-usb-device-for-zimaos-image.png)
![flash zimaso image to flash device completed](https://manage.icewhale.io/api/static/docs/1758610785477_flash-zimaos-installer-img-completed.png)

### Passo 3: Iniciar o Dispositivo a partir da Pen USB
1. Insira a pen USB de arranque no seu dispositivo.  
2. Entre no menu da BIOS/arranque e escolha **Boot from USB**.  
![main memu of zimaos installation tool to choose install zimaos or reboot](https://manage.icewhale.io/api/static/docs/1758611834229_select-boot-to-install-zimaos.png)
![quick install memu to select a device or space or location to install zimaos](https://manage.icewhale.io/api/static/docs/1758611857595_select-space-to-install-zimaos.png)
![confirmation before istalling and choose yes.](https://manage.icewhale.io/api/static/docs/1758611899595_confirmaton-before-install.png)
![last chance to abort install and choose yes.]](https://manage.icewhale.io/api/static/docs/1758611906569_last-chance-to-abort-the-installation.png)
![Installation progress bar displayed. Please wait patiently at this time.](https://manage.icewhale.io/api/static/docs/1758611912717_installing.png)

### Passo 4: Concluir a Instalação do ZimaOS
Siga as instruções no ecrã para instalar o ZimaOS.  
Quando o sistema solicitar, retire a pen USB e reinicie o dispositivo.  
Agora será iniciado automaticamente o **ZimaOS**.  
![remove the flash device and reboot](https://manage.icewhale.io/api/static/docs/1758613053107_installation-zimaos-done.png)

### Passo 5: Aceder ao ZimaOS
Após o reinício, a forma mais simples de iniciar sessão é através do **ZimaClient**, que pode detetar automaticamente o seu dispositivo na rede e ajudá-lo a aceder rapidamente ao ZimaOS.  

👉 Transfira o ZimaClient e siga o guia aqui: [ZimaOS Quick Start Guide](https://www.zimaspace.com/docs/zimaos/Get-Started)  

![welcome to zimacos webgui](https://manage.icewhale.io/api/static/docs/1758611011147_Zimaos-webUI.png)

Em alternativa, também pode verificar o endereço IP na sua rede e introduzi-lo num navegador para aceder à **Interface Web do ZimaOS**.  
![zimaos key information show on the screen include ip address os version](https://manage.icewhale.io/api/static/docs/1758611045998_zimaos-Information-Display-Interface.png)

🎉 **Parabéns!** Instalou com sucesso o ZimaOS no seu dispositivo e já pode começar a explorar todas as suas funcionalidades NAS.

---

## Próximos Passos com o ZimaOS

Agora que o ZimaOS está instalado no seu servidor inteligente, pode começar a construir a sua nuvem pessoal e servidor doméstico.  
Aqui estão algumas ideias do que fazer a seguir:

- 🔧 **Configurar RAID ou pools de armazenamento** para proteção de dados.  
- 📂 **Ativar partilha de ficheiros (SMB/FTP)** entre os seus dispositivos.  
- 🎞️ **Executar um servidor multimédia (Plex, Jellyfin)** para transmitir os seus filmes e músicas.  
- 🐳 **Implementar aplicações Docker** diretamente a partir da App Store do ZimaOS.  
- ☁️ **Fazer cópias de segurança de dados importantes** em discos externos ou na nuvem.  

👉 Pronto para desbloquear mais funcionalidades?  
- Visite a [Documentação do ZimaOS](https://github.com/IceWhaleTech/ZimaOS/wiki)  
- Junte-se ao nosso [Fórum da Comunidade](https://github.com/IceWhaleTech/ZimaOS/discussions)  
- Explore a [App Store](https://github.com/IceWhaleTech/ZimaOS) para expandir a sua configuração  

💡 **Dica Pro**: Adicione este guia aos favoritos para futuras atualizações. Novas versões do ZimaOS incluem frequentemente melhorias de desempenho e novas aplicações.  

Comece a sua jornada com o ZimaOS hoje e desfrute de uma experiência NAS mais rápida, simples e fiável! 🚀