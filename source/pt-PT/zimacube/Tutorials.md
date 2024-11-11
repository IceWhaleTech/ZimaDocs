---
title: Solução de Auto-Ligação para ZimaCube
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser removido, a descrição é para o conteúdo do artigo, se não preenchido, será capturada a primeira parte do texto
---
# Descrição dos Requisitos
Atualmente, o ZimaCube requer a pressão do botão de energia para iniciar após ser ligado. Alguns utilizadores desejam uma função de arranque automático quando a energia é fornecida.

# Solução
Modificar os pinos do jumper da placa principal.

# Passos Detalhados
## Passo 1: Certifique-se de que o ZimaCube está desligado e desconectado

## Passo 2: Abra a tampa superior do ZimaCube
![](https://manage.icewhale.io/api/static/docs/1722413156672_image.png)

## Passo 3: Localize o AUTO-PWR1
![](https://manage.icewhale.io/api/static/docs/1722413204344_image.png)

## Passo 4: Modifique os pinos do jumper
Mova a posição da tampa do jumper. Os dois pinos próximos ao AUTO indicam a necessidade de pressionar o botão de energia após ser ligado, enquanto os dois pinos próximos ao PWR1 indicam arranque automático ao ser ligado.

Abaixo está a posição que requer a pressão do botão de energia para iniciar após desligar:
![](https://manage.icewhale.io/api/static/docs/1722413242930_image.png)

Abaixo está a posição para arranque automático após ser ligado:
![](https://manage.icewhale.io/api/static/docs/1722413266760_image.png)
Você pode modificar a posição de acordo com suas necessidades.