---
title: Redefinir as Definições de Rede
description: "Como redefinir as definições de rede do ZimaOS e a configuração de IP estático utilizando uma unidade USB quando alterações de rede causam problemas de conectividade."
type: Docs
author: icewhale123456
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
permalink: /pt-PT/zimaos/networking.html
---
Se definiu um IP estático no ZimaOS e precisa de redefinir as definições de IP da rede devido a alterações de rede, pode utilizar este tutorial para redefinir a associação de IP configurada.

{% note warn  %} 
**Nota:** Antes de tentar o procedimento de redefinição por USB abaixo, tente ligar a uma porta de rede diferente e, em seguida, utilize o ZimaClient para procurar novamente a rede.
{% endnote %}

### Formatar a unidade USB
A formatação no Windows pode ser feita clicando com o botão direito do rato na unidade USB e selecionando exFAT para formatar
![](https://manage.icewhale.io/api/static/docs/1730802271117_image.png)

No Mac, pode selecionar o disco na ferramenta de gestão de discos e executar a operação de apagar
![](https://manage.icewhale.io/api/static/docs/1730802287070_image.png)

### Gravar o ficheiro _ResetNetwork
Crie um ficheiro no diretório raiz do disco, atribua-lhe o nome `_ResetNetwork`, certifique-se de que não possui extensão e que o ficheiro está vazio.
![](https://manage.icewhale.io/api/static/docs/1730802301568_image.png)

### Insira-o no ZimaOS e aguarde 20 segundos.
Qualquer uma das seguintes condições será considerada bem-sucedida.
- O ecrã mostra que o IP foi alterado.
- O ficheiro `_ResetNetwork` na unidade USB foi removido.