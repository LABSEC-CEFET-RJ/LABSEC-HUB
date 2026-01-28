import styles from "./style.module.css";
import { useNavigate } from 'react-router-dom';
import logoLabsec from '../../assets/Logo_name_labsec-removebg-preview 1.svg';
import logo2labsec from '../../assets/Rectangle.svg'

function Header() {
    const navigate = useNavigate();
    async function login(){
        console.log('login')
    }

    function navigation(event: { currentTarget: { getAttribute: (arg0: string) => any; }; }){

       const rota = event.currentTarget.getAttribute('data-route')
       navigate(rota)
    }

    return(
        <header className={`container text-center ${styles.header}`}>
           <div className={` container text-center ${styles.logos}`}>
        
            <img alt="logo" src={logo2labsec}/>
            <img  className={`container ${styles.logos2}`} alt="Logo2" src={logoLabsec}/>
           </div>
           <div className={`${styles.links}`}>
            
            <button data-route="/" onClick={navigation}>Home</button>
            <button data-route="/?" onClick={navigation}>Aulas</button>
            <button data-route="/?" onClick={navigation}>FAQ</button>
            <button data-route="/About" onClick={navigation}>Sobre</button>
           </div>
           <div className={`${styles.access}`}>
            <button onClick={login}>Login</button>
            <button>Contatar</button>
           </div>
        </header>

    )
}


export default Header;