* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --maroon: #6d0f1d;
  --gold: #d4a94d;
  --deep-gold: #b88318;
  --cream: #fff8ed;
  --soft: rgba(255, 248, 237, 0.9);
  --text: #4c2a1f;
  --shadow: 0 14px 40px rgba(0, 0, 0, 0.18);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
  color: var(--text);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  background: #1c0d08;
}

.page-bg {
  position: fixed;
  inset: 0;
  background:
    linear-gradient(rgba(35, 11, 8, 0.45), rgba(35, 11, 8, 0.65)),
    url("images/background.gif") center center / cover no-repeat;
  z-index: -3;
}

.bg-overlay {
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at top, rgba(212, 169, 77, 0.22), transparent 40%),
    linear-gradient(to bottom, rgba(109, 15, 29, 0.12), rgba(0, 0, 0, 0.3));
  z-index: -2;
}

.sparkles {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image:
    radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px),
    radial-gradient(circle, rgba(212,169,77,0.25) 1px, transparent 1px);
  background-size: 120px 120px, 180px 180px;
  animation: floatSparkle 18s linear infinite;
  opacity: 0.35;
}

@keyframes floatSparkle {
  from { transform: translateY(0); }
  to { transform: translateY(-120px); }
}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 18px;
}

.hero-inner {
  max-width: 920px;
  width: 100%;
  background: linear-gradient(180deg, rgba(255,248,237,0.94), rgba(255,245,232,0.88));
  border: 2px solid rgba(212, 169, 77, 0.7);
  border-radius: 30px;
  padding: 40px 24px 48px;
  box-shadow: var(--shadow);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-inner::before,
.hero-inner::after {
  content: "";
  position: absolute;
  width: 180px;
  height: 180px;
  border: 2px solid rgba(212, 169, 77, 0.25);
  border-radius: 50%;
}

.hero-inner::before {
  top: -80px;
  left: -80px;
}

.hero-inner::after {
  bottom: -80px;
  right: -80px;
}

.top-mantra {
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
  font-family: 'Cinzel', serif;
  color: var(--deep-gold);
  font-size: 0.95rem;
  letter-spacing: 0.06em;
  margin-bottom: 14px;
}

.ganesha-wrap {
  display: flex;
  justify-content: center;
  margin: 10px 0 12px;
}

.ganesha-img {
  width: 110px;
  height: 110px;
  object-fit: contain;
  filter: drop-shadow(0 6px 16px rgba(109, 15, 29, 0.2));
}

.invite-small {
  color: var(--deep-gold);
  font-size: 0.98rem;
  margin-bottom: 10px;
}

.main-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(2rem, 5vw, 3.4rem);
  color: var(--maroon);
  margin-bottom: 16px;
  text-shadow: 0 1px 0 rgba(255,255,255,0.4);
}

.hero-text {
  max-width: 720px;
  margin: 0 auto 20px;
  font-size: 1.04rem;
  line-height: 1.9;
}

.bride-name,
.groom-name {
  font-family: 'Great Vibes', cursive;
  font-size: clamp(2.9rem, 8vw, 5rem);
  color: var(--maroon);
  line-height: 1.1;
}

.ampersand {
  font-family: 'Cinzel', serif;
  color: var(--gold);
  font-size: 2rem;
  margin: 4px 0;
}

.sub-family {
  max-width: 720px;
  margin: 16px auto 24px;
  font-size: 1rem;
  line-height: 1.8;
}

.primary-btn,
.secondary-btn {
  display: inline-block;
  text-decoration: none;
  border-radius: 999px;
  font-weight: 600;
  transition: all 0.25s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--maroon), var(--gold));
  color: #fff;
  padding: 14px 30px;
  box-shadow: 0 10px 24px rgba(109, 15, 29, 0.2);
}

.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-2px);
}

.secondary-btn {
  margin-top: 12px;
  background: rgba(109, 15, 29, 0.08);
  color: var(--maroon);
  border: 1px solid rgba(109, 15, 29, 0.18);
  padding: 12px 22px;
}

.main-content {
  padding: 10px 16px 50px;
}

.blessing-section,
.details-section {
  max-width: 1120px;
  margin: 0 auto;
}

.blessing-card {
  background: rgba(255, 248, 237, 0.93);
  border: 1px solid rgba(212, 169, 77, 0.45);
  border-radius: 28px;
  padding: 24px;
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 24px;
  align-items: center;
  box-shadow: var(--shadow);
  margin-bottom: 28px;
}

.blessing-img {
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  display: block;
  object-fit: contain;
}

.blessing-text h3 {
  font-family: 'Cinzel', serif;
  color: var(--maroon);
  font-size: 1.6rem;
  margin-bottom: 10px;
}

.blessing-text p {
  line-height: 1.9;
}

.details-section {
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 1fr));
  gap: 22px;
}

.section-card {
  background: rgba(255, 248, 237, 0.93);
  border: 1px solid rgba(212, 169, 77, 0.45);
  border-radius: 24px;
  padding: 26px 22px;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
}

.section-card::before {
  content: "";
  position: absolute;
  inset: 10px;
  border: 1px solid rgba(212, 169, 77, 0.22);
  border-radius: 18px;
  pointer-events: none;
}

.ornament {
  width: 70px;
  height: 4px;
  border-radius: 999px;
  margin: 0 auto 14px;
  background: linear-gradient(to right, transparent, var(--gold), transparent);
}

.section-title {
  font-family: 'Cinzel', serif;
  color: var(--maroon);
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 16px;
}

.section-card p {
  text-align: center;
  margin: 8px 0;
  line-height: 1.8;
}

.venue-title,
.host-name {
  font-weight: 700;
}

.countdown-box {
  text-align: center;
  font-size: 1.7rem;
  font-weight: 700;
  color: var(--maroon);
  padding-top: 8px;
}

.full-width-card {
  grid-column: 1 / -1;
}

.invite-para {
  max-width: 760px;
  margin: 0 auto;
}

.telugu-line {
  font-family: 'Noto Serif Telugu', serif;
  margin-top: 18px;
  color: var(--deep-gold);
  font-size: 1.15rem;
}

.footer {
  text-align: center;
  color: #fff7eb;
  padding: 28px 18px 40px;
}

.footer-small {
  margin-top: 6px;
  color: rgba(255, 247, 235, 0.8);
  font-size: 0.92rem;
}

@media (max-width: 900px) {
  .blessing-card {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .details-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hero-inner {
    padding: 34px 18px 40px;
  }

  .ganesha-img {
    width: 92px;
    height: 92px;
  }

  .hero-text,
  .sub-family {
    font-size: 0.96rem;
  }

  .countdown-box {
    font-size: 1.3rem;
  }

  .top-mantra {
    gap: 10px;
    font-size: 0.82rem;
  }
}
