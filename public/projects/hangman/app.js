const hangmanImg = $("#hangman-img");
const wordDiv = $("#word");
const keyboardDiv = $("#keyboard");
const lengthSelect = $("#lengthSelect");
const playButton = $("#playBtn");

const BASE_API_URL = "https://random-word-api.herokuapp.com/word?length=";

//List of backup words in case the API doesn't work
const localWords = ["REACT", "NODEJS", "JQUERY", "DEVELOPER", "GITHUB"];

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let clickedChars = [];

let word = "";
let wordLength = 2;
let gameStarted = false;

let strikes = 0;

createKeyboard();
playButton.click(playGame);

async function playGame() {
  clearWord();
  clearKeyboard();
  if (!checkLength()) return;

  await getRandomWord();
  buildWordElement();
  gameStarted = true;
}

async function getRandomWord() {
  try {
    const response = await fetch(BASE_API_URL + wordLength);
    const result = await response.json();
    word = result[0].toUpperCase();
  } catch (error) {
    console.log("the error is:" + error);
    word = localWords[Math.floor(Math.random() * localWords.length)];
  }
}

function buildWordElement() {
  for (let i = 0; i < word.length; i++) {
    const char = $("<span>", {
      id: `char-${i}`,
      class: "char",
      text: "",
    });
    wordDiv.append(char);
  }
}

function clearWord() {
  hangmanImg.attr("src", "");
  wordDiv.html("");
  strikes = 0;
}

function clearKeyboard() {
  clickedChars = [];
  $(".key").removeClass("pressed");
}

function checkLength() {
  if (lengthSelect.val()) {
    wordLength = lengthSelect.val();
    return true;
  } else {
    alert("Please choose word length");
    return false;
  }
}

function createKeyboard() {
  alphabet.forEach((c) => {
    const charKey = $("<button>", {
      id: `key-${c}`,
      class: "key",
      text: c,
      click: () => checkChar(c),
    });

    keyboardDiv.append(charKey);
  });
}

function checkChar(char) {
  if (!gameStarted || clickedChars.includes(char)) return;

  clickedChars.push(char);
  $(`#key-${char}`).addClass("pressed");

  if (word.includes(char)) {
    for (let i = 0; i < word.length; i++) {
      if (char === word[i]) {
        $(`#char-${i}`).text(word[i]);
      }
    }
    checkWordCompletion();
  } else {
    strikes++;
    checkEndGame();
  }
}

function checkEndGame() {
  if (strikes >= 10) {
    gameStarted = false;
    alert("You Lost !");
  }
  hangmanImg.attr("src", `./images/${strikes}-bg.png`);
}

function checkWordCompletion() {
  for (let i = 0; i < word.length; i++) {
    if (!$(`#char-${i}`).text()) return;
  }

  gameStarted = false;
  alert("You Won !");
}
