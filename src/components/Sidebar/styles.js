import Styled from "styled-components";
import { NavLink as NLRRD } from "react-router-dom";

import Badge from "components/Badge";
import Button from "components/Button";

export const Sidebar = Styled.aside`
    display: none;
    grid-area: sidebar;
    
    top: 65px;
    position: fixed;

    @media screen and (min-width: 768px) {
        display: block;
        padding: 1em;
    }
`;

export const Menu = Styled.nav`
    margin: 1em 0;
`;

export const Title = Styled.h5`
    margin: 1em 0;
    text-transform: uppercase;
    font-weight: 600;
`;

export const Navigation = Styled.nav`
    list-style: none;
`;

export const NavItem = Styled.li`
    display: block;

    svg {
        width: 10px;
        left: 10px;
        position: absolute;
    }
`;

export const NavLink = Styled(NLRRD)`
    display: flex;
    align-items: center;

    padding: .5em 1em .5em 3em;
    font-size: .8rem;
    border-radius: 10px;
    box-shadow: solid 1px 1px rgba(0,0,0,.2);

    position: relative;
    
    &.active {
        color: ${({ theme }) => `${theme.COLORS.PRIMARY};`}
        background-color: white;
    }

    p:hover {
        color: ${({ theme }) => `${theme.COLORS.PRIMARY};`};
    }

    p::first-letter {
        text-transform: uppercase;
    }
`;

export const SidebarBadge = Styled(Badge)`
  right: 0;
  padding: .2em .5em;
  font-size: .6rem;
  border-radius: 10px;
`;

export const Deposit = Styled(Button)`
    margin-bottom: 2em;
`