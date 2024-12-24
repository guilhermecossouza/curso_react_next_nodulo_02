import { useState } from "react"

export default function lista1() {
    const [qtd, setQtd] = useState(0)
    const [ arraySpan, setArraySpan ] = useState([])
    function montaArray() {
        const qtdArray = []
        if (qtd > 0) {
            for (let index = 0; index < qtd; index++) {
                qtdArray.push(index)
            }
        }
        setArraySpan(qtdArray)
    }

    return (
        <div>
            <input type="number" name="qtd" onChange={(event) => {  setQtd(event.target.value)}} value={qtd}/>
            <button onClick={ montaArray }>mostrar</button>
            <br/>
            { arraySpan.length > 0 && arraySpan.map((item) => <span>{item + 1},</span>) }
        </div>
    )
}