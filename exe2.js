function verificarNumero() {
    // Pega o valor do input
    let numero = document.getElementById("numero").value;
    
    // Converte para número, caso o valor tenha sido digitado como string
    numero = parseFloat(numero);

    // Se o número não for válido, mostra uma mensagem de erro
    if (isNaN(numero)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um número válido.";
        return;
    }

    let resultado = "";

    // Verifica se é positivo, negativo ou zero
    if (numero > 0) {
        resultado += "O número é positivo.<br>";
    } else if (numero < 0) {
        resultado += "O número é negativo.<br>";
    } else {
        resultado += "O número é zero.<br>";
    }

    // Verifica se é par ou ímpar
    if (numero % 2 === 0) {
        resultado += "O número é par.";
    } else {
        resultado += "O número é ímpar.";
    }

    // Exibe o resultado
    document.getElementById("resultado").innerHTML = resultado;
}