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

let numPrimos = [3,5,7,11,13,17,19,23,29,31,37,41,43,47];
let biggestNumPrimo = numPrimos [0];

for (let index = 1; index < numPrimos.length; index+=1) {
    if (numPrimos[index]> biggestNumPrimo) {
        biggestNumPrimo = numPrimos[index];
    }
}

console.log(biggestNumPrimo);


