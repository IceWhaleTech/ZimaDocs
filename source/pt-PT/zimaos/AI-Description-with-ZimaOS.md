---

title: Implementação da Descrição de Tela Frigate+Olama com ZimaOS  
description:  
type: Docs  
author: admin  
tip: A formatação fixa da barra superior não deve ser excluída. A descrição é para descrever o artigo, se não for preenchida, será capturada a primeira parte do conteúdo.  
---  
## Background  
Na vida diária, as câmeras de vigilância tornaram-se ferramentas importantes tanto para residências quanto para empresas. No entanto, os sistemas de monitoramento tradicionais geralmente apenas gravam imagens ou simplesmente detectam movimento, e não conseguem fornecer explicações detalhadas sobre o conteúdo das imagens. Isso frequentemente exige que os usuários julguem por si mesmos o que aconteceu ao visualizar vídeos ou receber notificações.  
O Frigate é uma ferramenta eficiente de análise de vídeo open-source que pode identificar alvos como pessoas, carros e animais nas imagens e disparar eventos relacionados. Porém, sua função permanece principalmente no nível de "ver" e não pode diretamente lhe dizer "o que aconteceu".  
Para compensar essa deficiência, introduzimos o Ollama, uma ferramenta que pode gerar descrições em linguagem natural. Através dela, podemos converter o conteúdo visual detectado pelo Frigate em explicações textuais claras, como 'alguém entrou no pátio' ou 'um carro estacionou na porta'.  
Este tutorial o guiará sobre como usar o ZimaOS para combinar o Frigate e o Ollama para criar um sistema prático de descrição visual. Seja para melhorar a conveniência da segurança doméstica ou adicionar recursos inteligentes a pequenos projetos, essa solução pode atender às suas necessidades.  
## Preparação de hardware  
1. **Câmeras que suportam o protocolo RTSP**  
Usadas para fornecer entrada de fluxo de vídeo em tempo real para o Frigate.  
2. **Placa gráfica compatível com ZimaBoard2**  
Usada para acelerar a inferência de modelos de IA localmente (como placas gráficas da série NVIDIA). Placa gráfica de referência: https://www.zimaspace.com/docs/zh/zimacube/GPU-Expansion  
3. **Um disco rígido com capacidade de 6GB ou mais**  
Usado para armazenar arquivos de modelos de IA, instantâneos de vídeo e dados do sistema.  
## Instalação de software  
A instalação do software deste sistema pode ser dividida nas seguintes três etapas:  
1. Migração de dados  
2. Instalar o Ollama e configurar o modelo LLaVA  
3. Instalar e configurar o Frigate  
### Etapa 1: Migração de Dados  
Devido ao grande tamanho dos modelos de IA, recomenda-se instalar um disco rígido independente com antecedência e migrar os diretórios de dados do Docker e dados pessoais para o disco rígido, para evitar problemas como falha ou falta de espaço de armazenamento durante o processo de download, garantindo uma operação estável do sistema e espaço de armazenamento suficiente.  
> Por favor, faça backup dos arquivos importantes para evitar perda de dados. Pode haver riscos ao migrar dados!!!  
#### Conecte a placa gráfica ao disco rígido, inicie o dispositivo e entre no sistema operacional.  
![](https://manage.icewhale.io/api/static/docs/1745202079506_image.png)  
#### Migração de Dados  
1. Clique no ícone **"Configurações"** no menu superior esquerdo  
2. Clique em **"Apps"**  
3. Encontre o item relevante de aplicativo ou gerenciamento de dados, clique no botão **"Migração"** e aguarde a migração ser concluída.  
![](https://manage.icewhale.io/api/static/docs/1745202168758_image.png)  
### Etapa 1: Instalar o Ollama e configurar o modelo LLaVA  
Para mais detalhes sobre modelos suportados, visite [a documentação oficial do Frigate](https://docs.frigate.video/configuration/genai/) e [o site oficial do Ollama](https://ollama.com/).  
#### Instalar o Ollama  
1. Abra a **Loja de Apps** e digite **"Ollama"** na barra de pesquisa  
2. Escolha a versão apropriada para instalação com base no tipo de sua placa gráfica (como uma versão que suporta NVIDIA)  
![](https://manage.icewhale.io/api/static/docs/1745202389678_image.png)  
#### Configurar o modelo LLaVA  
1. Abra o **terminal do Olama** e clique no ícone de menu no canto superior direito  
2. Selecione **"Configurações"** para acessar a interface de configurações  
![](https://manage.icewhale.io/api/static/docs/1745203245150_image.png)  
3. Clique no ícone **"Terminal"** para acessar a interface de controle de linha de comando  
![](https://manage.icewhale.io/api/static/docs/1745203281707_image.png)  
4. Digite o seguinte comando na linha de comando para baixar o modelo e instalar o llava-llama3  
```language  
ollama pull llava-llama3  
```  
![](https://manage.icewhale.io/api/static/docs/1745203346880_image.png)  
5. A aparição da palavra **"Sucesso"** indica que o download do modelo foi concluído e o Ollama está pronto  
![](https://manage.icewhale.io/api/static/docs/1745203380348_image.png)  
6. Após iniciar o Olama, **registre o endereço IP e o número da porta do IP em execução** (como `http://10.0.1.3:11434`), será usado posteriormente ao configurar o Frigate.  
![](https://manage.icewhale.io/api/static/docs/1745203428242_image.png)  
### Etapa 3: Instalar e configurar o Frigate  
#### Instalar o Frigate  
1. Clique no botão **"mais"** no canto superior direito da interface principal.  
2. Selecione 'Instalar um aplicativo personalizado'.  
![](https://manage.icewhale.io/api/static/docs/1745203508399_image.png)  
3. Clique no botão 'Importar'.  
4. Importe o arquivo de configuração frigate.yaml abaixo.  
> name: pure_grace  
services:  
  frigate:  
    cpu_shares: 90  
    command: []  
    container_name: frigate  
    deploy:  
      resources:  
        limits:  
          memory: 7766M  
    devices:  
      - /dev/bus/usb:/dev/bus/usb  
      - /dev/apex_0:/dev/apex_0  
      - /dev/video11:/dev/video11  
      - /dev/dri/renderD128:/dev/dri/renderD128  
    image: ghcr.io/blakeblackshear/frigate:0.15.0  
    labels:  
      icon: https://icon.casaos.io/main/all/frigate.png  
    ports:  
      - target: 8971  
        published: "8971"  
        protocol: tcp  
      - target: 8554  
        published: "8554"  
        protocol: tcp  
      - target: 8555  
        published: "8555"  
        protocol: tcp  
      - target: 8555  
        published: "8555"  
        protocol: udp  
    privileged: true  
    restart: unless-stopped  
    shm_size: "67108864"  
    volumes:  
      - type: bind  
        source: /etc/localtime  
        target: /etc/localtime  
      - type: bind  
        source: /DATA/AppData/frigate/config  
        target: /config  
      - type: bind  
        source: /DATA/Media  
        target: /media/frigate  
    cap_add: []  
    environment: []  
    network_mode: bridge  
x-casaos:  
  author: self  
  category: self  
  hostname: ""  
  icon: https://icon.casaos.io/main/all/frigate.png  
  index: /  
  is_uncontrolled: false  
  port_map: "8971"  
  scheme: https  
  store_app_id: pure_grace  
  tips: null  
  title:  
    custom: ""  
    en_us: frigate  

5. Clique em "Enviar".  
![](https://manage.icewhale.io/api/static/docs/1745203744283_image.png)  
6. Clique em "Instalar" e aguarde a instalação ser concluída.  
![](https://manage.icewhale.io/api/static/docs/1745203764783_image.png)  
#### Obter a conta e a senha do Frigate  
Após iniciar o Frigate, verifique e registre a conta e a senha padrão no log.  
![](https://manage.icewhale.io/api/static/docs/1745203839741_image.png)  
1. Abra o **terminal do Frigate** e clique no ícone de **menu** no canto superior direito.  
2. Selecione **"Configurações"** para acessar a interface de configurações.  
![](https://manage.icewhale.io/api/static/docs/1745203882560_image.png)  
3. Clique no ícone **"Terminal"** dentro do aplicativo.  
4. Vá para a guia **"Logs"** para visualizar os logs de inicialização.  
5. Clique no botão **"Tela Cheia"** no canto superior direito para facilitar a busca pela conta e senha padrão.  
![](https://manage.icewhale.io/api/static/docs/1745203925603_image.png)  
6. As informações da conta e senha serão exibidas aqui, registre-as.  
![](https://manage.icewhale.io/api/static/docs/1745203946052_image.png)  
#### Configurar o Frigate  
1. Entre