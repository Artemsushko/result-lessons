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

function getUsersByIds(ids) {
  toggleLoader();
  const requests = ids.map((id) => fetch(`${USERS_URL}/${id}`));
  Promise.all(requests)
    .then((responses) => {
      if (responses.some((response) => !response.ok)) {
        throw new Error('Error');
      }
      const dataResult = responses.map((response) => response.json());
      return Promise.all(dataResult);
    })
    .then((users) => {
      users.forEach((el) => {
        const user = createUser(el);
        dataContainer.append(user);
      });
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => toggleLoader());
}

getUsersByIds([5, 6, 2, 10]);
