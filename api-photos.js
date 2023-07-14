// api.js

const token1 = `IGQVJWYjd5b2hFaXRpTkF4a0p3NHRkNzZA0dFVLbjRmYWZAGaDFS`;
const token2 = `UGV1TXdUcWdwQ3lJYjhOeGo5VC1FdmhHR1JjZ`;
const token3 = `AHFSLWVoQ05sMnBuczd6el96cnJ2RW9FNG0`;
const token4 = `3eks3dTJjXzJ2S1JVbzJVTXRxbTNFcgZDZD`;
const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url&limit=80&access_token=${token1}${token2}${token3}${token4}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const photosContainer = document.querySelector('.photos .row');

    data.data.forEach((item) => {
      const { media_type, media_url, thumbnail_url } = item;

      let mediaElement;

      if (media_type === 'IMAGE') {
        mediaElement = `<img src="${media_url}" class="d-block w-100">`;
      } else if (media_type === 'VIDEO') {
        mediaElement = `
          <video controls class="d-block w-100">
            <source src="${media_url}" type="video/mp4">
          </video>
        `;
      }

      photosContainer.innerHTML += `
        <div class="col-md-4">
          <div class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                ${mediaElement}
              </div>
            </div>
          </div>
        </div>
      `;
    });

    // Inicializar los carruseles una vez se hayan agregado las imágenes y los videos
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach((carousel) => {
      new bootstrap.Carousel(carousel);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
