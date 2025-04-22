let somaNotas = 0;

for (let i = 0; i < 5; i++) {
    let notas = parseFloat(prompt("Insira uma nota:"));

    if (isNaN(notas) || notas < 0) {
        alert("Erro: Você não inseriu um número válido!");

        i--;

    } else {
        somaNotas += notas
    }

}

let media = somaNotas / 5;
alert(`A média das notas é ${media}`)