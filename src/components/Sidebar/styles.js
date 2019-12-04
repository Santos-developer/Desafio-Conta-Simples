import Styled from "styled-components";
import { NavLink as NLRRD } from "react-router-dom";

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
`;

export const Navigation = Styled.nav`
    list-style: none;
`;

export const NavLink = Styled(NLRRD)`
    display: flex;
    align-items: center;

    padding: .5em 1em .5em 3em;
    font-size: .8rem;
    border-radius: 10px;
    box-shadow: solid 1px 1px rgba(0,0,0,.2);
    
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

export const NavItem = Styled.li`
    display: block;

    svg {
        width: 10px;
        margin: .4em .5em;
        position: absolute;
    }
`;
