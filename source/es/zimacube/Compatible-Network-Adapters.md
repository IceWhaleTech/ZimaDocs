---
title: Adaptadores de Red Compatibles con ZimaCube y ZimaOS
description: 
type: Docs
author: icewhale123456
tip:  El formato fijo de la barra superior no debe ser eliminado, la descripción es para el artículo, si no se completa se tomará el texto del primer párrafo.
---
Aquí hay una lista de adaptadores de red compatibles con ZimaCube y ZimaOS. Basado en la retroalimentación de la comunidad, hemos asegurado la compatibilidad con los siguientes adaptadores, proporcionando una integración fluida para un rendimiento óptimo:
### Lista de Adaptadores de Red Compatibles
- **Adaptador Ethernet Gigabit de Doble Puerto PCIe** Chipset Realtek RTL8111
- **Adaptador Ethernet de Doble Puerto 2.5G PCIe** Chipset Realtek RTL8125B
- **Adaptador Ethernet Gigabit de 4 Puertos PCIe** Chipset Realtek RTL8111
- **Adaptador Ethernet de 4 Puertos PCIe** Chipset Intel I350-T4
- **Adaptador Ethernet de 4 Puertos 2.5G PCIe** Chipset Realtek RTL8125B
- **Adaptador Ethernet de 4 Puertos 2.5G PCIe** Chipset Intel I225
- **Adaptador Ethernet de 10G de Puerto Único PCIe x4** Chipset AQC113
- **Adaptador Ethernet de 2 Puertos PCIe** Chipset Intel I350-T2
- **Adaptador Ethernet 2.5G PCIe** Chipset Realtek RTL8125
- **Tarjeta WiFi 6E PCIe Intel AX210** con Antenas de 8Dbi
Agregado según la comunidad de usuarios (Próximamente):
- **Adaptador de Red PCIe** Chipset Intel X540 (Nueva Adición)
- **Adaptador de Red PCIe** Chipset Realtek RTL8125B (Nueva Adición)
- **Adaptador de Servidor SFP + de 2 Puertos PCIe 10G** Chipset Intel 82599ES (Nueva Adición)
### Herramientas de Prueba de Velocidad Recomendadas
Para ayudarte a medir el rendimiento de la red con precisión, recomendamos las siguientes dos herramientas:
1. **iPerf3**: Una herramienta de línea de comandos integrada en ZimaOS, iPerf3 es perfecta para probar las velocidades de la red interna. Es rápida, confiable e ideal para usuarios cómodos con comandos de terminal para evaluar el rendimiento de su red interna.
2. **Aplicación Docker OpenSpeedTest**: Esta herramienta de interfaz gráfica fácil de instalar, disponible en la Tienda de Aplicaciones de ZimaOS, se puede usar para probar las velocidades de la red interna. OpenSpeedTest proporciona una interfaz simple y fácil de usar, lo que la convierte en una buena opción para quienes prefieren una herramienta visual sobre utilidades de línea de comandos.
Ambas herramientas son excelentes para probar las velocidades internas de la red, con iPerf3 para usuarios que prefieren pruebas en línea de comandos y OpenSpeedTest para aquellos que buscan una opción gráfica rápida e intuitiva.
### Breve tutorial sobre cómo usar iperf3
Necesitas al menos dos máquinas que tengan iperf3 instalado. En ZimaOS, puedes consultar este artículo para aprender CLI. En Windows o macOS, primero debes instalar iperf3 [artículo](https://www.zimaspace.com/docs/zimaos/Sync-Photos-via-Configurable-CLI) y usarlo en la aplicación Terminal.
**Configurar el Servidor**
En la máquina que deseas usar como servidor, ejecuta:
```
iperf3 -s
```
Esto iniciará el servidor `iperf3`, esperando conexiones.
**Configurar el Cliente**
En la máquina cliente, ejecuta:
```
iperf3 -c <dirección_ip_servidor>
```

Reemplaza `<dirección_ip_servidor>` con la dirección IP de la máquina que ejecuta el servidor.
Este comando iniciará una prueba y mostrará el ancho de banda de la red entre el cliente y el servidor.
Ejecuta Pruebas con Parámetros Personalizados
Puedes modificar la configuración de la prueba utilizando diferentes opciones:
- Duración de la prueba: `-t <segundos>` (el valor predeterminado es 10 segundos)
- Número de flujos paralelos: `-P <num_flows>` (el valor predeterminado es 1)
- Número de puerto: `-p <número_puerto>` (el valor predeterminado es 5201)
Ejemplo: Ejecuta una prueba de 30 segundos con 4 flujos paralelos:
```
iperf3 -c <dirección_ip_servidor> -t 30 -P 4
```

**Verifica los Resultados**
Después de que la prueba se complete, `iperf3` te mostrará el ancho de banda, el jitter y la pérdida de paquetes entre los dos dispositivos.
Esta es una guía básica para comenzar con `iperf3` para pruebas de rendimiento de la red. ¡Ajusta los parámetros según tus necesidades específicas!
Con esta compatibilidad y las herramientas recomendadas para la prueba de velocidad, podrás aprovechar al máximo tu configuración de ZimaCube. Si tienes más preguntas o comentarios, no dudes en ponerte en contacto con nuestra comunidad o equipo de soporte.