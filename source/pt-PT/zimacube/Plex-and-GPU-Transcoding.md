---
title: Como ativar a transcodificação de hardware do Plex no ZimaCube?
description:
type: “Docs”
tip: O formato fixo da barra superior não deve ser removido, a descrição é a descrição do artigo, e se não estiver preenchida, será capturada o primeiro parágrafo do conteúdo.
---
# Plex e Transcodificação por GPU
O Plex Media Server é uma plataforma versátil e popular para gerenciar e transmitir sua biblioteca de mídia. Uma maneira de melhorar significativamente seu desempenho e capacidades de transcodificação é aproveitando a potência de uma GPU Intel / NVIDIA. Neste guia, iremos orientá-lo pelos passos para configurar o Docker Plex com aceleração de GPU Intel / NVIDIA, permitindo uma transcodificação de hardware eficiente e uma melhor transmissão de mídia.
## Por que usar Streaming Acelerado por Hardware?
Para reproduzir seus vídeos de forma suave e em uma grande variedade de dispositivos, o Plex Media Server frequentemente precisa converter o vídeo para uma qualidade diferente ou um formato compatível. A conversão do vídeo (transcodificação) ocorre automaticamente, em tempo real, enquanto você o está reproduzindo. Usando a transcodificação baseada em software e gratuita no Plex Media Server, computadores domésticos podem converter e transmitir vídeos em tempo real para qualquer aplicativo Plex. Alguns computadores com processadores mais poderosos podem até transmitir múltiplos vídeos ao mesmo tempo, especialmente em qualidades mais baixas.

Para converter vídeos mais rapidamente e com menos poder de processamento, você pode ativar o Streaming Acelerado por Hardware no Plex Media Server. Quando a aceleração de hardware está ativada, o Plex Media Server usará o suporte de hardware dedicado para decodificadores e codificadores de vídeo em seu computador/dispositivo para converter vídeos, permitindo que você transmita vídeos em HD ou 4K de forma mais suave e transmita para mais dispositivos ao mesmo tempo. E se você usar o mesmo computador tanto para trabalho quanto para lazer, a aceleração de hardware usa menos poder de processamento durante a transmissão de vídeo, devolvendo a velocidade de que você precisa para suas outras atividades.
## O Streaming Acelerado por Hardware tem várias vantagens:
- Frequentemente, mais vídeos podem ser transmitidos ao mesmo tempo.
- Os vídeos podem começar a ser transmitidos mais rapidamente e bufferar menos frequentemente.
- Vídeos de alta qualidade, especialmente 4K e HEVC, podem ser transmitidos de maneira mais suave.
- Ao transferir tarefas de transcodificação intensivas em CPU para hardware dedicado, a transmissão de vídeo tem menos impacto na performance do seu computador.
- Usar o hardware dedicado para decodificação/ codificação de vídeo é mais eficiente em termos energéticos, consumindo assim menos energia.

## Como ativar o streaming acelerado por hardware?
>A transcodificação acelerada por hardware é um recurso premium e requer uma assinatura ativa do Plex Pass.

### 1. Usando a GPU Intel embutida
O ZimaCube usa processadores Intel N100/1235U, ambos incorporando as mais recentes GPUs integradas da Intel, que possuem boas capacidades de transcodificação de hardware.
  - Pesquise pelo Plex na loja de aplicativos e instale-o. （**Se já estiver instalado, atualize para a versão mais recente. Uma nova instalação é recomendada.**）
  - Abra o aplicativo da Web do Plex.
  - Faça login com uma conta que tenha um Plex Pass.
  - Navegue até Configurações > Servidor > Transcodificador para acessar as configurações do servidor.
  - Ative Exibir Avançado no canto superior direito para expor as configurações avançadas.
  - Ative Usar aceleração de hardware quando disponível.
  - Escolha Dispositivo de transcodificação por hardware: Alder Lake....
![](https://manage.icewhale.io/api/static/docs/1727266956851_image.png)
  - Clique em Salvar Alterações na parte inferior.
  - Após salvar, selecione um filme para reproduzir e selecione Converter Automaticamente nas configurações de Reprodução.
  - Normalmente, ao usar a GPU embutida para transcodificação, ela adicionará entre 4-8W de consumo de energia. E pouquíssima potência da CPU. Isso é muito empolgante.
![](https://manage.icewhale.io/api/static/docs/1727266979170_image.png)

| **Antes**        | **Depois**         |
|-------------------|-------------------|
| ![Imagem Antes](https://manage.icewhale.io/api/static/docs/1727266997124_image.png) | ![Imagem Depois](https://manage.icewhale.io/api/static/docs/1727267013579_image.png) |

### 2. Usando a GPU Nvidia
Se você tem um ZimaCube Pro com uma GPU Nvidia embutida, ou você instalou uma GPU Nvidia por conta própria, você pode seguir os passos abaixo para configurá-la:
  - Uma nova instalação é recomendada.
  - Para uma lista de GPUs Nvidia atualmente suportadas pelo ZimaOS, veja a seção GPUs NVIDIA Atuais em https://us.download.nvidia.com/XFree86/Linux-x86_64/555.58.02/README/supportedchips.html
  - Encontre o aplicativo Plex no painel do ZimaOS, clique nos três pontos no canto superior direito e clique em Configurações no próximo menu.
  - Adicione NVIDIA_VISIBLE_DEVICES all às Variáveis de ambiente nas Configurações e salve.
![](https://manage.icewhale.io/api/static/docs/1727267065118_image.png)
  - Navegue até Configurações > Servidor > Transcodificador para acessar as configurações do servidor.
  - Ative Exibir Avançado no canto superior direito para expor as configurações avançadas.
  - Ative Usar aceleração de hardware quando disponível.
  - Escolha Dispositivo de transcodificação por hardware: Desconhecido (NVIDIA)
   ![](https://manage.icewhale.io/api/static/docs/1727267082104_image.png)
  - Clique em Salvar Alterações na parte inferior.
  - Após salvar, selecione um filme para reproduzir e selecione Converter Automaticamente nas configurações de Reprodução.
  - Normalmente, ao usar a GPU Nvidia para transcodificação, isso aumentará o consumo de energia em 10-25W. Ao mesmo tempo, não consome poder de computação da CPU. Isso é muito empolgante.
  - Embora o consumo de energia seja maior do que a GPU embutida, devido ao excelente desempenho da GPU Nvidia, ela pode lidar com transcodificação em alta resolução mais rapidamente e pode gerenciar várias transmissões de vídeo ao mesmo tempo.
![](https://manage.icewhale.io/api/static/docs/1727267123811_image.png)


| **Antes**        | **Depois**         |
|-------------------|-------------------|
| ![Imagem Antes](https://manage.icewhale.io/api/static/docs/1727267241180_image.png)| ![Imagem Depois](https://manage.icewhale.io/api/static/docs/1727267268401_image.png)|

## Conclusão
Ambas as soluções podem efetivamente suportar o Streaming Acelerado por Hardware do Plex. A escolha entre GPUs NVIDIA e Intel depende de suas necessidades específicas e orçamento. Se você precisa lidar com vídeos em alta resolução ou múltiplas transmissões, uma GPU NVIDIA pode ser a melhor escolha. Se você está mais preocupado com custos e consumo de energia, uma GPU Intel pode ser mais adequada.