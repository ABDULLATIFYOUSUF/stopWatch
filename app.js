var min = document.getElementById("min")
var sec = document.getElementById("sec")
var msec = document.getElementById("msec")
var startBtn = document.getElementById("startBtn")

var minutes = 0
var seconds = 0
var mseconds = 0

var interval;


function timer() {
    mseconds++
    msec.innerHTML = mseconds
    if (mseconds >= 10) {
        seconds++
        sec.innerHTML = seconds
        mseconds = 0
    } else if (seconds >= 60) {
        seconds = 0
        minutes++
        min.innerHTML = minutes
    }
}


function startWatch() {

    console.log(interval = setInterval(timer, 100))
    startBtn.style.display ="none"

}

function stopwatch() {
    clearInterval(interval)
    startBtn.style.display = "inline"
}

function resetwatch() {
    clearInterval(interval)
    minutes = 0
    seconds = 0
    mseconds = 0

    min.innerHTML = "00"
    sec.innerHTML = "00"
    msec.innerHTML = "00"
    startBtn.style.display = "inline"

}