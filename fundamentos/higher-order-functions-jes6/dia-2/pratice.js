// let cars = [
//     car1 = {
//         type: 'Fiat',
//         year: '2001',
//         color: 'black',
//     },

//     car2 = { 
//         type: 'Volks',
//         year: '2021',
//         color: 'red',
//     },

//     car3 = {
//         type: 'Porsh',
//         year: '2022',
//         color: 'yellow',
//     }
// ]

// console.log(cars[0].year);

// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda',
//     3: 'terça',
// };

// console.log(diasDaSemana['1']);

// let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };

//   console.log(conta.banco.cod);

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// };

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
  
//   for (let index in car) {
//     console.log(index, car[index]);
//   }

// let food = ['hamburguer', 'bife', 'acarajé'];
// for (let position in food) {
//     console.log(food[position]);
//   };

//   for (let value of food) {
//     console.log(value);
//   };

//   function bomDiaTryber(nome) {
//     console.log('Bom dia, ' + nome);
//   }
  
//   bomDiaTryber('João'); // Bom dia, João
//   bomDiaTryber('Julia'); // Bom dia, Julia
//   bomDiaTryber('Marcelo'); // Bom dia, Marcelo

//   const bomDiaTryber = nome => 'Bom dia, ' + nome;
//   console.log(bomDiaTryber('Joana'));

// const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
// console.log(trueExpression);

// const checkTernary = (age) => (
//     age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`);
// console.log(checkTernary(19));

const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };

  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      return error.message;
    }
  };

  console.log(sum(2, 2));

