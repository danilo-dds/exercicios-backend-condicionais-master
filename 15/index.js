const primeiroNome = "Danilo";
const sobrenome = "Nascimento";
const apelido = "Chuck";

if (apelido) {
    console.log(apelido);
} else if (sobrenome) {
    console.log(primeiroNome + " " + sobrenome);
} else {
    console.log(primeiroNome);
}