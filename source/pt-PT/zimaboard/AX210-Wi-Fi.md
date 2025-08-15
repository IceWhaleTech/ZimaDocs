---
title: Guia do Usuário da Placa de Wi-Fi AX210
description: 
type: Docs
author: admin
tip: A formatação fixa da barra superior não deve ser excluída. A descrição é um resumo do artigo, se não for preenchida, será extraído o primeiro parágrafo do conteúdo.
---
## 1. Introdução
O adaptador Intel® Wi-Fi 6E AX210 (Gig+) foi projetado para suportar a tecnologia Wi-Fi 6E. O produto suporta Wi-Fi de duas faixas nos canais de 2,4GHz, 5GHz e 6GHz, além de Bluetooth® 5.3. Combinado com os processadores Intel® Core™ e inovações excepcionais em tecnologia sem fio da Intel®, o módulo Intel® Wi-Fi 6E AX210 pode melhorar drasticamente sua experiência de conexão em casa, no trabalho ou em movimento.

## 2. Especificações
![Especificações da Placa de Wi-Fi AX210](https://manage.icewhale.io/api/static/docs/1755248064574_copyImage.png)

## 3. Instruções de Uso
**Passos Rápidos de Operação:  
A. Insira a placa AX210 no ZimaBoard.  
B. Atualize o driver da AX210.  
C. Abra o sistema CasaOS e conecte-se ao Wi-Fi.**
### 3.1 Modo STA
**Equipamentos Necessários:**
- ZimaBlade / ZimaBoard × 1
- Placa de Wi-Fi AX210 × 1
- Cabo Ethernet × 1
- Adaptador de energia × 1
**Opcionais:**
- Cabo miniDP × 1
- Monitor × 1
- Teclado × 1
**Diagrama de Conexão**
![Diagrama de Conexão](https://manage.icewhale.io/api/static/docs/1755248150818_image.png)
#### Passo 1: Verifique se a placa de Wi-Fi AX210 foi detectada
1. Acesse seu dispositivo via Terminal.
![Terminal](https://manage.icewhale.io/api/static/docs/1755248310999_copyImage.png)
![Login Terminal](https://manage.icewhale.io/api/static/docs/1755248335646_image.png)

2. Mude para o modo root `su`
![modo root](https://manage.icewhale.io/api/static/docs/1755248357144_image.png)

3. Execute o comando `lspci`
![resultado do lspci](https://manage.icewhale.io/api/static/docs/1755248383004_image.png)

   Você deve ver o dispositivo Intel listado, confirmando que ele está conectado ao ZimaBoard.

#### Passo 2: Instalar o driver AX210
<mark style="background-color: #fff9bd">Nota:  
 Se você estiver usando o CasaOS pré-instalado no ZimaBoard ou ZimaBlade com a versão do kernel **5.10**, pode pular diretamente para **Passo 3**.  
 Você também pode obter essa versão a partir [do link fornecido](https://www.zimaspace.com/docs/zimaboard/Restore-factory-settings).</mark>
1. Verifique a versão do seu kernel. Se for inferior a 6.10, é recomendável atualizar. Neste guia, usaremos o kernel backports.
![versão do kernel](https://manage.icewhale.io/api/static/docs/1755248568547_image.png)

2. Adicione o repositório backports:
```language
echo "deb http://deb.debian.org/debian bookworm-backports main contrib non-free non-free-firmware" | sudo tee -a /etc/apt/sources.list
```

3. Atualize as listas de pacotes:
```language
sudo apt update
```
![apt update](https://manage.icewhale.io/api/static/docs/1755249083029_image.png)

4. Adicione a chave do repositório Debian:
```language
sudo apt install -y debian-archive-keyring
```
![Licença](https://manage.icewhale.io/api/static/docs/1755249117075_image.png)

5. Atualize as listas de pacotes novamente:
```language
sudo apt update
```
![apt update](https://manage.icewhale.io/api/static/docs/1755249154038_image.png)

6. Atualize o kernel e instale o firmware:
```language
sudo apt install -y -t bookworm-backports linux-image-amd64 firmware-iwlwifi
```
![baixando kernel e driver](https://manage.icewhale.io/api/static/docs/1755249240618_image.png)

7. Reinicie:
```language
sudo reboot
```
Após reiniciar, confirme que a versão do kernel é 6.12 ou superior.
![](https://manage.icewhale.io/api/static/docs/1755249301302_image.png)

#### Passo 3: Conecte-se ao Wi-Fi usando `nmtui`
Usaremos a ferramenta `nmtui` para conectar.
```language
sudo nmtui
```

Se o sistema não reconhecer o comando `nmtui`, consulte a seção **FAQ** para instruções de instalação.

1. Selecione **Ativar uma conexão**.
![interface do gerenciador de rede/TUI](https://manage.icewhale.io/api/static/docs/1755249412290_image.png)

2. Escolha sua rede Wi-Fi (SSID).
![selecionar wifi](https://manage.icewhale.io/api/static/docs/1755249456648_image.png)

3. Digite a senha e pressione Enter.
![Autenticação/senha necessária pela rede sem fio](https://manage.icewhale.io/api/static/docs/1755249476230_image.png)

4. Verifique o endereço IP e a conectividade
Salve e saia da ferramenta `nmtui` e use `ip a` para verificar o status da interface sem fio:

```language
ip a
```
![encontrar o endereço IP](https://manage.icewhale.io/api/static/docs/1755249580916_image.png)

  Se você estiver usando a versão GUI do CasaOS, basta abrir o menu Wi-Fi e selecionar a rede desejada.

![](https://manage.icewhale.io/api/static/docs/1755249604651_image.png)

#### Sistemas Operacionais de Roteadores Compatíveis
- **OpenWRT**
  1. Você deve instalar o iwlwifi, que é o driver oficial para ax210.
  2. Vá para o site oficial da Intel [aqui](https://www.intel.com/content/www/us/en/support/articles/000005511/wireless.html 383) para baixar o firmware.
  3. Descompacte o arquivo iwlwifi-ty-59.601f3a66.0.tgz e copie o arquivo para /lib/firmware/
  4. Use o comando lspci para verificar o caminho do ax210.
  5. Vá para o diretório /sys/bus/pci/devices e você verá o id do dispositivo.
  6. Entre no diretório e use o comando pwd para obter o caminho absoluto.
  7. Edite o arquivo /etc/config/wireless
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
  8. Reinicie! E você verá que o driver funciona bem.

#### FAQ
- **Teste de Velocidade de Rede do dispositivo Zima para dispositivo LAN**
![iperf3](https://manage.icewhale.io/api/static/docs/1755249878561_image.png)

- **Modo AP (Somente 2,4 GHz)**

- 1. Instale os pacotes necessários:
     `sudo apt update`
     `sudo apt install hostapd iw`
- 2. Configure a rede sem fio:
     Edite `/etc/hostapd/hostapd.conf`
```language
interface=wlp1s0  # Substitua pelo nome do seu adaptador de rede
driver=nl80211
ssid=mylove   # Substitua 'YourSSID' pelo nome da rede que deseja
hw_mode=a
channel=36      # Escolha o canal desejado
country_code=US
ieee80211ac=1
wmm_enabled=1
auth_algs=1
wpa=2
wpa_key_mgmt=WPA-PSK
rsn_pairwise=CCMP
wpa_passphrase=YourPassphrase  # Substitua 'YourPassphrase' pela sua senha Wi-Fi
logger_stdout=-1
logger_stdout_level=2
```
- 3. Inicie o hostapd:
    ` sudo systemctl start hostapd`
![](https://manage.icewhale.io/api/static/docs/1755250711162_image.png)

- 4. Teste sua rede Wi-Fi conectando-se de outro dispositivo.![](https://manage.icewhale.io/api/static/docs/