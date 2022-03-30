import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')


function main(currentTime) {
    if (gameOver) {
        return alert('Game Over, try again')
    }


    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

    update() // Dette vil oppdatere all logikken i spillet
    draw()  // Dette vil tegne opp spillet
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = '' // Dette hindrer at slangen beholder lengden og ikke tar over hele brettet til slutt
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}