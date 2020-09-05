import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const defaultStore = {
  query: "",
  list: ["Example 1", "Example 2"]
};

const reducer = (prevStore = defaultStore, action) => {
  const { type } = action;
  switch (type) {
    case "ON_CHANGE":
      return { ...prevStore, query: action.payload };
    default:
      return prevStore;
  }
};

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <Switch> */}
        <Route exact path="/" component={App} />
        <Route path="/bookmarks" component={() => <div>Bookmarks</div>} />
        <Redirect to="/" />
        {/* </Switch> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
