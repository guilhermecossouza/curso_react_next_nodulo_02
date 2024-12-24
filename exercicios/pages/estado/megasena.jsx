
import { useState, useEffect } from "react"
import { geraJogos } from "../../funcoes/mega"
import QuantidadeDezenas from "@/components/megaSena/QuantidadeDezenas"
import DesenasSorteadas from "../../components/megaSena/DesenasSorteadas"


import styles from "../../styles/megasena.module.css"

export default function megasena() {   
    const [dezenas, setDezenas] = useState(6);
    const [dezenasSorteadas, setDezenasSorteadas] = useState([]);

    useEffect(() => {
        setDezenasSorteadas(geraJogos(dezenas));
    }, [dezenas])

    return (
        <div className={ styles.megasena }>
            <h1>Mega Sena</h1>  
            <DesenasSorteadas dezenas={dezenasSorteadas} /> 
            <QuantidadeDezenas onChange={setDezenas} value={dezenas}/>  
        </div>
    )
}