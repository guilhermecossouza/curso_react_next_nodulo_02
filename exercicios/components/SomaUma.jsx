export default function SomaUma(props) {
    //props.numero ++; -> posps somente leitura
    let soma = props.numero + 1
    return (
        <div>
            <h1>{soma}</h1>
            <h2>{props.numero + 1}</h2>
        </div>
    )
}