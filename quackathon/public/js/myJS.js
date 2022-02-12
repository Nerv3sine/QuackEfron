
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

/*testing button*/
let testOut = document.getElementById("smolDiv");
let testbtn = document.createElement("button");
testbtn.innerHTML = "BUTTON";
testOut.appendChild(testbtn)
testbtn.addEventListener("click", function(){/*insert functions here*/}, false);
/*END */

let grid = document.getElementById("board")

var ROW = 5;
var COLUMN = 5;
var POINTS = 100;
var MAX_GUESS = 9;
var randLimit = 10;

var count = 0;
var score = 0;
var guess = 0;
cardList = []
cardObjList = []
isGameOn = true;

for(let x = 0; x < ROW; x++){
    for(let y = 0; y < COLUMN; y++){

        const card = document.createElement("button")
        card.classList.add("btn")
        card.classList.add("btn-primary")

        card.innerHTML = count

        
        // saves HTML elment for tracking
        cardList.push(card);

        let func = "flipCard(" + count + ")"
        card.setAttribute("onclick", func)

        cardObj = new Card(false, false)

        cardObjList.push(cardObj)

        grid.appendChild(card)
        count++
    }
    grid.appendChild(document.createElement("br"))

    startGame();
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
    for(let i = 0; i < cardObjList.length; i++)
    {
        cardObjList[i].duckify(false)
        cardObjList[i].flip()
    }
    
    startGame()

}

function flipCard(e)
{
    if(isGameOn)
    {
        cardObj = cardObjList[e]

        if(cardObj.isFlipped)
        {
            console.log("Flipped")
            return
        }

        // if the card has a duck
        if(cardObj.hasDuck)
        {
            score+= POINTS;
        }
        else
        {
            console.log("No duck")
        }

        guess++;
        if(guess > MAX_GUESS)
        {
            endGame()
        }

        cardObj.flip()

    }
    console.log("Score:"+score)
    console.log("Guess:"+guess)
}

function endGame()
{
    isGameOn = false;
}


