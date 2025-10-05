import { useState, useEffect } from "react";
import styles from "./style.module.css";

export const ModalTip = (props) => {
    const [isActive, setIsActive] = useState(props.showTip);
    var [cont, setCont] = useState(0);
    
    //fazer a lógica para fechar no pai depois
    useEffect( () => {
        const exit = () => {
            cont++; //quebra galho temporário
            if (cont > 1)
            setIsActive(false);
        };
        
        document.addEventListener("click", exit);

        return () => {
        document.removeEventListener("click", exit);
        };
    }, []);

    return(
        <div className={isActive ? `${styles.TipDiv}`: `${styles.Hidden}`}>
                <p className={`${styles.ModalContent}`}>{props.text}</p>
        </div>

    )

}