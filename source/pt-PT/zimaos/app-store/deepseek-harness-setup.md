---
title: Como implementar o DeepSeek Harness no ZimaOS
seo_title: "Implementar o DeepSeek Harness no ZimaOS: transforme o seu servidor doméstico num agente de IA físico"
description: Instale o DeepSeek Harness a partir da App Store do ZimaOS com um clique, ligue qualquer fornecedor de modelos de IA, autorize uma pasta do host para os dados do agente e controle-o a partir do telemóvel.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descrição geral

O DeepSeek Harness é suportado nativamente no App Catalog do ZimaOS e toda a configuração demora apenas alguns minutos. Consulte a [página do DeepSeek Harness na App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.dsh-harness) para conhecer os detalhes mais recentes da app.

O DeepSeek Harness (dsh) é o agente de IA de código aberto da DeepSeek — pense nele como um programador prestativo que vive no seu servidor doméstico. Fala com ele no navegador, descreve o que quer, e ele planeia e faz o trabalho numa pasta do seu NAS. Não é preciso saber programar: o agente trata da parte técnica por si.

Instalado no ZimaOS, funciona 24/7 no seu próprio hardware. Controla-o a partir do telemóvel através do ZimaClient e os seus projetos ficam nas suas unidades, não na nuvem.

## Pré-requisitos

- Um servidor doméstico ZimaOS em funcionamento.
- Hardware mínimo: um CPU de dois núcleos e pelo menos 2 GB de memória.
- Uma chave API de qualquer fornecedor de modelos de IA — DeepSeek, OpenAI (GPT), Anthropic, OpenRouter ou qualquer outro fornecedor de terceiros funcionam, tal como modelos de inferência local no seu próprio hardware (abordado no próximo tutorial desta série). Obtenha uma chave num minuto na secção Adicionar um fornecedor de modelos abaixo.

## App Catalog

1. Encontre o DeepSeek Harness no App Catalog do ZimaOS. Abra a **App Store** → procure por "DeepSeek Harness".

![Resultados de pesquisa da App Store mostrando o cartão da app DeepSeek Harness e o seu botão de instalação](/images/app-store/dsh-app-store.webp)

2. Clique em **Instalar** e aguarde um momento.

![Lista de apps no painel do ZimaOS com o DeepSeek Harness mostrado como instalado](/images/app-store/dsh-installed.webp)

3. **Está pronto a usar!**

## Autorize um diretório de dados

O agente precisa de uma pasta nas suas unidades para guardar os workspaces. Faça isto logo após a instalação:

1. No cartão da app, clique no menu de opções no canto superior direito para abrir as definições do contentor.

2. Na secção **Volumes** (ou mapeamento de caminhos), adicione uma regra de volume: defina o **Caminho do contentor** como `/root/` e o **Caminho do host** como a pasta que quer usar para os dados do agente, por exemplo `/media/SSD-Storage/DSH`.

![Secção Volumes das definições da app com a pasta de dados do agente mapeada da raiz do contentor para uma pasta do host](/images/app-store/dsh-volumes.webp)

3. Reinicie o contentor — não é preciso reiniciar o NAS. A partir de agora, todos os workspaces que o agente criar ficam diretamente nessa pasta das suas unidades.

## Crie o seu primeiro workspace

Abra o DeepSeek Harness a partir do cartão da app — o navegador mostra a Web UI. Crie o seu primeiro workspace; graças à autorização de pasta acima, tudo o que o agente cria é guardado diretamente nas suas unidades.

![A criar o primeiro workspace na Web UI do DeepSeek Harness](/images/app-store/dsh-workspace.webp)

## Adicione um fornecedor de modelos

Vá a **Definições > Modelos** e adicione um fornecedor, depois cole a sua chave API:

- **DeepSeek** — registe-se na [plataforma DeepSeek](https://platform.deepseek.com/ "Plataforma DeepSeek para chaves API e faturação") e copie a sua chave
- **GPT (OpenAI)** — a sua chave da OpenAI
- **OpenRouter** — uma chave para muitos modelos
- Um servidor de modelos no seu próprio hardware — abordado no próximo tutorial desta série

![Página de definições da Web UI do DeepSeek Harness com um fornecedor de modelos adicionado e a sua chave API guardada](/images/app-store/dsh-models.webp)

## A sua primeira tarefa

Agora dê ao agente o seu primeiro trabalho real. Descreva a app que quer por palavras simples — o exemplo abaixo pede um monitor de recursos que mostre em tempo real a CPU, a memória, o disco e a rede do seu host ZimaOS, a correr como uma app em contentor.

![Uma sessão na Web UI do DeepSeek Harness com a tarefa do monitor de recursos e o plano do agente](/images/app-store/dsh-first-task.webp)

Veja-o trabalhar: a sessão mostra o plano, o código e o resultado — sem escrever uma única linha.

![Gravação de ecrã do agente a planear e a escrever a app do monitor de recursos no workspace](/images/app-store/dsh-work-demo.webp)

Após algumas rondas de conversa, o agente transforma a ideia numa app real — sem precisar de conhecimentos de programação. O resultado é um gestor de recursos ao nível do sistema que funciona dia e noite, vigiando a saúde do disco, a segurança da rede e o ciclo de vida dos contentores no seu ZimaOS.

![Gravação de ecrã do gestor de recursos terminado a mostrar métricas em direto de disco, rede e contentores](/images/app-store/dsh-resource-manager.webp)

## Aceda ao DeepSeek Harness via telemóvel

Aceda ao DeepSeek Harness através da app móvel ZimaClient — ligação P2P direta ao seu servidor doméstico, sem relay na nuvem e sem configuração de VPN. Funciona em casa ou em viagem.

| ![App móvel ZimaClient a mostrar a lista de apps da App Store num telemóvel](/images/app-store/dsh-phone-apps.png) | ![Web UI do DeepSeek Harness aberta através do ZimaClient num telemóvel a mostrar uma sessão ativa](/images/app-store/dsh-phone-ui.png) |
| - | - |

Com a ligação P2P pode verificar o progresso do seu agente e todos os seus serviços alojados em qualquer altura e lugar — a mesma Web UI, diretamente no seu telemóvel.

## O seu servidor doméstico é agora um agente

É toda a configuração. O seu servidor doméstico deixou de ser apenas uma caixa de armazenamento — é um agente físico que vive no seu próprio hardware:

- **Controle a partir do telemóvel** — abra a Web UI através do ZimaClient em qualquer lugar e verifique sessões, reveja resultados ou envie uma nova tarefa. O seu agente está a um toque, em casa ou fora.
- **Vibe coding sem escrever código** — descreva uma funcionalidade por palavras simples e deixe o agente planeá-la e escrevê-la num workspace que vive nas suas unidades, não na nuvem.
- **Automação doméstica** — dê-lhe qualquer tarefa à volta do seu servidor doméstico: organizar ficheiros, gerar relatórios a partir dos seus dados, automatizar trabalhos repetitivos. Corre no próprio NAS, por isso continua a trabalhar a toda a hora.
- **Diagnostique uma app avariada** — quando o Jellyfin deixa de transmitir ou o Home Assistant fica às escuras, cole os sintomas e deixe o agente ler os registos e a configuração diretamente no NAS para encontrar e corrigir a causa. Acabaram-se as adivinhas dentro de uma caixa negra.
- **Mantenha a sua pilha de apps** — o agente lê os seus ficheiros Docker Compose e acompanha-o em atualizações, alterações de configuração e migrações, para que a sua pilha autoalojada continue a ser mantível durante anos — não apenas até à próxima atualização.

## Notas de utilização

- **Dê-lhe hardware próprio.** O agente funciona melhor como agente de sandbox físico num dispositivo dedicado — mantenha-o longe do seu NAS principal com todos os seus dados, para que as experiências na sandbox nunca toquem no que importa.
- **Dois níveis de autorização.** Uma autorização de pasta dá ao agente acesso a dados no ZimaOS. Autorizar o socket do Docker é um segundo nível, muito mais alto — dá ao agente gestão de contentores ao nível do sistema, próxima do controlo ao nível de SSH. Conceda cada nível deliberadamente, e só conceda o nível de socket quando uma tarefa precisar mesmo dele.

![Página de definições da app a mostrar a autorização do volume do socket do Docker para o contentor do DeepSeek Harness](/images/app-store/dsh-docker-socket.webp)
- **Defina a permissão de sandbox como acesso total.** Dentro do dsh, defina a permissão de execução da sandbox como acesso total para que o agente possa executar tarefas sem pedir aprovação a cada passo.

![Definição da permissão de sandbox na Web UI do DeepSeek Harness definida como acesso total](/images/app-store/dsh-sandbox-permission.webp)
- **Tudo o que o agente escreve é visível no Files.** Graças ao mapeamento do workspace, todo o código-fonte que o agente escreve fica na pasta autorizada — navegue e verifique no ZimaOS Files a qualquer momento.

## Próximos passos

- **Inferência local:** aponte o fornecedor para um servidor de modelos no seu próprio hardware e execute o agente totalmente offline — o próximo tutorial desta série.
- **Automatizar serviços com o dsh:** crie e execute serviços de automação no ZimaOS — um tutorial posterior desta série.

## Ligações de referência

Para mais detalhes, consulte a documentação oficial do DeepSeek Harness:

- Instalação e todos os caminhos de implementação – [guia de instalação](https://github.com/sdkwork-ai/deepseek-harness-desktop/blob/master/INSTALL.md "Guia oficial de instalação do DeepSeek Harness")
- Usar a Web UI – [guia da Web UI](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/index.md "Guia oficial da Web UI do DeepSeek Harness")
- Fornecedores de modelos – [guia de fornecedores](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/providers.md "Guia oficial de fornecedores de modelos do DeepSeek Harness")
- Código-fonte – [repositório no GitHub](https://github.com/deepseek-ai/deepseek-harness "Repositório oficial do DeepSeek Harness no GitHub")

Leituras adicionais no Tech AI Hub da ZimaSpace:

- [10 Best DeepSeek Harness Plugins 2026](https://shop.zimaspace.com/blogs/tech-ai-hub/10-best-deepseek-harness-plugins-2026 "Guia do Tech AI Hub da ZimaSpace sobre os melhores plugins do DeepSeek Harness")
- [DE Minimal and Creator Explained](https://shop.zimaspace.com/blogs/tech-ai-hub/de-minimal-and-creator-explained "Explicação do Tech AI Hub da ZimaSpace sobre o DE Minimal e o Creator")
