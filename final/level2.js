

let countLevel2 = 5;
let answerLevel2;

function startLevel2(selectedVariant) {
    if (myTimer !== undefined) {
        clearInterval(myTimer);
        setTimerStartUI();
    }

    if (answerLevel2 !== undefined
        && selectedVariant === answerLevel2) {
        scores++;
        updateScores()
    }

    countLevel2--;
    document.getElementById("tryLevel2").innerHTML = "Вопросов осталось: " + countLevel2;

    if (countLevel2 > 0) {
        setTimer();
        prepareLevel2();
    } else {
        endLevel2();
    }
}

function prepareLevel2() {
    let numberVariants = 3;
    let figs = shuffledFigs().slice(0, numberVariants);
    let backColorArray = shuffledColors().slice(0, numberVariants);

    let variants = document.getElementById("variants2");
    variants.innerHTML = '';
    for (let i = 0; i < numberVariants; i++) {
        let variant = document.createElement("div");
        variant.classList.add("variant");
        variant.addEventListener('click',  () => {
            startLevel2(i);
        });

        variant.classList.add(figs[i]);

        variant.style.backgroundColor = colors[backColorArray[i]];
        variant.style.transform = 'rotate(' + randomIndex(-180, 180) + 'deg)';

        variants.appendChild(variant);
    }

    answerLevel2 = randomIndex(0, numberVariants);
    let txt = names[backColorArray[answerLevel2]] + " " + figNames[figs[answerLevel2]];

    document.getElementById("task").innerHTML = "За три секунды найдите " + txt;
}

function shuffledFigs() {
    return figTypes.sort(() => 0.5 - Math.random());
}

function endLevel2() {
    document.getElementById('level2').style.display = 'none';

    currentLevel++;
    document.getElementById('changeLevel').style.display = 'block';
}