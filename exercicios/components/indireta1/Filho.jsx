export default function Filho(props) {
    return (
        <div>
            <h1>Componente filho</h1>
            <button onClick={() => props.funcao("Passei no ENEM!")}>Falar comigo</button>
        </div>
    )
}