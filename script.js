const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enterBtn");
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const countdown = document.getElementById("countdown");
const slides = document.querySelectorAll(".slide");
const rsvpForm = document.getElementById("rsvpForm");
const rsvpResult = document.getElementById("rsvpResult");
const whatsappShare = document.getElementById("whatsappShare");

enterBtn.addEventListener("click", async () => {
  intro.classList.add("hide");
  try {
    await bgMusic.play();
    musicBtn.textContent = "Pause Music";
    musicBtn.dataset.playing = "true";
  } catch (e) {
    musicBtn.textContent = "Play Music";
  }
});

musicBtn.addEventListener("click", async () => {
  const isPlaying = musicBtn.dataset.playing === "true";

  if (isPlaying) {
    bgMusic.pause();
    musicBtn.textContent = "Play Music";
    musicBtn.dataset.playing = "false";
  } else {
    try {
      await bgMusic.play();
      musicBtn.textContent = "Pause Music";
      musicBtn.dataset.playing = "true";
    } catch (e) {
      alert("Tap again after page load if music does not start.");
    }
  }
});

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

let currentSlide = 0;
setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 3000);

rsvpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const guestName = document.getElementById("guestName").value.trim();
  const guestCount = document.getElementById("guestCount").value.trim();
  const attendance = document.getElementById("attendance").value;
  const message = document.getElementById("message").value.trim();

  rsvpResult.textContent = `Thank you, ${guestName}. RSVP recorded: ${attendance} for ${guestCount} guest(s).`;
  
  const text = `Wedding RSVP%0AName: ${guestName}%0AAttendance: ${attendance}%0AGuests: ${guestCount}%0AMessage: ${encodeURIComponent(message)}`;
  whatsappShare.href = `https://wa.me/?text=${text}`;

  rsvpForm.reset();
});

const inviteText = encodeURIComponent(
  "You are warmly invited to the wedding of Ummadevi (Akhila) & Giridhar Goud on Sunday, 03 May 2026 at 10:14 A.M. Venue: Vallapu Reddy Ram Reddy Function Hall, Kanchiraopally Road, Pebbair, Wanaparthy Dist."
);
whatsappShare.href = `https://wa.me/?text=${inviteText}`;
