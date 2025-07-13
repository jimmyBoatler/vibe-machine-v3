const button = document.getElementById("coin-button");
const output = document.getElementById("card-output");

const vibeMessages = [
  "You are not behind. You're off-grid on purpose.\nSerial: VMB-912",
  "Somewhere out there, your name is still echoing in an empty mall.",
  "Today you're a glitch in someone else’s timeline.\nThat's power.",
  "Time is folding. Walk slowly.",
  "Your signal is strong, but you’re underground.\nWait it out."
];

const refundMessages = [
  "Coin rejected. Try again later.",
  "Funds returned.\nNothing for you today.",
  "The Machine made a noise, but no card came out.",
  "You felt a spark. That was enough.",
  "Refund issued.\nReason: ambient static."
];

button.addEventListener("click", () => {
  output.classList.remove("hidden");

  const roll = Math.random();

  if (roll < 0.6) {
    const vibe = vibeMessages[Math.floor(Math.random() * vibeMessages.length)];
    output.textContent = vibe;
  } else if (roll < 0.9) {
    const refund = refundMessages[Math.floor(Math.random() * refundMessages.length)];
    output.textContent = refund;
  } else {
    output.textContent = "";
    output.classList.add("hidden");
  }
});
