import styled from "styled-components"

export const Container = styled.div`
    color:#fff;

    .filter{
        cursor:pointer;
        margin-right:1rem;
    }

    .filters{
        background:${props => props.theme.colors.filterBackground};
        position: fixed;
        color:#fff;
        z-index:10;
        width:30vw;
        height:100vh;
        top:0;
        right:0;
        padding:1rem;
        transition: ease-in;

        .conteudo{
            width:50%;
            display:flex;
            background:red;
            flex-direction:column;

            ul{
                list-style:none;
                text-align:center;
            }
        }
    }


`
