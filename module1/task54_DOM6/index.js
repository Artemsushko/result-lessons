const tasks = [
  {
    id: '1138465078061',
    completed: false,
    text: 'Посмотреть новый урок по JavaScript',
  },
  {
    id: '1138465078062',
    completed: false,
    text: 'Выполнить тест после урока',
  },
  {
    id: '1138465078063',
    completed: false,
    text: 'Выполнить ДЗ после урока',
  },
];

let taskIdToDelete = null;

const tasksList = document.querySelector('.tasks-list');
tasksList.addEventListener('click', (event) => {
  const { target } = event;
  if (target.classList.contains('task-item__delete-button')) {
    const taskItem = target.closest('.task-item');
    taskIdToDelete = taskItem?.dataset.taskId;
    renderModal();
  }
});

const taskForm = document.querySelector('.create-task-block');
taskForm.addEventListener('submit', createTask);

function isInputValid(value) {
  if (value.length === 0) {
    return 'Название задачи не должно быть пустым';
  }
  if (tasks.find((task) => task.text === value)) {
    return 'Задача с таким названием уже существует';
  }
  return null;
}

function createErrorMessage(errorText) {
  const error = document.createElement('span');
  error.className = 'error-message-block';
  error.textContent = errorText;
  taskForm.append(error);
}

function createTask(event) {
  event.preventDefault();
  const { target } = event;
  const errorBlock = document.querySelector('.error-message-block');
  if (errorBlock) errorBlock.remove();

  const input = target.querySelector('.create-task-block__input');
  const taskText = input?.value.trim();

  const isValid = isInputValid(taskText);
  if (isValid) {
    createErrorMessage(isValid);
    return;
  }

  const newTask = {
    id: String(Date.now()),
    completed: false,
    text: taskText,
  };
  tasks.push(newTask);
  renderTasks([newTask]);
  input.value = '';
  input.focus();
}

function renderTask({ id, text }) {
  const taskItem = document.createElement('div');
  taskItem.className = 'task-item';
  taskItem.dataset.taskId = id;

  const mainContainer = document.createElement('div');
  mainContainer.className = 'task-item__main-container';

  const mainContent = document.createElement('div');
  mainContent.className = 'task-item__main-content';

  const form = document.createElement('form');
  form.className = 'checkbox-form';

  const input = document.createElement('input');
  input.className = 'checkbox-form__checkbox';
  input.type = 'checkbox';
  input.id = id;

  const label = document.createElement('label');
  label.htmlFor = id;

  const span = document.createElement('span');
  span.className = 'task-item__text';
  span.textContent = text;

  const button = document.createElement('button');
  button.className = 'task-item__delete-button default-button delete-button';
  button.textContent = 'Удалить';

  form.append(input, label);
  mainContent.append(form, span);
  mainContainer.append(mainContent, button);
  taskItem.append(mainContainer);
  tasksList.append(taskItem);
}

function renderTasks(tasks) {
  tasks.forEach((task) => {
    renderTask(task);
  });
}
function renderModal() {
  const modalOverlay = document.createElement('div');

  modalOverlay.className = 'modal-overlay';
  const deleteModal = document.createElement('div');
  deleteModal.className = 'delete-modal';
  const deleteQuestion = document.createElement('h3');
  deleteQuestion.className = 'delete-modal__question';
  deleteQuestion.textContent = 'Вы действительно хотите удалить эту задачу?';
  const modalButtons = document.createElement('div');
  modalButtons.className = 'delete-modal__buttons';
  const cancelButton = document.createElement('button');
  cancelButton.className = 'delete-modal__button delete-modal__cancel-button';
  cancelButton.textContent = 'Отмена';
  cancelButton.addEventListener('click', () => {
    modalOverlay.classList.add('modal-overlay_hidden');
    modalOverlay.remove();
  });
  const confirmButton = document.createElement('button');
  confirmButton.className = 'delete-modal__button delete-modal__confirm-button';
  confirmButton.textContent = 'Удалить';
  confirmButton.addEventListener('click', () => {
    modalOverlay.classList.add('modal-overlay_hidden');
    modalOverlay.remove();
    deleteTask(taskIdToDelete);
  });

  modalButtons.append(cancelButton, confirmButton);
  deleteModal.append(deleteQuestion, modalButtons);
  modalOverlay.append(deleteModal);
  document.body.append(modalOverlay);
}

function deleteTask(id) {
  const taskItem = document.querySelector(`[data-task-id="${id}"]`);
  if (!taskItem) return;
  const taskItemId = tasks.findIndex((task) => task.id === id);
  if (taskItemId !== -1) tasks.splice(taskItemId, 1);
  taskItem.remove();
}

renderTasks(tasks);

const body = document.body;
const taskItems = tasksList.querySelectorAll('.task-item');
const allButtons = document.querySelectorAll('button');

document.addEventListener('keydown', (event) => {
  const { key } = event;
  if (key === 'Tab') {
    const bodyBg = getComputedStyle(body).backgroundColor;
    if (bodyBg === 'rgb(36, 41, 46)') {
      body.style.backgroundColor = 'transparent';
      taskItems.forEach((item) => {
        item.style.color = '#000';
      });
      allButtons.forEach((btn) => {
        btn.style.border = 'none';
      });
    } else {
      body.style.backgroundColor = '#24292E';
      taskItems.forEach((item) => {
        item.style.color = '#ffffff';
      });
      allButtons.forEach((btn) => {
        btn.style.border = '1px solid #ffffff';
      });
    }
  }
});
