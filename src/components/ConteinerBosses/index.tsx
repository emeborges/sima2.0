import { Container } from "./style"
import { BossesDetailsProps } from '../../units/types'
import BossStatus from "../BossesStatus"
import { Porcentagem } from "../../units/gerals"



const ConteinerBosses: React.FC<{ bosses: BossesDetailsProps[] }> = ({ bosses }) => {

    console.log(bosses)

    return (
        <Container>
            {bosses?.map((boss =>
                <div className="box">
                    <BossStatus image={boss.image_url} status={boss.colour_frame} />

                    <div className="dadosBoss">
                        <div className="title">
                            <h4>
                                {boss.boss}
                            </h4>
                            <h6>{boss.lore}</h6>
                        </div>
                        <div className="infos">
                            <h4><span>Chance Calculada</span>{Porcentagem(boss.current_prob)}%</h4>
                            <h4><span>Chance Projetada</span>{Porcentagem(boss.colour_frame)}%</h4>
                        </div>
                        <div className="links">
                            <a>Ver informações detalhadas</a>
                        </div>
                    </div>
                </div>))}



        </Container>
    )
}

export default ConteinerBosses
