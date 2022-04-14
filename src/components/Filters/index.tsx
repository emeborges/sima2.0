import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, Radio, RadioGroup, Stack, useDisclosure } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { Container } from "./style"

import Filter from '../../svgs/filter.svg'
import Close from '../../svgs/fechar.svg'

const Filters: React.FC<{ sortName: void | any, sortDrop: void | any }> = ({ sortName, sortDrop }) => {
    const [drawer, setDrawer] = useState(false)



    return (
        <Container>

            <Filter className='filter' onClick={() => setDrawer(true)} />

            {drawer &&
                <div className="filters">
                    <Close className='filter' onClick={() => setDrawer(false)} />
                    <div className="conteudo">
                        <span>Ordenar por:</span>
                        <ul>
                            <li onClick={() => sortName()}>Nome</li>
                            <li onClick={() => sortDrop()}>Chance de aparecimento</li>
                        </ul>
                    </div>
                </div>
            }


        </Container>
    )
}

export default Filters
