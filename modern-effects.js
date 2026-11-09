// modern-effects.js

document.addEventListener('DOMContentLoaded', () => {
    
    // Create animated abstract background blobs dynamically
    const createBackgroundBlobs = () => {
        const bgContainer = document.createElement('div');
        bgContainer.innerHTML = `
            <div class="bg-blob-1"></div>
            <div class="bg-blob-2"></div>
        `;
        document.body.appendChild(bgContainer);
    };

    // Simple scroll reveal logic using IntersectionObserver
    const applyScrollReveals = () => {
        const revealElements = document.querySelectorAll('.highlight-card, .detail-item, .expertise-category, .cert-card, .testimonial-card, .about-intro, .timeline-item-modern');
        
        revealElements.forEach(el => el.classList.add('reveal'));

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(el => observer.observe(el));
    };

    // Parallax effect on hero section
    const applyParallax = () => {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            const heroContent = document.querySelector('.hero-content');
            if(heroContent && scrollPos < 600) {
                heroContent.style.transform = `translateY(${scrollPos * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrollPos / 600);
            }
        });
    };

    // Apply interactive hover effects to buttons
    const enhanceButtons = () => {
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        buttons.forEach(btn => {
            btn.addEventListener('mousemove', e => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                btn.style.setProperty('--x', `${x}px`);
                btn.style.setProperty('--y', `${y}px`);
            });
        });
    };

    createBackgroundBlobs();
    applyScrollReveals();
    applyParallax();
    enhanceButtons();
});

// A cool custom cursor logic (optional, but modern)
const updateCursorState = () => {
    // Left empty for now, could be added later
};
