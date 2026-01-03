---
title: Guia Completo para Instalar o Paperless-ngx no ZimaOS
description: 
type: Docs
author: icewhale123456
tip: A formatação da barra superior deve ser mantida, e a descrição deve ser preenchida, caso contrário, será extraído o primeiro parágrafo do conteúdo.
---
> _Publicado originalmente no Fórum da Comunidade IceWhale por_ _**Muditha Liyanagama**_ _:_ _[https://community.zimaspace.com/](https://community.zimaspace.com/t/a-comprehensive-guide-to-installing-paperless-ngx-on-zimaos/7474)_

Olá, entusiastas do ZimaOS e Zimaboard!

Percebi que, embora a comunidade ZimaOS e a equipe Ice-whale ofereçam excelente suporte, às vezes é difícil encontrar guias de instalação claros, organizados e detalhados. Para aqueles de nós que preferem uma abordagem simples, passo a passo, especialmente ao enfrentar aqueles pequenos e frustrantes obstáculos técnicos, este guia é feito para você. Este artigo é o segundo de uma série que estou desenvolvendo sobre o ZimaOS e o Zimaboard, e espero sinceramente que seja útil.

Este guia foca na instalação do Paperless-ngx com suas funções essenciais para uso doméstico, acessíveis dentro da sua rede local ou uma rede Tailscale. Caso seu objetivo seja expor sua instância do Paperless-ngx para a internet pública, algumas das configurações abaixo podem precisar de ajustes.

Realizei esta instalação em um Zimaboard 2 com as seguintes especificações:

*   **CPU:** Intel(R) N150 4 Cores 2.90 GHz 4 Threads
    
*   **RAM:** 16 GB 6400 MHz LPDDR5
    
*   **GPU:** Intel Corporation Alder Lake-N \[Intel Graphics\]
    
*   **Sistema Operacional:** ZimaOS v1.5.3 Plus
    

Vamos instalar o Paperless-ngx!

### **Passo 1: Acessando a Loja de Aplicativos**

1.  Faça login na interface web do ZimaOS.
    
2.  Vá até a **Loja de Aplicativos**.
    

### **Passo 2: Encontrando e Selecionando Paperless-ngx**

1.  Na barra de pesquisa da Loja de Aplicativos, digite Paperless-ngx.
    
2.  Selecione **Paperless-ngx (BigBearCasaOS)** nos resultados de pesquisa.
    

### **Passo 3: Instalação Personalizada**

1.  Localize o botão **Instalar**. Em vez de clicar diretamente nele, clique na pequena seta para baixo ao lado.
    
2.  Selecione **Instalação Personalizada**.
    

### **Passo 4: Configuração Crucial Antes da Instalação**

Esta é a fase crítica onde configuramos os parâmetros essenciais para o funcionamento correto do Paperless-ngx.

Na seção **Volumes**, faça as seguintes alterações. (Se preferir as configurações padrão, pode deixá-las inalteradas. Veja a imagem abaixo como referência.)

*   **Definir caminho personalizado para o Volume** **/usr/src/paperless/consume**: É altamente recomendado definir um caminho específico e fácil para sua pasta de consumo. Isso facilita a gestão de seus documentos.
    

![Configuration Path](https://manage.icewhale.io/api/static/docs/1767274710302_copyImage.png)

Adicione as seguintes variáveis ambientais. (Veja a imagem abaixo como referência.)

*   **PAPERLESS\_ADMIN\_USER**: Altere o valor padrão para o nome de usuário administrativo preferido.
    
*   **PAPERLESS\_ADMIN\_PASSWORD**: Altere o valor padrão para a senha administrativa preferida.
    
*   _Esses parâmetros criarão sua conta administrativa durante a instalação._
    
*   **PAPERLESS\_CONSUMER\_DELETE\_ORIGINALS: true**:
    
*   _Este parâmetro ativa a exclusão automática de arquivos da pasta_ _/consume_ _após serem processados e absorvidos pelo Paperless-ngx._
    
*   **PAPERLESS\_CONSUMER\_RECURSIVE: true**:
    
*   _Este parâmetro habilita o consumo recursivo de arquivos dentro da pasta_ _/consume_ _, ou seja, ele processará subpastas e seus conteúdos._
    
*   **PAPERLESS\_OCR\_CLEAN: clean-final**:
    
*   **PAPERLESS\_OCR\_LANGUAGES: <código de 3 letras para os idiomas de suporte OCR separados por espaços (por exemplo, eng sin)>**:
    
*   _Essas configurações ativam as funções OCR básicas e necessárias para o Paperless-ngx. No entanto, a configuração_ _clean-final_ _e os idiomas OCR desejados precisam ser habilitados e configurados dentro da interface gráfica do Paperless-ngx (GUI) após a instalação._
    
*   **PAPERLESS\_CSRF\_TRUSTED\_ORIGINS:** _**http://seu\_servidor**_ _**endereço:porta**_
    
*   **PAPERLESS\_URL:** _**http://seu\_servidor**_ _**endereço:porta**_
    
*   _Essas configurações são críticas. Não inclua uma barra final (__**/**__) ao final das URLs. Definir incorretamente esses parâmetros resultará em uma mensagem de erro "Forbidden (403) CSRF verification failed. Request aborted" ao tentar fazer login._
    
*   **Nota:** Substitua pelo endereço IP ou nome do host do seu Zimaboard (por exemplo, 192.168.1.100). Substitua pela porta que o Paperless-ngx usará (geralmente 8000 por padrão, mas você pode verificar isso na configuração da Loja de Aplicativos do ZimaOS).
    

![Confirm path](https://manage.icewhale.io/api/static/docs/1767274711098_copyImage.png)

Mantenha todas as outras configurações inalteradas.

**Verifique:** Antes de prosseguir, revise meticulosamente todas as suas configurações. Quando tiver certeza de que todos os parâmetros estão corretos, clique no botão **Instalar**.

### **Configuração Pós-Instalação e Operação**

Após a instalação, faça login na interface do Paperless-ngx e configure as configurações OCR da seguinte maneira:

1.  Vá até **Configuração do Aplicativo** —> **Configurações OCR**.
    
2.  Defina **Clean** como clean-final.
    
3.  Ative **Deskew**.
    
4.  Defina **Idioma** como os códigos de 3 letras para os idiomas de suporte OCR desejados, separados por um sinal de mais (+) (por exemplo, eng+sin).
    
5.  Clique em **Salvar**.
    

![OCR Settings](https://manage.icewhale.io/api/static/docs/1767274711641_copyImage.png)

Em seguida, volte para o **Painel de Aplicações** no ZimaOS e reinicie o **Paperless-ngx**.

![restart](https://manage.icewhale.io/api/static/docs/1767274712173_copyImage.png)

**Nota Operacional Importante:** Sempre que adicionar um grande lote de documentos à sua pasta /consume para processamento, é aconselhável reiniciar o Paperless-ngx. Se não fizer isso, podem ocorrer problemas de permissão de arquivos, dificultando o processamento dos documentos. Como alternativa, você pode fazer upload de documentos diretamente através da interface gráfica do Paperless-ngx, o que geralmente não requer um reinício.
