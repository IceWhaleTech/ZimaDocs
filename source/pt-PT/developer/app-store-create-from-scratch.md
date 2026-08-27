---
title: Criar uma App Store ZimaOS de raiz
seo_title: "Criar uma App Store Docker para ZimaOS, servidores domésticos e homelabs"
description: "Crie uma loja de aplicações Docker compatível com ZimaOS para um servidor doméstico self-hosted, homelab ou NAS OS. Defina aplicações, gere a saída v2 e publique ficheiros estáticos."
type: Docs
author: IceWhaleTech
tip: Não elimine este bloco de front matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Este guia explica como criar um catálogo de aplicações Docker e self-hosted compatível com ZimaOS para um servidor doméstico, homelab ou NAS OS. Abrange os ficheiros de origem mínimos, o processo de compilação v2 e o caminho de publicação estática.

Utilize este caminho quando estiver a criar uma nova loja de terceiros compatível com ZimaOS.

Se já tiver uma loja v1 baseada em ficheiros zip, leia primeiro a [Estratégia de migração](./app-store-v1-v2-migration). A migração reutiliza a maior parte da árvore `Apps/` existente e exige menos passos.

## Ficheiros de origem mínimos

Uma nova loja que utilize o protocolo v2 começa com:

- `store-config.json`: identidade da loja e texto localizado ao nível da loja.
- `supported-languages.json`: locales candidatos para a saída gerada.
- `Apps/<AppName>/docker-compose.yml`: um ficheiro Compose de origem por aplicação.
- recursos da aplicação, como `icon.svg`, `thumbnail.png` e `screenshot-1.png`.

`scripts/build_dist.sh` é opcional, mas recomendado para compilações locais. A CI pode chamar diretamente `IceWhaleTech/build-appstore-action`.

## Processo de compilação

1. Crie a estrutura descrita em [Estrutura do repositório](./app-store-repository-structure).
2. Adicione `store-config.json` com um `store_id` estável, `name` localizado, `maintainer` e uma descrição opcional.
3. Adicione `supported-languages.json` com os locales que a compilação deve considerar.
4. Adicione um diretório por aplicação dentro de `Apps/`.
5. Coloque a configuração de execução Docker nas secções padrão do Compose.
6. Coloque os metadados da loja no bloco superior `x-casaos`.
7. Execute a ação de compilação ou `./scripts/build_dist.sh`.
8. Publique o diretório `dist/` gerado num alojamento estático.

## Checklist da primeira aplicação

Para cada aplicação, confirme que o Compose de origem inclui:

- `name` no nível superior do Compose
- `services`
- `x-casaos.id` no nível superior
- `x-casaos.main`
- `x-casaos.index`
- `x-casaos.port_map`
- `x-casaos.icon`
- `x-casaos.title`
- `x-casaos.category`

Metadados recomendados:

- `tagline`
- `description`
- `author`
- `developer`
- `architectures`
- `version`
- `website`, `repo`, `support` ou `docs`, quando disponíveis

## Destino de publicação

As lojas que utilizam o protocolo v2 são consumidas como ficheiros estáticos. Qualquer alojamento estático HTTPS funciona:

- GitHub Pages
- Cloudflare Pages
- Netlify
- Nginx self-hosted
- qualquer CDN ou armazenamento de objetos que sirva os ficheiros gerados sem os alterar

Defina o `base-url` da compilação como o URL público final onde `dist/` estará acessível. Este URL é escrito nos caminhos gerados dos ficheiros e recursos das aplicações.

## Páginas seguintes

1. [Estrutura do repositório](./app-store-repository-structure)
2. [Configuração da loja](./app-store-config)
3. [Compose e x-casaos](./app-store-compose-x-casaos)
4. [Saída da compilação](./app-store-build-output)
5. [Visão geral de CI/CD](./app-store-ci-cd)
