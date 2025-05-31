const clientName = prompt('Enter name of client').trim();
let clientSpentForAllTime = Number(
  prompt('How much client spent for all time?').trim()
);
let discount;
let clientSpentToday = Number(prompt('How much client spent today?'));
if (clientSpentForAllTime && clientSpentToday) {
  clientSpentForAllTime += clientSpentToday;

  if (clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300) {
    discount = 10;
    alert(`Вам предоставляется скидка в ${discount}%!`);
  } else if (clientSpentForAllTime > 300 && clientSpentForAllTime <= 500) {
    discount = 20;
    alert(`Вам предоставляется скидка в ${discount}%!`);
  } else if (clientSpentForAllTime < 100) {
    discount = 0;
    alert(`В данный момент у вас нет скидки!`);
  } else {
    discount = 30;
    alert(`Вам предоставляется скидка в ${discount}%!`);
  }

  alert(
    `Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
  );
  window.location.reload();
} else {
  alert(
    'Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом!'
  );
  window.location.reload();
}
