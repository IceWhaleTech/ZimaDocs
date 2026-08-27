---
title: FAQ para programadores de App Store
seo_title: "FAQ de App Store Docker ZimaOS para servidores self-hosted"
description: "Respostas sobre IDs Docker, localização, compilações, alojamento, URLs de CDN e compatibilidade v1 em App Stores ZimaOS e homelab."
type: Docs
author: IceWhaleTech
tip: Não elimine este bloco de front matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Estas respostas abrangem perguntas comuns dos responsáveis por App Stores Docker e self-hosted para ZimaOS, servidores domésticos, homelabs e ambientes NAS OS.

Esta página reúne respostas curtas a perguntas recorrentes sobre lojas que utilizam o protocolo v2, migração, alojamento e compatibilidade.

## Posso utilizar o mesmo ID de aplicação que a loja oficial?

Sim. As aplicações da loja oficial e das lojas de terceiros são isoladas no ZimaOS e podem coexistir mesmo quando o `id` de origem é igual.

Numa loja de terceiros, continue a escolher IDs estáveis em formato de domínio inverso para que os seus utilizadores recebam atualizações previsíveis.

## O que acontece se outra loja de terceiros utilizar o mesmo ID que a minha?

O ZimaOS isola as instalações pelo contexto da loja, pelo que IDs de origem idênticos em lojas diferentes não colidem ao nível do projeto Docker.

## Preciso de `supported-languages.json`?

Sim, para a estrutura de origem v2 deste repositório. Declara os locales candidatos que a compilação deve considerar.

Não cria automaticamente saída localizada por si só. Os ficheiros específicos de locale só são emitidos quando existem campos localizados correspondentes nos ficheiros de origem.

## Preciso de executar o script de compilação?

Sim. A compilação transforma os ficheiros de origem na saída de protocolo consumida pelos clientes:

- `store-config.json` em `store.json`
- Compose de origem em Compose compilado e `meta.json`
- listagens de toda a loja com `content_hash`
- recursos otimizados e saídas específicas de locale

## Que problemas são avisos e quais fazem o workflow falhar?

A ação de compilação tenta continuar a processar aplicações independentes para que o resumo apresente vários problemas numa única execução.

Avisos que não fazem a compilação v2 falhar:

- ausência de `supported-languages.json`: a compilação recorre a `en_US`
- ausência de `store-config.json`: a saída das aplicações ainda pode ser compilada, mas `store.json` é ignorado
- diretórios de aplicações sem `x-casaos` superior: a aplicação é ignorada
- limites do registo, falhas ao fixar o digest ou ao estimar o tamanho da imagem: a aplicação continua a ser compilada quando possível e o problema é comunicado como aviso
- falhas na otimização de imagens ou na conversão de SVG para PNG alternativo: o recurso original é mantido quando possível e o aviso aparece nos logs
- `x-casaos.version` não semver: a versão é omitida em `index.json`

Erros recolhidos por aplicação que fazem a compilação v2 falhar depois de as restantes aplicações serem processadas:

- metadados de aplicação inválidos, incluindo `x-casaos.id` ausente ou inválido
- YAML de aplicação inválido
- ícone, miniatura ou captura referenciados em falta
- arquitetura declarada não suportada pela imagem do contentor
- outras falhas de processamento de Compose, metadados, recursos ou registo ao nível da aplicação

Erros que interrompem a compilação globalmente:

- `base-url` inválido
- ausência do diretório `Apps/`
- `store-config.json` ou `store_id` inválidos
- JSON inválido em `supported-languages.json`
- falhas na preparação das dependências antes de o script de compilação iniciar

## Onde posso ler o resumo da compilação?

Abra a execução do GitHub Actions, escolha o job de compilação ou validação e leia o resumo no topo da página. Este repositório escreve o resumo a partir de relatórios JSON estruturados.

O relatório original também é carregado como artefacto do workflow, por exemplo `build-v2-report`, `build-v2-validation-report` ou `validation-report`.

## Posso alojar a minha loja noutro local além do GitHub Pages?

Sim. Qualquer alojamento estático HTTPS funciona, desde que os ficheiros gerados estejam acessíveis.

## Tenho de utilizar o jsDelivr?

Não. `jsDelivr` é apenas um caminho de CDN possível. Qualquer `base-url` correto é aceitável.

## Porque é importante o `base-url`?

Porque os dados de listagem gerados contêm caminhos de recursos e ficheiros de aplicações que precisam de um prefixo de host público resolvível.

Defina-o como o URL público final onde `dist/` é servido.

## Posso manter a compatibilidade v1?

Sim. Continue a produzir o artefacto legado:

```text
dist/store/main.zip
```

O repositório oficial compila os ficheiros estáticos v2 e depois compila este zip v1 a partir da mesma árvore de origem.

## Qual é a estrutura mínima viável de uma loja?

```text
my-appstore/
├── Apps/
│   └── MyApp/
│       ├── docker-compose.yml
│       └── icon.svg
├── store-config.json
└── supported-languages.json
```

Adicione `scripts/build_dist.sh` se quiser um auxiliar local. A CI pode chamar diretamente `IceWhaleTech/build-appstore-action`.
