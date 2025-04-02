---
title: Título do Artigo
description: 
type: Docs
author: admin
tip: O formato fixo da barra superior não deve ser removido; a descrição é uma descrição do artigo, e se não for preenchida, irá extrair o texto do primeiro parágrafo.
---
## Propósito
Este tutorial irá guiá-lo no uso da aplicação `Files` para baixar e substituir o arquivo `local-storage.db`, permitindo que você migre ou restaure os dados de configuração RAID após reinstalar o sistema.
## Passos de Operação
1. **Baixar o Arquivo local-storage.db**
  a. Acesse `Files` no ZimaCube.
  b. No `Files`, defina o caminho de acesso para `/ZimaOS-HD/.casaos/db`.
  c. Encontre o arquivo `local-storage.db` e baixe-o para o seu dispositivo local.
2. **Reinstalar o Sistema**
  a. Desligue o ZimaCube com segurança, garantindo que o dispositivo esteja completamente desligado.
  b. Substitua o drive SSD do sistema conforme necessário e reinstale o ZimaOS.
  c. Inicie o ZimaCube, garantindo que o ZimaOS esteja instalado com sucesso e funcionando normalmente.
3. **Fazer Upload e Substituir o Arquivo local-storage.db**
  a. Abra `Files` e navegue até o diretório `/ZimaOS-HD/.casaos/db` novamente.
  b. Encontre o arquivo `local-storage.db` no diretório atual e renomeie-o para `local-storage.db.bak` para manter um backup.
  c. Faça o upload do arquivo `local-storage.db` baixado no Passo 1 para o diretório atual.
4. **Reiniciar o ZimaCube:**
  Após substituir o arquivo, reinicie o dispositivo ZimaCube para garantir que todas as alterações tenham efeito.
## Notas
- Certifique-se de que todos os dados importantes estejam salvos antes de prosseguir para evitar a perda de dados devido a erros.
- Se você encontrar problemas com a instalação ou configuração, verifique sua conexão de rede ou entre em contato com o suporte técnico.