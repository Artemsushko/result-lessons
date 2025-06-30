class CustomSelect {
  #currentSelectedOption = null;

  constructor(id, options) {
    this.id = id;
    this.options = options;
  }

  render(container) {
    const dropDown = document.createElement('div');
    dropDown.className = `select-dropdown select-dropdown--${this.id}`;

    const dropDownText = document.createElement('span');
    dropDownText.className = `select-dropdown__text select-dropdown__text--${this.id}`;
    dropDownText.textContent = 'Выберите...';

    const dropDownList = document.createElement('ul');
    dropDownList.className = `select-dropdown__list select-dropdown__list--${this.id}`;
    dropDownList.addEventListener('click', (event) => {
      const { target } = event;
      if (target.classList.contains('select-dropdown__list-item')) {
        const allListItem = dropDownList.querySelectorAll(
          '.select-dropdown__list-item'
        );
        allListItem.forEach((item) => {
          item.classList.remove('selected');
        });
        target.classList.add('selected');
        dropDownList.classList.toggle('active');

        const currentOption = this.options.find(
          (op) => op.value == target.dataset.value
        );
        this.#currentSelectedOption = currentOption;
        dropDownText.textContent = currentOption.text;
      }
    });

    const dropDownBtn = document.createElement('button');
    dropDownBtn.className = `select-dropdown__button select-dropdown__button--${this.id}`;
    dropDownBtn.addEventListener('click', () => {
      dropDownList.classList.toggle('active');
    });

    this.options.forEach((el) => {
      const listItem = document.createElement('li');
      listItem.className = 'select-dropdown__list-item';
      listItem.dataset.value = el.value;
      listItem.textContent = el.text;
      dropDownList.append(listItem);
    });

    dropDownBtn.append(dropDownText);
    dropDown.append(dropDownBtn, dropDownList);
    container.append(dropDown);

    document.addEventListener('click', (event) => {
      if (!dropDown.contains(event.target)) {
        dropDownList.classList.remove('active');
      }
    });
  }

  get selectedValue() {
    return this.#currentSelectedOption?.value;
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
