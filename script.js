// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    footer.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Footer clicked');
    });
});

