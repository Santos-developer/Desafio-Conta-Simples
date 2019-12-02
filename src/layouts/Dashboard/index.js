import React from "react";
import { Layout, MainContent } from "./styles";
import { Switch, Route } from "react-router-dom";

import routes from "routes";

import GlobalStyles from "views/styles/global";
import DashboardNavbar from "components/Navbars/Dashboard";
import Sidebar from "components/Sidebar";
import DashboardFooter from "components/Footers/Dashboard";

const getRoutes = routes => {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.layout + route.path}
      component={route.component}
    />
  ));
};

const DashboardLayout = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <DashboardNavbar routes={routes} />
        <Sidebar routes={routes} />
        <MainContent>
          <Switch>{getRoutes(routes)}</Switch>
        </MainContent>
        <DashboardFooter />
      </Layout>
    </>
  );
};

export default DashboardLayout;
