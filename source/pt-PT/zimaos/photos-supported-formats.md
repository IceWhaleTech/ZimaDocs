---
title: Formatos suportados do Photos
seo_title: "Formatos suportados do ZimaOS Photos: imagens, RAW e metadados de vídeo"
description: "Os formatos que o ZimaOS Photos indexa e entende. Formatos de imagem, suporte a RAW de câmara, comportamento de miniaturas e metadados de vídeo numa só referência."
type: Docs
author: Collin
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---
**O Photos está disponível a partir do ZimaOS 1.8.**

O Photos foi feito para receber tudo o que fotografa, do telemóvel no bolso aos ficheiros RAW no cartão da câmara. Esta página lista o que entra na biblioteca e como cada formato se comporta depois de entrar.

## Como funciona o suporte

Três coisas podem acontecer a um ficheiro no Photos, e nem sempre vêm juntas:

- **Indexação.** O ficheiro é aceite na biblioteca.
- **Miniaturas.** É gerada uma imagem de pré-visualização para a galeria.
- **Metadados.** A câmara, a objetiva e as definições são lidas e mostradas.

Um formato pode ser indexado enquanto a miniatura depende do próprio ficheiro. Os RAW são o exemplo principal: uma câmara que incorpora uma pré-visualização JPEG obtém uma miniatura rápida, enquanto um ficheiro sem ela precisa de descodificação. Ambos acabam na biblioteca com os seus metadados.

## Formatos de imagem

| Família de formatos | Indexado | Miniaturas | Metadados |
|---|---|---|---|
| JPEG (.jpg, .jpeg, .jfif, .mpo) | Sim | Servido diretamente ou redimensionado | Campos padrão e etiquetas de fabricante |
| HEIC, HEIF, AVIF | Sim | Extrator integrado, evita a descodificação completa | Sim, incluindo dados de Live Photo |
| PNG, WebP, GIF, BMP, ICO | Sim | Pipeline genérico | Campos básicos |
| TIFF (.tif, .tiff) | Sim | Pré-visualização incorporada preferida | Sim |
| Contentores profissionais (PSD, PSB, JPEG XL, JPEG 2000, EXR) | Sim | Pipeline genérico | Sim |

Os campos de metadados padrão são câmara, objetiva, distância focal, abertura, tempo de exposição, ISO, GPS, orientação e data. Os metadados de fabricante, como MakerNote e XMP privado, são lidos para as marcas habituais de telemóveis e câmaras.

## Formatos RAW

Os ficheiros RAW seguem uma de três estratégias de miniatura, consoante o que a câmara incorpora:

| Grupo | Formatos | Comportamento da miniatura |
|---|---|---|
| Pré-visualização incorporada primeiro | ARW, TIFF | O Photos lê a pré-visualização JPEG incorporada pela câmara, sem descodificar a imagem do sensor. |
| Pré-visualização quando disponível | CR2, CR3, CRW, DNG, NEF, NRW, ORF, ORI, PEF, RW2, SR2, SRF e outros | A pré-visualização incorporada é usada quando é suficientemente grande para o pedido. Caso contrário, o Photos descodifica o RAW. |
| Dependente do descodificador | 3FR, DCR, ERF, IIQ, KDC, MEF, MOS, MRW, RAF, RWL, SRW | Raramente têm uma pré-visualização utilizável. As miniaturas são geradas por descodificação e dependem do suporte do descodificador. |
| Miniatura nativa | X3F | O Photos lê diretamente a miniatura RGB incorporada da câmara. |

Se um formato não tiver pré-visualização incorporada nem suporte de descodificador, o ficheiro continua a ser indexado e os seus metadados são mantidos. A miniatura simplesmente não fica disponível.

## Metadados de vídeo

Os ficheiros de vídeo usam um caminho de metadados separado. Os ficheiros QuickTime e ISO-BMFF (MOV, MP4), AVI e Matroska (MKV) são todos analisados, pelo que os metadados de vídeo aparecem ao lado das fotografias.

## A seguir

- **[Fotografias](./photos "Navegue, pesquise e redescubra a sua biblioteca de fotografias no ZimaOS")** — a própria biblioteca
- **[Cópia de segurança do telemóvel](./phone-backup "Efetuar automaticamente uma cópia de segurança do telemóvel para o ZimaOS com o ZimaClient")** — coloque as fotografias do telemóvel na biblioteca
