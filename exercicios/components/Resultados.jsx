
import { useState } from "react"

import styles from "../styles/resultado.module.css"

export default function Resultados(props) {
    const [dezenas, setDezenas] = useState([]);
    
    for (let index = 0; index < props.jogosGerar; index++) {
        dezenas.push(Math.floor(Math.random() * 60) + 1);
    }

    console.log(dezenas);
    
    return (
        <div className={ styles.resultados }>  
            {dezenas.map((item) => {
                return<div className={ styles.resultadosDiv }>{item}</div>
            })}
                      
        </div>
    )
}