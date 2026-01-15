---
title: Um Guia Completo para Instalar AzuraCast no ZimaOS via Linha de Comando
description: 
type: Docs
author: icewhale123456
tip: A barra superior é um formato fixo, por favor, não a exclua. A descrição será extraída do primeiro parágrafo do conteúdo se não for fornecida.
---
> _Este guia é adaptado do artigo original, [Um Guia Completo para Instalar AzuraCast no ZimaOS via Linha de Comando](https://community.zimaspace.com/t/a-comprehensive-guide-to-installing-azuracast-on-zimaos-via-the-command-line/7818), por **Muditha Liyanagama**, membro da comunidade. Agradecemos sinceramente pelo trabalho deles._

## Introdução
**AzuraCast** é uma poderosa suíte de gerenciamento de rádio web auto-hospedada e tudo-em-um. Ela permite que você gerencie várias estações de rádio online, gerencie playlists, configure o AutoDJ e explore muitas outras opções criativas de transmissão.

Anteriormente, escrevi um guia sobre como instalar o AzuraCast usando a interface gráfica do ZimaOS. No entanto, após mais testes, descobri que o método gráfico é instável, e o atualizador da web do AzuraCast não funciona corretamente quando instalado dessa forma.

Neste guia, vou mostrar um método mais confiável: instalar o AzuraCast no ZimaOS usando a linha de comando. Esta abordagem é significativamente mais estável, e as atualizações da web funcionam corretamente.

Este tutorial é destinado para uso doméstico ou privado, acessível dentro da sua rede local ou via Tailscale. Se você planeja expor sua instância do AzuraCast para a internet pública, talvez seja necessário configurar configurações adicionais de rede e segurança.

Este método foi testado tanto no **Zimaboard 1** quanto no **Zimaboard 2**.

Vamos começar.

### Passo 1: Ativar o Modo de Desenvolvedor e Acesso SSH
![configuração da página e abrir a janela do modo desenvolvedor](https://manage.icewhale.io/api/static/docs/1768468645225_image.png)

![habilitar o acesso SSH e abrir o terminal baseado na web](https://manage.icewhale.io/api/static/docs/1768468682300_image.png)

1. Vá para **Configurações** → **Geral** → **Modo de desenvolvedor**
2. Clique em **Ver**
3. Habilite o **Acesso SSH**
4. Clique em **Terminal baseado na web**

Uma nova guia do navegador será aberta com a interface do terminal ZimaOS.

### Passo 2: Fazer Login no Terminal como Root
No terminal:

1. Digite seu **nome de usuário de login** → pressione **Enter**
2. Digite sua **senha** → pressione **Enter**
3. Digite: `sudo -i`
4. Pressione **Enter**
5. Digite sua **senha** novamente → pressione **Enter**

Agora você está logado como o usuário root.
![entrar no terminal e fazer login com a conta root ](https://manage.icewhale.io/api/static/docs/1768468838713_image.png)

### Passo 3: Criar o Diretório de Instalação do AzuraCast
O AzuraCast deve ser instalado dentro do diretório AppData.

#### 1. Vá para a pasta AppData
(Caminho de exemplo — o seu pode ser diferente)

`cd /ZimaOS-HD/AppData`

#### 2. Crie um diretório para o AzuraCast
`mkdir azuracast`

#### 3. Acesse o diretório
`cd /ZimaOS-HD/AppData/azuracast`

### Passo 4: Baixar e Executar o Instalador do AzuraCast
Execute os seguintes comandos:
```language
curl -fsSL https://raw.githubusercontent.com/AzuraCast/AzuraCast/main/docker.sh > docker.sh
chmod a+x docker.sh
./docker.sh install
```
Isso iniciará a instalação do AzuraCast no diretório atual.

Durante a instalação, você será solicitado a selecionar várias opções, incluindo números de porta.
**Recomendação**: Mantenha todos os valores padrão, a menos que você tenha confiança para alterá-los.

Após a instalação, os serviços do AzuraCast e o atualizador da web serão implantados.

### Passo 5: Corrigir Conflitos de Porta (Se Houver)
Se alguma porta necessária já estiver em uso, o instalador exibirá um erro indicando quais portas estão em conflito.

#### 1. Parar os serviços do AzuraCast
`docker compose down`

Aguarde até que todos os serviços sejam interrompidos.

#### 2. Editar o arquivo Docker Compose
`nano docker-compose.yml`

Ao editar:

Altere apenas o lado esquerdo (**portas publicadas**)
Não altere o lado direito (**portas de destino**)

**Exemplo:**
```language
8080:80 ← altere 8080, mas mantenha 80
```

#### 3. Salvar o arquivo
Pressione:

1. Ctrl + X
2. Y
3. Enter

#### 4. Reimplantar o AzuraCast
`docker-compose up -d`

Você pode precisar repetir esse processo várias vezes, pois o Docker geralmente relata conflitos de porta um de cada vez. Após corrigir um conflito, pode ser que outro seja detectado.

Uma vez que todos os conflitos sejam resolvidos, o AzuraCast será totalmente implantado.

### Passo 6: Acessar a Interface Web do AzuraCast
Abra o seu navegador e vá para:

`http://SEU_IP_DO_SERVIDOR:80`

Se você alterou a porta publicada, substitua 80 pelo número da porta escolhida.

--- 

**<u>Coisas Importantes a Lembrar</u>**
Há algumas limitações ao usar este método:

- Esta instalação **não pode ser gerenciada via a GUI do ZimaOS**.
- Editar ou parar via a GUI pode causar falhas.
- O painel do ZimaOS **não exibirá o uso de CPU ou RAM** para o AzuraCast.
- Todo gerenciamento e solução de problemas devem ser feitos via **linha de comando** ou aplicativo de terceiros com GUI, como **Portainer**.

No entanto, apesar dessas limitações:

- Este método de instalação é **muito mais estável**
- As **atualizações da web do AzuraCast funcionam corretamente**
- Melhor para servidores de rádio pessoais ou domésticos a longo prazo
---