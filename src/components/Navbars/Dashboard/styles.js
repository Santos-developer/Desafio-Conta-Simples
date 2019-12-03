import Styled from "styled-components";

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
    z-index: 1;

    @media screen and (min-width: 768px) {
        grid-template-columns: 150px 1fr auto;
        grid-template-areas: "logo menu profile";
    }
`;

export const NavbarBrand = Styled.a`
    grid-area: logo;

    width: 140px;
    padding-left: 15px;
    padding-right: 1.8rem;
    border-right: solid 1px rgba(0, 0, 0, 0.2);

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

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const ToggleLine = Styled.div`
    width: 25px;
    height: 4px;
    margin-bottom: 0.3rem;
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

    a {
        color: rgba(0, 0, 0, 0.6);
        display: block;
        font-weight: 600;
        text-decoration: none;
        text-align: center;
        padding: 1.4em 1em;
    }
    
    a:hover {
        color: ${({ theme }) => `${theme.COLORS.PRIMARY};`}
    }

    a::first-letter {
        text-transform: uppercase;
    }
    
    a.active {
        color: ${({ theme }) => `${theme.COLORS.PRIMARY};`}
    }

    
    @media screen and (min-width: 768px) {
        display: inline-block;
        margin-left: 1em;
        
        a.active {
            border-top: ${({ theme }) => `solid 3px ${theme.COLORS.PRIMARY};`}
        }
    }
`;

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

export const Picture = Styled.div`
    width: 45px;
    height: 45px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;

export const Content = Styled.div`
    display: none;

    p {
        font-size: .8rem;
    }

    @media screen and (min-width: 1024px) {
        display: block;
        margin-left: 1em;
    }
`;
