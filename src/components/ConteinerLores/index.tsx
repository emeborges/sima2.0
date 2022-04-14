import { Container } from "./style"




const ConteinerLores: React.FC = ({ bosses }) => {

    console.log(bosses)

    const bossesTipo = bosses.reduce((agrupamentoBoss, bossAtual) => {
        agrupamentoBoss[bossAtual.lore] = agrupamentoBoss[bossAtual.lore] || []
        agrupamentoBoss[bossAtual.lore].push(bossAtual)

        return agrupamentoBoss
    }, {})

    console.log('aqui', bossesTipo.Rookgaard?.map(bosses => bosses.boss))


    return (
        <Container>



        </Container>
    )
}

export default ConteinerLores
