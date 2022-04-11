import styled from "styled-components"

export const Container = styled.div`
    width:100vw;
    height:100vh;
    background-color: ${props => props.theme.colors.black};
    color:${props => props.theme.colors.whrite};
    display:flex;
    align-items:center;
    justify-content:center;

    .loginConteiner{
        width:100%;
        max-width:30vw;
        height:60%;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        background-color:${props => props.theme.colors.backgroundLogin};
        border-radius: 5px;

        .logo{
            max-width:80%;
        }

    }

`
