class Tictactoe{
    constructor(ticTacToeButton){
        this.ticTacToeButton = ticTacToeButton
    }

    add(textinbox,decision){
        if(textinbox != '') return textinbox;
        return decision;
    }

    clear(){
        for(let i = 0; i < 9; i++)
        {
            this.ticTacToeButton[i].innerText = ''
        }
        return '';
    }


    random(usermarker){
        let computerMarker;

        if(usermarker == 'X')
        {
            computerMarker = 'O';
        }else
        {
            computerMarker = 'X';
        }

        // incase all spots are full
        let count = 0;
        for(let i = 0; i < 9; i++)
        {
            if(this.ticTacToeButton[i].innerText != '')
            {
                count = count + 1;
            }
        }

        if(count == 9)
        {
            return;
        }

        while(true)
        {
            let x = Math.floor(Math.random() * 9);
            if(this.ticTacToeButton[x].innerText == '')
            {
                this.ticTacToeButton[x].innerText = computerMarker;
                return;
            }
            
        }
    }

    compute(){

        if(this.ticTacToeButton[0].innerText == 'X' && this.ticTacToeButton[1].innerText == 'X' && this.ticTacToeButton[2].innerText == 'X')
        {
            alert("X has won.")
        }else if(this.ticTacToeButton[3].innerText == 'X' && this.ticTacToeButton[4].innerText == 'X' && this.ticTacToeButton[5].innerText == 'X') 
        {
            alert("X has won")
        }else if(this.ticTacToeButton[6].innerText == 'X' && this.ticTacToeButton[7].innerText == 'X' && this.ticTacToeButton[8].innerText == 'X') 
        {
            alert("X has won")
        }else if(this.ticTacToeButton[0].innerText == 'X' && this.ticTacToeButton[3].innerText == 'X' && this.ticTacToeButton[6].innerText == 'X') 
        {
            alert("X has won")
        }else if(this.ticTacToeButton[1].innerText == 'X' && this.ticTacToeButton[4].innerText == 'X' && this.ticTacToeButton[7].innerText == 'X') 
        {
            alert("X has won")
        }else if(this.ticTacToeButton[2].innerText == 'X' && this.ticTacToeButton[5].innerText == 'X' && this.ticTacToeButton[8].innerText == 'X') 
        {
            alert("X has won")
        }else if(this.ticTacToeButton[0].innerText == 'X' && this.ticTacToeButton[4].innerText == 'X' && this.ticTacToeButton[8].innerText == 'X') 
        {
            alert("X has won")
        }else if(this.ticTacToeButton[2].innerText == 'X' && this.ticTacToeButton[4].innerText == 'X' && this.ticTacToeButton[6].innerText == 'X') 
        {
            alert("X has won")
        } // --------
        else if(this.ticTacToeButton[0].innerText == 'O' && this.ticTacToeButton[1].innerText == 'O' && this.ticTacToeButton[2].innerText == 'O')
        {
            alert("O has won.")
        }else if(this.ticTacToeButton[3].innerText == 'O' && this.ticTacToeButton[4].innerText == 'O' && this.ticTacToeButton[5].innerText == 'O') 
        {
            alert("O has won")
        }else if(this.ticTacToeButton[6].innerText == 'O' && this.ticTacToeButton[7].innerText == 'O' && this.ticTacToeButton[8].innerText == 'O') 
        {
            alert("O has won")
        }else if(this.ticTacToeButton[0].innerText == 'O' && this.ticTacToeButton[3].innerText == 'O' && this.ticTacToeButton[6].innerText == 'O') 
        {
            alert("O has won")
        }else if(this.ticTacToeButton[1].innerText == 'O' && this.ticTacToeButton[4].innerText == 'O' && this.ticTacToeButton[7].innerText == 'O') 
        {
            alert("O has won")
        }else if(this.ticTacToeButton[2].innerText == 'O' && this.ticTacToeButton[5].innerText == 'O' && this.ticTacToeButton[8].innerText == 'O') 
        {
            alert("O has won")
        }else if(this.ticTacToeButton[0].innerText == 'O' && this.ticTacToeButton[4].innerText == 'O' && this.ticTacToeButton[8].innerText == 'O') 
        {
            alert("O has won")
        }else if(this.ticTacToeButton[2].innerText == 'O' && this.ticTacToeButton[4].innerText == 'O' && this.ticTacToeButton[6].innerText == 'O') 
        {
            alert("O has won")
        }
    }

}

const ticTacToeButton = document.querySelectorAll('[data-tictactoe]');
const pickXButton = document.querySelector('[data-pick1]');
const pickOButton = document.querySelector('[data-pick2]');
const againButton = document.querySelector('[data-again]');


const tictac = new Tictactoe(ticTacToeButton);
let decision = '';

pickXButton.addEventListener('click', button => {
    if(decision != '')
    {
        return;
    }
    decision = pickXButton.innerText;
})

pickOButton.addEventListener('click', button => {
    if(decision != '')
    {
        return;
    }
    decision = pickOButton.innerText;
})



ticTacToeButton.forEach(button => {
    button.addEventListener('click', async () => {
        if(decision == '')
        {
            alert("Please pick X or O")
        }else
        {
            button.innerText = tictac.add(button.innerText,decision)
            tictac.compute(decision)
            tictac.random(decision)
            tictac.compute(decision)
        }
        
        
    })
})

againButton.addEventListener('click', button => {
    decision = tictac.clear();
})
