var stonesAmount = document.getElementById("stonesAmount");
var stones = 21

function updateDisplay() {
    stonesAmount.textContent = stones;
}

function removeStone(amount) {
  if (amount < 1) amount = 1;
  if (amount <= stones) {
    stones -= amount;
    if (stones < 0) stones = 0;
  }
  updateDisplay();
}

function reset() {
  stones = 21;
  updateDisplay();
}

updateDisplay();
