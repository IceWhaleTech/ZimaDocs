---
title: Como executar o AdGuard Home no ZimaOS
seo_title: "AdGuard Home no ZimaOS: bloqueio de anúncios e rastreadores em toda a rede"
description: Instale o AdGuard Home a partir da App Store do ZimaOS — bloqueie anúncios, rastreadores e domínios maliciosos para todos os dispositivos da sua rede com o seu próprio servidor DNS.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descrição geral

O AdGuard Home tem suporte nativo no App Catalog do ZimaOS. Consulte a [página do AdGuard Home na App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.adguardhome) para obter os detalhes mais recentes da aplicação.

O AdGuard Home é um servidor DNS de bloqueio de anúncios e rastreadores para toda a rede, que corre no seu próprio hardware — bloqueia anúncios, rastreadores e domínios maliciosos para todos os dispositivos da sua rede, de telemóveis a dispositivos de casa inteligente, sem instalar nada nos próprios dispositivos.

## Pré-requisitos

- Um sistema ZimaOS em funcionamento.
- As portas **82** e **3001** disponíveis no dispositivo — são as portas do host ZimaOS mapeadas para a porta 80 do AdGuard Home (interface web) e 3000 (assistente de configuração).
- A porta **53** também deve estar livre para DNS.

## App Catalog

1. Encontre o AdGuard Home no App Catalog do ZimaOS. Abra a **App Store** → procure por "AdGuard Home" → clique em **Install**.

![Página da aplicação AdGuard Home na App Store do ZimaOS com instalação e instalação personalizada](/images/app-store/adguard-app-store.webp)

2. **Está pronto a usar!**

![Ícone do AdGuard Home no painel do ZimaOS após a conclusão da instalação](/images/app-store/adguard-installed-dashboard.webp)

## Configuração

Depois de a transferência terminar, abra as definições da aplicação e adicione uma regra de reencaminhamento de portas:

1. Clique no botão **'+'** em **Port forwarding** e adicione uma regra que mapeie `82` para `80`.

![Regras de reencaminhamento de portas do AdGuard Home com um novo mapeamento TCP de 82 para 80](/images/app-store/adguard-port-forwarding.webp)

> **Dica:** Se adicionar a regra apresentar um erro, é provável que a porta `82` já esteja em uso por outra aplicação. Altere `82` para outra porta livre e lembre-se de atualizar todas as menções de `82` para coincidirem. Não altere o mapeamento da porta `53` — é necessário para o DNS.

## Configuração inicial

1. Clique no ícone do AdGuard Home para abrir a configuração inicial.
2. Mantenha todas as definições predefinidas e conclua a configuração, criando o seu nome de utilizador e palavra-passe de administrador.

> A interface de administração do AdGuard Home escuta em todas as interfaces de rede por predefinição. Para alterar esta configuração, consulte o guia da AdGuard sobre [executar o AdGuard Home em segurança](https://adguard-dns.io/kb/adguard-home/running-securely/ "Guia oficial de segurança do AdGuard Home").

## Após a configuração

1. Volte ao painel do ZimaOS e abra novamente as definições da aplicação. No campo **Web URL** (webURL), altere `3001` para `82`.

![Definições da aplicação AdGuard Home com o campo Web URL alterado de 3001 para 82](/images/app-store/adguard-web-url.webp)

2. Clique no ícone do AdGuard Home e inicie sessão com o nome de utilizador e a palavra-passe que definiu durante a configuração.

![Ecrã de início de sessão do AdGuard Home com campos de utilizador e palavra-passe](/images/app-store/adguard-login.webp)

## Definir um IP estático

Antes de apontar o seu router para o AdGuard Home, atribua ao dispositivo ZimaOS um endereço fixo. Se mantiver um endereço atribuído por DHCP e esse endereço mudar mais tarde, todos os dispositivos da sua rede perderão a resolução DNS até ser atualizado.

1. Abra **Settings** → **Network** do ZimaOS e selecione a sua interface de rede.
2. Mude de automático (DHCP) para **Manual** e preencha os campos.
3. Guarde as definições.

![Definições de rede do ZimaOS em modo manual com IP estático, gateway e DNS](/images/app-store/adguard-static-ip.webp)

Os campos mostrados na captura são exemplos — substitua-os pelos valores que correspondem à sua própria rede:

- Endereço IP: ex. `10.0.1.91`
- Máscara de sub-rede: ex. `255.255.255.0` (ou um comprimento de prefixo como /24, dependendo da sua configuração)
- Gateway: ex. `10.0.1.1`
- DNS: ex. `94.140.14.14` (primário), `94.140.15.15` (secundário)

Em alternativa, pode reservar o endereço na página DHCP do seu router para que o dispositivo receba sempre o mesmo IP.

## Apontar o seu router para o AdGuard Home

Depois de concluir a configuração do AdGuard Home, abra as definições do seu router e encontre a secção **DHCP/DNS** e introduza o endereço do dispositivo que executa o AdGuard Home — por exemplo `10.0.1.91`. Guarde as definições e está pronto.

> Alguns routers não permitem definir um servidor DNS personalizado. Nesse caso, pode usar o servidor DHCP do próprio AdGuard Home.

## Adicionar listas de bloqueio

O AdGuard Home inclui o **filtro DNS da AdGuard** ativado por predefinição, pelo que a filtragem funciona assim que a configuração estiver concluída. Para filtrar de forma mais agressiva, abra **Filters** → **DNS blocklists** → **Add blocklist** para adicionar listas de bloqueio DNS adicionais — qualquer domínio nestas listas é bloqueado para todos os dispositivos da sua rede.

## O que o AdGuard Home bloqueia

O bloqueio baseado em DNS funciona por domínio, pelo que pode bloquear:

- anúncios e rastreadores servidos a partir de domínios dedicados de publicidade e rastreamento
- domínios maliciosos e de phishing
- telemetria de aplicações e dispositivos de casa inteligente

Tenha em atenção: o AdGuard Home não consegue remover anúncios servidos a partir do mesmo domínio que o conteúdo, como os anúncios dentro de vídeos do YouTube e a maioria dos anúncios dentro de aplicações. Esses exigem um bloqueador ao nível do dispositivo. Para anúncios do YouTube e anúncios dentro de aplicações no seu telemóvel ou computador, experimente o AdGuard Ad Blocker com o código ZIMAGUARD30 e obtenha 30% de desconto.

A filtragem ao nível da rede está ativa quando os pedidos dos clientes aparecem no **Query Log** do AdGuard Home e os pedidos bloqueados aparecem nas estatísticas do **Dashboard**.

![Painel do AdGuard Home com contagens de consultas DNS e estatísticas de clientes](/images/app-store/adguard-dashboard-stats.webp)

## Atualizações

O AdGuard Home corre como um contentor Docker, e as atualizações automáticas estão desativadas nas instalações Docker por design. Por isso, o botão **Update** dentro da interface do AdGuard Home não funcionará. Para atualizar, instale a versão mais recente a partir da **App Store do ZimaOS**.

## Guias relacionados

- Procura outra opção? Consulte [Configuração do Pi-hole](./pi-hole-setup "Bloqueie anúncios e rastreadores em toda a rede com o Pi-hole no ZimaOS").

## Precisa de ajuda?

Se tiver problemas ao instalar ou usar o AdGuard Home no ZimaOS, junte-se à [comunidade Discord do ZimaSpace](https://discord.gg/f9nzbmpMtU "Junte-se à comunidade Discord do ZimaSpace para suporte do ZimaOS"). A nossa equipa e os membros da comunidade terão todo o gosto em ajudar.
