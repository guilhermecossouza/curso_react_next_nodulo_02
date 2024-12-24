import styles from "../styles/displayNumeros.module.css"


export default function DisplayNumeros(props) {    

    return (
        <div className={styles.display}>
            <div>{props.numero}</div>        
        </div>
    )
}