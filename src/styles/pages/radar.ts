import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    min-height:100%;

    .conteudo{
        min-height:85.3vh;

        .infos{
            width:100%;
            padding: 0.5rem 0rem;
            display:flex;
            justify-content:space-between;

            @media (max-width:600px){
                flex-wrap:wrap;

            }

            .lateral{
                align-items:center;
                width: 30%;

                @media (max-width:600px){
                    width:96%;
                    margin:0.5rem 0.5rem;
                }
            }

            .central{
                width: 38%;

                @media (max-width:600px){
                    width:96%;
                    margin:0.5rem 0.5rem;
                }
            }

            .infosServer{
                border-radius:5px;
                box-shadow:0px 0px 5px ${props => props.theme.colors.borderGrey};
                padding: 0.5rem;
                display:flex;
                height:5rem;
                justify-content:center;



                .dadosServidor{
                    width:50%;
                    display:flex;
                    flex-direction: column;
                    align-items:center;

                    h3{
                        font-weight:400;
                    }
                }

                .traco{
                    height:2.5rem;
                    width:1%;
                    border-left:1px solid ${props => props.theme.colors.black};
                    opacity:30%;

                    @media(max-width:600px){
                        border-bottom:1px solid ${props => props.theme.colors.black};
                        border-left:none;
                    }
                }

            }
        }

        .title{

            .line{
                width:100%;
                display:flex;
                align-items:center;


                h1{
                margin-right:0.75rem;
                }

                .traco{
                    width:100%;
                    border-bottom:1px solid ${props => props.theme.colors.black};
                    opacity:30%;

                    @media(max-width:600px){
                        border-bottom:1px solid ${props => props.theme.colors.black};
                        border-left:none;
                    }
                }
            }

            .selec{
                display:flex;
                width:100%;
                align-items:center;
                justify-content:space-between;

                p{
                    font-size:80%;
                }

                .view{
                    display:flex;
                    align-items:center;

                    ul{
                        display:flex;
                        list-style: none;

                        li{
                            margin:5px;
                            text-decoration:none;
                            cursor: pointer;
                            color: ${props => props.theme.colors.black};

                            .line {
                                width: 0.5rem;
                                border-bottom: 2px solid ${props => props.theme.colors.redAlert};
                            }

                            :hover {
                                font-weight: 700;
                                .line {
                                    width: 2rem;
                                    transition-timing-function: ease;
                                }
                            }

                            .selected {
                                width: 2rem;
                            }
                        }

                        .selecionado{
                            font-weight:700;
                        }
                    }
                }




            }
        }

        .bossesConteiner{
            padding:1rem 0rem;

            .conteiner{
                width:30%;
                border-radius:5px;
                box-shadow:0px 0px 5px ${props => props.theme.colors.borderGrey};
                padding: 0.5rem;
            }
        }




    }

`
