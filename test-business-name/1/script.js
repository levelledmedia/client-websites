// ========================================
// GardenView - Interactive Elements
// ========================================

document.addEventListener('DOMContentLoaded', function() {

  // ========================================
  // Header Scroll Effect
  // ========================================
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.boxShadow = '0 2px 8px rgba(17, 37, 31, .08)';
    } else {
      header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });

  // ========================================
  // Smooth Scroll for Navigation Links
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================================
  // Form Submission Handler
  // ========================================
  const heroForm = document.querySelector('.hero__form-inner');
  if (heroForm) {
    heroForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (email) {
        // Simulate form submission
        alert(`Thank you! We'll contact you at ${email} to schedule your consultation.`);
        emailInput.value = '';
      }
    });
  }

  // ========================================
  // Gallery Image Loading Animation
  // ========================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(20px)';

        setTimeout(() => {
          entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 100);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe gallery items
  document.querySelectorAll('.gallery__item').forEach(item => {
    imageObserver.observe(item);
  });

  // ========================================
  // Service Cards Hover Effect Enhancement
  // ========================================
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
  });

  // ========================================
  // CTA Button Click Handlers
  // ========================================
  const ctaButtons = document.querySelectorAll('.btn--primary');
  ctaButtons.forEach(button => {
    if (button.textContent.trim() === 'Get in touch') {
      button.addEventListener('click', function(e) {
        if (!this.closest('form')) {
          e.preventDefault();
          // Scroll to hero form or show contact modal
          const heroForm = document.querySelector('.hero__form');
          if (heroForm) {
            heroForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
            heroForm.style.animation = 'pulse 0.6s ease';
            setTimeout(() => {
              heroForm.style.animation = '';
            }, 600);
          }
        }
      });
    }
  });

  // ========================================
  // Testimonial Cards Animation
  // ========================================
  const testimonialObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        testimonialObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.testimonial-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    testimonialObserver.observe(card);
  });

  // ========================================
  // Article Cards Interaction
  // ========================================
  document.querySelectorAll('.article-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function(e) {
      if (!e.target.classList.contains('article-card__link')) {
        const link = this.querySelector('.article-card__link');
        if (link) {
          link.click();
        }
      }
    });
  });

  // ========================================
  // Mobile Menu Toggle (if needed in future)
  // ========================================
  // This can be expanded if a mobile menu is added later

  // ========================================
  // Add pulse animation keyframes dynamically
  // ========================================
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 18px 40px rgba(17, 37, 31, .16);
      }
      50% {
        transform: scale(1.02);
        box-shadow: 0 24px 48px rgba(34, 192, 138, .25);
      }
    }
  `;
  document.head.appendChild(style);

  // ========================================
  // Performance: Lazy Load Images
  // ========================================
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }

  // ========================================
  // Services Grid: Equal Height Cards
  // ========================================
  function equalizeServiceCards() {
    const cards = document.querySelectorAll('.service-card__content');
    if (window.innerWidth > 767 && cards.length > 0) {
      let maxHeight = 0;
      cards.forEach(card => {
        card.style.height = 'auto';
        maxHeight = Math.max(maxHeight, card.offsetHeight);
      });
      cards.forEach(card => {
        card.style.height = maxHeight + 'px';
      });
    } else {
      cards.forEach(card => {
        card.style.height = 'auto';
      });
    }
  }

  equalizeServiceCards();
  window.addEventListener('resize', equalizeServiceCards);

  // ========================================
  // Console Welcome Message
  // ========================================
  console.log('%cGardenView 🌿', 'color: #22C08A; font-size: 24px; font-weight: bold;');
  console.log('%cBringing life to gardens across the community', 'color: #1E6F57; font-size: 14px;');
});
