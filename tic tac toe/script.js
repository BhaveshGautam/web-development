const boxes = document.querySelectorAll(".box");

const winner = document.querySelector(".winnerPlayer");

let currentPlayer;

let gameInfo;

let winPosition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function initGame() {
  currentPlayer = "X";
  // initially it must be empty then only current player can play his move with X/O
  gameInfo = ["", "", "", "", "", "", "", "", ""];

  
  boxes.forEach((box, index) => {
    //index is the position of the box that was clicked
    console.log(gameInfo[index]);
     // this adds event listener to 9boxes so that it can update the state of every box after click
     // otherwise without event listener it will not respond to the click done by user 
    box.addEventListener("click", () => {
      if (gameInfo[index] == "") {
        box.textContent = currentPlayer;
        // this will st0re the current player value in internal aaray after it is clicked on the box
        gameInfo[index] = currentPlayer;
        console.log("game info array", gameInfo);
        // this wincheck function is called after every  input of current player with X/O
        winCheck(index);

        if (currentPlayer === "X") {
          currentPlayer = "O";
        } else {
          currentPlayer = "X";
        }
        // console.log(gameInfo)
      }
    });
  });
}

initGame(); // this function is only called once when game starts

//While the index is not directly used in the winning condition checks,
//  it tells the function which box was just clicked.
//  This is important because we only need to check for 
// winning combinations starting from the box that was just clicked.
function winCheck(index) {
    // this loop iterate and provides  each subaray of winposition arrray
  winPosition.forEach((position, index) => {
    if (
        // this compares the internal array with the win position array to confirm winner
      (gameInfo[position[0]] != "" ||
        gameInfo[position[1]] != "" ||
        gameInfo[position[2]] != "") &&
      gameInfo[position[0]] === gameInfo[position[1]] &&
      gameInfo[position[1]] === gameInfo[position[2]]
    ) {
    //    this adds the winner class to the winning positions of winposition array to highlight winner with green colour 
      boxes[position[0]].classList.add("winner");
      boxes[position[1]].classList.add("winner");
      boxes[position[2]].classList.add("winner");
    //  this for each loop will not allow the user to write more once the winner is found   
      boxes.forEach((box) => {
        box.style.pointerEvents = "none";
      });
      // this shows the winner on the screen
      winner.textContent = `Winner is : ${gameInfo[position[0]]}`;
    }
  });
}