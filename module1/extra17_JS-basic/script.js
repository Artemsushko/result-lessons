class Dictionary {
  #name;
  #words;
  constructor(name) {
    this.#name = name;
    this.#words = {};
  }

  get mainName() {
    return this.#name;
  }

  set mainName(word) {
    this.#name = word;
  }

  get allWords() {
    return this.#words;
  }

  _addNewWord(wordKey, wordObj) {
    this.#words[wordKey] = wordObj;
  }

  add(wordKey, description) {
    if (!this.#words[wordKey]) {
      this._addNewWord(wordKey, { word: wordKey, description });
    }
  }

  get(wordKey) {
    return this.#words[wordKey];
  }

  remove(wordKey) {
    delete this.#words[wordKey];
  }

  showAllWords() {
    Object.keys(this.#words).forEach((wordKey) => {
      const { word, description } = this.#words[wordKey];
      console.log(`${word} - ${description}`);
    });
  }
}

class HardWordsDictionary extends Dictionary {
  add(wordKey, description) {
    if (!this.allWords[wordKey]) {
      this._addNewWord(wordKey, {
        word: wordKey,
        description,
        isDifficult: true,
      });
    }
  }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add(
  'Веб-разработчик',
  'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие'
);

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

console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.mainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова
// дилетант и квант
