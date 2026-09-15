---
title: Instalar e utilizar o Adminer no ZimaOS
seo_title: "Adminer no ZimaOS: instalação e acesso a bases de dados SQLite"
description: "Instale o Adminer a partir da App Store do ZimaOS, monte um diretório de base de dados e inspecione bases de dados SQLite, como a biblioteca do Emby."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

O Adminer é um gestor de bases de dados leve e baseado no navegador que suporta SQLite, MySQL, PostgreSQL e outros sistemas de bases de dados. Consulte a [página do Adminer na App Store](https://www.zimaspace.com/zimaos/app-store/app/org.icewhale.adminer) para obter os detalhes mais recentes da aplicação. Este guia mostra como instalar o Adminer a partir da App Store do ZimaOS e dar-lhe acesso a um diretório de base de dados SQLite, usando o Emby como exemplo.

> **Importante:** O Adminer proporciona acesso direto aos dados das aplicações. Faça uma cópia de segurança da base de dados antes de fazer alterações, evite expor o Adminer diretamente à internet pública e use consultas só de leitura até compreender a estrutura da base de dados da aplicação.

## Antes de começar

- O ZimaOS está instalado e em funcionamento.
- Pode aceder à interface web do ZimaOS e à App Store.
- Se quiser inspecionar uma base de dados SQLite existente, sabe que diretório do anfitrião contém os seus ficheiros `.db`.
- Tem uma cópia de segurança atual da base de dados antes de realizar operações de escrita.

Também pode instalar o Adminer sem uma base de dados existente e configurar a montagem do diretório mais tarde.

## Instalar o Adminer

1. Abra a **App Store** do ZimaOS.
2. Procure por **Adminer**.
3. Abra a listagem do Adminer e clique em **Install**.
4. Aguarde que a instalação termine e confirme que o Adminer aparece no painel do ZimaOS.

![Página da aplicação Adminer na App Store do ZimaOS na categoria Developer](/images/app-store/adminer-app-store.webp)

## Dar acesso ao Adminer a um diretório de base de dados

1. No painel do ZimaOS, abra o menu no canto superior direito do mosaico da aplicação Adminer.
2. Selecione **Manage Adminer** para abrir a página de configuração do contentor.

![Página Edit Adminer com configuração de serviços, redes e a porta 8080](/images/app-store/adminer-config-page.webp)

3. Expanda **Volumes**, encontre **Mount** e adicione uma montagem.
4. Defina o tipo de montagem como **Bind mount**.
5. Em **Host**, selecione o diretório que contém os ficheiros da base de dados. Para uma instalação predefinida do Emby, o diretório é normalmente `/DATA/AppData/emby/config/data`.
6. Em **Container**, introduza `/config/data`.
7. Clique em **Save** e reinicie o Adminer se o ZimaOS não o reiniciar automaticamente.

![Volumes do Adminer com a pasta de dados do Emby montada no contentor](/images/app-store/adminer-volumes-bind.webp)

Para outra aplicação, substitua o caminho do anfitrião do Emby pelo diretório de base de dados dessa aplicação. Monte apenas o diretório de que o Adminer precisa, em vez de conceder acesso a um caminho de armazenamento mais amplo.

## Abrir uma base de dados SQLite

1. Abra o Adminer a partir do painel do ZimaOS.
2. Selecione **SQLite** como sistema de base de dados se estiver disponível na imagem do Adminer instalada.
3. Navegue até ao diretório montado e selecione o ficheiro de base de dados, como `/config/data/library.db`.
4. Introduza as credenciais exigidas pela imagem do Adminer e inicie sessão.

As imagens e versões do Adminer podem diferir na forma como tratam a autenticação SQLite. O Adminer v4+ exige uma palavra-passe para ligações SQLite — a imagem oficial não o deixa iniciar sessão com palavra-passe em branco. Se a imagem instalada rejeitar uma ligação SQLite com palavra-passe em branco, use um plugin de palavra-passe do painel ou uma imagem da comunidade como `finwo/adminer` (início de sessão com `nopassword`). Não enfraqueça credenciais de aplicações não relacionadas nem exponha o Adminer publicamente. Reveja o estado de atualização e segurança da imagem antes de uso prolongado.

## Exemplo: inspecionar a base de dados da biblioteca do Emby

Com o diretório de dados predefinido do Emby montado em `/config/data`, poderá encontrar estes ficheiros:

- `library.db` contém os metadados da biblioteca multimédia.
- `users.db` contém os dados das contas de utilizador.

Use a página **SQL Command** para executar verificações só de leitura. Para verificar a integridade da base de dados SQLite, execute:

```sql
PRAGMA integrity_check;
```

Um resultado `ok` indica que o SQLite não encontrou erros de integridade. Para inspecionar uma pequena amostra de nomes de meios e caminhos guardados do Emby, execute:

```sql
SELECT Name, Path FROM MediaItems LIMIT 20;
```

Os esquemas de base de dados podem mudar entre versões da aplicação. Se faltar uma tabela ou coluna, confirme o esquema antes de alterar a consulta. Evite `UPDATE`, `DELETE` ou alterações de esquema, a menos que tenha uma cópia de segurança testada e compreenda as consequências.

## Ligar a outros tipos de bases de dados

O MySQL e o PostgreSQL são serviços de base de dados em rede, não ficheiros independentes. Para ligar a eles, o Adminer precisa de acesso de rede ao anfitrião da base de dados, da porta correta e de credenciais válidas. Uma montagem de volume por si só não é suficiente.

Se a base de dados corre noutro contentor, confirme que ambos os contentores podem comunicar através de uma rede Docker adequada. Não exponha a porta da base de dados publicamente só para o Adminer ligar.

## Dicas de segurança e manutenção

- Mantenha o Adminer limitado à sua rede local de confiança ou a outro método de acesso seguro.
- Faça cópias de segurança das bases de dados antes de as editar e pare a aplicação de origem antes de substituir ficheiros de base de dados.
- Reveja a data de lançamento e o estado de segurança antes de usar uma imagem do Adminer mantida pela comunidade.
- Pare ou remova o Adminer quando já não precisar de acesso direto à base de dados.

## Referência

- [Site oficial do Adminer](https://www.adminer.org/ "Site oficial do Adminer")
- [Referência PRAGMA do SQLite](https://www.sqlite.org/pragma.html "Referência oficial dos comandos PRAGMA do SQLite")

## Precisa de ajuda?

Se tiver problemas ao instalar ou usar o Adminer no ZimaOS, junte-se à [comunidade Discord do ZimaSpace](https://discord.gg/f9nzbmpMtU "Junte-se à comunidade Discord do ZimaSpace para suporte do ZimaOS"). A nossa equipa e os membros da comunidade terão todo o gosto em ajudar.
