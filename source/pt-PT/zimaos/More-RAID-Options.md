---
title: Mais Opções de RAID
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser eliminado, a descrição é para o artigo, e se não for preenchida, o conteúdo será extraído do primeiro parágrafo.
---
# Configuração de Array RAID
Em resumo, RAID é uma solução de backup de redundância para discos após uso prolongado. Embora hoje em dia muitos optem por soluções de backup na nuvem e múltiplos armazenamentos locais, o RAID continua a ser uma tecnologia de configuração de armazenamento convencional na indústria de NAS, melhorando a fiabilidade e o desempenho do armazenamento de dados. Ele melhora a tolerância a falhas e as velocidades de leitura/gravação, combinando múltiplos discos em uma ou mais unidades.

O ZimaOS incorpora tecnologia complexa com uma experiência simples. Ao criar e manter espaço RAID, você não precisa passar por configurações complexas. Com apenas cinco cliques simples, você pode completar a configuração.

## Processo de Criação de RAID no ZimaOS
A seguir, usaremos uma configuração RAID 5 com três discos como estudo de caso para entender como criar e usar RAID no ZimaOS:
1. Abra o painel de configurações e veja o botão para criar RAID. Clique em "Criar".
Dica: Se você só precisa montar e usar diretamente o seu disco, então "Descobrir o novo disco rígido" será sua escolha.
![](https://manage.icewhale.io/api/static/docs/1727161448346_image.png)
2. Com base nas suas necessidades, escolha a opção RAID apropriada. Aqui estão explicações simples sobre as características dos três tipos de RAID:
![](https://manage.icewhale.io/api/static/docs/1727161467120_image.png)
3. Escolha a opção RAID que melhor se adapta às suas necessidades.
![](https://manage.icewhale.io/api/static/docs/1727161792442_image.png)
4. Modifique o nome do seu array e confirme.
![](https://manage.icewhale.io/api/static/docs/1727161810070_image.png)
5. Permita algum tempo para a inicialização; dependendo do tamanho dos seus discos, isso pode levar alguns segundos a alguns minutos.
![](https://manage.icewhale.io/api/static/docs/1727161825483_image.png)
6. Complete a configuração e comece a usar seu espaço de armazenamento RAID.
![](https://manage.icewhale.io/api/static/docs/1727161840983_image.png)
## Mais Configuração

Ao configurar RAID no ZimaOS, você pode efetivamente aumentar a segurança dos dados e o desempenho do sistema. Escolha o nível de RAID apropriado com base nas suas necessidades específicas para alcançar o equilíbrio ideal entre desempenho e proteção de dados. Para a maioria dos usuários, RAID 1 ou RAID 5 são escolhas sólidas, dependendo das suas necessidades de espaço e segurança.

Além disso, para usuários que não estão satisfeitos com as opções de RAID padrão do ZimaOS, o sistema também suporta ZFS para configurações de espaço de armazenamento personalizadas.