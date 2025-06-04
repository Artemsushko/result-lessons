const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

// for
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i] ** 3;
}
console.log(sum);

// for of
sum = 0;
for (const num of numbers) {
  sum += num ** 3;
}
console.log(sum);

// forEach
sum = 0;
numbers.forEach((num) => {
  sum += num ** 3;
});
console.log(sum);

//reduce
sum = numbers.reduce((acc, num) => acc + num ** 3, 0);
console.log(sum);
