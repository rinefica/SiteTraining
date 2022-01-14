let myTimer;
function setTimer() {
    let seconds = 3;
    myTimer = setInterval(function() {
        seconds--;

        document.getElementById("time").innerHTML = "Секунд осталось: " + seconds;
        if (seconds < 0) {
            clearInterval(myTimer);

            startLevel2()
        }
    }, 1000);
}

function setTimerStartUI() {
    document.getElementById("time").style.color = "black";
    document.getElementById("time").innerHTML = "Секунд осталось: " + 3;
}