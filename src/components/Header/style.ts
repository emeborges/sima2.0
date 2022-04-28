import styled from "styled-components"

export const Container = styled.div`
    width:100%;
    height:5.43rem;
    background: ${props => props.theme.colors.black};
    box-shadow: inset 0 -2px 0 ${props => props.theme.colors.headerShadow};

    .fixed{
        border-bottom: 2px solid ${props => props.theme.colors.redAlert};
        }

    .flexRow{
        height:5.43rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;

        .conteinerLogo{
            height:100%;
            display:flex;
            align-items: center;
            width:25%;

            @media (max-width:600px){
                padding-left: 1rem;
                width:55%;
            }

            .logo{
                max-width:100%;
            }

        }

        .conteinerNav{
            height:100%;
            width:50%;


            .menu {
                display: flex;
                align-items: center;
                justify-content: space-between;
                list-style: none;
                width: 100%;
            }

            li {
                display: flex;
                align-items: center;
                border-bottom: 2px solid transparent;

            }

            .menu > li a {
            height:5.2rem;
            display: flex;
            align-items: center;
            color: white;
            text-decoration: none;
            padding: 0 1rem;


            }

            .menuItemNormal{
                :hover{
                    text-decoration: none;
                    border-bottom: 2px solid ${props => props.theme.colors.redAlert};


                }
            }

            .menuItemFixed{
                border-bottom: 3px solid ${props => props.theme.colors.redAlert};

            }

            .menu > li:hover > .submenu,
            .submenu > li:hover > .submenu {
                display: flex;
            }

            .submenu {
            display: none;
            position: absolute;
            top: 5.4rem;
            background: ${props => props.theme.colors.black};
            box-shadow: inset 0 -2px 0 ${props => props.theme.colors.black};
            left:0;
            right:0;
            padding:3rem;
            width:100%;
            list-style: none;
            justify-content: center;
            align-items: center;
            box-shadow: inset 0 -2px 0 ${props => props.theme.colors.headerShadow};

                a:hover{
                    background: ${props => props.theme.colors.whrite};
                }
            }

            @media (max-width:600px){
                display:none;
            }
        }



        .conteinerButtons{
            color:${props => props.theme.colors.whrite};
            display: flex;
            align-items: center;
            justify-content:space-between;
            list-style: none;


            .login{
                font-size:90%;
                margin:0.5rem;
                padding:0.2rem 1rem;
                border-radius:5px;
                border:1px solid ${props => props.theme.colors.whrite};
                cursor:pointer;

                :hover{
                    background-color:${props => props.theme.colors.whrite};
                    color:${props => props.theme.colors.black};
                    font-weight:700;
                }
            }

            .cadastro{
                border-bottom: 2px solid ${props => props.theme.colors.redAlert};
                font-size:80%;
                margin-right:1rem;
                cursor:pointer;
            }

            @media (max-width:600px){
                display:none;
            }

        }
    }
`
