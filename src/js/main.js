const form = document.querySelector('.app-form');

form.addEventListener('submit', event => {
  event.preventDefault(); // Sayfa Yenilenmesini Engeller
  const searchValue = form.elements.search.value;

  fetch('https://pixabay.com/api/', {
    body: JSON.stringify({
      key: '21250106-0015933422f1e636de5f184b8',
      
    }),
  });
});
