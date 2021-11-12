import axios from 'axios';

import { action as actionPokemons } from '../store/pokemons'
import { action as actionUrlForPokemon } from '../store/urlForPokemons';

function createPokemon(pokemonFromApi) {
  const name = pokemonFromApi.name;
  const id = pokemonFromApi.id;
  const types = pokemonFromApi.types.map(type => type.type.name);
  const moves = pokemonFromApi.moves.map(move => move.move.name);
  const image = pokemonFromApi.sprites.front_default;
  const hp = pokemonFromApi.stats[0].base_stat;
  const attack = pokemonFromApi.stats[1].base_stat;
  const defense = pokemonFromApi.stats[2].base_stat;
  const special_attack = pokemonFromApi.stats[3].base_stat;
  const special_defense = pokemonFromApi.stats[4].base_stat;
  const speed = pokemonFromApi.stats[5].base_stat;

  return {
    id,
    name,
    types,
    moves,
    image,
    hp,
    attack,
    defense,
    special_attack,
    special_defense,
    speed,
  };
}

export const getPokemonsFromApi = (url, setIsLoading) => {
  if (url) {
    return function(dispatch) {
    axios.get(url)
      .then(response => {
        dispatch(actionUrlForPokemon.changeUrl(response.data.next))
        for (const pokemon of response.data.results) {
          axios.get(pokemon.url)
            .then(response => {
              dispatch(actionPokemons.addPokemon(createPokemon(response.data)))
              console.log('loaded pokemon ' + response.data.id)
            })
        }
      })
      .finally(() =>setTimeout(() => setIsLoading(false), 1000))
    }
  }
}