import { Link } from "react-router-dom";
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
  IconBadge
} from "./styles";

import { connect } from "react-redux";

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

const DashboardNavbar = ({ routes, user, notifications }) => {
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
      <NavbarMenu isOpen={isOpen}>
        <RenderLinks onLinkClick={onLinkClick} routes={routes} />
      </NavbarMenu>

      <NavbarProfile>
        <Icons>
          <Notification>
            {!!notifications.length && (
              <IconBadge>{notifications.length}</IconBadge>
            )}
            <FontAwesomeIcon size="1x" icon={faBell} />
            <NotificationDropDown>
              <ul>
                {notifications.map((notification, index) => (
                  <li key={index}>
                    <Link to="/">{notification.message}</Link>
                  </li>
                ))}
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
            <h5>{user.name}</h5>
            <p>
              Conta <strong>{user.account.digit}</strong> Agéncia{" "}
              <strong>{user.account.agency}</strong>
            </p>
          </Content>
        </Wrapper>
      </NavbarProfile>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  notifications: state.notifications
});

const mapDispatchToProps = dispatch => ({
  action: () => dispatch({ type: "" })
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNavbar);
