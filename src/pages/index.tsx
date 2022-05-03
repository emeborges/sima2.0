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
import { Button, Flex, Heading, Image, List, ListIcon, ListItem, Text } from '@chakra-ui/react'

import { GiRadarSweep, GiCalculator } from 'react-icons/gi'
import { IoTimerOutline, IoLibraryOutline } from 'react-icons/io5'
import HomeSimaBossesText from '../components/HomeSimaBossesText/SimaBosses'
import HomeSimaCalcText from '../components/HomeSimaBossesText/SimaCalc'
import HomeSimaTimer from '../components/HomeSimaBossesText/SimaTimer'
import HomeSimaLibrary from '../components/HomeSimaBossesText/SimaLibrary'



const Home: React.FC = () => {
    const [conteinerNum, setConteinerNum] = useState<number>(2)

    function selectConteiner(num) {
        setConteinerNum(num)
    }

    const { width, height } = useWindowDimensions();

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
                            <Button
                                mt={'0.5rem'}
                                bg={'#e1e1e6'}
                                w={'10rem'}
                                h={'5rem'}
                                p={'0.5rem'}
                                display={'flex'}
                                flexDir={'column'}
                                justifyContent={'space-around'}
                                _hover={{ bg: '#737380' }}
                            >
                                <GiRadarSweep style={{ height: '2rem', width: '2rem' }} />
                                SimaBosses
                            </Button>
                            <Button
                                mt={'0.5rem'}
                                bg={'#e1e1e6'}
                                w={'10rem'}
                                h={'5rem'}
                                p={'0.5rem'}
                                display={'flex'}
                                flexDir={'column'}
                                justifyContent={'space-around'}
                                _hover={{ bg: '#737380' }}
                            >
                                <GiCalculator style={{ height: '2rem', width: '2rem' }} />
                                SimaCalculadora
                            </Button>
                            <Button
                                mt={'0.5rem'}
                                bg={'#e1e1e6'}
                                w={'10rem'}
                                h={'5rem'}
                                p={'0.5rem'}
                                display={'flex'}
                                flexDir={'column'}
                                justifyContent={'space-around'}
                                _hover={{ bg: '#737380' }}
                            >
                                <IoTimerOutline style={{ height: '2rem', width: '2rem' }} />
                                SimaTimer
                            </Button>
                            <Button
                                mt={'0.5rem'}
                                bg={'#e1e1e6'}
                                w={'10rem'}
                                h={'5rem'}
                                p={'0.5rem'}
                                display={'flex'}
                                flexDir={'column'}
                                justifyContent={'space-around'}
                                _hover={{ bg: '#737380' }}
                            >
                                <IoLibraryOutline style={{ height: '2rem', width: '2rem' }} />
                                SimaLibrary
                            </Button>
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
                            {conteinerNum == 1 ? <HomeSimaBossesText /> : null}
                            {conteinerNum == 2 ? <HomeSimaCalcText /> : null}
                            {conteinerNum == 3 ? <HomeSimaTimer /> : null}
                            {conteinerNum == 4 ? <HomeSimaLibrary /> : null}
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

                            <Button mt={'1rem'} w={'20rem'} bg={'#121214'} color={'#fff'} _hover={{ color: '#121214', bg: '#fff', border: '1px solid #121214' }}>
                                Conheça nossa equipe!
                            </Button>
                        </div>
                        <div className='line' />
                        <div className='conteinerTxt'>
                            <Chamada>Tá com dúvida?</Chamada>
                            <h2>Como funciona, o que é DLD, quando aparece?!</h2>
                            <p>Já que as informações não são poucas, fizemos um guia ideal para você entender todos os relatórios</p>

                            <Button mt={'1rem'} w={'20rem'} bg={'#121214'} color={'#fff'} _hover={{ color: '#121214', bg: '#fff', border: '1px solid #121214' }}>
                                Saiba mais
                            </Button>
                        </div>
                    </div>
                </Centralizer>
            </div>

            <Footer />


        </Container>
    )
}

export default Home
