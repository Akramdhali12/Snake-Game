//Game Constants & Variables
let direction = {x:0,y:0};
const foodSound = new Audio('audio file name');
const gameOverSound = new Audio('audio file name');
const moveSound = new Audio('audio file name');
const musicSound = new Audio('audio file name');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {x:13,y:15}
]
food = {x:13,y:15};


// Game Function
function main(ctime){
    window.requestAnimationFrame(main);
    console.log(ctime);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}
function gameEngine(){
    //part 1: Updating the snake array & Food

    //part 2: Render the snake and Food
    //display the snake
    board.innerHTML = "";
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('snake');
        if(index === 0){
            snakeElement.classList.add('head');
        }
        board.appendChild(snakeElement);
    })
    //display the food
        foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);
}







//main logic starts here
window.requestAnimationFrame(main);