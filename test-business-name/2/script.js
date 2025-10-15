/**
 * TEMPLATE 2 - CORPORATE LANDSCAPING SITE
 * Interactive behaviors and enhancements
 */

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Don't prevent default for just "#" or empty hrefs
    if (href === '#' || href === '') {
      e.preventDefault();
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();

      // Smooth scroll to target
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========================================
// VIDEO PLAY OVERLAY INTERACTIONS
// ========================================
const playButtons = document.querySelectorAll('.play-overlay');

playButtons.forEach(button => {
  button.addEventListener('click', function() {
    // In a real implementation, this would open a video modal
    // For now, we'll just log and could link to external video
    console.log('Play video clicked');

    // You could implement a modal here, or link to YouTube, Vimeo, etc.
    // Example: window.open('https://youtube.com/watch?v=...', '_blank');
  });

  button.addEventListener('keydown', function(e) {
    // Allow Enter and Space to trigger the button
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
});

// ========================================
// SEARCH TOGGLE (PLACEHOLDER)
// ========================================
const searchToggle = document.querySelector('.search-toggle');

if (searchToggle) {
  searchToggle.addEventListener('click', function() {
    // In a real implementation, this would open a search overlay
    console.log('Search toggle clicked');

    // Placeholder for search functionality
    // You could implement a search modal or input field here
  });
}

// ========================================
// TESTIMONIAL GRID (STATIC DISPLAY)
// ========================================
// Testimonials are now displayed in a static grid layout
// No carousel functionality needed - all cards visible at once

// ========================================
// PORTFOLIO CARD KEYBOARD NAVIGATION
// ========================================
const portfolioCards = document.querySelectorAll('.portfolio-card');

portfolioCards.forEach(card => {
  // Make cards keyboard accessible
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'article');

  card.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      // In a real implementation, this would open the portfolio item
      console.log('Portfolio card activated:', this.querySelector('.portfolio-card__title').textContent);
    }
  });
});

// ========================================
// LAZY LOADING IMAGES (PROGRESSIVE ENHANCEMENT)
// ========================================
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;

        // If image has a data-src attribute, load it
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }

        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });

  // Observe all images with data-src
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ========================================
// HEADER SCROLL BEHAVIOR (OPTIONAL)
// ========================================
let lastScroll = 0;
const header = document.querySelector('.header');
const utilityBar = document.querySelector('.utility-bar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Add shadow when scrolled
  if (currentScroll > 10) {
    if (header) header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
  } else {
    if (header) header.style.boxShadow = 'none';
  }

  lastScroll = currentScroll;
});

// ========================================
// FORM VALIDATION (IF FORMS ARE ADDED)
// ========================================
const forms = document.querySelectorAll('form');

forms.forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Basic validation
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.setAttribute('aria-invalid', 'true');

        // Add error styling
        field.style.borderColor = '#e63946';
      } else {
        field.setAttribute('aria-invalid', 'false');
        field.style.borderColor = '';
      }
    });

    if (isValid) {
      // In a real implementation, submit the form data
      console.log('Form is valid, ready to submit');

      // You could send to an API here
      // fetch('/api/submit', { method: 'POST', body: new FormData(form) })
    } else {
      console.log('Form validation failed');
    }
  });
});

// ========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================

// Skip to main content link (for keyboard users)
const skipLink = document.createElement('a');
skipLink.href = '#main-content';
skipLink.textContent = 'Skip to main content';
skipLink.className = 'visually-hidden';
skipLink.style.cssText = `
  position: absolute;
  top: 0;
  left: 0;
  background: var(--green-900);
  color: white;
  padding: 8px 16px;
  z-index: 9999;
  text-decoration: none;
`;

skipLink.addEventListener('focus', function() {
  this.style.clip = 'auto';
  this.style.width = 'auto';
  this.style.height = 'auto';
  this.style.overflow = 'visible';
});

skipLink.addEventListener('blur', function() {
  this.classList.add('visually-hidden');
});

document.body.insertBefore(skipLink, document.body.firstChild);

// ========================================
// CONSOLE WELCOME MESSAGE
// ========================================
console.log('%c🌿 Template 2 - Corporate Landscaping Site', 'color: #19864a; font-size: 16px; font-weight: bold;');
console.log('Built with accessibility and performance in mind.');

// ========================================
// EXPORT FOR POTENTIAL MODULE USE
// ========================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {};
}
