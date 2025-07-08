const PHOTOS_URL = 'https://api.slingacademy.com/v1/sample-data/photos';
const dataContainer = document.querySelector('#data-container');

function toggleLoader() {
  const loader = document.querySelector('#loader');
  loader.hasAttribute('hidden')
    ? loader.removeAttribute('hidden')
    : loader.setAttribute('hidden', '');
}

function createPhotoElement(photo) {
  const {
    photo: { url, title },
  } = photo;
  const photoItem = document.createElement('li');
  photoItem.className = 'photo-item';

  const image = document.createElement('img');
  image.className = 'photo-item__image';
  image.src = url;

  const photoTitle = document.createElement('h3');
  photoTitle.className = 'photo-item__title';
  photoTitle.textContent = title;

  photoItem.append(image, photoTitle);
  return photoItem;
}

function getFastestLoadedPhoto(ids) {
  toggleLoader();
  const requests = ids.map((id) => fetch(`${PHOTOS_URL}/${id}`));
  Promise.race(requests)
    .then((response) => {
      return response.json();
    })
    .then((photo) => {
      const photoEl = createPhotoElement(photo);
      dataContainer.append(photoEl);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      toggleLoader();
    });
}

getFastestLoadedPhoto([60, 12, 55]);
