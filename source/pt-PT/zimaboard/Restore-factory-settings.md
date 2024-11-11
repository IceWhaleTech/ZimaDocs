---
title: Recuperação de Fábrica do ZimaBoard CasaOS
---

# Preparação

Baixe a imagem oficial do ZimaBoard CasaOS

- Para [**imagem ZimaBoard CasaOS -832/432**](https://drive.google.com/file/d/1b-k7d1LzPHNUtem-hOrHB5dDt0_AC6mK/view)

- Para [**imagem ZimaBoard CasaOS -216**](https://drive.google.com/file/d/1PFw1JXoimwUvOX9kgkmOSUM0evi_GGxv/view)

## Criar uma Imagem Usando um Pen Drive

**Prepare-se com antecedência**

- Baixe e instale o [BalenaEtcher](https://www.balena.io/etcher/) no seu computador
- Baixe a imagem oficial do ZimaBoard CasaOS

Preparação relacionada ao ZimaBoard.

- ZimaBoard e adaptador de energia
- Um pen drive (8GB+, os dados nele serão apagados)
- Um adaptador miniDP para DP/HDMI (Usado para conectar a um monitor)
- Um monitor
- Um teclado
- Um hub USB (Opcional, se a porta USB não for suficiente)

## Instalar Usando um Pen Drive

### Abra o [BalenaEtcher](https://www.balena.io/etcher/)

![Abra o Balenaetcher](/images/Restore-factory-settings/open-balenaetcher.png)

### Selecione a imagem do sistema 

![Escolha a Imagem](/images/Restore-factory-settings/choose-image.png)

### Selecione seu pen drive inserido

![Escolha o Usb](/images/Restore-factory-settings/choose-usb.png)

### Clique em "Flash!" 

**Pode ser solicitado que você insira a senha do seu sistema durante o processo, basta inseri-la e clicar em OK.**

![Usando Balenaetcher Clique em Flash](/images/Restore-factory-settings/click-flash.png)

![Insira a Conta e Senha do Computador](/images/Restore-factory-settings/enter-password.png)

**Todo o processo levará alguns minutos, dependendo do tamanho da sua imagem de sistema e da velocidade de leitura/gravação do seu pen drive.**

![Aguardando Flash](/images/Restore-factory-settings/waiting-flash.png)

### Concluído! 

**Remova o pen drive e você está pronto para começar!**

![Concluído Criar Pen Drive](/images/Restore-factory-settings/complete-flash.png)

## **Inicializar a Partir do Pen Drive de Instalação**

### Conectando os Acessórios ao ZimaBoard

Conecte seu pen drive, monitor, teclado, `hub USB` **(Opcional)**, `mouse` **(Opcional)**, `cabo de rede` **(Recomendado)** ao ZimaBoard.

![Diagrama de Conexão](/images/Restore-factory-settings/connection-diagram.png)

### Ligue a Energia e Selecione o Dispositivo de Inicialização

Conecte a energia e pressione **F11** continuamente.

## **Iniciar Instalação**

**1. Selecione seu pen drive começando com UEFI no menu de dispositivos de inicialização.**

![Escolha UEFI Boot](/images/Restore-factory-settings/choose-uefi-boot.jpeg)

**2. Aguarde alguns minutos**

![Aguardando Inicialização](/images/Restore-factory-settings/witting-boot.png)

**3. Selecione o primeiro**

![Selecione mmcblk0](/images/Restore-factory-settings/select-mmcblk0.png)

**4. Digite `y`**

![Instalando CasaOS](/images/Restore-factory-settings/enter-yes.png)

**5. Aguarde alguns minutos**

![Aguardando Instalador do CasaOS](/images/Restore-factory-settings/witting-install.png)

**6. Selecione o primeiro**

![Selecione Poweroff](/images/Restore-factory-settings/select-poweroff.png)

**Finalizar a instalação após a contagem regressiva!!!!!!**

# Vídeos curtos tutoriais

{% youtuber video SMV3wG1YbUk %}
https://www.youtube.com/embed/SMV3wG1YbUk
{% endyoutuber %}

**Nota**: ao selecionar o armazenamento, tenha cuidado para selecionar o disco correto

Como os sistemas operacionais e os fornecedores de armazenamento calculam os tamanhos dos espaços de armazenamento de maneira diferente, a capacidade que você vê ao instalar seu sistema não é a mesma que a capacidade de hardware. Você pode perceber a diferença pelo tipo de disco e o tamanho aproximado.
O tipo de armazenamento embutido do ZimaBoard é eMMC, que também pode ser reconhecido como um dispositivo MMC no sistema operacional.

**Atenção**! Você pode precisar modificar a sequência de inicialização na BIOS ou selecionar o dispositivo de inicialização no momento da inicialização se instalar o sistema operacional em um disco rígido externo.**