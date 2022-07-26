import { applyMiddleware, compose } from "redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "../reducers/reducers";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// applyMiddleware(thunk)
export default store;
