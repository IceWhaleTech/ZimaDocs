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

Para uma máquina virtual, consulte [Instalar o ZimaOS no Proxmox VE](./install-zimaos-on-proxmox-ve).

---

## O que é necessário
- Um **dispositivo Zima** ou um equipamento x86-64 genérico com pelo menos 25 GB de armazenamento.
- Uma unidade USB com 4 GB ou mais.
- [ZimaOS USB Creator](https://www.zimaspace.com/zimaos/download) ou [balenaEtcher](https://etcher.balena.io/).

---

## Preparação
Para arrancar o ZimaOS, ative o modo de arranque UEFI no BIOS e desative o Secure Boot.

### Passo 1: Preparar a imagem de instalação do ZimaOS
O ZimaOS USB Creator transfere a versão que selecionar na aplicação. Se utilizar o balenaEtcher, transfira o ficheiro terminado em `_installer.img` a partir das [versões do ZimaOS no GitHub](https://github.com/IceWhaleTech/ZimaOS/releases). O ficheiro `.raucb` é um pacote de atualização, não uma imagem de instalação USB.

### Passo 2: Criar uma unidade USB de arranque do ZimaOS
Escolha um dos métodos seguintes e avance para o passo 3.

> Os números de versão, nomes de ficheiros, unidades e detalhes da interface nas imagens são exemplos.

> A gravação de uma imagem apaga todos os dados da unidade USB selecionada. Faça uma cópia dos ficheiros importantes e confirme o nome e a capacidade da unidade antes de continuar.

#### Opção A: ZimaOS USB Creator

1. Introduza a unidade USB e abra o **ZimaOS USB Creator**. Em **Choose operating system**, selecione a versão do ZimaOS que pretende instalar e clique em **Next**.

![Escolher uma versão do ZimaOS no USB Creator](/images/guides/usb-creator-select-os.webp)

2. Selecione a unidade USB. Confirme o nome e a capacidade, mantenha **Exclude system drives** selecionado e clique em **Next**.

![Selecionar a unidade USB no USB Creator](/images/guides/usb-creator-select-storage.webp)

3. Reveja a imagem do sistema e a unidade de armazenamento no resumo e clique em **Write**.

![Rever a imagem e a unidade USB de destino](/images/guides/usb-creator-review-write.webp)

4. Confirme a unidade de destino na caixa de diálogo **Erase this device?** e clique em **Erase and write**.

![Confirmar o apagamento e a gravação na unidade USB](/images/guides/usb-creator-erase-warning.webp)

5. Autorize o acesso de administrador, se solicitado. Aguarde enquanto o USB Creator transfere e grava a imagem; mantenha a unidade USB ligada.

![USB Creator a transferir e gravar a imagem](/images/guides/usb-creator-writing-progress.webp)

6. Quando aparecer **Write complete!**, a unidade já foi ejetada automaticamente. Clique em **Finish** e retire-a em segurança.

![Ecrã de gravação concluída do USB Creator](/images/guides/usb-creator-write-complete.webp)

#### Opção B: balenaEtcher

1. Transfira e instale o [balenaEtcher](https://etcher.balena.io/).

2. Abra o Etcher, clique em **Flash from file** e selecione o ficheiro `_installer.img` transferido no passo 1.

![Selecionar a imagem de instalação do ZimaOS no balenaEtcher](/images/guides/zimaos-etcher-select-image.webp)

3. Clique em **Select target** e selecione a unidade USB. Confirme o nome e a capacidade.

![Selecionar a unidade USB de destino no balenaEtcher](/images/guides/zimaos-etcher-select-target.webp)

4. Clique em **Flash!**, autorize o acesso se solicitado e aguarde a conclusão da gravação e da verificação.

5. Quando o Etcher indicar a conclusão, ejete a unidade USB em segurança e avance para o passo 3.

![balenaEtcher terminou de gravar a imagem do ZimaOS](/images/guides/zimaos-etcher-complete.webp)

### Passo 3: Arrancar o dispositivo por USB
1. Introduza a unidade USB de arranque no dispositivo. Abra o BIOS ou o menu de arranque e inicie o equipamento a partir da unidade USB.
2. No ecrã de boas-vindas do ZimaOS Installer, clique em **Start**.

![Ecrã de boas-vindas do ZimaOS Installer com o botão Start](/images/guides/zimaos-installer-welcome.webp)

3. Escolha o idioma do instalador e clique em **Continue**.

![Seleção do idioma do ZimaOS Installer](/images/guides/zimaos-installer-choose-language.webp)

4. Selecione o disco onde pretende instalar o ZimaOS. Confirme cuidadosamente o nome, o caminho e a capacidade: **todos os dados desse disco serão apagados**. Clique em **Continue**.

![Seleção do disco onde instalar o ZimaOS](/images/guides/zimaos-installer-choose-disk.webp)

5. Reveja o disco de destino e as verificações da instalação; depois, clique em **Continue**.

![Revisão do disco de destino e das verificações da instalação](/images/guides/zimaos-installer-ready.webp)

6. Confirme novamente o disco no aviso de apagamento e clique em **Erase and install**.

![Confirmação do apagamento do disco selecionado](/images/guides/zimaos-installer-erase-confirmation.webp)

7. Mantenha o dispositivo ligado enquanto o instalador grava o ZimaOS.

![Progresso da instalação do ZimaOS](/images/guides/zimaos-installer-progress.webp)

### Passo 4: Concluir a instalação do ZimaOS
Quando surgir o ecrã de instalação concluída, retire a unidade USB e clique em **Restart**. O dispositivo arrancará a partir do disco instalado e iniciará o ZimaOS.

![Ecrã de instalação concluída do ZimaOS com o botão Restart](/images/guides/zimaos-installer-complete.webp)

### Passo 5: Aceder ao ZimaOS
Depois de reiniciar, o ecrã do dispositivo mostra os dados do sistema e como aceder ao ZimaOS. O número de série e o endereço IP estão ocultos na imagem; utilize o endereço apresentado no seu dispositivo.

![Consola do ZimaOS com dados do sistema e informações de acesso, com o número de série e o endereço IP ocultos](/images/guides/zimaos-console-access.webp)

A forma mais simples de estabelecer ligação é utilizar o **ZimaClient**, que deteta o dispositivo na rede. Transfira o ZimaClient e consulte o [Guia de início rápido do ZimaOS](./get-started).

Em alternativa, introduza num navegador o endereço IP apresentado no seu dispositivo para abrir a **interface Web do ZimaOS**.

O exemplo seguinte mostra a página inicial num ZimaCube. Selecione um idioma e leia a Política de Privacidade antes de continuar. A página pode ser diferente noutros dispositivos.

![Página inicial de configuração do ZimaCube com opções de idioma e Política de Privacidade](/images/guides/zimaos-zimacube-welcome.webp)

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
