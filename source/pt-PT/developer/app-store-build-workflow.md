---
title: Workflow de compilação da App Store
seo_title: "Workflow de compilação para App Stores Docker ZimaOS"
description: "Compile saída estática v2, pacotes v1 legados, relatórios e artefactos reutilizáveis para uma App Store Docker self-hosted ZimaOS."
type: Docs
author: IceWhaleTech
tip: Não elimine este bloco de front matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Este workflow transforma definições de aplicações Docker self-hosted em artefactos reutilizáveis para distribuição em homelabs e NAS OS.

Esta página documenta [`.github/workflows/release.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/release.yml), o workflow de compilação de artefactos.

## Objetivo

Transforma as definições de origem do repositório em entregáveis de compilação reutilizáveis.

## Acionadores

- push para `main`
- execução manual através de `workflow_dispatch`

## Principais fases

1. Obter a origem do repositório.
2. Restaurar as caches de compilação.
3. Compilar `dist/` do protocolo v2.
4. Compilar a saída zip v1 legada.
5. Carregar os relatórios e artefactos entregáveis.
6. Guardar as caches de compilação.
7. Escrever o resumo do job.

## Saídas da compilação

Atualmente, o workflow produz pelo menos:

- saída estática `dist/` para o protocolo v2
- ficheiro legado `dist/store/main.zip`
- relatórios JSON dos resultados das compilações v1 e v2

## Porque é importante

Este workflow explica o contrato de compilação do repositório:

- os ficheiros de origem não são diretamente o protocolo publicado
- `dist/` é o artefacto de publicação
- os relatórios carregados são artefactos de depuração, não ficheiros do protocolo

## Workflow de publicação relacionado

A publicação real baseada em etiquetas encontra-se no [Workflow de publicação](./app-store-publishing-workflow).

Se estiver a desenhar um repositório para uma loja de terceiros, consulte [Reutilizar as ações oficiais](./app-store-github-actions) para conhecer o caminho recomendado.

Esta página também é útil para responsáveis por lojas externas que não copiem exatamente o workflow oficial, porque mostra quais os passos essenciais para o protocolo e quais são detalhes de implementação.
