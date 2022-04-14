import styled from "styled-components"

export const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;

    .box{
        display:flex;
        width:17.7rem;
        height:7rem;
        margin:0.5rem 0.5rem;
        border-radius:10px;
        box-shadow: 0px 0px 5px ${props => props.theme.colors.darkShadow};
        padding:0.25rem;

        .dadosBoss{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-between;
            margin:0 auto;

            .title{
                width:100%;
                display:flex;
                flex-direction:column;
                align-items:center;
            }

            .infos{
                width:100%;
                display:flex;
                justify-content:space-around;


                h4{
                    width:40%;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:space-around;
                    span{
                        font-size:60%;
                    }
                }
            }
        }

        .links{
            display:none;
            cursor:pointer;
            font-size:90%;
        }

        :hover{
            .links{
                display:flex;
            }
        }
    }
`
