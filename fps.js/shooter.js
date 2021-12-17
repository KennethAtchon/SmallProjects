import { getInputDirection } from "./input.js"

export const SHOOTER_SPEED = 10

export const shooterbody = [{x: 1, y: 1}]

export function update()
{
    
    const inputDirection = getInputDirection()

    shooterbody[0].y += inputDirection.y

    inputDirection.y = 0
}

export function draw(gameBoard)
{
    const shooterElement = document.createElement('div')
    shooterElement.style.gridRowStart = shooterbody[0].y
    shooterElement.style.gridColumnStart = shooterbody[0].x
    shooterElement.classList.add('shooter')
    gameBoard.appendChild(shooterElement)
}
