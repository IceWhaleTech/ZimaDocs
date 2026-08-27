---
title: Como usar NFS no ZimaOS
description: 
type: Docs
author: admin
tip: A barra superior fixada não deve ser excluída, a descrição será extraída do primeiro parágrafo caso não seja preenchida.
---
Os protocolos de compartilhamento de arquivos em rede permitem compartilhar arquivos e diretórios do seu computador com outros dispositivos na rede. Os protocolos comuns incluem SAMBA, NFS e FTP. 
Vantagens do compartilhamento em rede:
| **Aspecto** | **Cópia via USB** | **Apps de Mensagens** | **Compartilhamento de Rede** |
| - | - | - | - |
| **Armazenamento** | Duplicatas locais | Cópias múltiplas | **Centralizado, sem duplicatas** |
| **Gerenciamento** | Manual, propenso a erros | Espalhado em chats | **Controle centralizado** |
| **Uso de Mídia** | Cópia completa necessária | Download completo necessário | **Suporte a streaming** |
| **Colaboração** | Transferência física | Limites de tamanho de arquivos | **Acesso múltiplo em tempo real** |

O ZimaOS atualmente oferece suporte a CLI e GUI para SAMBA. Nas versões posteriores à 1.3.2, o ZimaOS também integra a funcionalidade NFS (no nível CLI). Este tutorial demonstra como usar NFS no ZimaOS para compartilhar pastas e acessá-las a partir de Windows, macOS e Ubuntu.
Primeiro, você precisa criar ou encontrar uma pasta para compartilhar. Aqui, usarei `/DATA/C/demo` como exemplo.
## Editar o Arquivo de Configuração
Use o `vi` para editar o arquivo `/etc/exports`, que é o arquivo de configuração do NFS.

```language
# Primeiro, você precisa acessar o terminal web do ZimaOS e obter privilégios de root.
# Painel do ZimaOS -> Configurações -> Geral 
# -> Modo de desenvolvedor -> Terminal baseado na web
# Faça login e altere para root
sudo -i

# edite o arquivo de configuração
vi /etc/exports

# no arquivo /etc/exports, cole esta linha
/DATA/C/demo *(rw,sync,no_subtree_check)

# a primeira coluna especifica a pasta compartilhada (ex.: /DATA/C/demo)
# a segunda coluna define
    # A sub-rede que tem permissão para acessar
        # ex.: 10.0.0.0/8,
        # o * permite acesso de todas as redes
    # Permissão de Leitura e Escrita para usuários da rede (rw)
    # Método de gravação, geralmente sync ou async (sync neste caso)
    # no_subtree_check permite acesso total ao diretório compartilhado sem restrições de subárvore
# consulte isso: https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/5/html/deployment_guide/s1-nfs-server-config-exports#s1-nfs-server-config-exports
```
Isso funcionará automaticamente, até mesmo após reinicialização.
## Aplicar as Alterações do Arquivo de Configuração
```language
# Em alguns casos,
# pode ser necessário rodar este comando no shell para aplicar a configuração.
systemctl restart nfs-server

#ou
exportfs -a
```
## Usar (Montar/Desmontar) as Pastas NFS
### No ZimaOS/Ubuntu
```language
# Testado no ZimaOS 1.3.2-beta2 e Ubuntu 22.04.5 LTS
# Aqui em uma máquina cliente
# abra o Terminal
# altere para root primeiro
# crie um diretório para montagem
sudo -i
mkdir /mnt/demo

# monte a pasta nfs
# este IP é o IP do Servidor
mount 10.0.0.71:/DATA/C/demo /mnt/demo

# Agora você pode visualizar e usar o compartilhamento

# talvez você queira remover as pastas NFS montadas algum dia
# Verifique as pastas montadas
df -h
# ou
mount | grep nfs

# desmonte as pastas nfs
umount /mnt/demo
```
### No macOS
```language
# Testado no macOS Sequoia com chip M4
# crie um diretório para montagem
mkdir ~/demo

# monte a pasta nfs
# você precisará usar sudo para montar
# será solicitado que insira a senha
sudo mount -t nfs -o resvport 10.0.0.71:/DATA/C/demo ~/demo

# abra a pasta para usar
open .

# talvez você queira remover as pastas NFS montadas algum dia
# Verifique as pastas montadas
df -h
# ou
mount | grep nfs

# desmonte as pastas nfs
sudo umount /mnt/demo
```
### No Windows
```language
# Testado no Windows 11
# você pode precisar entrar no CMD primeiro 
# já que o terminal pode abrir no Powershell por padrão no Windows 11
cmd

# você pode precisar mudar W: para uma letra disponível
mount \\10.0.0.71\DATA\C\demo W:

# Agora você pode visualizar e usar o compartilhamento

# talvez você queira remover as pastas NFS montadas algum dia
# Verifique as pastas montadas
net use

# desmonte as pastas nfs
net use W: /delete
```
A captura de tela após a montagem no Windows:
![](https://manage.icewhale.io/api/static/docs/1739500988306_image.png)
## Dicas Úteis
Aqui estão alguns comandos que você pode precisar mais tarde.
```language
# No servidor ZimaOS
# verifique o status do serviço nfs
systemctl status nfs-server

# remova ou comente a linha de /etc/exports para desabilitar o compartilhamento
# execute isso para aplicar
exportfs -a
# ou
systemctl restart nfs-server
```
Se você encontrar algum problema durante o uso, sinta-se à vontade para nos avisar a qualquer momento. Você também pode entrar em nossa [comunidade](https://community.zimaspace.com/) e [Discord](https://discord.com/invite/uuNfKzG5) para discutir mais sobre NAS e ZimaOS. Aguardamos seu feedback!