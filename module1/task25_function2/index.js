function getSumOfNumbers(num, type = 'odd') {
  if (!num || typeof num !== 'number') {
    return NaN;
  }

  let sum = 0;

  if (type === 'even') {
    for (let i = 0; i <= num; i++) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
  } else if (type === 'odd') {
    for (let i = 0; i <= num; i++) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
  } else {
    for (let i = 0; i <= num; i++) {
      sum += i;
    }
  }
  return sum;
}

console.log(getSumOfNumbers(true, 'odd')); // NaN
console.log(getSumOfNumbers(10, 'odd')); // 25
console.log(getSumOfNumbers(10, 'even')); // 30
console.log(getSumOfNumbers(10, '')); // 55
