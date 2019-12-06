import axios from "axios";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Layout, MainContent } from "./styles";
import { Switch, Route, Redirect } from "react-router-dom";

import routes from "routes";

import Container from "components/Container";
import DashboardNavbar from "components/Navbars/Dashboard";
import Sidebar from "components/Sidebar";
import DashboardFooter from "components/Footers/Dashboard";

import { setUser } from "store/actions";

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

const DashboardLayout = ({ history, user, setUser }) => {
  const token = user.token || localStorage.getItem("token");

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [history, history.location.pathname]);

  useEffect(() => {
    axios
      .get("/api/user-profile", { headers: { authorization: token } })
      .then(res => {
        setUser(res.data);
      })
      .catch(error => {
        window.localStorage.removeItem("token");
        history.replace("/auth/login");
      });
  }, [history, setUser, token]);

  if (!token) return <Redirect to="/auth/login" />;

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

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  setUser: userData => dispatch(setUser(userData))
});

DashboardLayout.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
  history: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);
