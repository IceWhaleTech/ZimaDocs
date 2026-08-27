---
title: Método de atualização da BIOS do ZimaCube
description: "Atualize a BIOS do ZimaCube com uma pen USB. Instruções passo a passo para os modelos N100 e Pro, com ligações para transferência e resolução de problemas."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

As atualizações da BIOS podem corrigir problemas de compatibilidade de hardware, melhorar a estabilidade do sistema e adicionar novas funcionalidades. Atualize a BIOS apenas se estiver a enfrentar um problema específico resolvido por uma versão mais recente ou se a nossa equipa de suporte o tiver recomendado.

Se o processo de atualização for interrompido —por exemplo, devido a uma falha de energia—, a motherboard pode deixar de arrancar. Antes de começar, certifique-se de que o ZimaCube está ligado a uma fonte de alimentação fiável.

## O que precisa

- Uma pen USB vazia e formatada como FAT32
- Um monitor ligado através de Mini DisplayPort
- Um teclado USB
- O pacote de BIOS correto para o seu modelo de ZimaCube (ver abaixo)

## Passo 1: Identificar o modelo

Antes de transferir o ficheiro, confirme qual é o seu ZimaCube. O nome do modelo está impresso numa etiqueta na parte inferior do dispositivo e será um dos seguintes:

| Modelo | Pacote de BIOS |
|---|---|
| **ZimaCube N100** | [Ligação do Google Drive](https://drive.google.com/file/d/1yd8Z2fJNr69TLyy6381JzVSHP_Af0awQ/view?usp=drive_link) |
| **ZimaCube Pro 1235u** | [Ligação do Google Drive](https://drive.google.com/file/d/1hQI2oe0C9CIsylP0vjdP3tZSljgslkx8/view?usp=drive_link) |
| **ZimaCube Pro 1235u com Resizable BAR** | [Ligação do Google Drive](https://drive.google.com/file/d/1i0cm2QHK2e4oNNmQU-0-pnABuqp4HR8N/view?usp=drive_link) |

A funcionalidade Resizable BAR já está incluída na BIOS do ZimaCube 2, pelo que não é necessária uma atualização para esse modelo.

## Passo 2: Preparar a pen USB

1. Formate a pen USB como **FAT32**.
2. Transfira o pacote de BIOS do seu modelo a partir da tabela acima.
3. Extraia o arquivo transferido. Deverá ver uma pasta `EFI` no interior.
4. Copie toda a pasta `EFI` para a raiz da pen USB.

![](https://manage.icewhale.io/api/static/docs/1779788907886_image.png)

## Passo 3: Arrancar a partir da pen USB

1. Ligue a pen USB, o teclado e o monitor ao ZimaCube.
2. Ligue o dispositivo e prima **F11** repetidamente até aparecer o menu de arranque.
3. Utilize as teclas de seta para selecionar **UEFI: (a sua pen USB)** e prima Enter.

![](https://manage.icewhale.io/api/static/docs/1729233125821_image.png)

## Passo 4: Executar a atualização

A atualização da BIOS inicia-se automaticamente e será apresentado um ecrã de progresso. Não desligue a alimentação nem retire a pen USB durante o processo; normalmente demora menos de dois minutos.

![](https://manage.icewhale.io/api/static/docs/1729233155418_image.png)

## Passo 5: Concluir

Quando a atualização terminar, será apresentado um ecrã de confirmação.

![](https://manage.icewhale.io/api/static/docs/1729233179864_image.png)

Prima o botão de alimentação para desligar. Retire a pen USB. Prima novamente o botão de alimentação para arrancar normalmente.

O primeiro arranque após uma atualização da BIOS pode demorar mais do que o habitual porque o sistema está a reinicializar o hardware. Isto é normal.

## Resolução de problemas

- **O menu de arranque não aparece**: experimente outra porta USB. As portas USB 2.0 traseiras tendem a ser as mais fiáveis para atualizações da BIOS. Experimente também **Delete** ou **F2** em vez de F11.
- **A pen USB não é detetada no menu de arranque**: certifique-se de que está formatada como FAT32 e de que a pasta EFI está na raiz, não dentro de outra pasta.
- **A atualização parece bloqueada**: aguarde pelo menos cinco minutos antes de concluir que parou. Algumas atualizações da BIOS têm pausas longas entre passos.
- **O sistema não arranca após a atualização**: experimente o procedimento de **[reposição da CMOS](./resets-cmos)** para restaurar as predefinições da BIOS.
