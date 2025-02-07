---
title: Como faço para fazer backup de arquivos do meu Mac para ZimaCube usando o Time Machine?
description: 
type: Docs
author: admin
tip: O formato fixo da barra superior não deve ser removido, a descrição é a descrição do artigo; se não preenchida, será extraído o primeiro parágrafo do conteúdo
---
Quer manter seus arquivos do Mac seguros? Com o novo recurso Time Machine do ZimaOS, você pode facilmente fazer backup dos seus arquivos para o ZimaCube. Este poderoso recurso não só é rápido e fácil, mas também garante que seus dados importantes estejam sempre protegidos. Aqui estão os passos fáceis de seguir para configurar rapidamente um backup.

Antes de começar, certifique-se de ter baixado e instalado a versão mais recente do ZimaOS: https://github.com/IceWhaleTech/ZimaOS/releases

## Passo 1: Configurar uma pasta compartilhada do ZimaOS
1. Abra o seu painel do ZimaOS (por exemplo, acesse via `http://<seu_nas_ip>`).
2. Vá para a página **Arquivos**.
3. Encontre a pasta que você deseja usar como destino de backup, como **Time Machine**.
4. Clique com o botão direito na pasta e selecione **Compartilhar via Samba**.
![](https://manage.icewhale.io/api/static/docs/1738916403063_image.png)
5. Na janela pop-up:
- Confirme se o nome da pasta e o local de armazenamento estão corretos.
- Marque a opção Configurar para **Time Machine**.
- Lembre-se: seu usuário padrão será usado para autenticação do Time Machine.
- (Opcional) Clique em **+ Adicionar** para atribuir permissões de acesso a outros usuários.
![](https://manage.icewhale.io/api/static/docs/1738916455895_image.png)
6. Clique em Criar para completar as configurações da pasta compartilhada.
  ![](https://manage.icewhale.io/api/static/docs/1738916492447_image.png)
## Passo 2: Configurar o Time Machine no seu Mac
1. Abra **Preferências do Sistema** ou **Configurações do Sistema** (macOS Ventura e posteriores).
2. Clique em **Time Machine**.
![](https://manage.icewhale.io/api/static/docs/1738916795038_image.png)
3. Selecione **Adicionar Disco de Backup...**.
![](https://manage.icewhale.io/api/static/docs/1738916825362_image.png)
4. Na lista de discos, encontre e selecione a pasta compartilhada previamente configurada no ZimaOS (por exemplo: **Time Machine**). Clique em **Configurar Disco**.
![](https://manage.icewhale.io/api/static/docs/1738917029430_image.png)
5. Insira seu nome de usuário e senha conforme solicitado para completar a configuração do disco.
![](https://manage.icewhale.io/api/static/docs/1738917049915_image.png)
## Passo 3: Iniciar backup
1. Certifique-se de que seu Mac e ZimaCube estão na mesma LAN.
2. O Time Machine identificará automaticamente a pasta de destino e começará a fazer o backup.
![](https://manage.icewhale.io/api/static/docs/1738917181052_image.png)
## Precauções
**Espaço de armazenamento**: Certifique-se de que o ZimaCube tenha espaço livre suficiente para atender aos requisitos de backup.
**Conexão de rede**: Se o backup falhar, verifique a conexão de rede e confirme que o serviço SMB do ZimaCube está habilitado.
**Problema de entrada de senha de permissão**: Ao digitar a senha, o macOS pode não conseguir entrar. Se você encontrar esse problema, por favor clique primeiro no espaço em branco e, em seguida, clique na caixa de entrada de senha novamente e tente novamente.

## Resumo
Seguindo os passos acima, você fez backup com sucesso dos arquivos do seu Mac para o ZimaCube, adicionando uma barreira sólida à segurança dos seus dados. Se você tiver alguma dúvida durante a operação, sinta-se à vontade para entrar em contato com nossa equipe de suporte <feedback@zimaos.com>. Deixe o ZimaOS fornecer proteção mais eficiente para o seu trabalho e vida!

## Leitura adicional:
**Como restaurar arquivos usando o Time Machine**: Guia do usuário do macOS: [Restaurar itens copiados pelo Time Machine no Mac](https://support.apple.com/zh-cn/guide/mac-help/mh11422/11.0/mac/11.0)