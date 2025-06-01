alert(`Enter your password:

•Password must be at least 3 characters and no more than 30 characters long.
•Password must contain at least one uppercase letter (A–Z).
•Password must contain at least one number (0–9).`);

const password = prompt();

function isValidPassword(password) {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const correctLength = password.length >= 3 && password.length <= 30;

  return hasUpperCase && hasDigit && correctLength;
}

if (isValidPassword(password)) {
  alert('Пароль валидный. Добро пожаловать в аккаунт!');
} else {
  alert('Пароль не удовлетворяет условиям! Попробуйте ввести его еще раз.');
  window.location.reload();
}
