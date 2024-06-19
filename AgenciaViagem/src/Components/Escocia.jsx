import Styles from './Escocia.module.css'
import ComponenteProps from './ComponenteProps'
import EscociaFlag from '../assets/bandeiraEscocia.png'

function Escocia(){
    return(
        <div className= {Styles.fundo}>
            <ComponenteProps 
            lugar="a Escócia"
            texto= " A beleza da Escócia é uma sinfonia de contrastes: das majestosas montanhas das Highlands aos serenos lagos de águas cristalinas; das ruínas ancestrais de castelos à arquitetura imponente de Edimburgo. Cada paisagem é uma pintura viva, imortalizada pela sua história e pela natureza selvagem que a abraça."
            bandeira= {EscociaFlag}/>
        </div>
    )
}

export default Escocia