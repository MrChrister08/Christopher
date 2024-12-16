const app = {
    init() {
        this.setupEventListeners();
        this.setupScrollAnimation();
        this.setupHamburgerMenu(); // Add this line
    },

    setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            console.log('DOM fully loaded');
            this.addNavHighlight();
        });
    },

    setupScrollAnimation() {
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.glass-nav');
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(255, 255, 255, 0.15)';
            } else {
                nav.style.background = 'rgba(255, 255, 255, 0.1)';
            }
        });
    },

    setupHamburgerMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const links = document.querySelectorAll('.nav-links li');

        hamburger.addEventListener('click', () => {
            // Toggle Nav
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');

            // Animate Links
            links.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });

        // Close menu when clicking a link
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    },

    addNavHighlight() {
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', (e) => {
                e.target.style.transition = 'all 0.3s ease';
                e.target.style.textShadow = '0 0 10px var(--primary-color)';
            });

            link.addEventListener('mouseleave', (e) => {
                e.target.style.textShadow = 'none';
            });
        });
    }
};

app.init();
