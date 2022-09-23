const wakeUp = () => 'Acordando';
console.log(wakeUp());

const haveCoffee = () => 'Bora tomar café!';
console.log(haveCoffee());

const letsSleep = () => 'Partiu dormir!';
console.log(letsSleep());

const returnSentences = (callback) => {
    const result = callback();
    console.log(result);
}

returnSentences(wakeUp);
