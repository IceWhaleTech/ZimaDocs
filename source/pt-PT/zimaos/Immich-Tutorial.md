---
title: Guia do Immich： Passo a passo para backup eficiente de fotos!
description: 
type: "Docs"
tip: O formato fixo da barra superior não deve ser removido, a descrição é para descrever o artigo. Se não preenchido, será capturada a primeira parte do conteúdo.
---

## Introdução
O Immich, com sua interface web simples e recursos inteligentes, oferece uma plataforma perfeita para organizar e compartilhar suas preciosas fotos e vídeos. O ZimaOS, com sua operação intuitiva e poderosas capacidades de proteção de dados, traz uma experiência revolucionária para usuários de NAS, profissionais e estúdios criativos. Ele simplifica a instalação de aplicações Docker e pode ser concluído com apenas alguns cliques.
Combine o Immich com o ZimaOS e você terá uma solução poderosa e fácil de usar. Vamos explorar como aproveitar facilmente a conveniência do Immich no ZimaOS.
![](https://manage.icewhale.io/api/static/docs/1730269774466_image.png)
## Instalação e Configuração
1. **Baixar e instalar o aplicativo Immich**
Você pode baixar a versão mais recente do aplicativo Immich na ZimaOS App Store. Após o download, dê um duplo clique no arquivo de instalação e siga as instruções na tela para concluir a instalação.
![](https://manage.icewhale.io/api/static/docs/1730269866832_copyImage.jpeg)![](https://manage.icewhale.io/api/static/docs/1730269868372_copyImage.png)
2. Criar uma conta de usuário
Após a instalação, inicie o aplicativo. Na tela de lançamento, selecione "Criar Novo Usuário" e siga as instruções para inserir as informações necessárias do usuário para concluir o registro.
![](https://manage.icewhale.io/api/static/docs/1730269926591_image.png)
![](https://manage.icewhale.io/api/static/docs/1730269940085_image.png)
Vá para a página principal:
![](https://manage.icewhale.io/api/static/docs/1730269963189_image.png)
3. Configurar a conexão do servidor
Baixe e abra o aplicativo Immich no seu telefone (usando o iPhone como exemplo).
Digite o endereço do seu servidor e o número da porta para fazer login. Por favor, certifique-se de que o endereço do servidor e o número da porta estão inseridos corretamente.
![](https://manage.icewhale.io/api/static/docs/1730270062733_copyImage.png)![](https://manage.icewhale.io/api/static/docs/1730270082792_copyImage.jpeg)![](https://manage.icewhale.io/api/static/docs/1730270083467_copyImage.jpeg)
## Como usar
1. Iniciar backup
- Abra a página principal do aplicativo Immich.
- Clique no botão "Backup" e selecione as fotos ou vídeos que deseja fazer backup.
- Após selecionar os arquivos, clique em "Iniciar backup" e o aplicativo começará a fazer upload dos seus arquivos para o servidor.
![](https://manage.icewhale.io/api/static/docs/1730270241632_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270251463_image.png)
2. Visualizar arquivos de backup
Após a conclusão do backup, você pode visualizar todas as fotos e vídeos enviados na página principal do aplicativo.
![](https://manage.icewhale.io/api/static/docs/1730270310188_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270325913_image.png)
## Recursos Avançados: Pesquisa por IA
O recurso de reconhecimento facial do Immich utiliza tecnologia avançada de IA para identificar e classificar automaticamente pessoas em fotos, melhorando significativamente a eficiência da gestão e pesquisa de fotos. Isso permite que os usuários naveguem e revisem facilmente coleções de fotos organizadas por pessoa.
![](https://manage.icewhale.io/api/static/docs/1730270365044_image.png)
Ao mesmo tempo, na interface principal, use a caixa de pesquisa para inserir palavras-chave, e a IA ajudará você a localizar rapidamente os arquivos necessários. Isso pode ajudar os usuários a encontrar de forma rápida e precisa fotos ou vídeos específicos armazenados no servidor.
![](https://manage.icewhale.io/api/static/docs/1730270384165_image.png)
## Exibição de Mapa
O Immich também suporta função de marcação de mapa, permitindo que os usuários marquem locais específicos no mapa, facilitando o posicionamento rápido e a navegação por todas as fotos e vídeos tirados naquele local.
![](https://manage.icewhale.io/api/static/docs/1730270408893_image.png)
## Configurações Avançadas
1. **Configurar opções de backup**
![](https://manage.icewhale.io/api/static/docs/1730270441373_image.png)
Na interface de configurações "Opções de Backup", você pode configurar os seguintes recursos de backup:
- **Backup automático em primeiro plano**: Após ativar este recurso, o aplicativo fará upload automático de novos arquivos de mídia para o servidor toda vez que você abrir o aplicativo.
- **Backup automático em segundo plano**: Ativar este recurso permite que o aplicativo funcione em segundo plano e faça backup automático de novos arquivos de mídia mesmo que o aplicativo não esteja aberto.
- **Ignorar fotos do iCloud**: Se ativado, você pode escolher não fazer upload de fotos armazenadas no iCloud para o servidor.
- **Sincronizar álbuns**: Permite que os usuários sincronizem todos os vídeos e fotos carregados para o álbum de backup especificado.
Você pode configurar conforme suas necessidades.
2. **Configurações de localização de arquivos de armazenamento**
Nas configurações, você pode alterar as informações do caminho para selecionar arquivos de armazenamento.
![](https://manage.icewhale.io/api/static/docs/1730270501295_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270511744_image.png)
Link: Como entender a configuração de caminho: https://community.zimaspace.com/t/tutorial-how-to-understand-docker-apps-paths-on-zimaos-take-plex-as-an-example/3395
3. **Regras de nomeação de arquivos de armazenamento**
O template de armazenamento é uma ferramenta utilizada no aplicativo Immich para definir e padronizar o caminho de armazenamento e o nome dos arquivos. Dessa forma, você pode personalizar a organização dos arquivos conforme suas necessidades, o que facilitará sua gestão e eficiência de recuperação de dados subsequente.
Para mais informações detalhadas, por favor visite: https://immich.app/docs/administration/storage-template/
![](https://manage.icewhale.io/api/static/docs/1730270568147_image.png)
## FAQ
1. Como encontrar os arquivos de fotos de backup no ZimaOS?
Quando você não configurou um template de armazenamento, pode verificar seu caminho de armazenamento nas configurações. Abra-o de acordo com o caminho, como segue:
![](https://manage.icewhale.io/api/static/docs/1730270615131_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270625991_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270635201_image.png)
Quando você configura um template de armazenamento, a organização e busca de arquivos de fotos será mais intuitiva e conveniente. Você pode navegar e encontrar seus arquivos de fotos diretamente de acordo com as categorias do template de armazenamento.
![](https://manage.icewhale.io/api/static/docs/1730270689535_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270699458_image.png)
![](https://manage.icewhale.io/api/static/docs/1730270702487_image.png)
Com estes passos, você pode facilmente encontrar os arquivos de fotos que foram feitos backup no ZimaOS, seja usando o caminho padrão ou um template de armazenamento personalizado.

2. Quando sua capacidade de disco é insuficiente, como você migra seus dados anteriores para um novo disco?
a. Migração de dados
Clique em Migração de Dados nas Configurações, selecione Migração de Biblioteca e Galeria, Documentos, Mídia e Backup serão automaticamente migrados para o local de destino.
![](https://manage.icewhale.io/api/static/docs/1730272017160_image.png)

b. Migração manual!
Você também pode apenas copiar a pasta Galeria para o local de destino, os passos são os seguintes:
- Desative o aplicativo Immich.
- Copie a Galeria para o local de destino.
- Depois, modifique o diretório em Volumes do immich-server no aplicativo para o diretório modificado.
- Reinicie o Immich.
![](https://manage.icewhale.io/api/static/docs/1730271838216_image.png)