function formatAnswer(answer) {
  answer = answer.trim();
  if (isNaN(answer)) {
    return answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();
  }
  return answer;
}

function checkQuestionAnswer(question, correctAnswer) {
  const userAnswer = formatAnswer(prompt(question));
  alert(
    userAnswer === correctAnswer
      ? 'Верно!'
      : `Неверно! Ответ: ${correctAnswer} `
  );
}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');
