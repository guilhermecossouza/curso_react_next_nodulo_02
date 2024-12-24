export default function jsx4() {
    const subTitulo = "Estou no javascript"
    
    return (
        <div>
            <h1>Integração js e jsx</h1>
            <h2>{subTitulo}</h2>
            <p>{3 * 3}</p>
            <p>{Math.max(13, 39)}</p>
            <p>{soma(13, 39)}</p>
        </div>
    )
}

function soma(a, b) {
    return a + b
}