---
title: Começar a utilizar o ZimaOS
description: "Instale o ZimaClient no computador ou telemóvel, crie uma conta ZimaOS, escolha o idioma e conclua a configuração inicial em Windows, macOS, iOS ou Android."
type: Docs
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Configurar um dispositivo novo não deve ser trabalhoso. Depois de repetir este primeiro arranque muitas vezes, a versão curta é simples: instale o cliente, crie uma conta e comece a utilizar o equipamento.

## Antes de começar

O dispositivo Zima deve estar ligado e conectado à mesma rede que o computador utilizado na configuração. Se ainda não instalou o ZimaOS, consulte primeiro **[Instalar o ZimaOS](./how-to-install-zimaos "Guia passo a passo para instalar o ZimaOS de raiz no seu dispositivo")**.

## Instalar o ZimaClient

O ZimaClient liga o computador ou telemóvel ao dispositivo Zima. Encontra automaticamente o dispositivo na rede e configura o acesso remoto.

**Computador** — Transfira a versão para **[Windows ou macOS](https://www.zimaspace.com/zimaos/download "Transferir o ZimaClient para Windows e macOS")**. Instale e abra a aplicação; esta procura na rede e apresenta os dispositivos disponíveis.

**Telemóvel** — Obtenha o ZimaClient para **[iOS](https://www.zimaspace.com/zimaos/download "Transferir o ZimaClient para iOS na App Store")** na App Store ou para **[Android](https://www.zimaspace.com/zimaos/download "Transferir o ZimaClient para Android no Google Play")** no Google Play. A aplicação móvel permite verificar o estado do sistema, gerir aplicações e sincronizar ficheiros do telemóvel.

![Página de transferência do ZimaClient com opções para macOS, Windows, iOS e Android](https://manage.icewhale.io/api/static/docs/1773888170981_20260318-185643.jpeg)

## Iniciar sessão e configurar

Quando o ZimaClient encontrar o dispositivo, clique para estabelecer a ligação. Verá o ecrã de configuração do ZimaOS.

**Escolha o idioma.** O ZimaOS suporta inglês, chinês, japonês e outros idiomas. A comunidade continua a ajudar a aumentar o número de traduções.

![Ecrã de configuração inicial do ZimaOS com um seletor de inglês, chinês e japonês](https://manage.icewhale.io/api/static/docs/1727082127778_image.png)

**Crie a conta.** A primeira conta criada é a conta principal, com privilégios de proprietário e administrador. Escolha um nome de utilizador e uma palavra-passe segura.

![Ecrã do ZimaOS para criar uma conta local com campos de utilizador e palavra-passe](https://manage.icewhale.io/api/static/docs/1727082165610_image.png)

Depois da criação, o ZimaOS apresenta um breve resumo das funções principais. O dispositivo está pronto a utilizar.

![Assistente do ZimaOS com uma descrição do acesso remoto, RAID, armazenamento Btrfs e NAS OS](https://manage.icewhale.io/api/static/docs/1727082245929_image.png)

## O que já está configurado

Algumas funções estão disponíveis de imediato e não exigem configuração adicional.

**Acesso remoto.** Depois da primeira ligação através do ZimaClient, pode aceder ao dispositivo fora de casa. A ligação é cifrada e P2P, sem encaminhamento de portas nem configuração do router.

Pode abrir um ficheiro do NAS num café, verificar uma transferência durante uma viagem ou partilhar uma pasta sem a enviar primeiro para um serviço de terceiros. O dispositivo torna-se um servidor doméstico disponível em qualquer lugar e os dados permanecem sob o seu controlo. Pode desativar o acesso remoto em Settings com um clique e decidir quando o dispositivo fica acessível. Os dados nunca passam por servidores de terceiros.

**Partilha Samba.** Todos os espaços de armazenamento são partilhados por predefinição na rede local e protegidos pela conta e palavra-passe do ZimaOS. O ZimaClient gere automaticamente a ligação P2P. Depois da ligação, as pastas partilhadas aparecem no Finder do Mac ou no Explorador de Ficheiros do Windows e pode mover ficheiros como em qualquer pasta.

Uma equipa no mesmo projeto ou uma família que partilhe fotografias e vídeos pode utilizar o mesmo armazenamento sem software adicional. As permissões estão associadas às contas ZimaOS, permitindo controlar quem vê cada conteúdo.

## A seguir

- **[Descrição geral das funcionalidades](./features "Conheça o acesso remoto, o armazenamento e as aplicações do ZimaOS")** — explore o painel do ZimaOS e as suas possibilidades
- **[Transferir o ZimaClient](./zimaclient-install "Instale e configure o ZimaClient no computador e no telemóvel")** — consulte mais detalhes sobre a aplicação de computador
- **[Acesso remoto](./remote-access "Configure o acesso remoto para utilizar o servidor doméstico em qualquer lugar")** — configure e gira ligações remotas

## Resolução de problemas

Se o ZimaClient não encontrar o dispositivo, confirme que ambos estão na mesma rede. Também pode ligar-se diretamente pelo endereço IP: procure o IP na lista de clientes DHCP do router e introduza-o num navegador. O ecrã de configuração será o mesmo.
