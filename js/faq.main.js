const headerTitle = document.querySelector(".faq__title");

const titles = [
  'FAQ', 
  'Frequently Asked Questions', 
  'Popular Questions', 
  'Common Questions', 
  'Most Asked Questions'
];  

const getRandomEl = (arr) => arr[ Math.floor(Math.random() * arr.length) ]; 

headerTitle.innerText = getRandomEl(titles);