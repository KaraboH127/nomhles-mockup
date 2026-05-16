  // ── Mobile menu ──
    const hamburger   = document.getElementById('hamburger');
    const mobileMenu  = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const mobileClose = document.getElementById('mobileClose');
    const mobileNavLinks = document.querySelectorAll('#mobileNavLinks a');

    function openMenu() {
      hamburger.classList.add('open');
      mobileMenu.classList.add('open');
      menuOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      menuOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', () =>
      mobileMenu.classList.contains('open') ? closeMenu() : openMenu()
    );
    mobileClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);

    // Close on nav link tap
    mobileNavLinks.forEach(a => {
      a.addEventListener('click', () => {
        closeMenu();
      });
    });

    // ── Active nav link on scroll (desktop + mobile) ──
    const sections = document.querySelectorAll('section[id]');
    const desktopLinks = document.querySelectorAll('.nav-links a');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          desktopLinks.forEach(a => a.classList.remove('active'));
          mobileNavLinks.forEach(a => a.classList.remove('active'));
          const dActive = document.querySelector(`.nav-links a[href="#${id}"]`);
          const mActive = document.querySelector(`#mobileNavLinks a[href="#${id}"]`);
          if (dActive) dActive.classList.add('active');
          if (mActive) mActive.classList.add('active');
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(s => observer.observe(s));