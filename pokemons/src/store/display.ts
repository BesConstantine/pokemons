import {AnyAction} from 'redux';

const CHANGE_DISPLAY = 'CHANGE_DISPLAY';

export const action = {
  changeDisplay: (payload: string) => ({ type: CHANGE_DISPLAY, payload }),
}

export type DisplayState = {
  display: string,
}

export const displayState: DisplayState = {
  display: 'cards'
}

export const displayReducer = (state = displayState, action: AnyAction) => {
  switch (action.type) {
    case CHANGE_DISPLAY:
      return { ...state, display: action.payload };
    default:
      return state;
  }
};
