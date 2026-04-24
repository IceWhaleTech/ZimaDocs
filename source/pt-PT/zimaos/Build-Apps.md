---
title: Construir Aplicações
description:
type: "Docs"
tip: O formato fixo da barra superior não deve ser apagado. A descrição é o resumo do artigo. Caso não seja preenchido, será utilizada a primeira parte do conteúdo.
permalink: /pt-PT/zimaos/docker-app-publishing.html
---
# Manual de Adaptação de Aplicações Docker para ZimaOS
Como publicar aplicações no ZimaOS
1. Tutorial de publicação e adaptação de aplicações Docker
2. Tutorial de compilação e publicação de aplicações para PC
3. Tutorial de migração de aplicações para a nuvem

Checklist para aplicações Docker no ZimaOS e configuração recomendada

Marco modular: Priorizar as atualizações das aplicações sem reiniciar
## Julgamento da tendência da aplicação
> Prever preliminarmente o trabalho necessário para a adaptação da aplicação, se ela pode ser adaptada diretamente, se é necessário construir a imagem você mesmo, etc.

De maneira geral, o site oficial da aplicação pode ser dividido nas seguintes três tendências:
### Docker Auto-implantação
- Dificuldade: 🌟
- Características: O site oficial ou o GitHub priorizam fornecer opções de auto-implantação.
- Exemplos: LocalAI, OpenWebUI e Nextcloud, etc.
- Isso significa que o desenvolvedor dessa aplicação provavelmente desenvolveu e testou no ambiente de auto-implantação. Também implica que a aplicação possui experiência de auto-implantação tanto do desenvolvedor original quanto da comunidade, tornando-a geralmente mais fácil de adaptar.
- É muito provável que uma imagem AIO com configuração mínima seja fornecida diretamente, podendo então ser configurada facilmente.

### Auto-implantação para PC
- Dificuldade: 🌟🌟🌟
- Características: O site oficial ou o GitHub priorizam fornecer downloads para Win/Mac/Linux, mas a interface principal é fornecida por meio de WebUI.
- Exemplos: AUTOMATIC1111/stable-diffusion-webui
- Representa o processo de instalação dessa aplicação, que será verificado por desenvolvedores e pela comunidade. Porém, pode não haver uma imagem Docker pronta, pois isso não é uma prioridade no início do projeto.
- Caso não exista uma imagem Docker pronta, será relativamente fácil empacotá-la como uma imagem Docker, pois o processo de instalação não deverá apresentar grandes erros. Basta configurar o ambiente necessário e pré-instalar as dependências.

### Serviço em Nuvem
- Dificuldade: 🌟🌟🌟🌟🌟
- Características: O site oficial ou o GitHub recomendam o uso dos serviços de nuvem que oferecem, mas também fornecem uma opção de auto-implantação. Normalmente, a aplicação é descrita como uma plataforma XX completa que pode resolver diversas necessidades.
- Exemplos: Dify, TaskingAI, etc.
- Os desenvolvedores dessa aplicação geralmente priorizam o ambiente de implantação na nuvem, e provavelmente utilizam ambientes de orquestração de containers como o K8s. As opções de auto-implantação geralmente são configuradas com Docker Compose ou K8s. O início completo da aplicação envolve múltiplos serviços de containers e múltiplas imagens. Ao mesmo tempo, uma grande quantidade de variáveis de ambiente e até arquivos externos são necessários para o funcionamento correto da aplicação.
- Esse tipo de aplicação exige um esforço considerável para entender as relações entre os diversos serviços envolvidos no processo de inicialização, assim como a definição e configuração das variáveis de ambiente. Se isso exceder as capacidades do ZimaOS, construir a imagem por conta própria será relativamente difícil, pois será necessário entender as configurações específicas dos diversos stacks tecnológicos usados por esse programa.

## Entender os componentes da aplicação
> Analisar quais serviços duplicados a aplicação depende, o impacto de diferentes configurações e o que os usuários precisam se preocupar.

### Analisar os requisitos de serviço
Geralmente, cada aplicação tem seu front-end e back-end independentes, podendo depender de serviços comuns como:
- Diversos bancos de dados: mysql, redis, pg, etc.
- Diversas APIs compartilhadas:
  - LLMs: Ollama, LocalAI, LM Studio
  - ……

> Como os serviços compartilhados e dependências recomendadas/prefixadas não são suportados nesta fase,
Para Desenvolvedores de Aplicação / Adaptadores:
Considere dar prioridade às imagens AIO prontas para uso ou considere empacotar os serviços necessários em uma imagem ou compose.
Para Desenvolvedores do ZimaOS:
Considere suportar dependências recomendadas e pré-instaladas.

### Analisar os requisitos de armazenamento de dados
- Diretórios de arquivos temporários gerados durante a execução da aplicação
- Diretórios persistentes necessários quando a aplicação for restaurada/migrada
- Diretórios de arquivos que o usuário precisa gerenciar/utilizar

Após entender os requisitos claramente, realize o mapeamento de inicialização correspondente de acordo com a estrutura de diretórios definida pelo ZimaOS e forneça dicas apropriadas aos usuários sobre quais diretórios eles devem se preocupar.

### Analisar os requisitos de portas
- Quais são as portas dos serviços WebUI, HTTP/HTTPS
  - Geralmente, podem ser alocadas livremente pelo sistema, e alterações não devem afetar o uso normal
  - Algumas aplicações podem ter requisitos específicos para essas portas, que precisam ser identificados.
- Portas de API
  - Muitas portas de aplicações que expõem APIs são convencionais, e as portas originais devem ser usadas primeiro. A alocação automática pode ser considerada posteriormente.
  - Quando necessário, os usuários devem ser informados por meio de dicas.
  - Exemplo: 113114 para Ollama
- Quais são as portas que têm um propósito específico e devem existir, como DNS
  - Algumas portas têm propósitos específicos e devem ser alocadas, caso contrário, funções essenciais falharão
  - Exemplo: a porta DNS usada pelo adguard
- Portas auxiliares específicas da aplicação
  - Algumas portas devem ter um propósito específico, usadas para descoberta interna, etc.
  - Essas portas precisam usar as portas originais, caso contrário, as funções auxiliares falharão.

> Como o ZimaOS não suporta alocação flexível de portas nesta fase,
Para Desenvolvedores de Aplicação / Adaptadores:
Considere configurar as portas e dicas de acordo com as características da aplicação durante a adaptação.
Para Desenvolvedores do ZimaOS:
Considere implementar um mecanismo de alocação de portas definido.

### Analisar requisitos de dispositivos
- Requisitos de GPU
- Requisitos de CPU
- Requisitos de dispositivos USB
- …

Considere configurar os dispositivos necessários ao adaptar e se será possível recorrer à CPU quando a GPU não estiver disponível.

> Como o ZimaOS não suporta alocação flexível de dispositivos nesta fase,
Para Desenvolvedores de Aplicação / Adaptadores:
Considere configurar os dispositivos e dicas de acordo com as características da aplicação durante a adaptação.
Para Desenvolvedores do ZimaOS:
Considere implementar um mecanismo de alocação de dispositivos definido, além de um mecanismo de detecção e feedback para requisitos de dispositivos.

### Analisar requisitos de tempo de execução
- nvidia
- …

Este tipo é raro, mas é recomendado entender os requisitos de tempo de execução correspondentes ao adaptar, configurá-los e inseri-los nas dicas adequadas.

## Ler a solução oficial de auto-implantação
> Priorize o aprendizado das melhores práticas oficiais ao adaptar.

As soluções e documentos oficiais de auto-implantação geralmente contêm casos práticos e técnicas de implantação que podem ser lidos antecipadamente para acelerar a adaptação.

## Adaptado para o ZimaOS Docker App
> Agora você pode integrar as informações aprendidas e adaptá-las para o ZimaOS App.

Ao começar a escrever, você pode se referir aos arquivos previamente aplicados para iniciar:
https://github.com/IceWhaleTech/CasaOS-AppStore/tree/main/Apps

1. Escrever docker-compose.yaml
2. De acordo com a definição, adicione metadados da aplicação no campo x-casaos
- - O campo multilíngue deve incluir pelo menos o en_us, pois este é o campo fallback.
3. Prepare ícones e capturas de tela, e preencha os links correspondentes no campo x-casaos.
4. Teste a instalação
5. Envie para o GitHub

### Definição do Campo x-casaos
```language
x-casaos:
    architectures:                  # Lista de arquiteturas suportadas pela aplicação
        - amd64
        - arm
        - arm64
    main: syncthing                 # O nome do serviço principal sob `services`
    author: CasaOS team
    category: Backup
    description:                    # Suporte a múltiplos idiomas
        en_us: Syncthing é um programa de sincronização de arquivos contínua. Ele sincroniza arquivos entre dois ou mais computadores em tempo real, protegendo seus dados contra olhares curiosos. Seus dados pertencem apenas a você, e você tem o direito de escolher onde armazená-los, se deseja compartilhá-los com terceiros e como transferi-los pela Internet.
    developer: Syncthing
    icon: https://cdn.jsdelivr.net/gh/IceWhaleTech/CasaOS-AppStore@main/Apps/Syncthing/icon.png
    tagline:                        # Suporte a múltiplos idiomas
        en_us: Ferramenta de sincronização de arquivos gratuita, segura e distribuída.
    thumbnail: https://cdn.jsdelivr.net/gh/IceWhaleTech/CasaOS-AppStore@main/Apps/Jellyfin/thumbnail.jpg
    title:                          # Suporte a múltiplos idiomas
        en_us: Syn