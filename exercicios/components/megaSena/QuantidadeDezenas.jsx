import { useState } from "react"

export default function QuantidadeDezenas(props) {
    const [qtdDezenas, setQtdDezenas] = useState(props.value);

    function minMaxDezenas(value) {
        if (value < 6 || value > 15) {
            return
        }    
        setQtdDezenas(value);
    }
    
    return (
        <div style={{display: "flex", gap: "10px"}}>
            <input type="number" name="quantidade" value={qtdDezenas} onChange={(event) => minMaxDezenas(event.target.value)} />     
            <button onClick={() => props.onChange(qtdDezenas)}>Gerar</button>   
        </div>
    )
}