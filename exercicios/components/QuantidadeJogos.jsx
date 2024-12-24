import { useState } from 'react'

import styles from "../styles/quantidadesjogos.module.css"

export default function QuantidadeJogos(props) {
    const [qtdJogos, setQtdJogos] = useState(6);

    function minMaxJogos(value) {
        if (value < 6 || value > 15) {
            return
        }    
        setQtdJogos(value)
    }

    return (
        <div className={ styles.quantidadejogos }>
            <input type="number" name="qtd" value={qtdJogos} onChange={(event) => minMaxJogos(event.target.value)}/>
            <button onClick={() => props.funcQtdJogos(qtdJogos)}>Gerar</button>
        </div>
    )
}