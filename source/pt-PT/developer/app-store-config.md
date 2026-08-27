---
title: Configuração da App Store
seo_title: "Configuração da App Store ZimaOS para aplicações Docker e self-hosted"
description: "Configure a identidade, localização, responsável e URLs públicos de uma App Store Docker para servidores domésticos e homelabs ZimaOS."
type: Docs
author: IceWhaleTech
tip: Não elimine este bloco de front matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Num catálogo de homelab público ou privado, mantenha a identidade da loja estável depois de os utilizadores de servidores domésticos e NAS OS se subscreverem.

`store-config.json` define a identidade da loja ao nível do repositório.

## Objetivo

O script de compilação lê `store-config.json` e gera:

- `dist/store.json`
- `dist/store.{locale}.json` para os locales definidos explicitamente nos campos de texto localizado da loja

## Exemplo mínimo

```json
{
  "version": 2,
  "store_id": "my-awesome-apps",
  "name": {
    "en_US": "My Awesome Apps",
    "zh_CN": "我的应用商店"
  },
  "description": {
    "en_US": "A collection of apps for home server enthusiasts"
  },
  "maintainer": "your-github-username",
  "url": "https://github.com/username/my-appstore"
}
```

## Campos

| Campo | Tipo | Obrigatório | Notas |
|------|------|----------|------|
| `version` | `int` | Sim | Tem de ser `2` |
| `store_id` | `string` | Sim | Identificador único da loja |
| `name` | `object` | Sim | Nome visível indexado por locale |
| `description` | `object` | Não | Descrição da loja indexada por locale |
| `maintainer` | `string` | Sim | Nome do responsável ou proprietário |
| `url` | `string` | Não | URL do projeto ou página inicial |
| `icon` | `string` | Não | URL do ícone da loja |

## Referência dos campos

### `version`

- obrigatório
- tem de ser o número inteiro `2`
- identifica a versão do protocolo de origem utilizada pelo processo de compilação

### `store_id`

- obrigatório
- identidade principal da loja
- deve permanecer estável depois de os utilizadores começarem a subscrever
- deve ser escolhido como um valor globalmente distinto

### `name`

- obrigatório
- tem de ser um objeto indexado por locale, não uma string simples
- deve incluir sempre `en_US`
- torna-se o nome visível no `store.json` gerado

### `description`

- opcional
- objeto indexado por locale
- útil para o texto de apresentação da loja mostrado nos clientes

### `maintainer`

- obrigatório
- string simples com o responsável, proprietário ou organização da loja

### `url`

- opcional
- URL público do projeto, repositório ou página inicial

### `icon`

- opcional
- URL público do ícone ao nível da loja
- ao contrário dos recursos por aplicação, não é gerado pelo pipeline de recursos do diretório de uma aplicação

## Regras de `store_id`

- apenas letras, dígitos, `.`, `_` e `-`
- são permitidas maiúsculas na entrada, mas são normalizadas para minúsculas
- tem de conter pelo menos uma letra ou um dígito
- tem de ser globalmente distinto
- não utilize valores reservados, como `zimaos-appstore`

## Expectativas de validação

Trate estas regras como o contrato da origem:

- o ficheiro tem de ser JSON válido
- `version` tem de corresponder à versão ativa do protocolo
- `name` deve ser um objeto
- as chaves locale devem utilizar o formato `ll_CC`
- os campos URL já devem ser públicos e acessíveis

## Comportamento da localização

O script de compilação resolve o texto localizado ao nível da loja a partir de:

- `name`
- `description`

Só são gerados ficheiros `store.{locale}.json` para locales definidos explicitamente nestes campos.

## Comportamento da saída

O script de compilação gera sempre um ficheiro para o locale predefinido:

- `dist/store.json`

Também gera ficheiros com sufixo de locale apenas quando esse locale está explicitamente presente no texto localizado da loja:

- `dist/store.zh_CN.json`
- `dist/store.de_DE.json`

Isto mantém a saída pequena sem deixar de suportar metadados localizados da loja.

## Mapeamento da entrada para a saída

| Campo de origem | Localização gerada | Notas |
|---|---|---|
| `version` | `store.json.version` | mantido como metadado do protocolo |
| `store_id` | `store.json.store_id` | normalizado durante a compilação, se necessário |
| `name.<locale>` | `store.{locale}.name` | resolvido por ficheiro de locale |
| `description.<locale>` | `store.{locale}.description` | gerado apenas para locales explícitos |
| `maintainer` | `store.json.maintainer` | copiado como string simples |
| `url` | `store.json.url` | copiado como string simples |
| `icon` | `store.json.icon` | copiado como URL em string simples |

## Recomendações práticas

- Forneça sempre `name.en_US`
- Adicione `description` quando a loja precisar de uma introdução visível no cliente
- Mantenha `store_id` estável quando os utilizadores já subscreverem a loja

## Erros comuns

- escrever `name` como string simples em vez de um objeto indexado por locale
- alterar `store_id` depois de os clientes já utilizarem a loja
- utilizar chaves locale como `en_us` em vez de `en_US`
- assumir que todos os locales em `supported-languages.json` irão produzir automaticamente `store.{locale}.json`
