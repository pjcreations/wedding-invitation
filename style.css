* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --maroon: #6f1020;
  --dark-maroon: #4a0813;
  --gold: #d4a548;
  --gold-soft: #f2d38a;
  --cream: #fff7ea;
  --text: #4a2d21;
  --white-soft: rgba(255, 248, 234, 0.93);
  --shadow: 0 18px 45px rgba(0, 0, 0, 0.22);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  color: var(--text);
  overflow-x: hidden;
  background: #170906;
  position: relative;
}

.background-layer {
  position: fixed;
  inset: 0;
  background:
    linear-gradient(rgba(30, 8, 10, 0.4), rgba(30, 8, 10, 0.65)),
    url("images/background.jpg") center center / cover no-repeat;
  z-index: -4;
  transform: scale(1.05);
}

.background-overlay {
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at top, rgba(212, 165, 72, 0.25), transparent 35%),
    linear-gradient(to bottom, rgba(111, 16, 32, 0.15), rgba(0, 0, 0, 0.3));
  z-index: -3;
}

.sparkle-layer {
  position: fixed;
  inset: 0;
  z-index: -2;
  pointer-events: none;
  background-image:
    radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px),
    radial-gradient(circle, rgba(242,211,138,0.35) 1px, transparent 1px);
  background-size: 120px 120px, 180px 180px;
  animation: sparkleMove 18s linear infinite;
  opacity: 0.45;
}

@keyframes sparkleMove {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-120px);
  }
}

.petals {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 5;
  overflow: hidden;
}

.petal {
  position: absolute;
  top: -10%;
  font-size: 1.5rem;
  opacity: 0.9;
  animation: petalsFall linear infinite;
}

.petal:nth-child(1) { left: 8%; animation-duration: 10s; animation-delay: 0s; }
.petal:nth-child(2) { left: 20%; animation-duration: 14s; animation-delay: 2s; }
.petal:nth-child(3) { left: 32%; animation-duration: 11s; animation-delay: 1s; }
.petal:nth-child(4) { left: 46%; animation-duration: 13s; animation-delay: 4s; }
.petal:nth-child(5) { left: 60%; animation-duration: 12s; animation-delay: 2s; }
.petal:nth-child(6) { left: 74%; animation-duration: 15s; animation-delay: 3s; }
.petal:nth-child(7) { left: 86%; animation-duration: 11s; animation-delay: 1s; }
.petal:nth-child(8) { left: 94%; animation-duration: 14s; animation-delay: 5s; }

@keyframes petalsFall {
  0% {
    transform: translateY(-10vh) rotate(0deg);
  }
  100% {
    transform: translateY(115vh) rotate(360deg);
  }
}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
}

.hero-card {
  width: 100%;
  max-width: 980px;
  background: linear-gradient(180deg, rgba(255,247,234,0.95), rgba(255,243,223,0.9));
  border: 2px solid rgba(212, 165, 72, 0.8);
  border-radius: 32px;
  padding: 42px 24px 50px;
  text-align: center;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
}

.hero-card::before,
.hero-card::after {
  content: "";
  position: absolute;
  width: 180px;
  height: 180px;
  border: 1px solid rgba(212, 165, 72, 0.25);
  border-radius: 50%;
}

.hero-card::before {
  top: -70px;
  left: -70px;
}

.hero-card::after {
  bottom: -70px;
  right: -70px;
}

.top-line {
  font-family: 'Cinzel', serif;
  color: var(--gold);
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  margin-bottom: 16px;
}

.god-row {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.god-icon {
  width: 110px;
  height: 110px;
  object-fit: contain;
  filter: drop-shadow(0 8px 18px rgba(111, 16, 32, 0.18));
}

.mini-line {
  color: #9c6a1f;
  margin-bottom: 10px;
}

.site-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--maroon);
  margin-bottom: 18px;
}

.hero-text {
  max-width: 760px;
  margin: 0 auto 22px;
  font-size: 1.05rem;
  line-height: 1.9;
}

.bride-name,
.groom-name {
  font-family: 'Great Vibes', cursive;
  font-size: clamp(3rem, 8vw, 5.2rem);
  color: var(--maroon);
  line-height: 1.05;
}

.and-symbol {
  font-family: 'Cinzel', serif;
  color: var(--gold);
  font-size: 2rem;
  margin: 6px 0;
}

.sub-line {
  max-width: 760px;
  margin: 18px auto 26px;
  line-height: 1.8;
}

.button-row {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.main-btn,
.small-btn {
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s ease;
  font-family: inherit;
}

.main-btn {
  background: linear-gradient(135deg, var(--maroon), var(--gold));
  color: white;
  padding: 14px 28px;
  border-radius: 999px;
  font-weight: 600;
  box-shadow: 0 10px 22px rgba(111, 16, 32, 0.22);
}

.main-btn.secondary {
  background: linear-gradient(135deg, #8b6a2b, #d4a548);
}

.main-btn:hover,
.small-btn:hover {
  transform: translateY(-2px);
}

.telugu-blessing {
  font-family: 'Noto Serif Telugu', serif;
  margin-top: 18px;
  color: #9b6b22;
  font-size: 1.08rem;
}

.divine-section,
.couple-section,
.details-grid,
.diyas-section,
.footer {
  max-width: 1180px;
  margin-left: auto;
  margin-right: auto;
}

.divine-section,
.couple-section {
  padding: 0 16px 24px;
}

.divine-card {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 24px;
  align-items: center;
  background: var(--white-soft);
  border-radius: 28px;
  border: 1px solid rgba(212, 165, 72, 0.5);
  box-shadow: var(--shadow);
  padding: 26px;
}

.divine-image {
  width: 100%;
  max-width: 210px;
  display: block;
  margin: 0 auto;
  object-fit: contain;
}

.divine-text h3 {
  font-family: 'Cinzel', serif;
  color: var(--maroon);
  font-size: 1.7rem;
  margin-bottom: 12px;
}

.divine-text p {
  line-height: 1.9;
}

.couple-card {
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid rgba(212, 165, 72, 0.45);
  box-shadow: var(--shadow);
  background: var(--white-soft);
}

.couple-image {
  width: 100%;
  max-height: 520px;
  object-fit: cover;
  display: block;
}

.couple-overlay {
  position: absolute;
  inset: auto 0 0 0;
  background: linear-gradient(to top, rgba(40, 10, 10, 0.7), transparent);
  padding: 28px 22px;
}

.couple-tag {
  font-family: 'Great Vibes', cursive;
  color: #fff7e9;
  font-size: 2.2rem;
  text-align: center;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 1fr));
  gap: 22px;
  padding: 0 16px 26px;
}

.info-card {
  background: var(--white-soft);
  border-radius: 24px;
  border: 1px solid rgba(212, 165, 72, 0.5);
  box-shadow: var(--shadow);
  padding: 26px 22px;
  position: relative;
  overflow: hidden;
}

.info-card::before {
  content: "";
  position: absolute;
  inset: 10px;
  border: 1px solid rgba(212, 165, 72, 0.22);
  border-radius: 18px;
  pointer-events: none;
}

.ornament {
  width: 80px;
  height: 4px;
  border-radius: 999px;
  margin: 0 auto 14px;
  background: linear-gradient(to right, transparent, var(--gold), transparent);
}

.info-card h3 {
  font-family: 'Cinzel', serif;
  color: var(--maroon);
  text-align: center;
  font-size: 1.55rem;
  margin-bottom: 14px;
}

.info-card p {
  text-align: center;
  margin: 8px 0;
  line-height: 1.8;
}

.highlight {
  font-weight: 700;
}

.small-btn {
  display: inline-block;
  margin: 12px auto 0;
  padding: 11px 20px;
  border-radius: 999px;
  background: rgba(111, 16, 32, 0.08);
  color: var(--maroon);
  border: 1px solid rgba(111, 16, 32, 0.15);
  font-weight: 600;
}

.info-card a.small-btn {
  display: table;
}

.countdown-box {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--maroon);
  margin-top: 10px;
}

.wide-card {
  grid-column: 1 / -1;
}

.invite-message {
  max-width: 760px;
  margin: 0 auto;
}

.telugu-line {
  font-family: 'Noto Serif Telugu', serif;
  margin-top: 16px;
  color: #9b6b22;
  font-size: 1.08rem;
}

.diyas-section {
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 4px 16px 22px;
}

.diya {
  font-size: 2.3rem;
  animation: diyaGlow 1.5s infinite alternate ease-in-out;
}

@keyframes diyaGlow {
  from {
    transform: translateY(0) scale(1);
    filter: drop-shadow(0 0 6px rgba(255, 196, 74, 0.25));
  }
  to {
    transform: translateY(-4px) scale(1.05);
    filter: drop-shadow(0 0 16px rgba(255, 196, 74, 0.75));
  }
}

.footer {
  text-align: center;
  color: #fff3df;
  padding: 0 16px 40px;
}

.footer-small {
  margin-top: 6px;
  opacity: 0.85;
  font-size: 0.92rem;
}

@media (max-width: 900px) {
  .divine-card {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }

  .wide-card {
    grid-column: auto;
  }
}

@media (max-width: 640px) {
  .hero-card {
    padding: 36px 18px 42px;
  }

  .god-icon {
    width: 92px;
    height: 92px;
  }

  .hero-text,
  .sub-line {
    font-size: 0.96rem;
  }

  .button-row {
    flex-direction: column;
    align-items: center;
  }

  .main-btn {
    width: 220px;
    text-align: center;
  }

  .countdown-box {
    font-size: 1.35rem;
  }

  .couple-tag {
    font-size: 1.8rem;
  }

  .top-line {
    font-size: 0.82rem;
    line-height: 1.8;
  }

  .diyas-section {
    gap: 18px;
  }
}
