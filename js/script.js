/*
==============================================
PORTFOLIO WEBSITE - ARUNPRASANTH E - JAVASCRIPT
==============================================
*/

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-links ul li a');

    console.log('Menu elements:', { openMenu, closeMenu, navLinks });

    // Open mobile menu
    if (openMenu) {
        openMenu.addEventListener('click', (e) => {
            console.log('Open menu clicked');
            navLinks.classList.add('active');
            e.stopPropagation();
        });
    }

    // Close mobile menu
    if (closeMenu) {
        closeMenu.addEventListener('click', (e) => {
            console.log('Close menu clicked');
            navLinks.classList.remove('active');
            e.stopPropagation();
        });
    }

    // Close menu when clicking on a nav item (mobile)
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            navLinks && 
            navLinks.classList.contains('active') &&
            !e.target.closest('.nav-links') && 
            !e.target.closest('#openMenu')) {
            console.log('Clicked outside, closing menu');
            navLinks.classList.remove('active');
        }
    });

    // Fix for mobile menu display
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            if (openMenu) openMenu.style.display = 'none';
        } else {
            if (openMenu) openMenu.style.display = 'block';
        }
    });

    // Initial check for mobile menu display
    if (window.innerWidth > 768) {
        if (openMenu) openMenu.style.display = 'none';
    } else {
        if (openMenu) openMenu.style.display = 'block';
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form - visual only, no submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Form is for display purposes only
        });
    }

    // Add animation to elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.expertise-category, .skill-category, .certification-card, .contact-info-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animated elements
    const elementsToAnimate = document.querySelectorAll('.expertise-category, .skill-category, .certification-card, .contact-info-item');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });

    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
});
