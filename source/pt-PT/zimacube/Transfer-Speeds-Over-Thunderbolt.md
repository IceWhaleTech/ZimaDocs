---
title: Velocidades de Transferência do ZimaCube Sobre Conexões Thunderbolt Explicadas
description: 
type: "Docs"
tip: O formato fixo da barra superior não deve ser removido, a descrição é para o artigo, se não preenchida será capturada a primeira parte do texto.
---
Este guia foca nas velocidades de transferência de arquivo mais rápidas alcançadas através de uma conexão Thunderbolt no ZimaCube, fornecendo aos usuários dados específicos de testes de desempenho e dicas de otimização.
Certifique-se de ter lido o [Como conectar o ZimaCube via Cabo Thunderbolt](https://www.zimaspace.com/docs/zimaos/Thunderbolt-PC-Direct).

## Transferências de Alta Velocidade via Ponte de Rede Thunderbolt

### 1. Transferências via Ponte de Rede Samba
Certifique-se de ter consultado o arquivo de ajuda - [Samba com Multi-Usuário](https://www.zimaspace.com/docs/zimaos/Using-Samba-as-a-Member).
No sistema ZimaOS, você pode transferir via pasta compartilhada Samba. Nesta configuração, a Ponte de Rede Thunderbolt pode aumentar significativamente as velocidades de transferência.
**Dados de desempenho: Usando a ponte de rede Samba, leva apenas 5 segundos para fazer upload de um arquivo de 13GB, e a velocidade de transferência atinge <u>2GB/s</u>, o que supera em muito a velocidade dos métodos tradicionais de transferência de rede.**
![](https://manage.icewhale.io/api/static/docs/1729592792338_image.png)
- Esta velocidade de transferência extrema tem vantagens óbvias em cenários de transferência de grandes arquivos, especialmente para usuários profissionais que precisam processar grandes volumes de dados rapidamente.

### 2. Transferência de Arquivos pela Interface do Usuário do ZimaOS

Além da ponte de rede Samba, os usuários também podem transferir arquivos diretamente através da interface do usuário do ZimaOS. Com a última otimização, a velocidade de upload de arquivos via Thunderbolt pode atingir <u>600MB/s</u>.
![](https://manage.icewhale.io/api/static/docs/1729593331553_image.png)
Embora seja um pouco mais lenta do que o método Samba, ainda estamos otimizando este método de transferência e melhoraremos ainda mais a eficiência da transferência em futuras versões! Nota: A versão atual é v1.2.5.

## Se suas velocidades de transferência não forem tão rápidas quanto esperado
Se você estiver usando a conexão Thunderbolt para transferências de arquivos que não atendem às velocidades acima mencionadas, recomendamos consultar o documento de ajuda FAQ no final deste artigo - [Como conectar seu ZimaCube via cabo Thunderbolt](https://www.zimaspace.com/docs/zimaos/Thunderbolt-PC-Direct). Seguindo os passos do guia de solução de problemas, você pode otimizar ainda mais o desempenho da transferência e garantir a melhor experiência possível de velocidade de transferência de arquivos.