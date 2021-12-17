export const enemybody = [{x: 21, y: 1}]

let d = 1
export async function update()
{
    if(d % 10 != 0)
    {
        d++;
        return
    }


    enemybody.push({x: 21, y: getRandomY()})
    
    
    for(let i = 0; i < enemybody.length; i++)
    {
        enemybody[i].x -= 1
    }

    d++;


}

function getRandomY()
{
    for(let i = 0; i < enemybody.length; i++)
    {
        let rand = Math.floor(Math.random() * 21)+1
        if(enemybody[i].y != rand) 
        {
            return rand;
        }
    }
}

export function draw(gameBoard)
{
    enemybody.forEach( enemies => {
    const enemyElement = document.createElement('div')
    enemyElement.style.gridRowStart = enemies.y
    enemyElement.style.gridColumnStart = enemies.x
    enemyElement.classList.add('enemy')
    gameBoard.appendChild(enemyElement)
    })

}

export function checkDeath()
{
    for(let i = 0; i < enemybody.length; i++ )
    {
        if(enemybody[i].x == 0)
        {
            return true;
        }

    }
    return false;
}
