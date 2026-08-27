---
title: Ampliación RAID con SSD en ZimaCube
description: "Añade SSD a ZimaCube para utilizarlos como caché RAID o como grupos de almacenamiento rápidos. Incluye la instalación de SSD M.2 NVMe y SATA, la configuración de RAID en ZimaOS y la optimización del rendimiento."
type: Docs
author: Lauren Pan
tip: No elimines este bloque de Front Matter. El campo description se utiliza como resumen del artículo; si se deja vacío, se utilizará el primer párrafo.
---

Además de sus seis bahías para HDD, ZimaCube admite hasta cuatro SSD internos. Puedes utilizarlos como caché RAID para acelerar el acceso a los HDD o crear un grupo de almacenamiento rápido dedicado a aplicaciones que necesiten baja latencia.

## Dónde instalar los SSD

ZimaCube dispone de dos tipos de ranuras para SSD dentro del chasis:

- **4 ranuras M.2 NVMe** (PCIe 3.0 x4) en la placa base, compatibles con unidades NVMe de tamaño 2280.
- **2 bahías para SSD SATA de 2,5 pulgadas**, accesibles desde la parte frontal después de retirar las bandejas de las unidades.

Las ranuras M.2 son la mejor opción para las unidades de caché, ya que NVMe ofrece una latencia muy inferior a SATA. Las bahías de 2,5 pulgadas resultan adecuadas para crear un grupo rápido de almacenamiento de gran capacidad.

## Instalar SSD M.2 NVMe

Antes de empezar, apaga ZimaCube y desconecta el cable de alimentación.

1. Desatornilla los tornillos manuales de la parte trasera, desliza el panel hacia atrás y retira la cubierta superior.
2. Localiza las dos ranuras M.2 de la placa base. Se encuentran entre el disipador de la CPU y la ranura de expansión PCIe.
3. Introduce la unidad M.2 en la ranura con un ángulo de 30 grados y presiónala después contra el separador hasta dejarla plana.
4. Fija la unidad con el pequeño tornillo incluido con el SSD o con el tornillo instalado previamente en el separador.
5. Vuelve a colocar la cubierta superior.

Después del arranque, las unidades deberían aparecer en ZimaOS, en Storage > Disks. Si una unidad no aparece, comprueba que esté completamente insertada en la ranura.

## Instalar SSD SATA de 2,5 pulgadas

1. Extrae una de las bandejas vacías de la parte frontal de ZimaCube.
2. Monta el SSD de 2,5 pulgadas en la bandeja con los cuatro tornillos incluidos con ZimaCube.
3. Desliza la bandeja de nuevo en la bahía hasta que encaje.
4. La unidad aparecerá automáticamente en ZimaOS.

## Configurar RAID con SSD

Después de instalar los SSD, puedes configurar RAID desde la interfaz web de ZimaOS:

1. Abre **Storage > RAID**.
2. Selecciona las unidades que quieres incluir en el conjunto. Puedes combinar SSD y HDD, pero, para obtener el mejor rendimiento, mantén los SSD en un conjunto independiente.
3. Elige un nivel RAID. Con SSD, RAID 0 ofrece el máximo rendimiento, pero no proporciona redundancia; RAID 1 duplica los datos en dos unidades para aumentar la seguridad.
4. Haz clic en **Create** y espera a que se construya el conjunto. Con unidades de gran capacidad, el proceso puede tardar varios minutos.

Para obtener más información sobre las opciones disponibles, consulta el **[Resumen de las opciones de RAID](../zimaos/raid-options)**.

## Utilizar SSD como caché

Si los HDD son el almacenamiento principal, puedes utilizar un SSD como caché de lectura y escritura para acelerar los archivos a los que accedes con frecuencia. En ZimaOS, la caché se configura por carpeta compartida:

1. Abre **Storage > Shared Folders**.
2. Selecciona una carpeta y haz clic en **Edit**.
3. En **Cache**, elige el SSD en el menú desplegable.
4. Define el modo de caché: writeback para obtener el máximo rendimiento o writethrough para priorizar la seguridad de los datos.
5. Haz clic en **Save**.

Un único SSD NVMe de 256 GB es suficiente como caché para la mayoría de los usos domésticos de un NAS. Para una configuración con varios usuarios y archivos multimedia de gran tamaño, considera una unidad de caché de 512 GB o 1 TB.

## Comprobar el estado de las unidades

Los SSD admiten un número limitado de ciclos de escritura. ZimaOS muestra la información de estado en **Storage > Disks > [select drive] > Health**. Revísala periódicamente; si el nivel de desgaste se acerca al 80 %, planifica la sustitución de la unidad.
