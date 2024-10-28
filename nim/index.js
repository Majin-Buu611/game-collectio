var stonesAmount = document.getElementById("stones amount");
var stones = 21

function updateDisplay() {
    stonesAmount.textContent = stones;
}

function removeStone(amount) {
  stones -= amount;
}

function reset() {
  stones = 21;
  updateDisplay();
}

updateDisplay();
