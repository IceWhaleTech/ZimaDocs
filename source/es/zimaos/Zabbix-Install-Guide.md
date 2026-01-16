---

title: Guía de instalación de Zabbix para ZimaOS  
description: Convierte tu dispositivo ZimaOS en un potente servidor de monitoreo centralizado para toda tu red.  
type: Docs  
author: icewhale123456  
tip: La barra superior con formato fijo no debe eliminarse, "description" es la descripción del artículo. Si no se llena, se tomará el primer párrafo del contenido como descripción.  

---

## Información de la versión

- **Versión de Zabbix:** 7.0 LTS  
- **Versión de la guía:** 1.8  
- **Última actualización:** Enero 2026  
- **Probado en:** ZimaOS (basado en Buildroot)  
- **Creado por:** Holger Kuehn aka Lintuxer

---

## ¿Por qué usar ZimaOS como tu plataforma de monitoreo?

Los dispositivos ZimaOS (ZimaBoard, ZimaCube) son candidatos ideales para ejecutar el monitoreo de Zabbix:

| Ventaja        | Descripción                                                                 |
|----------------|-----------------------------------------------------------------------------|
| **Siempre encendido** | Bajo consumo de energía, diseñado para funcionamiento 24/7.        |
| **Compacto**   | Tamaño reducido, cabe en cualquier lugar de tu red.                           |
| **Nativo de Docker** | Perfecto para servicios en contenedores como Zabbix.                   |
| **Económico**  | No es necesario hardware dedicado para servidores.                          |
| **Silencioso** | Operación sin ventiladores o muy silenciosa.                                 |

En lugar de dedicar un servidor caro al monitoreo, tu dispositivo ZimaOS puede servir como un centro de monitoreo que supervise:

- **Servidores Windows** – Controladores de dominio, servidores de archivos, servidores de aplicaciones.
- **Servidores Linux** – Servidores web, bases de datos, hosts de Docker.
- **Dispositivos de red** – Switches, routers, puntos de acceso (a través de SNMP).
- **IoT y hogar inteligente** – Cualquier dispositivo con conectividad de red.
- **El propio dispositivo ZimaOS** – Monitoreo completo del sistema.

## Visión general

Esta guía cubre:
- Despliegue del servidor Zabbix en ZimaOS como tu plataforma central de monitoreo.
- Configuración de red para la comunicación de contenedores Docker.
- Monitoreo del host ZimaOS.
- Adición de servidores Windows al monitoreo (incluyendo entornos aislados por VLAN).
- Adición de servidores Linux y otros dispositivos de red.
- Respaldo, restauración y mantenimiento actualizado de Zabbix.

## Ejemplo de caso de uso

```
                         ┌─────────────────────────────┐
                         │        Dispositivo ZimaOS   │
                         │    (Plataforma de Monitoreo)│
                         │                             │
                         │  ┌───────────────────────┐  │
                         │  │   Servidor Zabbix     │  │
                         │  │   + Interfaz Web      │  │
                         │  │   + PostgreSQL        │  │
                         │  └───────────────────────┘  │
                         └──────────────┬──────────────┘
                                        │
            ┌───────────────────────────┼───────────────────────────┐
            │                           │                           │
            ▼                           ▼                           ▼
   ┌─────────────────┐        ┌─────────────────┐        ┌─────────────────┐
   │ Servidor Windows│        │  Servidor Linux │        │ Dispositivos de │
   │ (Agente Activo) │        │ (Agente Activo) │        │     Red         │
   │                 │        │                 │        │                 │
   │ • Servidor de   │        │ • Servidor Web  │        │ • Switch UniFi  │
   │   Archivos     │        │ • Host Docker   │        │ • Puntos de     │
   │ • Controlador  │        │ • NAS           │        │   acceso        │
   │   de Dominio   │        │                 │        │ • Router        │
   │ • Servidor SQL │        └─────────────────┘        └─────────────────┘
   └─────────────────┘        
```

**Modo activo para redes aisladas por VLAN:** Los agentes se conectan de manera saliente a Zabbix, no se necesitan reglas de firewall entrantes en tus VLANs aseguradas.

## Requisitos previos

- ZimaOS instalado y en funcionamiento.
- Acceso SSH al dispositivo ZimaOS.
- Conocimiento básico de los conceptos de Docker.
- Acceso de red entre los objetivos de monitoreo y el servidor Zabbix.

## ¿Por qué instalar Zabbix con Docker en ZimaOS?

Existen dos formas principales de instalar Zabbix:

| Método           | Descripción                                                | Mejor para                     |
|------------------|------------------------------------------------------------|--------------------------------|
| **Tradicional**  | Instalar paquetes mediante apt/yum directamente en el sistema operativo. | Servidores Debian, Ubuntu, RHEL|
| **Docker**       | Ejecutar servicios como contenedores.                      | ZimaOS, entornos orientados a contenedores.|

**Para ZimaOS, Docker es la única opción práctica porque:**

1. **No hay gestor de paquetes** – ZimaOS utiliza Buildroot, que no incluye apt, yum ni herramientas similares.
2. **Sistema base inmutable** – ZimaOS está diseñado para permanecer sin cambios; las aplicaciones se ejecutan como contenedores.
3. **Actualizaciones fáciles** – Se descargan nuevas imágenes en lugar de realizar actualizaciones complejas de paquetes.
4. **Separación limpia** – Cada servicio está aislado, lo que facilita la creación de copias de seguridad/restauraciones mediante volúmenes.
5. **Nativo de ZimaOS** – CasaOS/ZimaOS está basado en Docker.

**Por qué el host predeterminado "Servidor Zabbix" no funciona:**

Las instalaciones tradicionales de Zabbix ejecutan el servidor y el agente en la misma máquina, por lo que `127.0.0.1:10050` apunta al agente local. En Docker, cada servicio se ejecuta en su propio contenedor aislado con su propio espacio de red. El `127.0.0.1` del contenedor del servidor apunta a sí mismo (donde no se ejecuta ningún agente), no al contenedor del agente. Por eso, eliminamos este host predeterminado y creamos uno nuevo que apunte a `zabbix-agent` a través de DNS de Docker.

## Arquitectura

```
┌─────────────────────────────────────────────────────┐
│              zabbix-net (Red de Docker)            │
│                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │
│  │  postgres   │  │zabbix-server│  │ zabbix-web  │  │
│  │  Puerto 5432│  │ Puerto 10051│  │  Puerto 8080│  │
│  │  (interno) │  │  (expuesto) │  │  (expuesto) │  │
│  └─────────────┘  └─────────────┘  └─────────────┘  │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
             ┌─────────────────────────┐
             │   Agentes de Zabbix     │
             │   - ZimaOS (contenedor) │
             │   - Windows (activo)    │
             │   - Linux (activo)      │
             └─────────────────────────┘
```

## Parte 1: Instalación del Servidor Zabbix

### Paso 1: Crear una red Docker

ZimaOS utiliza la red puente predeterminada de Docker, la cual **no soporta resolución DNS** entre contenedores. Debes crear una red personalizada.

```bash
sudo docker network create zabbix-net
```

### Paso 2: Desplegar la base de datos PostgreSQL

```bash
sudo docker run -d \
  --name zabbix-postgres \
  --network zabbix-net \
  --network-alias postgres \
  -e POSTGRES_USER=zabbix \
  -e POSTGRES_PASSWORD=zabbix \
  -e POSTGRES_DB=zabbix \
  -v zabbix-postgres-data:/var/lib/postgresql/data \
  --restart unless-stopped \
  postgres:15-alpine
```

**Importante:** El `--network-alias postgres` es crucial, ya que otros contenedores usarán este nombre de host para conectarse.

**Esperar a que PostgreSQL se inicialice:**

```bash
# Espera 15 segundos para la inicialización de la base de datos
sleep 15

# Verifica si PostgreSQL está corriendo
sudo docker logs zabbix-postgres 2>&1 | tail -5
```

Deberías ver: `el sistema de base de datos está listo para aceptar conexiones`

### Paso 3: Desplegar el Servidor Zabbix

```bash
sudo docker run -d \
  --name zabbix-server \
  --network zabbix-net \
  --network-alias zabbix-server \
  -e DB_SERVER_HOST=postgres \
  -e POSTGRES_USER=zabbix \
  -e POSTGRES_PASSWORD=zabbix \
