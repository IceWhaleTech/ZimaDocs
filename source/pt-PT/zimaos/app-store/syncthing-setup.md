---
title: ZimaBoard + Syncthing!
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser removido, a descrição deve ser uma descrição do artigo, se não preenchida, será capturada a primeira parte do texto.
---
**Proteja os seus dados e desfrute de uma experiência de backup e sincronização sem preocupações 
Backup e Sincronização Sem Esforço, Deixe Seus Dados Fluírem Livremente!
**
ZimaBoard + Syncthing, perfeitamente integrado, oferece a melhor solução de gestão de dados. Seja para fotos preciosas, documentos importantes ou músicas queridas, os seus dados estarão sempre seguros e fiavelmente copiados e sincronizados. O ZimaBoard oferece suporte de hardware confiável, enquanto o Syncthing fornece poderosas capacidades de sincronização e compartilhamento de arquivos. Com processos de backup automatizados e sincronização em tempo real, os seus dados permanecem sincronizados consigo para sempre. Não importa onde você esteja, você não precisará mais se preocupar com perda de dados. O ZimaBoard + Syncthing permite que você se concentre em criar, trabalhar e desfrutar da vida.
# Introdução
Syncthing é um software de sincronização e compartilhamento de arquivos de código aberto que permite a sincronização segura de arquivos e pastas entre múltiplos computadores. É uma aplicação peer-to-peer que opera sem um servidor central, e toda a comunicação é criptografada e realizada diretamente pela rede local. O Syncthing fornece suporte multiplataforma e pode funcionar em sistemas operativos como Windows, Mac OS, Linux e Android.

ZimaBoard é um poderoso servidor de placa única projetado para criadores, desenvolvedores e usuários individuais. Oferece uma plataforma de hardware de alto desempenho e altamente confiável para construir servidores pessoais, centros de mídia em casa, aplicações de IoT e uma variedade de outras tarefas computacionais.

O hardware do ZimaBoard possui uma ampla gama de casos de uso no mundo real. Abaixo estão alguns casos práticos de aplicação comuns:
- **Servidor pessoal:** O ZimaBoard pode ser usado como um servidor pessoal para armazenar e gerenciar dados pessoais, construir sites pessoais, blogs ou serviços de compartilhamento de arquivos. Você pode acessar e gerenciar seus dados a qualquer hora e em qualquer lugar através de acesso remoto.

- **Centro de Mídia em Casa:** Combine o ZimaBoard com software de centro de mídia (como Kodi) para criar um poderoso centro de mídia em casa. Você pode armazenar arquivos de mídia em uma localização centralizada com o ZimaBoard e reproduzi-los suavemente na sua TV ou em outros dispositivos.

- **Aplicações de Internet das Coisas (IoT):** A interface expandida e a conectividade de rede do ZimaBoard tornam-no ideal para construir aplicações de IoT. Você pode conectar uma variedade de sensores e dispositivos e integrá-los ao ZimaBoard para realizar automação residencial, monitoramento ambiental, controle remoto e outras aplicações.

- **Escritório Remoto e Acesso Remoto:** Ao configurar o ZimaBoard como um servidor de acesso remoto, você pode facilmente realizar escritório remoto e acesso. Não importa onde você esteja, basta se conectar ao ZimaBoard para acessar seus arquivos, aplicações e outros recursos.

## Vantagens de Usar ZimaBoard + Syncthing:
- 1. Privacidade e Segurança dos Dados: Ao usar um servidor pessoal, você tem controle total sobre os seus dados. Os seus dados não são armazenados em servidores de provedores de serviços em nuvem de terceiros, reduzindo o risco de acessos, vazamentos ou usos indevidos de dados. Além disso, você pode implementar medidas de segurança no seu servidor, como firewalls e controles de acesso, para melhorar a privacidade e segurança dos dados.

- 2. Backup e Sincronização de Dados: Com o Syncthing combinado com o ZimaBoard, você pode facilmente realizar backup e sincronização de dados. Você pode escolher os arquivos e pastas a serem copiados e sincronizados, armazenando-os no seu servidor pessoal. Dessa forma, mesmo que seus dispositivos apresentem falhas ou sejam perdidos, você ainda poderá recuperar e acessar seus dados a partir do servidor pessoal.

- 3. Acesso e Compartilhamento entre Dispositivos: O ZimaBoard permite que você compartilhe e acesse dados entre múltiplos dispositivos. Você pode sincronizar e acessar os mesmos dados em diferentes computadores, smartphones, tablets e mais, garantindo que seus arquivos de trabalho e pessoais permaneçam sincronizados e consistentes entre os dispositivos.

- 4. Flexibilidade e Personalização: O ZimaBoard oferece vantagens de flexibilidade e personalização. Você pode escolher o hardware e o sistema operativo que atendem às suas preferências para construir seu servidor pessoal e configurá-lo e expandi-lo conforme suas necessidades. Você pode definir a capacidade de armazenamento, a potência de processamento e a largura de banda da rede do servidor com base nas suas necessidades de gestão de dados pessoais.

A seguir, será fornecida uma explicação detalhada da sincronização de dados do dispositivo de computador para o CasaOS usando o Syncthing.

# Etapas de Operação
## 1. Instalação da Sincronização
Para começar, você precisa instalar o Syncthing no seu dispositivo de computador. Visite o site oficial em https://syncthing.net/ e baixe o pacote de instalação apropriado para o seu sistema operativo. O processo de instalação é semelhante ao de qualquer outro software.
![](https://manage.icewhale.io/api/static/docs/1727262326663_image.png)
## 2. Visualizar o ID do dispositivo
Executando o software, cada dispositivo é atribuído um ID de dispositivo único (uma longa sequência de caracteres) para identificar o dispositivo, que usaremos mais tarde na sincronização. Clique em Ações → para exibir o ID.
![](https://manage.icewhale.io/api/static/docs/1727262345800_image.png)
## 3. Adicionar uma pasta compartilhada
Selecione a pasta que você deseja carregar nesse dispositivo, após o que todo o conteúdo da pasta aparecerá no ZimaBoard. Ao mesmo tempo, se o operador adicionar ou excluir arquivos da pasta, o ZimaBoard também mudará.
![](https://manage.icewhale.io/api/static/docs/1727262377851_image.png)
Por exemplo, o que estamos adicionando são documentos de downloads. Você apenas precisa inserir o rótulo, o ID e o caminho local da pasta para completar a adição.
Por exemplo, o que estamos adicionando são documentos de downloads. Você apenas precisa inserir o rótulo, o ID e o caminho local da pasta para completar a adição.
# 4. Adicionando Dispositivos Remotos
Execute o Syncthing no CasaOS, clique em Adicionar Dispositivo Remoto e conecte-se ao dispositivo de computador. (Para evitar confusão, configuramos o Syncthing no CasaOS para o modo escuro)
![](https://manage.icewhale.io/api/static/docs/1727262413245_image.png)
![](https://manage.icewhale.io/api/static/docs/1727262418895_image.png)

Insira o ID do dispositivo do computador.

![](https://manage.icewhale.io/api/static/docs/1727262438326_image.png)

Após clicar em Salvar, você pode ver que a conexão foi bem-sucedida.

![](https://manage.icewhale.io/api/static/docs/1727262453826_image.png)

## 5. Configurar a sincronização de arquivos
No lado do dispositivo, o Syncthing configura arquivos compartilhados.

Clique no botão Opções na pasta compartilhada sincronizada, e marque os dispositivos que você deseja sincronizar na interface Compartilhamento; o Syncthing monitora as notificações do sistema de arquivos para detectar itens alterados e sincronizá-los.
![](https://manage.icewhale.io/api/static/docs/1727262752262_image.png)
![](https://manage.icewhale.io/api/static/docs/1727262756052_image.png)
Depois, o dispositivo aparecerá com um pedido de pasta compartilhada, clique no botão Adicionar no Syncthing no CasaOS para completar as configurações de sincronização.
![](https://manage.icewhale.io/api/static/docs/1727262766182_image.png)
Finalmente, a sincronização está completa
## 6. A sincronização foi concluída, comparar dados
Por padrão, as pastas compartilhadas de ambos os dispositivos permanecem exatamente iguais.
## 7. Precauções
Durante a operação, descobrimos que se modificarmos o conteúdo em uma determinada palavra na pasta do lado do dispositivo, o Syncthing no CasaOS não pode ser alterado em conformidade, e se você quiser atualizá-lo totalmente, precisará carregar o arquivo novamente. Esse problema foi resolvido na nova versão do FilesBrowser.

# Resumo
Com os métodos acima, você pode alcançar backup automático e sincronização em tempo real de quaisquer arquivos, fotos, vídeos, etc., e suportar dispositivos multiplataforma, não importa qual dispositivo ou sistema operativo você use. O melhor de tudo: o Syncthing utiliza comunicação criptografada de peer-to-peer para garantir que seus arquivos estejam protegidos enquanto em trânsito. O ZimaBoard fornece um ambiente de hardware estável e confiável para proteger seus dados contra falhas de hardware ou corrupção. Garanta que seus dados estejam sempre seguros e protegidos.