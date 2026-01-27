import styles from "./style.module.css";

export const Header = () => {
    async function login(){
        console.log('login')
    }
    return(
        <header className={`container text-center ${styles.header}`}>
           <img alt="Logo-projeto"/>
           <div className={`container text-center ${styles.links}`}>
            {/*Vou trocar todos os <a> por buttons assim que configurar o useNavigate()*/}
            <a>Home</a>
            <a>Aulas</a>
            <a>FAQ</a>
            <a>Sobre</a>
           </div>
           <div className={`container text-center ${styles.access}`}>
            <button onClick={login}>Login</button>
            <button>Contatar</button>
           </div>
        </header>

    )
}
