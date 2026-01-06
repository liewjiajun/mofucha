/**
 * mofucha - Main JavaScript
 * Handles navigation, smooth scrolling, and animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    Navigation.init();
    SmoothScroll.init();
    ScrollAnimations.init();
});

/**
 * Navigation Module
 * Handles mobile menu toggle and scroll-based styling
 */
const Navigation = {
    init() {
        this.nav = document.querySelector('.nav');
        this.toggle = document.querySelector('.nav-toggle');
        this.menu = document.querySelector('.nav-menu');
        this.menuLinks = document.querySelectorAll('.nav-menu a');

        this.bindEvents();
        this.handleScroll();
    },

    bindEvents() {
        // Mobile menu toggle
        if (this.toggle) {
            this.toggle.addEventListener('click', () => this.toggleMenu());
        }

        // Close menu when clicking a link
        this.menuLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Handle scroll styling
        window.addEventListener('scroll', () => this.handleScroll(), { passive: true });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.menu.classList.contains('active')) {
                this.closeMenu();
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.menu.classList.contains('active') &&
                !this.menu.contains(e.target) &&
                !this.toggle.contains(e.target)) {
                this.closeMenu();
            }
        });
    },

    toggleMenu() {
        const isOpen = this.menu.classList.toggle('active');
        this.toggle.setAttribute('aria-expanded', isOpen);

        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
    },

    closeMenu() {
        this.menu.classList.remove('active');
        this.toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    },

    handleScroll() {
        const scrolled = window.scrollY > 50;
        this.nav.classList.toggle('scrolled', scrolled);
    }
};

/**
 * Smooth Scroll Module
 * Handles smooth scrolling for anchor links
 */
const SmoothScroll = {
    init() {
        this.bindEvents();
    },

    bindEvents() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => this.handleClick(e, anchor));
        });
    },

    handleClick(e, anchor) {
        const targetId = anchor.getAttribute('href');

        // Skip if it's just "#"
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault();

            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
};

/**
 * Scroll Animations Module
 * Handles fade-in animations on scroll using Intersection Observer
 */
const ScrollAnimations = {
    init() {
        this.setupObserver();
        this.observeElements();
    },

    setupObserver() {
        const options = {
            root: null,
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.1
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    this.observer.unobserve(entry.target);
                }
            });
        }, options);
    },

    observeElements() {
        // Add fade-in class to elements we want to animate
        const animateElements = [
            '.menu-card',
            '.section-header',
            '.about-text',
            '.about-visual',
            '.order-embed-placeholder',
            '.order-alternatives',
            '.order-info'
        ];

        animateElements.forEach(selector => {
            document.querySelectorAll(selector).forEach((el, index) => {
                el.classList.add('fade-in');
                // Stagger animation delay
                el.style.transitionDelay = `${index * 100}ms`;
                this.observer.observe(el);
            });
        });
    }
};

/**
 * Utility: Check if device supports hover
 * Used for preventing hover states on touch devices
 */
const supportsHover = window.matchMedia('(hover: hover)').matches;

/**
 * Add loaded class to body when all resources are loaded
 * Can be used for page reveal animations
 */
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
