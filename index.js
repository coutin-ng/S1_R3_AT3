let somaNotas = 0;

let vezes = 5;

for (let i = 0; i < vezes; i++) {
    let notas = parseFloat(prompt("Insira uma nota:"));

    if (isNaN(notas) || notas < 0) {
        alert("Erro: Você não inseriu um número válido!");

        i--;

    } else {
        somaNotas += notas
    }

}

let media = somaNotas / vezes;
alert(`A média das notas é ${media}`)