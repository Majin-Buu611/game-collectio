const stonesAmount = document.getElementById("stonesAmount");
let stones = 21
const logEntries = document.getElementById("log-entries");

function updateDisplay() {
    stonesAmount.textContent = stones;
}

function removeStone(amount) {
  if (amount < 1) return;
  if (amount <= stones) {
    if (stones - amount >= 0) {
      stones -= amount;
    } else {
      logMove("Atempted to remove more stones than there are on pile.");
    }
  }
  updateDisplay();
}

function reset() {
  stones = 21;
  updateDisplay();
  logMove("Game reset.");
}

function logMove(message) {
  const entry = document.createElement("div");
  entry.className = "log-entry";
  entry.textContent = message;
  logEntries.appendChild(entry);
  logEntries.scrollTop = logEntries.scrollHeight;
}

function clearLog() {
  logEntries.innerHTML = "";
}

updateDisplay();
