
import { update as updateSnake, draw as drawSnake,
    SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'

import { update as updateFood, draw as drawFood} from './food.js'

import { outsideGrid } from './grid.js'


let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

let gameOverSong = new Audio('gameOverSong.mp3');

let gameSong = new Audio('gameSong.mp3');

function main(currentTime){
    gameSong.play();
    if(gameOver){
        gameSong.pause();
        gameOverSong.play();
        if(confirm('You lost, press ok to restart.')){
            window.location = '/'
        }
        return
        
    }


    window.requestAnimationFrame(main)
    const secondsSinceLastRenderTime = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRenderTime < 1 / SNAKE_SPEED) return

    
    lastRenderTime = currentTime;


    update()
    draw()
}


window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}


function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}