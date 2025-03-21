---
title: Guía de Sincronización Bidireccional ZimaOS & QTS
description: 
type: Docs
author: admin
tip: El formato fijo de la barra superior no debe eliminarse, la descripción es la descripción del artículo, si no se llena se cortará el primer párrafo del contenido
---
![](https://manage.icewhale.io/api/static/docs/1742550303202_image.png)
## Punto de Dolor en el Mundo Real: Desafíos de Sincronización entre NAS
Un usuario preguntó recientemente: "Nuestro equipo utiliza tanto ZimaOS como sistemas QNAP QTS. La transferencia manual de archivos consume más de 2 horas diarias. ¿Cómo podemos automatizar la sincronización bidireccional?" Esta guía resuelve exactamente este problema.
## ¿Por Qué WebDAV + Zerotier?
![](https://manage.icewhale.io/api/static/docs/1742550364111_image.png)
Figura 1: Arquitectura de sincronización de archivos entre sistemas a través de WebDAV y Zerotier
### Palabras Clave: Sincronización Bidireccional ZimaOS y QTS
- WebDAV : Protocolo de colaboración de archivos multiplataforma
- Zerotier : Herramienta de LAN virtual para el paso NAT sin requisitos de IP pública
- Ventajas : Configuración fácil, sincronización automática y sincronización reanudable
## Implementación Paso a Paso
### Paso 1: Configurar WebDAV en ZimaOS
1. Instalar App : Buscar "WebDAV" en la tienda de aplicaciones de ZimaOS
![](https://manage.icewhale.io/api/static/docs/1742550445278_image.png)
2. Parámetros Críticos (Figura 2):
  - Credenciales: Por defecto `casaos` 
  - Directorio de Sincronización: Seleccionar la carpeta objetivo a través del "Icono de Elegir Directorio" (segundo círculo rojo)
  - Puerto: Tomar nota del puerto personalizado (por ejemplo, `5005`)
![](https://manage.icewhale.io/api/static/docs/1742550489305_image.png)
Figura 2: Interfaz de configuración de WebDAV de ZimaOS
### Paso 2: Establecer Red Zerotier
1. Obtener ID de Red :
  - Panel de control de ZimaOS → Configuración → Red → Acceso remoto → Habilitar → Hacer clic en "NetworkID" para copiar
![](https://manage.icewhale.io/api/static/docs/1742550534267_image.png)
2. Instalar Zerotier y habilitar SSH. (Recursos relacionados se pueden encontrar al final del artículo)
3. Configuración de QNAP :
  - Acceder por SSH a QTS y ejecutar:
`zerotier-cli join [ZimaOS NetworkID]`
4. Verificar Conectividad :
  - Obtener IP de Zerotier de ZimaOS: Red → Red Virtual → IP Estática
  - Probar con `ping [ZimaOS Zerotier IP]`
### Paso 3: Crear Tarea de Sincronización HBS 3
1. Configurar Sincronización :
  - Instalar "HBS 3" desde el Centro de Aplicaciones de QTS
  - Lanzar HBS 3 y Seleccionar Sincronización → Trabajo de Sincronización Bidireccional → Agregar cuenta WebDAV
![](https://manage.icewhale.io/api/static/docs/1742550603938_image.png)
2. Optimización :
  - Elegir 'política de conflicto' para renombrar archivos locales
  - Establecer 'frecuencia de programación de trabajo' de 30 a 300s
## Conclusión & Recursos
![](https://manage.icewhale.io/api/static/docs/1742550646713_image.png)
Has logrado:
✅ Sincronización en tiempo real entre sistemas
✅ Penetración NAT sin IP pública
✅ Sincronización automática de archivos bidireccional
Si encuentras algún problema durante el uso, no dudes en hacérnoslo saber en cualquier momento. También puedes unirte a nuestra [comunidad](https://community.zimaspace.com/) y [Discord](https://discord.gg/uuNfKzG5) para discutir más sobre NAS y ZimaOS. ¡Esperamos tus comentarios!

Lectura Adicional:
[Manual Oficial de Zerotier para QNAP](https://docs.zerotier.com/qnap/)
[Acceso SSH habilitado en QNAP](https://www.qnap.com.cn/zh-cn/how-to/faq/article/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-ssh-%E8%AE%BF%E9%97%AE-qnap-nas)
[Mantener Archivos Sincronizados entre ZimaOS y Synology DSM](https://www.youtube.com/watch?v=n8ajxo6Uh3c)