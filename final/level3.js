let selectedColor;
let taskColorFigCount;

function prepareLevel3() {
    let variants = 13;
    selectedColor = randomColor();

    let task = document.getElementById("taskLevel3");
    task.innerText = namesPlural[selectedColor];
    let textColor;
    do {
        textColor = randomColor();
    } while (textColor === selectedColor);
    task.style.color = textColor;

    let placeDiv = document.getElementById("placeFig");
    placeDiv.innerHTML = '';

    taskColorFigCount = randomIndex(variants / 3, variants / 2);

    for (let i = 0; i < variants - taskColorFigCount - 3; i++) {
        let color;
        do {
            color = randomColor();
        } while (color === selectedColor);

        placeDiv.appendChild(createFig(color))
    }

    for (let i = 0; i < 3; i++) {
        placeDiv.appendChild(createFig(textColor));
    }

    for (let i = 0; i < taskColorFigCount; i++) {
        placeDiv.appendChild(createFig(selectedColor));
    }
}

function createFig(color) {
    let figType = figTypes[randomIndex(0, 3)];

    let top = randomIndex(20, 380);
    let left = randomIndex(20, 380);

    let fig = document.createElement("div");
    fig.addEventListener('click',  () => {
        onClickFig(fig, color);
    });

    fig.classList.add(figType + "L3");

    fig.style.backgroundColor = color;
    fig.style.transform = 'rotate(' + randomIndex(-180, 180) + 'deg)';
    fig.style.top = top + "px";
    fig.style.left = left + "px";

    return fig;
}

function onClickFig(element, color) {
    element.style.display = "none";

    if (color === selectedColor) {
        scores += 1;
        updateScores()

        taskColorFigCount--;
    }

    if (taskColorFigCount > 0) return;

    showResults();
}