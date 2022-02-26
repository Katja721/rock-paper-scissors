"use strict";
let media = window.matchMedia("(max-width: 399px)"); //phones to 399px
let media2 = window.matchMedia("(min-width:400px)" && "(max-width:699px)"); //phones above 400px
let media3 = window.matchMedia("(min-width:700px)" && "(max-width:1024px)"); //tablets
console.log(media, media2, media3);
//player buttons
const rockBtn = document.querySelector(".btnRock");
const rock = document.querySelector(".rock");
const paperBtn = document.querySelector(".btnPaper");
const paper = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".btnScissors");
const scissors = document.querySelector(".scissors");

//house buttons
const btnRockHouse = document.querySelector(".btnRockHouse");
const btnPaperHouse = document.querySelector(".btnPaperHouse");
const btnScissorsHouse = document.querySelector(".btnScissorsHouse");

//other elements
const close = document.querySelector(".close");
const moduleElement = document.querySelector(".module");
const rules = document.querySelector(".rules");
const overlay = document.querySelector(".overlay");
const triangle = document.querySelector(".triangle");
const scoreElement = document.querySelector(".score");
const again = document.querySelector(".again");
const attribution = document.querySelector(".attribution");
let score = 0;
let resultParagraph = document.querySelector(".resultParagraph");
let computerChoices = ["rock", "paper", "scissors"];
let computerChoose = computerChoices[Math.floor(Math.random() * 3)];
console.log(computerChoose);
let playerChoose;
const win = function (element) {
  element.style.boxShadow =
    "0px 0px 0px 10px hsla(212, 14%, 21%, 0.5),0px 0px 0px 30px hsla(225, 33%, 24%, 0.5), 0px 0px 0px 50px hsla(224, 37%, 24%, 0.5)";
  resultParagraph.textContent = "YOU  WIN";
  score++;
};
const lose = function (element) {
  resultParagraph.textContent = "YOU LOSE";
  score--;
  element.style.boxShadow =
    "0px 0px 0px 10px hsla(212, 14%, 21%, 0.5),0px 0px 0px 30px hsla(225, 33%, 24%, 0.5), 0px 0px 0px 50px hsla(224, 37%, 24%, 0.5)";
};
const draw = function () {
  resultParagraph.textContent = "DRAW";
};
const toggleElements = function () {
  triangle.classList.add("hidden");
  again.classList.remove("hidden");
  if (media.matches) {
    attribution.style.marginTop = "17rem";
  } else {
    attribution.style.marginTop = "11rem";
  }
  resultParagraph.classList.remove("hidden");
};
const newScore = function () {
  scoreElement.textContent = score;
};
const house = function (element) {
  if (media.matches) {
    element.style.left = "14rem";
    element.style.transform = "scale(1)";
  } else if (media2.matches) {
    element.style.transform = "scale(1)";
    element.style.left = "18rem";
  } else if (media3.matches) {
    element.style.transform = "scale(1)";
    element.style.left = "39rem";
  } else {
    element.style.left = "62rem";
    element.style.transform = "scale(2)";
  }
  element.style.top = "-0.5rem";
  element.classList.remove("hidden");
  // if (media.matches) {
  //   element.style.transform = "scale(1)";
  // } else {
  //   element.style.transform = "scale(2)";
  // }
};
const player = function (elem) {
  if (media.matches || media2.matches || media3.matches) {
    elem.style.left = "1rem";
    elem.style.transform = "scale(1)";
    // } else if (media2.matches) {
    //   elem.style.left = "1rem";
    //   elem.style.transform = "scale(1)";
    //
  } else {
    elem.style.left = "10rem";
    elem.style.transform = "scale(2)";
  }
  elem.style.top = "7rem";
  // if (media.matches) {
  //   elem.style.transform = "scale(1)";
  // } else {
  //   elem.style.transform = "scale(2)";
  // }
};
const removeElement = function (element) {
  element.classList.add("hidden");
};

const shadowAgain = function (item) {
  item.style.boxShadow = "initial";
  item.style.transform = "scale(1)";
};
const againMoveElem = function (elem, valueLeft, valueTop) {
  elem.style.left = `${valueLeft}`;
  elem.style.top = `${valueTop}`;
};
rock.addEventListener("click", function () {
  playerChoose = rock.alt;
  removeElement(scissorsBtn);
  removeElement(paperBtn);
  toggleElements();
  player(rockBtn);
  console.log(playerChoose);
  if (computerChoose === "scissors") {
    house(btnScissorsHouse);
    win(rockBtn);
  } else if (computerChoose === "paper") {
    house(btnPaperHouse);
    lose(btnPaperHouse);
  } else {
    draw();
    house(btnRockHouse);
  }
  newScore();
});
paper.addEventListener("click", function () {
  removeElement(rockBtn);
  removeElement(scissorsBtn);

  toggleElements();
  player(paperBtn);
  playerChoose = paper.alt;
  if (computerChoose === "rock") {
    house(btnRockHouse);
    win(paperBtn);
  } else if (computerChoose === "scissors") {
    house(btnScissorsHouse);
    lose(btnScissorsHouse);
  } else {
    house(btnPaperHouse);
    draw();
  }
  newScore();
});
scissors.addEventListener("click", function () {
  playerChoose = scissors.alt;
  removeElement(paperBtn);
  removeElement(rockBtn);
  toggleElements();
  player(scissorsBtn);
  if (computerChoose === "paper") {
    house(btnPaperHouse);
    win(scissorsBtn);
  } else if (computerChoose === "rock") {
    house(btnRockHouse);
    lose(btnRockHouse);
  } else {
    house(btnScissorsHouse);
    draw();
  }
  newScore();
});
close.addEventListener("click", function () {
  overlay.classList.add("hidden");
});
rules.addEventListener("click", function () {
  overlay.classList.remove("hidden");
});

again.addEventListener("click", function () {
  computerChoose = computerChoices[Math.floor(Math.random() * 3)];
  // removeElement(rockBtn);
  // removeElement(paperBtn);
  // removeElement(paperBtn);
  removeElement(again);
  rockBtn.classList.remove("hidden");
  paperBtn.classList.remove("hidden");
  scissorsBtn.classList.remove("hidden");
  triangle.classList.remove("hidden");
  if (media2.matches || media3.matches) {
    attribution.style.marginTop = "9rem";
  } else {
    attribution.style.marginTop = "0rem";
  }
  btnRockHouse.classList.add("hidden");
  btnPaperHouse.classList.add("hidden");
  btnScissorsHouse.classList.add("hidden");
  resultParagraph.classList.add("hidden");
  // removeElement(btnPaperHouse);
  // removeElement(btnRockHouse);
  // removeElement(btnScissorsHouse);
  // removeElement(triangle);
  //first number left, second value top
  if (media.matches) {
    againMoveElem(rockBtn, "8rem", "20rem");
    againMoveElem(paperBtn, "-7rem", "4rem");
    againMoveElem(scissorsBtn, "0.5rem", "4rem");
  } else if (media2.matches) {
    againMoveElem(rockBtn, "10rem", "20rem");
    againMoveElem(paperBtn, "-6rem", "4rem");
    againMoveElem(scissorsBtn, "3.5rem", "4rem");
  } else if (media3.matches) {
    againMoveElem(rockBtn, "20rem", "20rem");
    againMoveElem(paperBtn, "4rem", "3rem");
    againMoveElem(scissorsBtn, "14.5rem", "3rem");
  } else {
    againMoveElem(rockBtn, "38rem", "-8rem");
    againMoveElem(paperBtn, "23rem", "-23rem");
    againMoveElem(scissorsBtn, "32rem", "-23rem");
  }
  shadowAgain(btnScissorsHouse);
  shadowAgain(btnRockHouse);
  shadowAgain(btnPaperHouse);
  shadowAgain(rockBtn);
  shadowAgain(paperBtn);
  shadowAgain(scissorsBtn);
});
