import { draw as drawShooter , SHOOTER_SPEED, update as updateShooter} from './shooter.js'

import {draw as drawBullet, update as updateBullet} from './bullet.js'

import {draw as drawEnemy, update as updateEnemy, checkDeath} from './enemy.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')


function main(currentTime)
{
    if(gameOver)
    {
        if(confirm('You lost. Press ok to restart.')){
            window.location = '/fps.js'
        }
        return
    }

    window.requestAnimationFrame(main)

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    if(secondsSinceLastRender < 1 / SHOOTER_SPEED) return

    console.log("Render")
    lastRenderTime = currentTime
    
    update()

    draw()

}

window.requestAnimationFrame(main)


function update()
{
    updateShooter()
    updateBullet()
    updateEnemy()
    gameOver = checkDeath()

}

function draw()
{
    gameBoard.innerHTML = ''
    drawShooter(gameBoard)
    drawBullet(gameBoard)
    drawEnemy(gameBoard)
}