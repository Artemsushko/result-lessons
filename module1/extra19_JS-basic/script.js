class CustomSelect {
  #currentSelectedOption = null;

  constructor(id, options) {
    this.id = id;
    this.options = options;
  }

  render(container) {
    const dropDown = document.createElement('div');
    dropDown.className = `select-dropdown select-dropdown--${this.id}`;

    const dropDownBtn = document.createElement('button');
    dropDownBtn.className = `select-dropdown__button select-dropdown__button--${this.id}`;
    dropDownBtn.addEventListener('click', () => {
      dropDownList.classList.toggle('active');
    });

    const dropDownText = document.createElement('span');
    dropDownText.className = `select-dropdown__text select-dropdown__text--${this.id}`;

    const dropDownList = document.createElement('ul');
    dropDownList.className = `select-dropdown__list select-dropdown__list--${this.id}`;
    dropDownList.addEventListener('click', (event) => {
      const { target } = event;
      if (target.classList.contains('select-dropdown__list-item')) {
        const allListItem = document.querySelectorAll(
          '.select-dropdown__list-item'
        );
        allListItem.forEach((item) => {
          item.classList.remove('selected');
        });
        target.classList.add('selected');

        const currentOption = this.options[target.dataset.value - 1];
        this.#currentSelectedOption = currentOption;
        dropDownText.textContent = currentOption.text;
      }
    });

    this.options.forEach((el) => {
      const ojbValues = Object.values(el);
      const listItem = document.createElement('li');
      listItem.className = 'select-dropdown__list-item';
      listItem.dataset.value = ojbValues[0];
      listItem.textContent = ojbValues[1];
      dropDownList.append(listItem);
    });

    dropDownBtn.append(dropDownText);
    dropDown.append(dropDownBtn, dropDownList);
    container.append(dropDown);
  }

  get selectedValue() {
    return this.#currentSelectedOption;
  }
}

const options = [
  { value: 1, text: 'JavaScript' },
  { value: 2, text: 'NodeJS' },
  { value: 3, text: 'ReactJS' },
  { value: 4, text: 'HTML' },
  { value: 5, text: 'CSS' },
];

const customSelect = new CustomSelect('123', options);
const mainContainer = document.querySelector('#container');
customSelect.render(mainContainer);
