---
title: Como implementar o Komga no ZimaOS
seo_title: "Executar o Komga no ZimaOS: servidor de banda desenhada e livros eletrónicos para o seu servidor doméstico"
description: Instale o Komga a partir da App Store do ZimaOS em minutos — carregue banda desenhada e livros eletrónicos, autorize uma pasta de biblioteca e leia-os em qualquer dispositivo, incluindo o telemóvel.
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Descrição geral

O Komga é suportado nativamente no App Catalog do ZimaOS e pode ser instalado em apenas 3 minutos. Consulte a [página do Komga na App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.komga) para conhecer os detalhes mais recentes da app.

O Komga é um servidor de multimédia gratuito e de código aberto para banda desenhada, manga e livros eletrónicos. Organiza os seus ficheiros PDF e EPUB em bibliotecas com metadados automáticos, oferece um leitor web limpo em qualquer navegador e suporta OPDS para apps de leitura de terceiros. Instalado no ZimaOS, a sua biblioteca fica nas suas próprias unidades e está disponível em qualquer dispositivo — incluindo o telemóvel através do ZimaClient.

## Pré-requisitos

- Um servidor doméstico ZimaOS em funcionamento.
- Os seus ficheiros PDF ou EPUB guardados numa pasta local do seu servidor doméstico ZimaOS.

## App Catalog

1. Encontre o Komga no App Catalog do ZimaOS. Abra a **App Store** → procure por "Komga".

![Resultados de pesquisa da App Store mostrando o cartão da app Komga e o seu botão de instalação](/images/app-store/komga-app-store.png)

2. **Está pronto a usar!**

![Lista de apps no painel do ZimaOS com o Komga mostrado como instalado](/images/app-store/komga-installed.png)

## Carregue ficheiros via ZimaOS Files

Use o ZimaOS Files para carregar ou copiar os seus ficheiros PDF ou EPUB diretamente. Abra o ZimaOS Files, crie uma pasta nova e arraste e largue os seus ficheiros PDF ou EPUB para os carregar diretamente no diretório.

![Janela do ZimaOS Files com uma pasta komga-library criada para carregar banda desenhada e livros eletrónicos](/images/app-store/komga-files.png)

## Autorize o Komga a carregar dados

Os passos seguintes **NÃO são necessários** — pode começar já com a configuração PREDEFINIDA.

Se quiser personalizar todas as definições do contentor, pode configurá-las através das opções no canto superior direito da app.

![Página da app Komga no ZimaOS com o menu de opções no canto superior direito para as definições do contentor](/images/app-store/komga-settings.png)

O ZimaOS suporta vários métodos de configuração, incluindo edição baseada em formulários e edição secundária em YAML.

No formulário de configuração do Komga no ZimaOS, navegue até à secção **Volumes** (ou mapeamento de caminhos) e adicione uma nova regra de volume: defina o **Caminho do contentor** como `/data` (o diretório de multimédia predefinido dentro do Komga) e o **Caminho do host** como a pasta local no seu dispositivo ZimaOS onde a sua banda desenhada está guardada. Veja a captura abaixo para um exemplo preenchido.

![Secção Volumes das definições da app Komga com o caminho de multimédia do contentor mapeado para uma pasta do host](/images/app-store/komga-volumes.png)

## Adicione uma biblioteca no Komga

1. Primeira visita: crie uma conta de administrador.

![Ecrã de primeira execução do Komga para criar uma conta de administrador com email e palavra-passe](/images/app-store/komga-admin.png)

2. Depois de iniciar sessão, clique no botão "+" ao lado de Libraries na barra lateral.

![Diálogo Adicionar biblioteca no Komga com um nome e o caminho da pasta raiz preenchidos](/images/app-store/komga-library.png)

3. Defina o intervalo de verificação de ficheiros.

![Definições do scanner no diálogo Adicionar biblioteca do Komga com o intervalo de verificação definido para hora a hora](/images/app-store/komga-scan.png)

> Mantenha todos os outros separadores nas definições predefinidas e prossiga.

4. Clique em "Add" para terminar.

O Komga irá verificar e importar automaticamente toda a banda desenhada, revistas ou livros eletrónicos guardados nessa pasta.

![Página de livros do Komga após adicionar uma biblioteca mostrando banda desenhada e séries adicionadas recentemente](/images/app-store/komga-books.png)

## Aceda ao Komga via telemóvel

Aceda ao Komga através da app móvel ZimaClient — ligação P2P direta ao seu servidor doméstico, sem relay na nuvem e sem configuração de VPN. Funciona em casa ou em viagem.

| ![App móvel ZimaClient com a lista de apps e o ícone do Komga num telemóvel](/images/app-store/komga-phone-apps.png) | ![Biblioteca do Komga aberta através do ZimaClient num telemóvel a mostrar uma página de séries de banda desenhada](/images/app-store/komga-phone-library.png) | ![Página de detalhe de um livro eletrónico no Komga num telemóvel com botões de ler e transferir](/images/app-store/komga-phone-reader.png) |
| - | - | - |

## Ligações de referência

Para mais detalhes, consulte a documentação oficial do Komga:

- Definições avançadas de bibliotecas – [https://komga.org/docs/guides/libraries/](https://komga.org/docs/guides/libraries/ "Guia oficial do Komga sobre configuração e verificação de bibliotecas")
- Definições e gestão do servidor – [https://komga.org/docs/guides/server-settings/](https://komga.org/docs/guides/server-settings/ "Guia oficial do Komga sobre definições e gestão do servidor")
- Configuração de proxy inverso e HTTPS – [https://komga.org/docs/installation/https/](https://komga.org/docs/installation/https/ "Guia oficial do Komga sobre configuração de HTTPS e proxy inverso")
