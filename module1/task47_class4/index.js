class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }

  add(word, description) {
    this.words[word] = { word, description };
  }

  get(wordKey) {
    return this.words[wordKey];
  }

  remove(wordKey) {
    delete this.words[wordKey];
  }

  showAllWords() {
    Object.keys(this.words).forEach((wordKey) => {
      const { word, description } = this.words[wordKey];
      console.log(`${word} - ${description}`);
    });
  }
}

class HardWordsDictionary extends Dictionary {
  add(word, description) {
    this.words[word] = { word, description, isDifficult: true };
  }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add(
  'Веб-разработчик',
  'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие'
);

const word = dictionary.get('Веб-разработчик');
console.log(word);

dictionary.remove('Веб-разработчик');

dictionary.showAllWords();
const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add(
  'дилетант',
  'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.'
);

hardWordsDictionary.add(
  'неологизм',
  'Новое слово или выражение, а также новое значение старого слова.'
);

hardWordsDictionary.add(
  'квант',
  'Неделимая часть какой-либо величины в физике.'
);

hardWordsDictionary.remove('неологизм');

hardWordsDictionary.showAllWords();
