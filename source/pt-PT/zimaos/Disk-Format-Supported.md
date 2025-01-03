---
title: ZimaBoard CasaOS Recuperação de Fábrica
---

# Preparação

Baixe a imagem oficial do ZimaBoard CasaOS

- Para [**imagem do ZimaBoard CasaOS -832/432**](https://drive.google.com/file/d/1b-k7d1LzPHNUtem-hOrHB5dDt0_AC6mK/view)

- Para [**imagem do ZimaBoard CasaOS -216**](https://drive.google.com/file/d/1PFw1JXoimwUvOX9kgkmOSUM0evi_GGxv/view)
## Criar uma Imagem Usando um Pen Drive

**Prepare com antecedência**

- Baixe e instale [BalenaEtcher](https://www.balena.io/etcher/) no seu computador
- Baixe a imagem oficial do ZimaBoard CasaOS

Preparação relacionada ao ZimaBoard.

- ZimaBoard e adaptador de energia
- Um pen drive (8GB+, os dados nele serão apagados)
- Um adaptador miniDP para DP/HDMI (Usado para conectar a um monitor)
- Um monitor
- Um teclado
- Um hub USB (Opcional, se as portas USB não forem suficientes)



## Instalar Usando um Pen Drive

### Abra [BalenaEtcher](https://www.balena.io/etcher/)

![Abrir Balenaetcher](/images/Restore-factory-settings/open-balenaetcher.png)

### Selecione a imagem do sistema 

![Escolher Imagem](/images/Restore-factory-settings/choose-image.png)

### Selecione seu pen drive inserido

![Escolher Usb](/images/Restore-factory-settings/choose-usb.png)

### Clique em "Flash!" 

**Você pode ser solicitado a inserir sua senha do sistema durante o processo, basta digitá-la e clicar em OK.**

![Usando Balenaetcher Clique em Flash](/images/Restore-factory-settings/click-flash.png)

![Digite sua Conta de Computador e Senha ](/images/Restore-factory-settings/enter-password.png)

**Todo o processo levará alguns minutos, dependendo do tamanho da sua imagem do sistema e da velocidade de leitura/escrita do seu pen drive.**

![Aguardando Flash](/images/Restore-factory-settings/waiting-flash.png)

### Completo! 

**Remova o pen drive e você está pronto para ir!**

![Completo Criar Pen Drive](/images/Restore-factory-settings/complete-flash.png)

## **Iniciar a partir do Pen Drive de Instalação**

### Conectando os Acessórios ao ZimaBoard

Conecte seu pen drive, monitor, teclado, `hub USB` **(Opcional)**, `mouse` **(Opcional)**, `cabo de rede` **(Recomendado)** ao ZimaBoard.

![Diagrama de Conexão](/images/Restore-factory-settings/connection-diagram.png)

### Ligue a Energia e Selecione o Dispositivo de Boot

Conecte a energia e pressione **F11** continuamente.

## **Iniciar Instalação**

**1. Selecione seu pen drive iniciando com UEFI no menu de dispositivos de boot.**

![Escolher Boot UEFI](/images/Restore-factory-settings/choose-uefi-boot.jpeg)

**2. Aguarde alguns minutos**

![Aguardando Boot](/images/Restore-factory-settings/witting-boot.png)

**3. Selecione o primeiro**

![Selecionar mmcblk0](/images/Restore-factory-settings/select-mmcblk0.png)

**4. Digite `y`**

![Instalando CasaOS](/images/Restore-factory-settings/enter-yes.png)

**5. Aguarde alguns minutos**

![Aguardando Instalador do CasaOS](/images/Restore-factory-settings/witting-install.png)

**6. Selecione o primeiro**

![Selecionar Desligar](/images/Restore-factory-settings/select-poweroff.png)

**Finalize a instalação após a contagem regressiva！！！！**

# Vídeo tutoriais curtos

{% youtuber video SMV3wG1YbUk %}
https://www.youtube.com/embed/SMV3wG1YbUk
{% endyoutuber %}

**Nota**: ao selecionar o armazenamento, por favor, tenha cuidado para selecionar o disco correto

Porque os sistemas operacionais e os fornecedores de armazenamento calculam os tamanhos do espaço de armazenamento de forma diferente, a capacidade que você vê ao instalar seu sistema não é a mesma que a capacidade de hardware. Você pode perceber a diferença pelo tipo de disco e pelo tamanho aproximado.
O tipo de armazenamento embutido do ZimaBoard é eMMC, que também pode ser reconhecido como um dispositivo MMC no sistema operacional.

**Atenção****! Pode ser necessário modificar a sequência de boot na BIOS ou selecionar o dispositivo de boot no momento da inicialização se você instalar o SO em um disco rígido externo.**