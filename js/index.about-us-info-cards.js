const infoCards = [
  {
    id: "1",
    title: "Experience",
    description:
      "Our chess club has existed for more than 50 years, a huge number chess players have studied here.",
    image: "img/about-us/icons/experience-icon.svg",
  },
  {
    id: "2",
    title: "Best Tutors",
    description:
      "Our tutors are current or former professional players who have gainedinternational recognition.",
    image: "img/about-us/icons/tutor-icon.svg",
  },
  {
    id: "3",
    title: "Practice",
    description:
      "In our club, you can practice with the best chess players in America and take part in tournaments.",
    image: "img/about-us/icons/practice-icon.svg",
  },
];

function renderCards(cards) {
  let cardsHtml = "";
  for (const card of cards) {
    cardsHtml += `
        <article class="info-card">
      <div class="info-card__image">
        <img
          src="${card.image}"
          alt="${card.title}"
        />
      </div>
      <h3 class="info-card__title">${card.title}</h3>
      <p class="info-card__text">${card.description}</p>
    </article>`;
  }
  document.querySelector(".info-cards-wrapper").innerHTML = cardsHtml;
}

renderCards(infoCards);
