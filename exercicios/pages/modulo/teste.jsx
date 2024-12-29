import  Comp4 , { Comp1 as Blabla, Comp2, Comp3, Comp5, Comp6, Comp7 } from "../../components/modulo/funcionais"

export default function teste() {
    return (
        <div>
            <Blabla />
            <Comp2 />
            <Comp3 />
            <Comp4 />
            <Comp5 msg="Mensagem"/>
            <Comp6 />
            <Comp7 />
        </div>
    )
}