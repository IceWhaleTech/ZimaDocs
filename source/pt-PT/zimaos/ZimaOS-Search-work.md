Claro! Aqui está a tradução para o português de Portugal, mantendo o formato original:

---

title:Como funciona o ZimaOS-Search  
description:  
type: Docs  
author: admin  
tip: O formato fixo da barra superior não deve ser apagado. A descrição é o texto explicativo do artigo, se não for preenchido, será extraída a primeira parte do conteúdo.

---  
## Princípio de funcionamento do sistema  
### Design de arquitetura em três camadas  
1. **Camada de monitoramento de arquivos em tempo real**  
- Percepção em tempo real das alterações no sistema de arquivos (criação/renomeação/exclusão)  
Índice de nomes de arquivos (resposta em nível secundário)  
Índice de conteúdo de arquivos (processamento unificado durante as horas de pico baixas pela manhã)  
- Processamento assíncrono em lote das atualizações de índice (leitura, gravação, exclusão, corrotinas independentes)  
- Auditoria completa diária à meia-noite para garantir consistência final  
2. **Camada de construção inteligente de índice**  
- Algoritmo Snowflake gera ID de documento (capacidade de geração de 400 mil+/segundo)  
- Reconhecimento automático de formato suporta mais de 70 tipos de arquivos  
3. **Camada de busca multimodal**  
- Busca conjunta em quatro dimensões:  
Busca de texto completo (nome/conteúdo/tag/resumo)  
Correspondência aproximada de nomes de arquivos  
Correspondência exata de nomes de arquivos  
Busca semântica (atualmente suporta apenas imagens)  

## Vantagens principais  
### 🚀Construção rápida de índices  
- Dados de teste: Tamanho total de 65,5GB, número de arquivos 200000  
- Configuração de equipamento: CPU N100 de 4 núcleos, HDD de 500GB  

| **Índice** | **Solução tradicional (para um sistema semelhante)** | **Este sistema** | **Multiplicador de aumento** |  
| - | - | - | - |  
| **Tempo de índice de nome de arquivo** | 18 minutos | 1.4S | 771 vezes |  
| **Tempo de indexação de conteúdo de arquivo (selecionando documentos Office & PDF)** | 1h 23min | 2min21s | **35,2 vezes** |  
| **Uso de memória do índice** | 176MB | 26MB | **6,77 vezes** |  
| **Ocupação de disco do índice** | 156MB | 28MB | **5,6 vezes** |  
| **Número de serviços de backend** | 7 | 2 | **3,5 vezes** |  

### 💡Agendamento inteligente de recursos  
- **Mecanismo de carregamento sob demanda**: Arquivos de modelo são baixados de acordo com as necessidades de uso real, com inicialização leve e rápida  
- **Estratégia dinâmica de limitação de corrente**:  
Limite de processamento único: 100000 documentos/tipo  
Tempo máximo de processamento: 5 minutos/tipo  
- **Proteção contra barreira de gravação**: Impede que gravações de alta frequência causem pico de CPU  

## Cenários aplicáveis  
- **Gestão de Base de Conhecimento**: Localizar rapidamente documentos  
- **Arquivo Multimédia**: Buscar imagens/vídeos através de conteúdo  
- **Auditoria de Conformidade**: Rastrear com precisão o histórico de alterações de documentos  
- **Colaboração em Equipe**: Recuperação de associação de conteúdo entre formatos  
Tabela de suporte de formato e método de processamento de busca de texto completo  

| Categoria | Extensão de formato | Método de processamento | Notas |  
| - | - | - | - |  
| **Categoria de Texto** | .txt .md .log .htm .html .mht .mhtml .xml | 1. Leitura direta 2. Extração baseada na densidade do texto em HTML | Arquivos de código não são indexados por padrão |  
| **Documento PDF** | .pdf | 1. Análise direta com Pdfium 2. Cópia usa OCR Tesseract | Limite: ≤ 200 páginas, resultado OCR ≤ 800KB |  
| **E-book** | .epub .fb2 .djvu | Conversão Doconverter para txt | .djvu processa documentos digitalizados |  
| **Documento Word** | .doc .docm .docx .docxf .dot .dotm .dotx .fodt .odt .ott .oxps .rtf .stw .sxw .wps .wpt .xps | Converter Doconverter para docx e analisar | Suporta formato completo WPS |  
| **Documento de Tabela** | .csv .et .ett .fods .ods .ots .sxc .xls .xlsb .xlsm .xlsx .xlt .xltm .xltx | Converter Doconverter para CSV e ler |  |  
| **Documento PPT** | .dps .dpt .fodp .odp .otp .pot .potm .potx .pps .ppsm .ppsx .ppt .pptm .pptx .sxi | Análise de conversão Doconverter para pptx |  |  
| **Documento IWork** | .pages .numbers .key | Conversão Iwork2text (suporta OCR) |  |  
| **Imagem**★ | .bmp .raw .jpg .jpeg .jpe .jfif .png .gif .tif .tiff .webp .mat .pbm .pgm .ppm .pfm .pnm .fits .fit .fts .exr .hdr .v .vips | Reconhecimento OCR usando MiniCPM-o-2.6 | Restrição: ≤ 20MB por imagem |  
| **Vídeo**★ | .mp4 .wmv .mkv .avi .mov .webm .flv .mpeg .mpg .3gp .asf .rm .rmv .rmvb .m4v .swf | Extração de legendas com Whisper Large v3 mais rápida |  |  
| **Áudio**★ | .mp3 .aac .wav .flac .ogg .m4a .aiff .wma .ape | Transcrição de voz com Whisper-Large-v3 mais rápida |  |  
| **Documento CAD** | .dwg .dxf | O conteúdo não é suportado no momento | Apenas o índice de metadados é realizado |  
| **Arquivo Compactado** | .zip .rar .7z .sz .xz .gz .tar .bz2 .br .zz .zst .lz4 | O conteúdo não é suportado no momento | Somente o índice de metadados do pacote compactado |

> Nota: O formato marcado com ★ requer que o módulo de IA do ZimaOS seja ativado, e a capacidade de processamento completa depende da configuração de hardware. O sistema atualiza continuamente a lista de suporte, consulte a documentação oficial para os formatos mais recentes.  

### 🌐 Busca aprimorada com IA  
- Processamento de imagem: OCR+reconhecimento de rótulos MiniCPM-o-2.6  
- Processamento de áudio e vídeo: Geração de legendas Whisper-large-v3  
- Análise semântica: Vetorização semântica MiniLM-L6  
- Documento de referência: [Ativar busca com IA para ZimaOS](https://www.zimaspace.com/docs/zimaos/Enable-AI)

---