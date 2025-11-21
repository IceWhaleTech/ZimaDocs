# 1.Introdução

![O logotipo oficial do OpenWrt](https://manage.icewhale.io/api/static/docs/1763713194262_copyImage.png)

O OpenWrt é um sistema operativo de router baseado em Linux, de código aberto, amplamente utilizado em routers domésticos, routers empresariais, soft routers, dispositivos NAS e outros equipamentos de rede. Oferece grande flexibilidade e personalização, permitindo aos utilizadores gerir os seus dispositivos de rede como se estivessem a operar um pequeno servidor Linux.

As principais funcionalidades do OpenWrt incluem:

*   **Código aberto e transparente**: Controlo total sem componentes caixa preta.
    
*   **Altamente extensível**: Instale pacotes adicionais como VPN, AdGuard, Docker e muito mais.
    
*   **Alto desempenho**: Bem adaptado para redes gigabit e hardware de soft-router potente.
    
*   **Rede flexível**: Suporta funcionalidades avançadas como VLAN, multi-WAN e roteamento de bypass.
    

Este tutorial tem como objetivo demonstrar como utilizar o ZimaBoard 2 para construir um soft router de alto desempenho e guiá-lo pelo processo completo de instalação do OpenWrt.

* * *

# **2.Preparação**

Por favor, prepare previamente o seguinte hardware e ferramentas para garantir um processo de instalação tranquilo:

**1.Dispositivo ZimaBoard 2**

**2.Unidade USB (≥16GB)** para criar o instalador bootável

O processo de flash apagará todos os dados na unidade USB. Faça backup de quaisquer ficheiros importantes antes!

**3.Computador (Windows / macOS)** para descarregar o firmware e gravá-lo na unidade USB

**4.Monitor + adaptador MiniDP para HDMI/DP + teclado + cabo Ethernet**

* * *

# 3.Passos de Instalação

## **Passo 1: Criar uma Unidade USB Bootável do OpenWrt**

**Descarregar o firmware**

*   Visite a página oficial de download: [Descarregar o firmware oficial do OpenWrt](https://firmware-selector.openwrt.org/?version=24.10.4&target=x86%2F64&id=generic)
    
*   Selecione o tipo de imagem recomendado: escolha a versão **COMBINED-EFI (SQUASHFS)**. Esta é uma imagem bootável completa projetada para dispositivos x86\_64, suporta boot UEFI e é totalmente compatível com o ambiente BIOS do ZimaBoard 2.
    
    ![Descarregar o firmware oficial do OpenWrt](https://manage.icewhale.io/api/static/docs/1763713196060_copyImage.png)
    

## Passo 2: Gravar a Imagem na Unidade USB Usando o balenaEtcher

1.Prepare uma unidade USB vazia no seu computador

O processo de flash apagará todos os dados na unidade USB. Faça backup de quaisquer ficheiros importantes antes!

2.Insira a unidade USB no seu PC

![gravação com balenaEtcher](https://manage.icewhale.io/api/static/docs/1763713196652_copyImage.png)

3.Abra o balenaEtcher (se não tiver instalado, pode descarregá-lo a partir do [site oficial](https://etcher.balena.io/))

4.Inicie a gravação

*   Clique em **Flash from file** e selecione a imagem OpenWrt x86 descarregada
    
*   Clique em **Select target** e escolha a sua unidade USB
    
*   O processo de gravação geralmente demora **1–3 minutos**, portanto, aguarde pacientemente
    

5.Gravação concluída — remova a unidade USB

  Quando o Etcher mostrar **“Flash Complete!”**, pode ejetar a unidade USB com segurança. A sua unidade USB é agora um meio de instalação bootável do OpenWrt.

![Gravação concluída com balenaEtcher](https://manage.icewhale.io/api/static/docs/1763713197464_copyImage.png)

## **Passo 3: Arrancar o ZimaBoard 2 a partir da Unidade USB**

**1.Preparar e conectar o hardware**

*   Insira a unidade USB bootável do OpenWrt recém-criada numa das portas USB do ZimaBoard 2
    
*   Use um cabo Ethernet para ligar a **porta LAN (a mais próxima do conector de energia)** ao seu computador
    
*   Ligue a alimentação e certifique-se de que o teclado e o monitor (ou outro método de controlo) estão prontos
    

**2.Aceder ao Menu de Boot**

*   Pressione o botão de alimentação para iniciar o ZimaBoard 2
    
*   Quando o ecrã de arranque aparecer, pressione repetidamente **F11** para entrar no **Menu de Boot**
    

**3.Selecionar a unidade USB como dispositivo de arranque**

*   No Menu de Boot, use as teclas de seta para selecionar a sua unidade USB
    
*   Pressione **Enter** para confirmar e arrancar a partir da unidade USB
    

![Opção de sequência de arranque](https://manage.icewhale.io/api/static/docs/1763713198322_copyImage.png)

**4.Confirmar que o OpenWrt arrancou com sucesso**

*   Se tudo estiver a funcionar corretamente, o ZimaBoard 2 arrancará a partir da unidade USB e entrará no sistema OpenWrt (geralmente interface de linha de comandos)
    

![OpenWrt iniciado com sucesso](https://manage.icewhale.io/api/static/docs/1763713201272_copyImage.png)

## **Passo 4: Aceder à Interface Web do OpenWrt via Browser**

**1.Garantir que o computador está ligado ao ZimaBoard 2**

*   O cabo Ethernet do computador deve estar ligado à **porta LAN (a mais próxima do conector de energia)** do ZimaBoard 2
    
*   O adaptador de rede do computador deve estar definido para **obter um endereço IP automaticamente (DHCP)**
    
*   Na maioria dos casos, o OpenWrt atribuirá ao seu computador um endereço na faixa **192.168.1.x** (por exemplo, 192.168.1.100)
    

**2.Abrir a página de gestão do OpenWrt no browser** No seu computador, abra qualquer navegador (Chrome, Edge, Firefox, etc.) e insira o seguinte endereço na barra de URL:

    http://192.168.1.1

**3.Iniciar sessão no OpenWrt** Nome de utilizador padrão: **root** Palavra-passe padrão: **password**

![Interface de login do OpenWrt](https://manage.icewhale.io/api/static/docs/1763713201956_copyImage.png)

![Interface principal do OpenWrt](https://manage.icewhale.io/api/static/docs/1763713203997_copyImage.png)

# **4.Notas Finais**

Neste ponto, concluiu o processo básico de instalação do OpenWrt no ZimaBoard 2.

Desde o download do firmware e criação da unidade USB bootável até ao arranque e login bem-sucedido na interface web, transformou agora esta placa compacta num poderoso soft router.

A partir daqui, pode continuar a personalizar a sua configuração conforme as suas necessidades, tais como:

*   Configurar PPPoE ou criar um router bypass (bridge)
    
*   Instalar plugins comuns (Docker, ferramentas de bloqueio de anúncios, serviços de proxy, etc.)
    
*   Configurar acesso remoto, NAS, servidores multimédia e mais
    

A combinação de **ZimaBoard 2 + OpenWrt** oferece possibilidades infinitas—este tutorial é apenas o começo.

Se encontrar algum problema durante o processo, sinta-se à vontade para partilhar a sua situação e mensagens de erro com a comunidade para obter assistência.