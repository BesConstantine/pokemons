import { AnyAction } from 'redux';
import { Pokemon } from '../types/pokemon';

const GET_POKEMONS = 'GET_POKEMONS';
const ADD_POKEMON = 'ADD_POKEMON';

export const action = {
  getPokemons: (payload: any) => ({ type: GET_POKEMONS, payload }),
  addPokemon: (payload: any) => ({ type: ADD_POKEMON, payload }),
};

export type PokemonsState = {
  pokemons: Pokemon[],
};

export const pokemonsState: PokemonsState = {
  pokemons: [],
};

export const pokemonsReducer = (state = pokemonsState, inputAction: AnyAction) => {
  switch (inputAction.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: [...state.pokemons, ...inputAction.payload] };
    case ADD_POKEMON:
      return { ...state, pokemons: [...state.pokemons, inputAction.payload] };
    default:
      return state;
  }
};
