---
title: "O que estamos a desenvolver a seguir para as máquinas virtuais no ZimaOS"
seo_title: "O futuro das máquinas virtuais no ZimaOS | ZimaSpace"
description: "Antevisão de importações mais fáceis de imagens de VM, redes mais seguras, instantâneos de discos, cópias de segurança e melhorias de fiabilidade para o ZimaOS."
type: Docs
author: Ns2Kracy
tip: Não remova este bloco de Front Matter. O campo description é utilizado como resumo do artigo; se ficar vazio, será utilizado o primeiro parágrafo.
---

# O que estamos a desenvolver a seguir para as máquinas virtuais no ZimaOS

**Uma antevisão do desenvolvimento de importações mais fáceis de imagens, redes mais seguras, instantâneos de discos, cópias de segurança e das melhorias de fiabilidade que as sustentam.**

> **Antevisão de desenvolvimento:** este não é um anúncio de lançamento nem uma promessa de data de entrega. As funcionalidades assinaladas como **Em validação**, **Protótipo** ou **Investigação** podem mudar antes de chegarem a uma versão pública do ZimaOS. A disponibilidade também pode depender da distribuição do pacote ZimaOS, do hardware anfitrião, do sistema operativo convidado e da configuração de armazenamento ou rede.

![Visão geral desenhada à mão dos quatro eixos de trabalho do ZVM Next: importação de imagens, redes, recuperação e compatibilidade.](/images/guides/zvm-next-workstreams.svg)

*Quatro eixos de trabalho, a avançar a ritmos diferentes. As etiquetas de estado deste artigo continuam a ser a fonte fidedigna.*

Algumas cargas de trabalho adaptam-se perfeitamente a um contentor. Outras precisam de um sistema operativo completo.

Um utilitário exclusivo para Windows. Um appliance Home Assistant. Uma máquina de teste Linux isolada. Um laboratório de routers que pode reconstruir sem afetar o resto da rede. É nestas tarefas que uma VM justifica o seu lugar num servidor doméstico.

O ZVM é o serviço de máquinas virtuais que oferece essa experiência no ZimaOS. Já fornece a base para criar e executar VMs, mas a comunidade também nos mostrou onde a experiência precisa de melhorar. Importar uma imagem de disco existente ainda exige demasiados passos manuais. As redes em bridge são fáceis de interpretar mal. O arranque automático, os instantâneos, as cópias de segurança e a recuperação precisam de salvaguardas mais claras. E, quando uma operação falha, a mensagem deve ajudá-lo a corrigir o problema, não limitar-se a informar que algo correu mal.

Temos transformado esses relatos numa direção mais focada para o ZVM. Eis o que está agora a ser reforçado, o que se encontra em validação ativa e o que ainda está em investigação.

## Resumo dos estados

| Estado | O que significa | Exemplos atuais |
| --- | --- | --- |
| **Base alfa** | O código faz parte da linha alfa atual; a disponibilidade nos dispositivos continua a depender da distribuição do pacote ZimaOS. | Reforço da autenticação no percurso da consola de VM baseada no navegador. |
| **Em validação** | A implementação principal existe, mas os testes de compatibilidade e atualização ainda estão em curso. | Importação direta de imagens, conversão faseada, verificações de integridade e limpeza após falhas. |
| **Protótipo** | O design está implementado em código e testes, mas o seu comportamento e a interface podem ainda mudar. | Redes multimodo, alterações protegidas às bridges, eventos de arranque automático, instantâneos de discos e criação de cópias de segurança completas. |
| **Investigação** | Uma direção que estamos a investigar, não uma funcionalidade de lançamento confirmada. | Passthrough de USB, PCIe, GPU e NIC física; cópia de segurança incremental; fluxos de migração mais abrangentes. |

Utilizamos estas etiquetas de forma intencional. O facto de uma funcionalidade aparecer num ramo de desenvolvimento ou protótipo não significa que esteja pronta para a sua VM de produção.

## Importe a imagem que já tem

Muitos projetos autoalojados publicam um disco virtual pronto a executar em vez de um instalador. Colocar essa imagem numa VM pode obrigá-lo a convertê-la manualmente, movê-la para o diretório correto e, depois, ligá-la a uma nova máquina.

A experiência que pretendemos é muito mais simples: escolha a imagem, escolha onde a VM deve armazená-la e deixe o ZVM tratar da preparação.

O primeiro objetivo de compatibilidade abrange:

- Suportes de instalação ISO
- QCOW2
- VDI
- VMDK
- Discos raw ou IMG
- Pacotes OVA com metadados OVF

![Fluxo de importação de imagens do ZVM, desde a seleção da origem até à deteção de conteúdo, verificação, preparação e conclusão atómica.](/images/guides/image-import-pipeline.svg)

*Cada percurso termina numa cópia verificada e pronta para a VM ou num passo de limpeza; nunca num disco incompleto apresentado como pronto.*

Suportar um formato significa mais do que confiar na extensão do nome do ficheiro. O ZVM inspeciona o conteúdo, valida a imagem e copia-a ou converte-a para a localização de armazenamento selecionada para a VM. Por predefinição, os discos que não são ISO usam QCOW2, enquanto raw continua a ser uma opção avançada. A VM concluída aponta para a cópia gerida, pelo que remover o carregamento ou a transferência original não deverá inutilizá-la.

O pipeline de importação foi concebido tanto para a possibilidade de falha como para o sucesso:

1. Preparar a origem sem a tratar como um disco concluído.
2. Detetar o formato real e rejeitar imagens não suportadas ou danificadas.
3. Verificar um valor SHA-256 opcional.
4. Inspecionar arquivos OVA e rejeitar path traversal ou entradas não seguras.
5. Copiar ou converter para um ficheiro temporário `.partial`.
6. Sincronizar, verificar e mudar atomicamente o nome da imagem concluída.
7. Remover os dados temporários após um cancelamento ou uma falha.

Sempre que possível, este processo também preserva o comportamento de disco esparso. Um disco com grande capacidade virtual não deve consumir de imediato a mesma quantidade de armazenamento físico.

O objetivo a longo prazo para a interface é reunir carregamentos locais, caminhos selecionados no ZimaOS Files, transferências por URL e modelos de sistema integrados no mesmo fluxo de configuração da VM. Esta fase destina-se à importação de uma imagem para uma VM. Não constitui uma biblioteca de imagens separada e não inclui a exportação de VMs.

**Estado: Em validação.** O backend de importação direta e os testes de regressão existem, incluindo uma correção para nomes com versões, como `appliance-1.2.3.qcow2`. Continua a ser necessária uma cobertura mais ampla de dispositivos, imagens e sistemas operativos convidados.

## As redes devem ser uma escolha, não um teste de vocabulário

Os modos de rede virtual podem parecer quase idênticos num formulário, embora se comportem de formas muito diferentes na rede. O ZVM deve explicar essa diferença antes de carregar em Guardar.

O protótipo de rede atribui um modo explícito a cada NIC virtual:

- **NAT** para uma rede privada simples com acesso de saída.
- **Bridge Linux** quando a VM deve aparecer diretamente na LAN e comunicar com o anfitrião.
- **macvtap** para uma ligação mais direta, com um aviso claro de que a comunicação do anfitrião para o convidado costuma estar indisponível.
- **Desligada** para um laboratório isolado ou uma NIC que será ligada mais tarde.

![Quatro cartões de topologia comparam NAT, bridge Linux, macvtap e redes de VM desligadas.](/images/guides/vm-network-modes.svg)

*As etiquetas podem parecer semelhantes num formulário de definições, mas o anfitrião, a VM e a LAN não comunicam da mesma forma.*

O objetivo do produto é permitir 1-8 NICs configuradas de forma independente por VM. O planeamento de NAT também inclui reservas DHCP e reencaminhamento de portas TCP ou UDP. Se uma porta do anfitrião estiver duplicada ou já estiver ocupada, o ZVM deve comunicar um conflito em vez de substituir silenciosamente outra regra.

As alterações às bridges exigem cuidados especiais num servidor doméstico sem monitor. Mover a interface física que transporta a ligação de gestão do ZimaOS pode desligar o mesmo navegador utilizado para fazer a alteração. O protótipo trata essa operação como uma transação: verifica a configuração proposta, aplica-a, monitoriza a conectividade e reverte-a se o novo percurso não ficar operacional.

A mesma transparência deve aplicar-se às alterações que exigem o encerramento. Se não for possível ligar uma NIC a quente em segurança no anfitrião ou no convidado, o ZVM deve guardar a configuração pedida, assinalá-la como reinício pendente e evitar dar a entender que a VM em execução já corresponde à mesma.

**Estado: Protótipo.** Os modos explícitos de interface, as APIs de interface, as políticas NAT persistentes, as regras de reencaminhamento, a configuração inicial de rede estática e as alterações protegidas às bridges Linux têm implementações funcionais em ramos. As matrizes de hardware e atualização não estão concluídas.

## Um instantâneo não é uma cópia de segurança

Um instantâneo é um ponto de reversão próximo. Uma cópia de segurança é uma cópia separada, destinada a sobreviver a um problema com a VM ou o armazenamento original. Colocar ambos sob um único botão vago tornaria a recuperação mais difícil, não mais fácil.

![Comparação lado a lado entre um instantâneo apenas do disco e um pacote independente de cópia de segurança completa.](/images/guides/snapshot-vs-backup.svg)

*Os instantâneos e as cópias de segurança resolvem problemas diferentes. O restauro de cópias de segurança continua a ser um marco posterior.*

### Instantâneos de discos para reversão local

O primeiro design de instantâneos abrange apenas os discos. Não captura a RAM nem retoma uma aplicação na instrução exata onde parou.

No caso de uma VM QCOW2 desligada, o ZVM pode copiar diretamente um disco estável. Numa VM em execução, o protótipo cria um overlay externo temporário para estabelecer uma vista do disco num determinado momento, copia a base estável e, depois, consolida e redireciona o disco ativo para o caminho original. A VM não fica dependente de uma cadeia crescente de overlays geridos pelo ZVM.

Por predefinição, a captura é **consistente em caso de falha**, de forma semelhante ao estado do disco após uma perda inesperada de energia. Se o convidado tiver um QEMU Guest Agent capaz de responder, o ZVM pode disponibilizar uma captura **em repouso** para que o sistema de ficheiros possa descarregar e suspender as operações em torno do instantâneo. O ZVM verifica essa capacidade em tempo de execução, em vez de apresentar uma opção que pode não funcionar.

O restauro de um instantâneo de disco exige que a VM esteja desligada. Antes de substituir discos, o protótipo escreve um diário de recuperação e gere temporariamente o arranque automático. Se um restauro de vários discos for interrompido, pode reverter a operação em vez de deixar a VM com discos de momentos diferentes. As capturas em execução também verificam o espaço disponível e monitorizam o overlay temporário enquanto a cópia decorre.

### Cópias de segurança completas para uma cópia independente

O protótipo de cópia de segurança cria um pacote `.zvm-backup` num diretório existente selecionado através do ZimaOS Files. Regista a configuração inativa da VM, cópias independentes dos discos QCOW2, somas de verificação SHA-256, tamanhos dos ficheiros, mapeamentos dos discos originais e um manifesto com versão.

A segurança do destino faz parte da funcionalidade. O ZVM é executado com acesso elevado ao armazenamento, pelo que a implementação rejeita caminhos do sistema operativo, localizações de metadados do ZVM e fugas baseadas em ligações simbólicas, em vez de depender de uma simples verificação de texto.

**Limitação importante:** a criação e a listagem de pacotes de cópia de segurança fazem parte do protótipo atual. O restauro de uma VM a partir de um pacote de cópia de segurança é um marco separado e não deve ser considerado disponível. Os instantâneos de discos também não incluem o estado da memória.

**Estado: Protótipo.** A API, a implementação do serviço, os diários de interrupção, as verificações de caminhos e os testes específicos existem em código ainda em desenvolvimento. Os testes com libvirt real, perda de energia, pouco espaço e vários discos continuam a ser critérios obrigatórios para o lançamento.

## O arranque automático não deve ser uma opção misteriosa

O arranque automático é útil para o Home Assistant, uma VM de router ou qualquer serviço que deva regressar depois de o anfitrião reiniciar. Também apresenta riscos quando uma VM depende de armazenamento ou redes que ainda não estão prontos.

O trabalho atual torna a definição existente de arranque automático visível através da API e regista eventos de sucesso ou falha quando esta é alterada. O design mais abrangente acrescenta prioridade de arranque e um atraso configurável, aguardando depois pelos recursos necessários do anfitrião antes de iniciar as VMs dependentes.

**Estado: Protótipo.** O controlo básico do arranque automático e os relatórios de eventos estão agora a ser testados. A ordenação baseada em dependências e o atraso são objetivos de design, não comportamentos concluídos.

## As pequenas correções também são importantes

As novas funcionalidades não ajudam se uma atualização, uma sessão de consola ou uma operação falhada deixar uma VM num estado pouco claro. Várias correções menos visíveis avançam em paralelo com o trabalho de maior dimensão:

- **Segurança do acesso à consola:** o proxy VNC baseado no navegador segue agora o percurso de autenticação esperado na linha atual de código alfa. A disponibilidade nos dispositivos continua a acompanhar a distribuição do pacote ZimaOS.
- **Tratamento mais seguro da identidade:** a autenticação deixou de confiar num endereço reencaminhado controlado pelo cliente para decidir se um pedido é local.
- **Nomes de imagens com pontos:** nomes de ficheiro como `appliance-1.2.3.qcow2` mantêm a versão útil em vez de serem abreviados incorretamente.
- **Carregamentos cancelados:** o carregamento interrompido de uma imagem remove o respetivo ficheiro parcial, em vez de o deixar para trás como se pudesse ser utilizado.
- **Definições guardadas face às definições em execução:** o trabalho de rede lê a definição persistente da VM e pode apresentar um reinício pendente, em vez de confundir o estado em execução com o estado guardado.
- **Reconciliação da rede:** as reservas DHCP duplicadas, os conflitos de reencaminhamento e as políticas de rede do anfitrião aplicadas parcialmente recebem validação explícita e um tratamento orientado para a reversão.

Outros relatos, incluindo frames binários da consola no navegador, ciclos de restabelecimento da ligação, comportamento do teclado, instalação do Windows, apresentação do GRUB e compatibilidade de atualização, continuam no plano de regressão. O facto de estarem a ser investigados não significa que já tenham sido todos corrigidos.

## A sua VM existente deve continuar a ser sua

As VMs da comunidade contêm frequentemente XML editado manualmente, dispositivos invulgares, firmware personalizado ou definições criadas por uma versão mais antiga do ZimaOS. Reescrever toda a definição para alterar um campo poderia apagar precisamente a personalização que torna a VM útil.

O design do ZVM Next adota uma abordagem aditiva:

- Detetar as VMs existentes sem as alterar.
- Modificar apenas os nós XML controlados pela operação solicitada.
- Preservar UUIDs, endereços MAC existentes, caminhos dos discos, NVRAM, arranque automático e dispositivos não alterados.
- Explicar se uma funcionalidade pode ser aplicada em execução, exige encerramento, necessita de conversão explícita ou não é suportada.
- Impedir que uma nova operação falhada torne a VM não arrancável com a configuração anterior.

Antes de uma versão estável, a matriz de regressão planeada abrange VMs existentes com Windows, Linux, Home Assistant OS e OpenWRT ou pfSense em cenários de utilização de funcionalidades, reinício, atualização e reversão.

## O passthrough não é apenas uma caixa de verificação

O passthrough de hardware é uma das funcionalidades mais pedidas pela comunidade. É também uma das mais fáceis de tornar inseguras quando se oculta demasiada complexidade.

A atribuição de USB pode ser relativamente contida. O passthrough de PCIe e GPU depende dos grupos IOMMU, do firmware, da associação de controladores, do comportamento de reposição do dispositivo e do que mais partilha o mesmo grupo. O passthrough de NIC física pode remover uma interface de que o próprio ZimaOS precisa. Uma caixa de verificação não torna seguro um hardware incompatível.

Por esse motivo, o passthrough de PCIe, GPU e NIC física continua a ser uma direção de **Investigação/Antevisão**. Qualquer antevisão pública precisa de uma matriz de compatibilidade, avisos claros sobre o impacto no anfitrião, instruções de recuperação e uma forma de desativar a funcionalidade de modo independente.

As cópias de segurança incrementais, a migração online de armazenamento, a migração entre anfitriões, os clusters, a alta disponibilidade, o armazenamento distribuído, os instantâneos de RAM e a deduplicação de cópias de segurança também ficam fora do âmbito central atual.

## Ajude-nos a testar cargas de trabalho reais

Partilhamos os limites, além das ideias, porque o feedback mais útil começa com uma carga de trabalho real.

Diga-nos:

1. Que formato de imagem e appliance pretende importar?
2. Precisa de NAT, uma verdadeira bridge Linux, macvtap ou um laboratório isolado com várias NICs?
3. Um instantâneo consistente em caso de falha continua a ser útil quando o QEMU Guest Agent não está instalado?
4. Onde devem ficar as cópias de segurança completas e que proteção de espaço livre espera?
5. Que dispositivo USB, PCIe, GPU ou NIC pretende encaminhar por passthrough?
6. Que erro atual de VM o impede de avançar hoje?

Num relatório de erro, inclua o hardware Zima ou o modelo do anfitrião x86, as versões do ZimaOS e ZVM, o sistema operativo convidado, o tipo de firmware da VM, o formato do disco e a localização de armazenamento, o modo de rede, a ação exata que falhou e o erro completo apresentado na interface.

Participe na discussão na [Comunidade ZimaSpace](https://community.zimaspace.com/). Esses detalhes ajudam outros membros da comunidade e a equipa Zima a comparar o seu relato com casos conhecidos.

O nosso objetivo não é colocar todas as opções do libvirt num formulário Web. É tornar os fluxos de trabalho de VM importantes num servidor doméstico compreensíveis, recuperáveis e suficientemente seguros para confiar neles no reinício seguinte.

## Perguntas frequentes

### Todas estas funcionalidades estão disponíveis agora?

Não. A tabela de estados distingue o trabalho da base alfa, a validação ativa, os protótipos e a investigação. Este artigo é uma atualização de rumo, não notas de lançamento.

### Os instantâneos incluirão o estado da memória da VM?

Não no design central atual. A primeira implementação captura apenas os discos. Por predefinição, os instantâneos de VMs em execução são consistentes em caso de falha e podem colocar o sistema de ficheiros em repouso quando o QEMU Guest Agent está disponível.

### É possível importar qualquer imagem OVA, VMDK ou VDI?

Esses formatos fazem parte do objetivo de compatibilidade, mas as imagens reais variam. O firmware, a arquitetura, os controladores, os drivers, a encriptação, os danos e os metadados OVF específicos de fornecedores podem ainda tornar uma imagem incompatível. O ZVM deve rejeitar casos não suportados com uma explicação que permita agir, em vez de criar uma VM que não consegue arrancar.

### O restauro de cópias de segurança já é suportado?

Não. O protótipo atual cria e lista pacotes de cópia de segurança completa. O restauro a partir desses pacotes está planeado como um fluxo de trabalho separado e testado explicitamente.

### O passthrough de GPU funcionará em todos os dispositivos Zima?

Não. Depende da CPU, do firmware, do agrupamento IOMMU, da GPU, do controlador do anfitrião, do controlador do convidado e do comportamento de reposição. Continua a ser uma área de investigação e antevisão até que a matriz de suporte e o percurso de recuperação estejam claros.
