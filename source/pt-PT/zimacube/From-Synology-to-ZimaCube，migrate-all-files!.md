---
title: De Synology para ZimaCube, migre todos os arquivos!
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser removido, descrição é a descrição do artigo, se não for preenchida, será cortada a primeira parte do conteúdo
---
# Bem-vindo ao mundo do ZimaOS! Quero dizer, novos amigos que vêm de outros campos de marcas como Synology, olá!

ZimaOS é uma mudança de jogo para entusiastas de NAS, usuários profissionais e usuários de estúdio. Sua interface intuitiva simplifica o backup e a gestão de dados, garantindo que seus arquivos críticos estejam sempre seguros. O ZimaOS se destaca na instalação de aplicações Docker, tornando o processo mais eficiente com apenas alguns cliques.
![](https://manage.icewhale.io/api/static/docs/1722482124812_image.png)

Temos a honra de saber que você escolheu o ZimaCube como o primeiro hardware para experimentar o ZimaOS. Para ajudar todos a transferir rapidamente arquivos de dispositivos Synology para o ZimaCube, preparamos este tutorial.

Claro, transferir arquivos para o ZimaCube é muito fácil. Vamos começar.

>Este tutorial também é aplicável a outros dispositivos com ZimaOS instalado.

## SMB/SAMBA será nosso método
SMB (Server Message Block) é um protocolo embutido no sistema Windows para compartilhar arquivos e outros serviços pela rede. SAMBA implementa o protocolo SMB, enriquecendo os métodos de compartilhamento de arquivos de sistemas *nix-like.

Tanto o ZimaOS quanto o Synology DSM estão bem implementados/compatíveis com SMB, seja através do SAMBA ou da autoimplementação, tornando o compartilhamento e a transferência de arquivos muito conveniente.

## Montar compartilhamentos do DSM no ZimaOS
>No início da configuração do Synology, muitos usuários configuram o compartilhamento ao criar diretórios; alguns usuários não forneceram a função de compartilhamento ao criar diretórios. Portanto, antes de migrar, pode ser necessário criar um novo diretório compartilhado e mover os dados que você deseja migrar para esse diretório compartilhado.

Vá até o Painel do ZimaOS e inicie o aplicativo Files. Em seguida, na barra de navegação à esquerda da interface do aplicativo Files, encontre o sinal “+” ao lado de Storage e clique nele, depois clique em “LAN Storage”.
![](https://manage.icewhale.io/api/static/docs/1722482274183_image.png)
Na janela pop-up, insira o endereço IP do Synology DMS. O meu é 10.0.0.11 aqui e você precisa preencher o endereço IP correto do seu dispositivo. Agora clique no botão Conectar.
![](https://manage.icewhale.io/api/static/docs/1722482301030_image.png)
>Se a sua conta compartilhada do DSM não for um Convidado, mas uma conta especificamente configurada com um usuário e senha, você precisará inserir a conta e a senha do DSM corretas aqui.

## Copiar e colar arquivos do Synology DSM no ZimaOS
Quando você clicar no botão Conectar e se conectar com sucesso, o Synology aparecerá como um dispositivo de rede em Storage. E, no lado direito, o diretório compartilhado do Synology aparecerá.
![](https://manage.icewhale.io/api/static/docs/1722482333599_image.png)
Vá até o diretório compartilhado e selecione os arquivos e diretórios que queremos migrar. Você pode pressionar Ctrl + A para selecionar todos os arquivos. Em seguida, clique no botão Copiar no canto superior direito.

![](https://manage.icewhale.io/api/static/docs/1722482355535_copyImage.png)

Agora entre na área de armazenamento do ZimaOS. Vá até o diretório de destino e selecione o botão `Colar xx itens` no canto superior direito.

[![](https://manage.icewhale.io/api/static/docs/1722482356366_copyImage.jpeg)


> Você precisa garantir que a **capacidade restante** do pool de armazenamento de destino seja maior do que o **volume total** do arquivo a ser copiado e colado.

Agora, aguarde a conclusão da migração de arquivos. Após a migração ser concluída, por favor, experimente a conveniência que o ZimaOS traz para sua gestão de dados!