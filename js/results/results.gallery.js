const slides = [
  '<div class="gallery__image"><img class="gallery__image-item" src="img/result-page/two-men-are-playing.png" alt="Two men are playing chess"></div>',
  '<div class="gallery__image"><img class="gallery__image-item" src="img/result-page/man-is-thinking.png" alt="Men is thinking about his next move"></div>',
  '<div class="gallery__image"><img class="gallery__image-item" src="img/result-page/chess-desk.png" alt="Chess Desk"></div>',
  '<div class="gallery__image"><img class="gallery__image-item" src="img/result-page/by-bye.png" alt="Two men are shaking hands after a game"></div>',
];

const thumbnailsArr = [
  '<button class="gallery__thumbnail" type="button"><img src="img/result-page/two-men-are-playing.png" alt="Two men are playing chess" /></button>',
  '<button class="gallery__thumbnail" type="button"><img src="img/result-page/man-is-thinking.png" alt="Men is thinking about his next move" /></button>',
  '<button class="gallery__thumbnail" type="button"><img src="img/result-page/chess-desk.png" alt="Chess Desk" /></button>',
  '<button class="gallery__thumbnail" type="button"><img src="img/result-page/by-bye.png" alt="Two men are shaking hands after a game" /></button>'
];

let currentIdx = 0;

function render() {
  const imageContainer = document.querySelector(".gallery__image");
  if (imageContainer) {
    imageContainer.innerHTML = slides[currentIdx];
  }
}

function thumbnails() {
  const galleryThumbnails = document.querySelector('.gallery__thumbnails');
  if (galleryThumbnails) {
    galleryThumbnails.innerHTML = thumbnailsArr.join('');
    const thumbnailButtons = galleryThumbnails.querySelectorAll('.gallery__thumbnail');
    thumbnailButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        currentIdx = index;
        render();
        setActive(thumbnailButtons);
      });
    });
    setActive(thumbnailButtons);
  }
}

function setActive(thumbnailButtons) {
  thumbnailButtons.forEach((button, index) => {
    if (currentIdx !== index) button.classList.remove('active');
    else button.classList.add('active');
  });
}

render();
thumbnails()
