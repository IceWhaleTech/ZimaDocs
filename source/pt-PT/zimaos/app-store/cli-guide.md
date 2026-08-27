---
title: Como usar a CLI para explorar o ZimaOS
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser removido, a descrição é para a descrição do artigo, se não preenchido, o conteúdo será extraído do início do texto
---
ZimaOS 3 é uma revolução para entusiastas de NAS, usuários profissionais e usuários de estúdio. Sua interface intuitiva simplifica o backup e o gerenciamento de dados, garantindo que seus arquivos críticos estejam sempre seguros. O ZimaOS se destaca na instalação de aplicativos Docker, tornando o processo simples com apenas alguns cliques.

Você já pensou sobre o que está por trás da glamourosa interface do ZimaOS? Hoje, usamos outra interface para acessar nosso ZimaOS.
![](https://manage.icewhale.io/api/static/docs/1727176855906_image.png)

> A GUI (Interface Gráfica do Usuário) oferece uma experiência interativa visual com ícones e menus, projetada para navegação intuitiva, atendendo a usuários de todos os níveis de habilidade pela sua facilidade de uso. A CLI (Interface de Linha de Comando), por outro lado, é uma interface orientada por texto para a execução de comandos, preferida por especialistas por sua eficiência e capacidades de script.
>
![](https://manage.icewhale.io/api/static/docs/1727176878586_image.png)
## Três Maneiras de Acessar a CLI no ZimaOS

### Método 1: Use seu teclado e tela

Conecte seu dispositivo Zima a um teclado e a uma tela. Ao iniciar, o ZimaOS exibirá uma interface como esta na tela:
![](https://manage.icewhale.io/api/static/docs/1727177117363_image.png)
Pressione **Alt+F2**, e você entrará em uma página de login. Agora, digite root e pressione Enter. Se esta for a primeira vez que você acessa esta página, não precisará de uma senha e estará diretamente na CLI do ZimaOS. Recomendamos que você defina uma senha para sua conta root. Digite passwd-root e esta ferramenta solicitará que você defina a senha para root. Tenha em mente que uma senha para root é necessária para o login via SSH.

### Método 2: Use seu Cliente SSH

SSH é um método de acesso remoto amplamente utilizado. O ZimaOS também pode ser acessado usando SSH.

Novamente, uma senha para root é necessária para o login via SSH. Veja o conteúdo acima.

Abra um terminal. Aqui, usamos o terminal do Windows como exemplo. Digite **ssh root@youZimaOSIP** e pressione **Enter**. Você será solicitado a confiar em uma impressão digital de chave e a digitar a senha. Depois disso, você estará na CLI do ZimaOS através do SSH.
![](https://manage.icewhale.io/api/static/docs/1727177214909_image.png)
### Método 3: Use o aplicativo ttydBridge

Esta é a maneira sugerida de usar a CLI no ZimaOS. Faça login na WebUI do ZimaOS através do IP do seu dispositivo Zima. Na WebUI do ZimaOS, podemos instalar o ttydBridge a partir da nossa loja de aplicativos.
![](https://manage.icewhale.io/api/static/docs/1727177258550_image.png)
Após a instalação, inicie o ttydBridge do painel e ele solicitará que você insira o nome de usuário e a senha. Como você já fez login na nossa WebUI, pode digitar admin como nome de usuário e senha como senha para o ttydBridge. Agora, você verá uma bela CLI como esta:
![](https://manage.icewhale.io/api/static/docs/1727177269954_image.png)
### Diferenças e Comandos Comuns
Por razões de segurança, a maioria das pastas do sistema é somente leitura, mesmo que você faça login como root, o que distingue o sistema de arquivos do ZimaOS de outras distribuições Linux.

Os dados do usuário e os dados do aplicativo serão colocados em /DATA. Sinta-se à vontade para usar comandos para criar, excluir, modificar arquivos e pastas dentro dos subdiretórios de /DATA. Claro, recomendamos que você crie uma nova subpasta dentro de /DATA para fazer esses experimentos.

Aqui também compartilhamos alguns comandos e ferramentas comumente usados.
![](https://manage.icewhale.io/api/static/docs/1727177290437_image.png)
![](https://manage.icewhale.io/api/static/docs/1727177297428_image.png)
![](https://manage.icewhale.io/api/static/docs/1727177303590_image.png)
Estes comandos funcionam bem no ZimaOS. Esperamos que esta tabela ajude você a entender melhor como a CLI funciona no ZimaOS.

Se você encontrar algum problema durante o uso, sinta-se à vontade para nos avisar a qualquer momento. Basta comentar abaixo. Você também pode entrar em nosso [Discord](https://discord.com/invite/uuNfKzG5) para discutir mais sobre o aplicativo Docker e o ZimaOS. Aguardamos seu feedback!