console.log(isEqualSymbols('адрес', 'среда')); // true
console.log(isEqualSymbols('ноутбук', 'программист')); // false

function isEqualSymbols(str1, str2) {
  const sortedStr = (str) => str.split('').sort().join('');
  return sortedStr(str1) === sortedStr(str2);
}
