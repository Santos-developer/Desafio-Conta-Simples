import React from "react";
import { NavLink } from "react-router-dom";
import { Sidebar, Menu, Title, Navigation, NavItem } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "components/Button"

const RenderEasyAccessLinks = ({ routes }) => {
  return routes.map((route, index) => {
    if (
      route.layout === "/dashboard" &&
      route.inSidebar &&
      route.inEasyAccess
    ) {
      return (
        <NavItem key={index}>
          <FontAwesomeIcon icon={route.icon} />
          <NavLink to={route.layout + route.path}>{route.name}</NavLink>
        </NavItem>
      );
    }
  });
};

const RenderMoreLinks = ({ routes }) => {
  return routes.map((route, index) => {
    if (route.layout === "/dashboard" && route.inSidebar && route.inMore) {
      return (
        <NavItem key={index}>
          <FontAwesomeIcon icon={route.icon} />
          <NavLink to={route.layout + route.path}>{route.name}</NavLink>
        </NavItem>
      );
    }
  });
};

const MainSidebar = ({ routes }) => (
  <Sidebar>
    <Button fullWidth uppercase>Depositar</Button>
    <Title>Acesso rápido</Title>
    <Menu>
      <Navigation>
        <RenderEasyAccessLinks routes={routes} />
      </Navigation>
    </Menu>

    <Title>Mais</Title>
    <Menu>
      <Navigation>
        <RenderMoreLinks routes={routes} />
      </Navigation>
    </Menu>
  </Sidebar>
);

export default MainSidebar;
