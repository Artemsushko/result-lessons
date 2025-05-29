const excistingLogin = 'qwe';
const excistingPassword = 12345;

const userLogin = prompt('Enter login').trim();
const userPassword = Number(prompt('Enter password').trim());

if (userLogin === excistingLogin && userPassword === excistingPassword) {
  alert(`Welcome ${userLogin}`);
} else {
  alert('Password and(or) Login are incorrect');
}
