export function geraJogos(qtd=6, dezenas=[]) {
    
    if (qtd < 6 || qtd > 15) {
        throw "Quantidade de jogos deve ser entre 6 e 15";
    }

    if(dezenas.length > qtd) {
        return dezenas.slice(0, qtd).sort((d1, d2) => d1 -d2);            
    }

    if(dezenas.length === qtd) {
        console.log(qtd + " - "+ dezenas);
        return dezenas.sort((d1, d2) => d1 -d2);
    }

    const dezena = parseInt(Math.random() * 60 + 1);

    if(!dezenas.includes(dezena)) {
        return geraJogos(qtd, [...dezenas, dezena]);
    }else {
        return geraJogos(qtd, dezenas);
    }    
}