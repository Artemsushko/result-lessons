const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const dataContainer = document.querySelector('#data-container');

function createUser(user) {
  const item = document.createElement('li');
  const itemAnchor = document.createElement('a');
  itemAnchor.href = `${user.website}`;
  itemAnchor.textContent = `${user.name}`;
  item.append(itemAnchor);
  return item;
}

function toggleLoader() {
  const loader = dataContainer.querySelector('#loader');
  loader.hasAttribute('hidden')
    ? loader.removeAttribute('hidden')
    : loader.setAttribute('hidden', '');
}

function getAllUsers() {
  toggleLoader();
  fetch(USERS_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error');
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((el) => {
        const user = createUser(el);
        dataContainer.append(user);
      });
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      toggleLoader();
    });
}

getAllUsers();
