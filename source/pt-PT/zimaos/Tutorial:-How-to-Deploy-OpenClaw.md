---
title: Como Implantar o OpenClaw
description: Este guia explica como implantar o OpenClaw em dispositivos CasaOS/ZimaOS, configurar um modelo de IA personalizado, vincular um bot do Telegram e acessar a interface Web para gerenciar e interagir com a IA.
type: Docs
author: icewhale123456
tip: Não remova o formato fixo da barra superior, a descrição é uma descrição do artigo, se não preenchida, será capturada a primeira parte do conteúdo
---
## 1. Visão Geral

Este tutorial guia você na implantação do OpenClaw em um dispositivo que roda CasaOS, completando a configuração básica e habilitando a interação com o modelo de IA via Telegram. Usando um bot do Telegram como exemplo, este tutorial cobre todo o processo desde a configuração do provedor de modelo até o emparelhamento do bot.

### 1.1 Ambiente

- Software: CasaOS v0.4.15 / ZimaOS v1.5.4 (mais recente)

- Rede: O dispositivo deve estar conectado à internet e ser capaz de acessar a API do Telegram. Uma conexão com fio é recomendada para maior estabilidade.

### 1.2 Objetivos

Completar a configuração inicial do OpenClaw, incluindo:

- Conectar um provedor de modelo de IA personalizado

- Criar e vincular um bot do Telegram para habilitar o chat com IA via mensagens diretas

- Visualizar e gerenciar o status do OpenClaw através da interface Web

### 1.3 Pré-requisitos

- O endereço IP do seu dispositivo, usado para substituir o espaço reservado `<ip>` nos comandos.

  Consulte a Etapa 3 em https://www.zimaspace.com/docs/zimaboard/Power-on-Zimablade para saber como encontrá-lo.

- Uma chave de API de modelo de IA e familiaridade básica com como usá-la.

- Uma conta do Telegram.

> **Nota:** Na interface de configuração do OpenClaw, use a **barra de espaço** para selecionar uma opção e **Enter** para confirmar.

### 1.4 Visão Geral das Etapas

- Instale o OpenClaw na Loja de Aplicativos do CasaOS / ZimaOS.

- Abra um terminal — conecte via SSH (recomendado) ou use o terminal do CasaOS.

- Troque para o modo administrador: execute `su` e digite a senha padrão `casaos`.

- Entre no contêiner OpenClaw: `docker exec -it openclaw bash`

- Inicie o assistente de configuração: `node /app/dist/index.js config`

- Configure o provedor de modelo: selecione **Modelo**, escolha **provedor personalizado**, em seguida, insira a URL base, chave de API e ID do modelo.

- Configure o canal do Telegram: selecione **Canais → Configurar/vincular → Telegram**, crie um bot via BotFather, insira o Token e defina a política de DM como **Emparelhamento** (recomendado).

- Complete o emparelhamento: envie `/start` para seu bot no Telegram para receber um código de emparelhamento, em seguida, execute `openclaw pairing approve telegram <pairing-code>` no terminal.

- Acesse a interface Web em `https://<ip>:24190?token=casaos`.

---

## 2. Etapas Detalhadas

### 2.1 Abra um Terminal

Após instalar o OpenClaw via a interface Web do CasaOS, abra um terminal para começar a configuração. Existem duas maneiras de fazer isso:

**A. SSH a partir do seu computador (recomendado — mais fácil para copiar e colar comandos)**

Pressione **Win + X** no seu computador para abrir o menu de acesso rápido e selecione **Terminal**.
Execute o seguinte comando:
```bash
   ssh <username>@<ip>
```
   Por exemplo: `ssh casaos@10.0.1.7`
   ![Terminal mostrando o comando SSH sendo inserido](https://manage.icewhale.io/api/static/docs/1773220372637_image.png)
Se for sua primeira vez conectando, você verá o prompt:
```
   Are you sure you want to continue connecting (yes/no)?
```
   Digite `yes` e pressione Enter.

**B. Insira diretamente no ZimaBlade**

Conecte um teclado e monitor diretamente no ZimaBlade e use o terminal local.

---

### 2.2 Troque para o Modo Administrador

Execute o seguinte comando e pressione Enter:
```bash
   su
```
Digite a senha padrão `casaos`.
   > A senha não será exibida enquanto você digita — isso é normal.

![Terminal mostrando o prompt mudado para root](https://manage.icewhale.io/api/static/docs/1773220537700_image.png)

Agora você tem privilégios de administrador para modificar as configurações do sistema.

---

### 2.3 Entre no Assistente de Configuração

**Passo 1 — Entre no contêiner OpenClaw:**
```bash
docker exec -it openclaw bash
```
![Prompt do terminal alterado para root@openclaw:/app](https://manage.icewhale.io/api/static/docs/1773220664655_image.png)

Quando o prompt mudar para `root@openclaw:/app`, você entrou com sucesso no contêiner. Toda a configuração subsequente deve ser realizada de dentro deste contêiner. Se você sair acidentalmente, basta executar o comando novamente.

**Passo 2 — Inicie o assistente de configuração:**
```bash
node /app/dist/index.js config
```
![Tela inicial do assistente de configuração](https://manage.icewhale.io/api/static/docs/1773220692606_image.png)


**Passo 3 — Selecione a localização do Gateway:**

Quando solicitado com **Where will the Gateway run?**, selecione **Local (this machine)**.
![Local (this machine) destacado no menu de seleção](https://manage.icewhale.io/api/static/docs/1773220726788_image.png)

A opção destacada é a selecionada no momento. Pressione **Enter** para confirmar.

---

### 2.4 Configure o Modelo

#### 1. Selecione um Provedor

Em **Select sections to configure**, escolha **Modelo**.
  ![Cursor na opção Modelo](https://manage.icewhale.io/api/static/docs/1773220763191_image.png)


Em **Modelo / provedor de autenticação**, selecione **provedor personalizado**.
![provedor personalizado destacado](https://manage.icewhale.io/api/static/docs/1773220810816_image.png)

#### 2. Insira os Parâmetros do Modelo

Digite a **URL base** (ex.: `https://api.openai.com/v1`).
![Campo para inserir URL base](https://manage.icewhale.io/api/static/docs/1773220830104_image.png)

Digite sua **chave de API**.
  ![Campo para inserir a chave de API](https://manage.icewhale.io/api/static/docs/1773220843480_image.png)

Selecione o **formato da API**.
![Menu de seleção de formato da API](https://manage.icewhale.io/api/static/docs/1773220866935_image.png)

Selecione o **ID do modelo** que você deseja usar.
![Lista de seleção de ID do modelo](https://manage.icewhale.io/api/static/docs/1773220891482_image.png)

---

### 2.5 Configure um Canal (Exemplo do Telegram)

#### 1. Abra as Configurações do Canal

Em **Select sections to configure**, escolha **Canais**.
![Cursor na opção Canais](https://manage.icewhale.io/api/static/docs/1773220923167_image.png)


Selecione **Configurar / vincular**.
![Submenu de Canais mostrando o status "Telegram: precisa de token"](https://manage.icewhale.io/api/static/docs/1773220933540_image.png)

Selecione **Telegram** da lista.
![Telegram selecionado na lista de canais](https://manage.icewhale.io/api/static/docs/1773220953934_image.png)

#### 2. Obtenha um Token do Bot

Abra uma conversa com **@BotFather** no Telegram e envie `/newbot` para começar a criar um bot.
BotFather pedirá para você fornecer:

 > **Nome do Bot:** O nome de exibição para o seu bot
**Nome de Usuário:** Um identificador único que deve terminar com `bot` 

Depois de criado, BotFather retornará um **Token da API HTTP** 
![Conversação com BotFather](https://manage.icewhale.io/api/static/docs/1773221077004_image.png)

> **Salve este Token** — você precisará dele na próxima etapa.

#### 3. Insira o Token do Bot

Selecione **Inserir o token do bot do Telegram**.
![Opção para inserir o token no menu](https://manage.icewhale.io/api/static/docs/1773221116186_image.png)

Cole ou digite o Token que você recebeu do BotFather.
  ![Campo para inserir o token](https://manage.icewhale.io/api/static/docs/1773221130505_image.png)


#### 4. Defina a Política de Acesso a DM

Quando perguntado **Configurar políticas de acesso a DM agora? (padrão: emparelhamento)**, selecione **Sim**.
![Prompt de configuração da política](https://manage.icewhale.io/api/static/docs/1773221160225_image.png)

Na **política de DM do Telegram**, selecione **Emparelhamento (recomendado)**.
![Opção Emparelhamento destacada](https://manage.icewhale.io/api/static/docs/1773221182974_image.png)

Volte para **Select sections to configure** e escolha **Continuar (Feito)** para finalizar a configuração do Telegram.
  ![Opção Continuar (Feito) destacada](https://manage.icewhale.io/api/static/docs/1773221202944_image.png)

#### 5. Complete o Emparelhamento

Abra o chat do seu bot no Telegram e envie `/start`. Aguarde o bot responder com um código de emparelhamento.
![Conversação do Telegram mostrando a resposta do código de emparelhamento do bot](https://manage.icewhale.io/api/static/docs/1773221237858_image.png)

No terminal, execute o seguinte comando, substituindo `<your-pairing-code>` pelo código que você recebeu:

```bash id="d2h0c9"
   openclaw pairing approve telegram <your-pairing-code>
```

Uma mensagem de sucesso confirmará que o emparelhamento foi concluído. Agora você pode conversar com a IA diretamente através do seu bot do Telegram.

---

### 2.6 Acesse a Interface Web

Após a configuração ser concluída, abra um navegador e navegue até:

```
https://<ip>:24190?token=casaos
```

Substitua `<ip>` pelo endereço IP do seu dispositivo. Esta página permite visualizar o status do OpenClaw em execução, os logs e a configuração atual.

Por fim, aproveite o OpenClaw!
