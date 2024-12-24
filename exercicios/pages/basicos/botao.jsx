function acao1 () {
    console.log('acao 1')
}

export default function botao() {
    function acao2 () {
        console.log('acao 2')
    }

    function acao5 (param) {
        console.log(param)
    }

    return (
        <div>
            <button onClick={acao1}>Botao 1</button>
            <button onClick={acao2}>Botao 2</button>
            <button onClick={function () {
                console.log('acao 3')
            }}>Botao 3</button>
            <button onClick={() => console.log('acao 4')}>Botao 4</button>
            <button onClick={() => acao5("zaca")}>Botao 5</button>
        </div>
    )
}