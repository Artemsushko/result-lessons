function getDivisorsCount(num) {
  if (!Number.isInteger(num) || num < 0) {
    alert(`${num} должен быть целым числом и больше нуля!`);
  }

  if (!num || typeof num !== 'number') {
    return NaN;
  }

  let divisors = [];
  let amountOfDivisors = 0;

  for (let i = 1; i <= num; i++) {
    if (Number.isInteger(num / i)) {
      divisors.push(i);
      amountOfDivisors++;
    }
  }
  return `${amountOfDivisors} (divisors: ${divisors})`;
}

console.log(getDivisorsCount(-2)); // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
