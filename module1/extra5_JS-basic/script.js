const text = 'Привет! Как дела! Давно мы с тобой не виделись.';

function showSuccessMessage(message) {
  console.log(message);
}

function showErrorMessage(message) {
  console.error(message);
}

function checkTextOnErrorSymbol(text, errorSym, successMessage, errorMessage) {
  if (text.includes(errorSym)) {
    text.split('').forEach((char, i) => {
      if (char === errorSym) {
        errorMessage(`Найден запрещенный символ "${char}" под индексом ${i}`);
      }
    });
  } else {
    successMessage('В данном тексте нет запрещенных символов');
  }
}

checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);
