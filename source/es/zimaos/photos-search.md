---
title: Buscar en Photos sin GPU
seo_title: "Búsqueda en ZimaOS Photos: encuentra objetos y texto sin GPU"
description: "Encuentra fotos por objetos o texto con ZimaOS Photos, incluso sin GPU. Consulta el estado de preparación, prueba la búsqueda de objetos y OCR y descubre las 80 categorías de objetos compatibles."
type: Docs
author: Vicky
tip: Do not remove this front matter block. The description field is used for the article summary; if left empty, the first paragraph will be used instead.
---

En [Photos](./photos), introduce el nombre de un objeto que aparezca en una foto o el texto de una imagen para encontrar fotos relacionadas. **Puedes usar estas búsquedas aunque tu dispositivo no tenga GPU.**

Al usar Photos en ZimaOS, el sistema descarga automáticamente en segundo plano los modelos necesarios para reconocer objetos y texto. Ambos tipos de reconocimiento se ejecutan localmente en tu dispositivo. Mantén el dispositivo conectado a Internet mientras se descargan los modelos necesarios.

Después de añadir fotos a la biblioteca, Photos analiza automáticamente los objetos y el texto que contienen y crea un índice de búsqueda. Una vez completado el análisis correspondiente, puedes buscar por el contenido que se describe a continuación sin recordar nombres de archivo ni fechas.

Consulta el progreso del procesamiento en **Ajustes → Búsqueda → Estado de preparación de la búsqueda**. El análisis del contenido puede continuar después de finalizar la importación de fotos.

El análisis se realiza gradualmente en segundo plano. Las fotos cuyo reconocimiento e indexación correspondientes ya hayan terminado pueden aparecer en los resultados antes de que se procese toda la biblioteca. Las búsquedas de objetos y texto descritas aquí no requieren activar la **Comprensión visual profunda**, ni es necesario esperar a que termine su procesamiento.

![Ajustes de búsqueda de Photos con el progreso de preparación y la opción de comprensión visual profunda](/images/guides/photos-search-readiness.webp)

Los ajustes de búsqueda muestran el progreso del procesamiento y la opción de comprensión visual profunda. Esta opción utiliza una GPU; las búsquedas básicas de objetos y texto funcionan sin activarla.

## Si recuerdas qué había en la foto

Introduce el nombre del objeto en el cuadro de búsqueda. Photos encuentra imágenes en las que se haya reconocido ese tipo de objeto.

- Para encontrar fotos de gatos, busca **gato**.
- Para encontrar una tarta que hayas fotografiado, busca **tarta**.
- Para encontrar fotos que contengan una maleta, busca **maleta**.

Puedes buscar animales comunes, vehículos, alimentos, muebles y objetos cotidianos, como perros, bicicletas, pizza, sofás y teléfonos.

Empieza por el nombre de un objeto concreto. Por ejemplo, para encontrar la foto de una tarta de cumpleaños, prueba primero con **tarta**.

![Photos mostrando resultados de búsqueda con tartas](/images/guides/photos-search-objects.webp)

## Si recuerdas qué ponía en la imagen

Puedes encontrar capturas de pantalla, recibos, menús, letreros y documentos fotografiados mediante el texto reconocido en ellos.

- Para encontrar un recibo, busca el **nombre de la tienda** impreso en él.
- Para encontrar una captura de un anuncio de un evento, busca el **nombre del evento**.
- Para encontrar un menú que hayas fotografiado, busca **桂花拿铁** (latte de osmanto) si esas palabras aparecen en él.

Introduce unos pocos caracteres que aparezcan realmente en la imagen. El reconocimiento admite caracteres chinos comunes, inglés y números. Elegir un texto distintivo ayuda a acotar los resultados.

![Demostración animada de cómo encontrar imágenes por su texto reconocido en Photos](/images/guides/photos-search-text.webp)

## Antes de buscar

Después de añadir fotos a la biblioteca, Photos analiza su contenido visual y su texto en segundo plano. **Las fotos nuevas deben completar el análisis correspondiente antes de que puedas encontrarlas por ese contenido.**

Los objetos demasiado pequeños u ocultos y el texto borroso o con reflejos pueden ser más difíciles de reconocer. Si no aparecen resultados, prueba otro nombre de objeto u otro fragmento de texto de la imagen.

Este artículo trata sobre el reconocimiento de objetos comunes y de texto en imágenes. Estas funciones no identifican a personas o mascotas por su nombre a partir de su aspecto, ni interpretan descripciones complejas de acciones o emociones. Si un nombre aparece como texto en la imagen, puedes intentar buscar ese texto.

## Cobertura completa del reconocimiento

El reconocimiento básico de objetos de Photos abarca las siguientes **80 categorías**. Úsalas como pistas para buscar fotos.

| Grupo | Objetos reconocidos |
|---|---|
| Personas | Persona |
| Animales | Pájaro, gato, perro, caballo, oveja, vaca, elefante, oso, cebra, jirafa |
| Vehículos | Bicicleta, coche, motocicleta, avión, autobús, tren, camión, barco |
| Objetos de la calle | Semáforo, boca de incendios, señal de stop, parquímetro, banco |
| Objetos personales | Mochila, paraguas, bolso, corbata, maleta |
| Material deportivo | Frisbi, esquís, tabla de snowboard, pelota deportiva, cometa, bate de béisbol, guante de béisbol, monopatín, tabla de surf, raqueta de tenis |
| Vajilla y recipientes | Botella, copa de vino, taza, tenedor, cuchillo, cuchara, cuenco |
| Alimentos | Plátano, manzana, sándwich, naranja, brócoli, zanahoria, perrito caliente, pizza, dónut, tarta |
| Muebles y hogar | Silla, sofá, planta en maceta, cama, mesa de comedor, inodoro |
| Electrónica | Televisor, portátil, ratón, mando a distancia, teclado, teléfono |
| Equipamiento de cocina | Microondas, horno, tostadora, fregadero, frigorífico |
| Otros objetos cotidianos | Libro, reloj, jarrón, tijeras, oso de peluche, secador de pelo, cepillo de dientes |

Se trata de categorías de objetos. Por ejemplo, **pelota deportiva** no significa que Photos distinga todos los tipos de pelota, y **planta en maceta** no significa que identifique especies de plantas.

¿Qué más puedes buscar en dispositivos que cumplan los requisitos de hardware de la comprensión visual profunda? Lo explicaremos en otro artículo.
