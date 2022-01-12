const latin = [
    "Consuetudo est altera natura",
    "Nota bene",
    "Nulla calamitas sola",
    "Per aspera ad astra",
];

const rus = [
    "Привычка - вторая натура",
    "Заметьте хорошо!",
    "Беда не приходит одна",
    "Через тернии к звёздам",
];

function showSomePhrase() {

    if (latin.length < 1) {
        alert("Фразы закончились");
        return;
    }

    let index = randomIndex(0, latin.length);
    let txtLatin = latin[index];
    let txtRus = rus[index];

    let ol = document.getElementById("4lr");

    let liLatin = document.createElement("li");
    let textLatin = document.createTextNode(txtLatin);

    let olRus = document.createElement("ul");
    let liRus = document.createElement("li");
    let textRus = document.createTextNode(txtRus);

    let countLatinLi = ol.getElementsByTagName("li").length / 2
    if (countLatinLi % 2 == 0) {
        liLatin.classList.add("class1")
    } else {
        liLatin.classList.add("class2")
    }

    ol.appendChild(liLatin);
    liLatin.appendChild(textLatin);

    liLatin.appendChild(olRus);
    olRus.appendChild(liRus);
    liRus.appendChild(textRus);

    latin.splice(index, 1);
    rus.splice(index, 1);
}

function randomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function recolor() {


    let evens = document.querySelector(".class2")
    evens.style.fontWeight = "bold";
}