import Styled from "styled-components";

export const Content = Styled.div`
    height: 100vh;

    background-image: linear-gradient(rgba(0,0,0, .4), rgba(0,0,0, .2)), url(https://images.unsplash.com/photo-1480866179948-2caa74d9082a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
`;

export const Center = Styled.div`
    width: 100%;
    
    top: 40%;
    position: fixed;

    text-align: center;
`;

export const Form = Styled.form`
    max-width: 300px;
    
    margin: 0 auto;
    padding: 1em;
`;

export const Input = Styled.input`
    width: 100%;
    display:block;
    
    padding: 1em;
    border: none;

    border-radius: 10px;
    margin-bottom: 1em;
`;
