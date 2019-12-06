import React from "react";
import { 
    Navbar,
    NavbarBrand,
} from "./styles";

import { ReactComponent as Logo } from 'assets/images/logo-conta-simples.svg'

const AuthNavbar = ({ routes }) => {
    return (
        <Navbar>
            <NavbarBrand to="/auth/login">
                <Logo />
            </NavbarBrand>
        </Navbar>
    )
};

export default AuthNavbar;
