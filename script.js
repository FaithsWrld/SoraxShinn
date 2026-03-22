// PARTICLES
    const pc = document.getElementById('particles');
    for (let i = 0; i < 24; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const s = Math.random() * 3 + 1.5;
      p.style.cssText = `width:${s}px;height:${s}px;left:${Math.random()*100}%;--drift:${(Math.random()-0.5)*120}px;animation-duration:${Math.random()*12+10}s;animation-delay:${Math.random()*10}s;background:${Math.random()>0.6?'var(--pink)':'var(--crimson2)'};border-radius:${Math.random()>0.5?'50%':'2px'};`;
      pc.appendChild(p);
    }

    // COUNTDOWN + LOCK
    // 12:00 AM on April 7, 2026 in Nigeria (WAT, UTC+1) == 11:00 PM UTC on April 6, 2026.
    const TARGET = new Date(Date.UTC(2026, 3, 6, 23, 0, 0));
    let hasUnlocked = false;
    let isReadyToUnlock = false;
    const unlockBtn = document.getElementById('unlockBtn');
    const unlockCele = document.getElementById('unlockCele');

    function burst() {
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
      document.getElementById('lockScreen').style.display = 'none';
      document.getElementById('unlockedContent').classList.add('revealed');
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
        ['days','hours','minutes','seconds'].forEach(id => document.getElementById(id).textContent = '00');
        document.getElementById('cdMsg').textContent = 'It is April 7, 12:00 AM in Nigeria. Click the button below to unlock the page.';
        unlockBtn?.classList.add('show');
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

    if (new Date() >= TARGET) {
      isReadyToUnlock = true;
      unlockBtn?.classList.add('show');
    }
    tick();
    setInterval(tick, 1000);

    // SCROLL REVEAL
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e,i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 100);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.tl-item, .letter-body p').forEach(el => obs.observe(el));

    // GALLERY CLICK GLOW
    document.querySelectorAll('.g-cell').forEach(cell => {
      cell.addEventListener('click', () => {
        cell.style.borderColor = 'var(--pink)';
        cell.style.boxShadow = '0 0 28px rgba(232,137,154,0.35)';
        setTimeout(() => { cell.style.borderColor=''; cell.style.boxShadow=''; }, 900);
      });
    });
