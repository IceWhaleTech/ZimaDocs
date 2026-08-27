---
title: Workflow de validação da App Store
seo_title: "Validar aplicações Docker para App Stores ZimaOS com GitHub Actions"
description: "Valide a sintaxe Docker Compose, os metadados x-casaos e a saída v2 antes de integrar aplicações numa loja compatível com ZimaOS."
type: Docs
author: IceWhaleTech
tip: Não elimine este bloco de front matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

A validação impede que Docker Compose ou metadados de aplicação inválidos cheguem aos utilizadores de servidores domésticos ou NAS OS.

O workflow de validação está definido em [`.github/workflows/validator.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/validator.yml).

## Objetivo

Valida as entradas de origem antes da integração e deteta regressões antecipadamente.

## Acionadores

- pull requests nos eventos `opened` e `synchronize`
- execução manual através de `workflow_dispatch`

## Principais verificações

1. Executar a ação local `validate-compose` nos ficheiros de origem das aplicações.
2. Carregar um artefacto com o relatório de validação estruturado.
3. Restaurar as caches partilhadas de compilação.
4. Executar a ação local `build-store-v2` como validação de compilação completa.
5. Carregar o relatório de validação da compilação e escrever o resumo do job.
6. Fazer o workflow falhar se a validação do Compose ou a verificação da compilação v2 falhar.

## Ações locais envolvidas

- `validate-compose`: verifica o `name` superior, `x-casaos.id` e `docker compose config -q`
- `build-store-v2`: envolve a ação pública `IceWhaleTech/build-appstore-action`
- `write-job-summary`: apresenta os relatórios JSON no resumo do GitHub Actions

## Porque é importante

Este workflow protege o contrato do repositório de origem:

- a sintaxe do Compose tem de ser válida
- os nomes têm de cumprir as expectativas do repositório
- o repositório tem de continuar a gerar um `dist/` válido

## Quando ler esta página

Utilize esta página quando:

- uma PR falhar na validação
- quiser compreender quais as regras de origem aplicadas automaticamente
- estiver a desenhar a CI de uma loja de terceiros baseada neste repositório
