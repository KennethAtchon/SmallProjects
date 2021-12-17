import {shooterbody } from './shooter.js'

let inputDirection = {x: 0, y: 0 }

export const bulletbody = [{x: -1, y: -1 }]

window.addEventListener('keydown', e => {
    switch(e.key) {
        case 'ArrowUp':
            if(shooterbody[0].y === 1) break;
            inputDirection = {x: 0, y: -1}
            break
        case 'ArrowDown':
            if(shooterbody[0].y === 21) break;
            inputDirection = {x: 0, y: 1}
            break
        case ' ':
            bulletbody.push({x: 1, y: shooterbody[0].y})
            //inputDirection = {x: 1, y:0 }
            break
    }
})

export function getInputDirection() {
    
    return inputDirection
}