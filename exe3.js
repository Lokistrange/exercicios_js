function verificarESomar() {
    // Pega os valores dos inputs A e B
    let A = parseInt(document.getElementById("valorA").value);
    let B = parseInt(document.getElementById("valorB").value);

    // Se os valores não forem números válidos, mostra uma mensagem de erro
    if (isNaN(A) || isNaN(B)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos para A e B.";
        return;
    }

    // Verifica se A e B são iguais
    if (A === B) {
        let soma = A + B;
        document.getElementById("resultado").innerHTML = `Os valores são iguais. A soma é: ${soma}`;
    } else {
        document.getElementById("resultado").innerHTML = "Os valores A e B não são iguais.";
    }
}