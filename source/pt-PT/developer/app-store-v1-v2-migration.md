---
title: Migrar uma App Store de v1 para v2
seo_title: "Migrar uma App Store CasaOS ou ZimaOS de v1 para v2"
description: "Migre uma App Store Docker do formato de pacote v1 CasaOS ou ZimaOS para o protocolo estático v2, preservando a compatibilidade legada."
type: Docs
author: IceWhaleTech
tip: Não elimine este bloco de front matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Utilize esta estratégia quando uma App Store Docker CasaOS ou ZimaOS existente servir utilizadores de servidores domésticos ou homelabs e precisar de migrar de v1 para o protocolo v2 de NAS OS.

Esta secção destina-se a responsáveis que já tenham uma App Store CasaOS/ZimaOS v1 baseada em ficheiros zip e queiram suportar v2 com alterações mínimas na origem.

O ponto importante é que, normalmente, não é necessário reconstruir todas as aplicações de raiz. Mantenha a árvore `Apps/` existente, normalize os metadados de origem, adicione ficheiros v2 ao nível da loja e produza ambas as saídas a partir do mesmo repositório.

## O que mudou de v1 para v2

| Tópico | Loja v1 | Loja v2 |
|---|---|---|
| Distribuição | zip empacotado ou pacote sysroot | ficheiros estáticos em `dist/` |
| Entrada do cliente | pacote legado, como `main.zip` | `store.json` e `index.json` |
| Identidade da loja | sem ficheiro obrigatório de identidade ao nível da loja | `store-config.json` obrigatório |
| Lista de locales | inferida do conteúdo das aplicações | declarada em `supported-languages.json`, emitida apenas quando existem campos |
| Identidade da aplicação | muitas vezes baseada em convenções do Compose ou do nome | `x-casaos.id` superior obrigatório |
| Metadados | `appfile.json` mais `x-casaos` | `x-casaos` superior, dividido entre Compose compilado e `meta.json` |
| Categorias | valores legados ou livres, como `Utilities` | categorias v2 normalizadas |
| Atualizações | atualização do pacote | atualizações incrementais das aplicações através de `content_hash` |
| Compatibilidade | os clientes v1 consomem zip | a compatibilidade v1 é preservada continuando a compilar `dist/store/main.zip` |

## Modelo mínimo de migração

1. Mantenha `Apps/<App>/docker-compose.yml` como fonte de referência.
2. Mova ou confirme os metadados visíveis da aplicação no bloco superior `x-casaos`.
3. Adicione um `x-casaos.id` estável a cada aplicação.
4. Normalize chaves locale, como `en_us`, para `en_US`.
5. Normalize as categorias das aplicações segundo a lista v2.
6. Adicione `store-config.json` e `supported-languages.json`.
7. Adicione campos visuais v2 opcionais, como `version`, `update_at` e `release_notes`, quando forem úteis.
8. Compile `dist/` v2.
9. Continue a compilar o zip v1 se ainda suportar clientes legados.

## Padrão de compatibilidade

O repositório atual compila ambos os formatos:

- v2: `dist/store.json`, `dist/index.json`, `dist/apps/<app-id>/...`
- v1: `dist/store/main.zip`

Aqui, `<app-id>` é o valor normalizado do `x-casaos.id` superior de cada aplicação.

Este é o padrão de migração mais seguro para lojas existentes. Os clientes novos podem subscrever o URL estático v2, enquanto os clientes antigos podem continuar a utilizar o artefacto v1 até decidir deixar de o suportar.

## O que pode permanecer

Estes ficheiros ou diretórios da era v1 podem permanecer quando ainda precisar de compatibilidade:

- `Apps/`
- configuração de execução existente do Compose
- recursos, como ícones, miniaturas e capturas
- `category-list.json` e `recommend-list.json` se o empacotamento v1 ainda os utilizar
- passos do workflow de empacotamento v1

A compilação v2 não exige que escreva manualmente os ficheiros em `dist/`.

## O que tem de mudar

No mínimo, v2 precisa de:

- `store-config.json` na raiz
- `supported-languages.json` na raiz
- `x-casaos.id` superior no Compose de cada aplicação
- categorias v2 suportadas
- chaves locale normalizadas, como `en_US`, `zh_CN` e `de_DE`
- um workflow de compilação e publicação v2

## Versão e outros campos visuais adicionados em v2

A migração pode terminar depois das alterações obrigatórias acima. No entanto, `version` é obrigatório na nova loja. Os restantes campos melhoram as páginas de detalhe, as listagens e a apresentação das atualizações.

Adicione estes campos ao bloco superior `x-casaos` quando as informações estiverem disponíveis:

| Campo | Tipo de origem | Nota de migração |
|---|---|---|
| `version` | `string` | Novo e obrigatório. Utilizado para controlo de versão, comunicação de atualizações e uma apresentação mais rica. |
| `update_at` | `string` | Novo e opcional. Data de atualização, recomendada como `YYYY-MM-DD`, por exemplo `"2026-03-01"`. |
| `release_notes` | `object` | Novo e opcional. Notas indexadas por locale na origem; cada valor é texto simples. A saída utiliza `release_note`. |
| `website` | `string` | Novo e opcional. URL do site oficial para uma apresentação mais completa. |
| `repo` | `string` | Novo e opcional. URL do repositório de origem para uma apresentação mais completa. |
| `support` | `string` | Novo e opcional. URL de suporte para uma apresentação mais completa. |
| `docs` | `string` | Novo e opcional. URL da documentação para uma apresentação mais completa. |

Exemplo:

```yaml
x-casaos:
  version: "1.0.0"
  update_at: "2026-03-01"
  release_notes:
    en_US: "First v2-compatible release."
  website: "https://example.com"
  repo: "https://github.com/example/myapp"
  support: "https://github.com/example/myapp/issues"
  docs: "https://docs.example.com"
```

## Páginas seguintes

1. [Checklist de alterações mínimas](./app-store-v1-v2-migration-checklist)
2. [Configuração da loja](./app-store-config)
3. [Compose e x-casaos](./app-store-compose-x-casaos)
4. [Saída da compilação](./app-store-build-output)
5. [Reutilizar as ações oficiais](./app-store-github-actions)
