---
title: Instalar e utilizar o Adminer no ZimaOS
seo_title: "Adminer no ZimaOS: instalação e acesso a bases de dados SQLite"
description: "Instale o Adminer a partir da App Store do ZimaOS, monte um diretório de base de dados e inspecione bases de dados SQLite, como a biblioteca do Emby."
type: Docs
author: Lauren Pan
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

O Adminer é um gestor de bases de dados leve e baseado no navegador, compatível com SQLite, MySQL, PostgreSQL e outros sistemas de bases de dados. Este guia mostra como instalar o Adminer a partir da App Store do ZimaOS e dar-lhe acesso a um diretório de bases de dados SQLite, utilizando o Emby como exemplo.

> **Importante:** O Adminer fornece acesso direto aos dados das aplicações. Crie uma cópia de segurança da base de dados antes de efetuar alterações, evite expor o Adminer diretamente à Internet e utilize consultas só de leitura até compreender a estrutura da base de dados da aplicação.

## Antes de começar

- O ZimaOS está instalado e em funcionamento.
- Consegue aceder à interface Web e à App Store do ZimaOS.
- Se pretender inspecionar uma base de dados SQLite existente, sabe qual é o diretório do anfitrião que contém os respetivos ficheiros `.db`.
- Tem uma cópia de segurança atual da base de dados antes de realizar operações de escrita.

Pode instalar o Adminer sem ter uma base de dados existente e configurar a montagem do diretório mais tarde.

## Instalar o Adminer

1. Abra a **App Store** do ZimaOS.
2. Pesquise por **Adminer**.
3. Abra a página do Adminer e clique em **Install**.
4. Aguarde até a instalação terminar e confirme que o Adminer aparece no painel do ZimaOS.

![Página do Adminer na App Store do ZimaOS](/images/guides/adminer-app-store.webp)

## Dar ao Adminer acesso a um diretório de base de dados

1. No painel do ZimaOS, abra o menu no canto superior direito do cartão da aplicação Adminer.
2. Selecione **Manage Adminer** para abrir a página de configuração do contentor.
3. Expanda **Volumes**, localize **Mount** e adicione uma montagem.
4. Defina o tipo de montagem como **Bind mount**.
5. Em **Host**, selecione o diretório que contém os ficheiros da base de dados. Numa instalação predefinida do Emby, o diretório é normalmente `/DATA/AppData/emby/config/data`.
6. Em **Container**, introduza `/config/data`.
7. Clique em **Save** e reinicie o Adminer se o ZimaOS não o reiniciar automaticamente.

![Montagem do diretório da base de dados do Emby nas definições do contentor Adminer](/images/guides/adminer-volume-mount.webp)

Para outra aplicação, substitua o caminho do anfitrião do Emby pelo diretório da base de dados dessa aplicação. Monte apenas o diretório de que o Adminer necessita, em vez de conceder acesso a um caminho de armazenamento mais abrangente.

## Abrir uma base de dados SQLite

1. Abra o Adminer a partir do painel do ZimaOS.
2. Selecione **SQLite** como sistema de base de dados, caso esteja disponível na imagem do Adminer instalada.
3. Navegue até ao diretório montado e selecione o ficheiro da base de dados, como `/config/data/library.db`.
4. Introduza as credenciais exigidas pela imagem do Adminer e inicie sessão.

As imagens e versões do Adminer podem tratar a autenticação SQLite de formas diferentes. Se a imagem instalada rejeitar uma ligação SQLite sem palavra-passe, não enfraqueça as credenciais de outras aplicações nem exponha o Adminer publicamente. Utilize uma imagem ou configuração de autenticação do Adminer compatível com a sua base de dados e reveja o respetivo estado de atualização e segurança antes de a utilizar a longo prazo.

## Exemplo: inspecionar a base de dados da biblioteca do Emby

Com o diretório de dados predefinido do Emby montado em `/config/data`, poderá encontrar estes ficheiros:

- `library.db` contém os metadados da biblioteca multimédia.
- `users.db` contém os dados das contas de utilizador.

Utilize a página **SQL Command** para executar verificações só de leitura. Para verificar a integridade da base de dados SQLite, execute:

```sql
PRAGMA integrity_check;
```

Um resultado `ok` indica que o SQLite não encontrou erros de integridade. Para inspecionar uma pequena amostra dos nomes e caminhos armazenados dos conteúdos do Emby, execute:

```sql
SELECT Name, Path FROM MediaItems LIMIT 20;
```

Os esquemas das bases de dados podem mudar entre versões da aplicação. Se faltar uma tabela ou coluna, confirme o esquema antes de alterar a consulta. Evite `UPDATE`, `DELETE` ou alterações ao esquema, exceto se tiver uma cópia de segurança testada e compreender as consequências.

## Ligar a outros tipos de bases de dados

O MySQL e o PostgreSQL são serviços de bases de dados em rede, e não ficheiros autónomos. Para estabelecer uma ligação, o Adminer necessita de acesso de rede ao anfitrião da base de dados, da porta correta e de credenciais válidas. Uma montagem de volume, por si só, não é suficiente.

Se a base de dados estiver noutro contentor, confirme que ambos os contentores conseguem comunicar através de uma rede Docker adequada. Não exponha publicamente a porta da base de dados apenas para permitir a ligação do Adminer.

## Sugestões de segurança e manutenção

- Limite o Adminer à sua rede local de confiança ou a outro método de acesso protegido.
- Crie cópias de segurança antes de editar bases de dados e pare a aplicação de origem antes de substituir ficheiros de base de dados.
- Reveja a data de lançamento e o estado de segurança antes de utilizar uma imagem do Adminer mantida pela comunidade.
- Pare ou remova o Adminer quando já não necessitar de acesso direto às bases de dados.

## Referências

- [Site oficial do Adminer](https://www.adminer.org/)
- [Referência PRAGMA do SQLite](https://www.sqlite.org/pragma.html)

## Precisa de ajuda?

Se tiver problemas ao instalar ou utilizar o Adminer no ZimaOS, junte-se à comunidade ZimaSpace no Discord. A equipa da IceWhale e os membros da comunidade podem ajudar a resolver problemas de configuração.

[Junte-se ao Discord da ZimaSpace](https://discord.gg/f9nzbmpMtU)
