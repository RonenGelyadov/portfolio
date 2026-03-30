const buttons = Array.from(document.getElementsByClassName("cell"));
const currentTurnDiv = document.getElementById("currentTurn");
let turn = "X";
let board = ["", "", "", "", "", "", "", "", ""];

updateCurrentTurnDisplay();

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    makeMove(btn, index);
  });
});

const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", clearBoard);

function makeMove(button, index) {
  if (button.innerText) return;
  board[index] = turn;
  button.innerText = turn;
  turn = turn === "X" ? "O" : "X";
  updateCurrentTurnDisplay();
  setTimeout(checkWinner, 500);
}

function checkWinner() {
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      alert(`The Winner Is: ${board[a]}`);
      clearBoard();
    }
  }
  checkDraw();
}

function checkDraw() {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") return;
  }
  alert("It Is a Draw !");
  clearBoard();
}

function clearBoard() {
  buttons.forEach((b) => {
    b.innerText = "";
    turn = "X";
    updateCurrentTurnDisplay();
    board = ["", "", "", "", "", "", "", "", ""];
  });
}

function updateCurrentTurnDisplay() {
  currentTurnDiv.innerText = turn;
}
