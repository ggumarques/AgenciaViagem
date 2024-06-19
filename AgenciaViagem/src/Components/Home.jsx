import Styles from './Home.module.css'
import Mala from '../assets/imgMala.jpg'

function Home(){
    return(
        <div>
            <div className={Styles.rigthSection}>
                <div><h1>Encontre a viagem do seus sonhos!!</h1></div>
                <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas similique corporis ea unde  voluptate soluta eaque, consequuntur iusto sit delectus asperiores, quasi, quam aut nemo! Nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero dolor natus praesentium quasi nostrum molestiae possimus, dignissimos quas veniam sed molestias cum itaque in et sequi consequuntur impedit optio.</p></div>
            </div>

            <div className={Styles.sectionHome}>
                <div className={Styles.imgMala}>
                    <img src={Mala} />
                </div>
            </div>
        
        </div>
    )
}

export default Home




