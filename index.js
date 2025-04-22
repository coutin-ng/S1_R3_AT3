let numUm = parseInt(prompt("Insira um número:"));

let numDois = parseInt(prompt("Insira outro número:"))

if (isNaN(numUm) && isNaN(numDois) || numUm == numDois) {
    alert("Erro: Você não digitou números válidos!")

} else {

    let numPares = ""

    let inicio

    let final

    if (numUm < numDois) {

        inicio = numUm;

        final = numDois;

    }else {

        inicio = numDois;

        final = numUm;

    }

    for (let i = inicio; i <= final; i++) {

        if (i % 2 == 0) {
            numPares += i + " ";
        }

    }

    alert(`Os números pares entre os dois números são: ${numPares}`);

}

