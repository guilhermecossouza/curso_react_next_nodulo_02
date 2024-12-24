import { useState } from "react"

export default function formulario() {
    const [input, setInput] = useState("");
    
    return (
        <div>
            <p>{input}</p>
            <form action="">
                <input type="text" name="nome" id="nome" value={input} onChange={(event) => setInput(event.target.value)}/>
            </form>
        </div>
    )
}