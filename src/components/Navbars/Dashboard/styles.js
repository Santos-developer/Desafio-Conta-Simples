import Styled from "styled-components";
import { NavLink as NLRRD } from "react-router-dom";
import Dropdown from "components/Dropdown";
import Badge from "components/Badge";

export const Navbar = Styled.nav`
    grid-area: navbar;
    
    display: grid;
    grid-template-columns: 1fr auto 60px;
    grid-template-rows: 65px 1fr;
    grid-template-areas: 
        "logo profile toggle"
        "menu menu menu";
        
    min-height: 65px;
    align-items: center;

    width: 100%;
    position: fixed;

    background-color: white;
    box-shadow: 1px 1px 9px #f2f2f2;
    border-bottom: solid 1px #e9ebe8;
    z-index: 1;

    @media screen and (min-width: 768px) {
        grid-template-columns: 200px 1fr auto;
        grid-template-areas: "logo menu profile";
    }
`;

export const NavbarBrand = Styled.a`
    grid-area: logo;

    width: 200px;
    padding-left: 15px;
    padding-right: 4.4rem;
    border-right: solid 1px #ededed;

    svg {
        width: 100%;
    }
`;

export const Toggle = Styled.div`
    grid-area: toggle;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const ToggleLine = Styled.div`
    width: 20px;
    height: 2px;
    margin-bottom: 0.2rem;
    background-color: black;
`;

export const NavbarMenu = Styled.ul`
    grid-area: menu;
    list-style: none;

    display: ${({ isOpen }) => isOpen ? 'block;' : 'none;'}

    @media screen and (min-width: 768px) {
        display: block;
        align-self: flex-start;
    }
`;

export const NavItem = Styled.li`
    display: block; 
    
    @media screen and (min-width: 768px) {
        display: inline-block;
        margin-left: 1em;
    }
`;

export const NavLink = Styled(NLRRD)`
    color: #8b8b89;
    display: block;
    font-weight: 600;
    font-size: .8em;
    text-decoration: none;
    text-align: center;
    padding: 1.8em 2em;

    &:hover {
        color: ${({ theme }) => `${theme.COLORS.PRIMARY};`}
    }

    &::first-letter {
        text-transform: uppercase;
    }

    &.active {
        color: ${({ theme }) => `${theme.COLORS.PRIMARY};`}
    }

    @media screen and (min-width: 768px) {
        &.active {
            border-top: ${({ theme }) => `solid 3px ${theme.COLORS.PRIMARY};`}
        }
    }
`

export const NavbarProfile = Styled.div`
    grid-area: profile;
    display: flex;
    align-items: center;

    @media screen and (min-width: 768px) {
        margin-right: 15px;
    }
`;

export const Icons = Styled.div`
    margin-right: 1em;
`;

export const Wrapper = Styled.div`

    @media screen and (min-width: 1024px) {
        display: flex;
        align-items: center;
    }
`;

export const Content = Styled.div`
    display: none;
    color: #8c8c8c;

    h5 {
        font-weight: 400;
    }

    p {
        font-size: .8rem;
    }

    strong {
        color: #747474;
    }

    @media screen and (min-width: 1024px) {
        display: block;
        margin-left: 1em;
    }
`;

export const NotificationDropDown = Styled(Dropdown)`
  p {
    text-align: center;
    margin-bottom: 1em;
  }

  a {
    display: block;
    padding: .2em;
  }
`;

export const Notification = Styled.div`
  cursor: pointer;
  position: relative;

  &:hover ${NotificationDropDown} {
    display:block;
  }
`;

export const IconBadge = Styled(Badge)`
  top: -6px;
  left: 3px;
  position: absolute;
  padding: .2em .4em;
  border-radius: 100%;
  font-size: .6em;
`;

export const PictureDropdown = Styled(Dropdown)`
  a {
    display: block;
    padding: .2em;
  }
`;

export const Picture = Styled.div`
    width: 40px;
    height: 40px;
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