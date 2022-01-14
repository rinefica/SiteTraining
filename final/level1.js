
let answerLevel1;
let tryLevel1 = 0;
let maxNumbersLevel1 = 10;

function changeVariants(selectedVariant) {
    tryLevel1++;
    if (selectedVariant === answerLevel1) {
        scores++;
    }
    updateScores()
    let currentNumberP = document.getElementById("currentNumber");
    currentNumberP.innerHTML = tryLevel1 + "/" + maxNumbersLevel1;

    if (tryLevel1 === maxNumbersLevel1) {
        endLevel1();
    } else {
        prepareRound();
    }
}

function prepareRound() {
    let numberVariants = 3;
    let backColorArray = shuffledColors().slice(0, numberVariants);

    let textColorArray = [];
    backColorArray.forEach((color, index) => {
        let textColor;
        do {
            textColor = randomColor()
        } while (textColor === color);
        textColorArray[index] = textColor;
    });

    answerLevel1 = randomIndex(0, numberVariants);
    let textNameArray = [];

    textColorArray.forEach((color, index) => {
        let textName;
        if (index === answerLevel1) {
            textName = color;
        } else {
            do {
                textName = randomColor();
            } while (textName === color);
        }

        textNameArray[index] = textName;
    })

    for (let i = 0; i < numberVariants; i++) {
        let variant = document.getElementById("var" + i);
        let textVariant = variant.getElementsByTagName("p")[0];

        variant.style.backgroundColor = colors[backColorArray[i]];
        console.log(i, colors[backColorArray[i]], variant);

        textVariant.innerHTML = names[textNameArray[i]];
        textVariant.style.color = colors[textColorArray[i]];
    }
}

function endLevel1() {
    document.getElementById('level1').style.display = 'none';

    currentLevel++;
    document.getElementById('changeLevel').style.display = 'block';
}