let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let gameEl = document.getElementById("new-game-btn")
let count = 0
let count1 = 0
let count2 = 0


function increaseHomeScoreOne(){
    console.log("button clicked")
    count1 += 1
    homeScore.textContent = count1
}

function increaseHomeScoreTwo(){
    console.log("button clicked")
    count1 += 2
    homeScore.textContent = count1
}

function increaseHomeScoreThree(){
    console.log("button clicked")
    count1 += 3
    homeScore.textContent = count1
}

function increaseGuestScoreOne(){
    console.log("button clicked")
    count2 += 1
    guestScore.textContent = count2
}

function increaseGuestScoreTwo(){
    console.log("button clicked")
    count2 += 2
    guestScore.textContent = count2
}

function increaseGuestScoreThree(){
    console.log("button clicked")
    count2 += 3
    guestScore.textContent = count2
}

function newGame() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    count = 0
}

