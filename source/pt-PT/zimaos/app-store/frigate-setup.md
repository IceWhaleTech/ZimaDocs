---
title: Como executar o Frigate no ZimaOS
seo_title: "Frigate no ZimaOS: NVR local com IA para vigilância e gravação de câmaras"
description: Instale o Frigate a partir da App Store do ZimaOS — vigilância de câmaras com IA, deteção de movimento e gravação no seu próprio hardware.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descrição geral

O Frigate tem suporte nativo no App Catalog do ZimaOS. Consulte a [página do Frigate na App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.frigate) para obter os detalhes mais recentes da aplicação.

O Frigate é um gravador de vídeo em rede (NVR) de código aberto com deteção de objetos em tempo real com IA — oferece-lhe vigilância de câmaras local e privada, deteção de movimento e gravação, tudo a correr no seu próprio hardware e sem enviar imagens para a nuvem.

## Pré-requisitos

- Uma instalação do ZimaOS em funcionamento.
- Uma ou mais câmaras IP compatíveis com RTSP ou ONVIF.
- Uma porta livre para a interface web (por predefinição: **8971**).
- *(Opcional)* Um Google Coral TPU ou uma iGPU Intel/AMD para acelerar a deteção de objetos.

## App Catalog

1. Encontre o Frigate no App Catalog do ZimaOS. Abra a **App Store** → procure por "Frigate".

![Página da aplicação Frigate na App Store do ZimaOS com o botão de instalação](/images/app-store/frigate-app-store.webp)

2. **Está pronto a usar!**

![Ícone do Frigate no painel do ZimaOS após a conclusão da instalação](/images/app-store/frigate-installed-dashboard.webp)

## Configuração

Os passos seguintes **NÃO são necessários** — pode começar imediatamente com a configuração **PREDEFINIDA**.

O ZimaOS suporta vários métodos de configuração, incluindo edição por formulário e edição secundária em YAML.

![Definições do contentor Frigate com portas, volumes e mapeamentos de dispositivos](/images/app-store/frigate-config-form.webp)

As definições principais que pode querer ajustar:

- **Volumes** — onde são guardadas a configuração e as gravações do Frigate (por predefinição: `/DATA/AppData/frigate/config`, montado em `/config`, e `/DATA/AppData/frigate/media`, montado em `/media/frigate`).
- **Porta** — a porta externa para aceder à interface web (por predefinição: 8971).
- **Dispositivo de deteção** — *(opcional)* mapeie um Coral PCIe (`/dev/apex_0`), um Coral USB (`/dev/bus/usb`) ou uma iGPU Intel/AMD (`/dev/dri/renderD128`) para deteção com aceleração por hardware.

## Configuração inicial

1. Abra o Frigate a partir do ambiente de trabalho do ZimaOS. Na primeira vez que o abrir, poderá ver um aviso de segurança — isto é normal, uma vez que o Frigate usa um certificado autoassinado. Clique em **Advanced** e depois em **Continue to ...** para prosseguir.
2. No primeiro início de sessão, precisará do seu nome de utilizador e palavra-passe iniciais. Clique nos três pontos no canto superior direito do ícone da aplicação Frigate → **Settings**, abra **Terminal and Logs**, clique em **Logs** e depois no ícone de ecrã inteiro para ampliar a vista.

![Definições da aplicação Frigate com os registos abertos e ampliados para ecrã inteiro](/images/app-store/frigate-logs-view.webp)

3. Procure a secção rodeada de asteriscos (`****`) — contém o seu nome de utilizador e palavra-passe. Use esta informação para iniciar sessão no Frigate.

![Registo de arranque do Frigate com as credenciais de administrador predefinidas entre asteriscos](/images/app-store/frigate-logs-credentials.webp)

4. Adicione as suas câmaras e configure a deteção, a gravação e mais, editando o ficheiro `config.yml` em `/DATA/AppData/frigate/config/config.yml`. Consulte a referência completa na documentação oficial abaixo.

5. O Frigate está a funcionar quando consegue abrir a interface, iniciar sessão e ver uma câmara ligada sem erros de transmissão. Abra **Live** e confirme que a câmara mostra uma imagem atual.

## Guias relacionados

- Combine o Frigate com um LLM local para descrições de eventos com IA — consulte [Descrição de fotos com IA usando Frigate e Ollama](./frigate-ollama-setup "Descreva eventos de câmara em linguagem natural com o Frigate e um modelo Ollama local").
- Prefere um servidor de câmaras mais simples e baseado no navegador? Consulte [Servidor de câmaras NVR](./nvr-camera-server "Configure um NVR Kerberos.io para videovigilância no ZimaOS") como alternativa.

## Documentação oficial

As definições ao nível da aplicação do Frigate — câmaras, deteção de objetos, gravação, instantâneos, notificações, Home Assistant, aceleração por hardware e mais — vivem todas dentro do ficheiro `config.yml` e são independentes do ZimaOS. Para a referência completa, siga a documentação oficial do Frigate:

- [Documentação do Frigate](https://docs.frigate.video/ "Documentação oficial do Frigate")
- [Referência de configuração](https://docs.frigate.video/configuration/ "Referência de configuração do Frigate para todas as definições")
- [Câmaras](https://docs.frigate.video/configuration/cameras "Guia de configuração de câmaras do Frigate")
- [Deteção de objetos](https://docs.frigate.video/configuration/objects "Definições de deteção de objetos do Frigate")
- [Detetores](https://docs.frigate.video/configuration/object_detectors "Configuração de detetores do Frigate para Coral TPU e GPUs")
- [Aceleração por hardware](https://docs.frigate.video/configuration/hardware_acceleration_video "Guia de aceleração por hardware do Frigate")
- [Gravação](https://docs.frigate.video/configuration/record "Configuração de gravação do Frigate")
- [Instantâneos](https://docs.frigate.video/configuration/snapshots "Configuração de instantâneos do Frigate")
- [Zonas e máscaras](https://docs.frigate.video/configuration/zones "Guia de zonas e máscaras do Frigate")
- [Notificações](https://docs.frigate.video/configuration/notifications "Configuração de notificações do Frigate")
- [Autenticação](https://docs.frigate.video/configuration/authentication "Definições de autenticação do Frigate")
- [Home Assistant](https://docs.frigate.video/integrations/home-assistant "Guia de integração do Frigate com o Home Assistant")

## Precisa de ajuda?

Se tiver problemas ao instalar ou usar o Frigate no ZimaOS, junte-se à [comunidade Discord do ZimaSpace](https://discord.gg/f9nzbmpMtU "Junte-se à comunidade Discord do ZimaSpace para suporte do ZimaOS"). A nossa equipa e os membros da comunidade terão todo o gosto em ajudar.
