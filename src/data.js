import data from './data/pokemon/pokemon.js';

//Se extrae el array de pokémon
export const pokemons = data.pokemon;

//Con esta función filtramos y ordenamos por número, tipo y debilidad, y se duplica para no alterar la data original.
export const getPokemons = (order = 'ascendant', typePokemon = '', weaknessPokemon = '') => {
  let filterType = [typePokemon];
  let filterWeakness = [weaknessPokemon];
  //Devuelve una copia del array.
  let listPokemons = [...pokemons];

  //Si el tipo de pokemon es diferente a '' se aplica el filtro, si es igual a '' no se aplica ningun filtro sobre el tipo.
  if (typePokemon != '') {
    //Filtra el array de los pokemones utilizando filter para todos aquellos que contengan al menos 1 coincidencia del tipo pasado.
    listPokemons = listPokemons.filter(pokemon => pokemon.type.some(typePokemon => filterType.includes(typePokemon)));
  }

  if (weaknessPokemon != '') {
    listPokemons = listPokemons.filter(pokemon => pokemon.weaknesses.some(wkPokemon => filterWeakness.includes(wkPokemon)));
  }

  //Se utiliza para evaluar diferentes casos de una variable que serian ordenar de (AZ, ZA, O numero ascendente y descendente).
  switch (order) {
    case "ZA":
      //Devuelve el array ordenado alfabeticamente o dependiendo la opcion elegida.
      listPokemons.sort((pokemon1, pokemon2) => {
        //devuelve un resultado a trevez de operador ternario.
        return pokemon1.name < pokemon2.name ? 1 : -1;
      });
      break;
    case "ascendant":
      listPokemons.sort((pokemon1, pokemon2) => {
        return pokemon1.num > pokemon2.num ? 1 : -1;
      });
      break;
    case "descendant":
      listPokemons.sort((pokemon1, pokemon2) => {
        return pokemon1.num < pokemon2.num ? 1 : -1;
      });
      break;
    default:
      listPokemons.sort((pokemon1, pokemon2) => {
        return pokemon1.name > pokemon2.name ? 1 : -1;
      });
  }
  return listPokemons;
}

export const filterCharactersByName = (inputSearch) => {
  let listPokemons = pokemons.filter(pokemon => {

    return (pokemon.name.toLowerCase().includes(inputSearch))

  });
  return listPokemons;
}
