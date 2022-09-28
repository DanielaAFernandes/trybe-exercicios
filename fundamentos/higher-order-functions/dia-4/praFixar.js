// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['uva', 'abacate', 'laranja'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['morango', 'banana', 'maracujá'];

// const fruitSalad = (fruit, additional) => {
//   return [...fruit, ...additional];
// };

// console.log(fruitSalad(specialFruit, additionalItens));


// const user = {
//     name: 'Maria',
//     age: 21,
//     nationality: 'Brazilian',
//   };
  
//   const jobInfos = {
//     profession: 'Software engineer',
//     squad: 'Rocket Landing Logic',
//     squadInitials: 'RLL',
//   };

//   const oneInformation = {...user, ...jobInfos};
//   console.log(oneInformation);

//   const {name, age, nationality, profession, squad, squadInitials} = oneInformation; 

//   console.log( `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as ${profession} and my squad is ${squad} `);

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água
// [comida, animal, bebida] = [ bebida, comida, animal];
// console.log(comida, animal, bebida); 

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];

// [,,, ...numerosPares] = numerosPares;
// console.log(numerosPares);

// // Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

// const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

// const person = {
//   firstName: 'João',
//   lastName: 'Jr II',
// };

// const otherPerson = {
//   firstName: 'Ivan',
//   lastName: 'Ivanovich',
//   nationality: 'Russian',
// };

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// const getPosition = (latitude, longitude) => ({
//     latitude,
//     longitude,
//   });
  
//   console.log(getPosition(-19.8157, -43.9542));

const multiply = (number, value = 1) => {
    return number * value;
  };
  
  console.log(multiply(8));