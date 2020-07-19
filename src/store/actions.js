import {
  IS_LOADING,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_ERROR,
  RESET_ERROR,
} from "./types";
import axios from "axios";


const baseURL = (town) => {
  return `http://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=8cac61f74a23a243284b99941c7cc6e5`;
};

export function fetchCity(city) {
  return async (dispatch) => {
    dispatch(isLoading());

    try {
      dispatch(resetError());
      const url = baseURL(city);
      const response = await axios.get(url);
      dispatch(fetchCitySuccess(response.data));
    } catch (e) {
      dispatch(fetchCityError(e));
    }
  };
}

export function isLoading() {
  return {
    type: IS_LOADING,
  };
}

export function fetchCitySuccess(c) {
  return {
    type: FETCH_CITY_SUCCESS,
    payload: c,
  };
}

export function fetchCityError(e) {
  return {
    type: FETCH_CITY_ERROR,
    error: e,
  };
}

export function resetError() {
  return {
    type: RESET_ERROR,
    error: null,
  };
}
