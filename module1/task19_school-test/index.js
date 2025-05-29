const correct1 = 4;
const correct2 = 4;
const correct3 = 1;
const correct4 = 12;
const correct5 = 6;

let correctAnswers = 0;
let incorrectAnswers = 0;

// Вопрос 1
let answer1 = Number(prompt('Сколько будет 2 + 2?'));
if (answer1 === correct1) {
  alert('Ответ Верный');
  correctAnswers++;
} else {
  alert('Ответ Неверный');
  incorrectAnswers++;
}

// Вопрос 2
let answer2 = Number(prompt('Сколько будет 2 * 2?'));
if (answer2 === correct2) {
  alert('Ответ Верный');
  correctAnswers++;
} else {
  alert('Ответ Неверный');
  incorrectAnswers++;
}

// Вопрос 3
let answer3 = Number(
  prompt(
    'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'
  )
);
if (answer3 === correct3) {
  alert('Ответ Верный');
  correctAnswers++;
} else {
  alert('Ответ Неверный');
  incorrectAnswers++;
}

// Вопрос 4
let answer4 = Number(
  prompt(
    'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'
  )
);
if (answer4 === correct4) {
  alert('Ответ Верный');
  correctAnswers++;
} else {
  alert('Ответ Неверный');
  incorrectAnswers++;
}

// Вопрос 5
let answer5 = Number(prompt('Сколько будет 2 + 2 * 2?'));
if (answer5 === correct5) {
  alert('Ответ Верный');
  correctAnswers++;
} else {
  alert('Ответ Неверный');
  incorrectAnswers++;
}

alert(
  `Конец теста! Правильные ответы — ${correctAnswers}; Неправильные ответы — ${incorrectAnswers}.`
);
