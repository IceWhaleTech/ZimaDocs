---
title: Como instalar UnRAID no ZimaCube
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser removido, a descrição é para o artigo, se não preenchida, será cortada a primeira parte do texto
---
# Guia de Instalação do TrueNAS no ZimaCube
![](https://manage.icewhale.io/api/static/docs/1727249736896_image.png)
## Ambiente de hardware：
1X ZimaCube  
1X Monitor  
1X DP  
1X Teclado  
1X Cabo Ethernet  
1 X Pen Drive USB (como disco de instalação)  
![](https://manage.icewhale.io/api/static/docs/1727249911617_image.png)
## Processo de instalação detalhado
### Passo 1: Formatar Pen Drive USB
**a.Prepare um pen drive USB (precisa ser maior que 1G) e formate-o no formato FAT32, renomeie para UNRAID (Mac)**
![](https://manage.icewhale.io/api/static/docs/1727249967953_image.png)
![](https://manage.icewhale.io/api/static/docs/1727249974644_image.png)
![](https://manage.icewhale.io/api/static/docs/1727249981977_image.png)
![](https://manage.icewhale.io/api/static/docs/1727249988198_image.png)
**b.Baixe o [USB Creator](https://unraid.net/download) oficial**
![](https://manage.icewhale.io/api/static/docs/1727250152598_image.png)
**c.Baixe a [Imagem Oficial](https://unraid.net/download)**
![](https://manage.icewhale.io/api/static/docs/1727250193523_image.png)
**d.Abra o USB Creator e escreva o Unraid OS**  
Selecione as opções a seguir de acordo com a especificação  
![](https://manage.icewhale.io/api/static/docs/1727250248143_image.png)
**Clique em escrever e aguarde**
![](https://manage.icewhale.io/api/static/docs/1727250272215_image.png)
![](https://manage.icewhale.io/api/static/docs/1727250278309_image.png)
### Passo 2: Instalando Unraid no ZimaCube
**a.Dê boot a partir do pen drive de instalação**
![](https://manage.icewhale.io/api/static/docs/1727250302063_image.png)
**b.Escolha o SO**
![](https://manage.icewhale.io/api/static/docs/1727250317388_image.png)
**c.Obtenha IP**
![](https://manage.icewhale.io/api/static/docs/1727250333338_image.png)
## Conectando ao webGui do Unraid
Existem dois métodos para se conectar ao webGui no Unraid:
  - Dê boot ao Unraid em modo GUI e faça login (nome de usuário é `root`, sem senha por padrão); ou
  - Abra um navegador da web no seu Mac ou PC e navegue até `http://tower.local`. Nota: se você configurou um nome de host diferente no USB Flash Creator, use esse nome em vez de `tower`.
![](https://manage.icewhale.io/api/static/docs/1727250410689_image.png)
## Agora você pode usar o UNRAID no ZimaCube！
![](https://manage.icewhale.io/api/static/docs/1727250432285_image.png)