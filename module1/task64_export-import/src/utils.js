export function getRandomColor() {
  const letters = 'ABCDEF0123456789';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

export function createChangeColorBtn() {
  const button = document.createElement('button');
  button.className = 'button';
  button.textContent = 'Изменить цвет страницы';
  button.addEventListener('click', () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  });

  return button;
}
