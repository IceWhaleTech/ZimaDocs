Aqui está a tradução do texto para o português (Portugal), mantendo o formato original:

---
**Título:** Expansão de GPU  
**Descrição:**  
**Tipo:** “Docs”  
**Dica:** O formato fixo da barra superior não deve ser excluído. A descrição é um resumo do artigo; se não for preenchida, será usada a primeira parte do conteúdo.

---

# Introdução  
O ZimaCube é um dispositivo de computação que pode atender às suas necessidades profissionais de trabalho. Através do seu design modular, permite aos utilizadores expandir o hardware de acordo com os requisitos pessoais, incluindo a instalação de uma Unidade de Processamento Gráfico (GPU). Uma GPU é crucial para utilizadores que precisam de realizar tarefas de processamento gráfico extensivo e computação paralela.

# Guia de Instalação e Exemplos de Aplicação  
## 1. Etapas de Instalação da GPU  
### Passo 1: Remover o escudo IO.  
- Antes de instalar a GPU, remova o escudo IO do slot PCIe.

| ![](https://manage.icewhale.io/api/static/docs/1728614816722_image.png)|![](https://manage.icewhale.io/api/static/docs/1728614828318_image.png)|
|:---:|:---:|
### Passo 2: Instalar a GPU na orientação correta.  
- Certifique-se de que a GPU está corretamente alinhada, correspondendo os contatos dourados ao slot PCIe.  
- Insira suavemente a GPU no slot até que esteja completamente fixada.

| ![](https://manage.icewhale.io/api/static/docs/1728614909590_image.png)|![](https://manage.icewhale.io/api/static/docs/1728614920088_image.png)|
|:---:|:---:|
#### Dicas:  
- Ao instalar ou remover a GPU, pressione o clip do slot PCIe. Isso garante que a GPU está bem fixada ou liberada.
![](https://manage.icewhale.io/api/static/docs/1728614946501_copyImage.png)
## 2. Exemplos de Aplicações: Transcodificação de GPU e Aplicações de IA  
### Transcodificação por Hardware:  

Utilizar a GPU para transcodificação por hardware pode melhorar muito o desempenho no processamento de mídia. Por exemplo, o Plex Media Server pode usar a GPU no ZimaOS para permitir uma transcodificação eficiente por hardware (nota: faça o download da versão profissional da GPU do Plex).  
![](https://manage.icewhale.io/api/static/docs/1728615170049_image.png)  
- Selecione o dispositivo de transcodificação por hardware: Desconhecido (NVIDIA)  
- Clique em Salvar para iniciar a transcodificação

| ![](https://manage.icewhale.io/api/static/docs/1728615235531_image.png)|![](https://manage.icewhale.io/api/static/docs/1728615252888_image.png)|
|:---:|:---:|

| Antes: | Depois: |
| - | - |
| ![](https://manage.icewhale.io/api/static/docs/1728615297358_image.png)|![](https://manage.icewhale.io/api/static/docs/1728615306943_image.png)|

Para uma lista de GPUs Nvidia atualmente suportadas pelo ZimaOS, consulte a seção de GPUs NVIDIA atuais: [https://us.download.nvidia.com/XFree86/Linux-x86_64/555.58.02/README/supportedchips.html](https://us.download.nvidia.com/XFree86/Linux-x86_64/555.58.02/README/supportedchips.html)  
### Exemplos de Aplicações de IA:  
No ZimaOS, pode usar o Open WebUI para experimentar clientes avançados de conversação com IA.  
Suporta os modelos de linguagem mais recentes, incluindo, mas não se limitando a, Llama3 e Gemma, e é compatível com a API do OpenAI. Além disso, o Open WebUI chamará a GPU integrada NVIDIA 2000 Ada do ZimaCube Pro Creator para reduzir a latência de processamento.  
O mais importante, todos os seus dados (incluindo detalhes de login) são armazenados localmente no seu dispositivo. O Open WebUI garante confidencialidade estrita sob sua autorização, sem solicitações externas, protegendo sua privacidade e aumentando sua segurança.

![](https://manage.icewhale.io/api/static/docs/1728615600750_094e8811-903b-4bb0-8053-548119f56272.gif)  
- A versão integra o Stable Diffusion.

![](https://manage.icewhale.io/api/static/docs/1728615658463_2.gif)

- Existem outras aplicações de IA na nossa AppStore, como o Tasking AI e o Anything AI.

![](https://manage.icewhale.io/api/static/docs/1728615689023_image.png)  
Tasking AI é uma ferramenta inteligente de gestão de tarefas que utiliza tecnologia de IA para ajudar os utilizadores a organizar e gerir tarefas diárias de forma mais eficiente. Pode priorizar, lembrar e automatizar tarefas de forma inteligente, melhorando a eficiência no trabalho e na vida.  

Anything AI é uma aplicação multifuncional de IA que oferece uma variedade de ferramentas e serviços práticos de IA, incluindo geração de texto, tradução de idiomas e reconhecimento de fala. O seu objetivo é simplificar o trabalho e a vida diária dos utilizadores através da poderosa tecnologia de IA.  

Com estas aplicações de IA, pode aproveitar ao máximo as vantagens da inteligência artificial para melhorar a sua eficiência no trabalho e a qualidade de vida!  
## 3. Precauções  
- Desligue: Certifique-se de que o ZimaCube está completamente desligado antes de realizar qualquer operação e, ao manusear o dispositivo, deve-se descarregar a eletricidade estática para evitar danos.  
- Manuseamento Suave: Evite aplicar força excessiva ao instalar ou remover a GPU para evitar danos.  
- Limpeza: Certifique-se de que o slot e o dispositivo estão livres de poeira ou objetos estranhos durante a instalação ou remoção, para evitar mau contato.  
- Instalação de Drivers: Instale os drivers corretos para garantir o desempenho e a estabilidade ideais.

## 4. Conclusão  
Este guia deve ajudá-lo a instalar com sucesso uma GPU no ZimaCube e compreender a sua importância em várias aplicações. Encorajamos você a tentar a instalação e explorar mais funções da GPU para melhorar a sua eficiência no trabalho e qualidade de vida.  

Aguardamos com interesse saber mais sobre as suas experiências!

# Lista de Compatibilidade  
O ZimaCube suporta **placas gráficas de perfil baixo**, com uma altura típica de cerca de 64,41 mm (2,536 polegadas). O slot PCIe fornece até **75W** de potência, por isso, é recomendável escolher placas gráficas dentro deste tamanho e limite de potência para garantir compatibilidade com o design compacto e as limitações de energia do ZimaCube.  
**Observe que outras placas gráficas podem exigir alimentação externa para funcionamento adequado.**

{% note warn Note: %}  
Compilámos esta lista com base nos drivers suportados pelo ZimaOS, sendo que os modelos "verificados" estão assinalados. Se tiver utilizado com sucesso o **Assist** em outro modelo de placa gráfica, por favor, ajude-nos a atualizar esta lista utilizando a funcionalidade 'Melhorar' no canto superior direito. Agradecemos pela sua contribuição.  
{% endnote %}

| **Categoria**                          | **Modelos**                                                       |
| :-------------------------------- | ------------------------------------------------------------ |
| GeForce RTX 40 Série (Notebooks) | GeForce RTX 4090 Laptop GPU, GeForce RTX 4080 Laptop GPU, GeForce RTX 4070 Laptop GPU, GeForce RTX 4060 Laptop GPU, GeForce RTX 4050 Laptop GPU |
| GeForce RTX 40 Série             | NVIDIA GeForce RTX 4090 D, NVIDIA GeForce RTX 4090, NVIDIA GeForce RTX 4080, NVIDIA GeForce RTX 4070 Ti, NVIDIA GeForce RTX 4070, NVIDIA GeForce RTX 4060 Ti(verificado), NVIDIA GeForce RTX 4060 |
| GeForce RTX 30 Série (Notebooks) | GeForce RTX 3080 Ti Laptop GPU, GeForce RTX 3080 Laptop GPU, GeForce RTX 3070 Ti Laptop GPU, GeForce RTX 3070 Laptop GPU, GeForce RTX 3060 Laptop GPU, GeForce RTX 3050 Ti Laptop GPU, GeForce RTX 3050 Laptop GPU |
| GeForce RTX 30 Série             | GeForce RTX 3090 Ti, GeForce RTX 3090, GeForce RTX 3080 Ti, GeForce RTX 3080, GeForce RTX 3070 Ti, GeForce RTX 3070, GeForce RTX 3060 Ti(verificado), GeForce RTX 3060, GeForce RTX 3050 |
| GeForce RTX 20 Série (Notebooks) | GeForce RTX 2080 SUPER, GeForce RTX 2080, GeForce RTX 2070 SUPER, GeForce RTX 2070, GeForce RTX 2060, GeForce RTX 2050 |
| GeForce RTX 20 Série             | GeForce RTX 2080 Ti, GeForce RTX 2080 SUPER, GeForce RTX 2080, GeForce RTX 2070 SUPER, GeForce RTX 2070, GeForce RTX 2060 SUPER, GeForce RTX 2060 |
| GeForce MX500 Série (Notebooks)  | GeForce MX570, GeForce MX550                                