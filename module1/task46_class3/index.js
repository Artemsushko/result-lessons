class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }
  add(word, description) {
    this.words[word] = { word, description };
  }

  get(word) {
    return this.words[word];
  }

  remove(word) {
    delete this.words[word];
  }

  showAllWords() {
    Object.keys(this.words).forEach((word) => {
      console.log(`${this.words[word].word} - ${this.words[word].description}`);
    });
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
