---

**título**:Um Guia Simples para Instalar o Syncthing no ZimaOS
**descrição**:  
**tipo**: Docs  
**autor**: admin  
**dica**: Formato fixo da barra superior, por favor, não exclua, a descrição é para o resumo do artigo. Caso não preencha, será capturado o primeiro parágrafo do conteúdo.  
---  
> _Originalmente publicado no Fórum da Comunidade IceWhale por_ _**Muditha Liyanagama (Contribuidor da Comunidade)**:_ _[https://community.zimaspace.com/t/a-simple-guide-to-installing-syncthing-on-zimaos/7456](https://community.zimaspace.com/t/a-simple-guide-to-installing-syncthing-on-zimaos/7456?utm_source=chatgpt.com)_  

Olá, entusiastas do ZimaOS e Zimaboard!

Percebi que, embora a comunidade do ZimaOS e a equipe Ice-whale ofereçam um suporte incrível, às vezes encontrar guias de instalação claros, organizados e detalhados pode ser um desafio. Para aqueles de nós que preferem uma abordagem simples e passo a passo, especialmente ao tentar resolver aqueles pequenos problemas frustrantes, este guia é para você. Este é o primeiro de uma série de artigos que planejo escrever sobre o ZimaOS e o Zimaboard, e espero que seja útil.

Realizei essa instalação em um Zimaboard2 com as seguintes especificações:

* **CPU:** Intel(R) N150 4 Núcleos 2.90 GHz 4 Threads
* **RAM:** 16 GB 6400 MHz LPDDR5
* **GPU:** Intel Corporation Alder Lake-N [Intel Graphics]
* **Sistema Operacional:** ZimaOS v1.5.3 Plus

Vamos instalar o Syncthing

### **Passo 1: Acessando a** **Loja de Apps**

1. Faça login na interface do ZimaOS.
2. Navegue até a **Loja de Apps**.

![app_store](https://manage.icewhale.io/api/static/docs/1767081086850_copyImage.png)

### **Passo 2: Encontrando e Selecionando o Syncthing**

1. Na barra de pesquisa da Loja de Apps, digite "Syncthing".
2. Selecione **Syncthing (Backup)** nos resultados de pesquisa.

![synctin](https://manage.icewhale.io/api/static/docs/1767081087737_copyImage.png)

### **Passo 3: Instalação Personalizada**

1. Localize o botão **Instalar**. Em vez de clicar diretamente, clique na pequena **seta para baixo** ao lado dele.
2. Selecione **Instalação Personalizada**.

![custom_install](https://manage.icewhale.io/api/static/docs/1767081088482_copyImage.png)

### **Passo 4: Configuração Crítica Antes da Instalação**

Aqui é onde configuramos os parâmetros essenciais para o Syncthing funcionar corretamente.

* **Caminho da Pasta do Syncthing:**  
  Este é o local principal onde o Syncthing gerenciará seus arquivos sincronizados. Quaisquer subpastas que você criar dentro deste caminho serão acessíveis para sincronização.

* **Nota Importante:** Você não pode usar o diretório raiz de qualquer disco montado ou pastas do sistema (como Galeria, Mídia, Documentos, etc.) como caminho para a pasta do Syncthing. Isso ocorre porque rodar o Syncthing com esses caminhos geralmente requer privilégios de root, o que não é recomendado por motivos de segurança.

* **PGID e PUID:**  
  Estes são identificadores cruciais que informam ao Syncthing quais permissões de usuário usar. Configurá-los incorretamente pode resultar em problemas de sincronização e pode exigir uma desinstalação completa e reinstalação para corrigir.

* **Como encontrar seu PGID e PUID:**

1. No ZimaOS, vá para **Configurações**.
2. Navegue até **Geral**.
3. Ative o **Modo Desenvolvedor**.
4. Vá até **Visualizar**.
5. Clique em **Acesso SSH** para ativá-lo.
6. Clique em **Terminal baseado na Web**.
7. Faça login usando seu nome de usuário e senha do ZimaOS.
8. Depois de fazer login no terminal, insira os seguintes comandos, pressionando Enter após cada um. **Lembre-se de substituir** _username_ **pelo seu nome de usuário real do ZimaOS.**  
   _id -u username_  
   _id -g username_

A saída exibirá seu **PUID** (ID de Usuário) e **PGID** (ID de Grupo). **Copie e cole cuidadosamente esses números** nos campos correspondentes na seção **Variáveis de Ambiente** na tela de instalação personalizada do Syncthing, como mostrado na imagem exemplo. Para mim, o PGID era 1000 e o PUID era 999.

![set](https://manage.icewhale.io/api/static/docs/1767081089336_copyImage.png)

* **Verifique novamente:** Antes de prosseguir, **revisite cuidadosamente todas as suas configurações**. Certifique-se de que o caminho da pasta do Syncthing seja válido e que os valores de PGID e PUID estejam inseridos corretamente.
  
* **Instalar:** Quando tiver certeza de que todas as configurações estão corretas, clique no botão **Instalar**.

### **Passo 5: Pós-Instalação - Melhores Práticas de Sincronização**

Após a instalação bem-sucedida do Syncthing:

* Ao sincronizar pastas, **sempre crie o caminho da pasta de destino** _**através do Syncthing**_.
* **NÃO crie a pasta de destino diretamente usando o navegador de arquivos padrão do ZimaOS.** Fazer isso pode, às vezes, resultar em problemas inesperados de sincronização.

Espero que este guia detalhado torne a instalação do Syncthing no seu dispositivo ZimaOS uma experiência tranquila e bem-sucedida! Boa sincronização!

