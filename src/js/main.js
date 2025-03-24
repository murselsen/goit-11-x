import axios from 'axios';

const form = document.querySelector('.app-form');

form.addEventListener('submit', event => {
  event.preventDefault(); // Sayfa Yenilenmesini Engeller
  const searchValue = form.elements.search.value;

  axios.get('https://pixabay.com/api/', {
    params: {
      key : 
    }
  });


});
