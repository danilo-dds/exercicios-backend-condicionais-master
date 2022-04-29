const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 2855971; //emCentavos

if (portadoraDeDoenca === true || aposentada === true) {
    console.log("ISENTA");
} else if (totalDeRendimentos <= 2855970) {
    console.log("VAZA LEÃO! JA TA DICICIL SEM VOCÊ");

} else if (totalDeRendimentos > 2855970) {
    console.log("PEGA LEÃO");
}
