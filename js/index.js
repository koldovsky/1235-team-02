function init() {
    import('./index.about-us-info-cards.js');
    import('./index.offer-carousel.js');
    import("./global/global.events-list.js");
    import('./global/global.championship.js');
  }
  
  const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
  let loadedPartialsCount = 0;
  
  document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
  });