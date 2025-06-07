const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const newArr = matrix.reduce((acc, arr) => [...acc, ...arr], []);

console.log(newArr);
