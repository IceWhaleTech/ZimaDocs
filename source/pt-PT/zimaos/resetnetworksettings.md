---
title: Redefinir Configurações de Rede
description: 
type: Docs
author: icewhale123456
tip: O formato fixo da barra superior não deve ser removido, a descrição é para o artigo, e não preenchida, será cortada a primeira parte do texto
---
## Cenário
Se você definiu um IP estático no ZimaOS e precisa redefinir as configurações de rede devido a mudanças na rede, você pode usar este tutorial para redefinir a vinculação de IP configurada.
### Formatar pen drive
A formatação no Windows pode ser feita clicando com o botão direito do mouse no pen drive e selecionando exFAT para formatar
![](https://manage.icewhale.io/api/static/docs/1730802271117_image.png)

A formatação no Mac pode ser feita selecionando o disco na ferramenta de gerenciamento de disco e realizando a operação de apagamento
![](https://manage.icewhale.io/api/static/docs/1730802287070_image.png)

### Escrever o arquivo _ResetNetwork
Crie um arquivo no diretório raiz do disco, nomeie-o `_ResetNetwork`, lembre-se de não ter um sufixo, e o arquivo deve estar vazio.
![](https://manage.icewhale.io/api/static/docs/1730802301568_image.png)

### Insira-o no ZimaOS e aguarde 20 segundos.
Qualquer uma das seguintes condições será considerada um sucesso.
- O display mostra que o IP foi alterado.
- O arquivo `_ResetNetwork` no pen drive foi removido.