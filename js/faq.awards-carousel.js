const slides = [
    '<div class="award-item"><img src="img/faq/awards1.png" alt="Best Junior Chess Player (2016)"/><p>Best Junior Chess Player (2016)</p></div>',
    '<div class="award-item"><img src="img/faq/awards2.png" alt="Best Amateur Chess Player (2018)"/><p>Best Amateur Chess Player (2018)</p></div>',
    '<div class="award-item"><img src="img/faq/awards3.png" alt="Chess Oscar, 2018"/><p>Chess Oscar, 2018</p></div>',
    '<div class="award-item"><img src="img/faq/awards4.png" alt="USA Champion (2018)"/><p>USA Champion (2018)</p></div>',
    '<div class="award-item"><img src="img/faq/awards5.png" alt="Best Chess Player (2019)"/><p>Best Chess Player (2019)</p></div>',
  ];
  
  let currentIdx = 0;
  
  function renderSlide() {
    const slideContainer = document.querySelector('.awards-carousel__slides');
    slideContainer.innerHTML = slides[currentIdx];
    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlideIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width: 968px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
            if (window.matchMedia('(min-width: 1200px)').matches) {
              const fourthSlideIdx = (thirdSlideIdx + 1) % slides.length;
              slideContainer.innerHTML += slides[fourthSlideIdx];
          }
        }
    }
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
  
  const buttonNext = document.querySelector('.awards-carousel__btn-next');
  buttonNext.addEventListener('click', nextSlide); 
  const buttonPrev = document.querySelector('.awards-carousel__btn-prev');
  buttonPrev.addEventListener('click', prevSlide); 
  
  window.addEventListener('resize', renderSlide);