const goals = [8, 1, 1, 3, 2, -1, 5];

// Самый результативный матч по количеству голов
const mostGoals = Math.max(...goals);
const numberOfBestGame = goals.indexOf(mostGoals) + 1;
alert(
  `Самый результативный матч был под номером ${numberOfBestGame}. В нем было забито ${mostGoals} гол(ов).`
);

// Самые не результативные игры
const minGoal = goals.reduce(
  (min, goal) => (goal >= 0 && goal < min ? goal : min),
  Infinity
);

const indexOfMinGoals = goals
  .map((goal, index) => (goal === minGoal ? index + 1 : null))
  .filter((goal) => goal !== null);

alert(
  `Самые нерезультативные матчи были под номерами ${indexOfMinGoals.join(
    ', '
  )}. В каждом из них было забито по ${minGoal} мячу(а).`
);

// Общее количество голов за сезон
const numberOfGoals = goals.reduce(
  (acc, goal) => (goal > 0 ? acc + goal : acc),
  0
);
alert(`Общее количество голов за сезон равно ${numberOfGoals}`);

// Были ли автоматические поражения
alert(
  goals.some((goal) => goal < 0)
    ? 'Были автоматические поражения: да'
    : 'Были автоматические поражения: нет'
);

// Среднее количество голов за матч
const validGoals = goals.filter((g) => g > 0);
const averageOfGoals =
  validGoals.reduce((acc, g) => acc + g, 0) / validGoals.length;

alert(`Среднее количество голов за матч равно ${averageOfGoals.toFixed(2)}`);

// Отсортируйте голы в порядке возрастания
const sortedArray = [...goals].sort((a, b) => a - b);
alert('Голы в порядке возрастания:', sortedArray.join(', '));
