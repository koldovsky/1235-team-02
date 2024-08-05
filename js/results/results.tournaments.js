const slides = [
  `<div class="carousel__slide">
    <p class="carousel__year">2018</p>
    <div class="carousel__links">
      <a class="carousel__link" href="#">March Junior Championship</a>
      <a class="carousel__link" href="#">June Adult Championship</a>
      <a class="carousel__link" href="#">Pro Championship</a>
      <a class="carousel__link" href="#">2018 Junior Championship</a>
      <a class="carousel__link" href="#">2018 Big Board</a>
    </div>
  </div>`,
  `<div class="carousel__slide">
    <p class="carousel__year">2019</p>
    <div class="carousel__links">
      <a class="carousel__link" href="#">March Junior Championship</a>
      <a class="carousel__link" href="#">June Adult Championship</a>
      <a class="carousel__link" href="#">Pro Championship</a>
      <a class="carousel__link" href="#">2019 Junior Championship</a>
      <a class="carousel__link" href="#">2019 Big Board</a>
    </div>
  </div>`,
  `<div class="carousel__slide">
    <p class="carousel__year">2020</p>
    <div class="carousel__links">
      <a class="carousel__link" href="#">March Junior Championship</a>
      <a class="carousel__link" href="#">June Adult Championship</a>
      <a class="carousel__link" href="#">Pro Championship</a>
      <a class="carousel__link" href="#">2020 Junior Championship</a>
      <a class="carousel__link" href="#">2020 Big Board</a>
    </div>
  </div>`,
  `<div class="carousel__slide">
    <p class="carousel__year">2021</p>
    <div class="carousel__links">
      <a class="carousel__link" href="#">March Junior Championship</a>
      <a class="carousel__link" href="#">June Adult Championship</a>
      <a class="carousel__link" href="#">Pro Championship</a>
      <a class="carousel__link" href="#">2021 Junior Championship</a>
      <a class="carousel__link" href="#">2021 Big Board</a>
    </div>
  </div>`,
  `<div class="carousel__slide">
    <p class="carousel__year">2022</p>
    <div class="carousel__links">
      <a class="carousel__link" href="#">March Junior Championship</a>
      <a class="carousel__link" href="#">June Adult Championship</a>
      <a class="carousel__link" href="#">Pro Championship</a>
      <a class="carousel__link" href="#">2022 Junior Championship</a>
      <a class="carousel__link" href="#">2022 Big Board</a>
    </div>
  </div>`,
];

let currentIdx = 0;

function renderSlide() {
  const slideContainer = document.querySelector(".carousel__track");
  slideContainer.innerHTML = "";

  const width = window.innerWidth;
  let slidesToShow = 1;
  if (width >= 1250) {
    slidesToShow = 4;
  }
  else if (width >= 991) {
    slidesToShow = 3;
  } else if (width >= 768) {
    slidesToShow = 2;
  }

  for (let i = 0; i < slidesToShow; i++) {
    const slideIdx = (currentIdx + i) % slides.length;
    slideContainer.innerHTML += slides[slideIdx];
  }
}

function nextSlide() {
  currentIdx = (currentIdx + 1) % slides.length;
  renderSlide();
}

function prevSlide() {
  currentIdx = (currentIdx - 1 + slides.length) % slides.length;
  renderSlide();
}

renderSlide();

const btnRight = document.querySelector(".carousel__button--right");
btnRight.addEventListener("click", nextSlide);

const btnLeft = document.querySelector(".carousel__button--left");
btnLeft.addEventListener("click", prevSlide);

window.addEventListener("resize", renderSlide);