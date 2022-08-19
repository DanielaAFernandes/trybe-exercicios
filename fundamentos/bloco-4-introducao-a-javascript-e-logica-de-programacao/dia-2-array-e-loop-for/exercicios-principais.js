/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index+=1) {
console.log(numbers[index]);
}*/

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for (let index =0; index < numbers.length; index+=1) {
    result += numbers[index];
}
console.log(result);*/

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for(let index =0;index <numbers.length; index+=1) {
    result += numbers[index] / 10;
}
console.log(result);

if(result > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}*/


/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);*/

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];
for (let index = 1; index < numbers.length; index +=1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index];
    }
}

console.log(menorNumero);*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index +=1) {
    if(numbers[index] % 2 !==0) {
      result +-1;
    }
}

if(result ===0) {
    console.log('Nenhum valor encontrado');
} else {
    console.log(result);
}
    
