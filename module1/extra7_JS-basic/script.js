const allowedOperators = ['>', '<', '=', '+', '-', '*', '/'];
function validacionOfArray(expression) {
  return expression
    .map((el) => {
      return !isNaN(Number(el)) || allowedOperators.includes(el) ? el : null;
    })
    .filter((el) => el !== null);
}

function getMathResult(expression) {
  if (expression.length > 3) {
    expression = validacionOfArray(expression);
  }
  if (allowedOperators.includes(expression[1]) && expression.length === 3) {
    if (expression[1] === '=') {
      expression[1] = '===';
    }
    const res = eval(expression.join(''));
    console.log(res);
  } else {
    console.error('Error!');
  }
}

getMathResult(['200', '+', 300]); // 500
getMathResult(['20', '-', '5']); // 15
getMathResult([100, '/', 100]); // 1
getMathResult([2, '-', 2]); // 0
getMathResult(['5', '>', '10']); // false
getMathResult(['5', '<', '10']); // true
getMathResult(['1', '=', 1]); // true
getMathResult(['1', '**', 1]); // 'Ошибка'
getMathResult(['+', '100', 10]); // 'Ошибка'
getMathResult(['100', 'hello', 'javascript', 'help200', '+', 4]); // '104'
