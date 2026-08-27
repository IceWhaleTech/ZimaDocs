---
title: Transferência manual do Synology
seo_title: "Transferência manual do Synology: monte partilhas DSM e copie ficheiros para o ZimaOS"
description: "Transfira ficheiros manualmente do Synology DSM para o ZimaOS. Monte partilhas DSM como LAN Storage no Files e copie os ficheiros passo a passo, verificando a capacidade e as contas."
type: Docs
author: Lauren Pan
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Este é o manual passo a passo para mover ficheiros de um dispositivo Synology. Se pretender começar pelo método recomendado e por uma estratégia faseada, consulte **[Migrar de outro NAS](./synology-to-zimacube-migration "Mova ficheiros de um NAS Synology para o ZimaOS através de um processo faseado")**.

## Montar partilhas DSM no Files

O SMB é o protocolo comum neste processo. Tanto o Synology DSM como o ZimaOS o suportam corretamente, permitindo uma transferência direta pela rede sem ferramentas adicionais.

Antes de começar, confirme que as pastas a mover estão partilhadas no DSM. Se uma pasta tiver sido criada sem partilha, crie um novo diretório partilhado no DSM e mova para lá os dados a transferir.

1. Abra a aplicação Files no painel do ZimaOS.
2. Na navegação esquerda, clique no sinal de mais junto a Storage e selecione **LAN Storage**.

![ZimaOS Files com o sinal de mais junto a Storage e a opção LAN Storage](https://manage.icewhale.io/api/static/docs/1722482274183_image.png)

3. Na janela, introduza o endereço IP do dispositivo Synology e clique em **Connect**. Se a conta partilhada tiver nome de utilizador e palavra-passe, introduza-os também.

![Janela de ligação do ZimaOS Files para introduzir o endereço IP do Synology DSM](https://manage.icewhale.io/api/static/docs/1722482301030_image.png)

Quando a ligação for estabelecida, o dispositivo Synology aparece como dispositivo de rede em Storage e os diretórios partilhados surgem à direita.

![ZimaOS Files com o dispositivo Synology ligado e os diretórios partilhados apresentados](https://manage.icewhale.io/api/static/docs/1722482333599_image.png)

## Copiar os ficheiros

1. Abra o diretório partilhado e selecione os ficheiros e as pastas a mover. Pode selecionar tudo.
2. Clique em **Copy** no canto superior direito.

![Diretório partilhado do Synology no ZimaOS Files com ficheiros selecionados e o botão Copy](https://manage.icewhale.io/api/static/docs/1722482355535_copyImage.png)

3. Aceda ao diretório de destino no armazenamento do ZimaOS e clique em **Paste**.

![Diretório de armazenamento do ZimaOS com o botão Paste no canto superior direito](https://manage.icewhale.io/api/static/docs/1722482356366_copyImage.jpeg)

{% note warn Verificação da capacidade %}
Confirme que a capacidade livre do armazenamento de destino é superior ao tamanho total dos dados a copiar. Depois, aguarde a conclusão da transferência.
{% endnote %}

## Após a migração

Quando os ficheiros estiverem no dispositivo novo, proteja-os com um **[plano de cópia de segurança 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Proteja os dados do seu NAS com a regra de cópia de segurança 3-2-1")**. Uma biblioteca acabada de migrar é precisamente o tipo de dados que não quer perder novamente.
