import Styled from "styled-components"

export const Layout = Styled.div`
    height: 100vh;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr 50px;
    grid-template-areas:
        "navbar"
        "main"
        "footer";
`

export const MainContent = Styled.main`
    grid-area: main;
`