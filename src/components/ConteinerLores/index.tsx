import { BossesDetailsProps } from '../../units/types'
import { useState } from "react"
import { Flex } from "@chakra-ui/react"

interface bossesAgrupadosTypes {
    CultismWorkship?: BossesDetailsProps[]
    HumansHeroes?: BossesDetailsProps[]
    InbredBeasts?: BossesDetailsProps[]
    LoyalPartners?: BossesDetailsProps[]
    PitsofInfernoLeaders?: BossesDetailsProps[]
    PrisionRulers?: BossesDetailsProps[]
    Rookgaard?: BossesDetailsProps[]
    TribeChiefs?: BossesDetailsProps[]
    VampireLords?: BossesDetailsProps[]
    Teste?: BossesDetailsProps[]
}

const ConteinerLores: React.FC<{ bosses: BossesDetailsProps[] }> = ({ bosses }) => {

    const bossesTipo: bossesAgrupadosTypes = bosses.reduce((agrupamentoBoss, bossAtual) => {

        agrupamentoBoss[bossAtual.lore.replace(/\s+/g, '')] = agrupamentoBoss[bossAtual.lore.replace(/\s+/g, '')] || []
        agrupamentoBoss[bossAtual.lore.replace(/\s+/g, '')].push([bossAtual])

        return agrupamentoBoss
    }, {})


    console.log('aqui', bossesTipo.Teste)


    return (
        <Flex>



        </Flex>
    )
}

export default ConteinerLores
