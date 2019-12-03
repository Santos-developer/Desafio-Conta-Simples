import React, { useState } from "react";
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
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const DashboardNavbar = ({ routes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <Navbar>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <Toggle onClick={toggle}>
        <ToggleLine />
        <ToggleLine />
        <ToggleLine />
      </Toggle>
      <NavbarMenu isOpen={isOpen}>
        <RenderLinks routes={routes} />
      </NavbarMenu>

      <NavbarProfile>
        <Icons>
          <FontAwesomeIcon icon={faBell} />
        </Icons>
        <Wrapper>
          <Picture>
            <img src={PersonPicture} alt="..." />
          </Picture>
          <Content>
            <h5>Vila Uberabinha</h5>
            <p>
              Conta <strong>0001</strong> Agéncia <strong>43322-1</strong>
            </p>
          </Content>
        </Wrapper>
      </NavbarProfile>
    </Navbar>
  );
};

export default DashboardNavbar;
