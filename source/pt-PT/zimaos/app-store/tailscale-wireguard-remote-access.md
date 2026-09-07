---
title: Acesso remoto com Tailscale e WireGuard
seo_title: "Ligue-se ao seu servidor doméstico ZimaOS em qualquer lugar com Tailscale e WireGuard"
description: "Aceda ao seu servidor doméstico ZimaOS com Tailscale, WireGuard Easy, Firefly ou NetBird a partir da App Store oficial. Protocolos abertos, as suas próprias chaves, controlo total."
type: Docs
author: Lauren Pan
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---
O ZimaClient trata do acesso remoto no ZimaOS desde o momento em que inicia sessão. Mas muitos de vocês já utilizam redes Tailscale ou servidores WireGuard, e a razão é quase sempre a mesma. Querem que a ligação seja construída sobre protocolos abertos, com contas e chaves que controlam. Este guia cobre esses caminhos, instalados diretamente a partir da App Store.

## Porquê protocolos padrão

O ZimaOS não recolhe dados do utilizador, independentemente da forma como se liga. A diferença entre os caminhos está em onde fica o controlo.

O acesso remoto integrado funciona através do ZimaClient. Inicia sessão e a ligação fica configurada por si, ponto a ponto e cifrada. Os protocolos padrão entregam-lhe essa configuração. Traz a sua própria conta Tailscale ou as suas próprias chaves WireGuard. O tráfego permanece ponto a ponto, os clientes funcionam em Linux, Android e outras plataformas, e nada fica preso a um único fornecedor. Se um dia deixar o ZimaOS para trás, a sua rede e as suas configurações vão consigo.

A App Store oficial inclui quatro aplicações para isto: **Tailscale**, **WireGuard Easy**, **Firefly** e **NetBird**.

## Escolha a sua aplicação

| Aplicação | O que é | Ideal para |
|---|---|---|
| Tailscale | Uma VPN em malha baseada em WireGuard que não precisa de portas abertas | Juntar os seus dispositivos numa rede privada com configuração mínima |
| WireGuard Easy | Uma interface web para gerir um servidor VPN WireGuard | Gerir o seu próprio servidor WireGuard com um painel |
| Firefly | Um servidor VPN WireGuard baseado em wg-easy | Um servidor WireGuard com as predefinições já escolhidas |
| NetBird | Uma rede sobreposta baseada em WireGuard com SSO, MFA e controlos de acesso | Equipas e regras de acesso detalhadas |

O Tailscale e o NetBird utilizam os seus próprios serviços para coordenar os dispositivos, enquanto o tráfego permanece ponto a ponto. O WireGuard Easy e o Firefly guardam tudo no seu dispositivo, chaves incluídas.

## Instalar a partir da App Store

Os primeiros passos são os mesmos para as quatro aplicações:

1. Abra a **App Store** no seu dispositivo ZimaOS.
2. Procure a aplicação e clique em **Instalar**.
3. Abra a aplicação a partir das aplicações instaladas.

![Cartão da aplicação Tailscale na App Store do ZimaOS com o botão Instalar e a descrição](/images/app-store/tailscale-app-store-card.webp)

O Tailscale precisa de mais alguns passos, descritos a seguir. As outras três aplicações são abordadas depois da configuração do cliente.

### Tailscale

No primeiro arranque, o Tailscale pede-lhe para iniciar sessão com a sua conta Tailscale. Abre-se uma página no navegador, autoriza o dispositivo e o seu dispositivo ZimaOS entra na sua tailnet.

![Página de início de sessão do Tailscale a pedir a autorização do seu servidor doméstico na tailnet](/images/app-store/tailscale-sign-in.png)

Dê-lhe um nome reconhecível e procure-o depois na [consola de administração do Tailscale](https://login.tailscale.com/admin/machines "Gere os seus dispositivos Tailscale na consola de administração oficial") com o seu endereço 100.x.

![Consola de administração do Tailscale com o servidor doméstico e o seu endereço 100.x](/images/app-store/tailscale-admin-console-device.webp)

Qualquer dispositivo da sua tailnet pode agora chegar ao seu servidor doméstico ZimaOS através desse endereço, esteja onde estiver cada um. Guarde o URL do painel nos marcadores do portátil e inicie sessão a partir de qualquer lugar.

## Instalar as aplicações cliente

O lado do cliente é simples. Instale a aplicação oficial a partir da loja de aplicações do seu dispositivo e ligue-a à sua rede.

No iOS, ambas as aplicações estão na App Store. No Android, obtenha a aplicação oficial Tailscale ou WireGuard na Google Play. No Linux, instale o cliente oficial do Tailscale ou o wireguard-tools a partir da sua distribuição.

A configuração é um único passo:

- Tailscale: abra a aplicação e inicie sessão com a sua conta Tailscale. O dispositivo aparece na sua tailnet.
- WireGuard: importe o ficheiro de configuração ou leia o código QR que criou no ZimaOS.

![Aplicação Tailscale no iOS com o servidor doméstico ligado à tailnet](/images/app-store/tailscale-ios-app.png)

## WireGuard Easy, Firefly e NetBird

As outras três aplicações seguem o mesmo fluxo de instalação a partir da App Store. Cada uma abre a sua página de gestão após a instalação.

**WireGuard Easy** executa um servidor VPN WireGuard com uma interface web. Crie um cliente por dispositivo e entregue a cada um a sua configuração como código QR ou ficheiro de configuração.

**Firefly** é o servidor WireGuard mais simples, baseado em wg-easy. Crie um cliente, leia o código QR no telemóvel e está ligado.

**NetBird** liga os seus dispositivos numa rede sobreposta baseada em WireGuard com SSO, MFA e controlos de acesso detalhados. Aprove os dispositivos e defina as regras de acesso a partir do painel do NetBird.

Tenha em atenção:

- Os servidores WireGuard escutam numa porta UDP. Para chegar ao WireGuard Easy ou ao Firefly a partir de fora da sua rede doméstica, essa porta precisa de um endereço IP público ou de um reencaminhamento de portas no router.
- O NetBird trata do início de sessão e das regras de acesso através do seu próprio serviço. A sua conta ZimaOS não está envolvida.

## Computador e configuração avançada

No computador, o fluxo é o mesmo que no telemóvel. Instale o cliente oficial do Tailscale ou do WireGuard para Windows, macOS ou Linux e, em seguida, inicie sessão com a sua conta Tailscale ou importe a sua configuração WireGuard.

Para a configuração avançada, a documentação oficial cobre os detalhes:

- Tailscale: [Base de conhecimento do Tailscale](https://tailscale.com/kb/ "Documentação oficial do Tailscale para configuração e configuração avançada")
- WireGuard: [Site oficial do WireGuard](https://www.wireguard.com/install/ "Site oficial do WireGuard com clientes e instruções de configuração")
- WireGuard Easy: [Repositório do wg-easy](https://github.com/wg-easy/wg-easy "Repositório oficial do wg-easy com detalhes de instalação e configuração")
- NetBird: [Documentação do NetBird](https://docs.netbird.io/ "Documentação oficial do NetBird sobre SSO, MFA e regras de acesso")

## O que estas aplicações não fazem

- Não substituem o ZimaClient. A navegação de fotografias, a **[cópia de segurança do telemóvel](../phone-backup "Efetuar automaticamente uma cópia de segurança do telemóvel para o ZimaOS com o ZimaClient")**, a **[cópia de segurança do computador](../computer-backup "Efetuar uma cópia de segurança do computador para o ZimaOS através do Finder, Explorador ou sincronização")**, o Connect ID e o interruptor de acesso remoto nas definições do ZimaOS pertencem ao ZimaClient. O Tailscale e o WireGuard transportam a ligação. Não fazem cópias de segurança nem sincronizam nada.
- O Tailscale e o NetBird coordenam os dispositivos através dos seus próprios serviços, pelo que a sua conta fica no fornecedor. O tráfego permanece ponto a ponto. Se manter cada peça no seu próprio hardware é importante para si, o WireGuard Easy e o Firefly fazem isso.
- O ZimaOS em si não recolhe dados do utilizador em nenhum destes caminhos.

## Seguinte

- **[Acesso remoto](../remote-access "Configurar o acesso remoto para poder aceder ao servidor doméstico a partir de qualquer lugar")** — a opção integrada
- **[Transferir o ZimaClient](../zimaclient-install "Instalar e configurar o ZimaClient no computador e no telemóvel para aceder ao dispositivo")** — clientes para computador e telemóvel
- **[Aplicações autoalojadas](./self-hosted-apps "Explore aplicações autoalojadas que pode executar no seu servidor doméstico ZimaOS")** — o que mais pode executar no seu dispositivo
