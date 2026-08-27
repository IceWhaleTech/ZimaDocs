---
title: "Guia do Immich: passo a passo para uma cópia de segurança eficiente das fotografias"
seo_title: "Immich no ZimaOS: guia de cópia de segurança e armazenamento de fotografias"
description: "Configure o Immich no ZimaOS para efetuar cópias automáticas de fotografias e vídeos. Guia passo a passo sobre instalação, sincronização com a aplicação móvel, gestão de álbuns e pesquisa inteligente."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

## Introdução
Com uma interface Web simples e funcionalidades inteligentes, o Immich oferece uma plataforma perfeita para organizar e partilhar as suas fotografias e vídeos. O ZimaOS, com a sua utilização intuitiva e poderosas capacidades de proteção de dados, proporciona uma experiência revolucionária a utilizadores de NAS, profissionais e estúdios criativos. Simplifica a instalação de aplicações Docker, que pode ser concluída com apenas alguns cliques.
Ao combinar o Immich com o ZimaOS, obtém uma solução potente e fácil de utilizar. Vamos explorar como aproveitar facilmente a conveniência do Immich no ZimaOS.
![](https://manage.icewhale.io/api/static/docs/1730269774466_image.png)
## Instalação e configuração
1. **Transferir e instalar a aplicação Immich**
Pode transferir a versão mais recente da aplicação Immich a partir da App Store do ZimaOS. Depois da transferência, faça duplo clique no ficheiro de instalação e siga as instruções apresentadas no ecrã para concluir o processo.
![](https://manage.icewhale.io/api/static/docs/1730269866832_copyImage.jpeg)![](https://manage.icewhale.io/api/static/docs/1730269868372_copyImage.png)
2. Criar uma conta de utilizador
Após a instalação, abra a aplicação. No ecrã inicial, selecione "Criar novo utilizador" e siga as indicações para introduzir as informações necessárias e concluir o registo.
![](https://manage.icewhale.io/api/static/docs/1730269926591_image.png)
![](https://manage.icewhale.io/api/static/docs/1730269940085_image.png)
Aceda à página principal:
![](https://manage.icewhale.io/api/static/docs/1730269963189_image.png)
3. Configurar a ligação ao servidor
Transfira e abra a aplicação Immich no telemóvel; neste exemplo, utilizamos um iPhone.
Introduza o endereço do servidor e o número da porta para iniciar sessão. Certifique-se de que ambos estão corretos.
![](https://manage.icewhale.io/api/static/docs/1730270062733_copyImage.png)![](https://manage.icewhale.io/api/static/docs/1730270082792_copyImage.jpeg)![](https://manage.icewhale.io/api/static/docs/1730270083467_copyImage.jpeg)
## Como utilizar
1. Iniciar a cópia de segurança
- Abra a página principal da aplicação Immich.
- Clique no botão "Cópia de segurança" e selecione as fotografias ou os vídeos que pretende copiar.
- Depois de selecionar os ficheiros, clique em "Iniciar cópia de segurança". A aplicação começará a enviá-los para o servidor.
![](https://manage.icewhale.io/api/static/docs/1730270241632_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270251463_image.png)
2. Ver os ficheiros copiados
Quando a cópia terminar, pode ver todas as fotografias e vídeos enviados na página principal da aplicação.
![](https://manage.icewhale.io/api/static/docs/1730270310188_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270325913_image.png)
## Funcionalidades avançadas: pesquisa por IA
A funcionalidade de reconhecimento facial do Immich utiliza tecnologia de IA avançada para identificar e classificar automaticamente as pessoas nas fotografias, melhorando significativamente a gestão e a pesquisa. Assim, pode percorrer facilmente coleções organizadas por pessoa.
![](https://manage.icewhale.io/api/static/docs/1730270365044_image.png)
Na interface principal, também pode introduzir palavras-chave na caixa de pesquisa. A IA ajuda a localizar rapidamente os ficheiros pretendidos, permitindo encontrar com precisão fotografias ou vídeos específicos guardados no servidor.
![](https://manage.icewhale.io/api/static/docs/1730270384165_image.png)
## Apresentação no mapa
O Immich também suporta marcações no mapa. Pode assinalar locais específicos para encontrar e consultar rapidamente todas as fotografias e vídeos captados nesse local.
![](https://manage.icewhale.io/api/static/docs/1730270408893_image.png)
## Definições avançadas
1. **Configurar as opções de cópia de segurança**
![](https://manage.icewhale.io/api/static/docs/1730270441373_image.png)
Na página "Opções de cópia de segurança", pode configurar as seguintes funcionalidades:
- **Cópia automática em primeiro plano**: quando ativada, a aplicação envia automaticamente novos ficheiros multimédia para o servidor sempre que a abrir.
- **Cópia automática em segundo plano**: permite que a aplicação funcione em segundo plano e copie novos ficheiros multimédia mesmo quando não está aberta.
- **Ignorar fotografias do iCloud**: permite optar por não enviar para o servidor as fotografias guardadas no iCloud.
- **Sincronizar álbuns**: permite sincronizar todos os vídeos e fotografias enviados com o álbum de cópia de segurança indicado.
Pode ajustar estas opções consoante as suas necessidades.
2. **Definições da localização dos ficheiros armazenados**
Nas definições, pode alterar o caminho utilizado para guardar os ficheiros.
![](https://manage.icewhale.io/api/static/docs/1730270501295_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270511744_image.png)
Ligação: como compreender a configuração dos caminhos: https://community.zimaspace.com/t/tutorial-how-to-understand-docker-apps-paths-on-zimaos-take-plex-as-an-example/3395
3. **Regras de nomenclatura dos ficheiros armazenados**
O modelo de armazenamento é uma ferramenta da aplicação Immich que define e normaliza o caminho de armazenamento e o nome dos ficheiros. Assim, pode personalizar a organização de acordo com as suas necessidades, facilitando a gestão e a pesquisa posteriores.
Para obter informações mais detalhadas, visite: https://immich.app/docs/administration/storage-template/
![](https://manage.icewhale.io/api/static/docs/1730270568147_image.png)
## Encontrar as fotografias copiadas
Se não tiver definido um modelo de armazenamento, consulte o caminho de armazenamento nas definições e abra-o, conforme indicado abaixo:
![](https://manage.icewhale.io/api/static/docs/1730270615131_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270625991_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270635201_image.png)
Depois de configurar um modelo de armazenamento, a organização e a pesquisa dos ficheiros de fotografias tornam-se mais intuitivas e práticas. Pode percorrer e encontrar os ficheiros diretamente através das categorias do modelo.
![](https://manage.icewhale.io/api/static/docs/1730270689535_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270699458_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270702487_image.png)
Com estes passos, pode encontrar facilmente as fotografias copiadas no ZimaOS, quer utilize o caminho predefinido ou um modelo de armazenamento personalizado.

## Mover os dados do Immich para um disco novo

a. Migração de dados
Nas Definições, clique em Migração de dados e selecione Migração da biblioteca. A Galeria, os Documentos, os conteúdos Multimédia e as Cópias de segurança serão migrados automaticamente para o destino.
![](https://manage.icewhale.io/api/static/docs/1730272017160_image.png)

b. Migração manual
Também pode copiar diretamente a pasta Gallery para o destino. Siga estes passos:
- Desative a aplicação Immich
- Copie a pasta Gallery para o destino
- Na aplicação, altere o diretório em Volumes do immich-server para o novo diretório
- Reinicie o Immich
![](https://manage.icewhale.io/api/static/docs/1730271838216_image.png)
