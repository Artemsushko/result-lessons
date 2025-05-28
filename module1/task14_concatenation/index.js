const myName = 'Артем';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилен Минин';
const reasonText = 'хочу создавать крутые сайты и приложения';
const numberOfMonth = 4;

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`;

myInfoText = myInfoText
  .replaceAll('JavaScript', 'javascript')
  .replaceAll('курс', 'КУРС');
console.log(myInfoText);
console.log(myInfoText.length);
console.log('First element', myInfoText[0]);
console.log('Second element', myInfoText[myInfoText.length - 1]);
