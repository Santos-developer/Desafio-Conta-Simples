import Styled from "styled-components";

export default Styled.div`
    color: white;
    margin-left: .5em;
    padding: .2em;
    font-size: .8em;

    border-radius: .2em;
    background-color: ${({ theme }) => `${theme.COLORS.PRIMARY};`}
`