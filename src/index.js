import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "views/styles/global";
import theme from "views/styles/theme";

import AuthLayout from "layouts/Auth";
import DashboardLayout from "layouts/Dashboard";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    
    <Router>
      <Switch>
        <Route
          path="/auth"
          render={props => <AuthLayout {...props} />}
        />
        <Route
          path="/dashboard"
          render={props => <DashboardLayout {...props} />}
          />
        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
