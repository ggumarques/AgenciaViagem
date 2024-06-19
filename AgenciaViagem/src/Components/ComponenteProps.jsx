import Styles from './ComponenteProps.module.css'

function ComponenteProps({lugar, texto, bandeira}){
    return(
        <div className= {Styles.corpoTexto}>
            <h2>Venha Explorar este lugar incrível!! Venha conhecer {lugar}</h2>
            <p>{texto} </p> 
            <img src={bandeira} alt="" className={Styles.imagem} />
        </div>
    )
}

export default ComponenteProps