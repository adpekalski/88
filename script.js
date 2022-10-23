var answer = document.querySelector(".answer");
var error = document.querySelector(".error");
var ballPhoto = document.querySelector(".ball-img img");
var questionInput = document.querySelector(".question-area input");

error.textContent = localStorage.getItem("errorSaved");

ballPhoto.addEventListener("click", shakeBall);

function shakeBall() {
  ballPhoto.classList.add("shake-animation");
  setTimeout(shakeRemoval, 1100);
  checkInput();
}

function shakeRemoval(){
  ballPhoto.classList.remove("shake-animation");
}

function checkInput() {
  var stringInput = questionInput.value;
  var lastChar = stringInput.charAt(stringInput.length - 1);
  if (stringInput == "") {
    error.textContent = "Musisz zadać jakieś pytanie";
    answer.textContent = "";
  } else if (lastChar !== "?") {
    error.textContent = "Pytanie powinno zawierać znak zapytania";
    answer.textContent = "";
  } else {
    generateAnswer();
  }
}

function generateAnswer() {
  var randomQuestionNumber = Math.floor(Math.random() * 8);
  var questionsTable = ["Are you crazy?", "No one knows...", "Certainly!", "Only God knows.", "Maybe yes, maybe no.", "I can vouch for it.", "Ask a silly question and you get a silly answer.", "LOL, NO!"];
  error.textContent = "";
  answer.textContent = questionsTable[randomQuestionNumber];
}

document.addEventListener("beforeunload", savePreviousState);

function savePreviousState(){
  localStorage.setItem("errorSaved", "lol");
}
