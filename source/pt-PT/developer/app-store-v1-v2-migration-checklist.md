---
title: Checklist de migração da App Store de v1 para v2
seo_title: "Checklist de migração da App Store ZimaOS de v1 para v2"
description: "Siga o checklist de alterações mínimas para migrar uma App Store Docker self-hosted de v1 para v2 no ZimaOS, servidores domésticos e homelabs."
type: Docs
author: IceWhaleTech
tip: Não elimine este bloco de front matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Este checklist mantém uma App Store Docker self-hosted compatível enquanto migra o seu catálogo de servidor doméstico ou homelab de v1 para v2.

Utilize-o quando já tiver uma loja v1 e quiser aplicar o menor conjunto prático de alterações para suportar v2.

Objetivo: um repositório de origem, saída estática v2 e compatibilidade opcional com o zip v1.

## 1. Manter a árvore de aplicações existente

Mantenha a estrutura atual:

```text
Apps/
└── MyApp/
    ├── docker-compose.yml
    ├── icon.png
    ├── thumbnail.png
    └── screenshot-1.png
```

Pode adicionar ícones SVG ou recursos mais limpos posteriormente. A substituição de recursos não é o primeiro bloqueio da migração.

## 2. Adicionar `store-config.json`

Crie este ficheiro na raiz do repositório:

```json
{
  "version": 2,
  "store_id": "your-store-id",
  "name": {
    "en_US": "Your Store Name"
  },
  "maintainer": "your-name",
  "url": "https://github.com/username/your-appstore"
}
```

Verificações:

- `version` é `2`
- `store_id` é globalmente distinto e estável
- `store_id` utiliza apenas letras, dígitos, pontos (`.`), underscores (`_`) e hífenes (`-`)
- `name.en_US` está presente

## 3. Adicionar `supported-languages.json`

Crie este ficheiro na raiz do repositório:

```json
[
  "en_US"
]
```

Adicione todos os locales que os metadados de origem possam definir, como `zh_CN` ou `de_DE`.

## 4. Adicionar `x-casaos.id` a cada aplicação

Cada aplicação precisa de um ID estável no nível superior:

```yaml
x-casaos:
  id: com.example.myapp
```

Verificações:

- cada `docker-compose.yml` de origem inclui `x-casaos.id` no nível superior
- utiliza um formato de domínio inverso, como `com.example.myapp`
- o ID tem pelo menos dois segmentos não vazios separados por pontos
- utiliza apenas letras, dígitos, pontos (`.`), underscores (`_`) e hífenes (`-`)

## 5. Normalizar a estrutura de metadados legada

Limpezas comuns de v1 para v2:

| Origem legada | Origem v2 |
|---|---|
| `en_us` | `en_US` |
| `zh_cn` | `zh_CN` |
| metadados visuais em `appfile.json` | campos superiores `x-casaos` |

Não precisa de manter `appfile.json` para v2. Se o empacotamento v1 ainda o utilizar, mantenha-o apenas para o pipeline legado.

## 6. Normalizar as categorias

Defina `x-casaos.category` de cada aplicação como um destes valores:

`Media`, `Productivity`, `Home`, `Networking`, `AI`, `Finance`, `Social`, `Developer`, `Others`

Por exemplo, valores antigos `Utilities` normalmente precisam de passar para a categoria v2 mais próxima, muitas vezes `Productivity` ou `Others`.

## 7. Compilar a saída v2

```bash
BASE_URL="https://your-store-domain" \
./scripts/build_dist.sh
```

Verificações:

- `dist/store.json` existe
- `dist/index.json` existe
- `dist/apps/<app-id>/docker-compose.yml` existe, sendo `<app-id>` o `x-casaos.id` normalizado
- `dist/apps/<app-id>/meta.json` existe
- os itens da listagem gerada incluem `id`, `compose_url`, `meta_url` e `content_hash`

## 8. Adicionar a versão e outros campos visuais

`version` é obrigatório na nova loja, mesmo que os repositórios de origem antigos não tivessem um campo equivalente.

Os restantes campos não são necessários para compatibilidade, mas melhoram a experiência da loja:

| Campo | Tipo | Nota |
|---|---|---|
| `version` | `string` | Novo e obrigatório. As futuras decisões de atualização dependem deste campo. Utilize um valor semver sempre que possível. |
| `update_at` | `string` | Nova data de atualização opcional. Utilize `YYYY-MM-DD` quando possível. |
| `release_notes` | `object` | Novas notas opcionais indexadas por locale. Cada valor é texto simples. |
| `website` | `string` | Novo URL opcional do site oficial. |
| `repo` | `string` | Novo URL opcional do repositório de origem. |
| `support` | `string` | Novo URL opcional de suporte. |
| `docs` | `string` | Novo URL opcional de documentação. |

## 9. Manter a compatibilidade v1, se necessário

Se os clientes antigos ainda dependerem da sua loja v1, mantenha um passo no workflow que compile:

```text
dist/store/main.zip
```

O repositório oficial faz isso executando a compilação v1 depois da compilação v2. Assim, uma única árvore de origem serve:

- consumidores da loja estática v2
- consumidores do zip v1 legado

## 10. Implementar os ficheiros gerados

Publique `dist/` num alojamento estático. O URL adicionado pelos utilizadores deve corresponder ao `base-url` da compilação.

## Verificação final antes da release

- [ ] `store-config.json` está presente e é válido
- [ ] `supported-languages.json` está presente e é válido
- [ ] todas as aplicações têm um `x-casaos.id` válido
- [ ] as chaves locale antigas estão normalizadas
- [ ] `x-casaos.version` está presente e atualizado para esta release
- [ ] foram adicionados campos visuais opcionais onde são úteis
- [ ] todas as categorias utilizam valores v2
- [ ] `dist/store.json` e `dist/index.json` estão acessíveis
- [ ] `dist/store/main.zip` é compilado se a compatibilidade v1 ainda for necessária
