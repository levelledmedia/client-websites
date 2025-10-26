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
      const href = this.getAttribute('href');
      let target = document.querySelector(href);

      // On mobile, if clicking "Get Free Quote" links, scroll to the form instead of hero
      if (href === '#hero' && window.innerWidth <= 767) {
        const heroForm = document.querySelector('.hero__form');
        if (heroForm) {
          target = heroForm;
        }
      }

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
  // Animate on Scroll - Multiple Sections
  // ========================================
  const animateObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, delay);
        animateObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Stats Section Animation
  document.querySelectorAll('.stat-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    item.dataset.delay = index * 100;
    animateObserver.observe(item);
  });

  // Service Cards Animation
  document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    card.dataset.delay = index * 150;
    animateObserver.observe(card);
  });

  // Portfolio Carousel Slides Animation
  document.querySelectorAll('.portfolio-carousel-slide').forEach((slide, index) => {
    slide.dataset.delay = index * 100;
    animateObserver.observe(slide);
  });

  // Testimonial Cards Animation
  document.querySelectorAll('.testimonial-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    card.dataset.delay = (index % 3) * 100;
    animateObserver.observe(card);
  });

  // Split Section Images Animation
  document.querySelectorAll('.split__media').forEach((media, index) => {
    media.style.opacity = '0';
    media.style.transform = 'translateY(20px)';
    media.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    media.dataset.delay = index * 100;
    animateObserver.observe(media);
  });

  // Split Section Content Animation
  document.querySelectorAll('.split__content').forEach((content, index) => {
    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';
    content.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    content.dataset.delay = index * 150;
    animateObserver.observe(content);
  });

  // FAQ Items Animation
  document.querySelectorAll('.faq-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    item.dataset.delay = index * 100;
    animateObserver.observe(item);
  });

  // Section Headers Animation
  document.querySelectorAll('.section__header').forEach((header, index) => {
    header.style.opacity = '0';
    header.style.transform = 'translateY(20px)';
    header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    header.dataset.delay = index * 50;
    animateObserver.observe(header);
  });

  // Before/After Slider Animation
  const beforeAfterSlider = document.querySelector('.before-after-slider');
  if (beforeAfterSlider) {
    beforeAfterSlider.style.opacity = '0';
    beforeAfterSlider.style.transform = 'translateY(20px)';
    beforeAfterSlider.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animateObserver.observe(beforeAfterSlider);
  }

  // CTA Banner Animation
  const ctaBanner = document.querySelector('.cta');
  if (ctaBanner) {
    ctaBanner.style.opacity = '0';
    ctaBanner.style.transform = 'translateY(20px)';
    ctaBanner.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    animateObserver.observe(ctaBanner);
  }

  // Coverage Areas Animation
  document.querySelectorAll('.coverage-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    item.dataset.delay = index * 50;
    animateObserver.observe(item);
  });

  // Check List Items Animation
  document.querySelectorAll('.list-check li').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    item.dataset.delay = index * 100;
    animateObserver.observe(item);
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
  // Mobile Menu Toggle
  // ========================================
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuLinks = document.querySelectorAll('.header__mobile-nav a');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (mobileMenu.classList.contains('active') &&
          !mobileMenu.contains(e.target) &&
          !mobileMenuToggle.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

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
  // FAQ Toggles
  // ========================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-item__question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all FAQ items
      faqItems.forEach(faq => faq.classList.remove('active'));

      // Open clicked item if it wasn't already active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // ========================================
  // Carousel Helpers
  // ========================================
  function createInfiniteCarousel({ track, prevButton, nextButton, slideSelector }) {
    if (!track || !prevButton || !nextButton) return;
    if (track.dataset.carouselInitialized === 'true') return;

    const originalSlides = Array.from(track.querySelectorAll(slideSelector));
    const totalOriginal = originalSlides.length;
    if (totalOriginal <= 1) return;

    track.dataset.carouselInitialized = 'true';

    const TRANSITION = 'transform 0.5s ease';
    const clonesPerSide = totalOriginal;

    const createClone = (slide) => {
      const clone = slide.cloneNode(true);
      clone.dataset.carouselClone = 'true';
      clone.dataset.delay = '0';
      clone.style.opacity = '1';
      clone.style.transform = '';
      clone.style.transitionDelay = '0s';
      return clone;
    };

    const prependFragment = document.createDocumentFragment();
    originalSlides.slice(-clonesPerSide).forEach(slide => {
      prependFragment.appendChild(createClone(slide));
    });
    track.prepend(prependFragment);

    const appendFragment = document.createDocumentFragment();
    originalSlides.slice(0, clonesPerSide).forEach(slide => {
      appendFragment.appendChild(createClone(slide));
    });
    track.append(appendFragment);

    const getGapSize = () => {
      const style = window.getComputedStyle(track);
      const gapValue = style.columnGap || style.gap || '0px';
      const numericGap = parseFloat(gapValue);
      return Number.isFinite(numericGap) ? numericGap : 0;
    };

    const getReferenceSlide = () => track.querySelector(`${slideSelector}:not([data-carousel-clone])`);

    const getStepSize = () => {
      const referenceSlide = getReferenceSlide();
      if (!referenceSlide) return 0;
      const slideWidth = referenceSlide.getBoundingClientRect().width || referenceSlide.offsetWidth;
      return slideWidth + getGapSize();
    };

    let currentIndex = clonesPerSide;
    let isTransitioning = false;

    const updatePosition = (animate = true) => {
      const step = getStepSize();
      if (!step) return;
      const offset = -(currentIndex * step);
      track.style.transition = animate ? TRANSITION : 'none';
      track.style.transform = `translateX(${offset}px)`;
    };

    updatePosition(false);

    const slideBy = (delta) => {
      if (isTransitioning) return;
      const step = getStepSize();
      if (!step) return;

      currentIndex += delta;
      isTransitioning = true;
      track.style.transition = TRANSITION;

      requestAnimationFrame(() => {
        const offset = -(currentIndex * step);
        track.style.transform = `translateX(${offset}px)`;
      });
    };

    const handleTransitionEnd = (event) => {
      if (event.target !== track || event.propertyName !== 'transform') return;

      isTransitioning = false;

      if (currentIndex >= totalOriginal + clonesPerSide) {
        currentIndex -= totalOriginal;
        updatePosition(false);
      } else if (currentIndex < clonesPerSide) {
        currentIndex += totalOriginal;
        updatePosition(false);
      }
    };

    nextButton.addEventListener('click', () => slideBy(1));
    prevButton.addEventListener('click', () => slideBy(-1));
    track.addEventListener('transitionend', handleTransitionEnd);

    window.addEventListener('resize', () => {
      isTransitioning = false;
      updatePosition(false);
    });
  }

  // ========================================
  // Services Carousel
  // ========================================
  const servicesTrack = document.getElementById('servicesTrack');
  const servicesPrev = document.getElementById('servicesPrev');
  const servicesNext = document.getElementById('servicesNext');

  createInfiniteCarousel({
    track: servicesTrack,
    prevButton: servicesPrev,
    nextButton: servicesNext,
    slideSelector: '.service-card'
  });

  // ========================================
  // Portfolio Carousel
  // ========================================
  const portfolioTrack = document.getElementById('portfolioTrack');
  const portfolioPrev = document.getElementById('portfolioPrev');
  const portfolioNext = document.getElementById('portfolioNext');

  createInfiniteCarousel({
    track: portfolioTrack,
    prevButton: portfolioPrev,
    nextButton: portfolioNext,
    slideSelector: '.portfolio-carousel-slide'
  });

  // ========================================
  // Portfolio Lightbox
  // ========================================
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxClose = document.getElementById('lightboxClose');
  const portfolioCarouselSlides = document.querySelectorAll('.portfolio-carousel-slide img');

  portfolioCarouselSlides.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ========================================
  // Before/After Slider
  // ========================================
  const sliderContainer = document.querySelector('.before-after-container');
  if (sliderContainer) {
    const beforeImage = document.getElementById('beforeImage');
    const sliderHandle = document.getElementById('sliderHandle');
    let isDragging = false;

    function updateSlider(e) {
      if (!isDragging && e.type !== 'click') return;

      const rect = sliderContainer.getBoundingClientRect();
      const x = (e.type.includes('touch') ? e.touches[0].clientX : e.clientX) - rect.left;
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));

      beforeImage.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
      sliderHandle.style.left = `${percent}%`;
    }

    sliderContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      updateSlider(e);
    });

    sliderContainer.addEventListener('click', updateSlider);

    document.addEventListener('mousemove', updateSlider);

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    sliderContainer.addEventListener('touchstart', (e) => {
      isDragging = true;
      e.preventDefault(); // Prevent page scrolling
      updateSlider(e);
    }, { passive: false });

    sliderContainer.addEventListener('touchmove', (e) => {
      if (isDragging) {
        e.preventDefault(); // Prevent page scrolling while dragging
      }
      updateSlider(e);
    }, { passive: false });

    sliderContainer.addEventListener('touchend', () => {
      isDragging = false;
    });
  }

  // ========================================
  // Testimonial Card Read More
  // ========================================
  document.querySelectorAll('.testimonial-card').forEach(card => {
    const text = card.querySelector('.testimonial-card__text');
    if (text) {
      // Check if content is actually being clamped
      const lineHeight = parseFloat(getComputedStyle(text).lineHeight);
      const maxHeight = lineHeight * 6; // 6 lines

      if (text.scrollHeight > maxHeight) {
        text.classList.add('clamped');

        text.addEventListener('click', () => {
          text.classList.toggle('clamped');
        });
      }
    }
  });

  // ========================================
  // Console Welcome Message
  // ========================================
  console.log('%cGardenView 🌿', 'color: #22C08A; font-size: 24px; font-weight: bold;');
  console.log('%cBringing life to gardens across the community', 'color: #1E6F57; font-size: 14px;');
});
