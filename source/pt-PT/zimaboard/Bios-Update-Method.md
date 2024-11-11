---
title: Método de Atualização de BIOS do ZimaBoard
description: 
type: "Docs"
tip: O formato fixo da barra superior não deve ser removido, a descrição é a descrição do artigo, se não preenchida, será extraída a primeira parte do conteúdo
---
## Pré-preparação:
- Pen drive USB (sem conteúdo) X1
- Monitor X1
- Teclado X1
- MiniDP X1
## Passo 1: Baixar o instalador da BIOS
**Link:**
{% note warn Aviso %}
Não há pacote de atualização de bios para o zimaboard832 com CPU J3455
{% endnote %}

| Modelo | CPU | Link para Download |
| - | - | - |
| ZimaBoard 232 | N3350 | [https://drive.google.com/file/d/1rlta-pCJsxf-pNaonC315TNpfAHhsBmo/view?usp=drive_link](https://drive.google.com/file/d/1rlta-pCJsxf-pNaonC315TNpfAHhsBmo/view?usp=drive_link) |
| ZimaBoard 432 | N3450 | [https://drive.google.com/file/d/19Fsh1zFckYG_Cdg8owyRLh_2kDQJamtG/view?usp=drive_link](https://drive.google.com/file/d/19Fsh1zFckYG_Cdg8owyRLh_2kDQJamtG/view?usp=drive_link) |
| ZimaBoard 832 | N3450 | [https://drive.google.com/file/d/1f66o8-FldwDss1PcCZSGS_PyrCnyoAGS/view?usp=drive_link](https://drive.google.com/file/d/1f66o8-FldwDss1PcCZSGS_PyrCnyoAGS/view?usp=drive_link) |
## Passo 2: Preparar um pen drive USB
Formate o pen drive USB no formato FAT32, abra o pacote de instalação de acordo com o número do modelo do ZimaBoard e copie a pasta EFI para um pen drive USB vazio.
|![](https://manage.icewhale.io/api/static/docs/1729154067524_image.png) | ![](https://manage.icewhale.io/api/static/docs/1729154081840_image.png) |
| - | - |
## Passo 3: Atualizar BIOS
Conecte o pen drive USB, teclado e monitor ao ZimaBoard, ligue e pressione F11 continuamente para entrar na tela de seleção e utilize o teclado para selecionar UEFI:
![](https://manage.icewhale.io/api/static/docs/1729154195372_image.png)
## Passo 4: Iniciar instalação
![](https://manage.icewhale.io/api/static/docs/1729154235770_image.png)

## Passo 5: Instalação concluída
![](https://manage.icewhale.io/api/static/docs/1729154248434_image.png)