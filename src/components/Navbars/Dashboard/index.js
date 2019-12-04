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

import { NavLink, Link } from "react-router-dom";
import Styled from "styled-components"
import PersonPicture from "assets/images/person.jpg";
import { ReactComponent as Logo } from "assets/images/logo-conta-simples.svg";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "components/Badge";

const Notification = Styled(Link)`
  position: relative;

  div {
    top: -6px;
    left: 3px;
    position: absolute;
    padding: .2em .4em;
    border-radius: 100%;
    font-size: .6em;
  }
`

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
          <Notification to="/">
            <Badge>2</Badge>
            <FontAwesomeIcon size='1x' icon={faBell} />
          </Notification>
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
