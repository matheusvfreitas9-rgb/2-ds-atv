// 1. function expresion - valor base
const calcularvalorbase = function(horas, precohora) {
    return horas * precohora;
}
// 2. arrow function - adicionar taxa fixa
const adicionartaxa = (valor) => valor + 2.00;
// 3. function declaration - exibir recibo
function emitirRecibo (totalfinal) {
    console.log(totalfinal)
    console.log("---Estacionamento---")
    console.log("Total a pagar: R$" + totalfinal.toFixed(2))
}
// 4. execução
let valorbruto = calcularvalorbase(3, 10);
let valorcomtaxa = adicionartaxa(valorbruto);
emitirRecibo(valorcomtaxa);