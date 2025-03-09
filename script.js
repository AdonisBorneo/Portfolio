// Theme Toggle - Remove since we're always using dark mode
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.style.display = 'none';

// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
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

// Cursor trail effect
function createCursorTrail() {
    const numDots = 20;
    const dots = [];
    const mouse = { x: 0, y: 0 };
    let mouseTimeout;

    // Create dots
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        document.body.appendChild(dot);
        dots.push({ el: dot, x: 0, y: 0 });
    }

    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        
        // Show dots
        dots.forEach(dot => dot.el.style.opacity = '0.6');
        clearTimeout(mouseTimeout);
        
        // Hide dots when mouse stops
        mouseTimeout = setTimeout(() => {
            dots.forEach(dot => dot.el.style.opacity = '0');
        }, 1000);
    });

    // Animate dots
    function animate() {
        let x = mouse.x;
        let y = mouse.y;

        dots.forEach((dot, index) => {
            const nextDot = dots[index + 1] || dots[0];
            dot.x = x;
            dot.y = y;
            dot.el.style.transform = `translate(${x - 5}px, ${y - 5}px)`;
            x += (nextDot.x - dot.x) * 0.6;
            y += (nextDot.y - dot.y) * 0.6;
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// Interactive background particles
function createParticles() {
    const container = document.createElement('div');
    container.className = 'interactive-bg';
    document.body.appendChild(container);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(particle);
    }
}

// Enhanced mobile menu
function enhanceMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Magnetic effect for buttons
function addMagneticEffect() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            btn.style.transform = `translate(${x/10}px, ${y/10}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
}

// Enhanced scroll animations
function enhanceScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.animationDelay = Math.random() * 0.5 + 's';
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => observer.observe(element));
}

// Initialize all new features
document.addEventListener('DOMContentLoaded', () => {
    createCursorTrail();
    createParticles();
    enhanceMobileMenu();
    addMagneticEffect();
    enhanceScrollAnimations();
}); 