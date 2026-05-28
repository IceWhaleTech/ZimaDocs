---
title: Como Configurar o Hermes Agent
description: Guia passo a passo para configurar o Hermes Agent no ZimaOS — cobre a configuração de fornecedores de modelos personalizados, integração com bots do Telegram e acesso ao Web Dashboard, incluindo resolução de problemas comuns.
type: Docs
author: icewhale123456
tip: Top bar fixed format, do not delete. description is the article description, if not filled, the first paragraph of the content will be extracted
---

## Visão Geral

Este tutorial orienta-o na configuração de serviços de modelos e plataformas de mensagens num dispositivo com o Hermes Agent implementado, permitindo a interação com modelos de IA através do Telegram. Utilizando o Telegram como exemplo, cobre o fluxo completo desde a configuração do fornecedor de modelos até à verificação do bot.

> **Nota:** Na maioria dos casos, pode configurar modelos e mensagens diretamente através da Hermes WebUI. Se não encontrar as opções correspondentes, consulte este tutorial para concluir a configuração no terminal do contentor.

### Ambiente
- **Hardware:** ZimaBlade / ZimaBoard / ZimaCube
- **Software:** ZimaOS
- **Rede:** O dispositivo deve ter acesso à internet e conseguir alcançar a API do Telegram. Recomenda-se uma ligação por cabo para maior estabilidade.

### Objetivos

Concluir a configuração inicial do Hermes Agent, incluindo:
- Ligar um fornecedor de modelos personalizado
- Criar e associar um bot do Telegram para conversa privada com IA
- Visualizar e gerir o estado do Hermes através do Web Dashboard

### Pré-requisitos
- O endereço IP do dispositivo anfitrião, utilizado para substituir `<ip>` nos comandos seguintes
- Uma API Key de modelo de IA e conhecimentos básicos da sua utilização
- Uma conta Telegram

### Etapas Principais

1. Instalar o Hermes: Pesquise e instale a partir da ZimaOS App Store
2. Aceder ao anfitrião ZimaOS via SSH e obter privilégios root
3. Entrar no contentor Hermes como utilizador `hermes` e ativar o ambiente virtual
4. Iniciar o assistente de configuração, selecionar um fornecedor de modelos e preencher os parâmetros
5. Configurar o canal Telegram: criar um bot para obter um Token, introduzi-lo no Hermes e definir permissões de acesso dos utilizadores
6. Enviar `/start` no Telegram para verificar a configuração e confirmar que o bot responde corretamente
7. Aceder ao Web Dashboard para visualizar o estado de execução

## Etapas Detalhadas

### Aceder ao Anfitrião ZimaOS via SSH

Recomenda-se iniciar sessão SSH no anfitrião ZimaOS para facilitar a cópia e colagem de comandos.

```bash
ssh <username>@<ip>
```

Exemplo:

```bash
ssh zima@192.168.50.20
```

Se esta for a sua primeira ligação, escreva `yes` no pedido de confirmação e prima Enter.

### Obter Privilégios de Execução do Contentor

Se o utilizador atual não conseguir executar diretamente comandos Docker para entrar no contentor, mude primeiro para root:

```bash
sudo -i
```

Após a mudança, o prompt do terminal deverá indicar que possui privilégios root. Estes privilégios root são utilizados apenas para entrar em contentores no anfitrião ZimaOS.

### Entrar no Contentor Hermes

Entre no contentor como utilizador `hermes`:

```bash
docker exec -it -u hermes hermes bash
```

![Terminal: entering Hermes container](https://manage.icewhale.io/api/static/docs/1779967418108_image.png)


Quando o prompt do terminal mudar, significa que entrou no contentor Hermes. Todas as operações de configuração subsequentes devem ser realizadas dentro do contentor. Se sair acidentalmente do contentor a meio do processo, basta executar novamente este comando.

Ative o ambiente virtual do Hermes:

```bash
source /opt/hermes/.venv/bin/activate
```
![Terminal: activating virtual environment](https://manage.icewhale.io/api/static/docs/1779967433450_image.png)

Após a ativação, o comando `hermes` pode ser utilizado diretamente na shell atual.

### Iniciar o Assistente de Configuração

Execute dentro do contentor:

```bash
hermes setup
```
![Terminal: hermes setup](https://manage.icewhale.io/api/static/docs/1779967453363_image.png)


Selecione **Quick setup** para iniciar a configuração. O item destacado é a opção atualmente selecionada; prima **Enter** para confirmar.

### Configurar o Serviço de Modelo

1. Selecione o fornecedor de modelos correspondente. Um fornecedor personalizado é utilizado aqui como exemplo:
![Terminal: selecting model provider](https://manage.icewhale.io/api/static/docs/1779967561032_image.png)


2. Introduza a **Base URL** e a **API Key**:
![Terminal: entering Base URL and API Key](https://manage.icewhale.io/api/static/docs/1779967580671_image.png)

3. Escolha o **modo de compatibilidade da API**:
![Terminal: selecting API compatibility mode](https://manage.icewhale.io/api/static/docs/1779967596242_image.png)

4. Selecione o modelo que pretende utilizar:
![Terminal: selecting model](https://manage.icewhale.io/api/static/docs/1779967618229_image.png)

5. Introduza o comprimento do contexto. Pode premir Enter diretamente para deteção automática:
![Terminal: entering context length](https://manage.icewhale.io/api/static/docs/1779967635993_image.png)

6. Defina o nome de apresentação:
![Terminal: setting display name](https://manage.icewhale.io/api/static/docs/1779967649446_image.png)

7. Escolha o backend do terminal. A configuração predefinida é suficiente:
![Terminal: choosing terminal backend](https://manage.icewhale.io/api/static/docs/1779967667150_image.png)

### Configurar a Plataforma de Mensagens (Exemplo com Telegram)

1. Escolha configurar as mensagens no terminal do contentor Hermes ou introduza o seguinte comando:

```bash
hermes gateway setup
```
![Terminal: hermes gateway setup](https://manage.icewhale.io/api/static/docs/1779967687091_image.png)

2. Selecione a Plataforma correspondente:
![Terminal: selecting platform](https://manage.icewhale.io/api/static/docs/1779967700131_image.png)

#### Criar um Bot do Telegram

- Abra o Telegram, procure e inicie uma conversa com **@BotFather**
- Envie `/newbot`
- Defina um nome de apresentação, por exemplo `Hermes Agent`
- Defina um nome de utilizador único terminado em `bot`, por exemplo `my_zima_hermes_bot`
- Guarde o **API Token** devolvido pelo BotFather

**Mantenha o seu Bot Token em segurança.** Qualquer pessoa com este token pode controlar o seu bot.
![Telegram: BotFather creating a bot](https://manage.icewhale.io/api/static/docs/1779967716705_image.png)

#### Obter o Seu Telegram User ID

O Hermes utiliza um Telegram User ID numérico para controlo de acesso. Envie qualquer mensagem para **@userinfobot** ou **@get_id_bot** e guarde o User ID numérico devolvido.
![Telegram: getting user ID](https://manage.icewhale.io/api/static/docs/1779967741377_image.png)

#### Introduzir os Detalhes de Configuração

1. Introduza o Telegram Bot Token no contentor Hermes:
![Terminal: entering bot token](https://manage.icewhale.io/api/static/docs/1779967757562_image.png)

2. Introduza os Telegram User IDs autorizados a aceder:
![Terminal: entering allowed user IDs](https://manage.icewhale.io/api/static/docs/1779967777379_image.png)

3. Escolha permitir que este Telegram User ID aceda ao canal principal:
![Terminal: allowing home channel access](https://manage.icewhale.io/api/static/docs/1779967831434_image.png)

4. Conclua a configuração da Plataforma de Mensagens:
![Terminal: completing messaging setup](https://manage.icewhale.io/api/static/docs/1779967845729_image.png)

5. Após concluir a configuração do Telegram, o Hermes irá solicitar o reinício do Gateway. Confirme o pedido para permitir que o Gateway aplique a configuração mais recente:
![Terminal: restarting gateway](https://manage.icewhale.io/api/static/docs/1779967857430_image.png)

#### Notas sobre Conversas em Grupo (Opcional)

O Telegram Privacy Mode está ativado por predefinição. Em grupos, o bot só consegue ver comandos, respostas às suas mensagens e determinadas mensagens do sistema.

Se o Hermes funcionar em conversa privada mas não responder em grupos:
- Mencione diretamente o bot com @
- Promova o bot a administrador do grupo
- Ou desative o modo de privacidade de grupo no BotFather e depois remova e volte a adicionar o bot ao grupo

### Utilização

Abra o Telegram e envie `/start` ao seu bot. Depois envie uma mensagem normal para confirmar que o Hermes responde corretamente.
![Telegram: chatting with bot](https://manage.icewhale.io/api/static/docs/1779967878149_image.png)

### Abrir o Web Dashboard

Aceda ao seguinte URL no seu navegador:

```
http://<ip>:9119
```

Exemplo:

```
http://192.168.50.20:9119
```

A partir do Dashboard pode visualizar o estado de execução, inspecionar sessões e modificar definições do modelo.

### Reconfiguração Posterior

Para modificar novamente a configuração, siga os passos abaixo.

Entre novamente no contentor:

```bash
docker exec -it -u hermes hermes bash
```

Ative o ambiente virtual dentro do contentor:

```bash
source /opt/hermes/.venv/bin/activate
```

Modificar o modelo:

```bash
hermes model
```

Modificar o Telegram ou outros gateways de mensagens:

```bash
hermes gateway setup
```

Quando o Hermes solicitar o reinício do Gateway, confirme o pedido. Saia do contentor quando terminar:

```bash
exit
```

---

## Resolução de Problemas

### Erro de Permissão `/opt/data`

Isto é normalmente causado pela execução anterior do Hermes Gateway como root, o que deixou ficheiros pertencentes ao root em `$HERMES_HOME`.

Primeiro, entre novamente no contentor como utilizador `hermes`:

```bash
docker exec -it -u hermes hermes bash
```

Se o erro de permissão persistir, verifique os registos do Hermes no ZimaOS Dashboard. Entre temporariamente numa shell root apenas quando precisar de corrigir a propriedade dos ficheiros.

### Bot do Telegram Não Responde

Verifique os registos do Hermes no ZimaOS Dashboard e depois confirme os seguintes pontos por ordem:
- O Bot Token está correto
- O seu Telegram User ID numérico está na lista de permissões
- O contentor consegue alcançar `api.telegram.org`
- Se estiver a ser utilizado num grupo, o Privacy Mode e as permissões do grupo estão configurados corretamente