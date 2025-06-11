function convertMsToDays(ms) {
  return Math.round(ms / 1000 / 60 / 60 / 24);
}

function getDaysBeforeBirthday(nextBirthdayDate) {
  const MsToBirthday = nextBirthdayDate.getTime() - Date.now();
  return convertMsToDays(MsToBirthday);
}

const birthday = new Date(2025, 11, 4);

console.log(
  `До дня рождения осталось: ${getDaysBeforeBirthday(birthday)} дня(-ей)`
);
