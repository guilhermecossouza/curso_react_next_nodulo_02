import Pai from "../../components/direta/Pai"

export default function Direta() {
    const arrFamilia = [
        {
            nome: "Guilherme", 
            familia: "Costa"
        },
        {
            nome: "Kenia", 
            familia: "Costa"
        }
    ]
    return (
        <div>
            <Pai familia={arrFamilia} ultimoNome="Costa"/>            
        </div>
    )
} 