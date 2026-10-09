function calcularIMC(peso, altura) {
    return peso / (altura ** 2)
}

let peso = 67
let altura = 1.71
let imc = calcularIMC(peso, altura)

if (imc <= 18.4) {
    console.log("Você está abaixo do peso, seu imc é de: " + imc);
}
else if (imc >= 18.5 && imc <= 24.9 ) {
    console.log("Você está no peso ideal, seu imc é de: " + imc);
}
else {
    console.log("Você está acima do peso, seu imc é de: " + imc);
}