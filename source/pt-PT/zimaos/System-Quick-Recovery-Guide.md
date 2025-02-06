---
title: Guia Rápido de Recuperação do Sistema ZimaOS
description: 
type: Docs
author: admin
tip: O formato fixo da barra superior não deve ser removido, a descrição é a descrição do artigo, se não for preenchida, o conteúdo será cortado na primeira parte do texto
---
## Introdução
ZimaOS é um sistema operativo NAS leve que utiliza um design de duas partições (Slot A e Slot B), cada partição tem cerca de 6GB de tamanho. Quando uma partição falha, você pode facilmente alternar para a partição de backup para garantir que o sistema continue a funcionar. Este tutorial irá guiá-lo sobre como alternar para a partição de backup quando houver um problema com o sistema.
## Preparação
Antes de começar, certifique-se de que tem um monitor e teclado conectados.
## Guia passo a passo:
**Passo 1: Inicie o dispositivo**
- Ligue o dispositivo ZimaOS.

**Passo 2: Acesse o menu GRUB**
- Quando o sistema iniciar, preste atenção à exibição da tela. Pressione rapidamente as teclas de seta ↑ e ↓ no teclado para abrir o menu GRUB. O menu GRUB é exibido da seguinte forma:
![](https://manage.icewhale.io/api/static/docs/1738826493349_image.png)

**Passo 3: Selecione a Partição de Arranque**
- Use as teclas de seta para selecionar a partição alternativa da qual deseja iniciar (por exemplo, se o Slot A falhar, selecione o Slot B).

**Passo 4: Inicie a Partição Selecionada**
- Pressione Enter para iniciar a partir da partição selecionada.

**Agora você pode entrar com sucesso no sistema ZimaOS**
![](https://manage.icewhale.io/api/static/docs/1738826615202_image.png)
## Dicas
**Como posso saber em qual partição estou atualmente?**
1. Execute o comando do terminal `rauc status` e verifique a saída para determinar a partição que está atualmente em uso.
2. Na saída, `booted` indica a partição que está atualmente em uso.
![](https://manage.icewhale.io/api/static/docs/1738827159260_image.png)
## Notas Adicionais:
1. **Segurança dos dados:**
- Alternar partições não afetará os dados do usuário, porque os dados do usuário do ZimaOS geralmente são armazenados em uma partição separada (como /data).
2. **Entendendo as opções do menu:**
- "OK=1" significa que a partição está em boas condições, "TRY=1" ou "TRY=0" indica o número de vezes que a partição foi tentada para iniciar.
- A opção de shell de resgate é para usuários avançados resolverem problemas ou repararem o sistema, mas não é necessário selecioná-la, a menos que seja necessário.
3. **Operações avançadas:**
- Pressione a tecla 'e' para editar o comando de arranque e pressione a tecla 'c' para entrar no modo de linha de comando para usuários experientes.

**Se precisar de mais assistência ou tiver outras perguntas, entre em contato com a equipe do ZimaOS: <feedback@zimaos.com>.**