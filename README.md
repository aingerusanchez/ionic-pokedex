# Pokedex

Tu propia Pokedex en tu smartphone!
App híbrida desarrollada en Ionic v4 y utilizando la API https://pokeapi.co/ 

![ Imagen de la lista ](https://github.com/Aingeru72/ionic-pokedex/blob/master/imagenes/pokedex.png)
![ Detalle del Pokémon ](https://github.com/Aingeru72/ionic-pokedex/blob/master/imagenes/pokemon-detalle.png)
![ Estadísticas del Pokémon ](https://github.com/Aingeru72/ionic-pokedex/blob/master/imagenes/pokemon-stats.png)

# Instalar

1. Clonar el respositorio y abrirlo en tu IDE favorito (recomiendo VS Code).
2. Ejecutar `npm install` en el directorio raiz para crear la carpeta `node_modules` e instalar las dependecias.
3. Ejecutar `ionic serve` parar abrirlo en el navegador (utilizar las herramientas de desarrollo para emular un dispositivo móvil).

   3.1 Ionic proporciona una app [Ionic DevApp](https://ionicframework.com/docs/appflow/devapp "Ionic DevApp") (Android e iOS) que facilita las pruebas de las apps, simplemente ejecutando `ionic serve` y abriendo la app en un dispositivo compatible conectado a la misma red wifi que la maquina que la sirve.  
4. Para instalar la app en un dispositivo o emulador, seguir la documentación de Ionic:

   4.1 [Instalar en dispositivo Android](https://ionicframework.com/docs/building/android)

   4.2 [Instalar en dispositivo iOS](https://ionicframework.com/docs/building/ios)  
   
# Historial

## Versión 0.1.1

### Funcionalidades

* **Menú:** Menú lateral (sidenav/drawer)

### Arreglos

* **Build:** config.xml restaurado

## Versión 0.1.0

### Funcionalidades

* **Pokedex:** Se puede buscar por nombre en la barra superior de la lista.
* **Pokedex:** Se puede navegar al inicio/fin de la lista mediante botones.
* **Idioma:** Existen traducciones para varios idiomas que dependen del idioma del dispositivo: 
    * Español (ES)
    * Inglés (EN)
* **Pokemon:** Se puede navegar entre Pokémons con las flechas laterales del nombre del Pokemon.

## Proximos pasos...

* **Pokemon:** Navegar entre Pokémon deslizando con gestos.
* **Idioma:** Cambiar de idioma desde el menú superior.
