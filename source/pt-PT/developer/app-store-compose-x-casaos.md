---
title: Docker Compose e x-casaos
seo_title: "Referência de Docker Compose e x-casaos para aplicações ZimaOS"
description: "Defina serviços Docker e metadados x-casaos para aplicações self-hosted distribuídas através do ZimaOS, servidores domésticos, homelabs e ambientes NAS OS."
type: Docs
author: IceWhaleTech
tip: Não elimine este bloco de front matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Utilize esta referência ao empacotar serviços Docker como aplicações self-hosted para ZimaOS ou outro NAS OS compatível.

Cada aplicação encontra-se em `Apps/<folder>/docker-compose.yml`.

## Âmbito desta página

Esta página concentra-se no bloco superior `x-casaos`, que é o contrato de metadados específico da loja utilizado pelo pipeline de compilação.

Para o restante ficheiro Compose:

- siga a referência oficial de ficheiros Docker Compose: https://docs.docker.com/reference/compose-file/
- utilize a referência oficial de `services` para as definições de serviços: https://docs.docker.com/reference/compose-file/services/
- utilize a referência oficial do `name` superior: https://docs.docker.com/reference/compose-file/version-and-name/

Por outras palavras:

- a configuração padrão de execução dos contentores pertence ao Docker Compose
- os metadados da aplicação apresentados pela loja pertencem a `x-casaos`

## Modelo de origem

É criado um ficheiro Compose por aplicação. Esse ficheiro contém:

- conteúdo Docker Compose padrão
- um bloco `x-casaos` no nível superior

O nome do diretório de origem em `Apps/` não é a identidade do protocolo. O processo de compilação obtém a identidade do próprio conteúdo do Compose, sobretudo do `name` superior e de `x-casaos.id`.

## Exemplo mínimo

```yaml
name: my-app
services:
  my-app:
    image: myrepo/my-app:1.0.0
    ports:
      - target: 8080
        published: "8080"
        protocol: tcp
    restart: unless-stopped
x-casaos:
  id: com.example.myapp
  main: my-app
  index: /
  port_map: "8080"
  scheme: http
  icon: https://cdn.example.com/my-app/icon.svg
  title:
    en_US: My App
  tagline:
    en_US: Does amazing things
  description:
    en_US: A great app that does amazing things.
  author: Your Name
  developer: Original Developer
  category: Productivity
  architectures:
    - amd64
  version: "1.0.0"
  update_at: "2026-03-01"
  release_notes:
    en_US: First release
```

## Regras do Compose fora de `x-casaos`

Para todo o conteúdo que não pertença a `x-casaos`, este repositório não redefine a semântica do Docker Compose. Utilize a documentação oficial como fonte de referência:

- Referência de ficheiros Compose: https://docs.docker.com/reference/compose-file/
- Referência de serviços: https://docs.docker.com/reference/compose-file/services/
- Referência do `name` do projeto: https://docs.docker.com/reference/compose-file/version-and-name/
- Comportamento dos nomes de projeto: https://docs.docker.com/compose/how-tos/project-name/

As expectativas específicas do repositório limitam-se a:

- o Compose tem de ser YAML válido
- o Compose tem de passar `docker compose config -q`
- o `name` superior tem de cumprir as expectativas de validação do repositório
- os blocos legados `services.<name>.x-casaos` ao nível do serviço são removidos durante a compilação v2

## Visão geral de x-casaos

O bloco superior `x-casaos` contém dois tipos de campos:

- campos de execução e entrada visual que permanecem no `docker-compose.yml` compilado
- campos de metadados que são extraídos para o `meta.json` compilado

## Matriz de campos

| Campo | Tipo | Obrigatório | Localizado na origem | Localização na saída compilada |
|---|---|---:|---:|---|
| `id` | `string` | Sim | Não | Compose compilado + saídas derivadas de `meta.json`/índice |
| `main` | `string` | Sim | Não | Compose compilado |
| `index` | `string` | Sim, na prática | Não | Compose compilado |
| `port_map` | `string` | Sim | Não | Compose compilado |
| `scheme` | `string` | Não | Não | Compose compilado |
| `icon` | `string` | Sim | Não | Compose compilado; reescrito durante a compilação |
| `title` | `object` | Sim | Sim | Compose compilado; resolvido por locale |
| `tagline` | `object` | Recomendado | Sim | `meta.json`, listagem do índice |
| `description` | `object` | Recomendado | Sim | `meta.json` |
| `thumbnail` | `string` | Não | Não | `meta.json` como caminho de recurso compilado |
| `screenshot_link` | `string[]` | Não | Não | `meta.json` como caminhos de recursos compilados |
| `tips` | `object` | Não | Sim | `meta.json` |
| `author` | `string` | Recomendado | Não | `meta.json`, listagem do índice |
| `developer` | `string` | Recomendado | Não | `meta.json`, listagem do índice |
| `category` | `string` | Sim | Não | `meta.json`, listagem do índice |
| `architectures` | `string[]` | Recomendado | Não | `meta.json`, listagem do índice |
| `version` | `string` | Sim | Não | `meta.json`, listagem do índice |
| `update_at` | `string` | Não | Não | `meta.json` |
| `release_notes` | `object` | Não | Sim | `meta.json.release_note` |
| `website` | `string` | Não | Não | `meta.json` |
| `repo` | `string` | Não | Não | `meta.json` |
| `support` | `string` | Não | Não | `meta.json` |
| `docs` | `string` | Não | Não | `meta.json` |

## Campos de execução

### `id`

Objetivo:
Identidade estável da aplicação no protocolo da loja.

Regras:

- obrigatório no Compose de origem de todas as aplicações
- tem de utilizar um estilo de domínio inverso, como `com.example.myapp`
- apenas são permitidas letras, dígitos, `.`, `_` e `-`
- é normalizado para minúsculas durante a compilação
- tem de conter pelo menos dois segmentos não vazios separados por pontos

Comportamento da compilação:

- permanece no Compose compilado
- também é propagado para os metadados e dados de listagem compilados

Erros comuns:

- tratar o nome do diretório da aplicação como identidade
- utilizar uma string curta que não segue o estilo de domínio

### `main`

Objetivo:
Identifica o serviço que fornece a interface principal orientada ao navegador.

Regras:

- obrigatório
- tem de corresponder a um nome de serviço em `services`
- deve apontar para o serviço Web apresentado ao utilizador, não para um contentor auxiliar

Comportamento da compilação:

- permanece no Compose compilado

Erros comuns:

- apontar `main` para um contentor de base de dados

### `index`

Objetivo:
Define o caminho acrescentado ao URL de entrada da aplicação quando os clientes abrem a interface.

Regras:

- normalmente `/`
- deve refletir o caminho de entrada Web real da aplicação

Comportamento da compilação:

- permanece no Compose compilado

### `port_map`

Objetivo:
Define a porta publicada da interface Web exposta aos utilizadores.

Regras:

- obrigatório
- tem de ser uma string YAML, por exemplo `"8080"`
- deve corresponder à porta que os utilizadores realmente abrem no navegador

Comportamento da compilação:

- permanece no Compose compilado

Erros comuns:

- escrever `port_map: 8080` sem aspas

### `scheme`

Objetivo:
Especifica se a aplicação deve ser aberta com `http` ou `https`.

Regras:

- opcional
- deve corresponder ao protocolo efetivamente exposto

Comportamento da compilação:

- permanece no Compose compilado

### `icon`

Objetivo:
Fornece o URL do ícone do painel da aplicação instalada.

Regras:

- obrigatório
- o Compose de origem pode utilizar qualquer URL acessível
- a saída da compilação reescreve o campo para o URL do recurso compilado sob `--base-url`

Comportamento da compilação:

- permanece no Compose compilado
- é reescrito para apontar para `apps/{app-id}/assets/icon.*`

Erros comuns:

- assumir que este valor exato da origem permanecerá inalterado depois da compilação

### `title`

Objetivo:
Fornece o nome visível da aplicação.

Regras:

- obrigatório
- objeto indexado por locale na origem
- deve incluir `en_US`

Comportamento da compilação:

- permanece no Compose compilado
- é resolvido como texto de string simples em cada saída de locale gerada

Erros comuns:

- escrever uma string simples em vez de um objeto indexado por locale

## Campos de metadados

### `tagline`

Objetivo:
Resumo curto de uma linha utilizado nas listagens e nos detalhes da aplicação.

Regras:

- recomendado
- objeto indexado por locale na origem

Comportamento da compilação:

- extraído para o `meta.json` compilado
- também pode ser emitido em dados de listagem, como `index.json`

### `description`

Objetivo:
Descrição detalhada da aplicação.

Regras:

- recomendado
- objeto indexado por locale na origem
- pode conter texto Markdown, consoante o suporte do cliente

Comportamento da compilação:

- extraído para o `meta.json` compilado
- resolvido como string simples em cada ficheiro de locale gerado

### `thumbnail`

Objetivo:
Fornece uma imagem promocional maior para uma apresentação mais rica da aplicação.

Regras:

- opcional
- normalmente referencia um ficheiro no diretório da aplicação

Comportamento da compilação:

- emitido em `meta.json` como caminho de recurso compilado
- o ficheiro de origem é transformado em saída sob `apps/{app-id}/assets/`

### `screenshot_link`

Objetivo:
Fornece uma ou mais capturas para a vista detalhada da aplicação.

Regras:

- opcional
- matriz de nomes de ficheiros de capturas na origem

Comportamento da compilação:

- emitido em `meta.json` como caminhos de recursos compilados

### `tips`

Objetivo:
Contém orientações para o utilizador durante ou antes da instalação.

Regras:

- opcional
- objeto cujos valores são texto indexado por locale

Exemplo:

```yaml
tips:
  before_install:
    en_US: This app requires at least 4GB RAM.
    zh_CN: This app requires at least 4GB RAM.
```

Comportamento da compilação:

- extraído para o `meta.json` compilado
- os valores de locale são resolvidos para cada locale gerado

### `author`

Objetivo:
Identifica quem empacota ou mantém a definição da aplicação na loja.

Regras:

- recomendado
- string simples

Comportamento da compilação:

- emitido em `meta.json`
- normalmente incluído nos dados de listagem da aplicação

### `developer`

Objetivo:
Identifica o projeto de origem ou o programador original.

Regras:

- recomendado
- string simples

Comportamento da compilação:

- emitido em `meta.json`
- normalmente incluído nos dados de listagem da aplicação

### `category`

Objetivo:
Atribui a aplicação a uma categoria normalizada da loja ZimaOS.

Regras:

- obrigatório na prática para uma apresentação correta
- tem de ser um dos seguintes valores:
  - `Media`
  - `Productivity`
  - `Home`
  - `Networking`
  - `AI`
  - `Finance`
  - `Social`
  - `Developer`
  - `Others`

Comportamento da compilação:

- emitido em `meta.json`
- normalmente incluído nos dados de listagem da aplicação

Erros comuns:

- utilizar nomes de categorias livres

### `architectures`

Objetivo:
Declara as arquiteturas de CPU suportadas pelo pacote da aplicação.

Regras:

- recomendado
- matriz de strings
- os valores comuns incluem `amd64` e `arm64`

Comportamento da compilação:

- emitido em `meta.json`
- normalmente incluído nos dados de listagem da aplicação

### `version`

Objetivo:
Versão da aplicação apresentada aos utilizadores e utilizada para compreender as atualizações.

Regras:

- obrigatória para aplicações publicadas na nova loja
- string simples
- deve mudar quando uma atualização publicada precisar de ser recebida pelos utilizadores como nova versão
- deve utilizar um valor de estilo semver sempre que possível, por exemplo `1.2.3`

Comportamento da compilação:

- emitido em `meta.json`
- também pode aparecer nos dados de listagem

Porque é importante:

- as futuras decisões de atualização dependem deste campo para determinar para que versão os utilizadores vão migrar
- sem ele, os utilizadores e clientes têm de recorrer a sinais de alteração de nível inferior, como `content_hash`
- versões ausentes ou não semver reduzem a transparência das atualizações e podem ser omitidas de algumas saídas de listagem

Erros comuns:

- tratar `version` apenas como um campo decorativo
- esquecer-se de o atualizar ao publicar uma alteração significativa da aplicação
- utilizar strings arbitrárias que não se comportam como uma versão normal

### `update_at`

Objetivo:
Data de atualização opcional utilizada para enriquecer a apresentação da loja.

Regras:

- opcional
- formato recomendado: `YYYY-MM-DD`

Comportamento da compilação:

- emitido em `meta.json`

### `release_notes`

Objetivo:
Fornece notas de versão ou um resumo das alterações.

Regras:

- opcional
- objeto indexado por locale na origem
- o nome do campo de origem permanece `release_notes`

Comportamento da compilação:

- extraído para o `meta.json` compilado
- renomeado para `release_note`

Erros comuns:

- escrever `release_note` na origem em vez de `release_notes`

### `website`

Objetivo:
Liga ao produto ou à página inicial oficial.

Regras:

- opcional
- URL em string simples

Comportamento da compilação:

- emitido em `meta.json`

### `repo`

Objetivo:
Liga ao repositório de código-fonte ou do projeto.

Regras:

- opcional
- URL em string simples

Comportamento da compilação:

- emitido em `meta.json`

### `support`

Objetivo:
Liga à página de suporte, sistema de problemas, fórum ou centro de ajuda.

Regras:

- opcional
- URL em string simples

Comportamento da compilação:

- emitido em `meta.json`

### `docs`

Objetivo:
Liga à documentação da aplicação empacotada.

Regras:

- opcional
- URL em string simples

Comportamento da compilação:

- emitido em `meta.json`

## O que permanece no Compose compilado e o que passa para `meta.json`

Permanece no Compose compilado:

- `id`
- `main`
- `index`
- `port_map`
- `scheme`
- `icon`
- `title`

Passa para o `meta.json` compilado:

- `tagline`
- `description`
- `thumbnail`
- `screenshot_link`
- `tips`
- `author`
- `developer`
- `category`
- `architectures`
- `version`
- `update_at`
- `release_note`
- `website`
- `repo`
- `support`
- `docs`

## Regra de colocação dos campos

Utilize esta separação ao criar o Compose de origem:

- as informações de execução e entrada pertencem aos campos `x-casaos` de execução
- os metadados de apresentação da loja pertencem aos campos `x-casaos` de metadados
- os detalhes de execução dos contentores pertencem às secções padrão do Docker Compose, como `services`, `volumes`, `networks` e `environment`

## Resumo de erros comuns

- utilizar strings simples onde são esperados objetos indexados por locale
- apontar `main` para um serviço sem interface de utilizador
- utilizar um número inteiro em vez de uma string entre aspas para `port_map`
- utilizar valores de categoria não oficiais
- esquecer que `title` permanece no Compose compilado enquanto `tagline` passa para `meta.json`
