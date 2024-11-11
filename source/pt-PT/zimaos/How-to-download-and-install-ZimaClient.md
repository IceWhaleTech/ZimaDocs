---
title: Como baixar e instalar o ZimaClient
description: 
type: "Docs"
tip: O formato fixo da barra superior não deve ser removido, a descrição é para o artigo, se não preenchida será cortada a primeira parte do texto
---
## Introdução:
O ZimaClient foi projetado para ser um cliente silencioso, mas sua funcionalidade é substancial o suficiente para que algumas experiências principais ocorram em lugares que você pode nem perceber - de maneira silenciosa e natural.

O acesso remoto é uma das características mais importantes. Assim que você habilitar e conectar o ZimaCube, ele sempre encontrará a conexão mais rápida para abrir a webUI em qualquer cenário de rede (LAN, Thunderbolt, rede externa, hotspot).
Isso também se aplica ao compartilhamento de serviços do ZimaOS com seus amigos. Alguns serviços, como OpenWebUI e servidores de jogos, podem ser acessados sem fazer login, usando os próprios recursos de autenticação do aplicativo.

Ao mesmo tempo, também fornecemos um acesso rápido a funções, como Peer Drop, Backup, Abrir no Finder.
Claro, ainda estamos nas primeiras iterações e recebemos mais ideias para o cliente.

Para baixar e instalar o ZimaClient, siga os passos abaixo:
### 1. Baixar ZimaClient
Visite o seguinte link no seu dispositivo de hospedagem para baixar o pacote de instalação do ZimaClient:
https://find.zimaspace.com/
![](https://manage.icewhale.io/api/static/docs/1728618086764_image.png)
### 2. Guia de Instalação do Mac OS
- Após o download ser concluído, clique duas vezes para abrir o pacote de instalação baixado.
![](https://manage.icewhale.io/api/static/docs/1728618128888_copyImage.png)
- Arraste e solte o ZimaClient na pasta “Aplicativos” e aguarde a instalação ser concluída.
- Após a conclusão da instalação, você pode encontrar e clicar em “Launchpad” para executar o ZimaClient.
![](https://manage.icewhale.io/api/static/docs/1728618170097_image.png)
Notas:
O ZimaClient irá **exibir seu ícone na barra de tarefas** e você pode abrir e operar o cliente clicando no ícone.

Como se conectar ao ZimaCube através do ZimaClient, consulte este [documento](https://www.zimaspace.com/docs/zimaos/Romote-Access.html)
|![](https://manage.icewhale.io/api/static/docs/1728618411227_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618433316_image.png) |
|:---:|:---:|
|![](https://manage.icewhale.io/api/static/docs/1728618448765_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618468465_image.png)|
### 3. Guia de Instalação do Windows
- Após o download ser concluído, clique duas vezes para executar o pacote de instalação do ZimaClient.
![](https://manage.icewhale.io/api/static/docs/1728618632345_image.png)
- Após a instalação ser concluída, o ZimaClient irá exibir seu ícone na barra de tarefas e você pode usar o cliente clicando no ícone.

|![](https://manage.icewhale.io/api/static/docs/1728618778265_image.png)| ![](https://manage.icewhale.io/api/static/docs/1728618799001_image.png)|
|:---:|:---:|
### FAQ
**1. Se você ficar preso na tela a seguir durante a instalação, tente os passos a seguir:**
![](https://manage.icewhale.io/api/static/docs/1728641073103_image.png)

- Visite https://www.zerotier.com/download/ para baixar e instalar. Certifique-se de que a conexão com a internet está funcionando.
- Tente executar o ZimaClient novamente.

<br>

**2. Se o ZimaClient não aparecer no macOS, mas indicar que está em execução, siga os passos abaixo para solucionar o problema:**
- Abra o “Monitor de Atividade” do macOS, procure e encontre processos relacionados ao Zima (por exemplo, Zima, Zima Helper, zima-client-backup, etc.).
- Feche todos os processos relacionados.
- Reabra o Launchpad e execute o ZimaClient.
<br>

**3. O acesso remoto comprometerá a minha privacidade?**
Absolutamente não! A conexão entre o seu laptop e o ZimaCube é estabelecida automaticamente pelo aplicativo Zima Client e ZimaOS, utilizando comunicação P2P para estabelecer a conexão. A transferência de dados entre os dois é criptografada, garantindo que todas as transferências de dados sejam ponto a ponto.
Usamos um controlador de rede autoimplantado no ZimaCube, o que significa que usamos apenas os servidores de descoberta públicos globais do ZeroTier. O controle da rede virtual está inteiramente sob o controle do ZimaCube. nem IceWhale nem ZeroTier têm qualquer direito administrativo. A privacidade e soberania dos dados são nossas principais prioridades, então, se você tiver alguma dúvida, sinta-se à vontade para desafiá-las.
Continuaremos monitorando e otimizando essas questões.
<br>

**4. Como acessar logs e ajudar na depuração**
Quando um erro/problema ocorrer, imediatamente tire uma captura de tela (se aplicável) e saia do client Zima.
Recupere os logs a partir dos seguintes locais:
macOS:
`~/Library/Application Support/Zima/logs`
Windows:
`%AppData%\Zima\logs`
Empacote todos os arquivos de log e envie para john@icewhale.org, descrevendo o problema e fornecendo capturas de tela (se houver).