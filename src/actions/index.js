import axios from "axios";

const API_KEY = "50f333d54cf1024253df432c0316ad2b";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=${API_KEY}`;

export const FETCH_TEMPERATURE = "FETCH_TEMPERATURE";
export const ERROR_TEMPERATURE = "ERROR_TEMPERATURE";

export function fetchTemperature(city) {
  const url = `${ROOT_URL}&q=${city}&cnt=5&units=metric`;

  return function(dispatch) {
    return axios(url)
      .then(function(response) {
        dispatch({ type: FETCH_TEMPERATURE, payload: response });
      })
      .catch(function(error) {
        dispatch({ type: ERROR_TEMPERATURE, errors: error.response.data });
      });
  };
}
