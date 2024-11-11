---
title: Como conectar o ZimaCube via Cabo Thunderbolt
description: 
type: "Docs"
tip: Formato fixo da barra superior, por favor não deletar, description é a descrição do artigo, se não for preenchido, será cortado o texto da primeira parte
---

Se você deseja conectar seu computador ao ZimaCube usando um cabo Thunderbolt para velocidades de conexão mais rápidas, pode seguir estes passos:

## Mac
- Se você ainda não conectou ao ZimaCube usando o ZimaClient, consulte a [documentação](https://www.zimaspace.com/docs/zimaos/Features.html#Download-the-Zima-Client) para baixar e instalar o [ZimaClient](https://find.zimaspace.com/). O ZimaClient priorizará e identificará dispositivos com conexões Thunderbolt durante a varredura inicial.

![](https://manage.icewhale.io/api/static/docs/1728443998198_image.png)


1. Conecte uma extremidade do cabo Thunderbolt à porta Thunderbolt no painel traseiro do ZimaCube (qualquer uma das duas portas) e a outra extremidade à porta Thunderbolt do seu computador.
   - a. Cabo Thunderbolt: Requer um cabo padrão Thunderbolt 3 ou Thunderbolt 4; cabos mais curtos fornecem melhor estabilidade e velocidade de transmissão.
   - b. Nota: As portas do painel frontal do ZimaCube Pro não suportam funcionalidade Thunderbolt, e o ZimaCube em si não suporta funcionalidade Thunderbolt.

| ![](https://manage.icewhale.io/api/static/docs/1728444041984_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728444057975_image.png) |
|:---:|:---:|
| 1.1 Conectar o cabo Thunderbolt ao painel traseiro do ZimaCube | 1.2 Conectar a outra extremidade à porta Thunderbolt do seu computador. |


2. Após conectar o cabo, o ZimaClient se adaptará automaticamente e mudará para a conexão Thunderbolt.
   - Se você ainda não conectou ao ZimaCube usando o ZimaClient, consulte a [documentação](https://www.zimaspace.com/docs/zimaos/Features.html#Download-the-Zima-Client) para baixar e instalar o [ZimaClient](https://find.zimaspace.com/).

| ![](https://manage.icewhale.io/api/static/docs/1728444146303_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728444152947_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728444159320_image.png) |
|:---:|:---:|:---:|
| 1. Antes de inserir o cabo Thunderbolt <br> Por exemplo: endereço IP 10.0.187.209 | 2. Aguardar cerca de 2 minutos <br> O cabo Thunderbolt será reconhecido como inserido. | 3. Cabo Thunderbolt conectado com sucesso <br> Por exemplo: endereço IP 169.254.1.1 |

3. Com base no novo endereço IP da conexão do cabo Thunderbolt, abra novamente o painel, configure o compartilhamento Samba e use as funções correspondentes.
   - Nota: Quando tanto o cabo Thunderbolt quanto o cabo LAN estão conectados, eles estarão em dois endereços IP diferentes. Você precisa acessar o endereço IP correspondente ao cabo Thunderbolt no seu computador para se beneficiar da transmissão mais rápida via Thunderbolt.
     
| ![](https://manage.icewhale.io/api/static/docs/1728444289229_image.png) | ![](https://manage.icewhale.io/api/static/docs/1728444304099_image.png) |
|:---:|:---:|
|  Reabra o painel |  Reconfigure o compartilhamento Samba |

## Windows
- Se você ainda não conectou ao ZimaCube usando o ZimaClient, consulte a [documentação](https://www.zimaspace.com/docs/zimaos/Features.html#Download-the-Zima-Client) para baixar e instalar o [ZimaClient](https://find.zimaspace.com/). O ZimaClient priorizará e identificará dispositivos com conexões Thunderbolt durante a varredura inicial.
1. Use o cabo Thunderbolt para conectar ao conector Thunderbolt no painel traseiro do ZimaCube (qualquer um dos dois conectores) e a outra extremidade para conectar ao conector Thunderbolt do seu PC com Windows.
  - a. Cabo Thunderbolt: é necessário um cabo padrão Thunderbolt 3 ou Thunderbolt 4, quanto mais curto, melhor a estabilidade e velocidade de transmissão.
  - b. Nota: A interface no painel frontal do ZimaCube Pro não suporta função Thunderbolt, o ZimaCube não suporta função Thunderbolt.

| ![](https://manage.icewhale.io/api/static/docs/1729589901877_image.png) | ![](https://manage.icewhale.io/api/static/docs/1729589918266_image.png) |
|:---:|:---:|
|  Cabo elétrico conectado ao conector Thunderbolt no painel traseiro do ZimaCube. |  A outra extremidade do cabo conecta ao conector de trovão do seu computador |


2. Uma vez que o cabo esteja plugado, o ZimaClient se adaptará automaticamente e mudará para a conexão Thunderbolt.
  - Se você ainda não usou o ZimaClient para conectar ao ZimaCube, consulte a documentação e faça o download e a instalação do ZimaClient primeiro.
  - Abra o cliente, você verá que seu dispositivo está conectado com sucesso ao zimacube via Thunderbolt.
  - Clique para conectar.

| ![](https://manage.icewhale.io/api/static/docs/1729590200515_image.png) | ![](https://manage.icewhale.io/api/static/docs/1729590218016_image.png) |
| - | - |


3. Conexão bem-sucedida do cabo de trovão
![](https://manage.icewhale.io/api/static/docs/1729590231315_image.png)

4. Com base no endereço IP da nova conexão do cabo Thunderbolt, reabra o Painel, configure o compartilhamento Samba, etc., e use as funções correspondentes.
- Nota: Quando o cabo Thunderbolt e o cabo LAN são ambos conectáveis, eles estarão localizados em 2 endereços IP diferentes, e a transmissão será feita apenas com o cabo Thunderbolt mais rápido quando o endereço IP correspondente do cabo Thunderbolt for acessado no computador.

## Leitura Adicional
  1. Como acessar e modificar arquivos no ZimaCube no Finder do MacOS e no Windows Explorer, consulte [mais](https://www.zimaspace.com/docs/zimaos/Using-Samba-as-a-Member).
  2. Descubra as velocidades de transferência mais rápidas que podem ser alcançadas com uma conexão Thunderbolt no ZimaCube, consulte: [Análise das Velocidades de Transferência da Conexão Thunderbolt do ZimaCube](https://www.zimaspace.com/docs/zimacube/Transfer-Speeds-Over-Thunderbolt).

## Solução de Problemas (a ser completada)
1. Se o cliente não for exibido, verifique as configurações de rede no Mac e no Windows.
2. Se o ZimaCube estiver conectado a uma placa gráfica, tente reiniciar o ZimaCube e tente novamente.

## Perguntas Frequentes
**1. O que é o ZimaCube? Como é diferente de dispositivos de armazenamento USB externos?**
   - a. O ZimaCube é um dispositivo de nuvem pessoal que supera a conectividade DAS sob condições de velocidade semelhantes. Ele possui capacidades tanto de NAS quanto de DAS, permitindo conexões rápidas a computadores pessoais via cabos Thunderbolt 4, enquanto mantém uma conexão de internet independente para o ZimaCube.
   - b. Ao contrário dos dispositivos de armazenamento USB, o ZimaCube possui sua própria placa-mãe e CPU; não é apenas um dispositivo de armazenamento. Portanto, quando conectado a um computador pessoal via cabo Thunderbolt, ele estabelece uma conexão de rede Thunderbolt e é exibido como um dispositivo de ponte Thunderbolt, em vez de um dispositivo de armazenamento USB. Conectar o ZimaCube a um computador pessoal não afeta a operação do ZimaCube ou sua conexão à internet; ele opera simultaneamente como NAS e DAS.
   - c. Conectar o ZimaCube a um computador pessoal via ponte Thunderbolt não resulta em velocidades mais lentas em comparação com dispositivos de armazenamento USB externos. A velocidade de conexão depende principalmente do cabo e do disco rígido. No entanto, se o ZimaCube estiver conectado simultaneamente a LAN e cabos Thunderbolt, o computador pessoal pode se conectar ao ZimaCube por qualquer um dos métodos. Com o ZimaClient instalado, ele mudará automaticamente para a conexão mais rápida. Se você conectar manualmente, o ZimaCube aparecerá como dois IPs (dispositivos) na rede.

**2. O Thunderbolt 4 é a conexão mais rápida no ZimaCube Pro?**
   - Sim.

**3. Existem recursos no ZimaCube Pro que podem ser usados apenas via Thunderbolt?**
   - TB4 suporta todas as funções de expansão, como monitores externos, dispositivos de armazenamento, periféricos USB, dispositivos PCIe, rede e carregamento.

**4. Preciso instalar drivers adicionais ao usar Thunderbolt 4?**
   - O ZimaOS instalado no ZimaCube já possui os drivers.
   - O cliente deve garantir que os drivers estejam instalados e atualizados.

**5. Por que a velocidade de transferência de arquivos é a mesma que a minha velocidade LAN quando ambos, Thunderbolt 4 e LAN, estão conectados? Por que não Thunderbolt 4? (Mac)**
   - Quando ambos, Thunderbolt e LAN, estão conectados, o macOS usa por padrão a rede LAN em vez do TB4.
   - Isso é um problema do mecanismo do sistema com o macOS. O ZimaOS está trabalhando para otimizar isso. Enquanto isso, recomenda-se desconectar a rede LAN e conectar apenas via TB4.

**6. O que devo fazer se as velocidades de transferência de arquivos via SMB ou compartilhamento de arquivos estiverem muito lentas?**
   - Instale o ZimaClient. O ZimaClient mudará automaticamente para uma conexão mais rápida. Após a troca, lembre-se de clicar em "Abrir no Finder/Explorer" novamente para garantir que você esteja usando a conexão Thunderbolt.

**7. Qual é a velocidade real do Thunderbolt 4 no ZimaCube Pro?**
   - Os testes de velocidade podem alcançar 20Gbps, mas as velocidades de transferência reais podem diminuir devido a limitações de disco rígido, tamanhos de arquivos e protocolos.

**8. Como posso alcançar velocidades ótimas do Thunderbolt 4 no ZimaCube Pro?**
   - a. Comprar cabos Thunderbolt 4 genuínos.
   - b. Garantir que os discos rígidos e a configuração RAID dentro do ZimaCube possam suportar velocidades de leitura/gravação superiores a 20Gbps.
   - c. No macOS, as velocidades de transferência Samba podem ser limitadas pelo Finder.
   - d. Ao transferir um grande número de pequenos arquivos, as velocidades podem ser limitadas.

**9. Quais são as diferenças entre Thunderbolt 4 e interfaces USB?**
   - Consulte: [Comparação da Intel](https://www.intel.com/content/www/us/en/architecture-and-technology/thunderbolt/thunderbolt-4-vs-usb-c.html)

**10. Quais são os passos de solução de problemas se a interface Thunderbolt 4 não puder ser habilitada?**
   - a. Verifique se o dispositivo e o cabo suportam TB4, especialmente o cabo.
   - b. O PC pode detectar o dispositivo Thunderbolt quando plugado?
   - c. O ZimaCube pode se conectar a outros dispositivos ou docks Thunderbolt?

**11. As interfaces e dispositivos Thunderbolt 4 são retrocompatíveis?**
   - TB4 é retrocompatível com TB3.

**12. A porta Thunderbolt 4 no ZimaCube Pro suporta conexões em cadeia?**
   - Sim.

**13. Posso usar o ZimaCube Pro como um dispositivo de armazenamento Thunderbolt direto, como um disco rígido externo comum?**
   - Não, ao contrário dos dispositivos de armazenamento USB, o ZimaCube possui sua própria placa-mãe e CPU, e a transferência de dados passará por eles.

**14. Conectar múltiplos cabos ao Mac/PC através das duas portas Thunderbolt 4 aumentará a velocidade?**
   - Não, a Rede TB não suporta agregação de link como cabos Ethernet duplos.
