const CATS_TAGS_URL = 'https://cataas.com/api/tags';
const CATS_IMG_URL = 'https://cataas.com/api/cats';

function toggleLoader() {
  const loader = document.querySelector('#loader');
  loader.hasAttribute('hidden')
    ? loader.removeAttribute('hidden')
    : loader.setAttribute('hidden', '');
}

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

async function getCat() {
  const tagsResponse = await fetch(CATS_TAGS_URL);
  const catTags = await tagsResponse.json();
  const randomTag = getRandomElement(catTags);

  const catsResponse = await fetch(CATS_IMG_URL);
  const catImgs = await catsResponse.json();

  const randomCat = getRandomElement(catImgs);

  return {
    tag: randomTag,
    url: `https://cataas.com/cat/${randomCat.id}`,
  };
}

getCat()
  .then((result) => {
    const { tag, url } = result;
    const title = document.querySelector('#header');
    title.textContent = tag;

    const image = document.querySelector('#image');
    image.src = url;
  })
  .catch(console.error)
  .finally(() => {
    toggleLoader();
  });
