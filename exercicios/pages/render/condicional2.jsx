import If from '../../components/if'

export default function condicional2() {
    const numero = 6;
    return (
        <div>
            <If teste={numero % 2 === 0 ? true : false}>
                <h1>O número é par</h1>
            </If>
            <If teste={numero % 2 === 1 ? true : false}>
                <h1>O número é impar</h1>
            </If>
        </div>
    )
}