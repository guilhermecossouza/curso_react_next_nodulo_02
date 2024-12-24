import listaProdutos from '../../data/listaProdutos'

export default function repeticao2() {

    const moedaBr = new Intl.NumberFormat("pt-br", {
        style: 'currency',
        currency: 'BRL',
    })
    
    function renderizerProdutos() {
        return listaProdutos.map((produto) => {
            return (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td> 
                    <td>{moedaBr.format(produto.preco)}</td>
                </tr>
            )
        })
    }

    return(
        <div>
            <h1>Repetição #02</h1>
            <ul>
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Produto</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderizerProdutos()}
                    </tbody>
                </table>
            </ul>
        </div>
    )
}