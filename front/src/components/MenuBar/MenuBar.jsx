import styles from "./style.module.css";

export const MenuBar = () => {
    return(
        <header className={` ${styles.menu_div} `}>
            <img src="src/assets/logo.png" alt="" />
            <h1 className='m-0'> <spam className={` ${styles.vermelho} `}>L</spam><spam spam className={` ${styles.azul} `}>A</spam><spam className={` ${styles.azul} `}>B</spam><spam spam className={` ${styles.vermelho} `}>S</spam><spam className={` ${styles.azul} `}>E</spam><spam spam className={` ${styles.vermelho} `}>C</spam></h1>
            <ul>
                <li ><a className="nav-link" href="#sobre">Sobre o Projeto</a></li>
                <li><a className="nav-link" href="#maquinas">Máquinas</a></li>
                <li><a className="nav-link" href="#equipe">Equipe</a></li>
            </ul>
        </header>

    )

}