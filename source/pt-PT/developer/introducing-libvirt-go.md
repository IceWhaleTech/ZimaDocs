---
title: "Apresentamos o libvirt-go: uma API libvirt para Go sem cgo"
seo_title: "Apresentamos o libvirt-go: uma API libvirt sem cgo"
description: "Conheça o libvirt-go, uma ligação purego experimental criada a partir do trabalho de engenharia no ZVM para compilações sem cgo e acesso ao libvirt com reconhecimento de versões."
type: Docs
author: Ns2Kracy
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

# Apresentamos o libvirt-go: uma API libvirt para Go sem cgo

![Um sistema Zima a executar o ZVM ao lado de um terminal que mostra uma compilação Go com cgo desativado.](/images/guides/libvirt-go-launch-hero.webp)

Hoje, a ZimaSpace Engineering apresenta o [libvirt-go](https://github.com/Ns2Kracy/libvirt-go), uma antevisão experimental para programadores de uma ligação Go ao libvirt sem cgo, criada com purego. O projeto nasceu do nosso trabalho no ZVM e das necessidades práticas da virtualização em servidores domésticos, onde os utilizadores criam e gerem máquinas para cargas de trabalho como Home Assistant OS, Windows e pfSense. Publicamos agora a biblioteca para que os programadores de Go e libvirt possam analisar a abordagem e ajudar a testar os seus limites. O libvirt-go não está incluído em nenhuma versão lançada do ZimaOS. Continua a ser um projeto experimental independente que pretendemos utilizar de forma incremental para melhorar o backend existente do ZVM.

## O problema que enfrentei ao desenvolver o ZVM

Enquanto desenvolvia o ZVM, precisava que o código Go definisse, iniciasse, parasse, inspecionasse e eliminasse máquinas virtuais através do libvirt. Essas operações suportam o ciclo de vida normal das VMs de servidores domésticos, incluindo a ligação de armazenamento e a configuração de interfaces de rede. Queria que o backend abrangesse uma parte maior desse ciclo de vida sem dificultar a produção das compilações de lançamento.

O principal problema era a compilação cruzada com cgo. Queria que as compilações cruzadas de lançamento fossem executadas com `CGO_ENABLED=0`, o que exclui código cgo da compilação. Uma ligação baseada em cgo exige mais do que um compilador Go quando um programador compila o ZVM para outro destino. A máquina de compilação também precisa dos cabeçalhos de desenvolvimento do libvirt, de metadados pkg-config que apontem para esses cabeçalhos e de um compilador C funcional para a plataforma de destino. Cada dependência acrescenta pressupostos sobre o anfitrião e o destino a um pipeline de lançamento que deve produzir binários Go consistentes.

Também tive de considerar a versão do libvirt instalada em cada sistema de destino. Uma máquina pode expor um símbolo ou uma API que não existe numa instalação mais antiga. As verificações em tempo de compilação com um único conjunto de cabeçalhos não conseguem descrever todos os ambientes de execução que precisamos de suportar. Por isso, a API Go precisa de uma cobertura intencional, conhecimento da versão em tempo de execução e um comportamento claro quando uma função não está disponível. A propriedade dos recursos também é importante: os identificadores de VMs, ligações e callbacks precisam de regras explícitas de libertação para que as operações de ciclo de vida prolongadas não deixem escapar recursos nativos.

Essa experiência levou-me a desenvolver o libvirt-go com purego, carregando o libvirt dinamicamente e chamando-o sem cgo. Comecei-o como uma experiência independente inspirada no ZVM e pretendo adotar gradualmente componentes úteis no backend existente depois de os testar. Atualmente, nenhuma versão lançada do ZimaOS inclui esta integração.

## Porquê criar outra ligação Go?

As ligações Go existentes apoiam há vários anos os utilizadores do libvirt e os projetos de virtualização em Go. O libvirt-go segue um caminho diferente para responder a um conjunto específico de limitações que encontrei enquanto trabalhava no ZVM. As compilações das aplicações têm de ser concluídas com `CGO_ENABLED=0`, para que o ambiente de compilação não precise dos cabeçalhos do libvirt, de `pkg-config` nem de um compilador C para a plataforma de destino. Assim, é mais fácil manter a compilação cruzada num pipeline de lançamento centrado em Go.

O binário resultante continua a aceder à biblioteca partilhada nativa do libvirt no mesmo processo. Não existe um serviço auxiliar nem um protocolo separado entre a aplicação Go e o libvirt. O projeto gera uma API abrangente de baixo nível a partir dos metadados upstream e acrescenta depois wrappers escritos manualmente, atentos à propriedade, para os identificadores de recursos e valores que precisam de ciclos de vida Go mais seguros.

A deteção de símbolos em tempo de execução é outro objetivo central. Uma instalação do libvirt pode ser mais antiga do que os metadados utilizados para a geração, enquanto uma distribuição pode fazer backport de determinadas funções mais recentes. O libvirt-go verifica os símbolos que estão efetivamente presentes, o que permite aos autores de chamadas tratarem explicitamente as operações indisponíveis, em vez de partirem do princípio de que uma versão em tempo de compilação descreve todos os destinos. Esta combinação adapta-se às limitações de compilação cruzada e implementação do ZVM. Também pode ser adequada para outros projetos Go que precisem de compilações sem cgo, acesso ao libvirt no mesmo processo e compatibilidade intencional entre diferentes instalações Linux.

## Como funciona o libvirt-go

O libvirt-go tem uma camada de baixo nível gerada e uma camada de alto nível escrita manualmente. Em tempo de execução, o `purego` abre a biblioteca partilhada nativa do libvirt e associa símbolos C a funções que podem ser chamadas em Go. Isto mantém o cgo fora da compilação da aplicação, enquanto o libvirt continua a ser executado no mesmo processo. Por conseguinte, continua a ser necessária uma biblioteca partilhada compatível do libvirt na máquina que executa o programa.

![Arquitetura do libvirt-go, desde uma aplicação Go, passando por wrappers de alto nível, ligações RawAPI geradas e purego, até às bibliotecas nativas do libvirt.](/images/guides/libvirt-go-architecture.webp)

O gerador lê os metadados XML oficiais da API, provenientes do libvirt 12.6.0 e incluídos neste repositório. Nas APIs principal, de administração, QEMU e LXC, esses metadados produzem exatamente 568 funções e 1093 enumerações. A superfície gerada expõe métodos públicos `RawAPI` com tipos adequados para `purego`. O respetivo catálogo também regista o encaminhamento para a biblioteca de origem, para que cada função seja procurada na biblioteca principal do libvirt ou na respetiva biblioteca de extensão de administração, QEMU ou LXC. Os dados gerados de registo de símbolos ligam os nomes aos destinos das chamadas, e as versões de introdução registam quando o libvirt upstream adicionou cada função. A ausência de bibliotecas de extensão afeta os respetivos símbolos sem impedir o carregamento da biblioteca principal.

A geração fornece abrangência, enquanto os wrappers escritos manualmente fornecem regras de comportamento que as declarações XML, por si só, não conseguem expressar. Estes wrappers controlam a propriedade de ligações, domínios, streams e outros identificadores nativos. Copiam os valores devolvidos e alocados para dados Go e libertam as alocações nativas quando necessário. Também preservam os valores Go durante o tempo de vida exigido pelas chamadas nativas, gerem o registo e a limpeza de callbacks e transformam os registos de erros locais de cada thread do libvirt em erros Go estruturados. Estes pormenores são importantes porque uma chamada bem-sucedida pode transferir uma referência, devolver memória que precisa de ser libertada ou registar trabalho que permanece ativo depois de a chamada terminar.

A compatibilidade fica visível para os autores de chamadas, em vez de permanecer oculta no carregador. `HasSymbol` indica se as bibliotecas carregadas exportam uma função gerada. `SymbolVersion` indica a versão upstream que introduziu um símbolo conhecido. Quando uma função pedida está ausente, as chamadas raw geradas e as chamadas de alto nível devolvem um `SymbolUnavailableError`. Esse erro inclui `ErrSymbolUnavailable`, pelo que a análise normal de erros em Go pode reconhecer a condição partilhada, mantendo o nome do símbolo e a versão em que foi introduzido.

Este modelo símbolo a símbolo suporta instalações mais antigas do libvirt e backports das distribuições. Baseia-se no que a biblioteca em tempo de execução exporta, em vez de tratar a respetiva versão numérica como uma lista completa de capacidades. A `RawAPI` continua disponível para operações especializadas que não tenham um wrapper de alto nível, mas os autores de chamadas raw continuam responsáveis pelos valores sentinela de falha em C, pela propriedade nativa e pelo tratamento de erros locais de cada thread. A camada de alto nível é o ponto de partida mais seguro para o código das aplicações.

## Experimente

O exemplo do repositório abre o URI `test:///default` do libvirt em modo só de leitura e lista os respetivos domínios:

<!-- markdownlint-disable MD010 -->
```go
package main

import (
	"fmt"
	"log"

	libvirt "github.com/Ns2Kracy/libvirt-go"
)

func main() {
	conn, err := libvirt.NewConnectReadOnly("test:///default")
	if err != nil {
		log.Fatal(err)
	}
	defer func() {
		if _, err := conn.Close(); err != nil {
			log.Printf("close connection: %v", err)
		}
	}()

	domains, err := conn.ListAllDomains(0)
	if err != nil {
		log.Fatal(err)
	}
	for _, domain := range domains {
		name, nameErr := domain.GetName()
		if err := domain.Free(); err != nil {
			log.Printf("free domain: %v", err)
		}
		if nameErr != nil {
			log.Fatal(nameErr)
		}
		fmt.Println(name)
	}
}
```
<!-- markdownlint-enable MD010 -->

Na raiz do repositório, execute o exemplo com o cgo desativado numa máquina
Linux suportada que tenha o libvirt instalado:

```sh
CGO_ENABLED=0 go run ./examples/list-domains
```

`test:///default` é o controlador de teste sintético do libvirt. Fornece recursos de exemplo e não altera convidados reais. A compilação não precisa dos ficheiros de desenvolvimento do libvirt. O programa continua a exigir uma biblioteca partilhada compatível do libvirt em tempo de execução.

## Limites e validação atuais

O libvirt-go continua a ser experimental e não é recomendado para cargas de trabalho de produção. Linux amd64 é a única plataforma suportada e testada em tempo de execução. Linux arm64 apenas é verificado através da compilação. Os caminhos do carregador para macOS, FreeBSD e NetBSD não foram testados por este projeto e continuam a não ser suportados.

É necessária uma biblioteca partilhada nativa compatível do libvirt em tempo de execução. Remover o cgo da compilação da aplicação elimina a dependência da cadeia de ferramentas C em tempo de compilação; não substitui o próprio libvirt. As aplicações têm de fechar as ligações e libertar explicitamente os recursos devolvidos, de acordo com as regras de propriedade de cada API. Os autores de chamadas `RawAPI` também têm de reconhecer os valores sentinela de falha nativos e obter os erros locais de cada thread do libvirt na mesma thread do sistema operativo. Não foi validado nenhum ambiente de produção libvirt/QEMU/KVM.

As evidências dos testes são mantidas separadas desses limites de suporte. A CI automatizada executa testes unitários com cgo desativado para o gerador, os layouts ABI e os auxiliares de propriedade; testes de integração sintéticos com `test:///default` no Ubuntu 22.04 e 24.04; bem como verificações de condições de corrida e do código gerado. Uma tarefa condicionada de integração real inicia um daemon QEMU/libvirt isolado num runner Ubuntu efémero e testa fixtures descartáveis, callbacks do ciclo de vida dos convidados e a limpeza. As verificações de compatibilidade abrangem diferentes versões empacotadas do libvirt em tempo de execução e o comportamento perante símbolos em falta. O Govulncheck e o CodeQL acrescentam análises de segurança das dependências e do código.

Estas verificações fornecem evidências úteis sobre o comportamento da API e o isolamento dos testes. Não demonstram fiabilidade em transferências de armazenamento de produção, streams, carga de callbacks ou alterações prolongadas e frequentes dos convidados.

## Próximos passos

Um dos caminhos previstos consiste em utilizar o libvirt-go para introduzir melhorias incrementais no backend existente do ZVM, depois de cada componente demonstrar a sua utilidade nos testes. A biblioteca continuará a ser um pacote independente, disponível para outros projetos Go que precisem de acesso ao libvirt no mesmo processo com compilações sem cgo. O trabalho a curto prazo concentra-se em expandir os wrappers de alto nível, testar streams e callbacks sob carga, reforçar a cobertura do tempo de vida dos recursos, testar uma matriz de compatibilidade mais ampla entre versões antigas e recentes do libvirt e fazer avançar o Linux arm64 das verificações de compilação para a validação em tempo de execução. Não anunciamos qualquer versão do ZimaOS, data de lançamento ou calendário de integração.

## Experimente a antevisão para programadores

Experimente a [antevisão do libvirt-go para programadores](https://github.com/Ns2Kracy/libvirt-go) e abra um [issue específico no GitHub](https://github.com/Ns2Kracy/libvirt-go/issues) quando encontrar uma lacuna. Inclua a distribuição e a arquitetura Linux, a versão instalada do libvirt, o wrapper de alto nível em falta ou o símbolo indisponível e uma reprodução mínima.

Os relatos de comportamento em versões mais antigas do libvirt e no Linux arm64 são especialmente úteis. Para erros de recursos, callbacks ou streams, descreva a ordem de limpeza e indique se o problema pode ser reproduzido com `test:///default` ou com um daemon real. Aceitamos contribuições. Se quiser adicionar um wrapper em falta, comece por um issue que identifique a função subjacente do libvirt e o comportamento de propriedade, para que a implementação e os testes possam ser analisados em conjunto.
