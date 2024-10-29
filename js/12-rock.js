const score = JSON.parse(localStorage.getItem('score')) || {wins: 0, losses: 0, draws: 0};
    
    updateScoreElement();

    let isAutoPlaying = false;
    let intervalID;

    document.querySelector('.js-autoplay-button')
        .addEventListener('click', () => {
            autoPlay();
        });

    function autoPlay()
    {
        if(!isAutoPlaying)
        {
            intervalID = setInterval(() => { // using arrow function
                const playerMove = pickComputerMove();
                playGame(playerMove);
            }, 700)
            isAutoPlaying = true;
        }
        else {
            clearInterval(intervalID);
            isAutoPlaying = false;
        }
        
    }


    document.querySelector('.js-rock-button')
        .addEventListener('click', () => {
            playGame('rock');
        });

    document.querySelector('.js-paper-button')
        .addEventListener('click', () => {
            playGame('paper');
        });

    document.querySelector('.js-scissors-button')
        .addEventListener('click', () => {
            playGame('scissors');
        });


    document.body.addEventListener('keydown', (event) => {
        if(event.key === 'r') {
            playGame('rock');
        } else if(event.key === 'p') {
            playGame('paper');
        } else if(event.key === 's') {
            playGame('scissors');
        }
    });

    function playGame(playerMove)
    {
        const computerMove = pickComputerMove();
    
        let result = '';
        
        if(playerMove === 'rock')
        {
            if(computerMove === 'rock'){
                result = 'Draw.';
            }
            else if(computerMove === 'paper')
            {
                result = 'You lose.';
            }
            else
            {
                result = 'You win.';
            }
        } 
        else if(playerMove === 'paper')
        {
            if(computerMove === 'rock'){
                result = 'You win.';
            }
            else if(computerMove === 'paper')
            {
                result = 'Draw.';
            }
            else
            {
                result = 'You lose.';
            }
        }      
        else if(playerMove === 'scissors')
        {
            if(computerMove === 'rock'){
                result = 'You lose.';
            }
            else if(computerMove === 'paper')
            {
                result = 'You win.';
            }
            else
            {
                result = 'Draw.';
            }  
        }

        if(result === 'You win.')
        {
            score.wins++;
        }
        else if(result === 'You lose.')
        {
            score.losses++;
        }
        else if(result === 'Draw.')
        {
            score.draws++;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-moves').innerHTML = 
            `You <img src="pictures/${playerMove}-emoji.png" class="move-img">
        <img src="pictures/${computerMove}-emoji.png" class="move-img"> Computer`;
         
    }

    function updateScoreElement()
    {
        document.querySelector('.js-score').innerHTML= `Wins: ${score.wins}. Losses: ${score.losses}. Draws: ${score.draws}`;
    }

    function pickComputerMove()
    {
        const randomNumber = Math.random();
        let computerMove = '';
        
        if(randomNumber >= 0 && randomNumber < 1/3)
        {
            computerMove = 'rock';
        } else if(randomNumber >= 1/3 && randomNumber < 2/3)
        {
            computerMove = 'paper';
        }
        else
        {
            computerMove = 'scissors';
        }

        return computerMove;
    }

    document.querySelector('.js-reset-button')
        .addEventListener('click', () => {
            resetScore();
        });

    function resetScore()
    {
        score.wins = 0;
        score.losses = 0
        score.draws = 0;
        localStorage.removeItem('score');
        updateScoreElement();
    }
