import * as ApiUtil from '../util/city_util';

export const RECEIVE_CITY = 'RECEIVE_CITY';
export const RECEIVE_CITIES = 'RECEIVE_CITIES';

export const receiveCity = (city) => ({
  type: RECEIVE_CITY,
  city
});
export const receiveCities = (cities) => ({
  type: RECEIVE_CITIES,
  cities
});

export const fetchCities = () => dispatch => (
  ApiUtil.fetchCities()
    .then(cities => dispatch(receiveCities(cities)))
);

export const fetchCity = (id) => dispatch => (
  ApiUtil.fetchCity(id)
    .then(city => dispatch(receiveCity(city)))
);
