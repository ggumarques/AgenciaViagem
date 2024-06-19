import Styles from './GrandCanyon.module.css'
import ComponenteProps from './ComponenteProps'
import euaFlag from '../assets/bandeiraeua.webp'

function GrandCanyon(){
    return(
        <div className= {Styles.fundo}>
            <ComponenteProps 
            lugar="Grand Canyon"
            texto= " O Grand Canyon é uma maravilha natural com desfiladeiros imponentes esculpidos ao longo de milênios pelo Rio Colorado. Suas paredes multicoloridas contam a história geológica da Terra. O espetáculo das formações rochosas contrastando com o azul do céu é de tirar o fôlego, atraindo milhões de visitantes todos os anos em busca de uma visão única da vastidão e beleza da natureza."
            bandeira= {euaFlag}/>
        </div>
    )
}

export default GrandCanyon