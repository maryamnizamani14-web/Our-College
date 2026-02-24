// Responsive Navbar Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');

    // Create a mobile menu button
    const menuBtn = document.createElement('button');
    menuBtn.innerHTML = '&#9776;'; // hamburger icon
    menuBtn.classList.add('menu-btn');
    menuBtn.style.fontSize = '24px';
    menuBtn.style.background = 'none';
    menuBtn.style.border = 'none';
    menuBtn.style.color = 'white';
    menuBtn.style.cursor = 'pointer';

    header.querySelector('.container').prepend(menuBtn);

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simple Contact Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value.trim();
            const email = this.querySelector('input[type="email"]').value.trim();
            const message = this.querySelector('textarea').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
            } else {
                alert('Thank you for contacting us! We will get back to you soon.');
                this.reset();
            }
        });
    }
});