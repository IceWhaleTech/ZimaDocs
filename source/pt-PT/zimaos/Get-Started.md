---
title: Começar
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser removido, a descrição é a descrição do artigo, se não for preenchida, será cortada a primeira parte do conteúdo
---

# Integração

Começar com o ZimaOS é muito simples. O **design geral do sistema foca na simplicidade e na consistência da linguagem**. Nosso objetivo é garantir que usar, compartilhar e gerenciar dados em uma nuvem privada seja uma experiência fluida, elegante e rápida.
Durante o processo de configuração, o **aplicativo cliente Zima estabelece todas as conexões** entre o seu laptop ou iMac e o ZimaCube, **proporcionando a base para acesso, transferências de alta velocidade e experiências remotas**. Após instalar o aplicativo cliente, basta seguir os passos guiados para completar a inicialização do ZimaCube.

## Instalar Cliente Zima 
### Baixar Cliente Zima
https://find.zimaspace.com/ e instale o ZimaClient. Ele irá automaticamente escanear os dispositivos disponíveis.
### Pesquisa Rápida
Se preferir usar a interface web, você pode visitar o site. Certifique-se de que seu dispositivo esteja conectado à mesma rede que o ZimaCube. Faça a varredura na página web e, após a varredura ser concluída, você verá uma lista de dispositivos ZimaCube disponíveis. Basta clicar no dispositivo correspondente para se conectar ao ZimaOS.
![](https://manage.icewhale.io/api/static/docs/1727082045246_image.png)

## Login no ZimaOS
Após conectar-se com sucesso ao ZimaCube, insira o endereço IP correspondente para acessar a interface de inicialização do ZimaOS, onde você pode começar a configurar seu ZimaCube.
### Selecionar idioma
Atualmente, o ZimaOS suporta 6 idiomas, incluindo inglês, chinês, japonês, italiano e norueguês. Escolha o idioma com o qual você tem mais familiaridade para garantir a melhor experiência do usuário.
![](https://manage.icewhale.io/api/static/docs/1727082127778_image.png)
### Criar Usuário
Em seguida, você precisará criar uma conta de usuário. Esta conta será a principal forma de gerenciar o ZimaOS. Por favor, defina um nome de usuário e uma senha seguros para proteger seus dados e configurações.
![](https://manage.icewhale.io/api/static/docs/1727082165610_image.png)
### Inicialização bem-sucedida
Após a inicialização, o ZimaOS fornecerá uma breve introdução às funções e ao guia de uso. Isso ajudará você a entender os principais recursos e o uso do ZimaOS. Você pode aprender sobre: 
- Sistema de gerenciamento de arquivos
- Loja de aplicativos e aplicativos instaláveis
- Gerenciamento de dispositivos e configurações de rede
- Vários tipos de Raid para escolher
![](https://manage.icewhale.io/api/static/docs/1727082245929_image.png)
![](https://manage.icewhale.io/api/static/docs/1728377751054_copyImage.png)


# Resumo

## Acesso Remoto
A acessibilidade é fundamental para nuvens privadas, e configurar as configurações de rede na maioria dos dispositivos NAS pode ser bastante complexo. O ZimaOS visa oferecer uma experiência de acesso remoto plug-and-play que seja segura e confiável, sem risco de encaminhamento de nuvem ou vazamento de dados.

Assim, uma vez que você instala o [**Cliente Zima**](https://find.zimaspace.com/) e escaneia para se conectar ao ZimaOS pela primeira vez, seu canal de acesso remoto já está configurado！

![](https://manage.icewhale.io/api/static/docs/1728377748520_image.png)


Você pode se conectar ao seu ZimaCube em casa ou no escritório de qualquer lugar usando seu MacBook ou laptop, sem nenhuma configuração adicional. A conexão entre seu laptop e o ZimaCube é automaticamente estabelecida pelo Aplicativo Cliente Zima e ZimaOS, utilizando comunicação P2P para criar a conexão. As transferências de dados entre os dois são criptografadas, garantindo que todas as transmissões de dados sejam de ponta a ponta.

Para controle total, você também pode fazer login no painel de configurações para desativar o recurso de acesso remoto com apenas um clique.
![](https://manage.icewhale.io/api/static/docs/1727081506994_image.png)
## Arquivos
Arquivos foca na gestão unificada para criadores e dados pessoais, oferecendo uma experiência de armazenamento e acesso a arquivos simplificada. Sem dúvida, se assemelha a um serviço de armazenamento na nuvem local. No entanto, ao contrário dos serviços de armazenamento em nuvem convencionais, sua velocidade pode atingir GB/s via Thunderbolt, e com redes sem fio Wi-Fi 6, pode alcançar mais de 100MB/s em sincronizações de material e experiências de pré-visualização de arquivos. Isso proporciona velocidades ideais para fazer backup de grandes quantidades de imagens pessoais ou conteúdo em vídeo, incluindo 4K.

Arquivos oferece pré-visualizações de vídeo, fixação e recursos de expansão de armazenamento em nuvem, atendendo efetivamente às suas necessidades de acesso ao conteúdo e unificando dados entre os serviços de nuvem. Usos comuns incluem compartilhar um conjunto de materiais dentro de uma pequena equipe ou fixar suas pastas de projetos mais usadas para fácil acesso.

Embora o desempenho de 100MB/s geralmente satisfaça a maioria das necessidades de pré-visualização e edição, se você exigir velocidades extremas, as capacidades de 10GbE ou Thunderbolt do ZimaCube são excelentes opções.
![](https://manage.icewhale.io/api/static/docs/1727081538638_image.png)
## Transferência Thunderbolt

Thunderbolt, um método que não deve ser negligenciado por editores profissionais ou usuários em busca de desempenho máximo de transferência, é utilizado com o ZimaCube. Ele oferece velocidades de transferência de dados superiores a 1GB/s, com velocidades teóricas de leitura e gravação alcançando até 20Gbps.

No entanto, isso não deve ser complicado—deve ser tão simples quanto conectar um cabo Thunderbolt e usá-lo imediatamente. Sim, através do aplicativo Cliente Zima e do ZimaOS. Uma vez que o cabo Thunderbolt esteja conectado, basta acessar novamente o ZimaOS através do aplicativo Cliente Zima para experimentar as velocidades mais rápidas de edição, acesso a materiais ou compartilhamento Samba. Nenhuma configuração adicional é necessária; o sistema e os aplicativos lidam automaticamente com tudo para você.
![](https://manage.icewhale.io/api/static/docs/1727081568557_image.png)
## Compartilhamento Samba
Criar um espaço dentro de uma rede local (LAN) onde uma equipe pode editar diretamente, ou permitir acesso direto ao armazenamento de rede local a partir de dispositivos como TVs e headsets VR, o Samba é frequentemente a escolha ideal para muitos. Configurar e gerenciar Samba no ZimaOS continua a oferecer a facilidades inerentes do sistema. Você pode facilmente criar um compartilhamento LAN clicando com o botão direito em qualquer pasta em Arquivos.

Curiosamente, quando combinado com o recurso de acesso remoto do Cliente Zima, você pode até carregar remotamente espaços de armazenamento e editar arquivos diretamente dentro desse espaço remoto. Isso oferece uma solução atraente e simples para colaboração e trabalho remoto.

Através do painel de configurações, você pode criar diretamente diferentes usuários e atribuir permissões de acesso correspondentes ao conteúdo, personalizando a acessibilidade conforme necessário para sua equipe ou família.
![](https://manage.icewhale.io/api/static/docs/1727081592637_image.png)
## Integração de Armazenamento em Nuvem
Hoje, os dados de todos estão incrivelmente dispersos—alguns estão no Notion, outros no Slack, e muitos por e-mail. Acreditamos que os dados pessoais ou de pequenas equipes deveriam ser mais unificados. Não é necessário que residam em uma nuvem privada, mas a gestão deve ser centralizada. Tendo essa filosofia em mente, o primeiro passo do ZimaOS é permitir a gestão dos seus dados de armazenamento em nuvem, dados NAS ou dados nos dispositivos Zima através de uma única interface de sistema.

Com o recurso Adicionar em Arquivos, você pode facilmente vincular seu Google Drive, Dropbox, OneDrive ou pastas Samba compartilhadas locais com um clique, tudo a partir de um único e elegante gerenciador de arquivos. Isso permite a gestão em lote ou unificada dos seus dados pessoais.

Isso significa que se você achar que a gestão de dados do Google Drive não é mais confiável ou econômica, pode migrar dados em lote do Google Drive para o Dropbox ou qualquer outro meio de sua escolha. Isso será muito empolgante e, com base nessa ideia, ofereceremos soluções de gestão de dados pessoais mais eficazes.
![](https://manage.icewhale.io/api/static/docs/1727081614882_image.png)
## Raid
RAID é um recurso essencial para usuários de NAS existentes. O ZimaOS agora suporta três modos de RAID: RAID 0, RAID 1 e RAID 5. Essas opções oferecem soluções de backup redundante para o armazenamento de dados pessoais, protegendo contra o risco imprevisível de falhas de discos rígidos.

RAID 0 é uma opção que existe principalmente para maximizar o desempenho de leitura e gravação e unificar o espaço de armazenamento, sem nenhum mecanismo de redundância. RAID 1 oferece uma solução segura e confiável, armazenando seus dados em dois discos rígidos idênticos, reduzindo o espaço pela metade, mas dobrando a segurança. RAID 5, através da configuração de três discos, maximiza o espaço de armazenamento enquanto fornece um mecanismo de redundância.

Se você está interessado em ZFS ou configurações de RAID mais avançadas, pode construir essas opções através das interfaces de nível de sistema fornecidas pelo ZimaOS.
![](https://manage.icewhale.io/api/static/docs/1727081705277_image.png)
## ZVM
Baseado em tecnologia de virtualização, você pode utilizar ainda mais os recursos computacionais do seu hardware ZimaCube. Por exemplo, você pode usar seu NAS como um host de desktop Windows, um ambiente de desenvolvimento Debian segregado, ou até mesmo como um sistema de roteamento para gerenciar sua rede. As capacidades de VM ainda estão em estágios iniciais, e estamos continuamente refinando seus recursos mais avançados com base no feedback da comunidade.
![](https://manage.icewhale.io/api/static/docs/1727081725764_image.png)
## Drop
É um recurso de sobremesa simples: todos os celulares, laptops ou dispositivos clientes dentro da mesma rede local criada pelo ZimaOS podem realizar transferências peer-to-peer de arquivos individuais quando abrem um link compartilhado pelo ZimaOS.
![](https://manage.icewhale.io/api/static/docs/1727081744441_image.png)
## App Store
A AppStore quase herda todos os recursos do CasaOS, oferecendo mais de cem aplicativos privatizados que podem ser implantados com apenas um clique. Esses incluem aplicativos populares de servidor de mídia como Plex e Jellyfin, aplicativos de casa inteligente como Home Assistant e Homebridge, e ferramentas de documentação e colaboração em equipe privatizadas, como Notion e Affinity. 
Aplicativos de IA local populares recentemente, como OpenWeb UI e Stable Diffusion também podem ser instalados e ativados com apenas um clique.

Há muitos cenários e usos a explorar, esperando que você os desbloqueie. Vamos gradualmente mostrar isso a você através de conteúdos futuros.
![](https://manage.icewhale.io/api/static/docs/1727081765695_image.png)


# ZimaOS e CasaOS
Neste artigo, vamos apresentar brevemente os principais recursos disponíveis no ZimaOS. Aqueles que estão familiarizados com a Zima sabem que o ZimaOS é desenvolvido com base no CasaOS, um projeto de nuvem privada de código aberto lançado pela equipe Zima em 2022. Ele atraiu significativa atenção de desenvolvedores em todo o mundo, com mais de 700 mil instalações servindo entusiastas em centenas de países globalmente.

Aproveitando a base do CasaOS, o ZimaOS aprimorou ainda mais suas funcionalidades essenciais como um sistema operacional NAS definitivo. Em resumo, enquanto o **CasaOS serve** como um hub de **aplicações de nuvem pessoal** permitindo a fácil implantação de vários aplicativos de nuvem privada, o **ZimaOS** constrói sobre essa fundação para **estabelecer um sistema operacional robusto e completo.** Ele apresenta configuração de RAID, acesso remoto, um gerenciador de arquivos similar a uma nuvem, backups automáticos e gerenciamento unificado de dados em nuvem e NAS—um conjunto de funções em nível de sistema. 

Conteúdos futuros vão explorar mais profundamente as características detalhadas do ZimaOS.