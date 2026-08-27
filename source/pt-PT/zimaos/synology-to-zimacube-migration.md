---
title: Migrar de outro NAS
seo_title: "Migrar de outro NAS para o ZimaOS: guia de migração do Synology"
description: "Mova ficheiros de um NAS Synology para o ZimaOS através do Files LAN Storage, com uma abordagem faseada que mantém ambos os dispositivos em funcionamento."
type: Docs
author: Lauren Pan
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Mudar de marca de NAS não deve obrigá-lo a começar de novo. Os ficheiros são transferidos tal como estão e pode manter o dispositivo antigo em funcionamento enquanto se adapta. Esta página apresenta o método recomendado; as instruções detalhadas encontram-se no manual indicado abaixo.

## Método recomendado

A forma mais simples é utilizar a aplicação Files. Esta liga-se ao dispositivo antigo através da rede e permite copiar o que quiser, quando quiser.

1. No dispositivo antigo, confirme que as pastas que pretende mover estão partilhadas.
2. No ZimaOS Files, adicione o dispositivo antigo como LAN Storage.
3. Copie primeiro as pastas mais importantes e cole-as no armazenamento do ZimaOS.

Para consultar todos os passos com capturas de ecrã, veja **[Transferência manual do Synology](./from-synology-to-zimacube-migrate-all-files "Monte partilhas do Synology DSM no ZimaOS Files e copie os ficheiros passo a passo")**.

## Faça a migração ao seu ritmo

Não existe um prazo para concluir a mudança. Uma migração faseada funciona melhor do que transferir tudo de uma só vez.

Comece pelas pastas que utiliza diariamente. Quando estiverem no dispositivo novo, avance pelo restante conteúdo ao seu próprio ritmo. O dispositivo antigo continuará a disponibilizar os ficheiros até a última cópia estar concluída.

Depois da migração, vale a pena configurar de imediato um **[plano de cópia de segurança 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Proteja os dados do seu NAS com a regra de cópia de segurança 3-2-1")**. Os ficheiros acabados de migrar estão entre os dados mais valiosos que possui, e uma única cópia não constitui um plano.

## A seguir

- **[Transferência manual do Synology](./from-synology-to-zimacube-migrate-all-files "Monte partilhas do Synology DSM no ZimaOS Files e copie os ficheiros passo a passo")** — o manual detalhado
- **[Estratégia de cópia de segurança 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Proteja os dados do seu NAS com a regra de cópia de segurança 3-2-1")** — proteja os ficheiros que acabou de mover
- **[Cópia de segurança do telemóvel](./phone-backup "Crie automaticamente uma cópia de segurança do telemóvel no ZimaOS com o ZimaClient")** — incorpore os restantes dados da família
