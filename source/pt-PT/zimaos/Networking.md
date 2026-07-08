---
title: Rede
description:O ZimaOS não possui interface de ambiente de trabalho, basta ligar o cabo Ethernet e está pronto. O ecrã ligado apresenta informações do dispositivo e endereços IP, enquanto o painel de controlo permite visualizar as velocidades de ligação de cada porta, mudar para um IP estático ou ativar o acesso remoto.
type: “Docs”
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
permalink: /pt-PT/zimaos/networking.html
---
O **ZimaOS** não possui um ambiente de trabalho. Quando liga um monitor ao seu dispositivo, o ecrã apresenta uma visão geral da consola com a versão do ZimaOS, o modelo do dispositivo e os endereços IP que pode utilizar para aceder ao painel de controlo web do ZimaOS.

Exemplo do que verá no ecrã:

![Zimaos display UI](https://manage.icewhale.io/api/static/docs/1783495730981_image.png)


Por predefinição, o ZimaOS obtém automaticamente um endereço IP através de DHCP — basta ligar o cabo Ethernet e o dispositivo estará pronto. Se precisar de alterar as definições de rede, abra o painel de controlo e aceda a **Settings > Network**.

## Definições de Rede

A página **Network** apresenta todos os portos Ethernet físicos do seu dispositivo de uma só vez. Para cada porta pode ver:

- Nome da interface (por exemplo, `eth0`, `eth1`)
- Estado da ligação (Connected / Disconnected)
- Velocidade atual da ligação (por exemplo, 1000 Mbps, 2500 Mbps)
- Endereço IP atribuído (através de DHCP)

Isto facilita a verificação de que cada porta está a negociar à velocidade esperada e recebeu um IP válido do seu router.

## Configurar um IP Estático

Cada interface de rede pode ser alterada de configuração automática (DHCP) para uma configuração manual de IP estático:

1. Clique na interface que pretende configurar
2. Altere o modo de **DHCP** para **Manual**
3. Introduza o endereço IP pretendido, máscara de sub-rede, gateway e servidor DNS
4. Clique em **Save**
![Setting Page](https://manage.icewhale.io/api/static/docs/1783495665542_image.png)

A alteração entra em vigor imediatamente. Se o novo IP estiver numa sub-rede diferente, a sessão atual do painel de controlo será desligada — utilize o novo IP apresentado no monitor ligado para voltar a estabelecer a ligação.

## Acesso Remoto

O botão **Remote Access** na página de Rede permite ativar o acesso de entrada ao painel de controlo do ZimaOS através da Internet. Quando ativado, o ZimaOS estabelece uma ligação de retransmissão segura para que possa aceder ao dispositivo a partir de qualquer lugar sem configurar o reencaminhamento de portas no seu router.

Para mais detalhes, consulte [Remote Access](https://www.zimaspace.com/docs/zimaos/remote-access).