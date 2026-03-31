// Getting the main elements
const board = document.querySelector("#game-board");
const startBtn = document.querySelector("#restart-btn");
const score = document.querySelector("#score");
const loading = document.querySelector("#loading");
const startComment = document.querySelector("#startComment");

// Global variables
const baseUrl = "https://picsum.photos/seed";
const imageSize = 200;
const numberOfPairs = 18;
const imageIDs = [];
const imageURLs = [];
let cards = [];
let points = 0;
let selectedImgUrl = "";
let canClick = false;

// Handle start button click
startBtn.addEventListener("click", initializeGame);

// Initialize the game and get all the cards ready for play
async function initializeGame() {
  loading.classList.remove("hide");

  startComment?.remove();
  await getImagesData();
  initializeCards();

  selectedImgUrl = "";
  points = 0;
  score.innerText = points;

  loading.classList.add("hide");

  canClick = true;
}

// Getting all images from random image API
async function getImagesData() {
  imageURLs.length = 0;
  imageIDs.length = 0;

  // Filling the image ID array with random id's
  while (imageIDs.length < numberOfPairs) {
    const randomNum = Math.floor(Math.random() * 1000) + 1;

    if (!imageIDs.includes(randomNum)) {
      imageIDs.push(randomNum);
    }
  }
  console.log("Images ID:", imageIDs);

  // Filling the image URL array with random img URLs from API
  try {
    for (let i = 0; i < imageIDs.length; i++) {
      const result = await fetch(`${baseUrl}/${imageIDs[i]}/${imageSize}`);
      imageURLs.push(result.url);
      imageURLs.push(result.url);
    }
    imageURLs.sort(() => Math.random() - 0.5);
    imageURLs.sort(() => Math.random() - 0.5); // Shuffle list x 3
    imageURLs.sort(() => Math.random() - 0.5);

    console.log("Images URL:", imageURLs);
  } catch (error) {
    console.log(error);
  }
}

// Making div for each card on the game board
function initializeCards() {
  board.innerHTML = "";

  imageURLs.forEach((imgUrl) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImg = document.createElement("img");
    cardImg.classList.add("cardImg");
    cardImg.src = imgUrl;
    cardImg.draggable = false;

    card.addEventListener("click", () => {
      checkClick(cardImg.src, card);
    });

    card.appendChild(cardImg);
    board.appendChild(card);
  });

  cards = Array.from(document.querySelectorAll(".card"));
}

// Handle click on cards
function checkClick(url, card) {
  if (!canClick || card.classList.contains("revealed" || "matched")) return;

  canClick = false;
  card.classList.add("revealed");

  switch (selectedImgUrl) {
    case "":
      selectedImgUrl = url;
      canClick = true;
      break;

    case url:
      handleMatch(url);
      break;

    default:
      handleNotMatch();
      break;
  }
}

// Handle cards when 2 cards match
function handleMatch(url) {
  const matchingCards = cards.filter((card) => card.children[0].src === url);

  setTimeout(() => {
    matchingCards.forEach((card) => {
      card.classList.remove("revealed");
      card.classList.add("matched");
    });

    points++;
    score.innerText = points;

    selectedImgUrl = "";

    checkWin();
    canClick = true;
  }, 1000);
}

// Handle cards when 2 cards don't match
function handleNotMatch() {
  const revealedCards = cards.filter((card) =>
    card.classList.contains("revealed"),
  );

  setTimeout(() => {
    revealedCards.forEach((card) => {
      card.classList.remove("revealed");
    });

    selectedImgUrl = "";
    canClick = true;
  }, 1000);
}

// Check for win with points
function checkWin() {
  if (points >= numberOfPairs) {
    winGame();
  }
}

// Clear board and display win message
function winGame() {
  const winDiv = document.createElement("div");
  const winMessage = document.createElement("span");
  winDiv.classList.add("win");
  winMessage.innerText = "כל הכבוד !";
  winDiv.appendChild(winMessage);
  board.innerHTML = "";
  board.appendChild(winDiv);
}
