---
title: Acesso remoto
seo_title: "Acesso remoto do ZimaOS: ligue-se ao servidor doméstico em qualquer lugar"
description: "Como funciona o acesso remoto no ZimaOS: ligação cifrada ponto a ponto, percurso mais rápido automático, ID remoto do dispositivo, comutação entre dispositivos e opções de protocolos padrão."
type: Docs
author: Lauren Pan
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---
O acesso remoto é a funcionalidade silenciosa que utiliza todos os dias sem pensar nela. O servidor doméstico fica em casa e você chega a ele a partir de um café, de um escritório ou de outro país. A ligação ficou configurada no momento em que iniciou sessão pela primeira vez.

## Como funciona o acesso remoto

O ZimaClient e o ZimaOS estabelecem um **canal cifrado ponto a ponto** entre o seu dispositivo e o servidor doméstico. Os seus dados circulam diretamente entre um e outro. **Não existe nenhum servidor de terceiros no meio** e ninguém consegue ler o que passa pelo canal.

![Diagrama do canal cifrado ponto a ponto entre o seu telemóvel e o seu servidor doméstico ZimaOS](/images/guides/remote-access-how-it-works.webp)

A ligação também escolhe o percurso mais rápido por si. Na rede de casa utiliza a LAN local. Ligue o Thunderbolt e muda para o cabo direto. Fora de casa funciona através da internet ou de um ponto de acesso. Não precisa de configurar nada disto. O ZimaClient encontra o percurso mais rápido e utiliza-o.

O controlo fica no seu dispositivo. O ZimaOS executa o seu próprio controlador de rede para as ligações remotas, pelo que nenhuma entidade externa detém direitos administrativos sobre a sua rede. O ZimaOS não recolhe, armazena nem tem acesso aos seus ficheiros, registos de ligação ou dados de utilização.

Também pode desativar completamente o acesso remoto. Abra **Definições > Rede** no painel e desligue-o. As ligações remotas terminam aí, enquanto a sua rede doméstica e as ligações locais continuam a funcionar normalmente. Volte a ativá-lo quando quiser o canal aberto novamente.

## Ligar a partir do telemóvel e do computador

O primeiro início de sessão num dispositivo novo deixa tudo configurado. Depois disso, a ligação é automática. Abra o ZimaClient e está ligado, em casa ou fora. Consulte **[Começar](./get-started "Configurar o ZimaOS desde o primeiro arranque com o ZimaClient e a criação de conta")** se o dispositivo acabou de sair da caixa.

Abra o cliente e obtém mais do que uma ligação. O painel do dispositivo mostra o IP do seu servidor doméstico e o estado da ligação, com um botão que abre o painel do ZimaOS num só clique. Esteja onde estiver, o painel está a um toque de distância.

![Painel do dispositivo no ZimaClient com o IP do servidor doméstico, o estado da ligação e o botão do painel](/images/guides/zimaclient-connection-info.png)

No telemóvel, o mesmo cliente transporta as funcionalidades que utiliza diariamente. Ficheiros e Fotografias mantêm o seu conteúdo ao alcance e as cópias de segurança continuam a funcionar quando sai de casa. Consulte **[Cópia de segurança do telemóvel](./phone-backup "Efetuar automaticamente uma cópia de segurança do telemóvel para o ZimaOS com o ZimaClient")** e **[Fotografias](./photos "Explore a biblioteca de fotografias por cronologia, mapa e coleções")** para esses casos.

No computador, o ZimaClient monta o seu armazenamento no Finder ou no Explorador de Ficheiros e mantém as pastas de cópia de segurança em funcionamento. Consulte **[Cópia de segurança do computador](./computer-backup "Efetuar uma cópia de segurança do computador para o ZimaOS através do Finder, Explorador ou sincronização")** para ver o processo completo.

## O ID remoto do seu dispositivo

O ID remoto é a identidade única do seu dispositivo para as ligações remotas. Outras pessoas chegam ao seu dispositivo através dele, por isso trate-o como uma palavra-passe para as suas pastas partilhadas.

Para o encontrar, abra **Definições** no painel do ZimaOS, mude para o separador **Rede** e copie o ID remoto.

![Separador Rede das Definições do ZimaOS com o ID remoto do dispositivo e a opção de copiar](/images/guides/remote-id-location.webp)

Duas coisas a saber para o manter seguro:

- Se o ID remoto for divulgado, as suas pastas partilhadas podem ficar expostas. Guarde-o para si.
- Se suspeitar de uma divulgação, reponha-o clicando no botão **...** junto ao ID remoto. A divulgação deixa de funcionar de imediato. As ligações e partilhas existentes ficam inválidas, pelo que os dispositivos têm de voltar a ligar-se após a reposição.

![Separador Rede das Definições do ZimaOS com a opção de repor o ID remoto do dispositivo](/images/guides/remote-id-reset.png)

## Vários dispositivos

Ter mais do que um dispositivo ZimaOS é a norma, não a exceção. O ZimaClient lista-os a todos e a comutação faz-se com um toque na lista de dispositivos.

![Lista de dispositivos do ZimaClient com vários servidores domésticos ZimaOS para alternar](/images/guides/zimaclient-device-switch.png)

Dê a cada dispositivo o seu próprio ícone para os distinguir facilmente. No painel do ZimaOS, abra **Definições > Geral** e clique no botão de configuração junto a **Informações do dispositivo**. O ícone viaja com o dispositivo, pelo que o cliente mostra a mesma identidade em todos os ecrãs que utiliza.

![Página Geral das Definições do ZimaOS com ícones de dispositivo personalizados, um inspirado na capa do álbum com ondas de pulsar](/images/guides/zimaclient-device-icons.png)

Para um segundo computador, o Connect ID cobre o caso em que o dispositivo não está por perto. Inicie sessão com o Connect ID em vez de uma pesquisa local e a ligação funciona da mesma forma. Saiba mais em **[Funcionalidades](./features "Conheça o acesso remoto, o armazenamento e as aplicações do ZimaOS")**.

## ZimaClient ou um protocolo padrão

O ZimaClient é a via integrada. Inicia sessão e a ligação remota funciona sem qualquer configuração de rede da sua parte. A ligação é ponto a ponto, pelo que os seus dados circulam diretamente entre os dispositivos.

Se preferir que a ligação funcione sobre protocolos abertos, a App Store oficial tem quatro aplicações para isso: Tailscale, WireGuard Easy, Firefly e NetBird. Traz a sua própria conta ou as suas próprias chaves, e a ligação funciona com clientes padrão em Linux, Android e outras plataformas. Consulte **[Acesso remoto com Tailscale e WireGuard](./app-store/tailscale-wireguard-remote-access "Configure o acesso remoto com Tailscale ou WireGuard no seu servidor doméstico")** para ver a comparação e os passos de configuração.

## Seguinte

- **[Transferir o ZimaClient](./zimaclient-install "Instalar e configurar o ZimaClient no computador e no telemóvel para aceder ao dispositivo")** — o cliente para cada dispositivo que transporta
- **[Acesso remoto com Tailscale e WireGuard](./app-store/tailscale-wireguard-remote-access "Configure o acesso remoto com Tailscale ou WireGuard no seu servidor doméstico")** — a via dos protocolos padrão
- **[Partilha de ficheiros SMB](./smb-troubleshooting "Partilhar ficheiros através de SMB para que apareçam no Finder e no Explorador de Ficheiros")** — partilhar na rede local
