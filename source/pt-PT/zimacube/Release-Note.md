---
title: Título
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser removido, a descrição é para o artigo e não preenchê-la resultará na captura do primeiro parágrafo do conteúdo
---

Agradecemos sinceramente aos nossos usuários da comunidade pela sua participação ativa e sugestões valiosas, que nos permitem continuar a melhorar e refinar o ZimaOS! Convidamos você a compartilhar mais ideias, por favor!

Dicas

Se você encontrar quaisquer problemas de software, seja bem-vindo a se juntar ao Discord e obter suporte de 20.000 membros da comunidade Zima. -[IceWhale](https://discord.com/invite/f9nzbmpMtU)
# ZimaOS v1.2.3
![](https://manage.icewhale.io/api/static/docs/1724749372699_image.png)
## Corrigido
Corrigir problemas relacionados à experiência de armazenamento RAID @scottyman2k@orochikun

Corrigir falhas na instalação ou atualização do sistema @Secarius@Bmorg

Corrigir o problema de SSD não ser reconhecido ou estar deslocado @Scyto@artophe@Vinney

Corrigir alguns problemas de uso anormal de recursos de CPU @jojo@goultron

Corrigir o problema de não conseguir criar usuários, SSH não estar utilizável e erros na exibição da capacidade do disco do sistema @applegeek@Halogen

Nos Arquivos, miniaturas são exibidas 5 vezes mais rápidas

No ZVM, foi corrigida a criação dupla de máquinas virtuais ao clicar no botão de criar continuamente @cfouche

PeerDrop adiciona autenticação de login para aumentar a segurança

A porta 53 foi liberada para garantir que o Pi-hole ou o AdGuard Home funcionem corretamente @oldintynazar

## Novo

Para novos usuários do ZimaOS, o compartilhamento Samba é habilitado por padrão para o ZimaOS HD e todos os espaços de armazenamento, e está protegido pela conta e senha do ZimaOS

Após atualizar o ZimaOS para a versão atual, mudar a senha habilitará o compartilhamento Samba mencionado acima

Depois que a senha do sistema do ZimaOS for alterada, a senha do compartilhamento Samba será alterada de forma síncrona

O RAID5 permite que novos discos rígidos sejam adicionados para expandir o espaço

Quando um disco no RAID5 estiver danificado, os dados ainda poderão ser lidos

Nos Arquivos, a capacidade do espaço de armazenamento foi adicionada à coluna da esquerda

Nos Arquivos, um novo logotipo do Zima foi adicionado ao canto superior esquerdo para retornar ao painel ao clicar

No ZVM, Assist e configurações de App, o seletor de arquivos adiciona uma barra lateral de espaço de armazenamento para uma seleção de caminho de arquivo mais conveniente

Nas Configurações, um interruptor "luz de energia sempre acesa" foi adicionado para desligar ativamente a luz de energia sempre ligada @Sabitech

Nas Configurações, a exibição do status de trabalho da porta Ethernet ZimaCubePro 10G e da porta Thunderbolt foi adicionada

A probabilidade de o ZimaCube ser escaneado automaticamente na função de rede do Mac Finder e do Windows Explorer foi melhorada

Permitir que o armazenamento ZFS funcione no ZimaOS @Brucio

## Remover
O nome de usuário da conta ZimaOS não pode mais ser modificado
## Download
:zap: Para usuários que instalaram ZimaOS V1.1: Clique no ponto vermelho no canto superior esquerdo do painel para iniciar a atualização.

:zap: Instalador: https://casaos.oss-cn-shanghai.aliyuncs.com/IceWhaleTech/zimaos-rauc/releases/download/1.2.3/zimaos_zimacube-1.2.3_installer.img

:zap: Atualização manual: https://casaos.oss-cn-shanghai.aliyuncs.com/IceWhaleTech/zimaos-rauc/releases/download/1.2.3/zimaos_zimacube-1.2.3.raucb