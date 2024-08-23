let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function updateScoreBoard() {
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    
    if (homeScore > guestScore) {
        homeScoreEl.style.color = "green"
        guestScoreEl.style.color = "red"
        // console.log("home")
    } else if (guestScore > homeScore ){
        homeScoreEl.style.color = "red"
        guestScoreEl.style.color = "green"
        // console.log("guest")
    }
    else {
        homeScoreEl.style.color = "red"
        guestScoreEl.style.color = "red"    
    }
}

function resetBtn() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.style.color = "red"
    guestScoreEl.style.color = "red"
    updateScoreBoard()    
}

function addHomeScore(num) {
    homeScore += num
    updateScoreBoard()
}

function addGuestScore(num) {
    guestScore += num
    updateScoreBoard()
}