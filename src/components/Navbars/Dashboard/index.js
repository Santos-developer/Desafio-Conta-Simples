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
  Content
} from "./styles";

import { NavLink, Link } from "react-router-dom";
import Styled from "styled-components";
import PersonPicture from "assets/images/person.jpg";
import { ReactComponent as Logo } from "assets/images/logo-conta-simples.svg";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "components/Dropdown";
import Badge from "components/Badge";

const NotificationDropDown = Styled(Dropdown)`
  p {
    text-align: center;
    margin-bottom: 1em;
  }

  a {
    display: block;
    padding: .2em;
  }
`;

const Notification = Styled.div`
  cursor: pointer;
  position: relative;

  &:hover ${NotificationDropDown} {
    display:block;
  }
`;

const IconBadge = Styled(Badge)`
  top: -6px;
  left: 3px;
  position: absolute;
  padding: .2em .4em;
  border-radius: 100%;
  font-size: .6em;
`;

const PictureDropdown = Styled(Dropdown)`
  a {
    display: block;
    padding: .2em;
  }
`;

export const Picture = Styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    cursor: pointer;

    &:hover ${PictureDropdown} {
      display:block;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;

const RenderLinks = ({ onLinkClick, routes }) => {
  return routes.map((route, index) => {
    if (route.inNavbar) {
      return (
        <NavItem>
          <NavLink
            key={index}
            to={route.layout + route.path}
            onClick={onLinkClick}
          >
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

  const onLinkClick = () => isOpen && setIsOpen(false);

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
      <NavbarMenu  isOpen={isOpen}>
        <RenderLinks onLinkClick={onLinkClick} routes={routes} />
      </NavbarMenu>

      <NavbarProfile>
        <Icons>
          <Notification>
            <IconBadge>2</IconBadge>
            <FontAwesomeIcon size="1x" icon={faBell} />
            <NotificationDropDown>
              <ul>
                <li>
                  <Link to="/">Link 1</Link>
                </li>
                <li>
                  <Link to="/">Link 2</Link>
                </li>
              </ul>
            </NotificationDropDown>
          </Notification>
        </Icons>
        <Wrapper>
          <Picture>
            <img src={PersonPicture} alt="..." />
            <PictureDropdown>
              <ul>
                <li>
                  <Link to="/">Sair</Link>
                </li>
              </ul>
            </PictureDropdown>
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
