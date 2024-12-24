export default function Lista(props) {
    return (
        <>
            <h1>Lista de alguma coisa</h1>
            <ul>
                {props.children}
            </ul>
        </>        
    )
}