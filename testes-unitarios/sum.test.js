// const sum = require('./sum.js');

// describe('testa a função sum', () => {
//     test('deve retornar o resultado da soma', () => {
//         expect(sum(4, 5)).toBe(9);
//         expect(sum(0, 0)).toBe(0);
//     });
//     test('deve disparar um erro caso receba como parametro uma string', () => {
//         expect(() => sum(4, '5')).toThrowError();
//         expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
//     })
// })

const myRemove = require('./sum.js');

describe('testa a função myRemove', () => {
    test('deve retornar um array removendo o item correto', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})