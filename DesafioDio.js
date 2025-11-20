let contador = 0;

while (contador < 3) {
    let vitorias = 0;
    let derrotas = 0;
    
    // Definindo valores diferentes para cada rodada do loop
    if (contador === 0) {
        vitorias = 15; // Vai dar Bronze
        derrotas = 5;
    } else if (contador === 1) {
        vitorias = 90; // Vai dar Diamante
        derrotas = 20;
    } else {
        vitorias = 105; // Vai dar Imortal
        derrotas = 2;
    }

    // Chamar a função
    let resultado = calcularRank(vitorias, derrotas);
    console.log(resultado);
    
    contador++; // Operador para aumentar o contador e não ficar em loop infinito
}

function calcularRank(vitorias, derrotas) {
    // Variável para guardar o saldo 
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estrutura de decisão para colocar o nível
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;
}
