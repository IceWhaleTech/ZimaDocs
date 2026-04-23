---
title: Como Ativar o Módulo Wi-Fi Intel AX210 no ZimaOS?
description:  
type: Docs
author: admin
tip: O formato fixo da barra superior não deve ser removido, a descrição é para o artigo, se não preenchida, será cortada a primeira parte do texto
permalink: /pt-PT/zimaos/enable-intel-ax210.html
---

**🎯 Objetivo**
Ativar o cartão Wi-Fi AX210 no ZimaOS e conectar-se a uma rede sem fio—sem necessidade de interface gráfica.

## Para ZimaOS v1.4.2 e superior
O Intel AX210 é um cartão sem fio de alto desempenho que suporta Wi-Fi 6E. Muitos usuários de dispositivos Zima dependem dele para conectividade sem fio. Este guia orienta você a ativar o AX210 e conectar-se ao Wi-Fi em um ambiente apenas de linha de comando.
👉 [Clique aqui para baixar a versão mais recente do ZimaOS](https://github.com/IceWhaleTech/ZimaOS)

## Passo 1: Confirmar se o AX210 é reconhecido 
Executar o seguinte comando:
```language
lspci | grep -i network
```
Você deve ver uma saída semelhante a:

`Intel Corporation Wi-Fi 6E AX210...`

![A saída do terminal confirma a detecção do Wi-Fi Intel AX210 no ZimaOS via lspci.](https://manage.icewhale.io/api/static/docs/1751615644136_image.png)

Se não for detectado, assegure-se de que o cartão está inserido no slot M.2 E-key correto e que o hardware está funcional.
## Passo 2: Conectar ao Wi-Fi usando nmtui
O ZimaOS inclui a ferramenta de linha de comando `nmtui`. Inicie-a com:
```language
sudo nmtui
```
Em seguida:
- Selecione `Ativar uma conexão`
- Escolha sua rede Wi-Fi (SSID)
- Insira a senha e pressione Enter

| ![](https://manage.icewhale.io/api/static/docs/1751616098976_image.png) | ![](https://manage.icewhale.io/api/static/docs/1751616105026_image.png) | ![](https://manage.icewhale.io/api/static/docs/1751616124786_image.png) |
| :---------------: | :---------------: | :---------------: |

## Passo 3: Verificar o endereço IP e a conectividade
Verifique o status da sua interface sem fio:
```language
ip a
```
![a saída do terminal do comando ip a no Linux, exibindo configurações da interface de rede, incluindo endereços IP e status.](https://manage.icewhale.io/api/static/docs/1751616224099_image.png)

🖥️ **Opcional:** Visualizar e gerenciar configurações de rede no painel do ZimaOS
Se você estiver utilizando a interface web do ZimaOS (Painel), você também pode visualizar e configurar as configurações de rede lá.
Exemplo:
<p align="center">
  <img src="![](https://manage.icewhale.io/api/static/docs/1751616926003_image.png)" width="45%" />
  <img src="![](https://manage.icewhale.io/api/static/docs/1751616939282_image.png)" width="45%" />
</p>

🎉 **Você está pronto!**
Seu cartão Wi-Fi AX210 está agora conectado e pronto para uso com o ZimaOS.

Se você tiver alguma dúvida, entre em contato pelo email de suporte: <support@icewhale.org>