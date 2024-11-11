---
title: Solução de Ativação Automática para ZimaCube
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser removido. A descrição é para o texto do artigo; se não for preenchido, o conteúdo será cortado na primeira parte.
---
# Descrição do Requisito
Atualmente, o ZimaCube requer que o botão de energia seja pressionado para iniciar após ser ligado. Alguns usuários desejam uma função de partida automática ao ser fornecida energia.

# Solução
Modificar os pinos do jumper da placa principal.

# Passos Detalhados
## Passo 1: Certificar-se de que o ZimaCube está desligado e desconectado

## Passo 2: Abrir a tampa superior do ZimaCube
![](https://manage.icewhale.io/api/static/docs/1722413156672_image.png)

## Passo 3: Localizar AUTO-PWR1
![](https://manage.icewhale.io/api/static/docs/1722413204344_image.png)

## Passo 4: Modificar os pinos do jumper
Mova a posição da tampa do jumper. Os dois pinos perto de AUTO indicam a necessidade de pressionar o botão de energia após ser ligado, enquanto os dois pinos perto de PWR1 indicam a partida automática ao ser ligado.

Abaixo está a posição que requer a pressão do botão de energia para iniciar após ser desligado:
![](https://manage.icewhale.io/api/static/docs/1722413242930_image.png)

Abaixo está a posição para partida automática após ser ligado:
![](https://manage.icewhale.io/api/static/docs/1722413266760_image.png)
Você pode modificar a posição de acordo com suas necessidades.