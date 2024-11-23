function calcularMedia() {
    // Pega as notas inseridas pelo usuário
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    // Verifica se as notas são válidas (não são NaN)
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos para as três notas.";
        return;
    }

    // Calcula a média das notas
    let media = (nota1 + nota2 + nota3) / 3;

    // Exibe o resultado
    document.getElementById("resultado").innerHTML = `A média das notas é: ${media.toFixed(2)}`;
}