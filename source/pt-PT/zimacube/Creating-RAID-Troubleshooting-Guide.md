---
title: Criando Guia de Solução de Problemas de RAID
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser removido, a descrição é a descrição do artigo, se não preenchida, será cortado o texto na primeira parte
---
# Ao lidar com problemas relacionados à incapacidade de criar RAID, recomenda-se seguir estas etapas de solução de problemas:

## Verificar o Número de Discos Rígidos
Certifique-se de que há pelo menos dois discos rígidos disponíveis para atender aos requisitos básicos para a configuração de RAID.
![](https://manage.icewhale.io/api/static/docs/1722484339854_image.png)
## Verificar o Status de Saúde do Disco
![](https://manage.icewhale.io/api/static/docs/1722484363590_image.png)
## Verificar se a formatação de cada disco individual foi bem-sucedida
Formate cada disco rígido individualmente para garantir que o processo de formatação seja concluído com sucesso, sem erros.
![](https://manage.icewhale.io/api/static/docs/1722484386621_image.png)
## Verificar o Ponto de Montagem
Verifique se o ponto de montagem do RAID não contém arquivos. O ponto de montagem deve estar vazio para garantir a configuração suave do RAID. Se houver arquivos presentes, faça backup e limpe o ponto de montagem.
![](https://manage.icewhale.io/api/static/docs/1722484409099_image.png)
## Reinício do Sistema
Após concluir as verificações acima, reinicie o sistema e tente criar o RAID novamente.
![](https://manage.icewhale.io/api/static/docs/1722484430867_image.png)