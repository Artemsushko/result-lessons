function getKiller(suspectInfo, deadPeople) {
  const suspects = Object.keys(suspectInfo);
  const killer = suspects.find((suspect) =>
    deadPeople.every((dead) => suspectInfo[suspect].includes(dead))
  );
  return `Убийца ${killer}`;
}

console.log(
  getKiller(
    {
      James: ['Jacob', 'Bill', 'Lucas'],
      Johnny: ['David', 'Kyle', 'Lucas'],
      Peter: ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
  )
); // Убийца James

console.log(
  getKiller(
    {
      Brad: [],
      Megan: ['Ben', 'Kevin'],
      Finn: [],
    },
    ['Ben']
  )
); // Убийца Megan
