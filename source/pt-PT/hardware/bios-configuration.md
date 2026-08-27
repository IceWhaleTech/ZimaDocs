---
title: Configuração do BIOS
seo_title: "Configuração do BIOS do ZimaCube: ordem de arranque, ventoinhas e alimentação"
description: "Configure as definições do BIOS do ZimaCube: aceder ao BIOS, alterar a ordem de arranque, ajustar as curvas das ventoinhas, definir opções de alimentação e ativar funcionalidades de hardware."
type: Docs
author: Lauren Pan
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

O BIOS do ZimaCube permite controlar a ordem de arranque, a velocidade das ventoinhas, o comportamento da alimentação e as definições de hardware. A maioria dos utilizadores não precisará de o alterar, mas há algumas opções que vale a pena conhecer.

## Aceder ao BIOS

1. Ligue um teclado e um monitor ao ZimaCube.
2. Ligue o dispositivo.
3. Prima **F11** repetidamente durante o ecrã de arranque até aparecer o menu de arranque.
4. Selecione **Enter Setup** para abrir a interface do BIOS.

Se F11 não funcionar, experimente **Delete** ou **F2**; a tecla exata depende da versão do BIOS.

## Ordem de arranque

Se precisar de arrancar a partir de uma unidade USB, por exemplo para instalar ou recuperar o sistema operativo, altere a ordem de arranque:

1. No BIOS, abra o separador **Boot**.
2. Procure **Boot Option Priorities**.
3. Utilize as teclas +/- para mover o dispositivo USB para o primeiro lugar da lista.
4. Prima **F10** para guardar e sair.

O ZimaCube tentará agora arrancar primeiro a partir do USB. Quando terminar, reponha a definição ou retire a unidade USB antes de reiniciar.

## Controlo das ventoinhas

O ZimaCube tem duas ventoinhas de sistema. Pode ajustar o respetivo funcionamento no BIOS:

1. Aceda a **Advanced > Hardware Monitor**.
2. Procure **CPU Fan Settings** e **System Fan Settings**.
3. Escolha um modo:
   - **Standard**: A velocidade das ventoinhas aumenta à medida que a temperatura sobe. Adequado para utilização diária.
   - **Silent**: Reduz a velocidade das ventoinhas para um funcionamento mais silencioso. Utilize este modo se o ZimaCube estiver numa área habitada e não estiver sujeito a cargas elevadas.
   - **Full Speed**: Proporciona o arrefecimento máximo. Utilize este modo se o ZimaCube estiver num ambiente quente ou sob carga constante.
4. Prima **F10** para guardar.

## Definições de alimentação

- **Restore on AC Power Loss**: Determina o que acontece após uma falha de energia. Selecione **Power On** se pretender que o ZimaCube arranque automaticamente quando a alimentação regressar. Consulte o **[guia de arranque automático](./auto-power-on)** para obter mais informações.
- **Wake on LAN**: Ative esta opção se pretender ligar o ZimaCube remotamente através da rede. Depois de a ativar no BIOS, também terá de a configurar no ZimaOS. Consulte **[Ativar Wake-on-LAN](./enable-wol-on-zimacube)**.

## Configuração do hardware

A maioria das definições de hardware deve permanecer nos valores predefinidos, exceto se tiver um motivo específico para as alterar:

- **VT-d / Virtualization Technology**: Está ativado por predefinição. Mantenha esta opção ativa se pretender executar máquinas virtuais.
- **SATA Mode**: Deve estar definido como **AHCI**. Não altere esta opção sem compreender as consequências; mudar para o modo RAID sem a configuração correta pode tornar as unidades ilegíveis.
- **Above 4G Decoding**: Ativa o suporte para dispositivos PCIe de grande dimensão, como GPU. Ative esta opção se instalar uma placa gráfica dedicada.

Se alguma alteração impedir o arranque do sistema, consulte o **[guia de reposição do CMOS](../help-center/resets-cmos)** para restaurar as predefinições do BIOS.
