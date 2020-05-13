# PokeData

## Índice

* [1. Resúmen del proyecto](#1-resumen-del-proyecto)
* [2. Demo](#2-demo-del-proyecto)
* [3. Instalación de dependencias](#3-instalacion-de-dependencias)
* [4. Investigación y trabajo UX](#4-investigacion-y-trabajo-ux)
* [5. Checklist](#5-checklist)

## 1. Resúmen del proyecto
Pokedata es una plataforma web, basado en el juego [Pokémon GO](https://pokemongolive.com/es/), únicamente de los pokémon de la generación Kanto, que permite al usuario filtrar, ordenar las características de los pokémon y mostrarlas en pantalla.

## 2. Demo
_[Click para ver demo del proyecto en Gh-pages](https://nadiagincoff.github.io/SCL013-data-lovers/src/index.html)_

<!-- ## 3. Instalación de dependencias
	Aqui deberiamos poner lo necesario para que cualquier persona pueda utilizar nuestro repositorio, por ejemplo la instalacion de las dependencias (npm install) -->

## 4. Investigación y trabajo UX

### Definición de usuario
Teniendo en cuenta la cantidad de usuarios que tiene Pokémon GO, llegamos a la conclusión de que el usuario que usará esta aplicación web, es de nivel **intermedio**, ya conoce sobre el juego e ingresa a la plataforma para desarrollar sus habilidades como entrenador, para tener una guía para conocer las fortalezas y debilidades de sus pokémon, ordenarlos por su tipo y ponerlos en orden alfabético y numérico.

### Historias de usuario

#### Historia de usuario 1

>_"Yo como entrenador pokémon
>Quiero ver cuantos pokémon me faltan en mi pokédex
>Para eso, ingreso a la página y los ordeno alfabéticamente o numéricamente."_

##### Criterio de aceptación

* [x] El usuario puede ingresar a la página y ver todos los pokémon en pantalla.
* [x] El usuario puede ordenar los pokémon haciendo uso de un menú desplegable.
* [x] La página debe ser responsive.
* [x] Debe tener una interfaz que siga los fundamentos de visual design.

##### Definición de terminado.

* [x] El usuario puede ordenar las tarjetas pokémon seleccionando una opción (A-Z, Z-A, Ascendente, Descendente) en un menú desplegable.

#### Historia de usuario 2

>_"Yo como entrenador pokémon
>Quiero filtrar los pokémon por su tipo, por ejemplo fuego
>Para obtener todos los pokémon de dicho tipo."_

##### Criterio de aceptación

* [x] El usuario al entrar a la página y tener todos los pokémon en pantalla, puede  filtrar por tipo haciendo uso del menú desplegable.
* [x] Puede seleccionar la opcion que desee, _en este caso la opción fuego_
* [x] La página y sus opciones se pueden ver fácilmente desde cualquier dispositivo.

##### Definición de terminado.

* [x] El usuario puede observar los pokémon de tipo fuego con su nombre y su numeración.
* [x] El código cumple con la guía de estilos acordada.
* [x] El código esta en el repositorio.
* [x] El código tiene y pasa los test necesarios y se ha hecho en Visual Studio Code.
* [x] Esta historia ha sido testeada con 2 personas y se han incorporado las mejoras indicadas para su usabilidad.

#### Historia de usuario 3

>_"Yo como entrenador pokémon
>Quiero ver las debilidades que tiene cada pokémon a la hora del combate,
>Para tener cierta ventaja en el juego."_

##### Criterio de aceptación

* [x] El usuario al entrar a la página y tener todos los pokémones en pantalla, puede filtrar por debilidad haciendo uso del menú desplegable.
* [x] Puede seleccionar la opción que desea.
* [x] La página y sus opciones se ven fácilmente desde cualquier dispositivo.

##### Definición de terminado.

* [x] El usuario puede observar los pokémon por la debelidad que eligió con su nombre y su numeración.
* [x] El código cumple con la guía de estilos acordada.
* [x] El código está en el repositorio.
* [x] El código tiene y pasa los test necesarios y se ha hecho en Visual Studio Code.
* [x] Esta historia ha sido testeada con 2 personas y se han incorporado las mejoras indicadas para su usabilidad.

#### Historia de usuario 4

>_"Yo como entrenador pokémon
>Quiero ver una ficha con las características principales del pokémon que elija.
>Para conocer más sobre ellos."_


##### Criterio de aceptación

*[x] El usuario al entrar a la página y puede tener todos los pokémones en pantalla
*[x] Puede hacer _click_ sobre cualquier pokémon
*[x] Saldrá un _Modal_ con las características del pokémon
*[x] Podrá ver detalles de las características del pokémon como _peso, altura, caramelos_ además de su tipo y debilidad por color.

##### Definición de terminado.

* [x] El usuario puede observar el tipo por color al entrar a la tarjeta del pokémon.
* [x] El código cumple con la guía de estilos acordada.
* [x] El código esta en el repositorio.

#### Historia de usuario 5
>_"Yo como entrenador pokémon
>Quiero una barra de busqueda en la página
>Para encontrar los pokémon más fácilmente."_

###### Criterio de aceptación

*[x] El buscador se encuentra visible en la página
*[x] Puede _buscar_ cualquier pokémon de la región Kanto
*[x] El buscador se adapta a cualquier dispositivo

###### Definición de terminado.

* [x] El usuario puede ingresar cualquier nombre a la búsqueda
* [x] Al apretar _enter_, se visualiza la tarjeta pokémon en la pantalla
* [x] El diseño es responsive y cumple con la guía de estilos acordada.

###### Sketch

 #### Prototipo de baja fidelidad
[Click para ver prototipo de baja fidelidad hecho en papel y lápiz](https://www.dropbox.com/s/a3ze7x8usgd0q4y/prototipo%20a%20lapiz.jpeg?dl=0)

###### Prototipo en inVision
[Click para ver prototipo en inVision](https://yarimardiaz369160.invisionapp.com/freehand/Pokemon-LFeeCtDqm?v=bIOUa7Vk7%2BwWWSoZuzzlBg%3D%3D&linkshare=urlcopied)

#### Testeo de usabilidad en test de baja fidelidad

###### Problemas de usabilidad a través de testeo de prototipos:

* Testeo con Silvina del primer prototipo de baja fidelidad:
Al recibir feedback, nos dimos cuenta que faltaba información descriptiva de la web, así que agregamos una pantalla de inicio, para que el usuario pueda tener más claridad en cuanto a lo que se trata en la plataforma.

* Testeo con Cristian del primer prototipo de baja fidelidad:
Al recibir el feedback nos dijo que estaba bonito y bien encaminado, pero le faltaba una hoja de inicio para saber de qué trataba la página web.


#### Prototipo de alta fidelidad
[Click para ver prototipo de alta fidelidad en Figma](https://www.figma.com/file/1ijfbnP2kA6o0wpcN2JYCe/Untitled?node-id=0%3A1)


* Testeo con Cristian del segundo prototipo de alta fidelidad:
Al recibir feedback nos hicieron saber que no quedaba claro qué tipo de pokémon estaban viendo, ya que en ningún lado de la página se mostraba el filtro que se había seleccionado.

#### Como mejoramos con nuestra propuesta final:



## 5. Checklist

* [x] Usa VanillaJS.
* [x] No hace uso de `this`.
* [x] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [x] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.


