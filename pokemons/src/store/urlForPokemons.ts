import { AnyAction } from 'redux';

const CHANGE_URL = 'CHANGE_URL';

export const action = {
  changeUrl: (payload: string) => ({ type: CHANGE_URL, payload }),
};

export type UrlForPokemonsState = {
  urlForPokemons: string,
};

export const urlForPokemonsState: UrlForPokemonsState = {
  urlForPokemons: 'https://pokeapi.co/api/v2/pokemon',
}

export const urlForPokemonsReducer = (state = urlForPokemonsState, action: AnyAction) => {
  switch (action.type) {
    case CHANGE_URL:
      return { ...state, urlForPokemons: action.payload };
    default:
      return state;
  }
};
