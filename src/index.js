import App from "./App";
import reportWebVitals from "./reportWebVitals";
//
import React from "react";
import ReactDOM from "react-dom";
// Redux imports
import { createStore } from "redux";
import allReducers from "./reducers/reducers";
import { Provider } from "react-redux";

// Redux implementation
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
