import { AnyAction } from 'redux';

const SET_TYPE = 'SET_TYPE';

export const action = {
  setType: (payload: string) => ({ type: SET_TYPE, payload }),
};

export type TypeState = {
  type: string,
};

export const typeState: TypeState = {
  type: '',
};

export const typeReducer = (state = typeState, inputAction: AnyAction) => {
  switch (inputAction.type) {
    case SET_TYPE:
      return { ...state, type: inputAction.payload };
    default:
      return state;
  }
};
