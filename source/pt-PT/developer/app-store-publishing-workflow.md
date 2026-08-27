---
title: Workflow de publicação da App Store
seo_title: "Publicar uma App Store Docker ZimaOS no GitHub Pages e numa CDN"
description: "Publique uma App Store Docker compatível com ZimaOS no GitHub Pages, GitHub Releases e numa CDN para utilizadores de servidores domésticos e homelabs."
type: Docs
author: IceWhaleTech
tip: Não elimine este bloco de front matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Este workflow de publicação entrega uma App Store Docker através de alojamento estático para que servidores domésticos ZimaOS e homelabs a possam consumir.

Esta página documenta [`.github/workflows/release-store.yml`](https://github.com/IceWhaleTech/CasaOS-AppStore/blob/main/.github/workflows/release-store.yml), o workflow de publicação utilizado para releases etiquetadas.

## Objetivo

Obtém a saída pronta para release e publica-a nos destinos públicos de entrega.

## Acionadores

- push de etiquetas que correspondam a `v*`
- execução manual através de `workflow_dispatch`

As execuções manuais podem definir `purge_only` para atualizar os ficheiros alterados pela implementação mais recente em `gh-pages` sem voltar a compilar ou implementar a loja.

## Principais fases

1. Obter a origem do repositório.
2. Restaurar as caches de compilação.
3. Compilar `dist/` do protocolo v2.
4. Compilar a saída zip v1 legada.
5. Criar os pacotes da release.
6. Carregar os artefactos e relatórios da release.
7. Guardar as caches de compilação.
8. Escrever o resumo da release.
9. Implementar `dist/` em `gh-pages`.
10. Recolher os ficheiros alterados pela implementação e atualizar as respetivas entradas de cache no jsDelivr.
11. Criar uma GitHub Release com os pacotes anexados.

A atualização da cache é executada depois da implementação em `gh-pages`. Compara as revisões anterior e atual de `gh-pages`, inclui sempre os pontos de entrada da loja e envia os caminhos para o jsDelivr em lotes. O script consulta o resultado da purga, repete falhas HTTP transitórias e falha de forma visível quando o jsDelivr comunica limitação ou uma purga sem êxito. Uma verificação posterior compara os hashes da resposta da origem e da CDN, para que um pedido de purga aceite não seja confundido com uma cache efetivamente atualizada.

## Saídas publicadas

Atualmente, o workflow publica ou anexa:

- saída estática `dist/` em `gh-pages` para o protocolo v2
- `main.zip` para compatibilidade v1
- pacotes zip da release para transferência
- relatórios JSON de compilação para resolução de problemas

## Porque é importante

Este workflow é a referência mais próxima se quiser que o repositório de uma loja de terceiros siga o caminho de publicação oficial.

Mostra como o repositório oficial separa:

- os artefactos gerados durante a compilação
- a implementação durante a publicação
- os anexos da release para transferência manual

## Workflow de compilação relacionado

O workflow de compilação que não publica está documentado em [Workflow de compilação](./app-store-build-workflow).

Se estiver a desenhar um repositório externo, consulte [Reutilizar as ações oficiais](./app-store-github-actions) para conhecer o caminho recomendado.
