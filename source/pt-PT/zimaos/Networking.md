---
title: Rede
description:O ZimaOS não possui uma interface de ambiente de trabalho, basta ligar o cabo Ethernet e está pronto. O ecrã ligado apresenta as informações do dispositivo e os endereços IP, enquanto o painel permite visualizar as velocidades de ligação por porta, mudar para um IP estático ou ativar o acesso remoto.
type: “Docs”
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
permalink: /pt-PT/zimaos/networking.html
---
O **ZimaOS** não possui um ambiente de trabalho. Quando liga um monitor ao seu dispositivo, o ecrã apresenta uma visão geral da consola com a versão do ZimaOS, o modelo do dispositivo e os endereços IP que pode utilizar para aceder ao painel web do ZimaOS.

Exemplo do que verá no ecrã:

![Zimaos display UI](https://manage.icewhale.io/api/static/docs/1783495730981_image.png)


Por predefinição, o ZimaOS obtém automaticamente um endereço IP através de DHCP — basta ligar o cabo Ethernet e o dispositivo fica pronto. Se precisar de alterar as definições de rede, abra o painel e aceda a **Definições > Rede**.

## Definições de Rede

A página **Rede** apresenta de relance todas as portas Ethernet físicas do seu dispositivo. Para cada porta pode ver:

- Nome da interface (por exemplo, `eth0`, `eth1`)
- Estado da ligação (Ligado / Desligado)
- Velocidade atual da ligação (por exemplo, 1000 Mbps, 2500 Mbps)
- Endereço IP atribuído (através de DHCP)

Isto facilita a verificação de que cada porta está a negociar à velocidade esperada e recebeu um IP válido do seu router.

## Configurar um IP Estático

Cada interface de rede pode ser alterada de automática (DHCP) para uma configuração manual de IP estático:

1. Clique na interface que pretende configurar
2. Altere o modo de **DHCP** para **Manual**
3. Introduza o endereço IP, máscara de sub-rede, gateway e servidor DNS pretendidos
4. Clique em **Guardar**
![Setting Page](https://manage.icewhale.io/api/static/docs/1783495665542_image.png)

A alteração entra em vigor imediatamente. Se o novo IP estiver numa sub-rede diferente, a sessão atual do painel será desligada — utilize o novo IP apresentado no monitor ligado para voltar a ligar.

## Acesso Remoto

O botão **Acesso Remoto** na página Rede permite ativar o acesso de entrada ao painel do ZimaOS através da Internet. Quando ativado, o ZimaOS estabelece uma ligação de retransmissão segura para que possa aceder ao dispositivo a partir de qualquer lugar sem configurar o reencaminhamento de portas no router.

Para mais detalhes, consulte [Remote Access](https://www.zimaspace.com/docs/zimaos/remote-access).