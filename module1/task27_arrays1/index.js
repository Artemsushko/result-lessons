const peopleWaiting = [
  'Кристина',
  'Олег',
  'Кирилл',
  'Мария',
  'Светлана',
  'Артем',
  'Глеб',
];

function giveParcel(peopleWaiting) {
  const person = peopleWaiting.shift();
  alert(
    `${person} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`
  );
}

function leaveQueueWithoutParcel(peopleWaiting) {
  while (peopleWaiting.length > 0) {
    const person = peopleWaiting.shift();
    alert(`${person} не получил(а) посылку и ушел(ла) из очереди`);
  }
}

giveParcel(peopleWaiting);
giveParcel(peopleWaiting);
giveParcel(peopleWaiting);
leaveQueueWithoutParcel(peopleWaiting);
