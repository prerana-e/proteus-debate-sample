// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
  
    // 1) Inject a small bio section right below the header
    const bio = document.createElement('div');
    bio.className = 'bio container';
    bio.innerHTML = `
      <p>
        <strong>Proteus Debate Academy</strong> – Empowering students to craft world-class arguments
        through expert coaching, curated resources, and a thriving community.
      </p>
    `;
    // header.insertAdjacentElement('afterend', bio);
  
    // 2) Header shrink-on-scroll
    const shrinkThreshold = 50; // px
    window.addEventListener('scroll', () => {
      if (window.scrollY > shrinkThreshold) {
        header.classList.add('shrink');
      } else {
        header.classList.remove('shrink');
      }
    });
  
    // 3) Optional: Fade-in elements on scroll
    const faders = document.querySelectorAll('.fade-in');
    if ('IntersectionObserver' in window && faders.length) {
      const appearOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };
      const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        });
      }, appearOptions);
  
      faders.forEach(fader => appearOnScroll.observe(fader));
    }
  });
  