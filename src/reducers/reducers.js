import isLogged from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  status: isLogged,
});

export default allReducers;
