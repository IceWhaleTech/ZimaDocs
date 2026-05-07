---
title: Como Implementar o OpenClaw
description: Este guia explica como implementar o OpenClaw em dispositivos CasaOS/ZimaOS, configurar um modelo de IA personalizado, vincular um bot do Telegram e aceder à interface Web para gerir e interagir com a IA.
type: Docs
author: icewhale123456
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
## 1. Visão Geral

Este tutorial orienta-o na implementação do OpenClaw num dispositivo a correr CasaOS/ZimaOS, completando a configuração básica e permitindo a interação com o modelo de IA via Telegram. Usando um bot do Telegram como exemplo, este tutorial cobre todo o processo desde a configuração do fornecedor do modelo até ao emparelhamento do bot.

### 1.1 Objetivos

- Completar a configuração inicial do OpenClaw, incluindo:

- Ligar um fornecedor de modelo de IA personalizado

- Criar e vincular um bot do Telegram para permitir conversas com IA através de mensagens diretas

- Visualizar e gerir o estado do OpenClaw através da interface Web

### 1.2 Ambiente

- Especificações de Hardware Recomendadas: 
  - 4 GB RAM
  - 20 GB de Armazenamento

- Software: CasaOS v0.4.15 / ZimaOS v1.5.4 (última versão)

- Rede: O dispositivo deve estar ligado à internet e ser capaz de aceder à API do Telegram. Recomenda-se uma ligação com cabo para maior estabilidade.

### 1.3 Notas de Utilização

- **Operação Contínua:** O OpenClaw foi concebido para funcionar 24/7. Coloque o seu ZimaBlade numa área bem ventilada com temperatura ambiente estável para garantir desempenho confiável a longo prazo e evitar throttling térmico.

- **Expansão de Armazenamento:** O armazenamento interno do ZimaBlade é limitado. Se planeia utilizar intensamente funcionalidades de memória ou logging, recomenda-se fortemente ligar um disco externo para armazenar histórico de conversas e dados da aplicação.

### 1.3 Pré-requisitos

- Endereço IP do seu dispositivo, usado para substituir o marcador `<ip>` nos comandos.
  
  Consulte o Passo 3 em https://www.zimaspace.com/docs/zimaboard/Power-on-Zimablade para saber como encontrá-lo.

- Chave de API de um modelo de IA e familiaridade básica com o seu uso.

- Conta no Telegram.

> **Nota:** Na interface de configuração do OpenClaw, use a **barra de espaço** para selecionar uma opção e **Enter** para confirmar.

### 1.4 Passos de Forma Resumida

- Instalar o OpenClaw na App Store do CasaOS / ZimaOS.

- Abrir um terminal — conectar via SSH (recomendado) ou usar o terminal local.

- Mudar para o modo administrador: executar `su` e introduzir a senha padrão `casaos`.

- Entrar no container OpenClaw: `docker exec -it openclaw bash`

- Iniciar o assistente de configuração: `node /app/dist/index.js config`

- Configurar o fornecedor do modelo: selecionar **Model**, escolher **custom provider**, depois introduzir Base URL, API Key e Model ID.

- Configurar o canal do Telegram: selecionar **Channels → Configure/link → Telegram**, criar um bot via BotFather, inserir o Token e definir a política DM para **Pairing** (recomendado).

- Completar o emparelhamento: enviar `/start` ao seu bot no Telegram para receber um código de emparelhamento, depois executar `openclaw pairing approve telegram <pairing-code>` no terminal.

- Aceder à interface Web em `https://<ip>:24190?token=casaos`.

---

## 2. Passos Detalhados (Exemplo CasaOS)

### 2.1 Abrir um Terminal 

Após instalar o OpenClaw através da interface Web do CasaOS, abra um terminal para iniciar a configuração. Existem duas formas de o fazer:

**A. SSH a partir do seu computador (recomendado — mais fácil copiar e colar comandos)**

Abra o **Terminal**.
Execute o seguinte comando:
```bash
   ssh <username>@<ip>
```
   Por exemplo: `ssh casaos@10.0.1.7`
   ![Terminal showing the SSH command being entered](https://manage.icewhale.io/api/static/docs/1773220372637_image.png)
Se for a primeira vez a conectar, verá o prompt:
```
   Are you sure you want to continue connecting (yes/no)?
```
   Digite `yes` e pressione Enter.

**B. Input diretamente no ZimaBlade**

Ligue um teclado e monitor diretamente ao ZimaBlade e use o terminal local.

---

### 2.2 Mudar para o Modo Administrador

Execute o seguinte comando e pressione Enter:
```bash
   su
```
Introduza a senha padrão `casaos`.

   > A senha não será exibida enquanto digita — isto é normal.
> Se estiver a usar ZimaOS, não é necessária senha.

![Terminal showing the prompt has switched to the root user](https://manage.icewhale.io/api/static/docs/1773220537700_image.png)

Agora possui os privilégios de administrador necessários para modificar as configurações do sistema.

---

### 2.3 Entrar no Assistente de Configuração

**Passo 1 — Entrar no container OpenClaw:**
```bash
docker exec -it openclaw bash
```
![Terminal prompt changed to root@openclaw:/app](https://manage.icewhale.io/api/static/docs/1773220664655_image.png)

Quando o prompt mudar para `root@openclaw:/app`, entrou com sucesso no container. Todas as configurações subsequentes devem ser feitas a partir deste container. Se sair acidentalmente, execute o comando novamente.

**Passo 2 — Iniciar o assistente de configuração:**
```bash
node /app/dist/index.js config
```
![The configuration wizard's initial screen](https://manage.icewhale.io/api/static/docs/1773220692606_image.png)


**Passo 3 — Selecionar a localização do Gateway:**

Quando solicitado com **Where will the Gateway run?**, selecione **Local (this machine)**.
![Local (this machine) highlighted in the selection menu](https://manage.icewhale.io/api/static/docs/1773220726788_image.png)

A opção destacada é a atualmente selecionada. Pressione **Enter** para confirmar.

---

### 2.4 Configurar o Modelo

#### 1. Selecionar um Fornecedor

Em **Select sections to configure**, escolha **Model**.
  ![Cursor on the Model option](https://manage.icewhale.io/api/static/docs/1773220763191_image.png)


Em **Model / auth provider**, selecione **custom provider**.
![custom provider highlighted](https://manage.icewhale.io/api/static/docs/1773220810816_image.png)

#### 2. Introduzir os Parâmetros do Modelo

Introduza o **Base URL** (por exemplo, `https://api.openai.com/v1`).
![Base URL input field](https://manage.icewhale.io/api/static/docs/1773220830104_image.png)

Introduza a sua **API Key**.
  ![API Key input field](https://manage.icewhale.io/api/static/docs/1773220843480_image.png)

Selecione o **API format**.
![API format selection menu](https://manage.icewhale.io/api/static/docs/1773220866935_image.png)

Selecione o **Model ID** que deseja usar.
![Model ID selection list](https://manage.icewhale.io/api/static/docs/1773220891482_image.png)

---

### 2.5 Configurar um Canal (Exemplo Telegram)

#### 1. Abrir Configurações do Canal

Em **Select sections to configure**, escolha **Channels**.
![Cursor on the Channels option](https://manage.icewhale.io/api/static/docs/1773220923167_image.png)


Selecione **Configure / link**.
![Channels submenu showing "Telegram: needs token" status](https://manage.icewhale.io/api/static/docs/1773220933540_image.png)

Selecione **Telegram** na lista.
![Telegram selected in the channel list](https://manage.icewhale.io/api/static/docs/1773220953934_image.png)

#### 2. Obter um Token de Bot

Abra uma conversa com **@BotFather** no Telegram e envie `/newbot` para iniciar a criação do bot.
O BotFather irá pedir:

 > **Bot Name:** Nome de exibição do seu bot
**Username:** Um identificador único que deve terminar em `bot` 

Após a criação, o BotFather retornará um **HTTP API Token** 
![BotFather conversation](https://manage.icewhale.io/api/static/docs/1773221077004_image.png)

> **Guarde este Token** — será necessário no próximo passo.

#### 3. Introduzir o Token do Bot

Selecione **Enter Telegram bot token**.
![Token input option in the menu](https://manage.icewhale.io/api/static/docs/1773221116186_image.png)

Cole ou digite o Token recebido do BotFather.
  ![Token input field](https://manage.icewhale.io/api/static/docs/1773221130505_image.png)


#### 4. Definir a Política de Acesso DM

Quando perguntado **Configure DM access policies now? (default: pairing)**, selecione **Yes**.
![Policy configuration prompt](https://manage.icewhale.io/api/static/docs/1773221160225_image.png)

Em **Telegram DM policy**, selecione **Pairing (recommended)**.
![Pairing option highlighted](https://manage.icewhale.io/api/static/docs/1773221182974_image.png)

Retorne a **Select sections to configure** e escolha **Continue (Done)** para finalizar a configuração do Telegram.
  ![Continue (Done) option highlighted](https://manage.icewhale.io/api/static/docs/1773221202944_image.png)

#### 5. Completar o Emparelhamento

Abra o chat do seu bot no Telegram e envie `/start`. Aguarde que o bot responda com um código de emparelhamento.
![Telegram conversation showing the bot's pairing code reply](https://manage.icewhale.io/api/static/docs/1773221237858_image.png)

No terminal, execute o seguinte comando, substituindo `<your-pairing-code>` pelo código recebido:

```bash id="2w7l1f"
   openclaw pairing approve telegram <your-pairing-code>
```

Uma mensagem de sucesso confirma que o emparelhamento está completo. Agora pode conversar com a IA diretamente através do seu bot no Telegram.

---

### 2.6 Aceder à Interface Web

Uma vez concluída a configuração, abra um navegador e aceda a:

```
https://<ip>:24190?token=casaos
```

Substitua `<ip>` pelo endereço IP do seu dispositivo.
Após abrir a interface Web pela primeira vez, poderá ver uma mensagem **“pairing required”** no painel do Gateway em vez de conectar diretamente.
![](https://manage.icewhale.io/api/static/docs/1778125516229_image.png)
Isto é esperado nas versões mais recentes do OpenClaw. O dispositivo da interface Web deve primeiro ser aprovado a partir do container.

![](https://manage.icewhale.io/api/static/docs/1778125603653_image.png)

#### 1. Entrar no container OpenClaw
Execute:
```bash id="y9m2k7"
docker exec -it openclaw bash
```
#### 2. Listar dispositivos pendentes
Dentro do container, execute:
```bash id="0crx6l"
node /app/dist/index.js devices list
```
Se existir um dispositivo não emparelhado, o OpenClaw exibirá um request_id.
#### 3. Aprovar o dispositivo
Execute o seguinte comando e substitua <request_id> pelo ID real exibido acima:
```bash id="g6x3pe"
node /app/dist/index.js devices approve <request_id>
```
Após a aprovação, atualize a página da interface Web e reconecte.
O aviso **“pairing required”** deverá desaparecer e o painel irá conectar normalmente.
Finalmente, desfrute do OpenClaw!