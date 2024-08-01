const slides = [
    '<div><img src="img/faq/awards1.png" alt="Award 1"/></div>',
    '<div><img src="img/faq/awards2.png" alt="Award 2"/></div>',
    '<div><img src="img/faq/awards3.png" alt="Award 3"/></div>',
    '<div><img src="img/faq/awards4.png" alt="Award 4"/></div>',
    '<div><img src="img/faq/awards5.png" alt="Award 5"/></div>',
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