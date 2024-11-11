---
title: Como Ativar Wake-on-LAN (WOL) no Zimaboard
description: 
type: "Docs"
tip: O formato fixo da barra superior não deve ser removido, a descrição é para descrever o artigo; se não preenchida, será capturada a primeira parte do texto.
---
LAN Wake-on-LAN (WOL) é uma parte muito importante do processamento de sistemas e computadores, especialmente se você estiver lidando com um SBS (Servidor de Placa Única) como o Zimaboard. 
Para atender às suas necessidades, nosso produto Zimaboard oferece suporte ao WOL, pronto para uso, e você só precisa ativá-lo. 
Ativar o Wake-on-LAN (WOL) no Zimaboard através de sua BIOS é um processo de três etapas.
- O primeiro passo é configurar o WOL através da BIOS
- O segundo passo é ativar o WOL nos serviços do sistema e anotar o endereço MAC e outras informações
- O terceiro passo é baixar o software WakeOnLine apropriado e configurar o novo dispositivo.

Aqui estão os passos específicos:

### Configurações de BIOS
1. Ligue a energia do sistema e pressione a tecla **Delete** para entrar na BIOS.
2. Use as teclas de seta no teclado para navegar até a aba **Avançado**, em seguida, selecione o item **Configuração de Gerenciamento de Energia**. Certifique-se de que a opção **Wake on PME** esteja definida como **Ativado**. Pressione **F10** e clique em **OK** para salvar as configurações, e o sistema irá reiniciar automaticamente.
   ![](https://manage.icewhale.io/api/static/docs/1730194172109_image.png)
   ![](https://manage.icewhale.io/api/static/docs/1730194187655_image.png)

### Ativando Serviços do Sistema

1. Nosso ZimaBoard vem pré-instalado com o sistema CasaOS. Aqui, uma ferramenta SSH pode ser utilizada para controlar a linha de comando e conectar-se usando seu próprio nome de usuário e senha. 
Use o comando `ip a` para listar todas as interfaces de rede e seu status no sistema. Os nomes das interfaces de rede são tipicamente como `eth0`, `enp2s0`, `wlan0`, etc. Você pode identificar o nome da interface apropriada com base na interface de rede à qual você está conectado: 
Ao mesmo tempo, ao usar o WakeMeOnLan no Windows nos passos seguintes, certifique-se de usar o endereço de destino correto. Normalmente, o endereço de broadcast é o endereço IP de broadcast de toda a sub-rede. Por exemplo, se o endereço IP do ZimaBoard é `10.0.192.211`, o endereço de broadcast deve ser `10.0.255.255`. Portanto, atenção também deve ser dada ao endereço de broadcast.
![](https://manage.icewhale.io/api/static/docs/1730195494901_copyImage.jpeg)

2. Execute os seguintes comandos para atualizar seu gerenciador de pacotes e instalar a ferramenta ethtool:
```
sudo apt update
sudo apt install ethtool
```

3. A interface de rede que ative aqui é `enp3s0`. Por padrão, o WOL da interface de rede está desabilitado. Você pode usar o seguinte comando para verificar se o WOL está ativado:
```
sudo ethtool enp3s0
```
Onde `enp3s0` deve ser o nome da interface de rede que você ativou, conforme mostrado abaixo
![](https://manage.icewhale.io/api/static/docs/1730196409296_image.png)
`Wake-on: d` significa que o WOL está atualmente desativado.

4. Para habilitar o recurso Wake-on-LAN, você precisa executar o seguinte comando:
```
sudo ethtool -s enp3s0 wol g
```
  Este comando ativará pacotes mágicos (g), que suportarão a ativação do ZimaBoard via pacotes mágicos. 
  Após executar este comando, você pode usar o seguinte comando novamente para confirmar que o WOL está ativado:
```
sudo ethtool enp3s0
```

| ![](https://manage.icewhale.io/api/static/docs/1730196776593_image.png) | ![](https://manage.icewhale.io/api/static/docs/1730196793376_image.png) |
| - | - |
| executando este comando | O status de `Wake-on` deve mudar para `g`, indicando que o WOL foi ativado com sucesso |

5. Crie um script de inicialização através do systemd
- Crie um serviço systemd para executar automaticamente o comando ethtool para ativar o WOL na inicialização do sistema. Os serviços são os mais simples. 
- Crie um novo arquivo de serviço:
```
sudo nano /etc/systemd/system/wol.service
```
- Insira o seguinte conteúdo no arquivo:
```
[Unit]
Description=Ativar Wake-on-LAN no enp3s0

[Service]
Type=oneshot
ExecStart=/sbin/ethtool -s enp3s0 wol g

[Install]
WantedBy=multi-user.target
```
![](https://manage.icewhale.io/api/static/docs/1730197095005_image.png)
- Pressione `Ctrl+O` para salvar, depois pressione `Enter`, depois pressione `Ctrl+X` para fechar o arquivo, e então use o seguinte comando para ativar o serviço:
```
sudo systemctl enable wol.service
```

- Reinicie o sistema e verifique se a configuração do Wake-on permanece como `g`:
```
sudo systemctl start wol.service
```

O método acima pode garantir que a configuração do WOL seja ativada automaticamente após a reinicialização.

6. Após o sucesso, desligue o computador na página da web ou insira `sudo shutdown now` para desligar o computador.
![](https://manage.icewhale.io/api/static/docs/1730197245860_image.png)

### Wake on LAN

**Teste no Windows**
1. Baixe o software [WakeMeOnLan](https://sourceforge.net/projects/wakemeonlan/) (é claro que existem muitas opções, aqui usamos este software para teste)
2. Abra o software e clique em `Adicionar Novo Computador` no menu Arquivo.
![](https://manage.icewhale.io/api/static/docs/1730197626956_image.png)
3. Insira o endereço de broadcast anterior no endereço IP. Por exemplo, se o endereço IP do ZimaBoard é `10.0.192.211`, o endereço de broadcast deve ser `10.0.255.255`. Preencha o endereço MAC normalmente. Não preencha outras informações. Clique em `OK`.
4. Selecione o dispositivo a ser ativado, clique em `Despertar Computadores Selecionados` no canto superior direito e observe se ele pode ser ativado e iniciado.
![](https://manage.icewhale.io/api/static/docs/1730197821740_image.png)
{% note warn Dicas %}
Se você precisar de ativação remota em outros dispositivos (como Android, iOS, MacOS, etc.), você pode pesquisar software relacionado online. Como os passos básicos não são muito diferentes, não entrarei em detalhes aqui. Desejo a todos boa sorte.
{% endnote %}