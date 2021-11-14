import { AnyAction } from 'redux';

const CHANGE_SEARCH = 'CHANGE_SEARCH';

export const action = {
  changeSearch: (payload: string) => ({ type: CHANGE_SEARCH, payload }),
};

export type SearchState = {
  search: string,
};

export const searchState: SearchState = {
  search: '',
};

export const searchReducer = (state = searchState, inputAction: AnyAction) => {
  switch (inputAction.type) {
    case CHANGE_SEARCH:
      return { ...state, search: inputAction.payload };
    default:
      return state;
  }
};
