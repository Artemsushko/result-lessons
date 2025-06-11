function handleObject(obj, key, action) {
  switch (action) {
    case 'get':
      return obj[key];
    case 'add':
      obj[key] = '';
      return obj;
    case 'delete':
      delete obj[key];
      return obj;
    default:
      return obj;
  }
}

const student = {
  name: 'Maxim',
  programmingLanguage: 'JavaScript',
};

const result = handleObject(student, 'programmingLanguage', 'delete');
console.log('result 1', result); // { name: 'Maxim' }

const result2 = handleObject(student, 'age', 'add');
console.log('result 2', result2); //

const result3 = handleObject(student, 'name', 'get');
console.log('result 3', result3); //

const result4 = handleObject(student, 'smile', 'multiply');
console.log('result 4', result4); //
