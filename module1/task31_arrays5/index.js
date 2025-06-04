const clientsEstimations = [];

function askClientToGiveEstimation() {
  for (let i = 0; i < 5; i++) {
    const estimation = Number(
      prompt('Как вы оцениваете нашу кофейню от 1 до 10?')
    );
    if (estimation > 0 && estimation <= 10) {
      clientsEstimations.push(estimation);
    }
  }
}

askClientToGiveEstimation();
const goodEstimations = clientsEstimations.filter(
  (estimation) => estimation > 5
);

const notGoodEstimations = clientsEstimations.filter(
  (estimation) => estimation <= 5
);

alert(`Всего положительных оценок: ${goodEstimations.length}; 
Всего отрицательных оценок: ${notGoodEstimations.length}`);
