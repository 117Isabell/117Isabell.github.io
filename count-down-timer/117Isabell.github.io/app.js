const timeLeftDisplay = document.querySelector("#time-left");
const resultDisaplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");
const logsLeft = document.querySelectorAll(".log-left");
const logsRight = document.querySelectorAll(".log-right");
const carsLeft = document.querySelectorAll(".car-left");
const carsRight = document.querySelectorAll(".car-right");

console.log(squares);

let currentIndex = 76;
const width = 9;
let timerId;

function moveFrog(e) {
  squares[currentIndex].classList.remove("frog");
  switch (e.key) {
    case "ArrowLeft":
      console.log("move left");
      currentIndex -= 1;
      break;
    case "ArrowRight":
      console.log("move right");
      currentIndex += 1;
      break;
    case "ArrowUp":
      console.log("move up");
      currentIndex -= width;
      break;
    case "ArrowDown":
      console.log("move down");
      currentIndex += width;
      break;
  }
  //   console.log("moved");
  squares[currentIndex].classList.add("frog");
}
document.addEventListener("keyup", moveFrog);

function autoMoveElements() {
  logsLeft.forEach((logsLeft) => moveLogLeft(logsLeft));
  logsRight.forEach((logsRight) => moveLogRight(logsRight));
  carsLeft.forEach((carsLeft) => moveCarLeft(carsLeft));
  carsRight.forEach((carsRight) => moveCarRight(carsRight));
  lose();
  win();
}

function moveLogLeft(logsLeft) {
  switch (true) {
    case logsLeft.classList.contains("l1"):
      logsLeft.classList.remove("l1");
      logsLeft.classList.add("l2");
      break;
    case logsLeft.classList.contains("l2"):
      logsLeft.classList.remove("l2");
      logsLeft.classList.add("l3");
      break;

    case logsLeft.classList.contains("l3"):
      logsLeft.classList.remove("l3");
      logsLeft.classList.add("l4");
      break;

    case logsLeft.classList.contains("l4"):
      logsLeft.classList.remove("l4");
      logsLeft.classList.add("l5");
      break;

    case logsLeft.classList.contains("l5"):
      logsLeft.classList.remove("l5");
      logsLeft.classList.add("l1");
      break;
  }
}

function moveLogRight(LogsRight) {
  switch (true) {
    case logsRight.classList.contains("l1"):
      logsRight.classList.remove("l1");
      logsRight.classList.add("l5");
      break;
    case logsRight.classList.contains("l2"):
      logsRight.classList.remove("l2");
      logsRight.classList.add("l1");
      break;

    case logsRight.classList.contains("l3"):
      logsRight.classList.remove("l3");
      logsRight.classList.add("l2");
      break;

    case logsRight.classList.contains("l4"):
      logsRight.classList.remove("l4");
      logsRight.classList.add("l3");

    case logsRight.classList.contains("l5"):
      logsRight.classList.remove("l5");
      logsRight.classList.add("l4");
      break;
  }
}

function moveCarLeft(carsLeft) {
  switch (true) {
    case carsLeft.classList.contains("c1"):
      carsLeft.classList.remove("c1");
      carsLeft.classList.add("c2");
      break;
    case carsLeft.classList.contains("c2"):
      carsLeft.classList.remove("c2");
      carsLeft.classList.add("c3");
      break;

    case carsLeft.classList.contains("c3"):
      carsLeft.classList.remove("c3");
      carsLeft.classList.add("c1");
      break;
  }
}

function moveCarRight(carsRight) {
  switch (true) {
    case carsRight.classList.contains("c1"):
      carsRight.classList.remove("c1");
      carsRight.classList.add("c3");
      break;
    case carsRight.classList.contains("c2"):
      carsRight.classList.remove("c2");
      carsRight.classList.add("c1");
      break;

    case carsRight.classList.contains("c3"):
      carsRight.classList.remove("c3");
      carsRight.classList.add("c2");
      break;
  }
}

function lose() {
  if (
    squares[currentIndex].classList.contains("c1") ||
    squares[currentIndex].classList.contains("l4") ||
    squares[currentIndex].classList.contains("l5")
  ) {
    resultDisaplay.textContent = "You lose!";
    clearInterval(timerId);
    squares[currentIndex].classList.remove("frog");
    document.removeEventListener("keyup", moveFrog);
  }
}

function win() {
  if (squares[currentIndex].classList.contains("ending-block")) {
    resultDisaplay.textContent = "You win!";
    clearInterval(timerId);
    document.removeEventListener("keyup", moveFrog);
  }
}
timerId = setInterval(autoMoveElements, 1000);
