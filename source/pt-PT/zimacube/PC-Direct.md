---
title: PC Direct
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser removido, a descrição é para o artigo, não preenchendo, será cortado o texto do início do artigo
---
# Uma Maneira Diferente de Configurar
Quer esteja a usar um dispositivo ZimaOS para fins pessoais ou profissionais, entender como se conectar a ele através de várias redes é essencial. Este guia cobrirá três tipos principais de conexões de rede: conexão direta, Rede Local (LAN) e Rede de Longa Distância (WAN). Cada método tem benefícios e aplicações únicas, garantindo que você possa acessar e gerenciar seus dados de forma integrada, quer esteja em casa ou em movimento.

Este artigo é para entender conexões sob diferentes redes.

## Conexão Direta
![](https://manage.icewhale.io/api/static/docs/1726131286208_image.png)

As conexões diretas são ideais para configurações rápidas e simples, oferecendo uma maneira rápida e segura de ligar dispositivos sem precisar de uma rede mais ampla. Este método é perfeito para transferências de arquivos ou para usar aplicações específicas que requerem acesso de alta velocidade.

{% note warn Dicas: %}
Se você encontrar algum problema durante o uso do Thunderbolt, pode obter mais informações detalhadas [aqui](/zimacube/Connecting-ZimaCube-via-Thunderbolt.html)
{% endnote %}

**O Que Você Precisa:**

* Cabo de rede ou cabo Thunderbolt para conexões de alta velocidade

* Dispositivo ZimaOS (ZimaCube Pro é equipado com Thunderbolt) e dispositivo cliente (laptop, PC de mesa, etc.)

Passos:

1. **Estabelecer a Conexão:** Use um cabo de rede padrão para conectar seu dispositivo cliente ao dispositivo ZimaOS diretamente ou utilize o cabo Thunderbolt (para usuários do ZimaCube Pro) para velocidades de até 20G, ideal para tarefas exigentes.

2. **Configuração da Rede:** O IP é atribuído através de recursos de auto-configuração. E será algo como 169.254.x.x.
![](https://manage.icewhale.io/api/static/docs/1726131302533_image.png)

3. **Isto Significa sua Conexão Bem-Sucedida:** Um IP como 169.254.x.x mostrado na tela indica sucesso na conexão direta.
![](https://manage.icewhale.io/api/static/docs/1726131333502_image.png)

**Exemplo de Aplicação e Casos de Uso:** Aproveite a conexão de alta velocidade, especialmente útil para edição de vídeo ou outras tarefas que exigem muito largura de banda. É ideal para cenários onde a baixa latência e a rápida transferência de dados são cruciais.


## Conexão de Rede Local (LAN)
![](https://manage.icewhale.io/api/static/docs/1726131416246_image.png)

Conectar seus dispositivos ZimaOS via LAN fornece um ambiente de rede robusto e estável, perfeito para lares ou pequenas empresas onde múltiplos dispositivos precisam compartilhar recursos de forma eficiente.

**O Que Você Precisa:**

* Roteador ou switch de rede

* Dispositivo ZimaOS (ZimaCube Pro é equipado com NIC de 10G) e dispositivo cliente (telefone, laptop, PC de mesa, etc.)

**Passos:**

1. **Conectar à Rede:** Conecte seu dispositivo ZimaOS e outros dispositivos clientes ao roteador ou switch.

2. **Configuração da Rede:** Verifique se todos os dispositivos estão na mesma sub-rede e conseguem se comunicar entre si. Será algo como 192.168.x.x ou 10.0.x.x, dependendo da sua configuração de LAN. Você pode atribuir manualmente endereços IP estáticos para identificação consistente dos dispositivos, ou depender do DHCP para atribuição automática.

3. **Isto Significa sua Conexão Bem-Sucedida:** Um IP como 192.168.x.x mostrado na tela indica sucesso na conexão LAN. O IP LAN depende da sua configuração de LAN.
![](https://manage.icewhale.io/api/static/docs/1726131462130_image.png)

**Exemplo de Aplicação e Casos de Uso:** Transmita e gerencie conteúdo de mídia entre dispositivos, desfrutando de acesso sem interrupções à sua biblioteca. Melhor para ambientes que necessitam de acesso de rede local confiável e rápido, como servidores de mídia ou armazenamento de arquivos compartilhados.
![](https://manage.icewhale.io/api/static/docs/1726131473384_image.png)

## Qual será escolhido?
Quando você tem tanto uma conexão direta quanto uma conexão LAN, qual será escolhida?
![](https://manage.icewhale.io/api/static/docs/1726131488677_image.png)

Se você leu nosso tutorial 4 sobre SAMBA, uma maneira importante de experienciar NAS, você provavelmente dominará a maneira correta de montar seu drive NAS no seu dispositivo cliente. A questão é que existem duas regras aqui a serem observadas:

1. Thunderbolt é preferido quando você utiliza o aplicativo Zima.

2. Você pode escolher a conexão específica montando manualmente pastas através do IP correspondente.
![](https://manage.icewhale.io/api/static/docs/1726131521116_image.png)

## Conexão de Rede de Longa Distância (WAN)
![](https://manage.icewhale.io/api/static/docs/1726131531121_image.png)

As conexões WAN permitem o acesso remoto aos seus dispositivos ZimaOS, permitindo que você se conecte de qualquer lugar com conexão à Internet. Isto é particularmente útil para trabalho remoto ou acesso a dados pessoais enquanto viaja.

Para maior segurança e facilidade de acesso, usamos o Zerotier para criar uma rede virtual, simplificando o processo de conexão.
![](https://manage.icewhale.io/api/static/docs/1726131539225_image.png)

**O Que Você Precisa:**

* Conexão à Internet para cada dispositivo

* Obtenha o ID de Login Remoto do dispositivo ZimaOS. Este ID é um ID do Zerotier, que você pode obter no painel do ZimaOS → Rede → Login Remoto.
![](https://manage.icewhale.io/api/static/docs/1726131699787_image.png)

* Para seu Windows/Mac, é necessário um [APP Zima](https://find.zimaspace.com) 5 (integrado com Zerotier).
**Passos:**

1. **Estabelecer a Conexão:** Baixe e inicie o aplicativo Zima em seu Windows/Mac. Clique no ícone do aplicativo à direita da barra de tarefas do sistema e selecione Conectar pelo ID da Rede. Após isso, você pode precisar inserir o nome de usuário e a senha do seu WebUI.
![](https://manage.icewhale.io/api/static/docs/1726131911735_image.png)

2. **Configuração da Rede:** Basicamente, você não precisa de mais configurações de rede, pois o aplicativo Zima já fez isso por você.

3. **Isto Significa sua Conexão Bem-Sucedida:** Você será direcionado para o painel do ZimaOS.
![](https://manage.icewhale.io/api/static/docs/1726131933130_image.png)

**Exemplo de Aplicação e Casos de Uso:** Use conexões WAN para acessar de forma segura arquivos críticos ou gerenciar dispositivos em emergências. É ideal para usuários que precisam gerenciar ou acessar seus dispositivos ZimaOS remotamente, garantindo a disponibilidade contínua de dados importantes.
![](https://manage.icewhale.io/api/static/docs/1726131946008_image.png)

Opcional: O endereço IP público com DNS dinâmico configurado seria uma opção, já que você pode acessar seu dispositivo diretamente através de um nome de domínio.

## Conclusão
Não importa suas necessidades, o ZimaOS fornece opções de conectividade flexíveis e poderosas para se adequar a qualquer situação. Desde conexões diretas de alta velocidade até acesso remoto conveniente via WAN, você pode gerenciar seus dispositivos e dados com facilidade. Sempre considere medidas de segurança, especialmente ao lidar com conexões WAN, para proteger suas informações e manter operações suaves.

Se você encontrar algum problema durante o uso, sinta-se à vontade para nos informar a qualquer momento. Você também pode se juntar à nossa comunidade e ao Discord para discutir mais sobre ZimaCube e ZimaOS. Aguardamos seu feedback!