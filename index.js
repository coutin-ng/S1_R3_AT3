let soma = 0;

let vezes = 10;

for (let i = 0; i < vezes; i++) {
    let num = parseFloat(prompt("Insira um número:"));

    if (isNaN(num)) {
        alert("Erro: Você não inseriu um número válido!");

        i--;

    } else {

        soma += num

    }

}
alert(`A soma dos 10 números é: ${soma}`)
