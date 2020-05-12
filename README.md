# PokeData

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Demo](#2-demo-del-proyecto)
* [3. Instalación de dependencias](#3-instalacion-de-dependencias)
* [4. Investigación y trabajo UX](#4-investigacion-y-trabajo-ux)
* [5. Checklist](#5-checklist)

## 1. Resumen del proyecto
Pokedata es una plataforma web, basado en el juego [Pokémon GO](https://pokemongolive.com/es/), unicamente de los pokemon de la generacion Kanto, que permite al usuario filtrar, ordenar las características de los pokemon y mostrarlas en pantalla.

## 2. Demo
_[Click para ver demo del proyecto en Gh-pages](https://nadiagincoff.github.io/SCL013-data-lovers/src/index.html)_

<!-- ## 3. Instalación de dependencias
	Aqui deberiamos poner lo necesario para que cualquier persona pueda utilizar nuestro repositorio, por ejemplo la instalacion de las dependencias (npm install) -->

## 4. Investigación y trabajo UX

#### Definición de usuario
Teniendo en cuenta la cantidad de usuarios que tiene Pokémon GO, llegamos a la conclusion de que el usuario que usará esta aplicación web, es de nivel **intermedio**, ya conoce sobre el juego e ingresa a la plataforma para desarrollar sus habilidades como entrenador, para tener una guia para conocer las fortalezas y debilidades de sus pokemon, ordenarlos por su tipo y ponerlos en orden alfabético y numérico.

#### Historias de usuario

##### Historia de usuario 1

_"Yo como entrenador pokémon
Quiero ver cuantos pokemon me faltan en mi pokedex
Para eso, ingreso a la página y los ordeno alfabéticamente o numéricamente."_

###### Criterio de aceptación

* [x] El usuario puede ingresar a la página y ver todos los pokémon en pantalla.
* [x] El usuario puede ordenar los pokémon haciendo uso de un menú desplegable.
* [] La página debe ser responsive.
* [x] Debe tener una interfaz que siga los fundamentos de visual design.

###### Definición de terminado.
* [x] El usuario puede ordenar las tarjetas pokemon seleccionando una opción (A-Z, Z-A, Ascendente, Descendente) en un menú desplegable.

##### Historia de usuario 2

_"Yo como entrenador pokémon
Quiero filtrar los pokemon por su tipo, por ejemplo fuego
Para obtener todos los pokémon de dicho tipo."_

###### Criterio de aceptación

* [x] El usuario al entrar a la página y tener todos los pokemones en pantalla, puede  filtrar por tipo haciendo uso del menú desplegable.
* [x] Puede seleccionar la opcion que desee, _en este caso la opcion fuego_
* [] La página y sus opciones se pueden ver fácilmente desde cualquier dispositivo.

###### Definición de terminado.
* [x] El usuario puede observar los pokemon de tipo fuego con su nombre y su numeración.
* [x] El código cumple con la guía de estilos acordada.
* [x] El código esta en el repositorio.
* [x] El código tiene y pasa los test necesarios y se ha hecho en Visual Studio Code.
* [x] Esta historia ha sido testeada con 2 personas y se han incorporado las mejoras indicadas para su usabilidad.

#### Prototipo de baja fidelidad

###### Sketch

_inserte prototipo de baja fidelidad hecho en lapiz y papel_

###### Prototipo en inVision
[Click para ver prototipo en inVision](https://yarimardiaz369160.invisionapp.com/freehand/Pokemon-LFeeCtDqm?v=bIOUa7Vk7%2BwWWSoZuzzlBg%3D%3D&linkshare=urlcopied)

#### Testeo de usabilidad en test de baja fidelidad

###### Problemas de usabilidad a través de testeo de prototipos:

* Testeo con Silvina del primer prototipo de baja fidelidad:
Al recibir feedback, nos dimos cuenta que faltaba información descriptiva de la web, así que agregamos una pantalla de inicio, para que el usuario pueda tener más claridad en cuanto a lo que se trata en la plataforma.

* Testeo con Cristian del primer prototipo de baja fidelidad:
Al recibir el feedback nos dijo que estaba bonito y bien encaminado, pero le faltaba una hoja de inicio para saber de qué trataba la página web.


#### Prototipo de alta fidelidad

_inserte prototipo de alta fidelidad_

* Testeo con Cristian del segundo prototipo de alta fidelidad:
Al recibir feedback nos hicieron saber que no quedaba claro qué tipo de pokemon estaban viendo, ya que en ningún lado de la página se mostraba el filtro que se había seleccionado.

#### Como mejoramos con nuestra propuesta final:



## 5. Checklist

* [ ] Usa VanillaJS.
* [x] No hace uso de `this`.
* [x] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.


