Claro! Aqui está a tradução do texto para o português de Portugal, mantendo o formato original:

---

title: Migrar do CasaOS para o ZimaOS  
description: Guia passo a passo sobre como migrar do CasaOS para o ZimaOS. Aprenda a transferir ficheiros, mover aplicações Docker com o CTOZ e configurar o seu novo servidor doméstico de forma simples.  
type: Docs  
author: Lauren  
tip: O formato fixo da barra superior não deve ser eliminado, e a descrição deve ser preenchida com o texto inicial do artigo, caso não seja fornecido nenhum conteúdo.
permalink: /pt-PT/zimaos/casaos-to-zimaos-migration.html
---  

Este guia foca-se em **migrar do CasaOS para o ZimaOS** em apenas dois passos simples. Se tiver curiosidade sobre uma comparação completa entre os sistemas, consulte este blog – [link].

Pronto para fazer o upgrade do **CasaOS** para o mais poderoso **ZimaOS**? Não se preocupe—o processo de migração é mais fácil do que imagina! Para o ajudar a planear de forma clara, dividimos a jornada em **três etapas**, e pode escolher as que melhor se adequam às suas necessidades:

- 📁 **Transferência de Ficheiros**: Tal como copiar ficheiros no seu computador, pode usar o compartilhamento LAN para mover toda a sua biblioteca do CasaOS para o ZimaOS—filmes, backups de fotos, documentos de trabalho, tudo. Este é o passo mais básico. (Claro, se só quiser migrar as aplicações, pode saltar esta parte.)
- 🚀 **Migração de Aplicações**: Tem aplicações como o Jellyfin ou Immich totalmente configuradas? Com uma ferramenta de código aberto incrível chamada CTOZ, pode migrar as aplicações com os seus dados e configurações quase “com um clique”—não será necessário reconfigurar desde o início.
- ⚙️ **Configurações Avançadas**: Para definições de sistema profundamente personalizadas ou contentores especiais, ainda não existe uma automação completa. Mas vamos orientá-lo nos caminhos manuais de backup e restauração. Para a maioria dos utilizadores, no entanto, uma configuração limpa no novo sistema pode ser a escolha mais suave.

Já tem a visão geral? Perfeito—vamos detalhar cada passo e guiá-lo através de uma migração sem complicações.

---

## Passo 1: Migração de Dados de Ficheiros (via Compartilhamento LAN)

A forma mais direta e eficiente de mover os seus ficheiros pessoais e dados de aplicação do **CasaOS para o ZimaOS** é através do **compartilhamento LAN (protocolo SMB)**. Este método não requer ferramentas adicionais, é simples de operar e garante altas velocidades de transferência—perfeito para **migrar grandes ficheiros como filmes, fotos, documentos**, e até diretórios **AppData**.

**Passos rápidos de migração:**

**1\. Ativar o compartilhamento no CasaOS**  
Abra o gestor de ficheiros do CasaOS, selecione o diretório que deseja migrar (como a unidade principal de armazenamento de dados ou a pasta AppData), configure-o como partilhado e confirme que o compartilhamento está ativado.

![Interface do gestor de ficheiros do CasaOS](https://manage.icewhale.io/api/static/docs/1758012883305_copyImage.png)

**2\. Conectar o diretório partilhado do CasaOS no gestor de ficheiros do ZimaOS**  
Certifique-se de que ambos os dispositivos estão na mesma rede local. No **gestor de ficheiros do ZimaOS**, adicione um novo armazenamento de rede, insira o **endereço IP do CasaOS** juntamente com as suas credenciais de conta e conecte-se à pasta partilhada.

![Mapear o compartilhamento do CasaOS no ZimaOS](https://manage.icewhale.io/api/static/docs/1758013661424_copyImage.png)

**3\. Migre ou faça backup para o ZimaOS com um clique**  
No **ZimaOS Files**, use a função **Migrar** ou a funcionalidade integrada de **Backup** para transferir ou fazer backup das pastas partilhadas do CasaOS diretamente para o ZimaOS.

<table>
  <tr>
    <td valign="middle" style="width:50%;">
<img src="https://manage.icewhale.io/api/static/docs/1758013956988_Clip_20250916_171221.png" alt="migrar no ZimaOS" />
    </td>
    <td valign="middle" style="width:50%; ">
      <ul>
<li>Clique com o botão direito na <strong>pasta partilhada CasaOS</strong></li>
<li>Clique no botão <strong>Migrar</strong></li>
      </ul>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td valign="middle" style="width:50%;">
<img src="https://manage.icewhale.io/api/static/docs/1758014844720_Clip_20250916_172717.png" alt="migrar no ZimaOS"/>
    </td>
    <td valign="middle" style="width:50%; ">
      <ul>
<li>Selecione um <strong>diretório de destino</strong></li>
<li>Escolha o tratamento de conflitos e se deseja manter os dados originais (recomendamos as configurações padrão)</li>
<li>Por fim, clique em <strong>Iniciar</strong></li>
      </ul>
    </td>
  </tr>
</table>
A tarefa de migração começará! Quando concluído, o **ZimaOS** também gerará um **relatório detalhado de migração de dados**, garantindo que os seus ficheiros foram transferidos e verificados de forma fiável.

![relatório de migração de dados do ZimaOS](https://manage.icewhale.io/api/static/docs/1758016357148_Clip_20250916_175232.png)

💡 Ainda melhor—este método não se limita ao **CasaOS**!  
Os **seus ficheiros partilhados via SMB** em **TrueNAS, Unraid, Synology DSM**, ou até **pastas macOS** podem ser reconhecidos e montados pelo **ZimaOS**. Isto significa que, quer esteja a realizar **backups entre sistemas** de dados importantes ou a consolidar ficheiros de vários dispositivos, o ZimaOS torna o processo fiável e direto.

## Passo 2: Migrar as Aplicações CasaOS para o ZimaOS (ferramenta CTOZ de migração com um clique)

Depois de transferir os seus ficheiros, o próximo passo é reinstalar e configurar os seus contentores de aplicações no **ZimaOS**. Para simplificar este processo, a comunidade desenvolveu a ferramenta de código aberto **CTOZ (CasaOS para ZimaOS)**, que automatiza a migração de dados e configurações das aplicações com um clique.

A ferramenta **CTOZ** cobre tanto **configuração de aplicações como migração de dados**—incluindo tudo o que está na pasta **AppData** do CasaOS e os respetivos **arquivos Docker Compose (YAML)**. Após a migração, o CTOZ reinstala automaticamente as aplicações no ZimaOS utilizando esses arquivos YAML. Isto significa que a maioria das aplicações em contentores instaladas via CasaOS, juntamente com os seus dados, pode ser transferida e manter-se no mesmo estado de funcionamento.

É importante notar: devido às diferenças na arquitetura dos sistemas **CasaOS** e **ZimaOS**, o CTOZ foca-se apenas na **migração de contentores e seus dados**, não nas configurações de sistema (que abordaremos na próxima seção).

**Passos básicos para usar a ferramenta CTOZ:**

1. **Baixe e instale o CTOZ** – Importe qualquer aplicação Docker CLI ou Docker Compose para o ZimaOS em apenas três passos.

<table>
  <tr>
    <td valign="middle" style="width:50%;">
<img src="https://manage.icewhale.io/api/static/docs/1758015524613_Clip_20250916_173835.png" alt="Instalar uma aplicação personalizada no ZimaOS" />
    </td>
    <td valign="middle" style="width:50%; ">
Clique em "Instalar uma aplicação personalizada" no canto superior direito do App Center.
    </td>
  </tr>
</table>

<table>
  <tr>
    <td valign="middle" style="width:50%;">
<img src="https://manage.icewhale.io/api/static/docs/1758015579134_Clip_20250916_173932.png" alt="importar o arquivo YAML do docker para instalar aplicações em containers" />
    </td>
    <td valign="middle" style="width:50%; ">Clique no botão Importar.
    </td>
  </tr>
</table>

<table>
  <tr>
    <td valign="middle" style="width:50%;">
<img src="https://manage.icewhale.io/api/static/docs/1758015602609_Clip_20250916_173956.png" alt="usar o CLI para instalar aplicações Docker no ZimaOS" />
      <br>
<img src="https://manage.icewhale.io/api/static/docs/1758015617501_Clip_20250916_174011.png" alt="configurar as definições de aplicação Docker no ZimaOS" />
    </td>
    <td valign="middle" style="width:50%; ">Introduza as informações do **Docker CLI ou Compose** a partir da página do Git