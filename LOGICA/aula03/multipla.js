// Avaliador de entregas

// Para estruturar decisões no código utilizamos a família if else.
// if = se
// else = senão
// else if = se senão
// O if pede uma condição e se ela for atendida, executo o código que está entre {}.
// Já o else serve para atender os casos que não contemplam as condições anteriores.
// Se tivermos mais de uma condição, como no exemplo abaixo, é necessário utilizar o else if, que nega o if anterior e propõe uma condição.
// Por exemplo, se não for nota 5, mas for nota 4, o programa escreve Melhoras! na tela.

let nota = 5

if (nota == 5) {
    console.log("AURA!🕕🕖");
}
else if (nota == 4) {
    console.log("Melhoras! 🐎🖇");
}
else if (nota == 3) {
    console.log("Estava bem embalado! 📦");
}
else if (nota == 2) {
    console.log("Minha vó é melhor que você. 💀😭");
}
else if (nota == 1) {
    console.log("Vai trabalhar de CLT pelo resto da eternidade... 🍞🍅🥬🧀🍖🍞");
}
else {
    console.log("INSIRA UMA NOTA VÁLIDA DE 1 A 5!!!");
}