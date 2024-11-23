function gerarTabuada() {
    // Pega o número inserido pelo usuário
    let numero = parseInt(document.getElementById("numero").value);

    // Verifica se o número é válido
    if (isNaN(numero)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um número válido.";
        return;
    }

    let tabuada = "<h3>Tabuada de " + numero + ":</h3><ul>";

    // Gera a tabuada de 1 a 10
    for (let i = 1; i <= 10; i++) {
        tabuada += `<li>${numero} x ${i} = ${numero * i}</li>`;
    }

    tabuada += "</ul>";

    // Exibe a tabuada
    document.getElementById("resultado").innerHTML = tabuada;
}