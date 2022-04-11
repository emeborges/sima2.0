import Head from 'next/head'

import Header from '../../components/Header'
import Centralizer from '../../components/Centralizer'

import { Container } from "../../styles/pages/tools"

import Link from 'next/link'
import { useState } from 'react'
import Footer from '../../components/Footer'
import { Chamada } from '../../styles/geral'
import useWindowDimensions from '../../units/useWindowDimension'
import HeaderMobile from '../../components/HeaderMobile'



const tools: React.FC = () => {
    const { width, height } = useWindowDimensions();

    return (
        <>
            <Head>
                <title>Library - SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            {width > 790 ? <Header /> : <HeaderMobile />}
            <Container>
                <Centralizer>
                    <div className='conteudo'>
                        <div className='title'>
                            <p>Em resumo, onde chegamos com tudo isso? </p>
                            <Chamada>Informações e dados diretamente para você!</Chamada>
                            <h3>Entenda, analise e entenda. </h3>
                        </div>
                        <div className='containerTools'>
                            <div className='tools'>
                                <div className='conteinerTitleTools'>
                                    <h3>SimaBlog</h3>
                                    <div className='line' />
                                </div>

                                <p>Teste</p>
                            </div>
                        </div>
                        <div className='containerTools'>
                            <div className='tools'>
                                <div className='conteinerTitleTools'>
                                    <h3>SimaLog</h3>
                                    <div className='line' />
                                </div>

                                <p>Teste</p>
                            </div>
                        </div>
                    </div>



                </Centralizer>
                <Footer />
            </Container>


        </>
    )
}

export default tools
