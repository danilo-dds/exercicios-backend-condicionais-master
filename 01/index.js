const jogada1 = "tesoura"
const jogada2 = "tesoura"

//vericicanndo primeira jogada com pedra

if (jogada1 === "pedra") {

    if (jogada2 === "tesoura") {
        console.log(`${jogada1} Ganhou!`);

    } else if (jogada2 === "pedra") {
        console.log("Deu empate!");

    } else if (jogada2 === "papel") {
        console.log(`${jogada2} Ganhou!`);

    } else (console.log("Opção invalida"));
}
//verificando primeira jogada com tesoura

if (jogada1 === "tesoura") {

    if (jogada2 === "tesoura") {
        console.log("Deu empate!");

    } else if (jogada2 === "pedra") {
        console.log(`${jogada2} Ganhou!`);

    } else if (jogada2 === "papel") {
        console.log(`${jogada1} Ganhou!`);

    } else (console.log("opção invalida"));
}
//verificando primeira jogada com papel

if (jogada1 === "papel") {

    if (jogada2 === "tesoura") {
        console.log(`${jogada2} Ganhou!`);

    } else if (jogada2 === "pedra") {
        console.log(`${jogada1} Ganhou!`);

    } else if (jogada2 === "papel") {
        console.log("Deu empate!");

    } else (console.log("opção invalida"));
}
