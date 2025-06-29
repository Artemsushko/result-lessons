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

const tasksList = document.querySelector('.tasks-list');

const taskForm = document.querySelector('.create-task-block');
taskForm.addEventListener('submit', createTask);

function createTask(event) {
  event.preventDefault();
  const { target } = event;
  const input = target.querySelector('.create-task-block__input');
  const taskText = input.value.trim();
  const newTask = { id: String(Date.now()), completed: false, text: taskText };
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
  button.addEventListener('click', deleteTask);

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

function deleteTask(event) {
  const taskItem = event.target.closest('.task-item');
  if (!taskItem) return;
  const taskItemId = tasks.findIndex(
    (task) => task.id === taskItem.dataset.taskId
  );
  if (taskItemId !== -1) tasks.splice(taskItemId, 1);
  taskItem.remove();
}

renderTasks(tasks);
