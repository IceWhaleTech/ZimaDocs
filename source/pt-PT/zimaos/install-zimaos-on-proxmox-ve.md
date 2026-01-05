---
title: Instalar o ZimaOS no Proxmox VE Usando a Imagem ISO
description: 
type: Docs
author: icewhale123456
tip: A barra superior fixa não deve ser excluída, a descrição é para o artigo, se não for preenchida, será usada a primeira parte do conteúdo.
---
**C**om o lançamento oficial da **imagem ISO do ZimaOS**, agora é possível instalar e implantar o ZimaOS de maneira mais fácil em ambientes virtualizados, como o **Proxmox VE (PVE)**.  
Esta imagem ISO é **especificamente otimizada para instalação em máquina virtual**, permitindo que você implemente o ZimaOS sem hardware físico e explore rapidamente seus principais recursos.  
Este método de instalação é ideal para **testes, aprendizado, avaliação e cenários de uso leve**.

## Introdução
Instalar o ZimaOS no Proxmox VE (PVE) significa executar o ZimaOS como uma **máquina virtual usando uma imagem ISO**, em vez de instalá-lo diretamente em hardware físico. Esse método permite que você experimente o sistema completo do ZimaOS e a interface de gerenciamento baseada na web em um ambiente de virtualização padrão.  
Ao implantar o ZimaOS no PVE, você pode rapidamente criar uma instância isolada do ZimaOS em seu servidor ou laboratório doméstico existente. Em comparação com a instalação em hardware físico, este método oferece várias vantagens:
- Configuração mais rápida com uma curva de aprendizado menor
- Menor risco em comparação com a instalação direta em hardware
- Facilidade para replicar ambientes com snapshots e backups
- Alocação flexível de recursos (CPU, memória, armazenamento)
É especialmente adequado para **avaliação de recursos, validação de soluções e implantação de serviços leves**.
---

## Requisitos
Requisitos de Hardware e Ambiente
- Um ambiente Proxmox VE (PVE) funcionando e acessível
- Um processador x86_64 com suporte a virtualização habilitado  
Configuração mínima recomendada:
- CPU: 2 núcleos ou mais (4 núcleos recomendados)
- Memória: 4 GB ou mais (8 GB recomendados)
- Armazenamento: Pelo menos 32 GB de espaço disponível no disco

Requisitos de Software e Sistema
- Imagem ISO de instalação do ZimaOS
- Proxmox VE 6.x / 7.x / 8.x / 9.x
- Modo de inicialização da máquina virtual: UEFI
- Tipo de BIOS da VM: OVMF (UEFI)

---
## Passos de Instalação
Nota:  
A imagem ISO do ZimaOS necessária para este tutorial pode ser baixada em:  
https://github.com/IceWhaleTech/ZimaOS/releases

### Carregar a Imagem ISO do ZimaOS
1. Faça login na interface web do Proxmox VE
2. Navegue até **local → Imagens ISO → Carregar**
![](https://manage.icewhale.io/api/static/docs/1767616598247_copyImage.png)
3. Selecione a **imagem ISO do ZimaOS** baixada e clique em **Carregar**
![](https://manage.icewhale.io/api/static/docs/1767616612358_image.png)

### Criar uma Máquina Virtual
1. Clique no botão Criar VM
![](https://manage.icewhale.io/api/static/docs/1767616679913_image.png)
2. Na página do sistema operacional, selecione a imagem ISO do ZimaOS
![](https://manage.icewhale.io/api/static/docs/1767616694612_image.png)
3. Na página do Sistema:
  - Defina o BIOS para UEFI
  - Desmarque "Adicionar Disco EFI"
![](https://manage.icewhale.io/api/static/docs/1767616715004_image.png)
4. Na página **CPU**, ajuste o número de núcleos de CPU  
**Objetivo**:  
Alocar mais núcleos de CPU melhora o desempenho em múltiplos threads e ajuda a garantir uma operação suave sob carga.  
**Recomendado**: 4 núcleos de CPU ou mais  
![](https://manage.icewhale.io/api/static/docs/1767616752746_image.png)
5. Na página **Memória**, ajuste o tamanho da memória  
**Objetivo**:  
Mais memória permite que o ZimaOS execute serviços adicionais, melhora o desempenho multitarefa e reduz os atrasos durante operações frequentes.  
**Recomendado**: 8 GB (8192 MB) ou mais  
![](https://manage.icewhale.io/api/static/docs/1767616800421_image.png)

### Instalar o ZimaOS
1. Após criar a máquina virtual, clique em **Iniciar**
![](https://manage.icewhale.io/api/static/docs/1767616824433_image.png)
2. Clique em **Console** para abrir o console da VM
![](https://manage.icewhale.io/api/static/docs/1767616843275_image.png)
3. Pressione **Enter** para iniciar o processo de instalação do ZimaOS
![](https://manage.icewhale.io/api/static/docs/1767616860449_image.png)
4. Selecione **Instalar ZimaOS** e pressione **Enter**
![](https://manage.icewhale.io/api/static/docs/1767616872278_image.png)
5. Selecione o disco de destino para a instalação e pressione **Enter**
![](https://manage.icewhale.io/api/static/docs/1767616901998_image.png)
6. Confirme o disco selecionado escolhendo Sim e pressionando Enter
![](https://manage.icewhale.io/api/static/docs/1767616916757_image.png)
7. Confirme novamente para prosseguir com a instalação
![](https://manage.icewhale.io/api/static/docs/1767616933805_image.png)
8. Quando a instalação for concluída, a tela de conclusão será exibida
![](https://manage.icewhale.io/api/static/docs/1767616945992_image.png)

---
### Remover a Imagem ISO
1. Retorne à interface do Proxmox VE
2. Selecione a máquina virtual, escolha **CD** e clique em **Editar**
![](https://manage.icewhale.io/api/static/docs/1767616981489_image.png)
3. Selecione **Não usar mídia** e clique em **OK**
![](https://manage.icewhale.io/api/static/docs/1767616998638_image.png)
4. Após a alteração, a configuração deve aparecer como mostrado abaixo
![](https://manage.icewhale.io/api/static/docs/1767617011570_image.png)

---

### Iniciar e Acessar o ZimaOS
1. Inicie a máquina virtual ZimaOS
2. Clique em Console para acessar o console da VM
3. Aguarde até o sistema terminar de inicializar
4. O endereço IP será exibido no console  
Abra um navegador web e insira o endereço IP para acessar a Interface de Gerenciamento Web do ZimaOS.  
![](https://manage.icewhale.io/api/static/docs/1767617057004_image.png)

---

## Continuar Explorando o ZimaOS

Agora que o ZimaOS está em funcionamento na sua máquina virtual, você pode continuar explorando seus recursos e fluxos de trabalho no seu próprio ritmo.  
Para aprender a configurar o sistema, gerenciar armazenamento e implantar aplicativos, por favor, visite o seguinte guia:

👉** [Comece com o ZimaOS](https://www.zimaspace.com/docs/zimaos/Get-Started) ** 

Este guia ajudará você a dar os próximos passos e aproveitar ao máximo seu ambiente ZimaOS.
