
class Card
{
    constructor(isFlipped, hasDuck)
    {
        this.isFlipped = isFlipped;
        this.hasDuck = hasDuck;
    }

    flip()
    {
        this.isFlipped = !this.isFlipped;
    }

    duckify(aflag)
    {
       this.hasDuck = aflag;
    }



}


let grid = document.getElementById("board")

var ROW = 5;
var COLUMN = 5;
var POINTS = 100;
var MAX_GUESS = 9;
var randLimit = 5;

var count = 0;
var score = 0;
var guess = 0;
cardList = []
cardObjList = []
isGameOn = true;

function createCards()
{
    for(let x = 0; x < ROW; x++){
        for(let y = 0; y < COLUMN; y++){

            // Creates card
            const card = document.createElement("button")
            card.classList.add("btn")
            card.classList.add("btn-primary")
            card.innerHTML = count
    
            
            // saves HTML elment for tracking
            cardList.push(card);
            
            //Add click listener
            let func = "flipCard(" + count + ")"
            card.setAttribute("onclick", func)
    
            cardObj = new Card(false, false)
            
            //cardObj is in sync with Card element
            cardObjList.push(cardObj)
    
            grid.appendChild(card)
            count++
        }

        grid.appendChild(document.createElement("br"))
        
        // game starts
        startGame();
    }
}



function startGame()
{
    for(let i  = 0; i < cardList.length; i++)
    {
        // generates random duck cards
        random = Math.floor(Math.random() * ROW * COLUMN)

        // randomly assigns ducks
        if(random % randLimit == 0)
        {
            cardObjList[i].duckify(true);
            cardList[i].innerHTML = "d"
        }
    }
    
}

function resetGame()
{
    // removes ducks and flips back all cards then starts the game
    for(let i = 0; i < cardObjList.length; i++)
    {
        cardObjList[i].duckify(false)
        cardObjList[i].flip()
    }
    
    startGame()

}

function flipCard(e)
{
    // will only flip card if game is active

    if(isGameOn)
    {
        cardObj = cardObjList[e]

        if(cardObj.isFlipped)
        {
            return
        }

        // if the card has a duck give it points
        if(cardObj.hasDuck)
        {
            score+= POINTS;
        }

        // endgame if guess has passed its limit
        guess++;
        if(guess > MAX_GUESS)
        {
            endGame()
        }

        //flip card
        cardObj.flip()

    }

    console.log("Score:"+score)
    console.log("Guess:"+guess)
}

function endGame()
{
    isGameOn = false;
}

// init UI
createCards()
