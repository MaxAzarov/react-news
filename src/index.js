import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import "./index.css";
import Header from "./Components/Header/Header";
import Carts from "./Components/Cards/Cards";
import Settings from "./Components/Settings/Settings";
import HeaderSettings from "./Components/HeaderSettings/HeaderSettings";
import reducer from "./redux/reducers/reducer";
import InfoDetails from "./Components/CardInfo/CardInfo";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import ApiDocumentation from "./Components/ApiDocumentation/ApiDocumentation";
import About from "./Components/About/About";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/settings" exact>
          <HeaderSettings></HeaderSettings>
          <Settings></Settings>
        </Route>

        <Route path="/api-documentation" exact>
          <>
            <HeaderSettings></HeaderSettings>
            <ApiDocumentation></ApiDocumentation>
          </>
        </Route>

        <Route path="/about" exact>
          <>
            <HeaderSettings></HeaderSettings>
            <About></About>
          </>
        </Route>

        <Route path="/:id" exact>
          <HeaderSettings></HeaderSettings>
          <InfoDetails></InfoDetails>
        </Route>

        <Route path="/" exact>
          <>
            <Header></Header>
            <ErrorBoundary>
              <Carts></Carts>
            </ErrorBoundary>
          </>
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
