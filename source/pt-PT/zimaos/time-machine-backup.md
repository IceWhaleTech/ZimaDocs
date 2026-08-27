---
title: Cópia de segurança do Time Machine no ZimaOS
seo_title: "Cópia de segurança do Time Machine no seu NAS: proteja um Mac com o ZimaOS"
description: "Crie cópias de segurança do Mac no ZimaOS com o Time Machine. Configure uma partilha Samba para o Time Machine e ligue-a através das Definições do Sistema do macOS."
type: Docs
author: admin
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Se utiliza um Mac, o Time Machine é a solução de cópia de segurança que já conhece. Aponte-o para o seu dispositivo ZimaOS e todos os Mac da casa terão cópias automáticas completas sem uma subscrição adicional.

## Passo 1: Configurar uma pasta partilhada no ZimaOS

1. Abra o painel do ZimaOS e aceda à página **Files**.
2. Localize ou crie a pasta que pretende utilizar como destino das cópias de segurança, por exemplo **Time Machine**.
3. Clique com o botão direito do rato na pasta e selecione **Share via Samba**.

![Menu de contexto do ZimaOS Files com a opção Share via Samba numa pasta](https://manage.icewhale.io/api/static/docs/1738916403063_image.png)

4. Na janela, confirme o nome e a localização da pasta e selecione **Configure for Time Machine**. O utilizador predefinido do ZimaOS será utilizado para autenticação. Também pode adicionar outros utilizadores.

![Janela de partilha Samba com a opção Configure for Time Machine selecionada](https://manage.icewhale.io/api/static/docs/1738916455895_image.png)

5. Clique em **Create**.

![Criação da pasta partilhada do ZimaOS concluída para a cópia de segurança do Time Machine](https://manage.icewhale.io/api/static/docs/1738916492447_image.png)

## Passo 2: Ligar o Time Machine no Mac

1. Abra as **Definições do Sistema** e aceda a **Time Machine**.

![Definições do Sistema do macOS com as opções de cópia de segurança do Time Machine](https://manage.icewhale.io/api/static/docs/1738916795038_image.png)

2. Clique em **Adicionar disco de cópia de segurança**.

![Definições do Time Machine com o botão Adicionar disco de cópia de segurança](https://manage.icewhale.io/api/static/docs/1738916825362_image.png)

3. Selecione a pasta partilhada que acabou de criar no ZimaOS e clique em **Configurar disco**.

![Lista de discos do Time Machine com a pasta partilhada do ZimaOS selecionada](https://manage.icewhale.io/api/static/docs/1738917029430_image.png)

4. Quando solicitado, introduza o nome de utilizador e a palavra-passe do ZimaOS.

![Pedido do macOS para introduzir o nome de utilizador e a palavra-passe da partilha do Time Machine](https://manage.icewhale.io/api/static/docs/1738917049915_image.png)

## Passo 3: Iniciar a cópia de segurança

Com o Mac e o dispositivo ZimaOS na mesma rede, o Time Machine encontra a pasta de destino e começa automaticamente a criar a cópia de segurança.

![Interface do Time Machine com a primeira cópia de segurança em curso](https://manage.icewhale.io/api/static/docs/1738917181052_image.png)

{% note tip Resolução de problemas %}
Se a cópia falhar, verifique a ligação de rede e confirme que o serviço SMB está ativado no dispositivo. Se o macOS não permitir introduzir a palavra-passe, clique primeiro numa área vazia e volte a clicar no campo da palavra-passe.
{% endnote %}

## Restaurar ficheiros

Quando precisar de recuperar um ficheiro, restaure-o através da interface do Time Machine. O guia da Apple explica o processo em detalhe: [Restaurar elementos com cópia de segurança do Time Machine no Mac](https://support.apple.com/zh-cn/guide/mac-help/mh11422/11.0/mac/11.0).

## A seguir

- **[Estratégia de cópia de segurança 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Proteja os dados do seu NAS com a regra de cópia de segurança 3-2-1")** — o Time Machine é uma parte do plano; adicione também uma cópia externa
- **[Cópia de segurança do computador](./computer-backup "Copie o computador para o ZimaOS através do Finder, Explorador ou sincronização")** — opções para proteger todos os computadores da casa
