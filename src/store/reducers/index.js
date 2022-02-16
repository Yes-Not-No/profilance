import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { filteredNewsReducer } from "./filteredNewsReducer";
import { newsReducer } from "./newsReducer";

export default combineReducers({
  authReducer,
  newsReducer,
  filteredNewsReducer,
});
