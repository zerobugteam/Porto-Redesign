let scrollListenerAttached = false;
let rafTicking = false;
let fadeTimeout = null;

export function initAtlasScroll() {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Aktifkan native smooth scrolling di HTML
  if (!isReducedMotion) {
    document.documentElement.style.scrollBehavior = 'smooth';
  } else {
    document.documentElement.style.scrollBehavior = 'auto';
  }

  const scrollIndicatorBar = document.getElementById('atlas-scroll-bar');
  if (!scrollIndicatorBar) return;

  function updateBar() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
    const maxScroll = window.innerHeight - scrollIndicatorBar.offsetHeight - 8;
    const translateY = progress * Math.max(0, maxScroll);

    scrollIndicatorBar.style.transform = `translate3d(0, ${translateY}px, 0)`;
    scrollIndicatorBar.style.opacity = '0.92';

    if (fadeTimeout) clearTimeout(fadeTimeout);
    fadeTimeout = setTimeout(() => {
      scrollIndicatorBar.style.opacity = '0.42';
    }, 450);

    rafTicking = false;
  }

  function onScroll() {
    if (!rafTicking) {
      rafTicking = true;
      requestAnimationFrame(updateBar);
    }
  }

  // Update posisi pertama kali saat halaman dimuat
  updateBar();

  if (!scrollListenerAttached) {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateBar, { passive: true });
    scrollListenerAttached = true;
  }

  // Kompatibilitas aman untuk modal / drawer
  window.__lenis = {
    stop: pauseAtlasScroll,
    start: resumeAtlasScroll,
    scrollTo: (target) => {
      if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: 'instant' });
      }
    }
  };
}

// Handler helper untuk stop & start saat modal / drawer terbuka
export function pauseAtlasScroll() {
  document.body.style.overflow = 'hidden';
}

export function resumeAtlasScroll() {
  document.body.style.overflow = '';
}

export function resetAtlasScrollTop() {
  window.scrollTo({ top: 0, behavior: 'instant' });
}
