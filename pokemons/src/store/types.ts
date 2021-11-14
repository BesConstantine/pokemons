import { AnyAction } from 'redux';
import { Type } from '../types/type';

const GET_TYPES = 'GET_TYPES';

export const action = {
  getType: (payload: any) => ({ type: GET_TYPES, payload }),
};

export type TypesState = {
  types: Type[],
};

export const typesState: TypesState = {
  types: [],
};

export const typesReducer = (state = typesState, inputAction: AnyAction) => {
  switch (inputAction.type) {
    case GET_TYPES:
      return { ...state, types: [...inputAction.payload] };
    default:
      return state;
  }
};
