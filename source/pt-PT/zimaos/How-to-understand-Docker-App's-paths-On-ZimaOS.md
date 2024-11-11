---
title: Como entender os caminhos das Apps Docker no ZimaOS
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser removido, a descrição é uma descrição do artigo, se não for preenchida, o conteúdo será cortado na primeira parte do texto
---
# Docker e ZimaOS
Docker é uma plataforma que permite aos usuários automatizar a implantação, escalabilidade e gerenciamento de aplicações em contêineres leves. Esses contêineres agrupam uma aplicação com todas as suas dependências, garantindo um desempenho consistente em vários ambientes. A eficiência do Docker reside na sua capacidade de isolar aplicações, tornando-as mais portáteis e escaláveis.

![](https://manage.icewhale.io/api/static/docs/1722494286724_image.png)
O ZimaOS é realmente impressionante quando falamos sobre aplicações Docker, agilizando o processo com apenas alguns cliques. O ZimaOS também é um divisor de águas para entusiastas de NAS, usuários profissionais e estúdios. Sua interface intuitiva simplifica o backup e o gerenciamento de dados.

![](https://manage.icewhale.io/api/static/docs/1722494305565_image.png)
Mas você realmente entende o caminho ao usar aplicações Docker no ZimaOS? Consegue distinguir entre o caminho do ZimaOS e o caminho das aplicações Docker?

# Como o Docker Organiza os Caminhos
Quando você executa um contêiner Docker, ele opera dentro do seu próprio sistema de arquivos, separado do sistema hospedeiro. Aqui está uma visão geral de como o Docker organiza os caminhos:

- Sistema de Arquivos do Contêiner: Dentro de um contêiner Docker, o sistema de arquivos é isolado da máquina host. As aplicações em execução em um contêiner veem seu próprio sistema de arquivos raiz, que normalmente começa em /. Por exemplo, se você tiver uma aplicação que armazena dados em /app/data dentro do contêiner, esse caminho existe exclusivamente dentro do sistema de arquivos desse contêiner.

- Volumes: Para persistir dados além do ciclo de vida de um contêiner, o Docker usa volumes. Volumes são diretórios ou arquivos fora do sistema de arquivos do contêiner, geralmente localizados no sistema hospedeiro, e podem ser compartilhados entre contêineres. Eles são frequentemente montados em contêineres em caminhos específicos.

![](https://manage.icewhale.io/api/static/docs/1722494354267_image.png)
Existem outros modos de compartilhamento de dados, que você pode aprender aqui.

# O Exemplo do Plex
![](https://manage.icewhale.io/api/static/docs/1722494383898_image.png)
Vamos pegar o Plex, uma popular aplicação de servidor de mídia, como exemplo para entender como os caminhos são organizados dentro do ZimaOS utilizando Docker.

**Aplicação Docker**: O Plex é distribuído como uma aplicação Docker na loja de aplicativos do ZimaOS. Quando você instala o Plex na loja de aplicativos do ZimaOS, o ZimaOS especificará vários caminhos para diversos diretórios:

- /config no contêiner: este diretório contém os arquivos de configuração do Plex. No ZimaOS, seu caminho de volume é /DATA/AppData/plex/config no ZimaOS, que é montado no /config do contêiner para garantir que as configurações persistam entre reinicializações do contêiner.

- /media no contêiner: é aqui que o Plex acessa seus arquivos de mídia. Além disso, o caminho do volume dos arquivos de mídia é /DATA/Media no ZimaOS e é montado no /media do contêiner.

Lembre-se de que queremos os arquivos armazenados no host. Dessa forma, mesmo que um contêiner seja parado ou recriado, os dados permanecem intactos.
![](https://manage.icewhale.io/api/static/docs/1722494441184_image.png)
Você pode encontrar a configuração detalhada clicando nas Configurações do Plex. Além disso, nesta página, o caminho do volume pode ser facilmente modificado clicando no ícone cinza ao lado do caminho do volume.

![](https://manage.icewhale.io/api/static/docs/1722494459333_image.png)
Ao entender os caminhos do Docker e como eles se integram com aplicações como o Plex, entusiastas de NAS e Homelabbers podem gerenciar suas aplicações de forma eficiente, combinando a flexibilidade da contenção com a confiabilidade do armazenamento persistente.