const messages = [
  "You’re already too late, but go anyway.",
  "Ask the wrong question. Get the right answer.",
  "You're not stuck. You're haunting this place.",
  "Someone's watching — but they’re rooting for you.",
  "Your mistake was the right direction in disguise.",
  "This card is a refund. You’ll need it later.",
  "Try again. Or don’t. The machine doesn’t care.",
  "The message didn’t print. That *was* the message.",
  "Quarter accepted. Fate declined.",
  "You’re the main character in someone else’s dream."
];

const card = document.getElementById('card');
const button = document.getElementById('coin-button');

button.addEventListener('click', () => {
  const chance = Math.random();

  card.classList.remove('show', 'hidden');
  card.style.opacity = 0;

  setTimeout(() => {
    if (chance < 0.15) {
      card.innerText = "REFUND ISSUED.";
    } else if (chance < 0.25) {
      card.innerText = "";
    } else {
      const message = messages[Math.floor(Math.random() * messages.length)];
      card.innerText = message;
    }

    card.classList.remove('hidden');
    setTimeout(() => card.classList.add('show'), 100);
  }, 100);
});
