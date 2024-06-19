import Styles from './China.module.css'
import ComponenteProps from './ComponenteProps'
import flagChina from '../assets/bandeiraChina.webp'

function China(){
    return(
        <div className= {Styles.fundo}>
            <ComponenteProps
            lugar= "a Muralha da China"
            texto="A Grande Muralha da China é uma maravilha histórica e arquitetônica que se estende por milhares de quilômetros através de montanhas e vales. Suas torres de vigia e passagens sinuosas oferecem vistas deslumbrantes da paisagem circundante. É um testemunho impressionante da engenhosidade humana e um ícone cultural que atrai visitantes de todo o mundo."
            bandeira= {flagChina}/>
        </div>
    )
}

export default China