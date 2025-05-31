const clientName = 'Igor';
let clientSpentForAllTime = 110;
let discount;
let clientSpentToday = 25;
clientSpentForAllTime += clientSpentToday;

if (clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300) {
  discount = 10;
  alert(`Вам предоставляется скидка в ${discount}%!`);
} else if (clientSpentForAllTime > 300 && clientSpentForAllTime <= 500) {
  discount = 20;
  alert(`Вам предоставляется скидка в ${discount}%!`);
} else {
  discount = 30;
  alert(`Вам предоставляется скидка в ${discount}%!`);
}

alert(
  `Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
);
