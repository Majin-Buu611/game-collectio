var displayAmount = Document.getElementById("display amount");
var stonesAmount = 21

function updateDisplay() {
    displayAmount.textContent = stonesAmount;
}

function removeStone(amount) {
  stonesAmount - amount;
}

function reset() {
  stonesAmount = 21;
  updateDisplay();
}

updateText();
