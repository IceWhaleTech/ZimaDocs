---
title: ZFS no ZimaCube
description:
type: “Docs”
tip: A barra superior tem um formato fixo, por favor não a delete, a descrição é para o artigo, se não preencher, será retirada a primeira parte do texto.
---
# Estabelecer pool de armazenamento
Conecte uma unidade externa ao ZimaCube. Use a ferramenta lsblk para listar todas as unidades. Você pode encontrar a unidade que acabou de conectar controlando as variáveis.
![](https://manage.icewhale.io/api/static/docs/1727160959998_image.png)
Aqui, minha unidade USB é mostrada como sda.
Use este comando para criar um pool de armazenamento.
```language
# Você pode precisar remover todos os dados do seu disco primeiro:
dd if=/dev/zero of=/dev/sda bs=1M count=10

# Como o diretório raiz é somente leitura na maioria das circunstâncias no ZimaOS,
# crie manualmente um diretório em /media para montar.
mkdir /media/pool1

# Crie seu pool:
zpool create -m /media/pool1 pool1 /dev/sda -f

# Além disso, você pode precisar destes para fins de remoção posteriormente:
zpool export pool1
zpool destroy pool1
```
![](https://manage.icewhale.io/api/static/docs/1727161209903_image.png)
## Estabelecer ZFS no pool de armazenamento
```language
# Crie ZFS no pool de armazenamento criado:
zfs create pool1/zfs

# Use o comando abaixo para mostrar zfs list
zfs list
```
![](https://manage.icewhale.io/api/static/docs/1727161245558_image.png)
Escolhi criar o pool de armazenamento e o zfs no diretório /media para que você possa usar facilmente o ZFS no ZimaOS.