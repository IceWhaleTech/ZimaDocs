---
title: Guia de Implementação do Pi-hole no ZimaOS
description: 
type: Docs
author: icewhale123456
tip: O formato fixo da barra superior não deve ser removido, description é a descrição do artigo, se não preenchido, será extraído do primeiro parágrafo do conteúdo
---
### Introdução
O Pi-hole é uma poderosa ferramenta de bloqueio de anúncios a nível de rede que pode ajudar a bloquear anúncios e proteger a sua privacidade. Neste tutorial, iremos apresentar como instalar e configurar o Pi-hole no ZimaOS para tornar a sua rede doméstica mais limpa e eficiente.

---
### Pré-requisitos
- Um dispositivo com ZimaOS instalado.
- A capacidade de aceder à interface web do ZimaOS ou via SSH.
- Privilégios de administrador e configuração de rede já definidos.

---
### Passo 1: Instalar o Docker Pi-hole
1. Entre na interface web do ZimaOS.
2. Aceda à **App Store** e pesquise por Pi-hole para instalar.
![](https://manage.icewhale.io/api/static/docs/1734678654109_image.png)

3. Clique em Instalar.
4. Antes de iniciar sessão no Pi-hole, clique na interface de configurações da aplicação e encontre a palavra-passe (a palavra-passe de exemplo é your_password).

| ![](https://manage.icewhale.io/api/static/docs/1734678694677_image.png) | ![](https://manage.icewhale.io/api/static/docs/1734678703824_image.png) |
| - | - |


5. Clique na aplicação e insira a palavra-passe para aceder à interface.
![](https://manage.icewhale.io/api/static/docs/1734678749177_image.png)

![](https://manage.icewhale.io/api/static/docs/1734678754268_image.png)


---
### Passo 2: Configurar a rede
**2.1 Alterar as definições de DNS do router**
Benefício: Alterar as definições de DNS do router permitirá que toda a rede de dispositivos use automaticamente o Pi-hole para bloqueio de anúncios, sem necessidade de configurar manualmente cada dispositivo.
1. Inicie sessão na interface de gestão do router.
2. Defina o endereço do servidor DNS do router para o endereço IP local do dispositivo ZimaOS onde o Pi-hole está a correr.
- Exemplo: Se o IP local do ZimaOS for `10.0.201.187`, defina o servidor DNS para `10.0.201.187`.
**2.2 Configurar manualmente o DNS nos dispositivos clientes**
- Se não quiser modificar as definições para toda a rede, pode configurar um endereço DNS personalizado num único dispositivo apontando para o IP do ZimaOS.
**Configurar DNS num dispositivo Windows**
1. Na janela de configurações, encontre "Mais opções de adaptador" e clique em Editar.
![](https://manage.icewhale.io/api/static/docs/1734679538566_image.png)

2. Encontre e clique duas vezes em "Protocolo Internet Versão 4 (TCP/IPv4)".
3. Preencha o seguinte:
- Servidor DNS preferencial: 10.0.201.187 (IP do seu servidor Pi-hole).
- Servidor DNS alternativo: 1.1.1.1 (DNS da Cloudflare) ou 8.8.8.8 (DNS do Google, como backup).
![](https://manage.icewhale.io/api/static/docs/1734679557759_image.png)

4. Clique em "OK" para guardar as definições.
Dica: Se o bloqueio de anúncios não funcionar, tente limpar o cache DNS:
No prompt de comando, execute:
```
ipconfig /flushdns
```

Isto forçará o dispositivo a usar as novas definições DNS.

---
### Passo 3: Otimizar configurações (opcional)
**3.1 Ativar mais listas de filtros de anúncios**
1. No painel do Pi-hole, navegue até Adlists.
![](https://manage.icewhale.io/api/static/docs/1734679945680_image.png)

2. Adicione mais listas de bloqueio de anúncios, por exemplo:
- [StevenBlack/hosts](https://github.com/StevenBlack/hosts)
- [oisd.nl](https://oisd.nl/)
Cole a URL copiada em Endereço, preencha o comentário e clique em adicionar.
![](https://manage.icewhale.io/api/static/docs/1734680053090_image.png)

**3.2 Configurar cache DNS e reforço da privacidade**
1. Em Definições > DNS, selecione um servidor DNS a montante confiável (como Cloudflare ou Google).
![](https://manage.icewhale.io/api/static/docs/1734680136362_image.png)

2. Ative o DNSSEC para maior segurança.
![](https://manage.icewhale.io/api/static/docs/1734680141523_image.png)


---
Passo 4: Testar o bloqueio de anúncios
1. Visite um site com muitos anúncios (como um portal de notícias).
2. Verifique se os anúncios foram bloqueados com sucesso.
3. Consulte o número de pedidos bloqueados no painel do Pi-hole.
![](https://manage.icewhale.io/api/static/docs/1734680159332_image.png)


---
### Conclusão
Agora que implementou com sucesso o Pi-hole no ZimaOS, desfrute de uma experiência na Internet sem anúncios! O Pi-hole não só melhora a velocidade da sua rede, como também protege a sua privacidade. Sinta-se à vontade para ajustar as definições ou adicionar mais funcionalidades conforme as suas necessidades. Se tiver alguma dúvida, participe na nossa comunidade!
### Perguntas Frequentes
1. Clique em Instalar para evitar conflito de portas. Basta alterar a porta.
![](https://manage.icewhale.io/api/static/docs/1734680182479_image.png)

A porta 10443 é normalmente usada para a interface HTTPS de gestão do Pi-hole. Alterar a porta não afetará a função principal de DNS do Pi-hole.
Não é recomendado alterar a porta 67 pois isso afetará o funcionamento normal do serviço DHCP e impedirá que os clientes obtenham um endereço IP automaticamente. Se houver conflito de portas, a melhor solução é desativar o serviço em conflito.
- Primeiro, encontre o processo que está a usar a porta 67 na linha de comando e utilize o comando
```
sudo ss -ulnp | grep :67
```

![](https://manage.icewhale.io/api/static/docs/1734680210741_image.png)

- Use o seguinte comando para encerrar o processo em conflito e a instalação será bem-sucedida
```
sudo kill -9 <PID>
```
