const playBoard = document.querySelector(".play-board");

let foodX, foodY;
let snakeX = 5, snakeY = 10;
let velocityX = 0, velocityY = 0;

const changFoodposition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1; 
}

const changeDirection = (e) => {
    // console.log(e);
    if(e.key === "ArrowUp"){
        velocityX = 0;
        velocityY = -1;
    } 
    else if (e.key === "ArrowDown"){
        velocityX = 0;
        velocityY = 1;
}  else if (e.key === "ArrowLeft"){
    velocityX = -1;
    velocityY = 0;
}  else if (e.key === "ArrowRight"){
    velocityX = 1;
    velocityY = 0;
}
}



const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    // fruta
    htmlMarkup += `<div class="head" style="grid-area: ${snakeY} / ${snakeX}"></div>`; 
    // serpiente cabeza
    playBoard.innerHTML = htmlMarkup;
}

changFoodposition();
initGame();
document.addEventListener("keydowm", changeDirection);

// codigo del juego rescatado de https://www.youtube.com/watch?v=QIKOrITyAtU
