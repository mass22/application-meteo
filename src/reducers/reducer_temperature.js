import { FETCH_TEMPERATURE, ERROR_TEMPERATURE } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TEMPERATURE:
      return [action.payload.data, ...state];

    case ERROR_TEMPERATURE:
      return [action.errors, ...state];

    default:
      return state;
  }
}
