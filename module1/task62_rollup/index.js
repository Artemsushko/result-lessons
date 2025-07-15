import MY_IMG from './assets/logoJS.png';
import './index.css';
console.log('Hello World');

const h1 = document.createElement('h1');
h1.textContent = 'I love JavaScript';
const image = document.createElement('img');
image.src = MY_IMG;

document.body.append(h1, image);
