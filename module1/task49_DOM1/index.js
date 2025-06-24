// const body = document.querySelector('body');
// body.innerHTML = `<form class="create-user-form">
//     <label>
//         Имя
//         <input type="text" name="userName" placeholder="Введите ваше имя">
//     </label>
//     <label>
//         Пароль
//         <input type="password" name="password" placeholder="Придумайте Пароль">
//     </label>
//     <button type="submit">
//         Подтвердить
//     </button>
// </form>`;

const body = document.querySelector('body');

const form = document.createElement('form');
form.className = 'create-user-form';

const nameLabel = document.createElement('label');
nameLabel.textContent = 'Имя';

const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Пароль';

const textInput = document.createElement('input');
textInput.type = 'text';
textInput.name = 'userName';
textInput.placeholder = 'Введите ваше имя';

const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.name = 'password';
passwordInput.placeholder = 'Придумайте Пароль';

const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Подтвердить';

nameLabel.append(textInput);
passwordLabel.append(passwordInput);
form.append(nameLabel, passwordLabel, button);
body.append(form);
