let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetButton");
let newGame = document.querySelector(".newGame");
let mainCont = document.querySelector(".mainContainer");

resetbtn.addEventListener("click", () => {
  winCont.classList.add("hide");
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerHTML = "";
    turnO = true;
    playerTurn = true;
  });
});
newGame.addEventListener("click", () => {
  winCont.classList.add("hide");
  mainCont.classList.remove("hide");
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerHTML = "";
  });
});

let winCond = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let turnO = true;
let playerTurn = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerTurn == true) {
      console.log("button is clicked");

      if (turnO === true) {
        box.innerHTML = "<span style='color: #7f8c8d'>O</span>";
        turnO = false;
      }
      // else{
      //     box.innerHTML = "<span style='color: #4a3b32'>X</span>";
      //     turnO = true;
      // }

      box.disabled = true;
      playerTurn = false;
    }
    computerFunc(box);
    let winner = winnerAn();
    if (!winner) {
      tieAn();
    }
    //  else{
    // if(turnO === false){

    // }
    // }
  });
});
let computerFunc = function (box) {
  let compChoice = Math.floor(Math.random() * 9);
  for (let box of boxes) {
    if (box.innerText == "") {
      while (boxes[compChoice].innerHTML != "") {
        compChoice = Math.floor(Math.random() * 9);
      }
    }
  }
  boxes[compChoice].innerHTML = "<span style='color: #7f8c8d'>X</span>";
  boxes[compChoice].disabled = true;
  turnO = true;
  playerTurn = true;
};
let winCont = document.querySelector(".winContainer");
let winMsg = document.querySelector(".msg");
let winnerBox = (winner) => {
  winCont.classList.remove("hide");
  winMsg.innerText = `Winner is ${winner}`;
  boxes.forEach((box) => {
    box.disabled = true;
  });
  mainCont.classList.add("hide");
};
let tieBox = () => {
  winCont.classList.remove("hide");
  winMsg.innerText = `Match tied`;
  boxes.forEach((box) => {
    box.disabled = true;
  });
  mainCont.classList.add("hide");
};
let winnerAn = () => {
  for (let pattern of winCond) {
    let slotVal1 = boxes[pattern[0]].innerText;
    let slotVal2 = boxes[pattern[1]].innerText;
    let slotVal3 = boxes[pattern[2]].innerText;

    if (slotVal1 !== "" && slotVal1 == slotVal2 && slotVal2 == slotVal3) {
      winnerBox(slotVal1);
      return true;
    }
  }
  return false;
};
let tieAn = () => {
  let countBox = 0;
  boxes.forEach((box) => {
    if (box.innerText !== "") {
      countBox++;
    }
  });
  if (countBox === 9) {
    tieBox();
  }
};
