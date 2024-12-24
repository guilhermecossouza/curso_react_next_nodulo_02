import Filho from "./Filho"

export default function Pai(props) {
    return (
        <>
            <ul>                
                {props.familia.map((item, index) => {
                    return <Filho familia={item.familia} nome={item.nome} id={index}/>
                })} 
            </ul>
        </>
    )
} 