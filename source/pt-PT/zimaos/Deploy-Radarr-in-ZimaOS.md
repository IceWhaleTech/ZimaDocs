Aqui está a tradução do conteúdo solicitado para o português de Portugal, mantendo a estrutura original:

---
title: Ligar Synology e Partilhas SMB  
description:  
type: “Docs”  
tip: Formato fixo da barra superior, por favor, não o apague. A descrição será a descrição do artigo; caso não seja preenchida, será capturado o primeiro parágrafo do conteúdo.  
---  
# Como Partilhar e Obter Ficheiros de um NAS? SAMBA pode ser a forma mais importante  
Quando falamos sobre Armazenamento em Rede (NAS), queremos que os nossos ficheiros sejam armazenados, geridos num único local e acedidos a partir de qualquer lugar. Mas como é que isso funciona?  
![](https://manage.icewhale.io/api/static/docs/1727149654477_image.png)  
Pode sempre aceder aos seus dados visitando a WebUI do ZimaOS, que tem uma interface lindamente organizada e uma experiência fluída. No entanto, quando o seu trabalho envolve a referência de ficheiros ou quando precisa de uma operação mais complexa na hierarquia do sistema de ficheiros, montar as suas drives NAS no seu sistema cliente através de tecnologias como SMB/SAMBA será uma forma melhor.  
![](https://manage.icewhale.io/api/static/docs/1727149678738_image.png)  
SMB (Server Message Block) é um protocolo integrado no sistema Windows para partilhar ficheiros e outros serviços pela rede. O SAMBA implementa o protocolo SMB, o que enriquece os métodos de partilha de ficheiros em sistemas *nix-like. O ZimaOS está equipado com SAMBA, tornando a partilha e transferência de ficheiros muito convenientes. No conteúdo seguinte, vamos descrever tanto o SMB quanto o SAMBA como SMB para conveniência.  
## Criar uma pasta partilhada no ZimaOS  
Inicie a aplicação de Ficheiros no painel de controlo do ZimaOS e localize a pasta de destino que contém os ficheiros que deseja partilhar. Clique com o botão direito na pasta e selecione Partilhar.  
![](https://manage.icewhale.io/api/static/docs/1727149714447_image.png)  
Uma janela de diálogo irá mostrar os URLs necessários para montar a pasta partilhada nos sistemas correspondentes.  
![](https://manage.icewhale.io/api/static/docs/1727149728058_image.png)  
Estes dois URLs são para utilizadores profissionais que desejam montar as drives manualmente. Adicionalmente, com o [cliente Zima](https://findzima.com/) nos sistemas correspondentes, podemos tornar o processo de montagem mais fácil.  
![](https://manage.icewhale.io/api/static/docs/1727149849839_image.png)  
## Montar a sua pasta SMB partilhada no Windows  
Descarregue o Zima-latest setup.exe a partir de [findzima](https://findzima.com/) e execute-o. O processo de instalação será iniciado e o cliente Zima será lançado automaticamente após a instalação. Encontrará o ícone do Zima à direita da barra de tarefas, que aparece como um ponto de interrogação devido ao estado de não conectado.  
Clique com o botão direito no ícone e selecione Scan and Connect to Zima.  
![](https://manage.icewhale.io/api/static/docs/1727149936501_image.png)  
Localize o seu dispositivo Zima e clique em Conectar.  
![](https://manage.icewhale.io/api/static/docs/1727149952959_image.png)  
O Zima.exe irá pedir-lhe para introduzir o nome de utilizador e a palavra-passe da sua WebUI para iniciar sessão. Depois disso, o ícone do zima.exe irá mudar de ponto de interrogação para o logótipo ZIMA, o que significa que o zima.exe entrou em estado de sessão iniciada.  
![](https://manage.icewhale.io/api/static/docs/1727149972815_image.png)  
Clique com o botão direito no ícone do zima e selecione Open in File Explorer, o que montará a sua pasta partilhada no seu sistema Windows e abrirá automaticamente!  

> Nota: Para funcionar corretamente, tanto o Windows como o ZimaOS precisam de estar na mesma rede local (LAN).  
## Montar a sua pasta SMB partilhada no macOS  
Como acima, também preparámos uma aplicação zima para utilizadores de Mac em [findzima](https://findzima.com/). O uso da aplicação zima para Mac é bastante semelhante ao da versão para Windows. Apenas siga as instruções acima.  

Recorda-se do que a aplicação de Ficheiros o alerta quando termina de criar uma pasta partilhada? No macOS, vamos usar os URLs que acabou de obter para montar manualmente!  
![](https://manage.icewhale.io/api/static/docs/1727150063996_image.png)  
Abra o Finder no seu Mac e pressione CMD+K, depois cole o URL correspondente na caixa de entrada.  
![](https://manage.icewhale.io/api/static/docs/1727150080211_image.png)  
Clique em Conectar. Agora, na janela de diálogo, escolha Convidado e clique em Conectar.  

> Para utilizadores do ZimaOS v1.2.3, escolha Utilizador Registado e introduza o nome de utilizador e a palavra-passe corretos.  
![](https://manage.icewhale.io/api/static/docs/1727150117572_image.png)  
Agora, a sua pasta partilhada será aberta e ficará listada na coluna à esquerda da aplicação Finder.  
![](https://manage.icewhale.io/api/static/docs/1727150133237_image.png)  
> E quanto ao URL para o Windows Explorer? Quais são as diferenças entre o método automático de montagem pelo zima e o método manual via URL?

Atualmente, a partilha SMB utiliza a conta de Convidado. Em versões futuras, iremos introduzir múltiplos utilizadores para a função de partilha e melhorar a gestão de permissões. Esperamos que isso possa atender a uma variedade maior de necessidades.  
## Não apenas LAN  
Na verdade, não só na LAN, mas também em rede direta e WAN, pode facilmente ligar o seu dispositivo Zima e mapear o diretório partilhado como uma drive de rede. Lançaremos tutoriais relevantes em breve. Agradecemos pela sua atenção contínua.  

Se encontrar algum problema durante o uso, não hesite em nos informar a qualquer momento. Pode também juntar-se à nossa [comunidade](https://community.zimaspace.com/) e ao [Discord](https://discord.com/invite/uuNfKzG5) para discutir mais sobre NAS e ZimaOS. Aguardamos o seu feedback!  
