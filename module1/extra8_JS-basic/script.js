const array = [];

for (let i = 0; i < 3; i++) {
  array.push([]);
  for (let k = 1; k < 6; k++) {
    array[i].push(k);
  }
}

console.log(array);
