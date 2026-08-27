---
title: Cómo recuperar tu contraseña
description: 
type: "Docs"
tip: El formato fijo de la barra superior no debe ser eliminado, la descripción es para el artículo, si no se llena, se tomará el primer párrafo del contenido
---
### Si olvidas tu contraseña de ZimaOS, por favor sigue los pasos a continuación:
1. Conecta ZimaCube a un monitor mediante un cable HDMI
![](https://manage.icewhale.io/api/static/docs/1728367816858_1.1.jpeg)

2. Configura la contraseña SSH en ZimaCube mediante el teclado
![](https://manage.icewhale.io/api/static/docs/1728367843555_1.2.png)

3. Ingresa el comando de restablecimiento de usuario
```
rm -fr /var/lib/casaos/db/user.db
```

4. Reinicia tu dispositivo
![](https://manage.icewhale.io/api/static/docs/1728367919089_1.3.png)

5. Vuelve a entrar en ZimaOS para la inicialización
![](https://manage.icewhale.io/api/static/docs/1728367926499_1.4.png)