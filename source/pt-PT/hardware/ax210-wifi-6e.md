---
title: Guia do utilizador da placa Wi-Fi AX210
seo_title: "Wi-Fi AX210 no ZimaBoard: guia de instalação e configuração"
description: "Instale e ative a placa Intel AX210 Wi-Fi 6E no ZimaBoard. Guia passo a passo para instalar o hardware e o controlador, e estabelecer ligação a uma rede sem fios."
type: Docs
author: admin
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---
## 1. Introdução
O [adaptador Intel® Wi-Fi 6E AX210 (Gig+)](https://shop.zimaspace.com/products/intel-ax210-wifi-6e-pcie-card-zimaboard) foi concebido para suportar a tecnologia Wi-Fi 6E. O produto suporta Wi-Fi de fluxo duplo nas bandas de 2.4GHz, 5GHz e 6GHz, além de Bluetooth® 5.3. Combinado com processadores Intel® Core™ e as inovações sem fios da Intel, o módulo Intel® Wi-Fi 6E AX210 pode melhorar significativamente a experiência de ligação em casa, no trabalho ou em viagem.

## 2. Especificações
![Especificações da placa Wi-Fi AX210](https://manage.icewhale.io/api/static/docs/1755248064574_copyImage.png)

## 3. Instruções de utilização
**Passos rápidos:
A. Insira a placa AX210 no ZimaBoard.
B. Atualize o controlador da AX210.
C. Abra o sistema CasaOS e estabeleça ligação ao Wi-Fi.**

**Modo STA**
**Equipamento necessário:**
- ZimaBlade / ZimaBoard × 1
- Placa Wi-Fi AX210 × 1
- Cabo Ethernet × 1
- Adaptador de corrente × 1
**Opcional:**
- Cabo miniDP × 1
- Monitor × 1
- Teclado × 1
**Diagrama de ligação**
![Diagrama de ligação](https://manage.icewhale.io/api/static/docs/1755248150818_image.png)
### Passo 1: Verificar se a placa Wi-Fi AX210 é detetada
1. Aceda ao dispositivo através do Terminal.
![Terminal](https://manage.icewhale.io/api/static/docs/1755248310999_copyImage.png)
![Terminal de início de sessão](https://manage.icewhale.io/api/static/docs/1755248335646_image.png)

2. Mude para o modo root com `su`
![Modo root](https://manage.icewhale.io/api/static/docs/1755248357144_image.png)

3. Execute o comando `lspci`
![Resultado do lspci](https://manage.icewhale.io/api/static/docs/1755248383004_image.png)

   O dispositivo Intel deverá aparecer na lista, confirmando que está ligado ao ZimaBoard.

### Passo 2: Instalar o controlador da AX210
<mark style="background-color: #fff9bd">Nota:
 Se estiver a utilizar o CasaOS pré-instalado no ZimaBoard ou ZimaBlade com a versão de kernel **5.10**, pode avançar diretamente para o **Passo 3**.
 Também pode obter esta versão através da [ligação fornecida](../help-center/restore-factory-settings).</mark>
1. Verifique a versão do kernel. Se for anterior à 6.10, recomenda-se a atualização. Neste guia, utilizaremos o kernel de backports.
![Versão do kernel](https://manage.icewhale.io/api/static/docs/1755248568547_image.png)

2. Adicione o repositório de backports:
```language
echo "deb http://deb.debian.org/debian bookworm-backports main contrib non-free non-free-firmware" | sudo tee -a /etc/apt/sources.list
```


3. Atualize as listas de pacotes:
```language
sudo apt update
```
![apt update](https://manage.icewhale.io/api/static/docs/1755249083029_image.png)

4. Instale o arquivo de chaves do Debian:
```language
sudo apt install -y debian-archive-keyring
```
![Licença](https://manage.icewhale.io/api/static/docs/1755249117075_image.png)

5. Volte a atualizar as listas de pacotes:
```language
sudo apt update
```
![apt update](https://manage.icewhale.io/api/static/docs/1755249154038_image.png)

6. Atualize o kernel e instale o firmware:
```language
sudo apt install -y -t bookworm-backports linux-image-amd64 firmware-iwlwifi
```
![Transferência do kernel e do controlador](https://manage.icewhale.io/api/static/docs/1755249240618_image.png)

7. Reinicie o dispositivo:
```language
sudo reboot
```
Depois do reinício, confirme que a versão do kernel é 6.12 ou posterior.
![](https://manage.icewhale.io/api/static/docs/1755249301302_image.png)

### Passo 3: Estabelecer ligação ao Wi-Fi com o `nmtui`
Utilizaremos a ferramenta `nmtui` para estabelecer a ligação.
```language
sudo nmtui
```

Se o sistema não reconhecer o comando `nmtui`, consulte a secção **Instalar o nmtui** mais abaixo.

1. Selecione **Activate a connection**.
![Interface GUI/TUI do gestor de rede](https://manage.icewhale.io/api/static/docs/1755249412290_image.png)

2. Escolha a rede Wi-Fi (SSID).
![Seleção da rede Wi-Fi](https://manage.icewhale.io/api/static/docs/1755249456648_image.png)

3. Introduza a palavra-passe e prima Enter.
![Autenticação ou palavra-passe pedida pela rede sem fios](https://manage.icewhale.io/api/static/docs/1755249476230_image.png)

4. Verifique o endereço IP e a ligação
Guarde as alterações, saia do `nmtui` e utilize `ip a` para verificar o estado da interface sem fios:

```language
ip a
```
![Localização do endereço IP](https://manage.icewhale.io/api/static/docs/1755249580916_image.png)

  Se estiver a utilizar a versão gráfica do CasaOS, basta abrir o menu Wi-Fi e selecionar a rede pretendida.

![](https://manage.icewhale.io/api/static/docs/1755249604651_image.png)

### Sistemas operativos de router compatíveis
- **OpenWRT**
  1. Instale o iwlwifi, o controlador oficial da AX210.
  2. Visite o [site oficial da Intel](https://www.intel.com/content/www/us/en/support/articles/000005511/wireless.html 383) para transferir o firmware.
  3. Extraia o iwlwifi-ty-59.601f3a66.0.tgz e copie o ficheiro para /lib/firmware/
  4. Utilize o comando lspci para verificar o caminho da AX210.
  5. Aceda a /sys/bus/pci/devices; verá o ID do dispositivo.
  6. Entre no diretório e utilize o comando pwd para obter o caminho absoluto.
  7. Edite /etc/config/wireless
```language
config wifi-device 'radio0'
        option type 'mac80211'
        option country 'US'
        option cell_density '0'
        option path 'pci0000:00/0000:00:1d.0/0000:03:00.0'

config wifi-device 'radio1'
        option type 'mac80211'
        option path 'pci0000:00/0000:00:1d.0/0000:03:00.0'
        option band '5g'
        option htmode 'HE80'
        option cell_density '0'
        option country 'US'
```
  8. Reinicie o dispositivo. O controlador deverá funcionar corretamente.

## Teste de velocidade da rede
![iperf3](https://manage.icewhale.io/api/static/docs/1755249878561_image.png)


## Modo AP (apenas 2.4 GHz)

1. Instale os pacotes necessários:
   `sudo apt update`
   `sudo apt install hostapd iw`
2. Configure a rede sem fios:
   Edite `/etc/hostapd/hostapd.conf`
```language
interface=wlp1s0  # Replace according to your network adapter name
driver=nl80211
ssid=mylove   # Replace "YourSSID" with your desired network name
hw_mode=a
channel=36      # Select your preferred channel
country_code=US
ieee80211ac=1
wmm_enabled=1
auth_algs=1
wpa=2
wpa_key_mgmt=WPA-PSK
rsn_pairwise=CCMP
wpa_passphrase=YourPassphrase  # Replace "YourPassphrase" with your Wi-Fi password
logger_stdout=-1
logger_stdout_level=2
```
3. Inicie o hostapd:
   `sudo systemctl start hostapd`
![](https://manage.icewhale.io/api/static/docs/1755250711162_image.png)

4. Teste a rede Wi-Fi estabelecendo ligação a partir de outro dispositivo.
![](https://manage.icewhale.io/api/static/docs/1755250706664_image.png)

## Instalar o nmtui

O `nmtui` está incluído no pacote `network-manager`:
```language
sudo apt install network-manager
```

Quer experimentar? Obtenha os componentes necessários na [nossa loja](https://shop.zimaspace.com/).
