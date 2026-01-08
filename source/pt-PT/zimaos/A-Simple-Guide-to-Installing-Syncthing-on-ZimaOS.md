---
title: Um Guia Simples para Instalar o Syncthing no ZimaOS
description: 
type: Docs
author: admin
tip: Formato fixo na barra superior, não apague. A descrição é para o artigo, se não preenchida, será capturada a primeira seção do conteúdo.
---
> _Originalmente publicado no Fórum da Comunidade IceWhale por_ _**Muditha Liyanagama (Contribuidor da Comunidade)**:_ _[Fonte original](https://community.zimaspace.com/t/a-simple-guide-to-installing-syncthing-on-zimaos/7456?utm_source=chatgpt.com)_

Olá, entusiastas do ZimaOS e Zimaboard!

Descobri que, embora a comunidade ZimaOS e a equipe Ice-whale ofereçam um suporte fantástico, encontrar guias de instalação claros, organizados e detalhados pode ser um desafio. Para aqueles de nós que preferem uma abordagem simples e passo a passo, especialmente ao solucionar aqueles pequenos problemas frustrantes, este guia é para você. Este é o primeiro de uma série de artigos que pretendo escrever sobre o ZimaOS e o Zimaboard, e espero que seja útil.

Eu realizei esta instalação em um Zimaboard2 com as seguintes especificações:

*   **CPU:** Intel(R) N150 4 Cores 2.90 GHz 4 Threads
    
*   **RAM:** 16 GB 6400 MHz LPDDR5
    
*   **GPU:** Intel Corporation Alder Lake-N \[Gráficos Intel\]
    
*   **Sistema Operacional:** ZimaOS v1.5.3 Plus
    

Vamos instalar o Syncthing

### **Passo 1: Acessando a** **Loja de Aplicativos**

1.  Faça login na interface do ZimaOS.
    
2.  Navegue até a **Loja de Aplicativos**.
    

![app_store](https://manage.icewhale.io/api/static/docs/1767081086850_copyImage.png)  

### **Passo 2: Encontrando e Selecionando o Syncthing**

1.  Na barra de pesquisa da Loja de Aplicativos, digite Syncthing.
    
2.  Selecione **Syncthing (Backup)** nos resultados da pesquisa.
    
    ![synctin](https://manage.icewhale.io/api/static/docs/1767081087737_copyImage.png)
    

### **Passo 3: Instalação Personalizada**

1.  Localize o botão **Instalar**. Em vez de clicar diretamente nele, clique na pequena **seta para baixo** ao lado dele.
    
2.  Selecione **Instalação Personalizada**.
    
    ![custom_install](https://manage.icewhale.io/api/static/docs/1767081088482_copyImage.png)
    

### **Passo 4: Configuração Crítica Antes da Instalação**

Aqui configuramos os parâmetros essenciais para o funcionamento correto do Syncthing.

*   **Caminho da Pasta Syncthing:**
    
*   Este é o local principal onde o Syncthing gerenciará seus arquivos sincronizados. Qualquer subpasta criada dentro desse caminho será acessível para sincronização.
    
*   **Nota Importante:** Você não pode usar o diretório raiz de qualquer disco montado ou pastas do sistema (como Galeria, Mídia, Documentos, etc.) como caminho da pasta Syncthing. Isso porque rodar o Syncthing com esses caminhos geralmente requer privilégios de usuário root, o que não é recomendado por questões de segurança.
    
*   **PGID e PUID:**
    
*   Esses são identificadores cruciais que dizem ao Syncthing quais permissões de usuário usar. Configurá-los incorretamente pode causar problemas de sincronização e pode ser necessário desinstalar e reinstalar completamente para corrigir.
    
*   **Como encontrar seu PGID e PUID:**
    

1.  No ZimaOS, vá para **Configurações**.
    
2.  Navegue até **Geral**.
    
3.  Ative o **Modo Desenvolvedor**.
    
4.  Vá para **Visualizar**.
    
5.  Clique em **Acesso SSH** para habilitá-lo.
    
6.  Clique em **Terminal baseado na web**.
    
7.  Faça login usando seu nome de usuário e senha do ZimaOS.
    
8.  Uma vez logado no terminal, digite os seguintes comandos, pressionando Enter após cada um. **Lembre-se de substituir** _nome_de_usuário_ **pelo seu nome de usuário real do ZimaOS.** _id -u nome_de_usuário_ _id -g nome_de_usuário_
    

A saída exibirá seu **PUID** (ID do Usuário) e **PGID** (ID do Grupo). **Copie e cole cuidadosamente esses números** nos campos correspondentes na seção **Variáveis de Ambiente** na tela de instalação personalizada do Syncthing, conforme mostrado na imagem exemplo fornecida. Para mim, o PGID era 1000 e o PUID era 999.

![set](https://manage.icewhale.io/api/static/docs/1767081089336_copyImage.png)

*   **Verifique Novamente:** Antes de prosseguir, **revise muito bem todas as suas configurações**. Certifique-se de que o caminho da pasta Syncthing é válido e que seus valores de PGID e PUID estão corretamente inseridos.
    
*   **Instalar:** Quando estiver certo de que todas as configurações estão corretas, clique no botão **Instalar**.
    

### **Passo 5: Pós-Instalação - Melhores Práticas de Sincronização**

Após o Syncthing ser instalado com sucesso:

*   Ao sincronizar pastas, **sempre crie o caminho da pasta de destino** _**através do próprio Syncthing**_.
    
*   **NÃO crie a pasta de destino diretamente usando o navegador de arquivos padrão do ZimaOS.** Fazer isso pode, às vezes, causar problemas inesperados de sincronização.
    

Espero que este guia detalhado torne a instalação do Syncthing no seu dispositivo ZimaOS uma experiência tranquila e bem-sucedida! Feliz sincronização!
