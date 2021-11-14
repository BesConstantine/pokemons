import axios from 'axios';

import { action as actionType } from '../store/types';

export function getTypesFromApi() {
  return function (dispatch) {
    axios.get('https://pokeapi.co/api/v2/type')
      .then((types) => dispatch(actionType.getType(types.data.results)));
  };
}
