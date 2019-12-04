import Styled from "styled-components";
import MainContainer from "components/Container"

export const Footer = Styled.footer`
    grid-area: footer;
`;

export const Container = Styled(MainContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    a {
        font-size: .8rem;
        font-weight: 600;
        margin-bottom; 1em;


    }

    a:hover {
        color: ${({ theme }) => `${theme.COLORS.PRIMARY};`}
    }

    svg {
        width: 100px;
        margin: 1em;
    }

    @media screen and (min-width: 800px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`