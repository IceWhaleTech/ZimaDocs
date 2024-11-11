---
title: Como Criar RAID6 no ZimaOS?
description: 
type: "Docs"
tip: O formato fixo da barra superior não deve ser removido, a descrição é para o artigo, e se não preenchido, o conteúdo será cortado na primeira parte do texto.
---
## Introdução
Atualmente, o ZimaOS suporta RAID0/1/5, mas entendemos que muitos usuários necessitam de RAID6 para uma maior redundância. Para resolver isso, preparamos um guia passo a passo para criar RAID6 através da linha de comando. Por favor, siga as instruções abaixo.
Estamos ansiosos para acelerar nosso suporte para mais níveis de RAID no futuro!

{% note warn Dicas %}
Se o sistema for reiniciado, você precisará reassemblar o array RAID6.
{% endnote %}


## Pré-requisitos

1. Você precisará de pelo menos quatro discos rígidos.
2. Você precisa aprender como acessar a página da linha de comando clicando em [isto](https://www.zimaspace.com/docs/zimaos/How-to-Open-SSH-in-ZimaOS.html).
3. Você precisa executar os comandos no tutorial com privilégios de superusuário (privilégios root). Você pode usar `sudo` para aumentar os privilégios, como `sudo mkfs.ext4 /dev/md0`
4. Use o comando lsblk para verificar os discos rígidos disponíveis.
   ![](https://manage.icewhale.io/api/static/docs/1729218009483_98dae94c-9b29-4042-a508-537aa6d1d554.jpeg)

5. Se MOUNTPOINTS tiver um ponto de montagem, você precisa cancelá-lo com o seguinte comando.
   ![](https://manage.icewhale.io/api/static/docs/1729145392591_image.png)
   ```command
   umount /dev/sda
   ```
   


## Passos para Criar RAID6

1. Crie o array RAID6 com pelo menos quatro discos usando o seguinte comando:
   ```
   mdadm -Cv /dev/md0 --level=6 --name=foldername --raid-devices=4 /dev/sda /dev/sdb /dev/sdc /dev/sdd --run --homehost=zimaos
   ```
   `/dev/md0` é o nome do novo dispositivo RAID.

   `--level=6` indica que você está criando um array RAID6.

   `--name=foldername` especifica o nome do array RAID.

   `--raid-devices=4` informa ao sistema para usar quatro discos rígidos.

   `/dev/sda /dev/sdb /dev/sdc /dev/sdd` são os discos que participam do array.

   ![](https://manage.icewhale.io/api/static/docs/1729219387443_img_v3_02fp_8fce2dd8-56af-4706-b5de-96cea3b8162g.jpg)


2. Formate o RAID usando o seguinte comando:
   ```
   mkfs.ext4 /dev/md0
   ```
   ![](https://manage.icewhale.io/api/static/docs/1729219416289_img_v3_02fp_7340f5ef-7892-4696-8707-cdda424461cg.jpg)


3. Crie um diretório para montar o RAID:

   ```
   cd /media
   mkdir foldername
   ```

4. Monte o RAID usando o seguinte comando:

   ```
   mount -t ext4 /dev/md0 /media/foldername
   ```
5. Uma vez criado, insira o caminho na interface Web para exibi-lo

   ![](https://manage.icewhale.io/api/static/docs/1729220708308_img_v3_02fp_245f1382-835d-4827-8852-f6ab8b166d8g.jpg)

   ![](https://manage.icewhale.io/api/static/docs/1729220715773_img_v3_02fp_1b36a2a6-e9a5-45d0-acc2-9b3345b3224g.jpg)

   
## Observação:
Se o sistema for reiniciado, você precisará reassemblar o array RAID6:
```
mdadm -Av /dev/md0 /dev/sda /dev/sdb /dev/sdc /dev/sdd
mount /dev/md0 /media/foldername
```