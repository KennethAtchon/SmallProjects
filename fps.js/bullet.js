import { getInputDirection, bulletbody } from "./input.js"

import { enemybody } from './enemy.js'

//export const bulletbody = [{x: 2, y: 1}]

export function update()
{
    const inputDirection = getInputDirection()

    for(let i = 0; i < bulletbody.length; i++)
    {
        bulletbody[i].x += 1

        if(bulletbody[i].x == 21)
        {
            bulletbody.splice(i,i+1);
        }

        for(let b = 0; b < enemybody.length; b++)
        {
            if(bulletbody[i].x == enemybody[b].x && bulletbody[i].y == enemybody[b].y)
            {
                bulletbody.splice(i,1n);
                enemybody.splice(b,1);
                break;
            }
        }

    }

}



export function draw(gameBoard)
{
    bulletbody.forEach( bullets => {
    const bulletElement = document.createElement('div')
    bulletElement.style.gridRowStart = bullets.y
    bulletElement.style.gridColumnStart = bullets.x
    bulletElement.classList.add('bullet')
    gameBoard.appendChild(bulletElement)
    })

}

