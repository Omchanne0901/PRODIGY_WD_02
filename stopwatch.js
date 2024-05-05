let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTime, 10);
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  isRunning = false;
  updateTime();
}

function updateTime() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }

  const display = document.querySelector('.display');
  display.textContent = `${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(milliseconds / 10)}`;
}

function padNumber(number) {
  return number.toString().padStart(2, '0');
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.stop').addEventListener('click', stopTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
