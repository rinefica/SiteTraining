const keysFirst = [
    "green",
    "black",
    "blue",
    "yellow",
];
const keysSecond = [
    "grey",
    "orange",
    "indigo",
    "pink",
];

let keys = keysSecond;

const colors = {
    green: "#2E8B57FF",
    black: "#000000",
    blue: "#1E90FF",
    yellow: "#F2CD3D",
    grey: "#6C6A6BFF",
    orange: "#DD8513",
    indigo: "#4B0082FF",
    pink: "#FFC0CBFF",
};

const names = {
    green: "зелёный",
    black: "чёрный",
    blue: "синий",
    yellow: "жёлтый",
    grey: "серый",
    orange: "оранжевый",
    indigo: "фиолетовый",
    pink: "розовый",
};

let currentLevel = 0;
let scores = 0;


function changeLevel() {
    updateLevel()
    document.getElementById('changeLevel').style.display = 'none';

    if (currentLevel === 0) {
        document.getElementById('level1').style.display = 'block';
        prepareRound();
    }

    if (currentLevel === 1) {
        document.getElementById('level2').style.display = 'block';
        startLevel2();
    }
}

let currentUser;
function saveUser() {
    currentUser = document.getElementById("auth").value;
    localStorage.setItem(currentUser, scores);
    document.getElementById("game").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}

function showResults() {
    document.getElementById("game").style.display = "none";
    document.getElementById("results").style.display = "block";

    let resultsText = currentUser + ": " + localStorage.getItem(currentUser) + "\n";
    let resultsDiv = document.getElementById("results");
    let resultsValueP = document.createElement("p");
    resultsValueP.innerHTML = resultsText;

    resultsDiv.appendChild(resultsValueP);
}

function changeTheme(number) {
    if (number === 1)
        keys = keysFirst;

    if (number === 2)
        keys = keysSecond;
}

function updateLevel() {
    let scoresP = document.getElementById("level");
    scoresP.innerHTML = "Уровень: " + (currentLevel + 1);
}

function updateScores() {
    let scoresP = document.getElementById("scores");
    scoresP.innerHTML = "Очки: " + scores;
    localStorage.setItem(currentUser, scores);
}

function randomColor() {
    return keys[randomIndex(0, keys.length)];
}

function shuffledColors() {
    return keys.sort(() => 0.5 - Math.random());
}

function randomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

