// Axios
import axios from 'axios';
// Izitoast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// SimpleLightBox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.app-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', event => {
  event.preventDefault(); // Sayfa Yenilenmesini Engeller
  gallery.innerHTML = ''; // Her Submit'te Galeri Temizlenir
  const searchValue = form.elements.search.value;

  axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '21250106-0015933422f1e636de5f184b8',
        q: searchValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      console.log(response);
      const images = response.data.hits;
      if (images.length === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        images.forEach(img => {
          gallery.innerHTML += `

          <!-- <li class="gallery-item">
          <img src="https://picsum.photos/360/200" alt="Random image" />
          <div class="content">
            <div class="info">
              <h5 class="key">Likes</h5>
              <p class="value">1813</p>
            </div>
            <div class="info">
              <h5 class="key">Views</h5>
              <p class="value">900290</p>
            </div>
            <div class="info">
              <h5 class="key">Comments</h5>
              <p class="value">229</p>
            </div>
            <div class="info">
              <h5 class="key">Downloads</h5>
              <p class="value">610937</p>
            </div>
          </div>
        </li>`;
          
        });
      }
    })
    .catch(error => {
      console.error(error);
    });
});
