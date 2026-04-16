const weddingDate = new Date("2026-05-03T10:14:00").getTime();
const countdownElement = document.getElementById("countdown");
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    countdownElement.innerHTML = "Today is the Wedding Day!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  countdownElement.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

let isPlaying = false;

musicToggle.addEventListener("click", async () => {
  try {
    if (!isPlaying) {
      await music.play();
      musicToggle.textContent = "Pause Music";
      isPlaying = true;
    } else {
      music.pause();
      musicToggle.textContent = "Play Music";
      isPlaying = false;
    }
  } catch (error) {
    alert("Music could not autoplay. Tap again after the page loads.");
  }
});
