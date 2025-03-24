import axios from 'axios';

const form = document.querySelector('.app-form');

form.addEventListener('submit', event => {
  event.preventDefault(); // Sayfa Yenilenmesini Engeller
  const searchValue = form.elements.search.value;

  axios.get('https://pixabay.com/api/', {
    params: {
      key: '21250106-0015933422f1e636de5f184b8',
      q: searchValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
});
