let age = 18;
let name = 'Alice';
let isStudent = true;
let nothing = null;
let notDefined;
let symbol = Symbol('id');
let bigIntVar = 123n;
let obj = { key: 'value' };

console.log(Number(age), Boolean(age), String(age));
console.log(Number(name), Boolean(name), String(name));
console.log(Number(isStudent), Boolean(isStudent), String(isStudent));
console.log(Number(nothing), Boolean(nothing), String(nothing));
console.log(Number(notDefined), Boolean(notDefined), String(notDefined));
console.log(Number(bigIntVar), Boolean(bigIntVar), String(bigIntVar));
console.log(Number(obj), Boolean(obj), String(obj));
console.log(Boolean(symbol), String(symbol), Number(symbol));
