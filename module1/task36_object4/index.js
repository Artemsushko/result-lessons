function giveJobToStudent(student, job) {
  const { fullName } = student;
  console.log(
    `Поздравляем! У студента ${fullName} появилась новая работа! Теперь он ${job}`
  );

  return {
    ...student,
    job,
  };
}

const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
};

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
console.log(updatedStudent);
