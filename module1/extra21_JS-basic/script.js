const MIN = 1016;
const MAX = 1937;
let res;

for (let i = MAX; i >= MIN; i--) {
  if (i % 21 === 0 && i % 5 !== 0 && i % 2 !== 0) {
    res = i;
    break;
  }
}

console.log(res);
