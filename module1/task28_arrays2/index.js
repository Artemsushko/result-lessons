function getSumOfSequence(num) {
  const array = [];
  for (let i = 1; i <= num; i++) {
    array.push(i);
  }
  return array[0] + array[array.length - 1];
}

console.log(getSumOfSequence(5));
