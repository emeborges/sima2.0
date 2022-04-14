import Head from 'next/head'
import useWindowDimensions from '../../units/useWindowDimension'

import { Container, Chamada } from "../../styles/pages/auth"
import Header from '../../components/Header';



const tools: React.FC = () => {
    const { width, height } = useWindowDimensions();

    return (
        <>
            <Head>
                <title>Login - SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            <Header />
            <Container>
                <div className="chamadaConteiner">
                    <Chamada>SUA JORNADA NUNCA MAIS SERÁ A MESMA.</Chamada>

                </div>


                <div className="loginConteiner">
                    <form>
                        <div className="inputsConteiner">
                            <input type="email" name="" id="" placeholder="E-mail" />
                        </div>
                        <div className="inputsConteiner">
                            <input type="password" name="" id="" placeholder="Senha" />
                        </div>
                        <div className="linksConteiner">
                            <a>Esqueci minha senha</a>
                            <a>Não tem uma conta? <span> Registrar-se</span></a>
                        </div>

                        <button>ENTRAR</button>


                    </form>
                </div>



            </Container>
        </>
    )
}

export default tools
