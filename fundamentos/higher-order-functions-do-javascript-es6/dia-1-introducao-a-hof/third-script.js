const checkNumber = (betNumber, number) => betNumber === number;
const lottery = (betNumber, callback) => {
    min = Math.ceil(1);
    max = Math.floor(5);
    const number = Math.floor(Math.random() * (5 - 1) + 1);
    return callback(betNumber, number) ? 'Lucky day, you won!' : 'Try again!';
 };

console.log(lottery(2, checkNumber));

