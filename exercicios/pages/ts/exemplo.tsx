import Pessoa from "../../components/Pessoa";

export default function exemploTS() {
    return (
        <div>
            <Pessoa nome="Guilherme" idade={30}/>
            <Pessoa nome="Joaquim"/>
        </div>
    )
}