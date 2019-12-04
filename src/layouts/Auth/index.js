import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import routes from "routes";

import { Layout, MainContent } from "./styles";

import Container from "components/Container";
import AuthNavbar from "components/Navbars/Auth";
import AuthFooter from "components/Footers/Auth";

const getRoutes = routes => {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.layout + route.path}
      component={route.component}
    />
  ));
};

const AuthLayout = props => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [props]);

  return (
    <Layout>
      <AuthNavbar routes={routes} />
      <MainContent>
        <Switch>{getRoutes(routes)}</Switch>
      </MainContent>
      <AuthFooter />
    </Layout>
  );
};

export default AuthLayout;
