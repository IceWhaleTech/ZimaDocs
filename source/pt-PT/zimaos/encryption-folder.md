---
title: Pasta de Criptografia no ZimaOS
description: Saiba como a Pasta de Criptografia do ZimaOS protege seus dados privados com criptografia AES-256-GCM, sistema de arquivos Zima-OFS e design de segurança avançado para iniciantes e desenvolvedores.
type: Docs
author: icewhale123456
tip: A formatação fixa da barra superior não deve ser removida. A descrição é o resumo do artigo, caso não seja preenchida, será extraído o primeiro parágrafo do conteúdo.
permalink: /pt-PT/zimaos/folder-encryption.html
---
## Pasta de Criptografia no ZimaOS
A partir da versão **v1.5.4**, o ZimaOS oferece um poderoso recurso de **Pasta de Criptografia**, projetado para proteger seus dados mais sensíveis.  
Este documento explica o que é a pasta de criptografia, por que ela é segura e como o ZimaOS garante a privacidade por design—dando uma visão clara sobre a tecnologia e engenharia por trás disso.

## O que é uma Pasta de Criptografia?
A **Pasta de Criptografia** no ZimaOS é uma solução completa que equilibra **proteção de privacidade**, **eficiência de desempenho** e **flexibilidade de engenharia**.

Ela permite que você armazene dados altamente sensíveis—como documentos pessoais, backups, credenciais ou arquivos confidenciais de projetos—em um espaço protegido, sem se preocupar com acessos não autorizados ou ataques de força bruta.

![Imagem de Visão Geral da Pasta de Criptografia](https://manage.icewhale.io/api/static/docs/1766562591795_image.png)

## Por que a Pasta de Criptografia é Segura?

O ZimaOS usa um **sistema de arquivos desenvolvido internamente baseado no Zima-OFS**, combinado com **criptografia AES-256-GCM**, para proteger seus dados tanto em repouso quanto em tempo de execução.

Cada objeto dentro do balde criptografado é processado com **criptografia e descriptografia em fluxo**, garantindo **proteção em duas camadas** tanto para dados estáticos quanto dinâmicos.

Abaixo estão os principais recursos de segurança e engenharia:

### 📦 Experiência de Diretório Original
- A pasta de criptografia mantém o nome original do diretório.
- Externamente, ela se comporta como uma pasta normal.
- Internamente, todos os dados criptografados e metadados são gerenciados através de um diretório de controle oculto.

### ⏱️ Design Orientado ao Desempenho
- Múltiplos objetos pequenos são agregados em blocos de escrita sequenciais.
- Isso reduz a sobrecarga de metadados e operações de I/O aleatórias.
- Combinado com a desfragmentação em segundo plano, o desempenho geral é significativamente melhorado.

### ⚡ Otimização de Escrita em Lote
- O cliente suporta envio em lote de operações de arquivos.
- O servidor combina e processa as operações juntas, reduzindo a sobrecarga de transações e viagens de rede.

### 🧩 Fragmentação de Arquivos Grandes
- Arquivos que excedem um limite definido são automaticamente divididos.
- Cada fragmento é criptografado de forma independente e escrito em paralelo.
- Isso permite maior taxa de transferência e recuperação parcial em caso de interrupção.

### 🔄 Reconhecimento Automático entre Dispositivos
- Um arquivo de identificador oculto é armazenado no diretório raiz.
- Todos os parâmetros de criptografia são registrados nele.
- Isso permite que as pastas criptografadas sejam reconhecidas automaticamente ao serem movidas entre dispositivos.

### 🔐 Bloqueio Automático Temporizado
- Cada sessão de montagem inclui um temporizador de contagem regressiva.
- Suporta lembretes visuais, bloqueio manual e desmontagem automática.
- Impede exposição prolongada causada por sessões desbloqueadas esquecidas.

### ❌ Não Recuperabilidade por Design
- As chaves de metadados do balde existem **somente nos arquivos de configuração originais**.
- Reconstruir o banco de dados ou reinstalar o sistema **não pode restaurar o acesso**.
- Isso impõe garantias rigorosas de privacidade e destaca a importância de backups adequados.

  ![Imagem da Arquitetura de Criptografia](https://manage.icewhale.io/api/static/docs/1766563539465_image.png)

## FAQ

### 1. Por que a pasta de criptografia é bloqueada novamente após reiniciar o ZimaOS?

O ZimaOS **não armazena arquivos de configuração de criptografia internamente**.  
Após a reinicialização do sistema, todas as pastas criptografadas são automaticamente **bloqueadas e desmontadas** para garantir a máxima segurança dos dados.

Esse comportamento impede a exposição acidental dos dados causada por reinicializações do sistema ou acessos não supervisionados.

### 2. Por que ninguém pode recuperar os dados se a senha e o arquivo de chave forem perdidos?

Quando uma pasta de criptografia é criada, os arquivos de configuração e chave são gerados **apenas uma vez**.  
Após isso, eles devem ser armazenados com segurança pelo usuário.

O ZimaOS **não faz upload**, **não faz backup** nem **mantém quaisquer chaves de criptografia de usuários** ou **dados privados**.  
Se tanto a senha quanto o arquivo de chave forem perdidos, **os dados se tornam permanentemente inacessíveis**, até mesmo para a equipe do ZimaOS.

Essa é uma escolha de design intencional para garantir uma verdadeira proteção de privacidade de ponta a ponta.
