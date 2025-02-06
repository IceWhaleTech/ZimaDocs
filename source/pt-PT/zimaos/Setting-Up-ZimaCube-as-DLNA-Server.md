---
title: Como Criar um Centro de Mídia em Casa com ZimaCube e DLNA?
description: 
type: Docs
author: admin
tip: O formato fixo do cabeçalho não deve ser removido, a descrição é para o artigo, e caso não seja preenchida, o conteúdo será cortado a partir do primeiro parágrafo.
---
## Introdução
Nesta era digital, os sistemas de entretenimento em casa estão se tornando cada vez mais inteligentes e interconectados. Como um dispositivo de armazenamento em nuvem pessoal de alto desempenho, o ZimaCube não só fornece uma solução de armazenamento de grande capacidade, mas também suporta o protocolo DLNA (Digital Living Network Alliance), permitindo que você compartilhe e reproduza facilmente qualquer conteúdo multimídia na sua rede doméstica.

Este tutorial guiará você sobre como configurar o ZimaCube como um servidor DLNA e usar a XX TV como um cliente para alcançar uma experiência de reprodução de mídia sem interrupções.

Antes de começar, certifique-se de ter baixado e instalado a versão mais recente do ZimaOS: https://github.com/IceWhaleTech/ZimaOS/releases
## Passo 1: Abra as Configurações e entre no "Modo de Desenvolvedor"
![](https://manage.icewhale.io/api/static/docs/1738831331021_image.png)
## Passo 2: Ative o DLNA
Na interface do "**Modo de Desenvolvedor**", encontre o botão de "**DLNA**" e certifique-se de que está ativado.
![](https://manage.icewhale.io/api/static/docs/1738831393315_image.png)
## Passo 3: Configure as configurações do DLNA
Clique em "**Configuração do DLNA**" para entrar na interface de configurações. Você pode modificar as seguintes duas opções:
- **Nome amigável:** O padrão é "Servidor DLNA ZimaCube", você pode personalizar um nome que lhe convier melhor.
- **Caminho da Mídia:** O caminho padrão é `/media`, você pode **modificá-lo para outros caminhos de armazenamento** conforme necessário.

| ![](https://manage.icewhale.io/api/static/docs/1738831857738_image.png) | ![](https://manage.icewhale.io/api/static/docs/1738831871432_image.png) |
| - | - |

Após completar as modificações, clique no botão "**Salvar**".
## Passo 4: Reproduza conteúdo na TV
1. Abra um dispositivo de TV ou aplicativo de player que suporte DLNA
![](https://manage.icewhale.io/api/static/docs/1738831977224_image.png)
2. Pesquise os dispositivos DLNA na rede e encontre "Servidor DLNA ZimaCube".
![](https://manage.icewhale.io/api/static/docs/1738832005480_image.png)
3. Navegue pelos arquivos de mídia compartilhados e selecione Reproduzir.

| ![](https://manage.icewhale.io/api/static/docs/1738832059024_image.png) | ![](https://manage.icewhale.io/api/static/docs/1738832067952_image.png) | ![](https://manage.icewhale.io/api/static/docs/1738832081469_image.png) |
| - | - | - |

## Solução de Problemas
Se você tiver problemas de conexão ou reprodução, verifique os seguintes pontos:
- Certifique-se de que o ZimaCube e a TV estejam na mesma LAN.
- Verifique se o formato do arquivo de mídia é compatível com o dispositivo de TV.
- Certifique-se de que há arquivos de mídia reproduzíveis na pasta compartilhada.

## Observações Adicionais
Como diferentes marcas de TVs inteligentes podem ter diferentes interfaces e funções, consulte o guia de uso do DLNA para a marca da sua TV.

## Resumo
Com passos simples, você agora pode facilmente compartilhar e desfrutar de vídeos e músicas em HD na sua rede doméstica. Espero que isto possa ajudá-lo a construir um sistema de entretenimento doméstico inteligente!