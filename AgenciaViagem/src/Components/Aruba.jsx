import Styles from './Aruba.module.css'
import ComponenteProps from './ComponenteProps'
import arubaFlag from '../assets/bandeiraAruba.png'

function Aruba(){
    return(
        <div className= {Styles.fundo}>
            <ComponenteProps
            lugar= "Aruba"
            texto= "Aruba encanta com suas praias de areias brancas e mar azul-turquesa, ideais para mergulho e relaxamento. A ilha também oferece paisagens áridas e cactos exuberantes no Parque Nacional Arikok, além de sua rica cultura local, marcada pela música e hospitalidade. Um paraíso caribenho de beleza singular."
            bandeira= {arubaFlag}/>
        </div>
    )
}

export default Aruba