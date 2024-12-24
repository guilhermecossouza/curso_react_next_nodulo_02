import TabuleiroXadrez from '@/components/TabuleiroXadrez'
import styles from '../../styles/tabuleiro.module.css'

export default function tabuleiro() {
    const arrayPosicaoes = new Array(10).fill(0).map((_, index) => index);
    return (
        <div className={styles.container}>
            <div>
                {arrayPosicaoes.map((item) => {
                    return <TabuleiroXadrez corCampo="white"/>
                })}                
            </div>
        </div>
    )
}