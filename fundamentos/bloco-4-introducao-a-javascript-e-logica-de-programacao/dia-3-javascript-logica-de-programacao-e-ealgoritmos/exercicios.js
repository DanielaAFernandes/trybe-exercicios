/*let fatorial = 1;
for(let index = 10; index >0; index -=1){
fatorial *= index;
console.log(fatorial);
}*/

/*let word = "tryber";
let result = "";
for(let index = 0; index < word.length; index -=1){
    for(let index = 5; index >= word.length; index +=1){
       result +=1;
       console.log(word);
    }
}*/

/*let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord);*/

/*let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerWord = array[0];

for(let index = 0; index < array.length; index +=1){
    if (array[index].length > biggerWord.length) {
        biggerWord = array[index];
    }
}

console.log(biggerWord);
    
let smallerWord = array[0];
for(let index =0; index <array.length; index +=1){
    if(array[index].length < smallerWord.length){
        smallerWord = array[index];
    }
}

console.log(smallerWord);*/

/*let numPrimos = [3,5,7,11,13,17,19,23,29,31,37,41,43,47];
let biggestNumPrimo = numPrimos [0];

for (let index = 1; index < numPrimos.length; index+=1) {
    if (numPrimos[index]> biggestNumPrimo) {
        biggestNumPrimo = numPrimos[index];
    }
}

console.log(biggestNumPrimo);*/

//Crie um algoritmo que recebe a idade de Noel, Ellen e Nasc e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

//let idadeEllen = 25;
/*let idadeNoel = 42;
let idadeNasc = 22;

if (idadeEllen < idadeNoel && idadeEllen < idadeNasc) {
    console.log('Ellen é a mais nova'); 
} else if (idadeNasc < idadeNoel && idadeNasc < idadeEllen) {
    console.log ('Nasc é o mais novo');
} else {
    console.log ('Noel é o mais novo');
}*/

/*const idade = 15;
if (idade > 18) {
    console.log ('A pessoa é maior de idade')
} else {
    console.log ('A pessoa é menor de idade')
};*/

/*let result = 0;
for(let index = 0; index <= 50; index +=1) {
result += index;
}
console.log(result);*/

/*let result = 0;
for(let index = 2; index <=150; index+=1) {
    if(index % 3 === 0) {
        result += 1;
    } 
}
    if (result === 50){
        console.log("Mensagem secreta");
    }*/

/*let pessoa1 = "tesoura";
let pessoa2 = "papel";

if(pessoa1 === "papel" && pessoa2 === "pedra¨"){
    console.log("Jogador 1 venceu");
} else if (pessoa1 ==="pedra" && pessoa2 === "tesoura"){
    console.log("Jogador 1 venceu");
} else if (pessoa1 === "tesoura" && pessoa2 === "papel") {
    console.log("Jogador 2 venceu");
} else if (pessoa1 === pessoa2){
    console.log("É um empate");
} else {
    console.log("Jogador 2 venceu");
}*/

let n = 15;
let symbol = '*';
let inputLine = '';

for(let index = 0; index < n; index +=1){
    inputLine = inputLine + symbol;
};
for(let index = 0; index < n; index +=1){
    console.log(inputLine);
};


    



