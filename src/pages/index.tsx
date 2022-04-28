import Head from 'next/head'

import Header from '../components/Header'
import Centralizer from '../components/Centralizer'

import { Container } from "../styles/pages/home"
import { Chamada, ChamadaWhrite } from '../styles/geral'
import Link from 'next/link'
import { useState } from 'react'
import Footer from '../components/Footer'
import HeaderMobile from '../components/HeaderMobile'
import useWindowDimensions from '../units/useWindowDimension'
import { Button } from '@chakra-ui/react'

const Home: React.FC = () => {
    const [conteinerNum, setConteinerNum] = useState<number>(2)

    function selectConteiner(num) {
        setConteinerNum(num)
    }

    const { width, height } = useWindowDimensions();
    console.log(height)

    return (
        <Container>
            <Head>
                <title>SimaCheck</title>
                <meta name="description" content="" />
            </Head>

            {width > 790 ? <Header /> : <HeaderMobile />}

            <div className='conteinerUm'>
                <Centralizer>
                    <div className='conteinerTxt'>
                        <Chamada>SUA JORNADA NUNCA MAIS SERÁ A MESMA</Chamada>
                        <p>As melhores ferramentas para o seu jogo você encontra aqui!</p>
                        <p>Conheça-as agora!</p>

                        <div className='conteinerBtns'>
                            <Link href=''>
                                <button>
                                    SimaBosses
                                </button>
                            </Link>
                            <Link href=''>
                                <button>
                                    SimaCalc
                                </button>
                            </Link>
                            <Link href=''>
                                <button>
                                    SimaTimer
                                </button>
                            </Link>
                            <Link href=''>
                                <button >
                                    SimaLibrary
                                </button>
                            </Link>
                        </div>
                    </div>
                </Centralizer>
            </div>
            <div className='conteinerDois'>
                <Centralizer>
                    <div className="conteinerImg">
                        <img className="imagemFundo one" src="https://s3.sa-east-1.amazonaws.com/simacheck.staticimages.prod/Imagens+simacheck2.0/SimaCapa.png" alt="" />
                        <img className="imagemFundo two" src="https://s3.sa-east-1.amazonaws.com/simacheck.staticimages.prod/Imagens+simacheck2.0/CyfCapa.png" alt="" />
                        <img className="imagemFundo three" src="https://s3.sa-east-1.amazonaws.com/simacheck.staticimages.prod/Imagens+simacheck2.0/bttCapa.png" alt="" />
                    </div>
                </Centralizer>
            </div>
            <div className='conteinerTres'>
                <Centralizer>
                    <div className='conteinerTxt'>
                        <ChamadaWhrite>CONHEÇA NOSSAS FERRAMENTAS</ChamadaWhrite>
                        <p>As melhores ferramentas para o seu jogo você encontra aqui!</p>
                        <p>Conheça-as agora!</p>
                    </div>
                    <div className='contentTools'>
                        <div className='conteinerDivs'>
                            <button onClick={() => selectConteiner(1)} className={conteinerNum == 1 ? 'btns ativo' : 'btns'}>
                                SimaBosses
                            </button>
                            <button onClick={() => selectConteiner(2)} className={conteinerNum == 2 ? 'btns ativo' : 'btns'}>
                                SimaCalc
                            </button>
                            <button onClick={() => selectConteiner(3)} className={conteinerNum == 3 ? 'btns ativo' : 'btns'}>
                                SimaTimer
                            </button>
                            <button onClick={() => selectConteiner(4)} className={conteinerNum == 4 ? 'btns ativo' : 'btns'}>
                                SimaLibrary
                            </button>
                        </div>
                        <div className='conteinerConteudo'>
                            {conteinerNum == 1 ? <p>O sima bosses conteúdo....</p> : null}
                            {conteinerNum == 2 ? <p>O sima calc conteúdo....</p> : null}
                            {conteinerNum == 3 ? <p>O sima timer conteúdo....</p> : null}
                            {conteinerNum == 4 ? <p>O sima journal ....</p> : null}
                        </div>
                    </div>
                </Centralizer>
            </div>

            <div className='conteinerQuatro'>
                <Centralizer>
                    <div className='conteinerInLine'>
                        <div className='conteinerTxt'>
                            <Chamada>Quem somos?</Chamada>
                            <h2>SimaGuild ou SimaEquipe?!</h2>
                            <p>Chegamos aqui não tão só, tudo aqui foi na base da raça e do KS em hunt!</p>

                            <button className='btns' >
                                Conheça a nossa equipe!
                            </button>
                        </div>
                        <div className='line' />
                        <div className='conteinerTxt'>
                            <Chamada>Tá com dúvida?</Chamada>
                            <h2>Como funciona, o que é DLD, quando aparece?!</h2>
                            <p>Já que as informações não são poucas, fizemos um guia ideal para você entender todos os relatórios</p>

                            <button className='btns' >
                                Veja ai!
                            </button>
                        </div>
                    </div>
                </Centralizer>
            </div>

            <Footer />


        </Container>
    )
}

export default Home
