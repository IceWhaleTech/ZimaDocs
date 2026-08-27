---
title: CI/CD da App Store
seo_title: "CI/CD para App Stores Docker no ZimaOS e em servidores domésticos"
description: "Valide, compile e publique uma App Store Docker self-hosted com CI/CD para ZimaOS, servidores domésticos, homelabs e implementações NAS OS."
type: Docs
author: IceWhaleTech
tip: Não elimine este bloco de front matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Utilize este modelo de CI/CD para validar e publicar um catálogo de aplicações Docker para um servidor doméstico ZimaOS, um laboratório self-hosted ou um homelab mais amplo.

CI/CD explica como os ficheiros de origem se transformam em artefactos de loja validados, compilados e publicados.

Para a maioria das lojas de terceiros, o objetivo prático é:

1. validar os ficheiros Compose das aplicações nas pull requests
2. compilar `dist/` v2
3. compilar opcionalmente o ficheiro legado v1 `dist/store/main.zip`
4. publicar `dist/` num alojamento estático

## Separação atual dos workflows oficiais

Este repositório utiliza três workflows principais do GitHub Actions:

- [`validator.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/validator.yml): valida os ficheiros Compose e executa uma verificação completa da compilação v2.
- [`release.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/release.yml): compila artefactos v2 e v1 para inspeção ou reutilização.
- [`release-store.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/release-store.yml): publica a saída etiquetada da loja em `gh-pages` e no GitHub Releases.

## Responsabilidades dos workflows

| Workflow | Quando é executado | Objetivo principal | Saída principal |
|---|---|---|---|
| Validator | pull request ou execução manual | detetar rapidamente origens inválidas | relatórios de validação e compilação |
| Release | push para `main` ou execução manual | produzir artefactos reutilizáveis | `dist/`, `main.zip`, relatórios |
| Release-store | etiqueta de release ou execução manual | publicar a loja | `gh-pages`, recursos do GitHub Release |

## Ações locais do repositório

Estes workflows são compostos por pequenas ações:

- `validate-compose`: valida os ficheiros Compose de origem.
- `build-store-v2`: wrapper local do repositório em torno de `IceWhaleTech/build-appstore-action`.
- `build-store-v1`: compila o ficheiro legado `main.zip`.
- `write-job-summary`: apresenta o relatório JSON no resumo do GitHub Actions.
- `render-report`: converte o relatório JSON em HTML quando necessário.

Para responsáveis externos, o ponto de entrada público recomendado é `IceWhaleTech/build-appstore-action`. Consulte [Reutilizar as ações oficiais](./app-store-github-actions).

## Relatórios de compilação e resumo do job

A ação de compilação v2 escreve um relatório JSON estruturado quando `report-json` está definido. Este repositório carrega esse relatório como artefacto e apresenta-o no resumo do job do GitHub Actions.

Para o consultar:

1. Abra a execução do GitHub Actions.
2. Abra o job relevante, como `validate`, `build` ou `release`.
3. Leia o resumo no topo da página do job.
4. Transfira o artefacto do relatório quando precisar de todos os detalhes JSON.

Nomes comuns dos artefactos:

- `validation-report`
- `build-v2-validation-report`
- `build-v2-report`
- `release-build-v2-report`

O resumo inclui o estado da compilação, contagem de aplicações, número de avisos e erros, principais problemas, artefactos gerados e contexto do repositório.

## Comportamento dos erros de compilação

A ação separa os problemas ao nível de cada aplicação das falhas globais.

Os erros ao nível da aplicação são recolhidos para que as aplicações seguintes continuem a ser processadas. Se existir algum erro de aplicação, o relatório é escrito e a compilação v2 acaba por falhar. Os exemplos incluem metadados de aplicação inválidos, ausência de `x-casaos.id`, recursos referenciados em falta, YAML inválido ou incompatibilidade de arquitetura.

Os avisos são comunicados sem fazer falhar a compilação v2 quando ainda é possível gerar a saída. Os exemplos incluem a ausência de `supported-languages.json`, diretórios de aplicações ignorados por não terem um `x-casaos` superior, limites do registo, falhas ao fixar o digest da imagem, falhas ao estimar o tamanho da imagem ou uma `x-casaos.version` não semver.

As falhas globais interrompem a compilação de todo o repositório. Os exemplos incluem `base-url` inválido, ausência de `Apps/`, JSON inválido na configuração da loja, `store_id` inválido, `supported-languages.json` inválido ou falhas na preparação das dependências.

## Comportamento de compatibilidade

Os workflows oficiais compilam intencionalmente ambas as saídas:

- ficheiros estáticos v2 para clientes novos
- `dist/store/main.zip` v1 para clientes legados

Se a sua loja for nova e não precisar de suporte v1, pode omitir o passo de compilação v1.

## Páginas seguintes

- [Reutilizar as ações oficiais](./app-store-github-actions)
- [Workflow de validação](./app-store-validation-workflow)
- [Workflow de compilação](./app-store-build-workflow)
- [Workflow de publicação](./app-store-publishing-workflow)
