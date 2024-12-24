import Titulo from "../../components/Titulo"

export default function PageTitulo() {
    return (
        <div>
            <Titulo 
                principal="Título 01" 
                secundario="subtitulo 01"
            />

            <Titulo 
                principal="Titulo 02"
                secundario="subtítulo 01"
                pequeno={true}
                numero={3}
            />

            <Titulo 
                principal="Titulo 02"
                secundario="subtítulo 01"
                pequeno
                numero={3}
            />
        </div>
    )
}