import React from "react";
import { Layout, MainContent } from "./styles";
import { Switch, Route } from "react-router-dom";

import routes from "routes";

import Container from "components/Container";
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
      <Layout>
        <DashboardNavbar routes={routes} />
        <Sidebar routes={routes} />
        <MainContent>
          <Container>
            <Switch>{getRoutes(routes)}</Switch>
          </Container>
        </MainContent>
        <DashboardFooter />
      </Layout>
    </>
  );
};

export default DashboardLayout;
