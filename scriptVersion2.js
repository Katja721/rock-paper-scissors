'use strict';

//media queries
let media = window.matchMedia('(max-width: 399px)'); //phones to 399px
let media2 =
  window.matchMedia('(min-width:400px)') &&
  window.matchMedia('(max-width: 699px)'); //phones above 400px
let media3 =
  window.matchMedia('(min-width:700px)') &&
  window.matchMedia('(max-width:1000px)'); //tablets
console.log(media);
console.log(media2);
console.log(media3);
//player buttons
const paperBtn2 = document.querySelector('.paperBtn2');
const scissorsBtn2 = document.querySelector('.scissorsBtn2');
const rockBtn2 = document.querySelector('.rockBtn2');
const lizardBtn2 = document.querySelector('.lizardBtn2');
const spockBtn2 = document.querySelector('.spockBtn2');

//house buttons
const paperBtnHouse2 = document.querySelector('.paperBtnHouse2');
const scissorsBtnHouse2 = document.querySelector('.scissorsBtnHouse2');
const rockBtnHouse2 = document.querySelector('.rockBtnHouse2');
const lizardBtnHouse2 = document.querySelector('.lizardBtnHouse2');
const spockBtnHouse2 = document.querySelector('.spockBtnHouse2');

//other buttons
const again = document.querySelector('.again2');
const rules = document.querySelector('.rules2');
const close = document.querySelector('.close2');

//other elements
const resultParagraph = document.querySelector('.resultParagraph2');
let scoreElement = document.querySelector('.score');
const overlay = document.querySelector('.overlay2');
const pentagon = document.querySelector('.pentagon');
//choices
const computerChoices = ['paper', 'scissors', 'rock', 'lizard', 'spock'];
let computerChoose = computerChoices[Math.floor(Math.random() * 5)];
let playerChoose;

console.log(computerChoose);
let score = 0;

//functions
console.log(media.matches);
let displayHouseBtn = document.querySelector(`.${computerChoose}BtnHouse2`);
const removeUnselected = function (selected, ...others) {
  selected.classList.remove('hidden');
  if (media.matches || media2.matches) {
    selected.style.transform = 'scale(1)';
  } else if (media3.matches) {
    selected.style.transform = 'scale(1.5)';
  } else {
    selected.style.transform = 'scale(2)';
  }
  for (let items of others) {
    items.classList.add('hidden');
  }
};
const showPlayerChoices = function () {
  for (let options = 0; options < computerChoices.length; options++) {
    //show all player options
    document
      .querySelector(`.${computerChoices[options]}Btn2`)
      .classList.remove('hidden');
    //remove house choose
    document
      .querySelector(`.${computerChoices[options]}BtnHouse2`)
      .classList.add('hidden');

    document.querySelector(`.${computerChoices[options]}Btn2`).style.transform =
      'scale(1)';
    document.querySelector(`.${computerChoices[options]}Btn2`).style.boxShadow =
      'initial';
  }
};
const moveElement = function (element, leftValue, topValue) {
  element.style.left = `${leftValue}`;
  element.style.top = `${topValue}`;
};
//click on buttons
//rock against paper||lizard win  rock draw else lose
rockBtn2.addEventListener('click', function () {
  displayHouseBtn.classList.remove('hidden');
  again.classList.remove('hidden');
  resultParagraph.classList.remove('hidden');

  removeUnselected(
    rockBtn2,
    scissorsBtn2,
    paperBtn2,
    lizardBtn2,
    spockBtn2,
    pentagon
  );
  moveElement(rockBtn2, '15rem', '8rem');

  if (computerChoose === 'paper' || computerChoose === 'lizard') {
    resultParagraph.textContent = 'YOU WIN';
    score++;
    rockBtn2.style.boxShadow =
      '0px 0px 0px 10px hsla(212, 14%, 21%, 0.5),0px 0px 0px 30px hsla(225, 33%, 24%, 0.5), 0px 0px 0px 50px hsla(224, 37%, 24%, 0.5)';
  } else if (computerChoose === 'rock') {
    resultParagraph.textContent = 'DRAW';
  } else {
    resultParagraph.textContent = 'YOU LOSE';
    document.querySelector(`.${computerChoose}BtnHouse2`).style.boxShadow =
      '0px 0px 0px 10px hsla(212, 14%, 21%, 0.5),0px 0px 0px 30px hsla(225, 33%, 24%, 0.5), 0px 0px 0px 50px hsla(224, 37%, 24%, 0.5)';
    score--;
  }
  scoreElement.textContent = score;
});
//paper against scissors || spock win paper draw else lose
paperBtn2.addEventListener('click', function () {
  displayHouseBtn.classList.remove('hidden');
  again.classList.remove('hidden');
  resultParagraph.classList.remove('hidden');

  removeUnselected(
    paperBtn2,
    scissorsBtn2,
    rockBtn2,
    lizardBtn2,
    spockBtn2,
    pentagon
  );
  moveElement(paperBtn2, '15rem', '8rem');

  if (computerChoose === 'scissors' || computerChoose === 'spock') {
    resultParagraph.textContent = 'YOU WIN';
    paperBtn2.style.boxShadow =
      '0px 0px 0px 10px hsla(212, 14%, 21%, 0.5),0px 0px 0px 30px hsla(225, 33%, 24%, 0.5), 0px 0px 0px 50px hsla(224, 37%, 24%, 0.5)';
    score++;
  } else if (computerChoose === 'paper') {
    resultParagraph.textContent = 'DRAW';
  } else {
    console.log('you lose');
    resultParagraph.textContent = 'YOU LOSE';
    document.querySelector(`.${computerChoose}BtnHouse2`).style.boxShadow =
      '0px 0px 0px 10px hsla(212, 14%, 21%, 0.5),0px 0px 0px 30px hsla(225, 33%, 24%, 0.5), 0px 0px 0px 50px hsla(224, 37%, 24%, 0.5)';
    score--;
  }
  scoreElement.textContent = score;
});
//scissors against paper || lizard win scissors draw else lose
scissorsBtn2.addEventListener('click', function () {
  displayHouseBtn.classList.remove('hidden');
  again.classList.remove('hidden');
  resultParagraph.classList.remove('hidden');

  removeUnselected(
    scissorsBtn2,
    paperBtn2,
    rockBtn2,
    lizardBtn2,
    spockBtn2,
    pentagon
  );
  moveElement(scissorsBtn2, '15rem', '8rem');
  if (computerChoose === 'paper' || computerChoose === 'lizard') {
    resultParagraph.textContent = 'YOU WIN';
    scissorsBtn2.style.boxShadow =
      '0px 0px 0px 10px hsla(212, 14%, 21%, 0.5),0px 0px 0px 30px hsla(225, 33%, 24%, 0.5), 0px 0px 0px 50px hsla(224, 37%, 24%, 0.5)';
    score++;
  } else if (computerChoose === 'scissors') {
    resultParagraph.textContent = 'DRAW';
  } else {
    resultParagraph.textContent = 'YOU LOSE';
    document.querySelector(`.${computerChoose}BtnHouse2`).style.boxShadow =
      '0px 0px 0px 10px hsla(212, 14%, 21%, 0.5),0px 0px 0px 30px hsla(225, 33%, 24%, 0.5), 0px 0px 0px 50px hsla(224, 37%, 24%, 0.5)';
    score--;
  }
  scoreElement.textContent = score;
});
//lizard against paper|| spock win lizard draw else lose
lizardBtn2.addEventListener('click', function () {
  displayHouseBtn.classList.remove('hidden');
  again.classList.remove('hidden');
  resultParagraph.classList.remove('hidden');

  removeUnselected(
    lizardBtn2,
    scissorsBtn2,
    rockBtn2,
    paperBtn2,
    spockBtn2,
    pentagon
  );
  moveElement(lizardBtn2, '15rem', '8rem');
  if (computerChoose === 'paper' || computerChoose === 'spock') {
    resultParagraph.textContent = 'YOU WIN';
    lizardBtn2.style.boxShadow =
      '0px 0px 0px 10px hsla(212, 14%, 21%, 0.5),0px 0px 0px 30px hsla(225, 33%, 24%, 0.5), 0px 0px 0px 50px hsla(224, 37%, 24%, 0.5)';
    score++;
  } else if (computerChoose === 'lizard') {
    resultParagraph.textContent = 'DRAW';
  } else {
    resultParagraph.textContent = 'YOU LOSE';
    document.querySelector(`.${computerChoose}BtnHouse2`).style.boxShadow =
      '0px 0px 0px 10px hsla(212, 14%, 21%, 0.5),0px 0px 0px 30px hsla(225, 33%, 24%, 0.5), 0px 0px 0px 50px hsla(224, 37%, 24%, 0.5)';

    score--;
  }
  scoreElement.textContent = score;
});
//spock against rock || scissors win lizard draw else lose
spockBtn2.addEventListener('click', function () {
  displayHouseBtn.classList.remove('hidden');
  again.classList.remove('hidden');
  resultParagraph.classList.remove('hidden');
  removeUnselected(
    spockBtn2,
    scissorsBtn2,
    rockBtn2,
    lizardBtn2,
    paperBtn2,
    pentagon
  );
  moveElement(spockBtn2, '15rem', '8rem');
  if (computerChoose === 'rock' || computerChoose === 'scissors') {
    resultParagraph.textContent = 'YOU WIN';
    spockBtn2.style.boxShadow =
      '0px 0px 0px 10px hsla(212, 14%, 21%, 0.5),0px 0px 0px 30px hsla(225, 33%, 24%, 0.5), 0px 0px 0px 50px hsla(224, 37%, 24%, 0.5)';
    score++;
  } else if (computerChoose === 'spock') {
    resultParagraph.textContent = 'DRAW';
  } else {
    resultParagraph.textContent = 'YOU LOSE';
    document.querySelector(`.${computerChoose}BtnHouse2`).style.boxShadow =
      '0px 0px 0px 10px hsla(212, 14%, 21%, 0.5),0px 0px 0px 30px hsla(225, 33%, 24%, 0.5), 0px 0px 0px 50px hsla(224, 37%, 24%, 0.5)';
    score--;
  }
  scoreElement.textContent = score;
});
//show rules
rules.addEventListener('click', function () {
  overlay.classList.remove('hidden');
});
//hide rules
close.addEventListener('click', function () {
  overlay.classList.add('hidden');
});
overlay.addEventListener('click', function () {
  overlay.classList.add('hidden');
});
//paly again
again.addEventListener('click', function () {
  computerChoose = computerChoices[Math.floor(Math.random() * 5)];
  displayHouseBtn = document.querySelector(`.${computerChoose}BtnHouse2`);

  console.log(computerChoose);

  resultParagraph.classList.add('hidden');
  again.classList.add('hidden');
  pentagon.classList.remove('hidden');

  //first number left second number top
  if (media.matches) {
    moveElement(rockBtn2, '13rem', '20rem');
  } else if (media2.matches) {
    moveElement(rockBtn2, '16rem', '20rem');
  } else if (media3.matches) {
    moveElement(rockBtn2, '26rem', '14rem');
  } else {
    moveElement(rockBtn2, '51rem', '22rem');
  }
  if (media.matches) {
    moveElement(paperBtn2, '9rem', '9rem');
  } else if (media2.matches) {
    moveElement(paperBtn2, '12rem', '10rem');
  } else if (media3.matches) {
    moveElement(paperBtn2, '23rem', '3rem');
  } else {
    moveElement(paperBtn2, '48rem', '11rem');
  }

  if (media.matches) {
    moveElement(scissorsBtn2, '-6rem', '3rem');
  } else if (media2.matches) {
    moveElement(scissorsBtn2, '-3rem', '3rem');
  } else if (media3.matches) {
    moveElement(scissorsBtn2, '6rem', '-3rem');
  } else {
    moveElement(scissorsBtn2, '31rem', '4rem');
  }
  if (media.matches) {
    moveElement(lizardBtn2, '0rem', '13.5rem');
  } else if (media2.matches) {
    moveElement(lizardBtn2, '4rem', '14rem');
  } else if (media3.matches) {
    moveElement(lizardBtn2, '-8rem', '13.5rem');
  } else {
    moveElement(lizardBtn2, '17rem', '22.5rem');
  }

  if (media.matches) {
    moveElement(spockBtn2, '-9rem', '2rem');
  } else if (media2.matches) {
    moveElement(spockBtn2, '-7rem', '2rem');
  } else if (media3.matches) {
    moveElement(spockBtn2, '-18rem', '2rem');
  } else {
    moveElement(spockBtn2, '6rem', '11rem');
  }
  console.log(`.${computerChoose}BtnHouse2`);
  spockBtn2.style.boxShadow = 'initial';
  rockBtn2.style.boxShadow = 'initial';
  scissorsBtn2.style.boxShadow = 'initial';
  paperBtn2.style.boxShadow = 'initial';
  lizardBtn2.style.boxShadow = 'initial';
  //////
  spockBtnHouse2.style.boxShadow = 'initial';
  rockBtnHouse2.style.boxShadow = 'initial';
  scissorsBtnHouse2.style.boxShadow = 'initial';
  paperBtnHouse2.style.boxShadow = 'initial';
  lizardBtnHouse2.style.boxShadow = 'initial';

  document.querySelector(`.${computerChoose}BtnHouse2`).style.boxShadow =
    'initial';
  showPlayerChoices();
});
