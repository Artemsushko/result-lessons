class CustomSelect {
  #currentSelectedOption = null;

  constructor(id, options) {
    this.id = id;
    this.options = options;
  }

  #handleOutsideClick(dropDownList, dropDown) {
    const outsideClickListener = (event) => {
      if (!dropDown.contains(event.target)) {
        dropDownList.classList.remove('active');
      }
    };

    document.addEventListener('click', outsideClickListener);
  }

  #handleListItem(dropDownList, dropDownBtn, dropDown, event) {
    const { target } = event;

    if (target.classList.contains('select-dropdown__list-item')) {
      dropDownList
        .querySelectorAll('.select-dropdown__list-item')
        .forEach((item) => item.classList.remove('selected'));
      target.classList.add('selected');
      const currentOption = this.options.find(
        (op) => op.value == target.dataset.value
      );
      this.#currentSelectedOption = currentOption;

      dropDownBtn.textContent = currentOption.text;

      dropDownList.classList.remove('active');

      this.#handleOutsideClick(dropDownList, dropDown, dropDownBtn);
    }
  }

  #createDropDown(dropDownBtn) {
    const dropDown = document.createElement('div');
    dropDown.className = `select-dropdown select-dropdown--${this.id}`;

    const dropDownText = document.createElement('span');
    dropDownText.className = `select-dropdown__text select-dropdown__text--${this.id}`;

    const dropDownList = document.createElement('ul');
    dropDownList.className = `select-dropdown__list select-dropdown__list--${this.id}`;

    this.options.forEach((el) => {
      const listItem = document.createElement('li');
      listItem.className = 'select-dropdown__list-item';
      listItem.dataset.value = el.value;
      listItem.textContent = el.text;
      dropDownList.append(listItem);
    });

    dropDownList.addEventListener('click', (event) => {
      this.#handleListItem(dropDownList, dropDownBtn, dropDown, event);
    });

    dropDownBtn.className = `select-dropdown__button select-dropdown__button--${this.id}`;
    dropDownBtn.textContent = 'Открыть меню';
    dropDownBtn.addEventListener('click', () => {
      dropDownList.classList.toggle('active');
      this.#handleOutsideClick(dropDownList, dropDown, dropDownBtn);
    });

    dropDown.append(dropDownBtn, dropDownList);

    return dropDown;
  }

  render(container) {
    const dropDownBtn = document.createElement('button');
    const dropDown = this.#createDropDown(dropDownBtn);
    container.append(dropDown);
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
