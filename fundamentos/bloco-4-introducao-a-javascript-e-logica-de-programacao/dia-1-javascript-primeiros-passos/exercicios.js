/*const a = 52;
const b = 87;

console.log('Soma: ' + (a+b));
console.log('Subtração: ' + (a-b));
console.log('Multiplicação: ' + (a*b));
console.log('Divisão: ' + (a-b));
console.log('Módulo: ' + (a%b));*/

/*const num1 = 14;
const num2 = 23;

if(num1>num2) {
    console.log("a é maior que b");
} else {
    console.log("b é maior que a");
}*/

/*const a = 87;
const b = 54;
const c = 27;
if(a > b && c) {
    console.log("a é maior que b e c");
} else if(b > a && c) {
    console.log("b é maior que a e c");
} else {
    console.log("c é maior que a e b");
}*/

/*const a = 15;

if(a > 0) {
    console.log("positive");
} else if(a < 0) {
    console.log("negative");
} else {
    console.log("zero");
}*/

let anguloA = 60;
let anguloB = 90;
let anguloC= 30;

let sumAngulos = anguloA+anguloB+anguloC;
let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC >0;

if(angulosPositivos) {
    if(sumAngulos === 180){
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log("Erro");
}


