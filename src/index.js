import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import "./index.css";
import Header from "./Components/Header/Header";
import Carts from "./Components/Card/Cards";
import Settings from "./Components/Settings/Settings";
import HeaderSettings from "./Components/HeaderSettings/HeaderSettings";
import reducer from "./Components/redux/reducers/reducer";
import InfoDetails from "./Components/InfoDetails/InfoDetails";

const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/settings" exact>
          <HeaderSettings></HeaderSettings>
          <Settings></Settings>
        </Route>

        <Route path="/:id" exact>
          <HeaderSettings></HeaderSettings>
          <InfoDetails></InfoDetails>
        </Route>

        <Route path="/" exact>
          <>
            <Header></Header>
            <Carts></Carts>
          </>
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
