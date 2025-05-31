const initStr =
  'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';

const newStr = initStr
  .slice(0, Math.floor(initStr.length / 2))
  .replaceAll('a', 'A')
  .replaceAll('а', 'A')
  .trim();
console.log(
  `New string: ${newStr} \nMiddle char: ${
    initStr[Math.floor(initStr.length / 2)]
  }`
);
