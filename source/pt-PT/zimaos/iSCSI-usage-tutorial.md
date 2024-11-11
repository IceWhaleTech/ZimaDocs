---
title: Tutorial de uso do iSCSI
description: 
type: "Docs"
tip: O formato fixo da barra superior não deve ser removido, a descrição é para o artigo, se não preenchida, será cortada a primeira parte do conteúdo.
---

iSCSI (Internet Small Computer System Interface) é um protocolo para transmitir comandos SCSI através de uma rede, permitindo que dispositivos de armazenamento se comuniquem sobre uma rede, semelhante ao armazenamento diretamente conectado. Ele pode virtualizar recursos de armazenamento, alcançar gerenciamento centralizado, compartilhamento em rede e acesso remoto, sendo adequado para cenários como data centers, ambientes virtualizados e backup e recuperação. 
Através deste tutorial, você aprenderá como configurar e usar o iSCSI no ZimaOS para melhorar a eficiência de gerenciamento de armazenamento, simplificar a arquitetura de armazenamento em rede e alcançar métodos de acesso a dados flexíveis.
## Pré-requisitos
1. O disco rígido utilizado não está em uso
2. Confirmar o IQN do cliente

## Passos de operação
### Servidor
*Certifique-se de que seu ZimaOS foi atualizado para 1.2.5 ou superior.*

1. Use o comando `sudo -i` para entrar no modo superusuário, inicie o targetcli
```
targetcli
```

![](https://manage.icewhale.io/api/static/docs/1730362966225_image.png)

2. Crie um LUN, supondo que `/dev/sde` seja usado como backend de armazenamento (Aqui usamos sde. Você pode usar o `lsblk` para ver o status do dispositivo e mudar para `sda` ou `sdb`..):
```
cd backstores/block
create myblockdev /dev/sde
```

![](https://manage.icewhale.io/api/static/docs/1730362990127_image.png)

3. Crie um alvo iSCSI (`iqn.2024-10.com.zima:target1` é um exemplo)
```
cd /iscsi
create iqn.2024-10.com.zima:target1
```

![](https://manage.icewhale.io/api/static/docs/1730363013870_image.png)

4. Adicione um LUN ao alvo
```
cd iqn.2024-10.com.zima:target1/tpg1/luns
create /backstores/block/myblockdev
```

![](https://manage.icewhale.io/api/static/docs/1730363050568_image.png)

5. Defina a ACL (lista de controle de acesso) para permitir a conexão. O IQN aqui precisa ser consistente com o cliente (Abra o Iniciador iSCSI, está na aba de Configuração)
```
cd ../acls
create iqn.1993-08.org.debian:01:bb1e6772dfb6
```

![](https://manage.icewhale.io/api/static/docs/1730363186571_image.png)
### Cliente
**Windows**
1. Abra o Iniciador iSCSI, na aba Descoberta, clique em Descobrir Portal
![](https://manage.icewhale.io/api/static/docs/1730363629547_image.png)

2. Configure o endereço IP, clique em OK
![](https://manage.icewhale.io/api/static/docs/1730363646462_image.png)

3. Na aba Alvos, clique em Conectar
![](https://manage.icewhale.io/api/static/docs/1730363656977_image.png)

4. Abra o Gerenciamento do Computador, clique em Armazenamento > Gerenciamento de Disco, e você poderá ver o volume iSCSI recém-conectado
![](https://manage.icewhale.io/api/static/docs/1730363667742_image.png)

**Linux**
1. Descubra os alvos iSCSI
```
iscsiadm -m discovery -t sendtargets -p <ENDEREÇO_IP>
```

Substitua `<ENDEREÇO_IP>` pelo endereço IP do servidor
![](https://manage.icewhale.io/api/static/docs/1730363793486_image.png)

2. Faça login no alvo iSCSI
```
iscsiadm -m node --login
```
![](https://manage.icewhale.io/api/static/docs/1730363899468_image.png)