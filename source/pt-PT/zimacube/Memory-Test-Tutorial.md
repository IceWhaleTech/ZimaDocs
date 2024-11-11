---
title: Tutorial de Teste de Memória
description: 
type: "Docs"
tip: O formato fixo da barra superior não deve ser removido; a descrição é para a descrição do artigo, que, se não preenchida, será cortada da primeira parte do conteúdo.
---
# Se a placa-mãe falhar ao iniciar corretamente ou houver distorção ou congelamento da tela durante o uso, siga os passos abaixo para solucionar o problema de memória.
## Ambiente de hardware：
1X ZimaCube
1X Monitor
1X Cabo HDMI/DP
1X Teclado
1X Pen Drive USB
## Passo 1: Baixar a imagem do Memtest86
Primeiro, você precisa baixar o arquivo de imagem do Memtest86, que pode ser baixado no seguinte link:
https://www.memtest86.com/download.htm
![](https://manage.icewhale.io/api/static/docs/1729233669049_image.png)
## Passo 2: Instalar a imagem no pen drive
Após o download ser concluído, você precisa gravar o arquivo de imagem no pen drive. Recomenda-se usar a ferramenta Rufus para realizar esse processo. Os passos são os seguintes:
1. Baixe e instale o Rufus.
2. Abra o Rufus e selecione o arquivo de imagem do Memtest86 baixado.
3. Insira o pen drive e selecione-o como o dispositivo alvo.
4. Clique no botão "INICIAR" para começar o processo de gravação.
![](https://manage.icewhale.io/api/static/docs/1729233702813_image.png)
## Passo 3: Inicie o ZimaCube e inicialize a partir do USB
1. Insira o pen drive com a imagem do Memtest86 na porta USB do ZimaCube.
2. Conecte o teclado, pressione F11 continuamente e selecione inicializar a partir do USB.
![](https://manage.icewhale.io/api/static/docs/1729233729784_image.png)
3. Entre na interface do Memtest e selecione Iniciar Teste.
![](https://manage.icewhale.io/api/static/docs/1729233755009_image.png)
![](https://manage.icewhale.io/api/static/docs/1729233761336_image.png)
![](https://manage.icewhale.io/api/static/docs/1729233768385_image.png)
## Passo 4: Determinar se há um problema com a memória com base nos resultados do feedback
Se a interface PASS aparecer, não há problema com a memória
![](https://manage.icewhale.io/api/static/docs/1729233805061_image.png)
Você pode usar os métodos acima para determinar se sua memória tem problemas de estabilidade e solucionar problemas na placa-mãe! Ao mesmo tempo, você pode entrar em contato com nosso suporte técnico pelo e-mail support@icewhale.org e anexar os resultados do teste para obter mais ajuda.