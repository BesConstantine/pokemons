import { AnyAction } from 'redux';

const SET_LOADING = 'SET_LOADING';

export const action = {
  setLoading: (payload: boolean) => ({ type: SET_LOADING, payload }),
};

export type LoadingState = {
  loading: boolean,
};

export const loadingState: LoadingState = {
  loading: true,
};

export const loadingReducer = (state = loadingState, inputAction: AnyAction) => {
  switch (inputAction.type) {
    case SET_LOADING:
      return { ...state, loading: inputAction.payload };
    default:
      return state;
  }
};
