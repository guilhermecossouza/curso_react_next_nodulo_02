export default function usandoEstilo(props) {
    return (
        <div>
            <h1
            style={{backgroundColor: props.numero >= 0 ? 'green' : 'red', color: 'white'}}>Usando Estilo</h1>
        </div>
    )
}