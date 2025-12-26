Claro! Aqui está a tradução para o português de Portugal:

---

**title**: Como Usar uma UPS (Fonte de Alimentação Ininterrupta) no ZimaOS  
**description**: Aprenda a conectar, ativar e configurar uma UPS USB no ZimaOS 1.5.3 ou versões posteriores, para que o seu NAS possa desligar-se com segurança durante quedas de energia e evitar a perda de dados.  
**type**: Docs  
**author**: icewhale123456  
**tip**: A barra superior tem formato fixo, não a apague. A descrição é o resumo do artigo; caso não seja preenchida, será utilizada a primeira parte do conteúdo.

---

## Introdução  
A partir do **ZimaOS v1.5.3**, o ZimaOS suporta oficialmente **UPS (Fonte de Alimentação Ininterrupta)**, permitindo que o seu NAS continue a funcionar durante quedas de energia e desligue-se de forma segura quando necessário. Após conectar uma UPS USB compatível, o ZimaOS pode:  
- Ler o nível da bateria da UPS, voltagem e tempo estimado de funcionamento  
- Manter o NAS em funcionamento por um período durante uma queda de energia  
- Realizar um desligamento controlado com base nas suas configurações  
Pode descarregar a versão mais recente do ZimaOS aqui: [ZimaOS Releases](https://github.com/IceWhaleTech/ZimaOS/releases)

Este guia mostra como **conectar**, **ativar** e **configurar** uma UPS no ZimaOS.

---

## Requisitos  
Antes de começar, prepare o seguinte:  
- Um NAS ou servidor a correr o ZimaOS v1.5.3 ou versão posterior  
- Uma UPS compatível com USB que possa comunicar via USB (Por exemplo, modelos comuns de consumo como APC ou Santak que suportam USB)

---

## Passo 1 – Conectar o Hardware da UPS  
![Dispositivos ZimaOS conectados a unidades UPS via cabo USB e adaptador de energia, ligados a tomadas de energia standard.](https://manage.icewhale.io/api/static/docs/1766748897632_image.png)  
1. Conecte o dispositivo ZimaOS e o seu adaptador de energia às saídas da UPS.  
2. Conecte a UPS ao dispositivo ZimaOS usando um cabo USB de dados.

---

## Passo 2 – Ativar a Proteção contra Perda de Energia (UPS)  
![Página de configurações gerais do ZimaOS (IceWhale), com opções de configuração](https://manage.icewhale.io/api/static/docs/1766749473078_image.png)  
1. Abra a interface web do ZimaOS no seu navegador.  
2. Vá a Configurações → Geral → Proteção contra perda de energia (UPS)  
3. Ative a opção.

---

## Passo 3 – Escolher o Tipo de UPS e o Dispositivo  
Na janela de configuração da UPS, deve especificar como o ZimaOS comunica com a UPS e qual UPS usar.  
![Página de configuração da UPS para selecionar um modelo UPS conectado por USB](https://manage.icewhale.io/api/static/docs/1766749743361_image.png)  
Verá campos como:  
| Configuração  | Descrição |  
|---------------|-----------|  
| **Tipo de UPS** | Selecione o método de comunicação. Atualmente, o ZimaOS só suporta **USB-UPS**. |  
| **Dispositivo UPS** | Selecione o modelo de UPS que o ZimaOS detectou. |

---

## Passo 4 – Definir o Comportamento em Caso de Queda de Energia  
Na mesma janela de configurações da UPS, pode decidir o que o ZimaOS deve fazer quando ocorrer uma queda de energia.  
![Configurações de proteção contra perda de energia da UPS no ZimaOS](https://manage.icewhale.io/api/static/docs/1766751218471_image.png)  
Existem dois modos de desligamento:  
### Até a bateria ficar baixa  
Neste modo, o ZimaOS desliga o sistema quando o nível da bateria da UPS estiver **abaixo de 15%**.  
Esta opção é simples de usar e foca-se em proteger os seus dados e hardware quando a bateria estiver quase vazia.  
### Tempo Personalizado  
Neste modo, o ZimaOS inicia um temporizador quando a UPS passa a funcionar com bateria e inicia um desligamento seguro quando o tempo definido expirar.

**No entanto**, o limite de 15% ainda se aplica:

- Se o nível da bateria da UPS cair para 15% antes do tempo personalizado ser atingido,  
o ZimaOS desligará imediatamente a 15%, sem esperar mais.

Esta opção é útil quando:  
- Deseja evitar desligamentos causados por quedas de energia muito curtas.  
- Quer que o sistema se desligue com segurança caso a falha de energia seja longa e a bateria caia para 15%.

Clique em `Confirmar` para aplicar a configuração.

A partir de agora, o ZimaOS seguirá a estratégia de desligamento selecionada sempre que a UPS estiver a funcionar com bateria.

---

## Passo 5 – Verificar o Status da UPS no ZimaOS  
Após a configuração, pode verificar se o ZimaOS está a ler corretamente os dados da UPS.  
![Interface de status exibindo a condição em tempo real](https://manage.icewhale.io/api/static/docs/1766751527944_image.png)  
Na página de status ou configuração da UPS, deve ver informações como:

- **Percentagem da bateria**, por exemplo: Bateria 98%  
- **Tempo estimado restante**, por exemplo: Estimado 59 min  
- **Voltagem de potência**, por exemplo: 13.5 V

Se estes valores estiverem visíveis e a ser atualizados ao longo do tempo, significa que a proteção contra perda de energia está `ativa`.

Quando a energia cair:

1. A UPS continuará a alimentar o seu dispositivo ZimaOS.  
2. O ZimaOS seguirá a regra de desligamento que selecionou.  
3. Isso ajuda a reduzir o risco de danos no disco, erros no sistema de arquivos, perda de dados e falhas de serviço causadas pela perda repentina de energia.

O seu NAS agora tem **proteção real contra quedas de energia** e pode funcionar de forma mais segura e fiável.

---

## Recomendações de Uso

| Recomendações | Razão |
|----------------|-------|
| Use **Tempo Personalizado** para configurar um desligamento atrasado | Ajuda a evitar desligamentos frequentes causados por quedas de energia curtas ou temporárias |
| Conecte a UPS juntamente com um switch de rede ou router | Impede que o NAS se torne inacessível devido à falha de rede após o arranque |
| Verifique regularmente a saúde da bateria da UPS | A capacidade da bateria pode degradar-se com o uso prolongado, afetando o tempo de funcionamento da reserva |

---

## Lista de Dispositivos Compatíveis
[Listagem de Dispositivos UPS Compatíveis com ZimaOS](https://www.zimaspace.com/docs/zimaos/zimaos-ups-compatibility-list)

Esta lista não é exaustiva e pode ser atualizada com o tempo.  
Se a sua UPS não estiver listada, isso não significa automaticamente que não seja compatível.

---

## Obter Ajuda  
Se tiver problemas ao usar uma UPS com o ZimaOS, por favor, entre em contato com a equipa de desenvolvimento do ZimaOS através de `feedback@zimaos.com`.

---

Se precisar de mais alguma coisa, é só avisar!