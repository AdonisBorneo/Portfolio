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

// Skill bars animation
const skillBars = document.querySelectorAll('.progress');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        if (isInViewport(bar) && !bar.style.width) {
            bar.style.width = `${percent}%`;
        }
    });
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
    );
}

window.addEventListener('scroll', animateSkillBars);
animateSkillBars();

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

// Initialize mobile-specific features
function initMobileFeatures() {
    if (window.innerWidth <= 768) {
        addScrollIndicator();
        addMobileTiltEffect();
        addSwipeNavigation();
    }
}

// Initialize all animations and features
document.addEventListener('DOMContentLoaded', () => {
    createMouseTrail();
    enhanceScrollAnimations();
    addTiltEffect();
    initMobileFeatures();
});

// Handle orientation changes
window.addEventListener('orientationchange', () => {
    // Reset any necessary styles or states
    navLinks.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
    document.body.style.overflow = '';
}); 