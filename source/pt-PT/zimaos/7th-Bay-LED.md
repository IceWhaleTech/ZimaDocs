---
title: 7ª Baía LED
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser removido, a descrição é para descrever o artigo, se não preenchido, o conteúdo será cortado da primeira parte do texto.
---
# Introdução
## Visão Geral do Projeto
A ZimaCube 7ª Baía foi projetada não apenas para fornecer capacidades essenciais de expansão SSD para dispositivos de ponta, mas também para trazer uma maior sensação de vitalidade à computação em casa através de iluminação personalizável. A integração de iluminação personalizável abre um mundo de possibilidades: use a faixa de luz da 7ª Baía para indicar o status do sistema, mostrar velocidades de transferência de dados, indicar o progresso de downloads, sinalizar atividade local de IA ou até mesmo sincronizar com a música de sua área de trabalho.

Para realizar essas ideias, a ZimaCube 7ª Baía é construída com o microcontrolador ESP32 da Espressif Systems. As capacidades integradas de Bluetooth e WiFi permitem o controle independente da iluminação através do ZimaOS ou de outros dispositivos IoT. O ESP32 é dedicado exclusivamente ao controle das luzes e está isolado de todas as funções de rede e armazenamento da ZimaCube. Além disso, o ESP32 funciona como um pequeno servidor web, oferecendo atualizações de firmware OTA (Over The Air) para personalizar os efeitos de luz.
### Personalizando a Iluminação da ZimaCube 7ª Baía
Existem duas maneiras de personalizar os efeitos de iluminação da ZimaCube 7ª Baía:
1. Usando o protocolo de firmware oficial para controle DIY das luzes, escrevendo scripts no ZimaOS.
2. Desenvolvendo seu próprio firmware e protocolo para o ESP32, para controle total da faixa de luz da 7ª Baía.
### Vantagens e Desvantagens de Cada Método:
**Método 1**:
- Vantagens: Simples, implementação rápida, utiliza funcionalidades existentes, baixo risco.
- Desvantagens: Funcionalidade e desempenho limitados.

**Método 2**:
- Vantagens: Controle total, alta flexibilidade, operação independente, desempenho otimizado.
- Desvantagens: Alta dificuldade de desenvolvimento, longo ciclo de desenvolvimento.
# Como Escrever um Script para Controle de Luz
### Introdução ao Protocolo de Firmware da 7ª Baía
**Conexão WiFi**: O ESP32 cria uma rede WiFi à qual o ZimaOS se conecta para controle remoto e atualizações OTA.

**Controle JSON**: Controle os efeitos de iluminação usando comandos JSON, proporcionando flexibilidade e fácil personalização.

**Atualizações OTA**: Suporta atualizações OTA, permitindo atualizações de firmware sem acesso físico ao dispositivo.

**Vários Efeitos de Iluminação**: Suporta múltiplos efeitos de iluminação predefinidos, como efeito respiratório, modo de luz constante, modo personalizado, etc.

### Métodos de Controle de Luz
**Conectando à Wi-Fi do ZimaCube**
1. Conectar à rede Wi-Fi:
- - Nome do Wi-Fi: "ZimaCube"
- - Senha do Wi-Fi: "homecloud"

**Usando o Seletor de Cores**
Para facilitar a seleção de cores, use a seguinte ferramenta online de seletor de cores: [Seletor de Cores Online](https://www.w3schools.com/colors/colors_picker.asp).

**Passos**:
1. Abra o Seletor de Cores Online.
2. Use o mouse para selecionar a cor desejada.
3. Os valores HSV (Matiz, Saturação, Valor) correspondentes serão exibidos na interface do seletor de cores.
4. Registre esses valores HSV e converta-os em um intervalo adequado para dados JSON:
- - **Matiz (H)**: h = (valor da matiz / 360) * 255
- - **Saturação (S)**: s = (valor da saturação / 100) * 255
- - **Valor (V)**: v = (Valor / 100) * 255

**Exemplo**:
Selecionar laranja no seletor de cores fornece os seguintes valores HSV:
- **Matiz (H)**: 30
- **Saturação (S)**: 100
- **Valor (V)**: 100

Valores convertidos:
- **Matiz (H)**: h = (30 / 360) * 255 ≈ 21
- **Saturação (S)**: s = 255
- **Valor (V)**: v = 255

Aplique esses valores aos dados JSON para controle de luz.

**Modos de Controle**
**Modo 1: Modo Respiratório**
No modo respiratório, a faixa de luz exibe um efeito de gradiente de cor única. Ajuste a velocidade e os parâmetros de cor para controlar o efeito.
- **Velocidade**: Faixa 0 ~ 10
- **Parâmetros de Cor**:
- - **Matiz (H)**: Faixa 0 ~ 255
- - **Saturação (S)**: Faixa 0 ~ 255
- - **Valor (V)**: Faixa 0 ~ 255

**Exemplo de Dados JSON**:
```language
{
  "id": 1,  // ID para modo respiratório
  "speed": 4,  // Velocidade da transição de cor, faixa 0-10
  "data": [
    {"h": 21, "s": 255, "v": 255}
  ]
}
```
*** Enviando Dados para o ESP32:***

1. O ESP32 cria uma rede WiFi padrão à qual o ZimaOS se conecta. Verifique a conexão com:
```language
ping 172.16.1.1
```
2. Envie uma solicitação HTTP POST para `172.16.1.1` com os dados JSON:
```language
curl -X POST -H "Content-Type: application/json" -d @seuarquivo.json http://172.16.1.1/post
```
3. Verifique o efeito de iluminação.

**Modo 2: Modo de Luz Constante**
No modo de luz constante, a faixa de luz permanece em uma única cor.

**Parâmetros de Cor:**
- **Matiz (H)**: Faixa 0 ~ 255
- **Saturação (S)**: Faixa 0 ~ 255
- **Valor (V)**: Faixa 0 ~ 255

**Exemplo de Dados JSON**:
```language
{
  "id": 2,
  "data": [
    {"h": 21, "s": 255, "v": 255}
  ]
}
```
*** Enviando Dados para o ESP32:***

1. O ESP32 cria uma rede WiFi padrão à qual o ZimaOS se conecta. Verifique a conexão com:

```language
ping 172.16.1.1
```

2. Envie uma solicitação HTTP POST para `172.16.1.1` com os dados JSON:

```language
curl -X POST -H "Content-Type: application/json" -d @seuarquivo.json http://172.16.1.1/post
```

3. Verifique o efeito de iluminação.

**Modos 3 e 4**
- Em desenvolvimento.

**Modo 5: Modo Personalizado**
No modo personalizado, você pode controlar a cor e o brilho de cada luz individualmente.

- Parâmetros de Cor:
- - Matiz (H): Faixa 0 ~ 255
- - Saturação (S): Faixa 0 ~ 255
- - Valor (V): Faixa 0 ~ 255

**Exemplo de Dados JSON**:
```language
{
  "id": 5,  // ID para modo personalizado
  "data": [
    // Cada objeto representa as configurações de cor e brilho para uma luz
    {"h": 0, "s": 255, "v": 255},  // Luz 1 Vermelha
    {"h": 85, "s": 255, "v": 255},  // Luz 2 Verde
    {"h": 168, "s": 255, "v": 255},  // Luz 3 Azul
    {"h": 42, "s": 255, "v": 255},  // Luz 4 Amarela
    {"h": 212, "s": 255, "v": 255},  // Luz 5 Roxa
    {"h": 128, "s": 255, "v": 255},  // Luz 6 Ciano
    {"h": 21, "s": 255, "v": 255},  // Luz 7 Laranja
    {"h": 128, "s": 255, "v": 255},  // Luz 8 Ciano
    {"h": 212, "s": 255, "v": 255},  // Luz 9 Roxa
    {"h": 42, "s": 255, "v": 255},  // Luz 10 Amarela
    {"h": 168, "s": 255, "v": 255},  // Luz 11 Azul
    {"h": 85, "s": 255, "v": 255},   // Luz 12 Verde
    {"h": 0, "s": 255, "v": 255}   // Luz 13 Vermelha
  ]
}
```
*** Enviando Dados para o ESP32:***

1. O ESP32 cria uma rede WiFi padrão à qual o ZimaOS se conecta. Verifique a conexão com:

```language
ping 172.16.1.1
```

2. Envie uma solicitação HTTP POST para `172.16.1.1` com os dados JSON:

```language
curl -X POST -H "Content-Type: application/json" -d @seuarquivo.json http://172.16.1.1/post
```

3. Verifique o efeito de iluminação.
# Como Desenvolver Seu Próprio Firmware da 7ª Baía
### Introdução
Usando um computador com Windows, mostramos como desenvolver seu próprio firmware para o ESP32 e efeitos de luz, bem como como carregar seu novo firmware.

### Requisitos de Hardware
- ZimaCube's 7ª Baía
- Cabo de dados Type-C
- Computador com Windows

### Informações de Hardware
- Número de LEDs: 13
- GPIO 2: Conecta à linha de dados da faixa de LED WS2812B
- 5V e GND: Conecta à alimentação e ao terra da placa de desenvolvimento ESP32

### Detalhes do ESP32:
- Diagrama de Blocos do ESP32: [Baixar](https://github.com/IceWhaleTech/7th-bay/blob/main/Hardware/ESP32-C3Dimensions.png)
- Esquema do ESP32: [Baixar](https://github.com/IceWhaleTech/7th-bay/blob/main/Hardware/ESP32_C3Schematic.png)
- Arquivos do Altium Designer para o ESP32: [Baixar](https://github.com/IceWhaleTech/7th-bay/blob/main/Hardware/Super%20Mini-ESP32C3-Form%20Factor.PcbDoc)
### Guia de Uso
**Requisitos do Sistema**
- Sistema Operacional: Windows 10
- Ferramentas Necessárias: Arduino IDE

**Passos de Instalação**
1. Instale o Arduino IDE: [Baixar](https://www.arduino.cc/en/software)

2. Instale a Placa ESP32
![](https://manage.icewhale.io/api/static/docs/1727168990232_image.png)
3. Baixe e instale as bibliotecas:
- Adafruit_NeoPixel
- ArduinoJson
- Metro
- Coloque-as na pasta de bibliotecas da sua instalação do Arduino IDE.

**Configuração de Desenvolvimento**
1. Abra o Arduino IDE.
2. Selecione a placa: Ferramentas -> Placa -> ESP32 -> Módulo de Desenvolvimento ESP32C3
3. Selecione a porta correta: Ferramentas -> Porta
4. Compile e carregue o código para o ESP32: Clique no botão Carregar
5. Resultado do carregamento bem-sucedido:
![](https://manage.icewhale.io/api/static/docs/1727169097528_image.png)

**Tutorial de Atualização OTA**
1. Conecte-se ao WiFi
- - Conecte seu computador à rede WiFi:
- - - Nome: "ZimaCube"
- - - Senha: "homecloud"
2. Inserir a URL
- - Abra um navegador e vá para `172.16.1.1`
3. Carregar o Firmware
- - Obtenha o firmware do seguinte endereço: [Download do Firmware](https://github.com/IceWhaleTech/7th-bay/tree/main/Firmware)