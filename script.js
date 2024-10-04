// script.js
let timer; 
let seconds = 0; 
let minutes = 0; 
let hours = 0; 

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

function updateDisplay() {
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedHours = String(hours).padStart(2, '0');
    
    display.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

startButton.addEventListener("click", () => {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
    }
});

stopButton.addEventListener("click", () => {
    clearInterval(timer);
    timer = null; // Reset timer variable
});

resetButton.addEventListener("click", () => {
    clearInterval(timer);
    timer = null; // Reset timer variable
    seconds = 0; 
    minutes = 0; 
    hours = 0; 
    updateDisplay();
});