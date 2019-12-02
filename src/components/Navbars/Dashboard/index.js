import React from "react";
import {
  Navbar,
  NavbarBrand,
  Toggle,
  ToggleLine,
  NavbarMenu,
  NavItem,
  NavbarProfile,
  Icons,
  Wrapper,
  Picture,
  Content
} from "./styles";

import { NavLink } from "react-router-dom";

import PersonPicture from "assets/images/person.jpg";
import { ReactComponent as Logo } from "assets/images/logo-conta-simples.svg";

const RenderLinks = ({ routes }) => {
  return routes.map((route, index) => {
    if (route.inNavbar) {
      return (
        <NavItem>
          <NavLink key={index} to={route.layout + route.path}>
            {route.name}
          </NavLink>
        </NavItem>
      );
    } else {
      return false;
    }
  });
};

const DashboardNavbar = ({ routes }) => (
  <Navbar>
    <NavbarBrand>
      <Logo />
    </NavbarBrand>
    <Toggle>
      <ToggleLine />
      <ToggleLine />
      <ToggleLine />
    </Toggle>
    <NavbarMenu>
      <RenderLinks routes={routes} />
    </NavbarMenu>

    <NavbarProfile>
      <Icons>Sino</Icons>
      <Wrapper>
        <Picture>
          <img src={PersonPicture} alt="..." />
        </Picture>
        <Content>
          <h5>Lorem</h5>
          <p>Lorem ipsum</p>
        </Content>
      </Wrapper>
    </NavbarProfile>
  </Navbar>
);

export default DashboardNavbar;
