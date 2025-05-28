alert(
  `Вас зовут ${prompt('Как вас зовут?')
    .trim()
    .toLocaleLowerCase()} и Вам ${Number(
    prompt('Скодько Вам лет?').trim()
  )} лет`
);
