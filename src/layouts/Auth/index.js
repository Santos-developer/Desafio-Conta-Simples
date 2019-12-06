import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import routes from "routes";

import { Layout, MainContent } from "./styles";

import AuthNavbar from "components/Navbars/Auth";
import AuthFooter from "components/Footers/Auth";

/**
 * Get Routes
 * @param {array} routes - Rotas
 * @returns {array} Retorna uma coleção de JSX
 * @description Retorna uma coleção de JSX
 */

const getRoutes = routes => {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.layout + route.path}
      component={route.component}
    />
  ));
};

const AuthLayout = ({ history }) => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [history]);

  if (window.localStorage.getItem("token"))
    return <Redirect to="/dashboard/home" />;

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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

AuthLayout.propTypes = {
  history: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLayout);
