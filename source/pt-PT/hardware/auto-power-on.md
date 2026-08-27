---
title: Solução de arranque automático para o ZimaCube
description: "Configure o ZimaCube para ligar automaticamente após uma falha de energia com este guia passo a passo através do BIOS."
type: Docs
author: Lauren Pan
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

Por predefinição, o ZimaCube aguarda que prima o botão de alimentação depois de ser ligado à corrente. Se pretender que arranque automaticamente — por exemplo, porque está guardado num armário ou porque deve recuperar após uma falha de energia — existem duas formas de o configurar.

Este guia explica o método através do BIOS. Se o BIOS não tiver a opção **Restore on AC Power Loss**, consulte o **[método com jumper](./auto-power-on-setup)**.

## Método através do BIOS

1. Encerre o ZimaCube e ligue um teclado e um monitor.
2. Ligue o equipamento e prima **F11** repetidamente durante o arranque para abrir o menu de arranque. Em seguida, selecione **Enter Setup** para abrir o BIOS.
3. Utilize as teclas de seta para aceder ao separador **Advanced**.
4. Procure **Restore on AC Power Loss** ou uma opção com um nome semelhante. A localização exata varia consoante a versão do BIOS; normalmente encontra-se em Advanced > Power Management ou Advanced > Chipset Configuration.
5. Altere a definição para **Power On**.
6. Prima **F10** para guardar e sair.

Depois de guardar, desligue o cabo de alimentação, aguarde alguns segundos e volte a ligá-lo. O ZimaCube deverá arrancar automaticamente sem ser necessário premir o botão de alimentação.

Se não encontrar a opção **Restore on AC Power Loss**, é possível que a sua versão do BIOS não a inclua. Nesse caso, utilize o método com jumper indicado acima; funciona em todos os modelos ZimaCube.

## Quando utilizar cada método

- **Método através do BIOS**: É mais rápido e não exige a abertura da caixa. Funciona na maioria das unidades ZimaCube distribuídas após meados de 2024.
- **Método com jumper**: Funciona em todos os modelos ZimaCube, independentemente da versão do BIOS. Exige a abertura da tampa superior e a deslocação de uma pequena capa plástica do jumper na placa principal.
