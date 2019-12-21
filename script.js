const pOneButton = document.querySelector("#pOne");
const pTwoButton = document.querySelector("#pTwo");
const resetButton = document.querySelector("#reset");
let playerOneScore = document.querySelector("#playerOne");
let playerTwoScore = document.querySelector("#playerTwo");
let pOneScore = 0;
let pTwoScore = 0;
let gameOver = false;
const winningScore = 5

pOneButton.addEventListener("click", function(){
    if(!gameOver){
        pOneScore++;
        if(pOneScore === winningScore){
            gameOver = true;
        };
        playerOneScore.textContent = pOneScore;
    }
});
pTwoButton.addEventListener("click", function(){
    if(!gameOver){
        pTwoScore++;
        if(pTwoScore === winningScore) {
            gameOver = true;
        };
        playerTwoScore.textContent = pTwoScore;
    }
});
resetButton.addEventListener("click", function(){
    pOneScore.textContent = 0;
    pTwoScore.textContent = 0
});