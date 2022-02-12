

let grid = document.getElementById("board")


var count = 0;
cardList = []

for(let x = 0; x < 5; x++){
    for(let y = 0; y < 5; y++){
        const card = document.createElement("button")
        card.classList.add("btn")
        card.classList.add("btn-primary")
        card.innerHTML = count
        let cardTemp = "flipCard()"
        card.setAttribute("onclick", cardTemp)

        grid.appendChild(card)
        count++
    }
    grid.appendChild(document.createElement("br"))
}

function flipCard()
{
    console.log("Works")
}


