import styled from "styled-components"
import theme from "../theme"

export const Container = styled.div`
    width: 100%;

    .conteinerUm {
        height:60vh;
        display:flex;
        justify-content:center;
        align-items:center;



        .conteinerTxt{
            width:60%;
            text-align:center;
            margin:auto auto;

            @media only screen and (max-width: 600px) {
                padding-top:150px;
                width:90%;
            }

            p{
            padding:0.5rem 0rem 0rem 0.2rem;
            }

            .conteinerBtns{
                padding:1rem;
                display:flex;
                justify-content:space-between;
                flex-wrap:wrap;

                @media only screen and (max-width: 600px) {
                    justify-content:space-around;
                }



            }
        }
    }

    .conteinerDois{
        height:80vh;
        background-image: linear-gradient(to bottom, ${props => props.theme.colors.whrite} 0, ${props => props.theme.colors.whrite} 50%, ${props => props.theme.colors.black} 50%);

        @media only screen and (max-width: 600px) {
                height:100%;
            }

        .conteinerImg{
            display:flex;
            flex-direction:column;
            height:80vh;
            position:relative;
            overflow:hidden;
            align-items:center;
            justify-content:center;

            @media only screen and (max-width: 600px) {
                height:60vh;
            }

        }

        .imagemFundo{
            position:absolute;
            max-width:100%;
            max-height:100%;
            opacity:0;
            animation-name: animacao;
            animation-duration:15s;
            animation-iteration-count: infinite;
            border-radius:10px;
            box-shadow: 0px 1px 20px ${props => props.theme.colors.darkShadow};
        }

        .one{

        }
        .two{
            animation-delay:5s;
        }
        .three{
            animation-delay:10s;
        }
    }

    .conteinerTres{
        padding: 5rem;
        background-color: ${props => props.theme.colors.black};
        color: ${props => props.theme.colors.whrite};

        @media only screen and (max-width: 600px) {
                padding: 1rem 0rem;
        }

        .conteinerTxt{
            width:60%;
            text-align:center;
            margin:auto auto;
            color: ${props => props.theme.colors.whrite};
            padding: 0rem 0rem 1rem 0rem;

            @media only screen and (max-width: 600px) {
                width:90%;
            }

            p{
            padding:0.5rem 0rem 0rem 0.2rem;
            }
        }

        .contentTools {
            max-width:100%;
            display:flex;
            flex-direction: column;
            align-items:center;

            @media only screen and (max-width: 600px) {
                align-items:flex-start;
            }

            .conteinerDivs{
                width:80%;
                display: grid;
                grid-template-columns: repeat(4,1fr);

                @media only screen and (max-width: 600px) {
                    width:97%;
                    margin:0 auto;
                }
            }

            .btns{
                font-size:18px;
                margin: 0;
                width:100%;
                padding:1rem 0rem;
                border:1px solid ${props => props.theme.colors.borderGrey};
                background-color:transparent;
                color: ${props => props.theme.colors.whrite};
                cursor:pointer;


                :first-child{
                    border-top-left-radius: 5px;
                }
                :last-child{
                    border-top-right-radius: 5px;
                }

            }

            .ativo{
                font-weight:bold;
                font-size:18px;
                border-top: 2px solid ${props => props.theme.colors.redAlert};
                text-decoration-color:${props => props.theme.colors.redAlert};
                background-color: ${props => props.theme.colors.whriteOpacity7}
            }

            .conteinerConteudo{
                min-width:80%;
                max-width:80%;
                border-bottom-right-radius: 5px;
                border-bottom-left-radius: 5px;

                border: 1px solid ${props => props.theme.colors.borderGrey};

                @media (max-width: 600px) {
                    margin:0 auto;
                    min-width:97%;
                max-width:97%;

                }
            }
        }
    }

    .conteinerQuatro{
        margin:0 auto;
        height:100%;

        .conteinerInLine{
            display:flex;
            align-items:center;

            @media only screen and (max-width: 600px) {
                    flex-direction:column;
            }

            .conteinerTxt{
                text-align:center;
                width:50%;
                padding:1rem;

                @media only screen and (max-width: 600px) {
                    width:100%;
                }

                h2{
                    padding:1rem;
                }

                p{
                    padding:0.3rem 0rem;
                }


            }

            .line{
                height:90px;
                border-right: 1px solid red;

                @media only screen and (max-width: 600px) {
                    display:none;
                }
            }


    }

    @keyframes animacao {
        25% {opacity:1;}
        100% {opacity:0;}
    }

    .radioNone{
        display:none;
    }


`
