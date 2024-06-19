import Styles from './Footer.module.css'
import Face from '../assets/logoFace.jpg'
import Whats from '../assets/imgWhats.png'
import Insta from '../assets/logoInsta.jpg'
import Tiktok from '../assets/imgTiktok.png'


function Footer(){
    return(
        <footer>
            <p>Siga-nos em nossas redes sociais</p>
            <div className={Styles.imagens}>
                <img src={Face} />
                <img src={Whats}/>
                <img src={Insta} />
                <img src={Tiktok} />
            </div>
            <p>Telefone de contato: (11) 4002-8922</p>
        </footer>
    )
}

export default Footer