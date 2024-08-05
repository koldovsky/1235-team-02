const slides = [
  `
      <div class="offer-carousel__item">
        <img src="img/carousel/classes-for-adults.png" alt="classes-for-adults" class="carousel__image" />
        <div class="offer-carousel__content">
          <h4 class="carousel__title">Classes for Adults</h4>
          <p class="carousel__text-block">
            By enrolling in our club, you can quickly learn all the intricacies of the game. Our tutors work with both beginners and experienced players. We will provide you with quality theory and practice, explain techniques that will help you analyze the situation on the board faster.
          </p>
          <a href="contacts.html" class="carousel__block-button">Register</a>
        </div>
      </div>
    `,
  `
      <div class="offer-carousel__item">
        <img src="img/carousel/classes-for-children.png" alt="classes-for-children" class="carousel__image" />
        <div class="offer-carousel__content">
          <h4 class="carousel__title">Classes for Children</h4>
          <p class="carousel__text-block">
            Chess helps a child increase his intellectual skills and mathematical abilities. Our tutors have vast experience in teaching children. We can clearly explain to any child how this game works and instill in him the principles of chess thinking and line of thinking.
          </p>
          <a href="contacts.html" class="carousel__block-button">Register</a>
        </div>
      </div>
    `,
  `
      <div class="offer-carousel__item">
        <img src="img/carousel/championship-preparation.png" alt="championship-preparation" class="carousel__image" />
        <div class="offer-carousel__content">
          <h4 class="carousel__title">Championship Preparation</h4>
          <p class="carousel__text-block">
            Our chess club will help professionals and amateurs prepare to participate in tournaments. We will help to develop tactics, work out plans for the game, etc. We conduct complete and thorough training of chess players willing to take part in any chess championships.
          </p>
          <a href="contacts.html" class="carousel__block-button">Register</a>
        </div>
      </div>
    `,
];

let currentIdx = 0;

function renderSlide() {
  const slideContainer = document.querySelector(".offer-carousel__container");
  slideContainer.innerHTML = slides[currentIdx];
  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlideIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
    slideContainer.innerHTML += slides[secondSlideIdx];
  }

  updateIndicators();
}

function updateIndicators() {
  const indicators = document.querySelectorAll(".offer-carousel__indicator");
  indicators.forEach((indicator, idx) => {
    idx === currentIdx
      ? indicator.classList.add("offer-carousel__indicator--active")
      : indicator.classList.remove("offer-carousel__indicator--active");
  });
}

function nextSlide() {
  currentIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
  renderSlide();
}

function prevSlide() {
  currentIdx = currentIdx - 1 < 0 ? slides.length - 1 : currentIdx - 1;
  renderSlide();
}

renderSlide();

const btnRight = document.querySelector(".offer-carousel__button--right");
btnRight.addEventListener("click", nextSlide);

const btnLeft = document.querySelector(".offer-carousel__button--left");
btnLeft.addEventListener("click", prevSlide);

window.addEventListener("resize", renderSlide);

const indicators = document.querySelectorAll(".offer-carousel__indicator");
indicators.forEach((indicator, idx) => {
  indicator.addEventListener("click", () => {
    currentIdx = idx;
    renderSlide();
  });
});