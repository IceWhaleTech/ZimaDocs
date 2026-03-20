---
title: Reset Network Settings
description: 
type: Docs
author: icewhale123456
tip: A formatação fixa da barra superior não deve ser removida, description é a descrição do artigo, se não estiver preenchido será retirada a primeira parte do conteúdo
---
Se configurou um IP estático no ZimaOS e precisa de redefinir as definições de rede devido a alterações na rede, pode usar este tutorial para redefinir a ligação de IP configurada.

{% note warn  %} 
**Nota:** Antes de tentar o procedimento de redefinição via USB abaixo, experimente ligar a um porto de rede diferente e depois use o ZimaClient para pesquisar novamente a rede.
{% endnote %}

### Formatar drive USB
No Windows, a formatação pode ser feita clicando com o botão direito no drive USB e selecionando exFAT para formatar.
![](https://manage.icewhale.io/api/static/docs/1730802271117_image.png)

No Mac, a formatação pode ser feita selecionando o disco na ferramenta de gestão de discos e realizando a operação de apagar.
![](https://manage.icewhale.io/api/static/docs/1730802287070_image.png)

### Criar ficheiro _ResetNetwork
Crie um ficheiro no diretório raiz do disco, nomeie-o `_ResetNetwork`, lembre-se de não adicionar extensão, e o ficheiro deve estar vazio.
![](https://manage.icewhale.io/api/static/docs/1730802301568_image.png)

### Inserir no ZimaOS e aguardar 20 segundos.
Qualquer uma das seguintes condições será considerada um sucesso:
- O ecrã mostra que o IP foi alterado.
- O ficheiro `_ResetNetwork` no drive USB foi removido.