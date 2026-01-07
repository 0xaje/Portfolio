// Main JS functionality

document.addEventListener("DOMContentLoaded", () => {

    // --- Theme Switcher Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    // 1. Check for saved preference or system default
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)');

    function setTheme(theme) {
        htmlEl.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateCursorVisibility(theme);
    }

    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('light'); /* Default to White Theme */
    }

    // 2. Event Listener for Toggle Button
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    // 3. Optional: Listen for System Changes if no override
    systemPrefersLight.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'light' : 'dark';
            setTheme(newTheme);
        }
    });

    // Helper to hide cursor glow in light mode if desired (often looks better without it on white)
    function updateCursorVisibility(theme) {
        const glow = document.querySelector('.cursor-glow');
        if (glow) {
            glow.style.display = theme === 'light' ? 'none' : '';
        }
    }

    // --- Interaction Observer for Fade-in effects ---
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));


    // --- Custom Cursor Glow Effect ---
    const glow = document.querySelector('.cursor-glow');

    if (glow) {
        document.addEventListener('mousemove', (e) => {
            // Use requestAnimationFrame for smoother performance
            requestAnimationFrame(() => {
                glow.style.left = `${e.clientX}px`;
                glow.style.top = `${e.clientY}px`;
            });
        });
    }


    // --- Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Scroll to Top Button Logic ---
    const scrollToTopBtn = document.getElementById('scroll-to-top');



    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const scrollToBottomBtn = document.getElementById('scroll-to-bottom');

    window.addEventListener('scroll', () => {
        // Show scroll-to-top when scrolled down 300px
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }

        // Show scroll-to-bottom when not at the bottom
        if ((window.innerHeight + window.scrollY) < document.body.offsetHeight - 100) {
            scrollToBottomBtn.classList.add('visible');
        } else {
            scrollToBottomBtn.classList.remove('visible');
        }

        updateActiveNavLink();
    });

    scrollToBottomBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });

    // --- Active Nav Link Logic ---
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    // --- Typewriter Effect ---
    function initTypewriter(elementId, phrases, speed = 100) {
        const textElement = document.getElementById(elementId);
        if (!textElement) return;

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = speed;

        function type() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                textElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50;
            } else {
                textElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                typeSpeed = 2000; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500; // Pause before new word
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }

    // Initialize Typewriters
    initTypewriter('typewriter-text', ["Aje Oluwaseun Isaac", "Senior ICT Specialist"]);
    // Using the list of titles requested by the user
    initTypewriter('typewriter-subtitle', ["Web3 Product Manager", "Content Creator", "Blockchain Developer"]);

});
