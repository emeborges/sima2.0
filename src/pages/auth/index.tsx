import Head from 'next/head'
import useWindowDimensions from '../../units/useWindowDimension'

import { Container } from "../../styles/pages/auth"


const tools: React.FC = () => {
    const { width, height } = useWindowDimensions();

    return (
        <>
            <Head>
                <title>Login - SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            <Container>

                <div className="loginConteiner">
                    <img className="logo" src="https://s3.sa-east-1.amazonaws.com/simacheck.staticimages.prod/Imagens+simacheck2.0/SimacheckLogoHorizontalSvgBranco.svg" alt=""
                    />

                    <input type='text'>
                    </input>
                </div>



            </Container>
        </>
    )
}

export default tools
