import { createStore } from "redux";
import reducers from "../Reducers/indexCombine";

const store = createStore(
  reducers, //preloaded State
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
