import {AnyAction} from 'redux';

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

export const searchReducer = (state = searchState, action: AnyAction) => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};
