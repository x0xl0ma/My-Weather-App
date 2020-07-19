import {
  FETCH_CITY_SUCCESS,
  FETCH_CITY_ERROR,
  IS_LOADING,
  RESET_ERROR,
} from "./types";

const initialState = {
  loading: false,
  city: null,
  error: null,
};

const handlers = {
  [IS_LOADING]: (state) => ({ ...state, loading: true }),
  [FETCH_CITY_SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    city: payload,
  }),
  [FETCH_CITY_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  }),
  [RESET_ERROR]: (state) => ({
    ...state,
    loading: false,
    error: null,
  }),
  DEFAULT: (state) => state,
};

export const reducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
