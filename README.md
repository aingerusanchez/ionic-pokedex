# Pokedex

Tu propia Pokedex en tu smartphone!
App híbrida desarrollada en Ionic v4 y utilizando la API https://pokeapi.co/ 

![ Imagen de la lista ](https://github.com/Aingeru72/ionic-pokedex/blob/master/screenshots/pokedex.png)
![ Detalle del Pokémon ](https://github.com/Aingeru72/ionic-pokedex/blob/master/screenshots/pokemon-detalle.png)
![ Estadísticas del Pokémon ](https://github.com/Aingeru72/ionic-pokedex/blob/master/screenshots/pokemon-stats.png)

## Índice

- [Capturar](#obtener-pokedex)
- [Evoluciones](#evoluciones)
  - [Proximos movimientos](#futuras-habilidades)
- [Licencia de entrenador](#license)

# Obtener Pokedex

0. Prepara la mochila:

   0.1. [Descargar NODE](https://nodejs.org/)
   
   0.2. Instalar globalmente Ionic CLI: `npm install -g ionic`.
1. Pasa por la tienda para prepararte: Clona este repositorio en local con `git clone https://github.com/Aingeru72/ionic-pokedex.git`.
2. Ve al laboratorio para escoger tu 1º Pokémon: Ejecuta `npm install` en el directorio raiz para crear la carpeta `node_modules` e instalar las dependecias.
3. Comienza tu 1º combate: Ejecuta `ionic serve` en la raiz del proyecto parar abrirlo en el navegador (puedes utilizar las [herramientas de desarrollo](https://developers.google.com/web/tools/chrome-devtools/) pulsando F12 para emular un dispositivo móvil).

   3.1 Ionic proporciona la app [Ionic DevApp](https://ionicframework.com/docs/appflow/devapp "Ionic DevApp") (Android e iOS) para poder ejecutar la app en tu smarphone, simplemente debes ejecutar `ionic serve --devapp` y abrir Ionic DevApp en un dispositivo compatible conectado a la misma red WiFi.  
4. Lanzate a la aventura: instala la app en un dispositivo o emulador, siguiendo la documentación de Ionic:

   4.1 [Instalar en dispositivo Android](https://ionicframework.com/docs/building/android)

   4.2 [Instalar en dispositivo iOS](https://ionicframework.com/docs/building/ios) 
   
# Evoluciones

## Versión 0.0.2

### MT

* **Menú:** Menú lateral (sidenav/drawer)

### MO

* **Build:** config.xml restaurado

## Versión 0.0.1

### MT

* **Pokedex:** Se puede buscar por nombre en la barra superior de la lista.
* **Pokedex:** Se puede navegar al inicio/fin de la lista mediante botones.
* **Idioma:** Existen traducciones para varios idiomas que dependen del idioma del dispositivo: 
    * Español (ES)
    * Inglés (EN)
* **Pokemon:** Se puede navegar entre Pokémons con las flechas laterales del nombre del Pokemon.

## Futuras habilidades...

* **Pokemon:** Navegar entre Pokémon deslizando con gestos.
* **Idioma:** Cambiar de idioma desde el menú superior.

# LICENSE

[MIT License](https://github.com/Aingeru72/ionic-pokedex/blob/master/LICENSE) 
