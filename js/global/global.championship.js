const players = [
  {
    id: "1",
    image: "img/championship/first-player.png",
    name: "Sam Edelman",
    point: 2355,
    place: "Best Player",
  },
  {
    id: "2",
    image: "img/championship/second-player.png",
    name: "Tom Kusa",
    point: 2257,
    place: "02",
  },
  {
    id: "3",
    image: "img/championship/third-player.png",
    name: "Don Tippel",
    point: 2007,
    place: "03",
  },
  {
    id: "4",
    image: "img/championship/fourth-player.png",
    name: "Mark Faidenc",
    point: 1988,
    place: "04",
  },
  {
    id: "5",
    image: "img/championship/fifth-player.png",
    name: "Susan Harrelson",
    point: 1987,
    place: "05",
  },
];

function renderPlayers(players) {
  let firstPlayerHtml = " ";
  let secondFifthPlayerHtml = " ";
  for (const player of players) {
    if (player.id === "1") {
        firstPlayerHtml += `
        <svg
        class="championship__player--first__crone"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 90 90"
        xml:space="preserve"
        style="max-width: 100%"
        height="100%"
      >
        <path
          fill="currentColor"
          stroke="currentColor"
          stroke-miterlimit="10"
          d="M760.519,546.846c-2.791,0-5.053,2.262-5.053,5.052  c0,0.714,0.152,1.392,0.42,2.009l-30.095,13.045l-14.135-35.023c1.854-0.748,3.164-2.558,3.164-4.679  c0-2.79-2.262-5.052-5.053-5.052c-2.79,0-5.052,2.262-5.052,5.052c0,2.121,1.311,3.931,3.163,4.679l-14.134,35.023l-30.095-13.045  c0.268-0.617,0.42-1.295,0.42-2.009c0-2.79-2.262-5.052-5.053-5.052c-2.79,0-5.052,2.262-5.052,5.052s2.262,5.052,5.052,5.052  c0.512,0,0.994-0.098,1.459-0.238l13.395,44.186h6.174h29.723h29.724h6.174l13.395-44.186c0.465,0.141,0.948,0.238,1.459,0.238  c2.789,0,5.053-2.262,5.053-5.052S763.308,546.846,760.519,546.846z"
          style=""
        ></path>
        <path
          fill="currentColor"
          d="M83.502,33.847c-2.118,0-3.834,1.716-3.834,3.833c0,0.542,0.116,1.056,0.319,1.523l-22.832,9.897  L46.432,22.53c1.406-0.568,2.401-1.941,2.401-3.55c0-2.117-1.717-3.833-3.834-3.833c-2.116,0-3.833,1.716-3.833,3.833  c0,1.609,0.995,2.982,2.4,3.55l-10.723,26.57l-22.832-9.897c0.203-0.468,0.319-0.982,0.319-1.523c0-2.117-1.716-3.833-3.833-3.833  c-2.117,0-3.833,1.716-3.833,3.833c0,2.116,1.716,3.833,3.833,3.833c0.388,0,0.754-0.075,1.107-0.181l10.162,33.521h4.684h22.549  h22.55h4.685l10.161-33.521c0.353,0.106,0.72,0.181,1.107,0.181c2.115,0,3.833-1.716,3.833-3.833  C87.335,35.563,85.617,33.847,83.502,33.847z"
          style=""
        ></path>
      </svg>
        <div>
          <img
            class="championship__player-img--first"
            src="${player.image}"
            alt=""
          />
        </div>
        <div>
          <p class="championship__player-name--first">${player.name}</p>
          <p class="championship__player-place">${player.place}</p>
          <p class="championship__player-point--first">${player.point}</p>
          <p class="championship__player-rating">Rating</p>
        </div>`;
    } else {
        secondFifthPlayerHtml += (`
            <div class="championship__player">
                <div>
                    <img
                        class="championship__player-img"
                        src="${player.image}"
                        alt=""
                    />
                </div>
                <div class="championship__player-details">
                    <div class="championship__player-details--name-point">
                        <p class="championship__player-name">${player.name}</p>
                        <p class="championship__player-separator"></p>
                        <p class="championship__player-point">${player.point}</p>
                    </div>
                    <div>
                        <p class="championship__player-place">${player.place}</p>
                    </div>  
                </div>              
            </div>`        
      );
    }
  }
  document.querySelector(".championship__player--first").innerHTML = firstPlayerHtml;
  document.querySelector(".championship__players--second-fifth").innerHTML = secondFifthPlayerHtml;
}

renderPlayers(players);


