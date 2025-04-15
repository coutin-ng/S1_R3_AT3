const num = parseInt(prompt("Digite um número para mostrar os números de 1 até ele:"));

if (isNaN(num) || num <= 1) {
    alert("Erro: Número Inválido!");
} else {

    let sequencia = 0;

    let lista = "";

    for (let i = 1; sequencia < num;) {
        sequencia += i;
        lista += `${sequencia}\n`;
        
    }
    alert(`A sequência é: \n ${lista}`);
}