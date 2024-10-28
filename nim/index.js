const stonesAmount = document.getElementById("stonesAmount");
let stones = 21
const logEntries = document.getElementById("log-entries");

function updateDisplay() {
    stonesAmount.textContent = stones;
}

function removeStone(amount) {
  if (amount < 1) amount = 1;
  if (amount <= stones) {
    stones -= amount;
    if (stones < 0) stones = 0;
    logMove("Player removes ${amount} stones from the pile.");
  }
  updateDisplay();
}

function reset() {
  stones = 21;
  updateDisplay();
}

function logMove(message) {
  const entry = document.createElement("div");
  entry.className = "log-entry";
  entry.textContent = message;
  logEntries.appendChild(entry);
  logEntries.scrollTop = logEntries.scrollHeight;
}

updateDisplay();
