import {Link} from 'react-router-dom'
import Style from './header.module.css'
import Logo from '../assets/imgLogo.jpg'
import Lupa from  '../assets/imagem.png'

function Header(){
    return(
        <div>
            <header className={Style.menu}>
                <nav className={Style.navLeft}>
                    <img className={Style.logo} src={Logo}/>
                </nav>

                <nav className={Style.navCenter}>

                <ul>
                    <li>
                       <Link to='/'> Home</Link>
                    </li>

                    <li>
                         <Link to='/Escocia'>Escócia</Link>
                    </li>

                    <li>
                        <Link to='/GrandCanyon'> GrandCanyon</Link>
                    </li>

                    <li>
                        <Link to='/China'>Muralha da China</Link>
                    </li>

                    <li>
                        <Link to='/Aruba'>Aruba</Link>
                    </li>
                    
                </ul>
                
                </nav>

                <nav className={Style.navRight}>
                    <input type="text" />
                    <img src={Lupa} />
                </nav>
            </header>
        </div>
    )
}

export default Header