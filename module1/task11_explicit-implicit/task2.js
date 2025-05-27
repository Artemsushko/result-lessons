console.log(+'50', typeof +'50');
console.log(Number('50'), typeof Number('50')); // неявное исправлено на явное

console.log(Number('100'), typeof Number('100')); // явное

console.log('' + 1, typeof ('' + 1));
console.log(String(1), typeof String(1)); // неявное исправлено на явное

console.log(String(1), typeof String(1)); // явное

console.log(Boolean(0), typeof Boolean(0)); // явное

console.log(+'001', typeof +'001');
console.log(Number('001'), typeof Number('001')); // неявное исправлено на явное

console.log(1 + '', typeof (1 + ''));
console.log(String(1), typeof String(1)); // неявное исправлено на явное

console.log(Boolean(1), typeof Boolean(1)); // явное

console.log(String(0o1), typeof String(0o1)); // явное

console.log(Number('Hello World'), typeof Number('Hello World')); // явное
