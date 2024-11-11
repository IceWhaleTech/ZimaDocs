---
title: 7ª Baía de Uso 
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser removido, a descrição é uma descrição do artigo, se não preenchida, será cortada a primeira parte do conteúdo
---
# Instalar e Remover a 7ª Baía
## Preparativos:
Assegure-se de que o ZimaCube esteja desligado e desconectado da tomada.
Prepare o disco rígido a ser instalado.
## Passos Específicos:
Passo 1: Remova o painel frontal do gabinete.
![](https://manage.icewhale.io/api/static/docs/1722418820491_image.png)
Passo 2: Remova a 6ª baía.
![](https://manage.icewhale.io/api/static/docs/1722418858886_image.png)
Passo 3: Vire no sentido anti-horário para soltar os parafusos que seguram o sétimo disco.
![](https://manage.icewhale.io/api/static/docs/1722418913222_image.png)
Passo 4: Remova a 7ª baía.
![](https://manage.icewhale.io/api/static/docs/1722418964759_image.png)
![](https://manage.icewhale.io/api/static/docs/1722418974044_image.png)
Passo 5: Instale livremente o SSD na 7ª baía.
![](https://manage.icewhale.io/api/static/docs/1722419028169_image.png)
Passo 6: Empurre a 7ª baía para a posição correta e aperte os parafusos no sentido horário.
![](https://manage.icewhale.io/api/static/docs/1722419069919_image.png)

# Como atualizar o firmware de iluminação da ZimaCube 7ª
*Para evitar que o esp32 falhe nas atualizações OTA (Over-The-Air), um método de atualização com fio é introduzido aqui.*
## Solução em 3 passos
1. Conectar ao WiFi
Conecte-se ao WiFi com um computador
Nome: "ZimaCube"
Senha: "homecloud"
2. Acesse a URL
Digite no navegador: 172.16.1.1
3. Envie o firmware
[https://drive.google.com/file/d/1h8LKvZ47gdMmpJzu6CFK3awjGFX5ayRE/view?usp=drive_link](https://drive.google.com/file/d/1h8LKvZ47gdMmpJzu6CFK3awjGFX5ayRE/view?usp=drive_link)

## Plano de contingência

**Preparativos antes da atualização**
- Computador
- Cabo de dados tybe-c
- Disco 7
- Baixe e descompacte o pacote comprimido
[https://drive.google.com/file/d/15nPalLy-2ieNQ84dT1gchBzLqtEfM--8/view?usp=drive_link](https://drive.google.com/file/d/15nPalLy-2ieNQ84dT1gchBzLqtEfM--8/view?usp=drive_link)

**Iniciar a atualização**
3.1 Utilize o cabo de dados tybe-c para conectar o computador ao tybe-c no chip no sétimo disco
3.2 Abra o link [espressif.github.io](espressif.github.io) no computador
3.3 Clique em 'Conectar'
![](https://manage.icewhale.io/api/static/docs/1730360675989_image.png)

3.4 Selecione a porta serial para conexão
![](https://manage.icewhale.io/api/static/docs/1730360689217_image.png)

3.5 Clique em 'DIY'
![](https://manage.icewhale.io/api/static/docs/1730360715808_image.png)

3.6 Clique em 'Adicionar Arquivo' duas vezes
![](https://manage.icewhale.io/api/static/docs/1730360989529_image.png)

3.7 Altere o endereço de gravação e selecione o arquivo
*O endereço de gravação específico é mostrado na figura, selecione os três arquivos após a descompressão, por ordem*
![](https://manage.icewhale.io/api/static/docs/1730360997291_image.png)

3.8 Clique em 'Programar' para iniciar a gravação
![](https://manage.icewhale.io/api/static/docs/1730361017895_image.png)

3.9 A gravação está completa, pressione o botão de reinicialização RST, e o firmware foi atualizado com sucesso