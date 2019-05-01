# candidates_Frontend

Technical test for frontend candidates

## Observaciones y conclusiones

* La carga paginada junto al inifinite-scroll es la opción más óptima respecto a eficiencia, pero para que el filtro busque por nombre (o contenido del mismo) entre todos los Pokemon, es necesario cargar todos los Pokemon en la carga inicial. En el API no he encontrado ningún método del tipo `getAll()` o `getByName(searchText)`, y como la carga de la lista solo devuelve el nombre y la url para listarlos, no es tan mala idea cargar todos los registros.
* Respecto a la estructura del proyecto, habría utilizado la home como pantalla de carga mientras se obtienen todos los resigstros, y habría generado un módulo con lazyLoading que relacionara el componente padre "pokemon-lista" con su componente hijo "pokemon-detalle".
* Otra opción, habría sido mostrar el detalle de los pokemon en un modal y así traspasar el nombre y el ID del Pokemon mediante @Input. Pero al tener que hacer una nueva petición para los datos del Pokemon (porque para el listado solo se obtienen nombre y url), es indiferente.

## Enunciado

Mediante el uso del API https://pokeapi.co/ necesitamos generar una app que mostrará un listado de Pokémon con los siguientes requerimientos:

Listado de Pokémon.

Nuestros usuarios se dirigen a nuestra pagina Home desde donde se podrán visualizar, en modo lista, los diferentes Pokémon que devuelva el API. A su vez, cada elemento de la lista permitirá la navegación al detalle del ítem seleccionado. En el header, habilitaremos un buscador, y sólo disponible en la pagina Home, que buscará y filtrará la lista por nombre.

![ Imagen de la lista ](https://github.com/BaturaMobile/candidates_Frontend_1903437/blob/master/imagenes/pokedex.png)
![ Imagen de la lista filtrada ](https://github.com/BaturaMobile/candidates_Frontend_1903437/blob/master/imagenes/pokedex-filtrada.png)

Detalle de Pokémon seleccionado.

La sección de detalle, usando como parámetro el id del ítem seleccionado previamente, y utilizando el API, mostrará el detalle en formato card. Necesitamos incluir un botón atrás que nos lleve a la home para optimizar la navegación, y en el header queremos mostrar el nombre del ítem seleccionado.

-    El contenido del detalle no es tan importante, lo que nos interesa es la funcionalidad.

-    Aún así, si valoraremos mucho como gestionáis y mostráis en pantalla los datos que obtenéis. Dejamos la creatividad de vuestro lado.

![ Detalle del Pokemon ](https://github.com/BaturaMobile/candidates_Frontend_1903437/blob/master/imagenes/pokemon-detalle.png)
![ Estadísticas del Pokemon ](https://github.com/BaturaMobile/candidates_Frontend_1903437/blob/master/imagenes/pokemon-stats.png)

** Necesitamos

* Puedes usar tantos HTMLs como CSSs o JSs que necesites, y que consideres necesarios para el desarrollo de la prueba.

* Queremos un buen uso del API. Limpio y estructurado, por ello deberéis generar los modelos que necesitéis y sólo con la información que necesitéis.
  **Se han creado modelos para clases e interfaces en la carpeta /models.**

* Uso de componentes web.

* Mediante un archivo de lenguaje local (con un único idioma es suficiente) establecer todos los textos de la app dinámicos.
  **Existen traducciones para los idiomas: Español (ES) e Inglés (EN).**

* App Responsive.

* Os facilitamos unos colores básicos para que apliquéis en la app. 
  **Se han creado variables en los estilos globales y se han utilizado en algunos elementos, siempre respetando el diseño adecuado de las interfaces.**
        * Primary: #2962FF (header, botones, enlaces…)
        * Seconday: #0039cb (background de cards, toolbars secundarias…)
        * Dark: #263238 (Para los textos de la app)
   
* También os facilitamos el tipo de fuente (Montserrat) que queremos aplicar en la app en sus 3 estilos. Regular, Light y Bold.
  **Se ha aplicado como @font-family por defecto.**
        * El valor por defecto será regular con un tamaño de 15px.
        * El texto del header tendrá un tamaño proporcional de 125% respecto al valor por defecto establecido en la app.
        * El texto de los títulos (El nombre del Pokémon por ejemplo) será Bold y tendrá un tamaño del 150% respecto al valor por defecto establecido en la app.

** Level up!
* Que los estilos vengan proporcionados por un precompilador de CSS.
  **Se han utilizado variables SCSS/CSS4 como estilos globales proporcionados por Batura, declarandolos en theme/variables.scss.**
  
* Código desacoplado.
  **Se ha creado un modulo para cargar el detalle del Pokemon y otro (SharedModule) para los servicios compartidos, con utilidades generales, accesibles para toda la aplicación.**
  
* Código escalable.
  **Se han diseñado funciones (con parámetros opcionales) y variables (tipadas con interfaces y clases en la carpeta /models, enumerados exportables, etc.) para facilitar la escalabilidad de la app.**
  
* Código mantenible.
  **Todas las funciones, modelos y la mayoría de las variables estan comentadas con comentatios tipo @JavaDoc para entender su funcionamiento, parametros de entrada/salida, opciones...**
  
* Generar una app (no es necesaria su compilación) en iOnic v4.
  **Se ha debuggeado la app mediante el emulador de Android Studio.**
  
* Usar elementos Ionic para generar los headers, buttons, lists…de tal forma que la app se vea de forma nativa en Android e iOS.
  **Todos los elementos son componentes de `<ionic>` en la v4.**
