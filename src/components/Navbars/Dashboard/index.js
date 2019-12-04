import { Link } from "react-router-dom"
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Toggle,
  ToggleLine,
  NavbarMenu,
  NavItem,
  NavLink,
  NavbarProfile,
  Icons,
  Wrapper,
  Content,
  Notification,
  NotificationDropDown,
  Picture,
  PictureDropdown,
  IconBadge,
} from "./styles";

import PersonPicture from "assets/images/person.jpg";
import { ReactComponent as Logo } from "assets/images/logo-conta-simples.svg";

import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
