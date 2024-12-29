export function Comp1 () {
    return (
        <div>
            <h1>Componente 1</h1>
        </div>
    )
}

export const Comp2 = function () {
    return (
        <div>
            <h1>Componente 2</h1>
        </div>
    )
}

export const Comp3 = () => {
    return (
        <div>
            <h1>Componente 3</h1>
        </div>
    )
}

export default function Comp4() {
    return (
        <div>
            <h1>Componente 4</h1>
        </div>
    )
}


export const Comp5 = props => <div><h1>Componente 5 - {props.msg}</h1></div>

export const Comp6 = () => {
    return <div><h1>Componente 6</h1></div>
}

export const Comp7 = () => (
    <div>
        <h1>Componente 7</h1>
    </div>
)

//Outra forma para exportar
// export {
//     Comp1, Comp2, Comp3, Comp5, Comp6, Comp7
// }
