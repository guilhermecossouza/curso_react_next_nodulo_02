export default function repeticao1() {
    const listaAprovados = ["Guilherme", "Joaquim", "Pedro", "Ana", "Kenia", "Gabriel", "Hiago"]


    function renderizarLista () {
        // 1° Forma 
        // const itens = []
        // for(let i = 0; i < listaAprovados.length; i++) {
        //     itens.push(<li key={i}>{listaAprovados[i]}</li>)
        // }
        // return itens

        return listaAprovados.map((item, key) => <li key={key}>{item}</li>)
    }

    return (
        <div>
            <ul>
                {renderizarLista()}
            </ul>
        </div>
    )
}