// THEME TOGGLE
    (function initTheme() {
      const saved = localStorage.getItem('theme');
      if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');
    })();
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        if (isLight) {
          document.documentElement.removeAttribute('data-theme');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
        }
      });
    } else {
      console.warn('Theme toggle button not found.');
    }

    // PARTICLES
    const pc = document.getElementById('particles');
    if (!pc) {
      console.warn('Particles container (#particles) not found.');
    } else {
      for (let i = 0; i < 24; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const s = Math.random() * 3 + 1.5;
        p.style.cssText = `width:${s}px;height:${s}px;left:${Math.random()*100}%;--drift:${(Math.random()-0.5)*120}px;animation-duration:${Math.random()*12+10}s;animation-delay:${Math.random()*10}s;background:${Math.random()>0.6?'var(--pink)':'var(--crimson2)'};border-radius:${Math.random()>0.5?'50%':'2px'};`;
        pc.appendChild(p);
      }
    }

    // COUNTDOWN + LOCK
    // 12:00 AM on April 7, 2026 in Nigeria (WAT, UTC+1) == 11:00 PM UTC on April 6, 2026.
    const TARGET = new Date(Date.UTC(2026, 3, 6, 23, 0, 0));
    if (isNaN(TARGET.getTime())) console.warn('TARGET date is invalid; countdown may not function correctly.');
    let hasUnlocked = false;
    let isReadyToUnlock = false;
    const unlockBtn = document.getElementById('unlockBtn');
    const unlockCele = document.getElementById('unlockCele');
    const unlockedContent = document.getElementById('unlockedContent');
    if (!unlockBtn) console.warn('Unlock button (#unlockBtn) not found.');
    if (!unlockCele) console.warn('Unlock celebration element (#unlockCele) not found.');
    if (!unlockedContent) console.warn('Unlocked content container (#unlockedContent) not found.');
    const unlockedMarkup = `
    <section class="letter-section">
      <div class="letter-top">
        <span class="sect-eye">From Shin, With Love</span>
        <h2 class="sect-head">A Letter For You</h2>
        <span class="letter-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        <span class="letter-from-lbl">Written for Sora</span>
        <span class="letter-ds">April 7, 2026</span>
      </div>
      <div class="letter-body">
        <span class="salutation">Hey baby,</span>
        <p>If someone had told me, a few years back, that I'd be writing you a one year anniversary letter... I'd have told them they had a future in stand-up comedy.</p>
        <p>But here we are. A year. And somehow it already feels like forever.</p>
        <p>Three years I carried you with me, quietly. Three years of knowing, somewhere I didn't say out loud, that you were different. That I couldn't see myself falling for anyone else. And then September 2024 came, and then April 7th came, and the universe finally caught up to what I already knew.</p>
        <p>I wake up every day and I still have to remind myself... she's actually your girlfriend. She chose you. She loves you. I don't think that feeling will ever stop being the most extraordinary thing I've ever felt.</p>
        <p>December was everything. A whole month of having you close enough to touch. I don't think I understood what I'd been missing until I had it...and I don't think I understood what losing it would feel like until January. Leaving you was the hardest thing... But I carry you with me everywhere I go.</p>
        <p>You are the only person I trust and whom I love, above and beyond myself. All of my love belongs to you, you are its keeper.</p>
        <p>Loving you has been the best experience ever.</p>
        <p>Here's to many more years, Cara Mia. Here's to forever.</p>
        <div class="letter-sign">
          <span class="closing">I love you so much — Happy Anniversary ❤️</span>
          <span class="signature">Shin</span>
        </div>
      </div>
    </section>

    <section class="tl-section">
      <div class="tl-head">
        <span class="sect-eye">Our Journey</span>
        <h2 class="sect-head">Our Story</h2>
      </div>
      <div class="tl-track">
        <div class="tl-item">
          <div class="tl-dot"></div>
          <div class="tl-date">Four Years Ago</div>
          <div class="tl-title">We Met Online</div>
          <div class="tl-body">"We started as strangers. Then somewhere along the way, you became the person I told everything to. My best friend. The one I've been in love with."</div>
        </div>
        <div class="tl-item">
          <div class="tl-dot"></div>
          <div class="tl-date">Three Years Ago</div>
          <div class="tl-title">Best Friends</div>
          <div class="tl-body">"I carried feelings for you quietly for years. You were my best friend and I didn't want to ruin it. So I kept it. And loved you anyway, in every way I was allowed to...Gbora Gbei Gbusuru."</div>
        </div>
        <div class="tl-item">
          <div class="tl-dot"></div>
          <div class="tl-date">September 2024</div>
          <div class="tl-title">Something Changed</div>
          <div class="tl-body">"We started talking differently. You told me later that you'd fallen in love with me. I didn't know that yet.. but I fell harder for you."</div>
        </div>
        <div class="tl-item">
          <div class="tl-dot"></div>
          <div class="tl-date">April 7, 2025</div>
          <div class="tl-title">I Became Yours and You Became Mine</div>
          <div class="tl-body">"The day it became official. The day I got to call you mine properly, finally, without holding anything back. Everything before this was the prologue."</div>
        </div>
        <div class="tl-item">
          <div class="tl-dot"></div>
          <div class="tl-date">December 2025</div>
          <div class="tl-title">A Whole Month Together</div>
          <div class="tl-body">"I flew to you. We had a whole month...dates, laughter, New Year's together. I had everything I ever wanted, right there in front of me. I didn't want to leave. I still don't."</div>
        </div>
        <div class="tl-item">
          <div class="tl-dot"></div>
          <div class="tl-date">April 7, 2026</div>
          <div class="tl-title">One Year. Forever to Go.</div>
          <div class="tl-body">"Here we are. One year of choosing each other. Here's to every year still to come — as long as it's with you, Cara Mia."</div>
        </div>
      </div>
    </section>

    <section class="gallery-section">
      <div class="gallery-head">
        <span class="sect-eye">Our Memories</span>
        <h2 class="sect-head">A Year in Photographs</h2>
      </div>
      <div class="gallery-grid">
        <div class="g-cell"><img src="photos/photo1.jpeg" alt="Our first conversation" loading="lazy"><div class="g-overlay"></div><p class="g-cap">Our first conversation</p></div>
        <div class="g-cell"><img src="photos/photo2.jpeg" alt="First Date" loading="lazy"><div class="g-overlay"></div><p class="g-cap">First Date</p></div>
        <div class="g-cell"><img src="photos/photo3.jpeg" alt="My favourite moment with you" loading="lazy"><div class="g-overlay"></div><p class="g-cap">My favourite moment with you</p></div>
        <div class="g-cell"><img src="photos/photo4.jpeg" alt="Forever my favourite person" loading="lazy"><div class="g-overlay"></div><p class="g-cap">Forever my favourite person</p></div>
        <div class="g-cell"><img src="photos/photo5.jpeg" alt="Every moment with you is magic" loading="lazy"><div class="g-overlay"></div><p class="g-cap">Every moment with you is magic</p></div>
        <div class="g-cell"><img src="photos/photo6.jpeg" alt="A love like ours" loading="lazy"><div class="g-overlay"></div><p class="g-cap">A love like ours</p></div>
      </div>
    </section>

    <footer class="site-footer">
      <span class="foot-mark"><span>Sora</span> & Shin</span>
      <div class="blood-love" aria-label="I love you so much">
        <span class="blood-love-text">I LOVE YOU SO MUCH</span>
      </div>
      <p class="foot-made">Made with love by Shin, for Sora</p>
      <p class="foot-stamp">April 7, 2026 · One Year of Us</p>
    </footer>`;

    function bindRevealTargets(root = document) {
      root.querySelectorAll('.tl-item, .letter-body p').forEach(el => obs.observe(el));
    }

    function bindGalleryGlow(root = document) {
      root.querySelectorAll('.g-cell').forEach(cell => {
        cell.addEventListener('click', () => {
          cell.style.borderColor = 'var(--pink)';
          cell.style.boxShadow = '0 0 28px rgba(232,137,154,0.35)';
          setTimeout(() => { cell.style.borderColor=''; cell.style.boxShadow=''; }, 900);
        }, { once: false });
      });
    }

    function bindImageErrorHandlers(root = document) {
      root.querySelectorAll('.g-cell img').forEach(img => {
        img.addEventListener('error', () => {
          console.warn(`Gallery image failed to load: ${img.src}`);
          img.style.display = 'none';
          const cell = img.closest('.g-cell');
          if (cell && !cell.querySelector('.g-ph')) {
            const placeholder = document.createElement('span');
            placeholder.className = 'g-ph';
            placeholder.setAttribute('aria-hidden', 'true');
            placeholder.textContent = '📷';
            cell.insertBefore(placeholder, cell.firstChild);
          }
        });
      });
    }

    function renderUnlockedContent() {
      if (!unlockedContent || unlockedContent.childElementCount > 0) return;
      unlockedContent.innerHTML = unlockedMarkup;
      bindRevealTargets(unlockedContent);
      bindGalleryGlow(unlockedContent);
      bindImageErrorHandlers(unlockedContent);
    }

    function burst() {
      if (!pc) return;
      for (let i = 0; i < 50; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const s = Math.random() * 5 + 2;
        p.style.cssText = `width:${s}px;height:${s}px;left:${Math.random()*100}%;--drift:${(Math.random()-0.5)*200}px;animation-duration:${Math.random()*4+3}s;animation-delay:${Math.random()*2}s;background:${Math.random()>0.5?'var(--pink)':'var(--crimson2)'};`;
        pc.appendChild(p);
        setTimeout(() => p.remove(), 8000);
      }
    }

    function celebrationBurst() {
      if (!unlockCele) return;

      unlockCele.classList.add('revealed');
      unlockCele.classList.add('is-popup');
      unlockCele.classList.remove('show');
      void unlockCele.offsetWidth;
      unlockCele.classList.add('show');

      const icons = ['❤', '♡', '♥', '✦', '✧'];
      for (let i = 0; i < 28; i++) {
        const piece = document.createElement('span');
        piece.className = Math.random() > 0.35 ? 'cele-heart' : 'cele-confetti';
        piece.textContent = icons[Math.floor(Math.random() * icons.length)];

        const left = Math.random() * 100;
        const delay = Math.random() * 0.6;
        const duration = 2.6 + Math.random() * 1.8;
        const drift = (Math.random() - 0.5) * 180;
        const rotate = (Math.random() - 0.5) * 240;
        const size = 14 + Math.random() * 18;

        piece.style.left = `${left}%`;
        piece.style.top = `${18 + Math.random() * 22}%`;
        piece.style.fontSize = `${size}px`;
        piece.style.animationDelay = `${delay}s`;
        piece.style.animationDuration = `${duration}s`;
        piece.style.setProperty('--cele-drift', `${drift}px`);
        piece.style.setProperty('--cele-rotate', `${rotate}deg`);

        unlockCele.appendChild(piece);
        setTimeout(() => piece.remove(), (delay + duration) * 1000);
      }

      setTimeout(() => {
        unlockCele.classList.remove('show');
        unlockCele.classList.remove('is-popup');
      }, 3600);
    }

    function unlock() {
      if (hasUnlocked) return;
      hasUnlocked = true;
      renderUnlockedContent();
      const lockScreen = document.getElementById('lockScreen');
      if (lockScreen) lockScreen.style.display = 'none';
      else console.warn('Lock screen element (#lockScreen) not found.');
      unlockedContent.classList.add('revealed');
      unlockBtn?.classList.remove('show');
      burst();
      celebrationBurst();
    }

    unlockBtn?.addEventListener('click', () => {
      if (!isReadyToUnlock) return;
      unlock();
      document.getElementById('unlockedContent').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    function tick() {
      const diff = TARGET - new Date();
      if (diff <= 0) {
        isReadyToUnlock = true;
        ['days','hours','minutes','seconds'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.textContent = '00';
          else console.warn(`Countdown element #${id} not found.`);
        });
        const cdMsgEl = document.getElementById('cdMsg');
        if (cdMsgEl) cdMsgEl.textContent = 'It is April 7, 12:00 AM in Nigeria. Click the button below to unlock the page.';
        unlockBtn?.classList.add('show');
        clearInterval(countdownTimer);
        return;
      }
      const d = Math.floor(diff/86400000);
      const h = Math.floor((diff%86400000)/3600000);
      const m = Math.floor((diff%3600000)/60000);
      const s = Math.floor((diff%60000)/1000);
      document.getElementById('days').textContent    = String(d).padStart(2,'0');
      document.getElementById('hours').textContent   = String(h).padStart(2,'0');
      document.getElementById('minutes').textContent = String(m).padStart(2,'0');
      document.getElementById('seconds').textContent = String(s).padStart(2,'0');
    }

    let countdownTimer = null;
    if (new Date() >= TARGET) {
      isReadyToUnlock = true;
      unlockBtn?.classList.add('show');
    }
    tick();
    if (new Date() < TARGET) {
      countdownTimer = setInterval(tick, 1000);
    }

    // SCROLL REVEAL
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e,i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 100);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    bindRevealTargets();
    bindGalleryGlow();
