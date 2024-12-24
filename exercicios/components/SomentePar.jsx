export default function SomentePar(props) {
    //     return props.numero % 2 === 0 ? (
    //         <div>
    //             <p>par</p>
    //         </div>
    //    ): (
    //         null
    //    )

    const numerosPar = props.numero % 2 ===0    
    return (
        <div>
            {numerosPar ? <p>par</p> : null}
        </div>
    )

    
}