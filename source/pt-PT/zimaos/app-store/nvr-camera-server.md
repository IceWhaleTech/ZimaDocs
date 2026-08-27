---
title: Servidor de Câmera NVR
description:
type: “Docs”
tip: A formatação da barra superior é fixa, por favor não a delete, a descrição é para o artigo, se não for preenchida, será extraído o texto do primeiro parágrafo
---
# Introdução
Este tutorial irá guiá-lo sobre como criar um sistema de vigilância por vídeo em casa no CasaOS usando Kerberos.io e ZimaBoard. Usaremos o recurso de instalação personalizada do Docker do CasaOS para simplificar o processo de instalação e configuração, e também explicaremos em detalhe como configurar uma câmera RTSP.
## 1. Preparação
- ZimaBoard X 1
- Certifique-se de que o ZimaBoard está conectado à energia e à Internet, e que o CasaOS está instalado
- Câmera IP compatível com RTSP
## 2. Obter o link RTSP da câmera
Como diferentes fabricantes de câmeras têm maneiras diferentes de obter o link RTSP, consulte o manual do usuário da sua câmera ou o site oficial do fabricante para obter instruções relevantes, ou faça login na interface de gerenciamento da câmera para encontrar o link RTSP. Neste tutorial, testamos com sucesso câmeras das marcas TP-Link e Tuya e verificamos a compatibilidade com Kerberos.io. Além disso, esperamos que o sistema seja compatível com câmeras de marcas como Hikvision, Ezviz, Dahua, eufy e Yousee.
## 3. Configurar Kerberos.io
### Passo 1: Fazer login no CasaOS
1. Certifique-se de que o ZimaBoard está conectado à energia e à internet, e que o CasaOS está instalado.
2. Acesse a interface web do CasaOS (geralmente http://<seu IP do ZimaBoard>).
### Passo 2: Instalar o Docker usando o CasaOS
1. Abra a loja de aplicativos
![](https://manage.icewhale.io/api/static/docs/1727083688403_image.png)
2. Clique em Instalação Personalizada
![](https://manage.icewhale.io/api/static/docs/1727083742110_image.png)
3. Clique em Importar
![](https://manage.icewhale.io/api/static/docs/1727083761139_image.png)
4. Cole o seguinte código para configurar o Docker no campo de entrada
version: '3'  # Versão do arquivo Docker Compose

services:
  kerberos:
    image: kerberos/kerberos  # Usar a imagem kerberos/kerberos
    container_name: kerberos  # Nome do contêiner
    ports:
      - "8080:80"  # Mapear a porta do host 8080 para a porta do contêiner 80
    volumes:
      - ./config:/config  # Montar o diretório de configuração do host em /config no contêiner
      - ./recordings:/etc/opt/kerberosio/capture  # Montar o diretório de gravações do host em /etc/opt/kerberosio/capture no contêiner
    restart: unless-stopped  # Política de reinício do contêiner: reiniciar automaticamente, a menos que seja interrompido manualmente
    environment:
      - TZ=Europe/London  # Definir o fuso horário do contêiner para Europe/London
      - KERBEROSIO_SETTINGS_PORT=80  # Definir a porta de escuta do serviço Kerberos para 80
      - KERBEROSIO_SETTINGS_RECORDSTREAM="/config/recordings"  # Definir a localização do stream de gravação para /config/recordings
![](https://manage.icewhale.io/api/static/docs/1727083935343_image.png)
5. Clique em Enviar
6. Preencha 'tag': latset e 'title': kerberos
![](https://manage.icewhale.io/api/static/docs/1727083963029_image.png)
7. Envie e aguarde a conclusão da instalação
### Passo 3: Configurar Kerberos.io
1. Abra http://<seu IP do ZimaBoard>:8080 em seu navegador para entrar na interface de configurações do Kerberos.io.
![](https://manage.icewhale.io/api/static/docs/1727084036342_image.png)
2. Crie uma conta e senha e faça login no Kerberos.io.
![](https://manage.icewhale.io/api/static/docs/1727084057212_image.png)
3. Clique em 'Configuração'
![](https://manage.icewhale.io/api/static/docs/1727084077776_image.png)
4. Selecione ‘Câmera IP’
![](https://manage.icewhale.io/api/static/docs/1727084096179_image.png)
5. Digite a URL RTSP obtida, por exemplo: rtsp://admin:Hjj12345@10.0.171.52/stream1.
![](https://manage.icewhale.io/api/static/docs/1727084126856_image.png)
6. Configure a resolução e a taxa de quadros, por exemplo: 720x480.
7. Após a configuração ser concluída, você pode visualizar as imagens e vídeos capturados na interface do Kerberos
![](https://manage.icewhale.io/api/static/docs/1727084148176_image.png)
![](https://manage.icewhale.io/api/static/docs/1727084153287_image.png)
8. Você também pode ver o status de monitoramento em tempo real na interface principal
![](https://manage.icewhale.io/api/static/docs/1727084172190_image.png)
9. Este sistema é adequado para usuários que precisam monitorar uma área específica em tempo real, especialmente em cenários de casa e pequenos escritórios. Embora o sistema atualmente suporte apenas a configuração de uma única câmera, sua fácil instalação, desempenho eficiente e boa compatibilidade com marcas fazem dele uma solução de monitoramento confiável.