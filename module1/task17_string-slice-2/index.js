const userText = prompt('Enter text').trim();
const fragmentOfText = prompt('Enter fragment of text').trim();
const indexOfFragment = userText.indexOf(fragmentOfText);
alert(`Result: ${userText.slice(0, indexOfFragment)}`);
