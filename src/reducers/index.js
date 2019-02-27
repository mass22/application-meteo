import { combineReducers } from "redux";
import temperatureReducer from "./reducer_temperature";

const rootReducer = combineReducers({
  temperature: temperatureReducer
});

export default rootReducer;
