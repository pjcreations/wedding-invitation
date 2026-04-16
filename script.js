const countdown = document.getElementById("countdown");

const weddingDate = new Date("2026-05-03T10:14:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    countdown.textContent = "Today is the Wedding Day!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  countdown.textContent = `${days} Days ${hours} Hours ${minutes} Minutes`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
