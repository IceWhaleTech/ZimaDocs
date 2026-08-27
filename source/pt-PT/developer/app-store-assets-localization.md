---
title: Recursos e localização da App Store
seo_title: "Recursos e localização de aplicações Docker para App Stores ZimaOS"
description: "Prepare ícones, miniaturas, capturas e metadados localizados para aplicações Docker self-hosted distribuídas através do ZimaOS e de outros NAS OS."
type: Docs
author: IceWhaleTech
tip: Não elimine este bloco de front matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Recursos e dados de locale consistentes ajudam as aplicações Docker self-hosted a serem apresentadas corretamente nas interfaces de servidores domésticos e NAS OS.

Esta página reúne dois comportamentos do protocolo que influenciam fortemente a saída gerada: o processamento de recursos e a expansão de texto localizado.

## Recursos

Todos os recursos compilados são escritos em `apps/{app-id}/assets/`.

`{app-id}` é o valor normalizado do `x-casaos.id` superior da origem.

### Formatos de origem suportados

| Recurso | Formatos de entrada | Comportamento da saída |
|------|---------------|----------------|
| `icon` | `.svg`, `.png`, `.jpg`, `.webp` | o SVG é preservado e pode receber um fallback PNG; os ícones raster são copiados |
| `thumbnail` | `.png`, `.jpg`, `.jpeg`, `.webp` | otimizado quando as ferramentas estão disponíveis; a extensão final segue a saída gerada |
| `screenshot-{n}` | `.png`, `.jpg`, `.jpeg`, `.webp` | otimizado quando as ferramentas estão disponíveis; a extensão final segue a saída gerada |

### Detalhes do comportamento dos recursos

#### `icon`

- esperado para todas as aplicações
- idealmente fornecido como `icon.svg`
- também pode produzir uma alternativa PNG quando as ferramentas estão disponíveis

#### `thumbnail`

- opcional
- utilizado sobretudo para uma apresentação mais rica da loja
- normalizado para um caminho de recurso compilado

#### `screenshot-{n}`

- opcional
- suporta várias capturas numeradas
- normalizado para caminhos de recursos compilados

## Recomendações para os recursos

- prefira `icon.svg` sempre que possível
- utilize uma miniatura dedicada para a apresentação na loja
- mantenha as capturas representativas da interface real

Os recursos raster que não são ícones são otimizados durante a compilação e podem ser redimensionados quando são demasiado largos.
Consoante a versão da ação de compilação e as ferramentas de imagem disponíveis, as miniaturas e capturas geradas podem manter a extensão de origem ou ser emitidas como ficheiros WebP otimizados. Utilize os caminhos escritos em `index.json` e `meta.json` como a saída autoritativa.

## Comportamento dos ícones

Os ícones aparecem em dois locais:

- nas listagens de aplicações, utilizando o caminho do ícone emitido em `index.json`
- na entrada do painel da aplicação instalada, utilizando `x-casaos.icon` no Compose compilado

Durante a compilação, o URL do ícone no Compose compilado é reescrito para o URL do recurso compilado sob o `--base-url` configurado.

## Chaves locale

As chaves locale devem utilizar o formato `ll_CC`:

- `en_US`
- `zh_CN`
- `de_DE`

O script de compilação normaliza automaticamente as chaves locale, mas os ficheiros de origem devem continuar a utilizar o formato esperado.

## Campos de origem da localização

Texto localizado ao nível da loja:

- `store-config.json.name`
- `store-config.json.description`

Texto localizado ao nível da aplicação:

- `x-casaos.title`
- `x-casaos.tagline`
- `x-casaos.description`
- `x-casaos.release_notes`
- valores indexados por locale em `x-casaos.tips`

## Saída multilingue

Os locales candidatos vêm de `supported-languages.json`.

Comportamento importante:

- a saída predefinida é sempre gerada
- os ficheiros específicos de locale só são gerados quando esse locale é definido explicitamente
- se `supported-languages.json` estiver ausente, apenas é gerada a saída `en_US`

## Regras de geração por locale

Pense na geração por locale em duas fases:

1. `supported-languages.json` declara quais os locales candidatos.
2. Os campos de localização da origem determinam quais os ficheiros específicos de locale que são efetivamente gerados.

Assim, um locale pode aparecer na lista de candidatos e não produzir saída se nenhum campo da loja ou da aplicação o definir explicitamente.

## Exemplo

Origem:

```yaml
title:
  en_US: My App
  zh_CN: 我的应用
```

Saída possível:

- `dist/index.json`
- `dist/index.zh_CN.json`
- `dist/apps/com.example.myapp/meta.json`
- `dist/apps/com.example.myapp/meta.zh_CN.json`

Aqui, `com.example.myapp` representa o `x-casaos.id` de origem normalizado.

## Erros comuns

- esperar que `supported-languages.json` crie ficheiros localizados por si só
- assumir que os recursos são duplicados por locale
- esquecer que os ícones afetam tanto a listagem como o painel da aplicação instalada
