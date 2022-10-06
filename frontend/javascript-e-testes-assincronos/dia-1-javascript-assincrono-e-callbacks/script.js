// // const TWO_SECONDS = 2000;

const { callbackify } = require("util");

// // setTimeout(() => {
// //     console.log('Comprar parafusos'); // Comprar parafusos
// //     console.log('Adicionar ao estoque'); // Adicionar ao estoque
// //   }, TWO_SECONDS);
  
// //   console.log('1 - Receber roda'); // 1 - Receber roda
// //   console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
// //   console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// // const pushNumber = (list, number) => list.push(number);

// // const numbers = [];

// // const THREE_SECONDS = 3000;

// // setTimeout(() => pushNumber(numbers, 1), THREE_SECONDS);
// // pushNumber(numbers, 2);
// // pushNumber(numbers, 3);

// // console.log(numbers);
// // setTimeout(() => console.log(numbers), THREE_SECONDS);

// const minhasDespesas = [
//     {
//       academia: 99,
//     },
//     {
//       ifood: 200,
//     },
//     {
//       celular: 60,
//     },
//     {
//       internet: 100,
//     },
//   ];
  
//   const minhaRenda = 1000;

//   const despesaMensal = (renda, despesas, callback) => {
//     const despesaTotal = callback(despesas);
//     const saldoFinal = renda - despesaTotal;
  
//     console.log(`Balanço do mês:
//       Recebido: R$${renda},00
//       Gasto: R$${despesaTotal},00
//       Saldo: R$${saldoFinal},00 `);
//   };

//   const somaDespesas = (despesas) => {
//     const custoItem = despesas.map((item) => Object.values(item));
//     const despesaTotal = custoItem.reduce((acc, curr) => {
//       const soma = acc + curr[0];
//       return soma;
//     }, 0);
//     return despesaTotal;
//   };

//   despesaMensal(minhaRenda, minhasDespesas, somaDespesas);

// callback-errors.js

const countryName = ({ name }) => console.log(`O país retornado é ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`A Moeda corrente do ${name} é ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Erro ao selecionar país: ${error}`);

const getCountry = (onSuccess, onError) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if (didOperationSucceed) {
      const country = {
        name: 'Brasil',
        hdi: 0.759,
        currency: 'Real',
      };
      onSuccess(country);
    } else {
      const errorMessage = ('País não encontrado');
      onError(errorMessage);
    }
  }, delay());
};

// Deve imprimir:
//  - Em caso de sucesso: "O país retornado é Brasil"
//  - Em caso de erro: "Erro ao selecionar país: País não encontrado"
getCountry(countryName, printErrorMessage);

// Deve imprimir:
//  - Em caso de sucesso: "A moeda corrente do Brasil é Real"
//  - Em caso de erro: "Erro ao selecionar país: País não encontrado"
getCountry(countryCurrency, printErrorMessage);