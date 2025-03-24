const form = document.querySelector('.app-form');

form.addEventListener('submit', event => {
  event.preventDefault(); // Sayfa Yenilenmesini Engeller
  const searchValue = form.elements.search.value;


  const params = new URLSearchParams({
    userId: 123,
    status: 'active',
  });

  fetch(`https://pixabay.com/api/?key=21250106-0015933422f1e636de5f184b8&q=${searchValue}&image_type=photo&orientation=horizontal&safesearch=true`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
});
