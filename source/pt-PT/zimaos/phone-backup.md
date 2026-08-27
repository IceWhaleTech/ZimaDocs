---
title: Cópia de segurança do telemóvel
seo_title: "Cópia de segurança do telemóvel com o ZimaOS: fotografias e ficheiros automáticos"
description: "Efetue uma cópia de segurança do telemóvel para o ZimaOS com o ZimaClient. Copie automaticamente fotografias e ficheiros, escolha álbuns do iOS e utilize o seu próprio armazenamento. Consulte tudo numa única biblioteca."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

Fazer cópias de segurança das fotografias não costuma ser uma decisão difícil. A dificuldade surge anos depois, quando a gaveta guarda três telemóveis antigos e a fatura da nuvem cresceu silenciosamente com a biblioteca. O seu próprio dispositivo permite um final diferente: as fotografias de todos os telemóveis que já teve reúnem-se numa biblioteca e toda a história fica num só lugar.

## Antes de começar

O dispositivo ZimaOS tem de estar ligado e conectado à rede. Na primeira ligação, o telemóvel e o dispositivo devem estar na mesma rede Wi-Fi. Tenha consigo a conta e a palavra-passe do ZimaOS. Se acabou de desembalar o dispositivo, siga primeiro o guia **[Começar](./get-started "Configurar o ZimaOS desde o primeiro arranque com o ZimaClient e a criação de conta")**.

## Instalar o ZimaClient

Obtenha o ZimaClient para **[iOS](https://www.zimaspace.com/zimaos/download "Transferir a aplicação ZimaClient para iOS a partir da App Store")** na App Store ou para **[Android](https://www.zimaspace.com/zimaos/download "Transferir a aplicação ZimaClient para Android a partir do Google Play")** no Google Play e abra-o.

## Iniciar sessão e estabelecer ligação

1. Abra o ZimaClient. A aplicação procura na rede local e apresenta os dispositivos NAS com ZimaOS que encontrar.

![Ecrã de descoberta de dispositivos do ZimaClient com os dispositivos NAS que executam ZimaOS encontrados na rede local](/images/guides/zimaclient-device-discovery.jpg)

2. Toque no seu dispositivo e inicie sessão com a sua conta ZimaOS.

![Ecrã de início de sessão do ZimaClient com os campos de nome de utilizador e palavra-passe da conta ZimaOS](/images/guides/zimaclient-sign-in.jpg)

Após o primeiro início de sessão, o telemóvel fica associado ao dispositivo.

{% note tip Acesso remoto %}
O acesso remoto é configurado automaticamente, pelo que as cópias de segurança continuam a funcionar quando está fora de casa, desde que tenha ativado a funcionalidade de acesso remoto em **Definições > Rede** no dispositivo ZimaOS.
{% endnote %}

Se utilizar mais do que um dispositivo ZimaOS, atribua um ícone personalizado a cada um para distinguir facilmente os servidores domésticos. No painel do ZimaOS, abra **Definições > Geral** e clique no botão de configuração junto a **Informações do dispositivo**. Escolha ícones com personalidade. Um dos nossos utiliza as ondas de pulsar da capa de um álbum clássico, porque um servidor doméstico nunca deixa de pulsar com dados.

<div style="display:flex; align-items:stretch; gap:16px;">
  <img src="/docs/images/guides/zimaclient-device-icons.png" alt="Página Geral das Definições do ZimaOS com ícones de dispositivo personalizados, um inspirado na capa de álbum com ondas de pulsar" style="flex:0 0 62%; max-width:62%; height:auto;">
  <img src="/docs/images/guides/zimaclient-phone-device-icon.jpg" alt="Ecrã do ZimaClient no telemóvel com dispositivos NAS que executam ZimaOS e ícones personalizados após a configuração" style="flex:0 0 30%; max-width:30%; object-fit:cover; object-position:top;">
</div>

## Escolher o que copiar

Escolha os álbuns que pretende na fototeca do iOS. Pode selecionar álbuns específicos em vez de toda a biblioteca, mantendo as capturas de ecrã e as transferências fora da cópia, se assim preferir.

Comece pelas definições de cópia de segurança, onde escolhe o que será incluído. Depois, percorra os álbuns e selecione os importantes.

<div style="display:flex; align-items:flex-start; justify-content:center; gap:40px;">
  <img src="/docs/images/guides/zimaclient-album-backup-setting.png" alt="Página de definições de cópia de segurança do ZimaClient com as opções do conteúdo incluído na cópia das fotografias" style="flex:0 0 42%; max-width:42%; height:auto;">
  <img src="/docs/images/guides/zimaclient-album-selection.png" alt="Ecrã de seleção de álbuns do ZimaClient com os álbuns das Fotografias do iOS e caixas de seleção" style="flex:0 0 42%; max-width:42%; height:auto;">
</div>

## Escolher o destino

O destino predefinido é criado automaticamente. Quando tiver um espaço de armazenamento próprio, direcione a cópia para esse local —um conjunto RAID ou um disco dedicado— em vez da unidade do sistema ZimaOS. A unidade do sistema é normalmente a mais pequena e as fotografias enchem-na depressa. Consulte **[Configuração de armazenamento](./storage-setup "Escolher a configuração de armazenamento com opções RAID adequadas às suas necessidades")** para planear os espaços de armazenamento.

## Iniciar a cópia de segurança

Confirme e inicie. A primeira cópia é a mais demorada porque transfere toda a seleção. As cópias seguintes transferem apenas o que mudou.

![Ecrã de confirmação da cópia de segurança do ZimaClient com o botão de início antes da primeira execução](/images/guides/zimaclient-backup-start.webp)

Este é o aspeto de uma cópia no telemóvel: a pré-visualização das fotografias e uma fotografia aberta em detalhe.

<div style="display:flex; align-items:flex-start; justify-content:center; gap:40px;">
  <img src="/docs/images/guides/zimaclient-photo-preview.webp" alt="Pré-visualização de fotografias do ZimaClient com as fotografias copiadas disponíveis para consulta no telemóvel" style="flex:0 0 42%; max-width:42%; height:auto;">
  <img src="/docs/images/guides/zimaclient-photo-detail.webp" alt="Vista detalhada de uma fotografia no ZimaClient com uma imagem da cópia aberta em ecrã inteiro" style="flex:0 0 42%; max-width:42%; height:auto;">
</div>

As opções de cópia vão mais longe. As Live Photos do iOS são transferidas com o movimento intacto. A cópia automática e a cópia através de dados móveis são simples interruptores, e o espaço disponível no destino aparece no mesmo local, para saber sempre quanto resta.

<img src="/docs/images/guides/zimaclient-more-options.png" alt="Opções de cópia de segurança do ZimaClient com suporte para Live Photos, interruptores de cópia e espaço disponível no destino" style="display:block; margin:0 auto; width:35%; height:auto;">

## Associar uma pasta

A opção **Associar uma pasta** direciona a cópia para uma pasta que já existe no ZimaOS. É assim que os conteúdos exteriores ao telemóvel se juntam à mesma biblioteca.

Pense nas pastas que já tem: filmagens de uma câmara profissional ou de ação, cópias de telemóveis antigos ou arquivos copiados de um computador anterior. Associe qualquer uma delas e os conteúdos aparecerão no ZimaClient no telemóvel, organizados juntamente com tudo o que copiar. Uma biblioteca, um único local para consultar tudo.

## Velocidade da cópia de segurança

Em teoria, um telemóvel numa rede local em bom estado pode utilizar mais de 50 MB/s de largura de banda de transferência. O valor real depende principalmente de uma coisa: o Wi-Fi.

**A qualidade do Wi-Fi é o fator mais importante.** Uma ligação de 5 GHz perto do router é muito mais rápida do que uma ligação de 2.4 GHz noutra divisão. A distância, as paredes e um canal congestionado reduzem a velocidade. Estar perto do router em 5 GHz é mais eficaz do que qualquer outra configuração.

Tudo o resto raramente constitui um ponto de estrangulamento. A porta de rede do dispositivo é mais rápida do que o percurso Wi-Fi do telemóvel, pelo que nunca limita a transferência. Os discos rígidos leem e escrevem a 100 MB/s ou mais, bem acima do que a ligação do telemóvel consegue enviar. Na prática, o desempenho do próprio telemóvel também não é um fator.

{% note tip Otimização de ficheiros pequenos do ZimaOS %}
As fototecas são constituídas sobretudo por ficheiros pequenos e o ZimaOS foi criado precisamente para isso. Graças a uma otimização profunda de ficheiros pequenos no lado recetor, os lotes de capturas de ecrã, clipes curtos e sequências são transferidos com a mesma fluidez dos vídeos grandes.
{% endnote %}

A conclusão prática é simples: na primeira cópia grande, coloque o telemóvel junto ao router e deixe-a terminar.

## Sugestões práticas

{% note tip %}
- Execute a primeira cópia grande através de Wi-Fi em vez de dados móveis para evitar limites de utilização.
- Antes de trocar de telemóvel, abra o ZimaClient uma vez e deixe-o concluir uma última cópia de segurança.
- Cada membro da família inicia sessão com a sua própria conta ZimaOS, pelo que as fotografias de cada pessoa permanecem na respetiva biblioteca. A **[Fototeca familiar](./family-photo-library "Criar uma fototeca familiar no ZimaOS com as fotografias de todos")** reúne-as quando quiser.
- Se a cópia parar, aproximar-se do router resolve a maioria dos casos.
{% endnote %}

## Seguinte

- **[Cópia de segurança do computador](./computer-backup "Efetuar uma cópia de segurança do computador para o ZimaOS através do Finder, Explorador ou sincronização")** — inclua também o portátil
- **[Pré-visualização de fotografias](./photos-preview "Consultar as fotografias do ZimaOS nos modos grelha, cascata e justificado")** — consulte a biblioteca depois de a importar
- **[Estratégia de cópia de segurança 3-2-1](./how-to-use-3-2-1-backup-on-zimaos "Proteger os dados com a regra de cópia de segurança 3-2-1 no NAS")** — uma única cópia não é um plano
