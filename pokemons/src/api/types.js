import axios from 'axios';

import {action} from '../store/types'

export const getTypesFromApi = () => {
  return function(dispatch) {
    axios.get('https://pokeapi.co/api/v2/type')
      .then(types => dispatch(action.getType(types.data.results)))
  }
};