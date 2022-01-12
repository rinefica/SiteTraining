function textWork() {
    let text = document.getElementById("textInput").value

    if (text.replace(/\s/g,"") === ""){
        return
    }

    let wordsAndNumbers = text.split(" - ")

    let nums = [];
    let words = [];

    wordsAndNumbers.forEach((txt) => {
        if (isNumeric(txt)) {
            nums.push(txt);
        } else {
            words.push(txt);
        }
    });

    let mapWords = new Map();
    let mapNumbers = new Map();

    nums.sort(compareNumbers).forEach((num, index) => {
        mapNumbers.set("n" + (index + 1), num);
    });

    words.sort().forEach((word, index) => {
        mapWords.set("a" + (index + 1), word);
    });

    let buttonsDiv = document.getElementById("buttons");
    buttonsDiv.innerHTML = "";

    mapWords.forEach(createButton);
    mapNumbers.forEach(createButton);

    function createButton(word, key) {
        let button = document.createElement("button");
        button.textContent = key + " " + word;
        button.addEventListener('click', function() {
            showWord(word)
        }, false);
        buttonsDiv.appendChild(button);
    }
}

function compareNumbers(a, b) {
    return a - b;
}

function showWord(word) {
    let text = document.createElement("p");
    text.textContent = word;
    document.getElementById("appearWords").appendChild(text);
}

function isNumeric(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) &&
        !isNaN(parseInt(str, 10));
}