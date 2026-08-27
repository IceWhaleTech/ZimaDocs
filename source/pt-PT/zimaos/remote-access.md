---
title: Acesso remoto
seo_title: "Acesso remoto do ZimaOS: ligue-se ao servidor doméstico em qualquer lugar"
description: "Aceda aos dados do ZimaOS em qualquer lugar. Configure o acesso remoto através de um túnel Cloudflare e do ZimaClient para gerir ficheiros em segurança quando está fora de casa."
type: Docs
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---
## Dados disponíveis em viagem
Já quis consultar as câmaras de segurança ou aceder aos ficheiros do servidor doméstico durante uma viagem, mas os dados estavam inacessíveis? O membro da comunidade Grandil acedeu com êxito ao ZimaOS a partir da Noruega, ligando-se a servidores na Irlanda, e teve uma ligação fluida mesmo através de roaming móvel. Consulte a análise [aqui](https://www.youtube.com/watch?v=ZDmO2h0tE0c).

No ritmo acelerado da vida atual, o acesso eficiente aos dados é essencial tanto para utilização pessoal como profissional. O acesso remoto aumenta a produtividade, mantém a segurança e ultrapassa barreiras geográficas.

### Transferir o ZimaClient
Se ainda não ligou o ZimaCube através do ZimaClient, visite https://www.zimaspace.com/zimaos/download no dispositivo principal para transferir o cliente.
![](https://manage.icewhale.io/api/static/docs/1728381740811_image.png)
### Ligar corretamente ao dispositivo
1. Confirme que o ZimaCube está ligado e conectado à rede.
2. Abra o ZimaClient e selecione Scan and Connect Zima.
<div style="display: flex; justify-content: space-between;">
  <img src="https://manage.icewhale.io/api/static/docs/1728439070524_image.png" alt="Imagem 1" style="height: 200px; object-fit: cover; margin-right: 10px;" />
  <img src="https://manage.icewhale.io/api/static/docs/1728439097159_image.png" alt="Imagem 2" style="height: 200px; object-fit: cover;" />
</div>

3. Selecione o endereço IP do ZimaCube na lista e clique em Connect. Siga as instruções para criar um nome de utilizador e uma palavra-passe.
<div style="display: flex; justify-content: space-between;">
  <img src="https://manage.icewhale.io/api/static/docs/1728381985338_image.png" alt="Imagem 1" style="height: 200px; object-fit: cover; margin-right: 10px;" />
  <img src="https://manage.icewhale.io/api/static/docs/1728381994632_image.png" alt="Imagem 2" style="height: 200px; object-fit: cover;" />
</div>

Depois de **estabelecer corretamente a ligação ao dispositivo**, verá aqui o ZimaCube com uma opção como Connect via..., o que significa que o acesso remoto está configurado.
![](https://manage.icewhale.io/api/static/docs/1728459310497_image.png)

*Se tiver desativado o acesso remoto nas definições do ZimaOS, não conseguirá estabelecer a ligação.*
![](https://manage.icewhale.io/api/static/docs/1728459277560_image.png)

### Utilizar o acesso remoto
Após a primeira ligação bem-sucedida, o dispositivo guarda automaticamente as informações de ligação. Esteja onde estiver, basta abrir o ZimaClient para estabelecer rapidamente uma ligação remota.
Quando sair da rede LAN doméstica, o estado do acesso remoto do ZimaCube será apresentado da seguinte forma:
![](https://manage.icewhale.io/api/static/docs/1728382289343_image.png)

### Acesso a partir de um segundo dispositivo principal
Se tiver um **segundo** computador no escritório e o ZimaCube não estiver consigo, pode utilizar o Connect ID. Consulte mais informações [aqui](./features#Second-host-device-access).


### Para referência
A ligação entre o computador portátil e o ZimaCube é estabelecida automaticamente pela aplicação ZimaClient e pelo ZimaOS através de comunicação P2P. A transferência de dados entre os dois é cifrada, garantindo que os dados são enviados diretamente entre os dispositivos.

Além disso, quando estabelece corretamente a primeira ligação ao ZimaOS através do ZimaClient, o canal de acesso remoto fica configurado. A partir desse momento, pode utilizar este dispositivo para aceder ao ZimaOS em qualquer lugar e a qualquer momento.
