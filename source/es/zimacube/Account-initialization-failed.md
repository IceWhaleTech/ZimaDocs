---
title: Título del Artículo
description: 
type: Docs
author: admin
tip: El formato fijo de la barra superior no debe eliminarse, description es la descripción del artículo, si no se completa, se tomará el primer párrafo del contenido.
---
## Solucionar el error "Error en la Inicialización de la Cuenta": Guía Rápida  

---

### **Opción 1: Reinstalar ZimaOS**  
**Herramientas Necesarias**:  
- Unidad USB en blanco (≥4GB)  
- Teclado  

**Pasos**:  
- Por favor, siga [este enlace](/zimacube/How-to-Install-ZimaOS) para completar la instalación.

---

### **Opción 2: Reparación de Línea de Comandos**  
**Herramientas Necesarias**:  
- Monitor HDMI/DP/Type-C
- Teclado  
  

**Pasos**:  
1. **Iniciar sesión en modo línea de comandos**  
   - Conecte el monitor > Presione Alt+F2 > Ingrese `root` para iniciar sesión en modo línea de comandos

2. **Reparar archivos del sistema**:  
   - Ejecute
```language
cat /etc/release.yaml
```

   - Ejecute
```language
rm -rf /var/lib/casaos/db/user.db && systemctl restart zimaos-user 
```
   - ¡Listo! Ahora puede intentar iniciar sesión en zimaos nuevamente

¡Gracias por su apoyo!