import React from "react";
import { Sidebar, Menu, Title, Navigation, NavItem, NavLink, SidebarBadge, Deposit } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RenderLinks = routes => {
  return routes.map((route, index) => (
    <NavItem key={index}>
      <NavLink to={route.layout + route.path}>
        <FontAwesomeIcon icon={route.icon} />
        <p>{route.name}</p>
        {route.badge && <SidebarBadge>{route.badge}</SidebarBadge>}
      </NavLink>
    </NavItem>
  ));
};

const RenderEasyAccessLinks = ({ routes }) => {
  const onlyEasyAccessRoutes = route =>
    route.layout === "/dashboard" && route.inSidebar && route.inEasyAccess;
  const easyAccessRoutes = routes.filter(onlyEasyAccessRoutes);
  return RenderLinks(easyAccessRoutes);
};

const RenderMoreLinks = ({ routes }) => {
  const onlyMoreRoutes = route =>
    route.layout === "/dashboard" && route.inSidebar && route.inMore;
  const moreRoutes = routes.filter(onlyMoreRoutes);
  return RenderLinks(moreRoutes);
};

const MainSidebar = ({ routes }) => (
  <Sidebar>
    <Deposit fullWidth uppercase>
      Depositar
    </Deposit>
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
