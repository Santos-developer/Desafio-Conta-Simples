import React from "react";
import { Link } from "react-router-dom"
import { Footer, Container } from "./styles";
import { ReactComponent as Logo } from "assets/images/logo-conta-simples.svg";

const DashboardFooter = () => (
    <Footer>
        <Container>
            <Logo />
            <Link to="/">Política de Privacidade</Link>
            <Link to="/">Saiba mais sobre segurança</Link>
            <Link to="/">Trabalhe Conosco</Link>
        </Container>
    </Footer>
);

export default DashboardFooter;
