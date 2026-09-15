---
title: Transferir torrents com o Transmission
seo_title: "Transmission no ZimaOS: transfira torrents para o seu NAS"
description: "Instale o Transmission através da App Store do ZimaOS, adicione um torrent ou ligação magnet e guarde as transferências no NAS."
type: Docs
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

O Transmission é um cliente BitTorrent com uma interface no navegador. No ZimaOS, guarda as transferências diretamente no armazenamento do NAS e permite geri-las a partir de qualquer navegador na rede local.

> Transfira apenas conteúdos que tenha o direito legal de utilizar ou partilhar.

## Instalar o Transmission

1. Abra o painel do ZimaOS e selecione **App Store**.
2. Pesquise **Transmission**, selecione a aplicação e clique em **Install**.
3. Aguarde até a aplicação estar em execução e abra o Transmission no painel do ZimaOS.
4. Inicie sessão com as credenciais apresentadas no ecrã de instalação. Os valores predefinidos atuais da App Store são:

| Nome de utilizador | Palavra-passe |
| --- | --- |
| `casaos` | `casaos` |

O pacote da App Store disponibiliza a interface Web na porta `9091` e associa a pasta `/DATA/Downloads` do ZimaOS a `/downloads` dentro do Transmission. Para abrir a aplicação manualmente, utilize `http://IP-DO-ZIMAOS:9091/transmission/web/`.

![Interface Web do Transmission com a lista de transferências vazia](/images/app-store/transmission-dashboard.png)

Antes de permitir o acesso fora da sua rede local de confiança, atualize as credenciais: clique nos três pontos no canto superior direito do ícone da aplicação Transmission, abra **Settings**, altere os valores `USER` e `PASS`, guarde e reinicie a aplicação. Utilize HTTPS se publicar a interface através de um proxy inverso.

## Adicionar um torrent ou uma ligação magnet

1. Clique em **Open** no canto superior esquerdo.
2. Selecione um ficheiro `.torrent` ou cole um URL HTTP(S) de torrent ou uma ligação magnet em **Or enter a URL**.
3. Defina **Destination folder** como `/downloads/complete` ou escolha outra pasta dentro de `/downloads`. Utilize o caminho do contentor apresentado no Transmission, não o caminho do anfitrião ZimaOS.
4. Mantenha **Start when added** selecionado para iniciar a transferência de imediato e clique em **Add**.

![Janela Add Torrents do Transmission com a pasta de transferência predefinida](/images/app-store/transmission-add-torrent.png)

### Experimentar um torrent oficial do Debian

O Debian disponibiliza transferências de teste legais na [página oficial de imagens BitTorrent](https://cdimage.debian.org/debian-cd/current/amd64/bt-cd/). Abra a página, copie a ligação do ficheiro `amd64-netinst.iso.torrent` atual, cole-a em **Or enter a URL** e clique em **Add**.

![Imagem netinst do Debian a ser transferida no Transmission](/images/app-store/transmission-debian-download.png)

A linha da transferência mostra o progresso, o tempo restante, os pares ligados e a velocidade atual. Com a associação predefinida, os ficheiros concluídos aparecem em **Files > Downloads > complete** no ZimaOS.

## Gerir transferências

- Selecione uma transferência e utilize **Start** ou **Stop** para a controlar.
- Utilize **Inspector** para consultar ficheiros, pares, trackers e limites por transferência.
- Utilize **Delete** para remover uma transferência. Confirme se também pretende eliminar os dados transferidos.
- Utilize os filtros acima da lista para mostrar transferências ativas, em curso, a semear, em pausa, concluídas ou com erros.

## Resolução de problemas

- **O navegador apresenta `401 Unauthorized`:** Verifique os valores `USER` e `PASS` nas definições do Transmission e reinicie a aplicação.
- **A transferência não encontra pares ou continua lenta:** Confirme que o torrent está ativo e permita a porta de pares `51413` na firewall ou no router quando necessário.
- **O Transmission não consegue escrever o ficheiro:** Mantenha o destino dentro de `/downloads` e verifique as permissões de armazenamento da aplicação no ZimaOS.
- **Não encontra um ficheiro concluído:** Verifique o destino apresentado no Transmission. A pasta predefinida `/downloads/complete` corresponde a **Files > Downloads > complete** no ZimaOS.
