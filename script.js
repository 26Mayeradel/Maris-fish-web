/**
 * MARIS - Luxury Seafood Landing Page Architecture Engine
 * Custom Production Native Javascript Implementation
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Core Application Global Targets
    const mainHeader = document.querySelector('.main-header');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const scrollProgressBar = document.getElementById('scroll-progress');
    const backToTopBtn = document.getElementById('back-to-top');

    /* ==========================================================================
       1) AUTOMATED NAVIGATION ENGINE & MOBILE DROPDOWN TOGGLE
       ========================================================================== */
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Toggle accessibility aria bounds state
            const isExpanded = menuToggle.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close mobile drawer window upon clicking a target navigational link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ==========================================================================
       2) STICKY NAVBAR RUNTIME & SCROLL PROGRESS BAR CALCULATIONS
       ========================================================================== */
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Dynamic sticky injection threshold
        if (scrollTop > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }

        // Calculate custom viewport structural execution progress ratio
        if (documentHeight > 0) {
            const progressPercentage = (scrollTop / documentHeight) * 100;
            scrollProgressBar.style.width = `${progressPercentage}%`;
        }

        // Track visibility matrix of Back To Top operations button
        if (scrollTop > 600) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Execute standard configuration smooth scroll triggers for Back To Top action
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* ==========================================================================
       3) HEROS PARALLAX GRAPHICS CALCULATOR
       ========================================================================== */
    const heroParallaxBg = document.querySelector('.hero-parallax-bg');
    if (heroParallaxBg) {
        window.addEventListener('scroll', () => {
            const scrollOffset = window.scrollY;
            // Bound movement execution vector to avoid processing logic off-screen
            if (scrollOffset <= window.innerHeight) {
                heroParallaxBg.style.transform = `translateY(${scrollOffset * 0.4}px)`;
            }
        });
    }

    /* ==========================================================================
       4) ADVANCED INTERSECTION OBSERVER RUNTIME (REVEALS & ACTIVE LINKS)
       ========================================================================== */
    const animationElements = document.querySelectorAll('.reveal-fade, .reveal-up, .reveal-left, .reveal-right');
    
    const animationOptions = {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-animated');
                // Cease calculation hooks on individual element once visible
                observer.unobserve(entry.target);
            }
        });
    }, animationOptions);

    animationElements.forEach(element => animationObserver.observe(element));

    // Monitor Active Navigation State Sync Mapping
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const sectionTrackingOptions = {
        root: null,
        threshold: 0.3,
        rootMargin: '-10% 0px -60% 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href') === `#${activeId}`) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    }, sectionTrackingOptions);

    sections.forEach(section => sectionObserver.observe(section));

    /* ==========================================================================
       5) DYNAMIC SMOOTH MULTI-STEP NUMERIC COUNTER CONTROLLERS
       ========================================================================== */
    const counterNumbers = document.querySelectorAll('.counter-number');
    
    const counterObserverOptions = {
        root: null,
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetElement = entry.target;
                const targetValue = parseInt(targetElement.getAttribute('data-target'), 10);
                let currentCount = 0;
                
                // Configure calculation scaling bounds metrics based on raw sizes
                const speedScale = targetValue > 1000 ? Math.ceil(targetValue / 60) : 1;
                
                const incrementTimer = setInterval(() => {
                    currentCount += speedScale;
                    if (currentCount >= targetValue) {
                        targetElement.textContent = targetValue.toLocaleString();
                        clearInterval(incrementTimer);
                    } else {
                        targetElement.textContent = currentCount.toLocaleString();
                    }
                }, 20);

                observer.unobserve(targetElement);
            }
        });
    }, counterObserverOptions);

    counterNumbers.forEach(counter => counterObserver.observe(counter));

    /* ==========================================================================
       6) HIGH-PERFORMANCE TESTIMONIAL SLIDER IMPLEMENTATION
       ========================================================================== */
    const sliderWrapper = document.getElementById('testimonials-wrapper');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.getElementById('slider-dots');
    
    if (sliderWrapper && slides.length > 0) {
        let currentSlideIndex = 0;
        let sliderAutoPlaybackTimer;

        // Build matching navigational dot elements organically
        slides.forEach((_, idx) => {
            const dotButton = document.createElement('div');
            dotButton.classList.add('dot');
            if (idx === 0) dotButton.classList.add('active');
            dotButton.setAttribute('data-slide-index', idx);
            dotButton.setAttribute('role', 'button');
            dotButton.setAttribute('aria-label', `Maps to testimonial slide index ${idx + 1}`);
            dotsContainer.appendChild(dotButton);
        });

        const dotElements = document.querySelectorAll('.dot');

        const updateSliderState = (targetIndex) => {
            currentSlideIndex = targetIndex;
            // Apply standard translation transformations
            sliderWrapper.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
            
            // Sync active visual properties across UI tracking elements
            dotElements.forEach(dot => dot.classList.remove('active'));
            dotElements[currentSlideIndex].classList.add('active');
        };

        const initiateAutoAdvanceLoop = () => {
            sliderAutoPlaybackTimer = setInterval(() => {
                let nextIndex = currentSlideIndex + 1;
                if (nextIndex >= slides.length) nextIndex = 0;
                updateSliderState(nextIndex);
            }, 6000); // 6 second structural visibility rotation interval
        };

        const stopAutoAdvanceLoop = () => clearInterval(sliderAutoPlaybackTimer);

        dotsContainer.addEventListener('click', (e) => {
            const clickedDot = e.target.closest('.dot');
            if (!clickedDot) return;
            
            stopAutoAdvanceLoop();
            const targetedIndex = parseInt(clickedDot.getAttribute('data-slide-index'), 10);
            updateSliderState(targetedIndex);
            initiateAutoAdvanceLoop();
        });

        // Initialize runtime sequence tracking bounds
        initiateAutoAdvanceLoop();
    }

    /* ==========================================================================
       7) LIGHTBOX INTERACTIVE IMAGE COMPONENT POPUP ENGINE
       ========================================================================== */
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-main-img');
    const lightboxClose = document.getElementById('lightbox-close');

    if (lightboxModal && lightboxImg) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const targetImageSrc = item.querySelector('.gallery-img').getAttribute('src');
                const targetAltText = item.querySelector('.gallery-img').getAttribute('alt');
                
                lightboxImg.setAttribute('src', targetImageSrc);
                lightboxImg.setAttribute('alt', targetAltText);
                
                lightboxModal.classList.add('active');
                lightboxModal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden'; // Halt scroll cascade tracking
            });
        });

        const dismissLightboxView = () => {
            lightboxModal.classList.remove('active');
            lightboxModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            // Flush image content properties safely
            setTimeout(() => { lightboxImg.setAttribute('src', ''); }, 300);
        };

        lightboxClose.addEventListener('click', dismissLightboxView);
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) dismissLightboxView();
        });
        
        // Escape sequence accessibility override configurations
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
                dismissLightboxView();
            }
        });
    }

    /* ==========================================================================
       8) CUSTOM MATERIAL ELEMENT HOVER BUTTON RIPPLE GRAPHICS
       ========================================================================== */
    const rippleButtons = document.querySelectorAll('.ripple');
    
    rippleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Obtain bounding bounding box dimensions
            const bounds = this.getBoundingClientRect();
            const posX = e.clientX - bounds.left;
            const posY = e.clientY - bounds.top;
            
            const rippleDiv = document.createElement('span');
            rippleDiv.classList.add('ripple-element');
            rippleDiv.style.left = `${posX}px`;
            rippleDiv.style.top = `${posY}px`;
            
            this.appendChild(rippleDiv);
            
            // Wipe element from memory track after structural runtime lifecycle finishes
            rippleDiv.addEventListener('animationend', () => {
                rippleDiv.remove();
            });
        });
    });
});