
function startCountdown(duration) {
  let timer = duration;
  const timerElement = document.querySelector('.timer');
  const messageElement = document.querySelector('.message');


  const intervalId = setInterval(() => {
    timerElement.textContent = timer;

    
    if (timer <= 0) {
      clearInterval(intervalId);
      messageElement.textContent = 'The action has ended';
      timerElement.textContent = '0';

      document.querySelectorAll('.new_price').forEach(new_price_el => new_price_el.remove());
      document.querySelectorAll('.discount').forEach(discount_el => discount_el.classList.remove('line_through'));
      document.querySelectorAll('.timer_border').forEach(timer_border_el =>timer_border_el.classList.remove('timer_border'));
    }

    timer--;
  }, 1000);
}


const duration = 30;
startCountdown(duration);
