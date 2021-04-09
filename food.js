import { onSnake, expandSnake} from './snake.js'
import {randomGridPostion } from './grid.js'


let foodSound = new Audio('snare.mp3');

let food = {x: 10, y:1}
const EXPANSION_RATE = 1;
export function update() {
   if(onSnake(food)) {
       expandSnake(EXPANSION_RATE);
       food = getRandomFoodPostion();
       foodSound.play();
   }
}

export function draw(gameBoard) {
        const foodElemt = document.createElement('div');
        foodElemt.style.gridRowStart = food.y;
        foodElemt.style.gridColumnStart = food.x;
        foodElemt.classList.add('food');
        gameBoard.appendChild(foodElemt);
}


function getRandomFoodPostion(){
    let newFoodPosition;

    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPostion();
    }

    return newFoodPosition;
}


