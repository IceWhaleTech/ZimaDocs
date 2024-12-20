---
title: Ligar o Synology e Compartilhamentos SMB  
description:  
type: “Docs”  
tip: Formato fixo na barra superior, por favor, não remova. A descrição é para o artigo; se não preenchida, será capturada a primeira parte do conteúdo.  
---  
# Como Compartilhar e Obter Arquivos de um NAS? SAMBA pode ser o método mais importante  
Quando falamos sobre Armazenamento Conectado à Rede (NAS), queremos que nossos arquivos sejam armazenados, gerenciados em um só lugar e acessados de qualquer lugar. Mas como isso funciona?  
![](https://manage.icewhale.io/api/static/docs/1727149654477_image.png)  
Você pode sempre acessar seus dados visitando a WebUI do ZimaOS, que possui uma interface organizada e uma experiência fluida. No entanto, quando seu trabalho envolve referências de arquivos ou você precisa de uma operação mais complexa na hierarquia do sistema de arquivos, montar seus drives NAS no sistema cliente usando tecnologias como SMB/SAMBA será uma maneira melhor.  
![](https://manage.icewhale.io/api/static/docs/1727149678738_image.png)  
SMB (Server Message Block) é um protocolo integrado ao sistema Windows para compartilhamento de arquivos e outros serviços pela rede. O SAMBA implementa o protocolo SMB, que enriquece os métodos de compartilhamento de arquivos em sistemas *nix-like. O ZimaOS vem com SAMBA, facilitando o compartilhamento e a transferência de arquivos. No conteúdo a seguir, descreveremos tanto o SMB quanto o SAMBA como SMB para fins de conveniência.  
## Criar uma pasta compartilhada no ZimaOS  
Abra o aplicativo Files no painel do ZimaOS e encontre a pasta de destino que contém os arquivos que você deseja compartilhar. Clique com o botão direito na pasta e selecione Compartilhar.  
![](https://manage.icewhale.io/api/static/docs/1727149714447_image.png)  
Uma janela de diálogo será exibida com os URLs necessários para montar a pasta compartilhada nos sistemas correspondentes.  
![](https://manage.icewhale.io/api/static/docs/1727149728058_image.png)  
Esses dois URLs são para usuários profissionais montarem drives manualmente. Além disso, com o [cliente Zima](https://findzima.com/) nos sistemas correspondentes, podemos tornar o processo de montagem mais fácil.  
![](https://manage.icewhale.io/api/static/docs/1727149849839_image.png)  
## Montar sua pasta compartilhada SMB no Windows  
Baixe o Zima-latest setup.exe de [findzima](https://findzima.com/) e abra-o. O processo de instalação será iniciado, e o cliente Zima será lançado automaticamente após a instalação. Você verá o ícone do Zima à direita da sua barra de tarefas, que aparecerá como um ponto de interrogação devido ao estado não conectado.  
Clique com o botão direito no ícone e selecione Escanear e Conectar ao Zima.  
![](https://manage.icewhale.io/api/static/docs/1727149936501_image.png)  
Localize seu dispositivo Zima e clique em Conectar.  
![](https://manage.icewhale.io/api/static/docs/1727149952959_image.png)  
O Zima.exe pedirá que você insira seu nome de usuário e senha da WebUI para fazer login. Após isso, o ícone do zima.exe mudará de um ponto de interrogação para o logo ZIMA, indicando que o zima.exe entrou no status de login.  
![](https://manage.icewhale.io/api/static/docs/1727149972815_image.png)  
Clique com o botão direito no ícone do Zima e selecione Abrir no Explorador de Arquivos, o que montará sua pasta compartilhada no sistema Windows e a abrirá automaticamente!  

> Nota: para funcionar corretamente, seu Windows e ZimaOS precisam estar na mesma rede local (LAN).  
## Montar sua pasta compartilhada SMB no macOS  
Da mesma forma, também preparamos um aplicativo Zima para usuários de Mac em [findzima](https://findzima.com/). O uso do aplicativo Zima no Mac é praticamente o mesmo que no Windows. Basta seguir as instruções acima.  

Você se lembra do que o aplicativo Files exibe quando você termina de criar uma pasta compartilhada? No macOS, usaremos os URLs que você acabou de obter para montar manualmente!  
![](https://manage.icewhale.io/api/static/docs/1727150063996_image.png)  
Abra o Finder no seu Mac e pressione CMD+K, depois cole o URL correspondente na caixa de entrada.  
![](https://manage.icewhale.io/api/static/docs/1727150080211_image.png)  
Clique em Conectar. Neste momento, na janela de diálogo que aparecer, escolha Convidado e clique em Conectar.  

> Para usuários do ZimaOS v1.2.3, escolha Usuário Registrado e insira o nome de usuário e a senha corretos.  
![](https://manage.icewhale.io/api/static/docs/1727150117572_image.png)  
Agora, você verá sua pasta compartilhada aberta e ela será listada na coluna esquerda do aplicativo Finder.  
![](https://manage.icewhale.io/api/static/docs/1727150133237_image.png)  

> E quanto ao URL para o Windows Explorer? Quais são as diferenças entre a montagem automática do Zima e a montagem manual do drive via URL?

Atualmente, nosso compartilhamento SMB usa a conta de Convidado. Em versões futuras, introduziremos múltiplos usuários para a função de compartilhamento e fortaleceremos a gestão de permissões. Esperamos que isso atenda a necessidades mais diversas de todos.  
## Não é só LAN  
Na verdade, não é apenas na LAN, mas também em redes diretas e WAN, você pode facilmente conectar seu dispositivo Zima e mapear o diretório compartilhado como uma unidade de rede. Vamos lançar tutoriais relevantes. Agradecemos sua atenção contínua.  

Se você encontrar qualquer problema durante o uso, fique à vontade para nos avisar a qualquer momento. Você também pode se juntar à nossa [comunidade](https://community.zimaspace.com/) e [Discord](https://discord.com/invite/uuNfKzG5) para discutir mais sobre NAS e ZimaOS. Aguardamos seu feedback!  
