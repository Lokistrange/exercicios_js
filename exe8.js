function ordenarValores() {
    // Pega os valores dos inputs
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let valor3 = parseInt(document.getElementById("valor3").value);

    // Verifica se os valores são válidos
    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos para os três campos.";
        return;
    }

    // Coloca os valores em um array
    let valores = [valor1, valor2, valor3];

    // Ordena os valores em ordem decrescente
    valores.sort(function(a, b) {
        return b - a; // Ordenação decrescente
    });

    // Exibe o resultado
    document.getElementById("resultado").innerHTML = `Valores em ordem decrescente: ${valores[0]}, ${valores[1]}, ${valores[2]}`;
}