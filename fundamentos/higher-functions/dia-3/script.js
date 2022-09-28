// const books = [
//     {
//       id: 1,
//       name: 'As Crônicas de Gelo e Fogo',
//       genre: 'Fantasia',
//       author: {
//         name: 'George R. R. Martin',
//         birthYear: 1948,
//       },
//       releaseYear: 1991,
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: {
//         name: 'J. R. R. Tolkien',
//         birthYear: 1892,
//       },
//       releaseYear: 1954,
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: {
//         name: 'Isaac Asimov',
//         birthYear: 1920,
//       },
//       releaseYear: 1951,
//     },
//     {
//       id: 4,
//       name: 'Duna',
//       genre: 'Ficção Científica',
//       author: {
//         name: 'Frank Herbert',
//         birthYear: 1920,
//       },
//       releaseYear: 1965,
//     },
//     {
//       id: 5,
//       name: 'A Coisa',
//       genre: 'Terror',
//       author: {
//         name: 'Stephen King',
//         birthYear: 1947,
//       },
//       releaseYear: 1986,
//     },
//     {
//       id: 6,
//       name: 'O Chamado de Cthulhu',
//       genre: 'Terror',
//       author: {
//         name: 'H. P. Lovecraft',
//         birthYear: 1890,
//       },
//       releaseYear: 1928,
//     },
//   ];
  
// function formatedBooks() {
//     return books.maps((book => `${book.name} - ${book.genre} - ${book.author.name}`))
// };


// function nameAndAge() {
//     return books
//     .map((book) => (
//         {
//             author: book. author.name,
//             age: book.releaseYear - book.author.birthYear,
//         }
//     ))
//     .sort((obj1, obj2) => obj1.age - obj2.age);
// }


// const numbers = [1, 32, 44, 2, 3];
// const iteracoesDoReduce = numbers.reduce((acc, curr) => {
//   console.log(`valor atual é ${curr}`);
//   // Antes da primeira iteração o valor de início do `acc` é o valor no index 0 do array, e o valor de início de `curr` é o valor no index 1 do array.
//       // Iteração 1: valor do acc é 1 e o de curr é 32;
//  // Após a primeira iteração, o valor de `acc` muda e passa a acumular agora o resultado do retorno da callback (acc + curr).
//      // Iteração 2: valor do acc é 33 e o de curr é 44;
// // Acontece então uma segunda iteração, e `curr` agora assume o valor do index na sequência do array, no caso o valor do segundo index e `acc` segue armazenando os retornos.
//     // Iteração 3: valor do acc é 77 e o de curr é 2;
//     // Iteração 4: valor do acc é 79 e o de curr é 3;
//     // Valor final de `acc`é 82 e `curr` para no 3.
//   return acc +  curr // Ao fim das iterações podemos ver que o `acc` armazenou o resultado total do retorno da função.
// });
// // console.log(`O resultado final é ${iteracoesDoReduce}`);
// //   // por fim, esse console.log imprime o retorno final da nossa função.

// // const numbers = [1, 32, 44, 2, 3];
// // const totalSum = numbers.reduce((acc, curr) => {
// //   console.log(`valor do acc é ${acc} e o de curr é ${curr}`);
// //    // Iteração 1: valor do acc é 30 e o de curr é 1
// //    // Iteração 2:valor do acc é 31 e o de curr é 32
// //    // Iteração 3: valor do acc é 63 e o de curr é 44
// //    // Iteração 4: valor do acc é 107 e o de curr é 2
// //    // Iteração 5: valor do acc é 107 e o de curr é 3
// //    // Valor final de `acc`é 112 e `curr` para no 3
// //   return acc + curr;
// // }, 30); // O `valorInicial` é 30, ou seja, `acc` antes de executar a primeira iteração já está armazenando esse valor.

// // console.log(`valor final do acc é ${totalSum}`);
// //   // por fim, esse `console.log` imprime o retorno da nossa função, que é o valor final de `acc` após cada uma das 5 iterações, tendo iniciado com valor 30.

// // const numbers = [50, 85, -30, 3, 15];

// // const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// // const bigger = numbers.reduce(getBigger, 0);
// // console.log(bigger); // 85

// // const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// // const getEven = (number) => number % 2 === 0;
// // const sumPair = (accumulator, number) => accumulator + number;
// // const sumNumbers = (array) => array.filter(getEven).reduce(sumPair);

// // console.log(sumNumbers(numbers));

// const estudantes = [
//   {
//     nome: 'Jorge',
//     sobrenome: 'Silva',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 67 },
//       { name: 'Português', nota: 79 },
//       { name: 'Química', nota: 70 },
//       { name: 'Biologia', nota: 65 },
//     ],
//   },
//   {
//     nome: 'Mario',
//     sobrenome: 'Ferreira',
//     idade: 15,
//     turno: 'Tarde',
//     materias: [
//       { name: 'Matemática', nota: 59 },
//       { name: 'Português', nota: 80 },
//       { name: 'Química', nota: 78 },
//       { name: 'Biologia', nota: 92 },
//     ],
//   },
//   {
//     nome: 'Jorge',
//     sobrenome: 'Santos',
//     idade: 15,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 76 },
//       { name: 'Português', nota: 90 },
//       { name: 'Química', nota: 70 },
//       { name: 'Biologia', nota: 80 },
//     ],
//   },
//   {
//     nome: 'Maria',
//     sobrenome: 'Silveira',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 91 },
//       { name: 'Português', nota: 85 },
//       { name: 'Química', nota: 92 },
//       { name: 'Biologia', nota: 90 },
//     ],
//   },
//   {
//     nome: 'Natalia',
//     sobrenome: 'Castro',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 70 },
//       { name: 'Português', nota: 70 },
//       { name: 'Química', nota: 60 },
//       { name: 'Biologia', nota: 50 },
//     ],
//   },
//   {
//     nome: 'Wilson',
//     sobrenome: 'Martins',
//     idade: 14,
//     turno: 'Manhã',
//     materias: [
//       { name: 'Matemática', nota: 80 },
//       { name: 'Português', nota: 82 },
//       { name: 'Química', nota: 79 },
//       { name: 'Biologia', nota: 75 },
//     ],
//   },
// ];

// const getBestClass = (acc, materia) => {
//   if (acc.nota > materia.nota) return acc;
//   return materia;
// }

// const reportGrade = (students) => students.map((student) => ({
//   name: student.nome,
//   subject: student.materias.reduce(getBestClass).name,
// }));

// console.log(reportGrade(estudantes));

// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];
// function flatten() {
//   return arrays.reduce((acc, curr) => acc.concat(curr), []);
// }
// console.log(flatten(arrays));

