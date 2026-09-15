---
title: Como executar o Nginx Proxy Manager no ZimaOS
seo_title: "Nginx Proxy Manager no ZimaOS: proxy reverso e configuração de HTTPS"
description: Instale o Nginx Proxy Manager a partir da App Store do ZimaOS — configure proxies reversos, certificados Let's Encrypt e HTTPS para as suas aplicações autoalojadas.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descrição geral

O Nginx Proxy Manager tem suporte nativo no App Catalog do ZimaOS. Consulte a [página do Nginx Proxy Manager na App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.nginxproxymanager) para obter os detalhes mais recentes da aplicação.

O [Nginx Proxy Manager](https://nginxproxymanager.com/ "Site oficial do Nginx Proxy Manager") é uma ferramenta gratuita e de código aberto que coloca uma interface web limpa por cima do Nginx. Permite configurar proxies reversos, certificados SSL (via Let's Encrypt) e listas de acesso em minutos — para poder expor as suas aplicações autoalojadas à internet por HTTPS sem editar ficheiros de configuração à mão. A aplicação foi construída com o autoalojamento como prioridade.

## Pré-requisitos

- Uma instalação do ZimaOS em funcionamento.
- *(Opcional)* Um nome de domínio a apontar para o IP público do seu servidor, se quiser certificados HTTPS automáticos via Let's Encrypt.

## App Catalog

1. Encontre o Nginx Proxy Manager no App Catalog do ZimaOS. Abra a **App Store** → procure por "Nginx Proxy Manager" → **Install**.

> **Dica:** Ao instalar pela primeira vez, poderá ver um aviso **"there are ports in use"**. Consulte o FAQ abaixo para saber como lidar com ele.

![Página da aplicação Nginx Proxy Manager na App Store do ZimaOS com o botão de instalação](/images/app-store/nginx-proxy-manager-app-store.png)

2. **Está pronto a usar!**

![Ícone do Nginx Proxy Manager no painel do ZimaOS após a conclusão da instalação](/images/app-store/nginx-proxy-manager-installed-dashboard.png)

3. Depois de iniciar sessão, adicione o seu primeiro anfitrião de proxy.

![Painel do Nginx Proxy Manager com os contadores de anfitriões de proxy e redirecionamentos a zero](/images/app-store/nginx-proxy-manager-dashboard.webp)

## Primeiros passos

1. Inicie sessão na interface de administração do Nginx Proxy Manager em `http://your-zimaos-ip:81`.
2. Adicione o seu primeiro **Proxy Host**:

   - **Domain Names** — introduza o domínio ou subdomínio que aponta para o seu ZimaOS.
   - **Forward Hostname / IP** e **Forward Port** — o endereço do serviço que quer expor.
   - Ative **Block Common Exploits** e **Websockets Support** conforme necessário.

![Diálogo Add Proxy Host com os campos de domínio, nome de anfitrião de reencaminhamento e porta de reencaminhamento](/images/app-store/nginx-proxy-manager-add-proxy-host.png)

3. No separador **SSL**, solicite um certificado **Let's Encrypt** gratuito e ative **Force SSL** para HTTPS automático.

Agora os seus serviços podem ser acedidos através de um domínio amigável por HTTPS — o Nginx Proxy Manager trata do encaminhamento, SSL e controlo de acesso por si.

O proxy está a funcionar quando abrir o seu domínio num navegador e a aplicação carregar por HTTPS sem avisos de certificado.

## Antes de expor serviços

Um proxy reverso torna as aplicações públicas — certifique-se de que cada uma o merece:

- Coloque uma **Access List** à frente de serviços que não têm o seu próprio início de sessão.
- Mantenha a interface de administração (porta 81) fora da internet; faça a gestão a partir da sua rede local ou através do [Tailscale](./tailscale-wireguard-remote-access "Aceda ao seu dispositivo ZimaOS remotamente através de Tailscale WireGuard") em vez de expor a porta.
- Comece com um serviço que tenha a sua própria autenticação e só alargue o acesso depois de verificar como se comporta publicamente.

## FAQ

### "there are ports in use"

![Aviso de portas em uso ao instalar o Nginx Proxy Manager no ZimaOS](/images/app-store/nginx-proxy-manager-ports-in-use.webp)

O Nginx Proxy Manager usa as portas **80** (HTTP), **81** (interface de administração) e **443** (HTTPS). A porta 80 é normalmente ocupada pelo ZimaOS Gateway, por isso remapeie-a manualmente: escolha **Custom Installation**, altere o mapeamento da porta 80 e clique em **Install**. (Remapeie também quaisquer outras portas que estejam em uso — se remapear a 81, o endereço da interface de administração em Primeiros passos muda com ela.)

![Página da aplicação Nginx Proxy Manager com Custom Installation selecionado antes de instalar](/images/app-store/nginx-proxy-manager-custom-install.webp)

![Mapeamento de portas da instalação personalizada com a porta 80 remapeada para 8010](/images/app-store/nginx-proxy-manager-port-remap.webp)

## Guias relacionados

- Expor serviços sem abrir portas de todo? Consulte [Acesso remoto com Tailscale WireGuard](./tailscale-wireguard-remote-access "Aceda ao seu dispositivo ZimaOS remotamente através de Tailscale WireGuard").

## Precisa de ajuda?

Se tiver problemas ao instalar ou usar o Nginx Proxy Manager no ZimaOS, junte-se à [comunidade Discord do ZimaSpace](https://discord.gg/f9nzbmpMtU "Junte-se à comunidade Discord do ZimaSpace para suporte do ZimaOS"). A nossa equipa e os membros da comunidade terão todo o gosto em ajudar.
