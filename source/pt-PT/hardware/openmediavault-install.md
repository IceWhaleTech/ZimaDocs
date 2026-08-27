---
title: Tamanho Pequeno, Grandes Aplicações (OMV+ZimaBoard)
---
# Introdução ao OMV

![introduza o openmediavault](/images/Small-body-Big-applications-(OMV+Zima)/introduce-openmediavault.png)

**OpenMediaVault (OMV), uma solução de Armazenamento Conectado à Rede (NAS) baseada em Linux Debian para uso em um ambiente doméstico ou pequeno escritório, é uma solução simples e fácil de usar fora da caixa que pode ser instalada e gerida facilmente por qualquer utilizador novato e inclui muitos serviços padrão de aplicações de dados, como SSH, SMB, DAAP Media Server, RSync. Também pode ser aprimorada com recursos do framework de design modular para extensões de aplicações adicionais, como KVM, Docker, etc. Por outro lado, o pequeno tamanho da ZimaBoard e o pequeno tamanho do OMV significam conveniência para o utilizador. O tamanho realmente não importa!**

# Preparação da Instalação do OMV

- Arquivo de instalação do OMV [**imagem**](https://www.openmediavault.org/download.html) (Recomenda-se baixar a versão estável oficial OMV6 mais recente)
- Um pen drive com capacidade de pelo menos 1G
- Cabo miniDP conectando o monitor
- Cabo de rede: Conectado na porta de rede na ZimaBoard perto da porta miniDP
- Teclados: Um teclado conectado via USB é suficiente

# Atenções

- Se a gravação da imagem falhar, você pode usar uma ferramenta de disco, como Diskgenius, para limpar a partição e as informações de formato no pen drive. Tente gravar a imagem novamente.

- Como o processo de instalação do OMV requer um ambiente conectado à rede em muitos locais, é importante que o utilizador conecte a Zima a um roteador ou switch com uma conexão de Internet estável.

# Nova Instalação do OMV

## Configuração da BIOS

**1. Insira o pen drive, conecte o monitor com o cabo miniDP, conecte o teclado, ligue a ZimaBoard e pressione a tecla Del no teclado continuamente para entrar na BIOS.**
**2. Por padrão, a BIOS da ZimaBoard usa seu próprio eMMC como o disco de inicialização preferido, como mostrado aqui**

![configuração-da-bios](/images/Small-body-Big-applications-(OMV+Zima)/setup-of-bios.jpeg)

**3. Em Boot, ajuste a Opção de Inicialização #1 para a partição 1 do pen drive, da seguinte forma: `"UEFI:Legend ZhenJBFast 1100"` é a partição onde a imagem OMV6 está localizada, e `"UEFI:Legend ZhenJBFast 1100, Partição 1"` é o espaço restante no pen drive. `UEFI:Legend ZhenJBFast 1100, Partição 1"` é o espaço restante no pen drive, e o usuário deve selecionar `"UEFI:Legend ZhenJBFast 1100"` como a preferência de inicialização.**
**4. Após pressionar Save & Exit, a ZimaBoard irá reiniciar e ir para a tela de instalação do OMV6.**

![configuração-da-bios](/images/Small-body-Big-applications-(OMV+Zima)/chosse-uefi-boot.jpeg)

## Etapas de Instalação

**1. Para inicializar a instalação, selecione Instalar e pressione Enter**

![configuração-da-bios](/images/Small-body-Big-applications-(OMV+Zima)/install-omv.png)

**2. Selecione o idioma para o processo de instalação; o padrão é Inglês**

![configuração-da-bios](/images/Small-body-Big-applications-(OMV+Zima)/select-language.png)

**3. Por padrão, a ZimaBoard possui portas de rede duplas, com enp2s0 sendo a que está próxima à porta miniDP e enp3s0 sendo a que está próxima à fonte de alimentação**

![configuração-da-bios](/images/Small-body-Big-applications-(OMV+Zima)/choose-lan-port.jpeg)

**4. Quando o instalador perguntar ao usuário para selecionar o caminho de instalação do OMV, por favor, certifique-se de que está definido como “MMC/SD CARD”**

![configuração-da-bios](/images/Small-body-Big-applications-(OMV+Zima)/choose-emmc.jpeg)

**5. O instalador irá pedir ao usuário para confirmar que o espaço do disco rígido interno da ZimaBoard está limpo de todos os conteúdos e reparticionado**

![configuração-da-bios](/images/Small-body-Big-applications-(OMV+Zima)/partition-disks.jpeg)

**6. O instalador então pede ao usuário para definir a senha inicial para a conta root**

![configuração-da-bios](/images/Small-body-Big-applications-(OMV+Zima)/Initialize-password.jpeg)

{% note danger %}
**dicas:**
  Certifique-se de lembrar que esta configuração de senhas da conta é necessária para operações de configuração de fundo subsequentes.
{% endnote  %}

**7. Quando o instalador pedir ao usuário para selecionar a fonte de imagem Debian, por favor, certifique-se de selecionar o país ou região atual do usuário e escolher a fonte de imagem apropriada. Lembre-se: Esta escolha afetará significativamente a velocidade de atualização/instalação diária de vários plugins do OMV do usuário.**

![configuração-da-bios](/images/Small-body-Big-applications-(OMV+Zima)/choose-image.jpeg)

**8. Ao prosseguir para a imagem abaixo, a instalação fresca do OVM está completa, e o usuário pode continuar com o reinício do OMV após remover o pen drive.**

![configuração-da-bios](/images/Small-body-Big-applications-(OMV+Zima)/usb-drive-boot.jpeg)

{% note danger %}

**Por favor, note:**

- Se uma seleção ou configuração errada for feita durante o processo de instalação, você pode pressionar o botão Cancelar para voltar ao diretório de progresso da instalação e selecionar a página de progresso que o usuário precisa redefinir.
- Após a nova instalação ser concluída, se o pen drive USB for removido antes que o OMV reinicie, a BIOS usará automaticamente a partição de inicialização do OMV no eMMC como o disco de inicialização preferido, de modo que os usuários não precisem entrar na BIOS novamente para configurar a Opção de Inicialização.

{% endnote  %}

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)