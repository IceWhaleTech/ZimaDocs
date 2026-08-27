---
title: Como transferir e instalar o ZimaClient
seo_title: "Transferir e instalar o ZimaClient no Windows, macOS, iOS e Android"
description: "Instale o ZimaClient no Windows ou Mac para aceder ao ZimaCube em qualquer lugar. Configure o acesso remoto, a navegação de ficheiros e a ligação ao dispositivo."
type: Docs
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---
## Introdução
O ZimaClient foi concebido para funcionar discretamente, mas possui funções importantes. Algumas experiências essenciais decorrem em segundo plano, de forma silenciosa e natural.

O acesso remoto é uma das funções principais. Depois de ativar e ligar o ZimaCube, o cliente encontra sempre a ligação mais rápida para abrir a interface Web em qualquer cenário: LAN, Thunderbolt, rede externa ou ponto de acesso móvel.
Também pode partilhar serviços do ZimaOS com outras pessoas. Alguns serviços, como o OpenWebUI e servidores de jogos, utilizam a autenticação da própria aplicação e podem ser acedidos sem iniciar sessão no ZimaOS.

Também disponibilizamos atalhos para funções como Peer Drop, Back up e Open in Finder.
O cliente ainda está nas primeiras versões e agradecemos novas ideias.

Siga estes passos para transferir e instalar o ZimaClient:
### 1. Transferir o ZimaClient
No dispositivo principal, visite a ligação seguinte e transfira o pacote de instalação:
https://www.zimaspace.com/zimaos/download
![](https://manage.icewhale.io/api/static/docs/1728618086764_image.png)
### 2. Instalação no macOS
- Quando a transferência terminar, faça duplo clique no pacote de instalação.
![](https://manage.icewhale.io/api/static/docs/1728618128888_copyImage.png)
- Arraste o ZimaClient para a pasta “Applications” e aguarde a conclusão da instalação.
- Em seguida, abra o “Launchpad” e execute o ZimaClient.
![](https://manage.icewhale.io/api/static/docs/1728618170097_image.png)
Nota:
O ZimaClient **apresenta o ícone na barra de menus**. Clique no ícone para abrir e utilizar o cliente.

Para ligar o ZimaCube através do ZimaClient, consulte este [documento](./remote-access).
|![](https://manage.icewhale.io/api/static/docs/1728618411227_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618433316_image.png) |
|:---:|:---:|
|![](https://manage.icewhale.io/api/static/docs/1728618448765_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618468465_image.png)|
### 3. Instalação no Windows
- Após a transferência, faça duplo clique no pacote de instalação do ZimaClient para o executar.
![](https://manage.icewhale.io/api/static/docs/1728618632345_image.png)
- Quando a instalação terminar, o ZimaClient apresenta o ícone na barra de tarefas. Clique no ícone para utilizar o cliente.

|![](https://manage.icewhale.io/api/static/docs/1728618778265_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618799001_image.png)|
|:---:|:---:|
### Perguntas frequentes
**1. Se a instalação ficar bloqueada no ecrã seguinte:**
![](https://manage.icewhale.io/api/static/docs/1728641073103_image.png)

- Visite https://www.zerotier.com/download/, transfira e instale o ZeroTier e confirme que a ligação à Internet funciona.
- Volte a executar o ZimaClient.

<br>

**2. Se o ZimaClient não aparecer no macOS, embora seja indicado que está em execução:**
- Abra o “Monitor de Atividade” do macOS e procure processos relacionados com Zima, como Zima, Zima Helper ou zima-client-backup.
- Termine todos os processos relacionados.
- Volte a abrir o Launchpad e execute o ZimaClient.
<br>

**3. O acesso remoto compromete a minha privacidade?**
Não. O ZimaClient e o ZimaOS estabelecem automaticamente uma ligação P2P entre o computador portátil e o ZimaCube. Os dados são cifrados e transferidos diretamente entre os dois dispositivos.
Utilizamos um controlador de rede alojado no ZimaCube e recorremos aos servidores públicos globais do ZeroTier apenas para a descoberta. A rede virtual é totalmente controlada pelo ZimaCube; nem a IceWhale nem o ZeroTier têm direitos administrativos. A privacidade e a soberania dos dados são prioridades, pelo que pode colocar qualquer questão.
Continuaremos a monitorizar e otimizar estas funções.
<br>

**4. Como obter registos e ajudar na depuração**
Quando ocorrer um erro, tire imediatamente uma captura de ecrã, se aplicável, e feche o ZimaClient.
Obtenha os registos nestas localizações:
macOS:
`~/Library/Application Support/Zima/logs`
Windows:
`%AppData%\Zima\logs`
Comprima todos os ficheiros de registo e envie-os para john@icewhale.org, descrevendo o problema e anexando as capturas disponíveis.
