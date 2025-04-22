let num = parseFloat(prompt("Insira um número para ver sua tabuada:"));

if (isNaN(num)) {
    alert("Erro: Você não digitou um número válido!");
} else {
    let vezes = 10;

    let tabuada = "";

    for (i = 1; i <= vezes; i++) {
        tabuada += (num * i) + "\n"
    }
    alert(`A tabuada de ${num} é: \n ${tabuada}`);
}
