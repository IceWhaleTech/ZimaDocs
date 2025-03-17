---
title: Título do Artigo
description: 
type: Docs
author: admin
tip: O formato fixo da barra superior não deve ser removido, description é a descrição do artigo, se não preenchido, será capturada a primeira parte do texto.
---
## Corrigir o Erro "Inicialização de Conta Falhou": Guia Rápido  

---

### **Opção 1: Reinstalar ZimaOS**  
**Ferramentas Necessárias**:  
- Pen drive vazio (≥4GB)  
- Teclado  

**Passos**:  
- Por favor, siga [este link](/zimacube/How-to-Install-ZimaOS) para completar a instalação.

---

### **Opção 2: Reparação via Linha de Comando**  
**Ferramentas Necessárias**:  
- Monitor HDMI/DP/Type-C  
- Teclado  

**Passos**:  
1. **Iniciar no modo linha de comando**  
   - Conecte o monitor > Pressione Alt+F2 > Digite `root` para fazer login no modo linha de comando

2. **Reparar Arquivos do Sistema**:  
   - Execute
```language
cat /etc/release.yaml
```

   - Execute
```language
rm -rf /var/lib/casaos/db/user.db && systemctl restart zimaos-user 
```
   - Pronto! Agora você pode tentar fazer login no zimaos novamente

Obrigado pelo seu apoio!