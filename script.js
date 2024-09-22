let timer;
let seconds = 0;



function updateTime() {
    document.getElementById('timer').innerText = seconds;
    seconds++;
}

function startTimer() {
    timer = setInterval(updateTime, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    document.getElementById('timer').innerText = seconds;
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        document.getElementById('timer').innerText = "release to start";
    }
});

document.addEventListener('keyup', function(event) {
    if (event.code === 'Space') {
        startTimer()
    }
});
