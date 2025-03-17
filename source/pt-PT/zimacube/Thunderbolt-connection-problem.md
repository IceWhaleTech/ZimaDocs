---
title: Verificação do problema de conexão Thunderbolt
description: 
type: Docs
author: icewhale123456
tip: O formato fixo da barra superior não deve ser removido, a descrição é para o artigo, se não preenchida, será extraído o primeiro parágrafo do conteúdo.
---
Se não houver resposta após a conexão Thunderbolt, você pode verificar de acordo com os seguintes itens

1. Confirme que o ZimaCube é a versão Pro
Somente a versão Pro do ZimaCube possui a função Thunderbolt. Você pode ver duas interfaces Thunderbolt perto da fonte de alimentação no painel traseiro, conforme mostrado na figura abaixo.
![](https://manage.icewhale.io/api/static/docs/1731392263987_image.png)

2. Confirme que o cliente possui uma porta Thunderbolt
Geralmente, Thunderbolt terá um logotipo Thunderbolt, ou consulte as informações de hardware correspondentes para confirmar que é uma interface Thunderbolt.
![](https://manage.icewhale.io/api/static/docs/1731392292731_image.png)

3. Confirme o cabo Thunderbolt
Os cabos Thunderbolt geralmente possuem logotipos especiais, e você também pode verificar se o hardware suporta transmissão Thunderbolt.
![](https://manage.icewhale.io/api/static/docs/1731392311295_image.png)

4. Confirme que o ZimaCube reconhece o hardware Thunderbolt (lspci)
Execute o comando ‘lspci | grep Thunderbolt’, e o resultado é o seguinte
![](https://manage.icewhale.io/api/static/docs/1731392323684_image.png)

5. Confirme que a porta Thunderbolt do ZimaCube pode reconhecer hardware
- Encontre um USB tipo-c e conecte-o ao ZimaCube, e verifique se ele pode ser reconhecido no ZimaOS.
- Encontre um display tipo-c e veja se ele pode emitir vídeo normalmente após ser conectado.

Se o problema ainda não puder ser resolvido de acordo com os passos de solução de problemas acima, entre em contato conosco novamente e nos informe sobre o passo de solução de problemas.