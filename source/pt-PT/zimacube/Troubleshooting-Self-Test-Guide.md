---
title: Guia de Auto-Teste para Resolução de Problemas do ZimaCube
description: 
type: Docs
author: icewhale123456
tip: O formato fixo da barra superior não deve ser removido, a descrição é uma descrição do artigo, se não preenchida, será extraída a primeira parte do conteúdo
---

Como um produto NAS de alto desempenho, o ZimaCube foi projetado para fornecer uma solução confiável para profissionais criativos e entusiastas da tecnologia. No entanto, no uso diário, os usuários podem encontrar vários problemas técnicos ou falhas, que geralmente podem ser resolvidos por si mesmos através de passos simples de resolução de problemas. O objetivo deste guia é ajudar os usuários a identificar e resolver rapidamente problemas comuns do ZimaCube para evitar inatividade desnecessária.

## Problemas de Hardware
### O dispositivo não consegue iniciar
Remova dispositivos externos, incluindo discos rígidos, SSDs e dispositivos PCIe adicionais, e tente novamente.
### Passo 1: Diagnosticar problemas de energia
Certifique-se de que a luz de alimentação laranja do dispositivo pode ser acesa com sucesso. Se não, confirme se o cabo de alimentação está corretamente conectado e a luz de alimentação verde pode ser acesa normalmente. Se a luz de alimentação verde não acender, isso indica um problema de energia.
### Passo 2: Diagnosticar problemas de DDR
1. Se estiver a usar o ZimaCube Pro, tente inserir apenas uma DDR para ver se consegue inicializar.
2. Se não houver problemas acima, você pode tentar executar o memtest para diagnosticar problemas de DDR. Para passos específicos, consulte o seguinte link:
https://www.zimaspace.com/docs/zimacube/Memory-Test-Tutorial

### Passo 3: Reiniciar o dispositivo
Você pode se referir aos seguintes passos para reiniciar a bateria RTC:
https://www.zimaspace.com/docs/zimacube/Resets-CMOS
### Solução:
Se você não conseguir iniciar de acordo com os passos acima, entre em contato com nossa equipe de pós-venda support@icewhale.org para substituir a placa-mãe.

## Problema de Software
### Anormalidade no início do sistema
1. Re-conecte o disco de sistema na placa-mãe e verifique se o disco de sistema pode ser reconhecido normalmente.
2. Você pode reinstalar o ZimaOS de acordo com o método no seguinte link:
https://www.zimaspace.com/docs/zimacube/How-to-Install-ZimaOS
3. Tente usar outros SSDs disponíveis para ver se consegue inicializar com sucesso.
### HDD ou NVMe não reconhecido
**Passo 1: Abrir o gabinete**
Remova cuidadosamente a tampa superior do gabinete para acessar a placa-mãe.
![](https://manage.icewhale.io/api/static/docs/1730874467873_image.png)
**Passo 2: Verifique se o cabo EDP e o cabo de alimentação da placa de circuito impresso estão devidamente** conectados. Reconecte o cabo EDP e o cabo de alimentação da placa de circuito impresso de acordo com o método abaixo.
![](https://manage.icewhale.io/api/static/docs/1730875959034_image.png)
![](https://manage.icewhale.io/api/static/docs/1730875970165_image.png)
**Passo 3: Digite lsblk para verificar se está reconhecido**
Você pode abrir SSH no ZimaOS seguindo o método abaixo e digitando o comando "lsblk":
https://www.zimaspace.com/docs/zimaos/How-to-Open-SSH-in-ZimaOS
1. Se todos forem reconhecidos, é considerado um problema de software ou um problema de disco rígido. Recomenda-se atualizar para a versão mais recente do software e verificar se o disco rígido criou uma matriz. Você pode tentar inicializá-lo após o reconhecimento em outros dispositivos.
2. Se alguns forem reconhecidos, recomenda-se tentar reiniciar suavemente ou trocar o disco rígido. Se os métodos acima não funcionarem, troque a posição do disco rígido para excluir a possibilidade de um disco fixo ou defeito do disco.
3. Se nenhum for reconhecido, primeiro determine se o disco é um disco empresarial. Se for um disco empresarial, tente isolar o pino de 3,3V.

![](https://manage.icewhale.io/api/static/docs/1730876010218_image.png)
O seguinte link lista os modelos de disco rígido que podem ser usados normalmente no teste interno:
https://www.zimaspace.com/docs/zimacube/HDD-Interface-Usage-Guide
**Solução:**
Se os métodos acima não conseguirem fazer o disco rígido funcionar normalmente, você pode entrar em contato com nossa equipe de pós-venda support@icewhale.org para substituir a placa de circuito impresso para você.