import Styled from "styled-components";

export const Sidebar = Styled.aside`
    display: none;
    grid-area: sidebar;

    @media screen and (min-width: 768px) {
        display: block;
        padding: 1em;
    }
`;

export const Menu = Styled.nav`
    margin: 1em 0;
`;

export const Title = Styled.h5`
    text-transform: uppercase;
`;

export const Navigation = Styled.nav`
    list-style: none;
`;

export const NavItem = Styled.li`
    display: block;
    
    
    a {
        display: block;
        padding: .5em 0 .5em 3em;
        font-size: .8rem;
        border-radius: 4px;
        box-shadow: solid 1px 1px rgba(0,0,0,.2);
    }

    a.active {
        color: ${({ theme }) => `${theme.COLORS.PRIMARY};`}
        background-color: white;
    }

    a:hover {
        color: ${({ theme }) => `${theme.COLORS.PRIMARY};`};
    }

    a::first-letter {
        text-transform: uppercase;
    }

    & a.active svg {
        color:  ${({ theme }) => `${theme.COLORS.PRIMARY};`}
        background-color: red;
    }

    svg {
        width: 10px;
        margin: .4em .5em;
        position: absolute;
    }


`;
