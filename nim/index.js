var stonesAmount = document.getElementById("stonesAmount");
var stones = 21

function updateDisplay() {
    stonesAmount.textContent = stones;
}

function removeStone(amount) {
  stones -= amount;
  updateDisplay();
}

function reset() {
  stones = 21;
  updateDisplay();
}

updateDisplay();
