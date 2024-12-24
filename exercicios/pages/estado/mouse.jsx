
import { useState } from "react";

export default function mouse() {    

    const [ eixoX, setEixoX ] = useState(0)
    const [ eixoY, setEixoY ] = useState(0)

    function quandoMoverMouse(event) {
        setEixoX(event.clientX)
        setEixoY(event.clientY)
    }

    const estilo = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh",
        flexDirection: "column",        
    }
    

    return (
        <div style={ estilo } onMouseMove={ quandoMoverMouse }>
            <span>Eixo X: { eixoX }</span>
            <span>Eixo Y: { eixoY }</span>
        </div>
    )
}