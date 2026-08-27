---
title: Saída da compilação da App Store
seo_title: "Saída da App Store ZimaOS: Docker Compose, metadados e recursos"
description: "Compreenda os ficheiros Docker Compose gerados, metadados, índices localizados, recursos e hashes de conteúdo das App Stores ZimaOS."
type: Docs
author: IceWhaleTech
tip: Não elimine este bloco de front matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Estes são os ficheiros consumidos por um cliente de servidor doméstico ZimaOS ou homelab depois de concluída a compilação da App Store Docker.

O protocolo é consumido a partir dos ficheiros gerados em `dist/`.

## Ficheiros de saída

O script de compilação pode gerar:

- `dist/store.json`
- `dist/store.{locale}.json`
- `dist/index.json`
- `dist/index.{locale}.json`
- `dist/apps/<app-id>/docker-compose.yml`
- `dist/apps/<app-id>/docker-compose.{architecture}.yml`
- `dist/apps/<app-id>/meta.json`
- `dist/apps/<app-id>/meta.{locale}.json`
- `dist/apps/<app-id>/assets/*`

## `index.json`

`index.json` é a listagem de aplicações de toda a loja.

Cada item de aplicação inclui dados como:

- `id`
- `title`
- `tagline`
- `category`
- `version`
- `author`
- `developer`
- `architectures`
- `icon`
- `thumbnail`
- `compose_url`
- `meta_url`
- `content_hash`

### Significado dos campos da listagem

#### `id`

- identificador normalizado a partir do `x-casaos.id` superior da origem
- também utilizado como nome do diretório de saída da aplicação em `dist/apps/`

#### `title`

- nome visível da aplicação resolvido para o locale de destino

#### `tagline`

- resumo curto resolvido para o locale de destino

#### `category`

- valor de categoria normalizado utilizado para apresentação e agrupamento

#### `version`

- versão da aplicação proveniente de `x-casaos.version`
- importante para os utilizadores compreenderem as atualizações e para o controlo de versões

#### `author`

- atribuição de quem empacota a aplicação ou da loja

#### `developer`

- atribuição do projeto de origem

#### `architectures`

- lista de arquiteturas de CPU suportadas
- utilizada pela compilação para emitir variantes de Compose por arquitetura quando possível

#### `icon`

- caminho ou URL do recurso compilado relativo a `--base-url`

#### `thumbnail`

- caminho ou URL da miniatura compilada relativo a `--base-url`

#### `compose_url`

- caminho para o ficheiro Compose compilado de cada aplicação

#### `meta_url`

- caminho para o ficheiro de metadados compilado de cada aplicação

#### `content_hash`

- hash que representa todos os ficheiros gerados relevantes para a aplicação
- utilizado para detetar atualizações incrementais no cliente

É emitido como:

- `dist/index.json`
- `dist/index.{locale}.json` quando pelo menos uma aplicação define explicitamente esse locale em campos apresentados na listagem

## `docker-compose.yml` compilado

Os ficheiros Compose compilados mantêm apenas os campos `x-casaos` orientados para a execução:

- `id`
- `main`
- `index`
- `port_map`
- `scheme`
- `icon`
- `title`

Todos os metadados são removidos do Compose compilado e transferidos para `meta.json`.

### Comportamento do Compose compilado

O Compose compilado não é uma cópia direta do Compose de origem.

Durante a compilação:

- são removidos os metadados `x-casaos` que não são de execução
- `icon` é reescrito
- o `title` indexado por locale é resolvido para uma string simples no locale gerado

## `meta.json` compilado

O `meta.json` compilado contém metadados da aplicação, incluindo campos relacionados com atualizações e apresentação:

- `version`
- `update_at`
- `release_note`
- `website`
- `repo`
- `support`
- `docs`

Na prática, `version` não deve ser tratado como um extra decorativo. É um campo essencial para comunicar atualizações da aplicação na nova loja.

`title` e `icon` não são intencionalmente escritos em `meta.json`, porque permanecem como informações de execução e apresentação no Compose compilado.

### Grupos de campos de metadados compilados

Na prática, o `meta.json` compilado agrupa:

- conteúdo descritivo, como `tagline` e `description`
- recursos de apresentação, como `thumbnail` e `screenshot_link`
- atribuição, como `author` e `developer`
- dados de compatibilidade, como `architectures`
- campos opcionais de melhoria, como `version`, `update_at` e `release_note`

## Comportamento dos caminhos

Os caminhos relativos às aplicações gerados costumam ter este aspeto:

- `apps/com.example.myapp/docker-compose.yml`
- `apps/com.example.myapp/meta.json`
- `apps/com.example.myapp/assets/icon.svg`

Nestes exemplos, `com.example.myapp` é o valor normalizado do `x-casaos.id` de origem.

Estes caminhos são resolvidos relativamente ao `--base-url` configurado.

Assim, a mesma compilação lógica pode ser publicada em diferentes hosts públicos alterando `--base-url`.

## Hash de conteúdo

`content_hash` é calculado a partir dos ficheiros no diretório gerado de cada aplicação, incluindo:

- Compose compilado
- variantes de Compose específicas de arquitetura
- variantes de metadados
- recursos

Isto permite atualizações incrementais eficientes no cliente.

## Comportamento das atualizações

As verificações de atualizações no cliente são orientadas por `index.json` e pelo `content_hash` de cada aplicação.

Isto significa que:

- as aplicações sem alterações são ignoradas
- as aplicações alteradas voltam a obter apenas os seus ficheiros Compose e de metadados
- a loja não precisa de voltar a transferir o pacote completo em cada atualização

## Erros comuns

- assumir que os ficheiros em `dist/` devem ser escritos manualmente
- assumir que `meta.json` contém `title`
- tratar `content_hash` como um campo de versão manual
- esquecer que os ficheiros de índice e metadados específicos de locale só existem para locales definidos explicitamente
