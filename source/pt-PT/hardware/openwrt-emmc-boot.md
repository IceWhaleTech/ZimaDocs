---
title: OpenWRT é o Acompanhante Perfeito para a Versão de Burn-in eMMC do ZimaBoard
---

# Tópicos

Com um desempenho do ZimaBoard entre um Raspberry Pi e um MicroServer e uma posição de preços, o melhor uso para o ZimaBoard para muitos gamers é, sem dúvida, ser um router OpenWRT / pfSense x86 personalizável de cem dólares, com poder de cálculo suficiente.

Com base neste tutorial, demonstraremos como usar o sistema pré-construído do ZimaBoard. Após alguns passos, isso abrirá o caminho para você brincar com o sistema de roteamento que você já conhece.

# Preparação

1. PC Host x1
2. ZimaBoard x1 (conectado à mesma LAN que o PC)
3. a sua imagem OpenWrt x86 favorita ou baixe a imagem recomendada pela equipe através deste link


> **Dicas:**
>1. Este tutorial irá instalar o OpenWRT diretamente no eMMC do ZimaBoard, sobrescrevendo e removendo o sistema operacional pré-instalado. Por favor, salve e faça backup dos seus dados de usuário do sistema original!
>2. Imagem OpenWRT, ou seja, um arquivo de imagem com o sufixo .img! Se o .gz


# Passos de Operação

## Login no Sistema

No PC, faça login no painel CasaOS do ZimaBoard através de ```casaos.local```

![Openwrt eMMc Boot Log In CasaOS](/images/Openwrt-emmc-boot/openwrt-emmc-boot-log-in-casaos.png)


## Fazer Upload da Imagem OpenWRT
**1. Faça upload da imagem OpenWRT preparada no seu PC para o armazenamento do ZimaBoard**
  a. Clique na aplicação Files, selecione um diretório e clique no botão Upload Files

**2. A partir do caminho local, selecione Fazer Upload da sua imagem OpenWRT**

![Upload Da Imagem OpenWRT](/images/Openwrt-emmc-boot/openwrt-emmc-boot-upload-the-openwrt-image.png)

**3. Aguarde a conclusão do upload**

![Upload Da Imagem OpenWRT](/images/Openwrt-emmc-boot/openwrt-emmc-boot-upload-the-openwrt-image2.png)

## O Sistema OpenWRT Escreve no eMMC
1. Escreva a Imagem OpenWRT no eMMC do ZimaBoard usando o comando DD
    a. Faça login no sistema ZimaBoard via Terminal, SSH no seu PC (a conexão do Terminal precisa conhecer o endereço IP da sua máquina)

![OpenWRT Connect SSH](/images/Openwrt-emmc-boot/openwrt-emmc-boot-connect-ssh.png)

2. Faça login com sua conta e senha CasaOS
{% note danger %}
Senha da Conta Padrão
   Conta: `casaos`
   Senha: `casaos`
{% endnote %}

3. Digite lsblk e verifique se você está obtendo o nome do eMMC alvo, que deve ser mmcblk0

![](/images/Openwrt-emmc-boot/openwrt-emmc-boot-find-emmc-name.png)

4. Descompacte o arquivo de imagem (se o seu arquivo OpenWrt for um arquivo zip)
```
gzip -d [.gz ou .img.gz nome da imagem]
```
![Descompactar Imagem OpenWRT](/images/Openwrt-emmc-boot/openwrt-emmc-boot-unzip-image-file.png)

5. Verifique se a descompressão está funcionando! Certifique-se de que não há anomalias no arquivo de imagem

  ```
  ls -lh
  ```
- Digite o seguinte comando DD para escrever a imagem OpenWrt carregada no ZimaBoard no eMMC!

  1. Certifique-se de que o caminho da sua imagem corresponde à localização e nome do arquivo da pasta que você enviou!
  2. Certifique-se de que sua imagem escrita tenha a extensão .img! e não seja um arquivo zip!

    ```bash
    sudo dd if=/DATA/[caminho de upload]/[nome.img] of=/dev/mmcblk0 bs=1024k status=progress
    ```
- Após a execução do comando DD, desligue e ligue novamente o ZimaBoard.

## login no sistema OpenWrt
**1. Configure as informações do endereço IP do seu sistema OpenWrt e use um navegador de PC para fazer login na página OpenWrt Luci**

    {% note danger %}
    Anexado está um tutorial sobre o comando de configuração do endereço IP do OpenWrt
    https://openwrt.org/docs/guide-user/network/openwrt_as_routerdevice
    {% endnote %}

**2. Reinicie e faça login no seu sistema OpenWrt**
   
![Entrar no Openwrt Luci](/images/Openwrt-emmc-boot/openwrt-emmc-boot-enter-to-openwrt-luci.png)

# Resumo
Prefiro executar um sistema e serviço totalmente separado em cada ZimaBoard. Portanto, esta é uma maneira muito mais simples do que inicializar o OpenWRT no ZimaBoard com um pen drive USB. Se você estiver interessado em ter seu ZimaBoard executando sistemas duplos ao mesmo tempo, considere fazer um pen drive USB e alternar o sistema no qual o ZimaBoard está conectado via a configuração do Bios.

Para aqueles interessados em executar o CasaOS no seu sistema OpenWRT, confira o tutorial!

[![Discord Card](https://discordapp.com/api/guilds/884667213326463016/widget.png?style=banner2)](https://discord.gg/knqAbbBbeX)