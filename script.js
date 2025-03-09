// Theme Toggle - Remove since we're always using dark mode
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.style.display = 'none';

// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Typewriter Effect
const words = ['Full-Stack Developer', 'UI/UX Designer', 'Problem Solver'];
const typedTextSpan = document.querySelector('#typed-text');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

setTimeout(type, 1000);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active navigation highlight
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

function updateActiveSection() {
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveSection);

// Animate elements on scroll
const animateElements = document.querySelectorAll('.animate-on-scroll');

function checkScroll() {
    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.8) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Initial check

// Enhanced Skill bars animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.progress');
    const isMobile = window.innerWidth <= 768;

    skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        
        if (isInViewport(bar) && !bar.style.width) {
            if (isMobile) {
                // Set CSS variable for the animation
                bar.style.setProperty('--percent', `${percent}%`);
                bar.classList.add('animate');
            } else {
                bar.style.width = `${percent}%`;
            }
        }
    });
}

// Improved viewport detection for mobile
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
    // More generous threshold for mobile
    const threshold = window.innerWidth <= 768 ? 0.2 : 0;
    
    return (
        rect.top >= -rect.height * threshold &&
        rect.left >= 0 &&
        rect.bottom <= windowHeight * (1 + threshold) &&
        rect.right <= windowWidth
    );
}

// Initialize mobile features
function initMobileFeatures() {
    if (window.innerWidth <= 768) {
        addBottomNav();
        addPullToRefresh();
        addLoadingBar();
        optimizeScroll();
        optimizeTouchInteractions();
        handleOrientationChange();

        // Remove heavy animations on mobile
        document.querySelectorAll('.mouse-trail').forEach(el => el.remove());
        
        // Force check skill bars on mobile
        setTimeout(() => {
            animateSkillBars();
        }, 500);
    }
}

// Add scroll event listener with throttling for better performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            animateSkillBars();
            scrollTimeout = null;
        }, 100);
    }
}, { passive: true });

// Parallax effect for hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Mouse trail effect
function createMouseTrail() {
    const colors = ['#3b82f6', '#ec4899', '#8b5cf6', '#10b981'];
    const numDots = 20;
    const dots = [];
    let mouseX = 0;
    let mouseY = 0;

    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'mouse-trail';
        dot.style.background = colors[i % colors.length];
        document.body.appendChild(dot);
        dots.push({ dot, x: 0, y: 0 });
    }

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function updateDots() {
        let currentX = mouseX;
        let currentY = mouseY;

        dots.forEach((dot, index) => {
            const nextDot = dots[index + 1] || dots[0];
            dot.x = currentX;
            dot.y = currentY;
            dot.dot.style.left = `${dot.x}px`;
            dot.dot.style.top = `${dot.y}px`;
            dot.dot.style.scale = (numDots - index) / numDots;
            currentX += (nextDot.x - dot.x) * 0.3;
            currentY += (nextDot.y - dot.y) * 0.3;
        });

        requestAnimationFrame(updateDots);
    }

    updateDots();
}

// Enhanced scroll animations
function enhanceScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.transitionDelay = `${Math.random() * 0.5}s`;
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
}

// Tilt effect for cards
function addTiltEffect() {
    const cards = document.querySelectorAll('.about-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// Add scroll indicator for mobile
function addScrollIndicator() {
    if (window.innerWidth <= 768) {
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        document.body.appendChild(indicator);

        // Hide indicator after first scroll
        const hideIndicator = () => {
            indicator.style.opacity = '0';
            setTimeout(() => indicator.remove(), 300);
            window.removeEventListener('scroll', hideIndicator);
        };

        window.addEventListener('scroll', hideIndicator);
    }
}

// Touch-based tilt effect for cards on mobile
function addMobileTiltEffect() {
    const cards = document.querySelectorAll('.about-card');
    
    cards.forEach(card => {
        let touch = {
            startX: 0,
            startY: 0,
            dx: 0,
            dy: 0
        };

        card.addEventListener('touchstart', (e) => {
            touch.startX = e.touches[0].clientX;
            touch.startY = e.touches[0].clientY;
        });

        card.addEventListener('touchmove', (e) => {
            if (!touch.startX || !touch.startY) return;

            touch.dx = e.touches[0].clientX - touch.startX;
            touch.dy = e.touches[0].clientY - touch.startY;

            const tiltX = touch.dy / 10;
            const tiltY = -touch.dx / 10;

            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
            e.preventDefault();
        });

        card.addEventListener('touchend', () => {
            card.style.transform = '';
            touch.startX = touch.startY = touch.dx = touch.dy = 0;
        });
    });
}

// Swipe navigation for mobile
function addSwipeNavigation() {
    let touchStart = null;
    let touchEnd = null;

    document.addEventListener('touchstart', (e) => {
        touchStart = e.touches[0].clientX;
    });

    document.addEventListener('touchmove', (e) => {
        touchEnd = e.touches[0].clientX;
    });

    document.addEventListener('touchend', () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe || isRightSwipe) {
            const sections = Array.from(document.querySelectorAll('section'));
            const currentSection = sections.find(section => {
                const rect = section.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });

            if (currentSection) {
                const currentIndex = sections.indexOf(currentSection);
                let targetSection;

                if (isLeftSwipe && currentIndex < sections.length - 1) {
                    targetSection = sections[currentIndex + 1];
                } else if (isRightSwipe && currentIndex > 0) {
                    targetSection = sections[currentIndex - 1];
                }

                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }

        touchStart = touchEnd = null;
    });
}

// Add bottom navigation for mobile
function addBottomNav() {
    if (window.innerWidth <= 768) {
        const bottomNav = document.createElement('nav');
        bottomNav.className = 'bottom-nav';
        bottomNav.innerHTML = `
            <a href="#home" class="active">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
            <a href="#about">
                <i class="fas fa-user"></i>
                <span>About</span>
            </a>
            <a href="#skills">
                <i class="fas fa-code"></i>
                <span>Skills</span>
            </a>
            <a href="#contact">
                <i class="fas fa-envelope"></i>
                <span>Contact</span>
            </a>
        `;
        document.body.appendChild(bottomNav);

        // Update active state on scroll
        const bottomNavLinks = bottomNav.querySelectorAll('a');
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    bottomNavLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }
}

// Add pull-to-refresh functionality
function addPullToRefresh() {
    if (window.innerWidth <= 768) {
        const pullToRefresh = document.createElement('div');
        pullToRefresh.className = 'pull-to-refresh';
        document.body.appendChild(pullToRefresh);

        let touchStart = 0;
        let touchEnd = 0;

        document.addEventListener('touchstart', (e) => {
            touchStart = e.touches[0].clientY;
        });

        document.addEventListener('touchmove', (e) => {
            touchEnd = e.touches[0].clientY;
            const distance = touchEnd - touchStart;

            if (window.scrollY === 0 && distance > 0) {
                pullToRefresh.classList.add('active');
                e.preventDefault();
            }
        });

        document.addEventListener('touchend', () => {
            if (pullToRefresh.classList.contains('active')) {
                pullToRefresh.classList.remove('active');
                location.reload();
            }
        });
    }
}

// Add loading bar
function addLoadingBar() {
    const loadingBar = document.createElement('div');
    loadingBar.className = 'loading-bar';
    document.body.appendChild(loadingBar);

    // Show loading bar on navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', () => {
            loadingBar.classList.add('active');
            setTimeout(() => loadingBar.classList.remove('active'), 500);
        });
    });
}

// Optimize scroll performance
function optimizeScroll() {
    let scrollTimeout;
    const body = document.body;

    window.addEventListener('scroll', () => {
        if (!body.classList.contains('is-scrolling')) {
            body.classList.add('is-scrolling');
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            body.classList.remove('is-scrolling');
        }, 150);
    }, { passive: true });
}

// Optimize touch interactions
function optimizeTouchInteractions() {
    if ('ontouchstart' in window) {
        document.documentElement.style.setProperty('--hover-effect', 'none');
        
        const interactiveElements = document.querySelectorAll('a, button, .about-card, .contact-item');
        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', () => {}, { passive: true });
        });
    }
}

// Handle mobile orientation changes
function handleOrientationChange() {
    if (window.innerWidth <= 768) {
        const updateLayout = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        window.addEventListener('resize', updateLayout);
        window.addEventListener('orientationchange', () => {
            setTimeout(updateLayout, 100);
        });

        updateLayout();
    }
}

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 768) {
        createMouseTrail();
    }
    enhanceScrollAnimations();
    addTiltEffect();
    initMobileFeatures();
});

// Debounced resize handler
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (window.innerWidth <= 768) {
            initMobileFeatures();
        }
    }, 250);
});

// Handle orientation changes
window.addEventListener('orientationchange', () => {
    // Reset any necessary styles or states
    navLinks.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
    document.body.style.overflow = '';
}); 