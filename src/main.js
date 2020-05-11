import {  getPokemons, filterCharactersByName } from './data.js';

//Se declara las constantes de los selects y el contenedor principal para manipular el dom.
const selectorTypePokemon = document.getElementById("types");
const selectorWeaknessPokemon = document.getElementById("weakness");
const selectorOrderPokemon = document.getElementById("order");
const cardList = document.getElementById("containerCard");
const searchBar = document.getElementById("search");
const homeBtn = document.getElementById("homeBtn");
const informationMain = document.getElementById("informationMain");

homeBtn.addEventListener('click', () => {
  cardList.innerHTML = '';
  informationMain.style.display = "block";
})

const hideInformationMenu = () => {
  informationMain.style.display = "none";
}

const modalOpen = (pokemon) => {
  let bodyElement = document.getElementById("Body");
  let dark = document.createElement("div");
  let win = document.createElement("div");
  let button = document.createElement("button");

  dark.id = "dark";
  win.id = "win";
  button.id = "button";
  button.innerHTML = '<i class="fas fa-times-circle"></i>';


  button.addEventListener("click", () => {
    dark.remove();
  });

  let htmlContent = '';

  htmlContent += '<div class="name">' + pokemon.name + '</div>';

  htmlContent += '       <div class="imgModal">';
  htmlContent += '  <img src="' + pokemon.img + '">';
  htmlContent += '        </div>';

  htmlContent += '       <div class="typeModal margenes">';
  htmlContent += '           <label>Tipo: </label>';
  htmlContent += '           <div>';
  if (pokemon.type) {
    pokemon.type.forEach(element => {
      htmlContent += '               <span class="char _' + element.toLowerCase() + '">' + element + '</span>';
    });
  }
  htmlContent += '        </div>';

  htmlContent += '       <div class="weakneModal margenes">';
  htmlContent += '           <label>Debilidad: </label>';
  htmlContent += '           <div>';
  if (pokemon.weaknesses) {
    pokemon.weaknesses.forEach(element => {
      htmlContent += '               <span class="char _' + element.toLowerCase() + '">' + element + '</span>';

    });
  }
  htmlContent += '        </div>';

  htmlContent += '       <div class="margenes">';
  htmlContent += ' <label>Altura:</label> <span>' + pokemon.height + '</span>';
  htmlContent += ' <label>Peso:</label> <span>' + pokemon.weight + '</span>';
  htmlContent += ' <label>Caramelos:</label> <span>' + pokemon.candy + '</span>';
  htmlContent += '        </div>';

  if (pokemon.next_evolution) {
    htmlContent += '       <div class="">';
    htmlContent += '           <label>Evolucion</label>';
    htmlContent += '           <div>';
    pokemon.next_evolution.forEach(element => {
      htmlContent += '               <span class="">' + element.name + '</span>';
      htmlContent += '               <p="">' + '#' + element.num + '</p>';
    });
    htmlContent += '       <div class="">';
  }

  if (pokemon.prev_evolution) {
    htmlContent += '       <div class="">';
    htmlContent += '           <label>Previa Evolucion</label>';
    htmlContent += '           <div>';
    pokemon.prev_evolution.forEach(element => {
      htmlContent += '               <span class="">' + element.name + '</span>';
      htmlContent += '               <p="">' + '#' + element.num + '</p>';
    });
    htmlContent += '        </div>';
  }


  win.appendChild(button);
  win.insertAdjacentHTML('beforeend', htmlContent);
  dark.appendChild(win);
  bodyElement.appendChild(dark);
};

//Obtenemos los pokemones de acuerdo a los filtros.
const displayPokemonWithOptions = (order = "ascendant", types = "", weakness = "") => {
  let pokemons = getPokemons(order, types, weakness); //Ibocamos la funcion del modulo data getPkemon a cada uno de los elementos.

  hideInformationMenu();
  //limpia el contenedor de pokemones
  cardList.innerHTML = '';

  //Recorre todos los elemtos del array pokemons

  displayPokemonCardCreator(pokemons);

  return true;
}

//Se define que se va a ejecutar hasta que terminen de cargar los documentos.
window.onload = () => {

  //Se atrapa un evento change cada vez que se alija una opcion del select.
  selectorTypePokemon.addEventListener("change", () => {
    //despliega los pokemon segun los filtros (valor de select.value) de tipos y debilidad y ordenado por el orden selecionando.
    displayPokemonWithOptions(selectorOrderPokemon.value, selectorTypePokemon.value, selectorWeaknessPokemon.value);

  });
  selectorWeaknessPokemon.addEventListener("change", () => {
    displayPokemonWithOptions(selectorOrderPokemon.value, selectorTypePokemon.value, selectorWeaknessPokemon.value);

  });

  selectorOrderPokemon.addEventListener("change", () => {
    displayPokemonWithOptions(selectorOrderPokemon.value, selectorTypePokemon.value, selectorWeaknessPokemon.value);

  });

  //Se rellena los pokemones segun los filtros por defecto.
  displayPokemonWithOptions();

}

const displayPokemonCardCreator = (pokemons) => {
  pokemons.forEach((pokemon) => {
    //Se crean todos los elementos de la carta.
    let cardPokemon = document.createElement("div");
    let cardLink = document.createElement("a");
    let cardName = document.createElement("p");
    let cardImagen = document.createElement("img");
    let cardNumber = document.createElement("p");
    cardLink.href = '#'; //programar aqui el despliegue del detalle de la tarjeta.
    //Se asignan las clases para aplicar estilo a cada elemento.
    cardPokemon.className = "pokemonCard";
    cardImagen.className = "pokemonImg";
    cardName.className = "pokemonName";
    cardNumber.className = "pokemonNum";
    //Se asigna los datos a cada uno de los elementos img, numero y nombre.
    cardNumber.innerText = '#' + pokemon.num;
    cardImagen.src = pokemon.img;
    cardName.innerText = pokemon.name;
    //Se argragan al elemento <a> los elementos img, numero y nombre.
    cardLink.appendChild(cardNumber);
    cardLink.appendChild(cardImagen);
    cardLink.appendChild(cardName);
    //Se agrega al elemento <div> el elemento <a> que contiente todos los demas elementos img, numero y nombre.
    cardPokemon.appendChild(cardLink);
    //Se agrega la carta al contenedor principal.
    cardList.appendChild(cardPokemon);

    cardLink.addEventListener("click", () => {
      modalOpen(pokemon);
    });
  });
}

// Se inicia el evento keyup cuando la tecla es soltada
searchBar.addEventListener('keyup', (searchKeyUpEvent) => {
  cardList.innerHTML = '';
  let searchString = (searchKeyUpEvent.target.value.toLowerCase());
  let listPokemons = filterCharactersByName(searchString);
  displayPokemonCardCreator(listPokemons);
});
