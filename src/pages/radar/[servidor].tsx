import Head from 'next/head'

import Header from '../../components/Header'
import Centralizer from '../../components/Centralizer'

import { Container } from "../../styles/pages/radar"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import useWindowDimensions from '../../units/useWindowDimension'
import HeaderMobile from '../../components/HeaderMobile'
import { useRouter } from 'next/router'
import { api } from '../../units/services'
import Loader from '../../components/Loader'
import Filters from '../../components/Filters'
import ConteinerBosses from '../../components/ConteinerBosses'
import { BossesDetailsProps } from '../../units/types'
import ConteinerLores from '../../components/ConteinerLores'


const tools: React.FC = () => {
    const { width, height } = useWindowDimensions()
    const [view, setView] = useState('status')
    const [bosses, setBosses] = useState([])
    const [dadoFiltrado, setDadoFiltrado] = useState<string>('colour_frame')
    const [bossesOrganizado, setBossesOrganizado] = useState<BossesDetailsProps[]>([])
    const [load, setLoad] = useState(false)
    const router = useRouter()
    const pid = router.query.servidor

    useEffect(() => {
        if (pid) {
            getBossesInfos(pid)

        } else {
            setLoad(true)
        }
    }, [pid]);

    async function getBossesInfos(server) {
        try {
            const { data } = await api.get(`server/${server}`)
            setBosses(data)
            setBossesOrganizado(data.sort((a, b) => { return b[dadoFiltrado] - a[dadoFiltrado] }))
            setLoad(false)

        } catch (e) {
            console.log(e)
        }
    }

    function sortName() {
        setDadoFiltrado('boss')
        setBossesOrganizado(bosses.sort((a, b) => { return a.boss.localeCompare(b.boss) }))
    }

    function sortDrop() {
        setDadoFiltrado('colour_frame')
        setBossesOrganizado(bosses.sort((a, b) => { return b.colour_frame - a.colour_frame }))
    }


    return (
        <>
            <Head>
                <title>Tools - SimaCheck</title>
                <meta name="description" content="" />
            </Head>
            {width > 790 ? <Header /> : <HeaderMobile />}
            <Container>
                <div className='conteudo'>
                    {load === true ? <Loader /> :
                        <Centralizer>

                            <div className='infos'>
                                <div className="infosServer lateral">
                                    <div className="dadosServidor">
                                        <h5>Servidor:</h5>
                                        <h3>
                                            {pid}
                                        </h3>
                                    </div>
                                    <div className="traco" />
                                    <div className="dadosServidor">
                                        <h5>Data de Referência:</h5>
                                        <h3>
                                            {pid}
                                        </h3>
                                    </div>
                                </div>
                                <div className="infosServer central">
                                    <h5>Bosses mortos ontem:</h5>
                                </div>
                                <div className="infosServer lateral">
                                    <h5>Conteiner ultimo</h5>
                                </div>
                            </div>
                            <div className="title">
                                <div className="line">
                                    <h1>Radar</h1>
                                    <div className="traco" />
                                </div>
                                <div className="selec">
                                    <div className="view">
                                        <p>
                                            Tipo de visualização:
                                        </p>
                                        <ul>
                                            <li className={view === 'status' ? "selecionado" : ""} onClick={() => setView('status')}>
                                                Status
                                                <div className={view === 'status' ?
                                                    "line selected" : "line"} />
                                            </li>
                                            <li className={view === 'lore' ? "selecionado" : ""} onClick={() => setView('lore')}>
                                                Lores
                                                <div className={view === 'lore' ?
                                                    "line selected" : "line"} />
                                            </li>
                                            <li className={view === 'city' ? "selecionado" : ""} onClick={() => setView('city')}>
                                                Cidade
                                                <div className={view === 'city' ?
                                                    "line selected" : "line"} />
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="filters">
                                        <Filters sortName={sortName} sortDrop={sortDrop} filterOn={dadoFiltrado} />
                                    </div>


                                </div>
                            </div>
                            <div className="bossesConteiner">
                                {view === 'status' ? <ConteinerBosses bosses={bossesOrganizado} /> : null}
                                {view === 'lore' ? <ConteinerLores bosses={bossesOrganizado} /> : null}
                            </div>

                        </Centralizer>
                    }
                </div>

                <Footer />
            </Container>


        </>
    )
}

export default tools
