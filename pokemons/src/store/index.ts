import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { displayReducer, DisplayState } from './display';
import { pokemonsReducer, PokemonsState } from './pokemons';

import { searchReducer, SearchState } from './search';
import { typeReducer, TypeState } from './type';
import { typesReducer, TypesState } from './types';
import { urlForPokemonsReducer, UrlForPokemonsState } from './urlForPokemons';

export type RootState = {
  search: SearchState,
  type: TypeState,
  types: TypesState,
  pokemons: PokemonsState,
  urlForPokemons: UrlForPokemonsState,
  display: DisplayState,
};

const rootReducer = combineReducers({
  search: searchReducer,
  type: typeReducer,
  types: typesReducer,
  pokemons: pokemonsReducer,
  urlForPokemons: urlForPokemonsReducer,
  display: displayReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
