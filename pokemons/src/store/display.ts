import { AnyAction } from 'redux';

const CHANGE_DISPLAY = 'CHANGE_DISPLAY';

export const action = {
  changeDisplay: (payload: string) => ({ type: CHANGE_DISPLAY, payload }),
};

export type DisplayState = {
  display: string,
};

export const displayState: DisplayState = {
  display: 'cards',
};

export const displayReducer = (state = displayState, inputAction: AnyAction) => {
  switch (inputAction.type) {
    case CHANGE_DISPLAY:
      return { ...state, display: inputAction.payload };
    default:
      return state;
  }
};
