import styled from "styled-components"

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;

    .alo{
        display:flex;
        align-items:center;
        justify-content:center;
        background:red;
        width:70%;
        height:70%;
        border-radius:100%;

        .fundo{
            width:80%;
            height:80%;
            border-radius:100%;
            background:${props => props.theme.colors.backgroundLight};
            display:flex;
            align-items:center;
            justify-content:center;

        }


    }

    .legenda{
        position:absolute;
        display:none;
        align-items:center;
        justify-content:center;
        background:${props => props.theme.colors.blackOpacidade6};
        width:80%;
        height:80%;
        text-align:center;
        border-radius:100%;
        color:${props => props.theme.colors.whrite};


    }

    :hover{
        .legenda{
            display:flex;
        }
    }



`
