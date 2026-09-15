---
title: "Presentamos libvirt-go: una API de libvirt para Go sin Cgo"
seo_title: "Presentamos libvirt-go: una API de libvirt sin Cgo"
description: "Descubre libvirt-go, un binding experimental basado en purego que surgió del trabajo de ingeniería de ZVM para compilar sin cgo y acceder a libvirt teniendo en cuenta sus versiones."
type: Docs
author: Ns2Kracy
tip: No elimines este bloque de front matter. El campo description se utiliza para el resumen del artículo; si se deja vacío, se utilizará en su lugar el primer párrafo.
---

# Presentamos libvirt-go: una API de libvirt para Go sin Cgo

![Un sistema Zima que ejecuta ZVM junto a un terminal que muestra una compilación de Go con cgo desactivado.](/images/guides/libvirt-go-launch-hero.webp)

Hoy, ZimaSpace Engineering presenta [libvirt-go](https://github.com/Ns2Kracy/libvirt-go), una vista previa experimental para desarrolladores de un binding de Go para libvirt sin cgo, creado con purego. El proyecto surgió de nuestro trabajo en ZVM y de las necesidades prácticas de la virtualización en servidores domésticos, donde los usuarios crean y gestionan máquinas para cargas de trabajo como Home Assistant OS, Windows y pfSense. Publicamos ahora la biblioteca para que los desarrolladores de Go y libvirt puedan examinar el enfoque y ayudar a comprobar sus límites. libvirt-go no se incluye en ninguna versión publicada de ZimaOS. Sigue siendo un experimento independiente que pretendemos utilizar de forma gradual para mejorar el backend actual de ZVM.

## El problema al que me enfrenté al desarrollar ZVM

Mientras desarrollaba ZVM, necesitaba código Go para definir, iniciar, detener, inspeccionar y eliminar máquinas virtuales mediante libvirt. Estas operaciones permiten gestionar el ciclo de vida habitual de las VM de servidores domésticos, incluida la conexión del almacenamiento y la configuración de las interfaces de red. Quería que el backend cubriera una mayor parte de ese ciclo de vida sin dificultar la creación de compilaciones de lanzamiento.

El principal problema era la compilación cruzada con cgo. Quería que las compilaciones cruzadas de lanzamiento se ejecutaran con `CGO_ENABLED=0`, lo que excluye el código cgo de la compilación. Un binding basado en cgo requiere más que un compilador de Go cuando un desarrollador compila ZVM para otro destino. La máquina de compilación también necesita las cabeceras de desarrollo de libvirt, metadatos de pkg-config que apunten a ellas y un compilador de C funcional para la plataforma de destino. Cada dependencia añade suposiciones sobre el host y el destino a un proceso de lanzamiento que debería producir binarios de Go coherentes.

También tenía que tener en cuenta la versión de libvirt instalada en cada sistema de destino. Una máquina puede exponer un símbolo o una API que no exista en una instalación anterior. Las comprobaciones en tiempo de compilación con un conjunto concreto de cabeceras no pueden describir todos los entornos de ejecución que necesitamos gestionar. Por tanto, la API de Go necesita una cobertura deliberada, conocimiento de las versiones en tiempo de ejecución y un comportamiento claro cuando una función no está disponible. La propiedad de los recursos también importa: los identificadores de VM, conexiones y callbacks necesitan reglas de liberación explícitas para que las operaciones prolongadas del ciclo de vida no filtren recursos nativos.

Esa experiencia me llevó a crear libvirt-go con purego, cargando libvirt de forma dinámica y llamándolo sin cgo. Lo inicié como un experimento independiente inspirado en ZVM y pretendo adoptar de forma gradual las partes que resulten útiles en el backend existente después de probarlas. Hoy, ninguna versión publicada de ZimaOS incluye esta integración.

## ¿Por qué crear otro binding para Go?

Los bindings de Go existentes llevan años dando servicio a los usuarios de libvirt y a los proyectos de virtualización en Go. libvirt-go sigue una vía diferente para resolver un conjunto concreto de restricciones que encontré mientras trabajaba en ZVM. Las compilaciones de aplicaciones deben funcionar con `CGO_ENABLED=0`, de modo que el entorno de compilación no necesite las cabeceras de libvirt, `pkg-config` ni un compilador de C para la plataforma de destino. Esto facilita mantener la compilación cruzada dentro de un proceso de lanzamiento centrado en Go.

El binario resultante sigue accediendo a la biblioteca compartida nativa de libvirt dentro del proceso. No hay ningún servicio auxiliar ni protocolo independiente entre la aplicación Go y libvirt. El proyecto genera una API de bajo nivel amplia a partir de los metadatos upstream de libvirt y después añade wrappers escritos a mano y conscientes de la propiedad para los identificadores de recursos y los valores que necesitan ciclos de vida más seguros en Go.

El descubrimiento de símbolos en tiempo de ejecución es otro objetivo central. Una instalación de libvirt puede ser anterior a los metadatos utilizados para la generación, mientras que una distribución puede incorporar de forma retroactiva determinadas funciones más recientes. libvirt-go comprueba los símbolos que están presentes en realidad, lo que permite a quienes llaman a la API gestionar de forma explícita las operaciones no disponibles, en lugar de asumir que una versión utilizada durante la compilación describe todos los destinos. Esta combinación encaja con las restricciones de compilación cruzada y despliegue de ZVM. También puede resultar adecuada para otros proyectos de Go que necesiten compilaciones sin cgo, acceso a libvirt dentro del proceso y una compatibilidad deliberada entre distintas instalaciones de Linux.

## Cómo funciona libvirt-go

libvirt-go cuenta con una capa de bajo nivel generada y una capa de alto nivel escrita a mano. En tiempo de ejecución, `purego` abre la biblioteca compartida nativa de libvirt y vincula los símbolos de C a funciones que Go puede llamar. Esto mantiene cgo fuera de la compilación de la aplicación, mientras libvirt continúa ejecutándose en el mismo proceso. Por tanto, la máquina que ejecuta el programa sigue necesitando una biblioteca compartida de libvirt compatible.

![Arquitectura de libvirt-go desde una aplicación Go, pasando por los wrappers de alto nivel, los bindings de RawAPI generados y purego, hasta las bibliotecas nativas de libvirt.](/images/guides/libvirt-go-architecture.webp)

El generador lee los metadatos XML de la API oficial de libvirt 12.6.0 incluidos en este repositorio. En las API principal, de administración, QEMU y LXC, esos metadatos producen exactamente 568 funciones y 1.093 enumeraciones. La superficie generada expone métodos públicos `RawAPI` con tipos adecuados para `purego`. Su catálogo también registra el enrutamiento de las bibliotecas de origen, por lo que cada función se busca en la biblioteca principal de libvirt o en su biblioteca de extensión de administración, QEMU o LXC. Los datos generados de registro de símbolos conectan los nombres con los destinos de las llamadas, y las versiones de introducción registran cuándo añadió libvirt originalmente cada función. La ausencia de bibliotecas de extensión afecta a sus propios símbolos sin impedir que se cargue la biblioteca principal.

La generación aporta amplitud, mientras que los wrappers escritos a mano aportan reglas de comportamiento que las declaraciones XML no pueden expresar por sí solas. Estos wrappers controlan la propiedad de las conexiones, los dominios, los streams y otros identificadores nativos. Copian los valores de retorno asignados en datos de Go y liberan las asignaciones nativas cuando es necesario. También conservan los valores de Go durante el tiempo que necesitan las llamadas nativas, gestionan el registro y la limpieza de callbacks y convierten los registros de errores locales de cada hilo de libvirt en errores estructurados de Go. Estos detalles son importantes porque una llamada correcta puede transferir una referencia, devolver memoria que debe liberarse o registrar trabajo que continúa activo después de que termine la llamada.

La compatibilidad se muestra a quienes llaman a la API en lugar de ocultarse en el cargador. `HasSymbol` indica si las bibliotecas cargadas exportan una función generada. `SymbolVersion` indica la versión de libvirt en la que se introdujo un símbolo conocido. Cuando una función solicitada no está presente, las llamadas raw generadas y las llamadas de alto nivel devuelven un `SymbolUnavailableError`. Ese error encapsula `ErrSymbolUnavailable`, por lo que la inspección normal de errores de Go puede reconocer la condición común y conservar al mismo tiempo el nombre del símbolo y la versión en la que se introdujo.

Este modelo símbolo por símbolo admite instalaciones antiguas de libvirt y funciones incorporadas de forma retroactiva por las distribuciones. Se basa en lo que exporta la biblioteca durante la ejecución en lugar de tratar su versión numérica como una lista completa de capacidades. `RawAPI` sigue disponible para operaciones especializadas que no cuentan con un wrapper de alto nivel, pero quienes usen llamadas raw conservan la responsabilidad sobre los centinelas de fallo de C, la propiedad nativa y la gestión de errores locales de cada hilo. La capa de alto nivel es el punto de partida más seguro para el código de las aplicaciones.

## Pruébalo

El ejemplo del repositorio abre la URI `test:///default` de libvirt en modo de solo lectura y enumera sus dominios:

<!-- markdownlint-disable MD010 -->
```go
package main

import (
	"fmt"
	"log"

	libvirt "github.com/Ns2Kracy/libvirt-go"
)

func main() {
	conn, err := libvirt.NewConnectReadOnly("test:///default")
	if err != nil {
		log.Fatal(err)
	}
	defer func() {
		if _, err := conn.Close(); err != nil {
			log.Printf("close connection: %v", err)
		}
	}()

	domains, err := conn.ListAllDomains(0)
	if err != nil {
		log.Fatal(err)
	}
	for _, domain := range domains {
		name, nameErr := domain.GetName()
		if err := domain.Free(); err != nil {
			log.Printf("free domain: %v", err)
		}
		if nameErr != nil {
			log.Fatal(nameErr)
		}
		fmt.Println(name)
	}
}
```
<!-- markdownlint-enable MD010 -->

Desde la raíz del repositorio, ejecuta el ejemplo con cgo desactivado en una máquina
Linux compatible que tenga libvirt instalado:

```sh
CGO_ENABLED=0 go run ./examples/list-domains
```

`test:///default` es el controlador de pruebas sintéticas de libvirt. Proporciona recursos de ejemplo y no modifica invitados reales. La compilación no necesita archivos de desarrollo de libvirt. El programa sigue necesitando una biblioteca compartida de libvirt compatible durante la ejecución.

## Límites actuales y validación

libvirt-go sigue siendo experimental y no se recomienda para cargas de trabajo de producción. Linux amd64 es la única plataforma probada y compatible en tiempo de ejecución. Linux arm64 solo se comprueba mediante compilación. Este proyecto no ha probado las rutas del cargador para macOS, FreeBSD y NetBSD, que siguen sin ser compatibles.

Se necesita una biblioteca compartida nativa de libvirt compatible durante la ejecución. Eliminar cgo de la compilación de la aplicación elimina la dependencia de la cadena de herramientas de C durante la compilación; no sustituye a libvirt. Las aplicaciones deben cerrar las conexiones y liberar de forma explícita los recursos devueltos según las reglas de propiedad de cada API. Quienes usen `RawAPI` también deben reconocer los centinelas de fallo nativos y recuperar los errores locales de cada hilo de libvirt en el mismo hilo del sistema operativo. No se ha validado ningún entorno de producción con libvirt/QEMU/KVM.

Las evidencias aportadas por las pruebas se mantienen separadas de estos límites de soporte. La CI automatizada ejecuta pruebas unitarias con cgo desactivado para el generador, los diseños ABI y las funciones auxiliares de gestión de la propiedad; pruebas de integración sintéticas con `test:///default` en Ubuntu 22.04 y 24.04; además de comprobaciones de condiciones de carrera y del código generado. Una tarea condicionada de integración real inicia un daemon QEMU/libvirt aislado en un runner efímero de Ubuntu y prueba recursos desechables, callbacks del ciclo de vida de los invitados y la limpieza. Las comprobaciones de compatibilidad abarcan diferentes entornos de ejecución de libvirt empaquetados y el comportamiento ante símbolos ausentes. Govulncheck y CodeQL añaden análisis de seguridad de las dependencias y el código.

Estas comprobaciones aportan datos útiles sobre el comportamiento de la API y el aislamiento de las pruebas. No demuestran su fiabilidad durante transferencias de almacenamiento, streams, carga de callbacks ni cambios continuos y prolongados en los invitados en entornos de producción.

## Próximos pasos

Una de las vías previstas consiste en utilizar libvirt-go para mejorar de forma gradual el backend actual de ZVM después de que cada parte demuestre su utilidad durante las pruebas. La biblioteca seguirá siendo un paquete independiente, disponible para otros proyectos de Go que necesiten acceso a libvirt dentro del proceso con compilaciones sin cgo. El trabajo a corto plazo se centra en ampliar los wrappers de alto nivel, probar los streams y callbacks bajo carga, reforzar la cobertura del ciclo de vida de los recursos, probar una matriz de compatibilidad más amplia entre versiones antiguas y nuevas de libvirt y hacer que Linux arm64 avance desde las comprobaciones de compilación hacia la validación en tiempo de ejecución. No se anuncia ninguna versión de ZimaOS, fecha de lanzamiento ni calendario de integración.

## Prueba la vista previa para desarrolladores

Prueba la [vista previa de libvirt-go para desarrolladores](https://github.com/Ns2Kracy/libvirt-go) y abre una [incidencia específica en GitHub](https://github.com/Ns2Kracy/libvirt-go/issues) cuando encuentres una carencia. Incluye tu distribución y arquitectura de Linux, la versión instalada de libvirt, el wrapper de alto nivel ausente o el símbolo no disponible y un ejemplo mínimo que reproduzca el problema.

Los informes sobre el comportamiento en versiones antiguas de libvirt y Linux arm64 resultan de especial utilidad. Para los errores de recursos, callbacks o streams, describe el orden de limpieza e indica si el problema se reproduce con `test:///default` o con un daemon real. Agradecemos las contribuciones. Si quieres añadir un wrapper que falta, empieza por una incidencia que indique la función de libvirt subyacente y el comportamiento de propiedad, de modo que la implementación y las pruebas puedan revisarse conjuntamente.
