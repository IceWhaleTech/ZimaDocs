---
title: Ligar Synology e Compartilhamentos SMB
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser removido, a descrição é a descrição do artigo, se não preenchido, será cortado o texto mais à frente.
---
# Como Compartilhar e Obter arquivos de um NAS? SAMBA pode ser a maneira mais importante
Quando falamos sobre Armazenamento Conectado à Rede, queremos que nossos arquivos sejam armazenados, geridos em um só lugar e acessados de qualquer lugar. Mas como isso acontece?
![](https://manage.icewhale.io/api/static/docs/1727149654477_image.png)
Você pode sempre acessar seus dados visitando a WebUI do ZimaOS, que possui uma interface maravilhosamente organizada e uma experiência fluida. No entanto, quando seu trabalho envolve referências a arquivos, ou você precisa de uma operação mais complexa na hierarquia do sistema de arquivos, montar seus drives NAS ao seu sistema cliente por meio de tecnologias como SMB/SAMBA será uma melhor opção.
![](https://manage.icewhale.io/api/static/docs/1727149678738_image.png)
SMB (Server Message Block) é um protocolo embutido no sistema Windows para compartilhamento de arquivos e outros serviços pela rede. O SAMBA implementa o protocolo SMB, que enriquece os métodos de compartilhamento de arquivos de sistemas semelhantes ao *nix. O ZimaOS está equipado com SAMBA, tornando o compartilhamento e transferência de arquivos muito conveniente. No conteúdo a seguir, descreveremos tanto o SMB quanto o SAMBA como SMB por motivos de conveniência.
## Criar uma pasta compartilhada no ZimaOS
Abra o aplicativo Files no painel do ZimaOS e encontre a pasta de destino que contém os arquivos que você deseja compartilhar. Clique com o botão direito na pasta e selecione Compartilhar.
![](https://manage.icewhale.io/api/static/docs/1727149714447_image.png)
Uma janela de diálogo irá lhe mostrar os URLs que você precisa para montar a pasta compartilhada nos sistemas correspondentes.
![](https://manage.icewhale.io/api/static/docs/1727149728058_image.png)
Esses dois URLs são para usuários profissionais montarem drives manualmente. Além disso, com o [Zima client](https://findzima.com/) nos sistemas correspondentes, podemos tornar o processo de montagem mais fácil.
![](https://manage.icewhale.io/api/static/docs/1727149849839_image.png)
## Montar sua pasta compartilhada SMB no Windows
Baixe o Zima-latest setup.exe do [findzima](https://findzima.com/) e abra-o. Isso iniciará o processo de instalação e o cliente Zima será lançado automaticamente após a instalação. Você encontrará o ícone do Zima à direita da sua barra de tarefas, que aparecerá como um ponto de interrogação devido ao estado de desconexão.
Clique com o botão direito no ícone e selecione Escanear e Conectar ao Zima.
![](https://manage.icewhale.io/api/static/docs/1727149936501_image.png)
Localize seu dispositivo Zima e clique em Conectar.
![](https://manage.icewhale.io/api/static/docs/1727149952959_image.png)
O Zima.exe solicitará que você insira seu nome de usuário e senha da WebUI para fazer login. Após isso, seu ícone do zima.exe mudará de um ponto de interrogação para uma marca ZIMA, o que significa que seu zima.exe entrou em status de logado.
![](https://manage.icewhale.io/api/static/docs/1727149972815_image.png)
Clique com o botão direito no ícone zima e selecione Abrir no Explorador de Arquivos, o que montará sua pasta compartilhada no seu sistema Windows e a abrirá automaticamente!

> Nota: para funcionar corretamente, seu Windows e ZimaOS precisam estar na mesma rede local (LAN).
## Montar sua pasta compartilhada SMB no macOS
Como acima, também preparamos um aplicativo zima para usuários Mac no [findzima](https://findzima.com/). O uso do aplicativo zima para Mac é bastante semelhante ao do Windows. Apenas consulte o conteúdo acima.

Você se lembra do que o aplicativo Files informa quando você termina de criar uma pasta compartilhada? No macOS, usaremos os URLs que você acabou de obter para montar manualmente!
![](https://manage.icewhale.io/api/static/docs/1727150063996_image.png)
Abra o Finder no seu Mac e pressione CMD+K, depois copie e cole o URL correspondente na caixa de entrada.
![](https://manage.icewhale.io/api/static/docs/1727150080211_image.png)
Clique em Conectar. Por agora, na janela de diálogo, escolha Convidado e clique em Conectar.

> Para usuários do ZimaOS v1.2.3, escolha Usuário Registrado e insira o nome de usuário e senha corretos.
![](https://manage.icewhale.io/api/static/docs/1727150117572_image.png)
Agora, você verá sua pasta compartilhada aberta e ela será listada na coluna da esquerda do aplicativo Finder.
![](https://manage.icewhale.io/api/static/docs/1727150133237_image.png)
> E quanto ao URL para o Windows Explorer? Quais são as diferenças entre a montagem automática do zima e a montagem manual do drive via URL?

Atualmente, nosso compartilhamento SMB utiliza a conta de Convidado. Em versões futuras, iremos introduzir múltiplos usuários na função de compartilhamento e fortalecer a gestão de permissões. Esperamos que isso possa atender a necessidades mais diversas de todos.
## Não apenas LAN
Na verdade, não apenas na LAN, mas também na rede direta e WAN, você pode facilmente conectar seu dispositivo Zima e mapear o diretório compartilhado como um drive de rede. Iremos liberar tutoriais relevantes. Obrigado pela sua atenção continuada.

Se você encontrar algum problema durante o uso, sinta-se à vontade para nos informar a qualquer momento. Você também pode se juntar à nossa [comunidade](https://community.zimaspace.com/) e [Discord](https://discord.com/invite/uuNfKzG5) para discutir mais sobre NAS e ZimaOS. Aguardamos seu feedback!