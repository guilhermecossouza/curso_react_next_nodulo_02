

import styles from "../../styles/desenasSorteadas.module.css"

export default function DesenasSorteadas(props) {  

    return (
        <div className={ styles.desenas }>
            {props.dezenas.map((item) => {
                return <div key={item}>{item}</div>
            })}       
        </div>
    )
}