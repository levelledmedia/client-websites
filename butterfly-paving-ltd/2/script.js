// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !navLinks.contains(event.target)) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
});

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// Testimonial Slider
document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    const track = document.querySelector('.testimonial-track');
    const cards = document.querySelectorAll('.testimonial-card');

    let currentIndex = 0;
    const totalCards = cards.length;
    let cardsPerView = 3;

    // Update cards per view based on screen size
    function updateCardsPerView() {
        if (window.innerWidth <= 768) {
            cardsPerView = 1;
        } else if (window.innerWidth <= 1024) {
            cardsPerView = 2;
        } else {
            cardsPerView = 3;
        }
    }

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);

    function updateSlider() {
        // For simplicity, we'll just show/hide cards based on current index
        // In a production environment, you'd implement smooth transitions
        cards.forEach((card, index) => {
            if (index >= currentIndex && index < currentIndex + cardsPerView) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalCards - cardsPerView) {
            currentIndex++;
            updateSlider();
        }
    });

    // Initialize slider
    updateSlider();
});

// Form Submissions
document.addEventListener('DOMContentLoaded', function() {
    // Callback Form
    const callbackForm = document.getElementById('callbackForm');

    callbackForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            postcode: document.getElementById('postcode').value,
            message: document.getElementById('message').value,
            consent: document.getElementById('consent').checked
        };

        // Here you would typically send the data to a server
        console.log('Callback form submitted:', formData);

        // Show success message
        alert('Thank you for your enquiry! We will contact you shortly.');

        // Reset form
        callbackForm.reset();
    });

    // Footer Form
    const footerForm = document.getElementById('footerForm');

    footerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: footerForm.querySelector('input[type="text"]').value,
            email: footerForm.querySelector('input[type="email"]').value,
            message: footerForm.querySelector('textarea').value
        };

        // Here you would typically send the data to a server
        console.log('Footer form submitted:', formData);

        // Show success message
        alert('Thank you for your message! We will respond shortly.');

        // Reset form
        footerForm.reset();
    });
});

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // Don't prevent default for empty hash
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                const navHeight = document.querySelector('.main-nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Before/After Slider
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('beforeAfterSlider');
    const beforeImage = document.querySelector('.before-image');
    const sliderButton = document.getElementById('sliderButton');

    if (slider && beforeImage && sliderButton) {
        slider.addEventListener('input', function() {
            const value = this.value;
            beforeImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
            sliderButton.style.left = `${value}%`;
        });
    }
});
