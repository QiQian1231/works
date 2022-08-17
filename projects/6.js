let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let topScore = document.getElementById("winner");

let homeFinalScore = 0;
let guestFinalScore = 0;


function add1home() {
    homeFinalScore += 1;
    homeScore.innerText = homeFinalScore;
    bigger()
}

function add2home() {
    homeFinalScore += 2;
    homeScore.innerText = homeFinalScore;
    bigger()
}

function add3home() {
    homeFinalScore += 3;
    homeScore.innerText = homeFinalScore;
    bigger()
}

function add1guest() {
    guestFinalScore += 1;
    guestScore.innerText = guestFinalScore;
    bigger()
}

function add2guest() {
    guestFinalScore += 2;
    guestScore.innerText = guestFinalScore;
    bigger()
}

function add3guest() {
    guestFinalScore += 3;
    guestScore.innerText = guestFinalScore;
    bigger()
}

console.log(homeFinalScore)
console.log(guestFinalScore)

function bigger() {
    if (homeFinalScore > guestFinalScore) {
        topScore.innerText = "Home Win"
    } else if (homeFinalScore < guestFinalScore) {
        topScore.innerText = "Guest Win"
    } else {
        topScore.innerText = 'Match Point...'
    }
}