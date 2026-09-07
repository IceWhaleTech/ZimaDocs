---
title: Ligar outro NAS
seo_title: "Ligue um NAS Synology ao ZimaOS: mova ficheiros ou faça cópias entre dispositivos"
description: "Ligue outro NAS ao seu dispositivo ZimaOS. Monte pastas partilhadas pela rede, mova ficheiros ou mantenha a ligação para cópias entre dispositivos no seu plano 3-2-1."
type: Docs
author: Lauren Pan
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---
Ligar outro NAS ao ZimaOS abre duas portas ao mesmo tempo. Pode mover os ficheiros definitivamente ou manter a ligação e utilizá-la para cópias entre dispositivos. Ambas começam com o mesmo passo: ligar os dois dispositivos através da sua rede. Esta página cobre o percurso completo, com o Synology DSM como exemplo.

## Porquê ligar

Uma ligação, duas coisas que pode fazer com ela:

- **Mover os ficheiros.** Traga as pastas que lhe interessam para o seu dispositivo ZimaOS, mantenha o NAS antigo em funcionamento durante a transição e limpe quando estiver pronto.
- **Mantê-lo no plano de cópias.** Um NAS ligado torna-se uma origem LAN ou um destino de segundo dispositivo no seu **[plano de cópias 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Proteja os dados do seu NAS com a regra de cópia de segurança 3-2-1")**. Uma ligação alimenta as duas tarefas.

## Ligar os dois dispositivos

O SMB é a língua comum aqui. O ZimaOS e outros sistemas NAS falam-na bem, o que torna possível uma transferência direta pela rede sem ferramentas adicionais.

Antes de começar, certifique-se de que as pastas que planeia mover estão partilhadas no dispositivo antigo. No DSM, consulte **Painel de Controlo > Pasta Partilhada**. Se uma pasta foi criada sem partilha, crie um novo diretório partilhado no DSM e mova para lá os dados que pretende transferir.

1. Abra a aplicação **Files** no painel do ZimaOS.
2. Na navegação à esquerda, clique no sinal de mais junto a **Storage** e depois em **LAN Storage**.

![Aplicação Files do ZimaOS com o sinal de mais junto a Storage e a opção LAN Storage](/images/guides/files-lan-storage-option.webp)

3. Na janela, introduza o endereço IP do outro dispositivo e clique em **Connect**. Se a conta partilhada tiver nome de utilizador e palavra-passe, introduza-os também.

![Janela de ligação do Files do ZimaOS para introduzir o endereço IP do outro NAS](/images/guides/files-lan-storage-connect.webp)

Quando a ligação é bem-sucedida, o dispositivo aparece como dispositivo de rede em Storage, com os diretórios partilhados à direita.

![Files do ZimaOS com o outro NAS ligado e os diretórios partilhados listados](/images/guides/files-lan-storage-listed.webp)

## Copiar os ficheiros

1. Abra o diretório partilhado e selecione os ficheiros e pastas que pretende mover. Pode selecionar tudo.
2. Clique no botão **Copy** no canto superior direito.

![Diretório partilhado no Files do ZimaOS com ficheiros selecionados e o botão Copy](/images/guides/files-lan-copy.webp)

3. Vá ao diretório de destino no armazenamento do ZimaOS e clique em **Paste**.

![Diretório de armazenamento do ZimaOS com o botão Paste no canto superior direito](/images/guides/files-lan-paste.webp)

{% note warn Verificação de capacidade %}
Certifique-se de que a capacidade restante do armazenamento de destino é maior do que o tamanho total do que vai copiar. Depois, deixe a transferência correr.
{% endnote %}

Copiar deixa os originais no dispositivo antigo. Nada é apagado até decidir limpar, o que torna seguro verificar as cópias primeiro.

Quando a transferência termina, os ficheiros aparecem no armazenamento do ZimaOS como qualquer outro conteúdo do dispositivo. Abra-os, confirme que chegou tudo e o NAS antigo pode continuar a servir até estar pronto para o reformar.

![Files do ZimaOS com as pastas copiadas já disponíveis no armazenamento do ZimaOS](/images/guides/files-lan-copied.webp)

## Vá com tempo

Não existe prazo para concluir a mudança. Uma migração faseada funciona melhor do que uma migração de uma só vez.

Comece pelas pastas que utiliza todos os dias. Quando estiverem no novo dispositivo, avance pelo resto ao seu ritmo. O dispositivo antigo continua a servir os ficheiros até à última cópia.

## Depois da migração

Quando os ficheiros estiverem no novo dispositivo, proteja-os com um **[plano de cópias 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Proteja os dados do seu NAS com a regra de cópia de segurança 3-2-1")**. Uma biblioteca acabada de migrar é exatamente o que não quer perder duas vezes.

## A seguir

- **[Estratégia de cópia de segurança 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Proteja os dados do seu NAS com a regra de cópia de segurança 3-2-1")** — proteja os ficheiros que acabou de mover
- **[Ligar unidades na nuvem](./cloud-drive-connect "Ligue o Google Drive, Dropbox ou OneDrive ao ZimaOS")** — a outra metade da história externa
- **[Cópia de segurança do telemóvel](./phone-backup "Efetuar automaticamente uma cópia de segurança do telemóvel para o ZimaOS com o ZimaClient")** — traga também o resto dos dados da casa
