import { Container } from "./style"
import { color } from "../../units/gerals"




const BossStatus: React.FC<{ image: string, status: number }> = ({ image, status }) => {

    function Chance(status: number) {
        if (status > 0.7) {
            return 'Altas Chances!'
        } else if (status > 0.4) {
            return 'Chances medianas'
        } else {
            return 'Baixa chance'
        }
    }

    return (
        <Container>
            <div className="alo" style={{ background: `${color(status)}` }}>
                <div className="fundo">
                    <img src={image} />
                </div>
            </div>
            <div className="legenda">
                <h5>{Chance(status)}</h5>
            </div>


        </Container>
    )
}

export default BossStatus
