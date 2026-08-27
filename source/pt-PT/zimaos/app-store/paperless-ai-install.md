---
title: Guia Completo para Instalar Paperless‑AI no ZimaOS  
description:   
type: Docs  
author: admin  
tip: Formato fixo da barra superior, por favor, não apague. A descrição é sobre o artigo; se não for preenchida, será extraída o primeiro parágrafo do conteúdo.  
---  
> _Publicado originalmente no fórum da Comunidade IceWhale por_ _**Muditha Liyanagama**_ _:_ _[Fonte original](https://community.zimaspace.com/t/a-comprehensive-guide-to-installing-paperless-ai-on-zimaos/7557)_

Olá, entusiastas do ZimaOS e Zimaboard!

Embora a comunidade ZimaOS e a equipe Ice‑Whale ofereçam um ótimo suporte, encontrar guias de instalação claros e detalhados pode ser um pouco desafiador. Se você prefere uma abordagem simples e passo a passo—especialmente para navegar pelas pequenas, mas frustrantes barreiras técnicas—este guia foi feito para você.

Este é o terceiro artigo da minha série contínua sobre o ZimaOS e o Zimaboard. Espero que ele torne seu processo de configuração muito mais fácil e economize seu tempo.

Este guia aborda como instalar o Paperless‑AI com todos os recursos essenciais necessários para o uso doméstico, acessível através da sua rede local ou via Tailscale. Se você pretende acessar o Paperless‑AI pela internet pública, pode ser necessário ajustar algumas configurações. O Paperless‑NGX já deve estar instalado na mesma máquina, pois o Paperless‑AI depende dele. (Se você ainda não configurou isso, recomendo ler o meu [guia de instalação do Paperless‑NGX](https://community.zimaspace.com/t/a-comprehensive-guide-to-installing-paperless-ngx-on-zimaos/7474) primeiro.)

Realizei essa instalação em um Zimaboard 2 com o seguinte hardware e software:

• CPU: Intel(R) N150, 4 Cores, 2.90 GHz, 4 Threads

• RAM: 16 GB 6400 MHz LPDDR5

• GPU: Intel Alder Lake‑N Graphics

• Sistema Operacional: ZimaOS v1.5.3 Plus

Vamos começar

**Seção 01: Preparando o Arquivo Docker Compose Modificado**

Usei a página oficial do GitHub do Paperless‑AI como referência e fiz vários ajustes no arquivo Docker Compose original para torná-lo mais conveniente para o ZimaOS. Após importar para o ZimaOS como um App Personalizado, será necessário fazer algumas modificações antes de instalar.

Aqui está o arquivo Docker Compose modificado que você usará:

    name: paperless-ai
    services:
      paperless-ai:
        cap_drop:
          - ALL
        cpu_shares: 90
        command: []
        container_name: paperless-ai
        deploy:
          resources:
            limits:
              memory: 16508313600
            reservations:
              devices: []
        environment:
          - PAPERLESS_AI_PORT=3000
          - PGID=1000
          - PUID=999
          - RAG_SERVICE_ENABLED=true
          - RAG_SERVICE_URL=http://192.168.68.81:8005
        image: clusterzx/paperless-ai:latest
        labels:
          icon: https://i.imgur.com/LGVPJ8g.png
        ports:
          - target: 3000
            published: "3009"
            protocol: tcp
        restart: unless-stopped
        security_opt:
          - no-new-privileges=true
        volumes:
          - type: bind
            source: /media/Storage/AppData/paperless-ai/app/data
            target: /app/data
          - type: bind
            source: /media/Storage/AppData/paperless-ai/var/lib/paperless-ai
            target: /var/lib/paperless-ai
        devices: []
        cap_add: []
        network_mode: bridge
        privileged: false
    x-casaos:
      author: self
      category: self
      hostname: ""
      icon: https://i.imgur.com/LGVPJ8g.png
      index: /
      is_uncontrolled: false
      port_map: "3009"
      scheme: http
      store_app_id: paperless-ai
      title:
        custom: paperless-ai
        en_us: paperless-ai

**Seção 02: Importando o App Personalizado no ZimaOS**

1.  Faça login no ZimaOS e clique no ícone de mais no canto superior direito do painel.
    
2.  Selecione "Instalar um app personalizado."
    
3.  Na janela pop-up, clique em "Importar" no canto superior direito.
    
4.  Uma nova janela aparecerá. Vá até a aba “Docker Compose”, cole o arquivo YAML na área de texto e clique em “Enviar.”
    
5.  Quando outra janela pop-up aparecer com instruções ou avisos, clique em “OK.”
    

![Instalar um app personalizado](https://manage.icewhale.io/api/static/docs/1767457548038_copyImage.png)

![Importar compose](https://manage.icewhale.io/api/static/docs/1767457548475_copyImage.png)

![Enviar](https://manage.icewhale.io/api/static/docs/1767457548976_copyImage.png)

  

![Janela de confirmação](https://manage.icewhale.io/api/static/docs/1767457549511_copyImage.png)

**Seção 03: Editando as Configurações Necessárias Antes da Instalação**

**Volumes** Defina os caminhos corretos para as seguintes pastas: /app/data /var/lib/paperless-ai

**Variáveis de Ambiente: Configurando PUID e PGID** Esses valores determinam as permissões do sistema que o Paperless‑AI usará. Se estiverem incorretos, você pode enfrentar problemas com marcação, renomeação ou gerenciamento de arquivos que exigem uma reinstalação completa para corrigir. Para encontrar seu PUID e PGID corretos:

1.  Abra as Configurações do ZimaOS.
    
2.  Vá para Geral e ative o Modo Desenvolvedor.
    
3.  Abra o menu de visualização e ative o Acesso SSH.
    
4.  Inicie o Terminal Web e faça login com seu nome de usuário e senha do ZimaOS.
    
5.  Execute os seguintes comandos, substituindo “username” pelo seu nome de usuário real: id -u username id -g username
    
6.  Anote a saída. Esses números são seu PUID (ID de usuário) e PGID (ID do grupo). Insira-os nos campos correspondentes nas Variáveis de Ambiente. (Por exemplo, meu PGID era 1000 e meu PUID era 999.)
    

**URL do Serviço RAG** Atualize o RAG\_SERVICE\_URL para corresponder à URL da sua instalação existente do Paperless‑NGX. Após configurar tudo corretamente, clique em Instalar.

  

![Configuração correta](https://manage.icewhale.io/api/static/docs/1767457550083_copyImage.png)

**Seção 04: Configuração Pós‑Instalação**

Configuração Inicial

O Paperless‑AI inclui um guia de configuração útil integrado. Aqui estão os passos essenciais:

1.  Inicie o Paperless‑AI e crie uma conta de administrador.
    
2.  Faça login e configure as configurações de conexão.
    
3.  Abra as configurações da IA e escolha seu provedor de IA preferido. Insira sua chave de API.
    
4.  Para melhores resultados, escolha Custom como o provedor de IA e defina manualmente tanto o URL base quanto o modelo. Testei OpenAI, Mistral AI e Google Gemini; todos funcionaram perfeitamente.
    
5.  Configure as Configurações Avançadas e a Descrição do Prompt.
    
6.  Clique em Salvar. Se solicitado sobre processamento automático de documentos, clique em “Sim, Continuar.” O Paperless‑AI será reiniciado e começará a analisar os documentos do Paperless‑NGX.
    

  

![criar uma conta de admin](https://manage.icewhale.io/api/static/docs/1767457550603_copyImage.png)

![Inserir sua chave API](https://manage.icewhale.io/api/static/docs/1767457551058_copyImage.png)

![definir URL base e modelo](https://manage.icewhale.io/api/static/docs/1767457551609_copyImage.png)  

**Seção 05: Desempenho no Processamento de Documentos**

Se você tiver muitos documentos no Paperless‑NGX, a etapa de processamento inicial pode levar algum tempo.

_Para referência:_

*   Eu processei quase 9.000 documentos no meu Zimaboard 2. O processo completo levou cerca de 3 dias. Apesar da longa duração, o sistema permaneceu leve em CPU e RAM, funcionando sem problemas em segundo plano.
    

**Conclusão** Com essa configuração, você terá um poderoso sistema de documentos aprimorado por IA rodando perfeitamente no seu Zimaboard. Uma vez que o Paperless‑AI esteja totalmente configurado, ele melhora drasticamente a capacidade de busca, marcação e insights de documentos—tudo, rodando de forma segura no seu próprio ambiente.

Se você achou este guia útil, deixe um pequeno feedback.

Saúde!