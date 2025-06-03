let health = prompt('Введите число параметра "здоровье" для персонажа');
debugger;
if (health < 0 || !health) {
  alert('Параметр "здоровье" должен быть больше нуля!');
  debugger;
} else {
  console.log(health);
  alert(`Параметр "здоровье" равен ${health}`);
}
