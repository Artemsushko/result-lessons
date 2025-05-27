console.log(String(console.log));
console.log(Number(console.log));
console.log(Boolean(console.log));

console.log(String({ name: 'Maxim' }));
console.log(Number({ name: 'Maxim' }));
console.log(Boolean({ name: 'Maxim' }));

const sym = Symbol('key');
console.log(String(sym));
// console.log(Number(sym)); // вызовет ошибку
console.log(Boolean(sym));

console.log(String(Number));
console.log(Number(Number));
console.log(Boolean(Number));

console.log(String(''));
console.log(Number(''));
console.log(Boolean(''));

console.log(String(0));
console.log(Number(0));
console.log(Boolean(0));

console.log(String(-10));
console.log(Number(-10));
console.log(Boolean(-10));

console.log(String('-105'));
console.log(Number('-105'));
console.log(Boolean('-105'));
