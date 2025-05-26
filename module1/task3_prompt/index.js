const quiz = {
  'Сколько будет 2 + 2?': 4,
  'Чему равен корень из 9?': 3,
  'Сколько будет 2 в 5-й степени?': 32,
};

for (const task in quiz) {
  Number(prompt(task)) === quiz[task]
    ? alert('Верно!')
    : alert(`Неверно! Ответ ${quiz[task]}`);
}
