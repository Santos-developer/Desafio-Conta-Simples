import Styled from "styled-components"
import { Link } from "react-router-dom"

export const Navbar = Styled.nav`
    display: flex;
    align-items: center;
    min-height: 65px;

    width: 100%;
    position: fixed;

    background-color: white;
    box-shadow: 1px 1px 9px #f2f2f2;
    border-bottom: solid 1px #e9ebe8;
    z-index: 1;
`

export const NavbarBrand = Styled(Link)`
    width: 200px;
    padding-right: 4.4rem;
    padding-left: 15px;

    svg {
        width: 100%;
    }
`