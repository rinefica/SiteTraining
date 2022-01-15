const keysFirst = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
];

const keysSecond = [
    "grey",
    "indigo",
    "pink",
    "black",
    "yellow",
];

let keys = keysFirst;

const colors = {
    green: "#2E8B57FF",
    black: "#000000",
    blue: "#1E90FF",
    yellow: "#d2b700",
    grey: "#6C6A6BFF",
    orange: "#b06902",
    indigo: "#4B0082FF",
    pink: "#832d74",
    red: "#be0c0c",
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
    red: "красный",
};

const namesPlural = {
    green: "зелёные",
    black: "чёрные",
    blue: "синие",
    yellow: "жёлтые",
    grey: "серые",
    orange: "оранжевые",
    indigo: "фиолетовые",
    pink: "розовые",
    red: "красные",
};

const figTypes = [
    "triangle",
    "square",
    "circle",
]

const figNames = {
    triangle: "треугольник",
    square: "квадрат",
    circle: "круг",
}

let currentLevel = 0;
let scores = 0;
let currentUser;

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

    if (currentLevel === 2) {
        document.getElementById('level3').style.display = 'block';
        prepareLevel3();
    }
}

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
    let first = document.getElementById("firstTheme");
    let second = document.getElementById("secondTheme");

    let selected = "1px solid red"
    let unselected = "none"

    if (number === 1) {
        keys = keysFirst;
        first.style.border = selected;
        second.style.border = unselected;
    }

    if (number === 2) {
        keys = keysSecond;
        first.style.border = unselected;
        second.style.border = selected;
    }

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

