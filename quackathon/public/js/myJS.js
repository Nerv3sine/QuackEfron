
class Card
{
    constructor(isFlipped, hasDuck)
    {
        this.isFlipped = isFlipped;
        this.hasDuck = hasDuck;
    }

    flip()
    {
        this.isFlipped = true;
    }

    duckify()
    {
       this.hasDuck = true;
    }



}

let grid = document.getElementById("board")

var ROW = 5;
var COLUMN = 5;
var POINTS = 100;
var MAX_GUESS = 9;

var count = 0;
var score = 0;
var guess = 0;
cardList = []
cardObjList = []

for(let x = 0; x < ROW; x++){
    for(let y = 0; y < COLUMN; y++){

        // generates random duck cards
        random = Math.floor(Math.random() * ROW * COLUMN)

        const card = document.createElement("button")
        card.classList.add("btn")
        card.classList.add("btn-primary")

        card.innerHTML = count

        

        // saves HTML elment for tracking
        cardList.push(card);

        //creates Card object
        cardObj = new Card(false, false)

        // randomly assigns ducks
        if(random == 0)
        {
            cardObj.duckify();
        }

        card.addEventListener("click", function(e) {flipCard(e)})

        att = card.setAttribute("index")
        att.value = ""+count

        cardObjList.push(cardObj)

        grid.appendChild(card)
        count++
    }
    grid.appendChild(document.createElement("br"))
}



function flipCard(e)
{
    cardObj = cardObjList[parseInt(e.target.getAttribute("index"))]

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

    //test
    console.log("Score: "+score);
    console.log("Guess:"+guess);

}

function endGame()
{
    console.log("Gamed ended")
}


