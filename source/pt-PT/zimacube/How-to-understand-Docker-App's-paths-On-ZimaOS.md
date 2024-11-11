---
title: Como entender os caminhos das aplicações Docker no ZimaOS
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser removido, a descrição é a descrição do artigo, se não preenchida, será cortada a partir do primeiro parágrafo.
---
# Docker e ZimaOS
Docker é uma plataforma que permite aos usuários automatizar a implantação, escalonamento e gerenciamento de aplicações em contêineres leves. Esses contêineres reúnem uma aplicação com todas as suas dependências, garantindo desempenho consistente em vários ambientes. A eficiência do Docker reside em sua capacidade de isolar aplicações, tornando-as mais portáteis e escaláveis.

![](https://manage.icewhale.io/api/static/docs/1722494286724_image.png)
O ZimaOS é realmente impressionante quando falamos de aplicações Docker, simplificando o processo com apenas alguns cliques. O ZimaOS também é um divisor de águas para entusiastas de NAS, usuários profissionais e usuários de estúdio. Sua interface intuitiva simplifica o backup e o gerenciamento de dados.

![](https://manage.icewhale.io/api/static/docs/1722494305565_image.png)
Mas você realmente entende o caminho ao utilizar aplicações Docker no ZimaOS? Você consegue distinguir entre o caminho do ZimaOS e o caminho das aplicações Docker?

# Como o Docker Organiza Caminhos
Quando você executa um contêiner Docker, ele opera dentro de seu próprio sistema de arquivos, separado do sistema host. Aqui está uma visão geral de como o Docker organiza caminhos:

- Sistema de Arquivos do Contêiner: Dentro de um contêiner Docker, o sistema de arquivos está isolado da máquina host. Aplicações executando em um contêiner veem seu próprio sistema de arquivos raiz, que geralmente começa em /. Por exemplo, se você tem uma aplicação que armazena dados em /app/data dentro do contêiner, esse caminho existe exclusivamente dentro do sistema de arquivos desse contêiner.

- Volumes: Para persistir dados além do ciclo de vida de um contêiner, o Docker utiliza volumes. Volumes são diretórios ou arquivos fora do sistema de arquivos do contêiner, geralmente localizados no sistema host, e podem ser compartilhados entre contêineres. Eles são frequentemente montados em contêineres em caminhos específicos.

![](https://manage.icewhale.io/api/static/docs/1722494354267_image.png)
Existem outros modos de compartilhamento de dados, que você pode aprender aqui.

# O Exemplo do Plex
![](https://manage.icewhale.io/api/static/docs/1722494383898_image.png)
Vamos usar o Plex, uma popular aplicação de servidor de mídia, como exemplo para entender como os caminhos são organizados dentro do ZimaOS utilizando Docker.

**Aplicação Docker**: O Plex é distribuído como uma aplicação Docker na loja de aplicativos do ZimaOS. Quando você instala o Plex a partir da loja de aplicativos do ZimaOS, o ZimaOS especificará vários caminhos para diversos diretórios:

- /config no contêiner: este diretório armazena os arquivos de configuração do Plex. No ZimaOS, seu caminho de volume é /DATA/AppData/plex/config no ZimaOS, que é montado no /config do contêiner para garantir que as configurações persistam entre restarts do contêiner.

- /media no contêiner: é aqui que o Plex acessa seus arquivos de mídia. Além disso, o caminho de volume dos arquivos de mídia é /DATA/Media no ZimaOS e é montado no /media do contêiner.

Tenha em mente que queremos os arquivos armazenados no host. Dessa forma, mesmo que um contêiner seja parado ou recriado, os dados permanecem intactos.
![](https://manage.icewhale.io/api/static/docs/1722494441184_image.png)
Você pode encontrar a configuração detalhada clicando em Configurações do Plex. Além disso, nesta página, o caminho do volume pode ser facilmente modificado clicando no ícone cinza ao lado do caminho do volume.

![](https://manage.icewhale.io/api/static/docs/1722494459333_image.png)
Ao entender os caminhos do Docker e como eles se integram a aplicações como o Plex, entusiastas de NAS e usuários de Homelab podem gerenciar suas aplicações de maneira eficiente, combinando a flexibilidade da contêinerização com a confiabilidade do armazenamento persistente.