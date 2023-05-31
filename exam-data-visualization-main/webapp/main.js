const countElement = document.getElementById('count');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');

let count = 0;
function updateCount() {
  countElement.textContent = count;
}

