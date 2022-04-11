import { ConteinerMenu, ConteinerSubMenu } from "./style"
import { useRouter } from "next/router"
import { useState } from "react"

import Menu from '../../pngs/menu.svg'
import Excluir from '../../pngs/excluir.svg'

import Centralizer from "../Centralizer"
import Link from "next/link"



const HeaderMobile: React.FC = () => {
    const route = useRouter()
    const [open, setOpen] = useState(false)
    const [submenu, setSubmenu] = useState(0)

    return (
        <>
            <ConteinerMenu>

                <div className='flexRow'>
                    <div className='conteinerLogo'>
                        <Link href='/' >
                            <a>
                                <img className="logo" src="https://s3.sa-east-1.amazonaws.com/simacheck.staticimages.prod/Imagens+simacheck2.0/SimacheckLogoHorizontalSvgBranco.svg" alt=""
                                />
                            </a>
                        </Link>
                    </div>
                    {open === false ? <Menu onClick={() => setOpen(true)} /> : <Excluir onClick={() => setOpen(false)} />}
                </div>
            </ConteinerMenu>

            {open === true ?
                <ConteinerSubMenu>
                    <nav className="conteinerNav">
                        <ul className="menu">
                            <li className={route.pathname == '/' ? 'menuItemFixed' : 'menuItemNormal'} >
                                <Link href='/'>
                                    Home
                                </Link>
                            </li>
                            <li className={route.pathname == '/tools' ? 'menuItemFixed' : 'menuItemNormal'}>
                                <Link href="/tools">
                                    SimaTools
                                </Link>
                            </li>
                            <li className={route.pathname == '/library' ? 'menuItemFixed' : 'menuItemNormal'}>
                                <Link href="/library">
                                    SimaLibrary
                                </Link>
                            </li>
                            <li className={route.pathname == '/faq' ? 'menuItemFixed' : 'menuItemNormal'}>
                                <Link href="/">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <ul className="conteinerButtons">
                        <li className='login'>Entrar</li>
                        <li className='cadastro'>Cadastrar</li>
                    </ul>
                </ConteinerSubMenu> : null}




        </>



    )
}

export default HeaderMobile
