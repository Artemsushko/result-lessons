function getWinner(applicants, winnerObject) {
  const numbers = Object.keys(applicants);
  const randomInt = numbers[Math.floor(Math.random() * numbers.length)];
  return {
    ...winnerObject,
    ...applicants[randomInt],
  };
}

const todaysWinner = {
  prize: '10 000$',
};

const winnerApplicants = {
  '001': {
    name: 'Максим',
    age: 25,
  },
  201: {
    name: 'Светлана',
    age: 20,
  },
  304: {
    name: 'Екатерина',
    age: 35,
  },
};

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner);
// { prize: '10 000$', name: 'Максим', age: 25 }
