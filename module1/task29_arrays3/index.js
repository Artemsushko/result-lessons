const coffees = ['Latte', 'Cappuccino', 'Americano'];

const rawName = prompt('Поиск кофе по названию:').trim().toLowerCase();
if (!rawName) {
  alert('Вы ничего не ввели!');
  return;
}
const coffeeName = rawName[0].toUpperCase() + rawName.slice(1);
const coffeeIndex = coffees.findIndex((coffee) => {
  return coffee === coffeeName;
});

if (coffeeIndex !== -1) {
  alert(
    `Держите ваш любимый кофе ${coffeeName}. Он ${
      coffeeIndex + 1
    }-й по популярности в нашей кофейне.`
  );
} else {
  alert('К сожалению, такого вида кофе нет в наличии');
}
