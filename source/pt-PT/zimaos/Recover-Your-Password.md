---
title: Como recuperar a sua palavra-passe
description: 
type: "Docs"
tip: O formato fixo da barra superior não deve ser eliminado, a descrição é para o artigo, se não preenchido, será capturada a primeira parte do texto
---
### Se você esquecer a sua palavra-passe do ZimaOS, por favor siga os passos abaixo:
1. Conecte o ZimaCube a um monitor via cabo HDMI
![](https://manage.icewhale.io/api/static/docs/1728367816858_1.1.jpeg)

2. Defina a palavra-passe SSH no ZimaCube via teclado
![](https://manage.icewhale.io/api/static/docs/1728367843555_1.2.png)

3. Insira o comando de redefinição de utilizador
```
rm -fr /var/lib/casaos/db/user.db
```

4. Reinicie o seu dispositivo
![](https://manage.icewhale.io/api/static/docs/1728367919089_1.3.png)

5. Reentre no ZimaOS para inicialização
![](https://manage.icewhale.io/api/static/docs/1728367926499_1.4.png)