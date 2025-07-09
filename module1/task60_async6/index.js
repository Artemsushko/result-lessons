const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const mainContainer = document.querySelector('#data-container');

function toggleLoader() {
  const loader = document.querySelector('#loader');
  loader.hasAttribute('hidden')
    ? loader.removeAttribute('hidden')
    : loader.setAttribute('hidden', '');
}

function createAlbumTitle(album) {
  const albumTitle = document.createElement('li');
  albumTitle.textContent = album.title;
  return albumTitle;
}

async function renderAlbums() {
  toggleLoader();
  try {
    const request = await fetch(ALBUMS_URL);
    const response = await request.json();
    response.forEach((el) => {
      const albumTitle = createAlbumTitle(el);
      mainContainer.append(albumTitle);
    });
  } catch (e) {
    mainContainer.textContent = `Произошла ошибка в получении данных об альбомах...`;
  } finally {
    toggleLoader();
  }
}

renderAlbums();
