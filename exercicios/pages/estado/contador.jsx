import { useState } from "react"

export default function contador() {

    const [contador, setContador] = useState(0);

    const estilo = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh",
        flexDirection: "row"
    }


    function aumentar() {
        setContador(contador + 1)
    }

    function diminuir() {
        if(contador === 0) {
            return;
        }
        setContador(contador - 1);
    }


    // const aumentar = () => setContador(contador + 1)
    // const diminuir = () => setContador(contador - 1)


    return (
        <div style={ estilo }>
            <button onClick={ () => aumentar() } style={{ marginRight: "10px", width: "50px" }}>+</button>
            <h1>{contador}</h1>
            <button onClick={ () => diminuir() } style={{ marginLeft: "10px", width: "50px" }}>-</button>
        </div>
    )
}