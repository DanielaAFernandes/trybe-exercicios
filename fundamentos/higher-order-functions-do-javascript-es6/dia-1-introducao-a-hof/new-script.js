const correctAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (correctAnswers, studentAnswers) => {
  if (correctAnswers === studentAnswers) {
    return 1;
  } if (studentAnswers === 'N.A') {
    return 0;
  }
  return -0.5;
};
const correction = (rightAnswers, studentAnswers, action) => {
  let counter = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    counter += actionReturn;
  }
  return `Resultado final: ${counter} pontos`;
};
console.log(countPoints(correctAnswers, studentAnswers, compareAnswers));