import { AnyAction } from 'redux';

const CHANGE_URL = 'CHANGE_URL';

export const action = {
  changeUrl: (payload: string) => ({ type: CHANGE_URL, payload }),
};

export type UrlForPokemonsState = {
  urlForPokemons: string | null,
};

export const urlForPokemonsState: UrlForPokemonsState = {
  urlForPokemons: 'https://pokeapi.co/api/v2/pokemon',
};

export const urlForPokemonsReducer = (state = urlForPokemonsState, inputAction: AnyAction) => {
  switch (inputAction.type) {
    case CHANGE_URL:
      return { ...state, urlForPokemons: inputAction.payload };
    default:
      return state;
  }
};
