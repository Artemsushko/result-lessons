function getName1(name) {
  return `Name is ${name}`;
}

const getName2 = function (name) {
  return `Name is ${name}`;
};

const getName3 = (name) => {
  return `Name is ${name}`;
};

console.log(`1 function: ${getName1('Artem')}
2 function: ${getName2('Artem')}
3 function: ${getName3('Artem')}`);
