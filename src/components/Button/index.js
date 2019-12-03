import Styled from "styled-components"

export default Styled.button`
    color: white;
    border: none;
    border-radius: 4px;
    padding: .8em 1em;
    background-color: ${({ theme }) => `${theme.COLORS.PRIMARY};`}

    width: ${({ fullWidth }) => fullWidth && '100%;'}
    text-transform: ${({ uppercase }) => uppercase && 'uppercase;'}
`