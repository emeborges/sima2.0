import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${props => props.theme.colors.backgroundLight};
        font: 400 16px Roboto, sans-serif;
        color: ${props => props.theme.colors.black};
    }
`
