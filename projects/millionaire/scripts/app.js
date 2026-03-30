// Questions List
import { triviaQuestions } from "./questions.js";

// Getting the html elements of the game board
const startBtn = document.getElementById("startBtn");
const currentQuestionSlot = document.getElementById("question");
const commentSlot = document.getElementById("comment");
const progressFill = document.getElementById("progressFill");
const optionsSlots = Array.from(document.getElementsByClassName("option"));

// Setting global variables
let questions;
let questionNumber;
let currentAnswer;
let canAnswer = false;

// CSS classes for styling
const styleClasses = ["win", "correct", "wrong", ""];

// Add event listener to start button
startBtn.addEventListener("click", () => {
  clearBoard();
  questionNumber = 0;
  progressFill.style.width = 0;
  questions = getRandomQuestions(questionNumber);
  initializeQuestion(questions[questionNumber]);
  startBtn.innerText = "התחל חדש";
});

// Handle answer click
optionsSlots.forEach((slot) => {
  slot.addEventListener("click", () => checkAnswer(slot.innerText));
});

// Putting the next question on the board
function initializeQuestion({ question, options, answer }) {
  currentQuestionSlot.innerText = question;
  for (let i = 0; i < optionsSlots.length; i++) {
    optionsSlots[i].innerText = options[i];
  }
  currentAnswer = answer;
  progressFill.style.width = `${questionNumber * 10}%`;
  canAnswer = true;
}

// Picking 10 random questions
function getRandomQuestions() {
  return [...triviaQuestions].sort(() => Math.random() - 0.5).slice(0, 10);
}

//
function nextQuestion() {
  questionNumber++;

  questionNumber < 10
    ? initializeQuestion(questions[questionNumber])
    : winGameAndFinish();
}

// Checking if the answer is true
function checkAnswer(answer) {
  if (!canAnswer) return;

  canAnswer = false;

  if (answer === currentAnswer) {
    messagePlayer("תשובה נכונה !", 1, 2);
    setTimeout(nextQuestion, 2000);
  } else {
    messagePlayer("אופס, טעית", 2);
    startBtn.innerText = "שחק שוב";
  }
}

// Handle 10 correct answers
function winGameAndFinish() {
  clearBoard();
  progressFill.style.width = "100%";
  messagePlayer("אלוף, זכית בכל המליון !", 0);
}

// Display message on screen
function messagePlayer(message, classIndex, sec) {
  commentSlot.classList.value = styleClasses[classIndex];
  commentSlot.innerText = message;

  if (!sec) return;

  setTimeout(() => {
    commentSlot.innerText = "";
    commentSlot.classList.value = styleClasses[3];
  }, sec * 1000);
}

// Reset the board to startin point
function clearBoard() {
  commentSlot.innerText = "";
  currentQuestionSlot.innerText = "";
  optionsSlots.forEach((slot) => {
    slot.innerText = "";
  });
}
