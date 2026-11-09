// Common Navigation Component - Senior Solution Architect & Technology Leader
class CommonNavigation {
    constructor() {
        this.currentPage = this.getCurrentPage();
        this.init();
    }

    getCurrentPage() {
        const path = window.location.pathname.toLowerCase();
        const filename = path.split('/').pop() || 'index.html';
        
        if (filename === '' || filename === 'index.html' || filename === 'index_new.html') return 'home';
        if (filename.includes('project')) return 'projects';
        if (filename.includes('blog')) return 'blogs';
        if (filename.includes('career') || filename.includes('carrer')) return 'career';
        if (filename.includes('website') || filename.includes('hosting') || filename.includes('build')) return 'website-build';
        if (filename.includes('resume')) return 'resume';
        
        return 'home';
    }

    getNavigationHTML() {
        const navItems = [
            { id: 'home', label: 'Home', href: 'index.html' },
            { id: 'projects', label: 'Projects', href: 'Projects.html' },
            { id: 'blogs', label: 'Blogs & Insights', href: 'blogs.html' },
            { id: 'career', label: 'Career Mentorship', href: 'career-advice.html' },
            { id: 'website-build', label: 'Architecture & Hosting', href: 'website-build.html' },
            { id: 'resume', label: 'Executive Resume', href: 'resume.html', isButton: true }
        ];

        const navLinksHTML = navItems.map(item => {
            const isActive = item.id === this.currentPage;
            const classes = `nav-link ${isActive ? 'active' : ''} ${item.isButton ? 'nav-cta' : ''}`;
            const icon = item.isButton ? '<i class="fas fa-file-contract"></i> ' : '';
            return `<a href="${item.href}" class="${classes}">${icon}${item.label}</a>`;
        }).join('');

        return `
            <header class="navbar-modern" id="navbar-header">
                <div class="nav-container">
                    <a href="index.html" class="nav-brand" aria-label="Dipen Shah Portfolio Home">
                        <div class="brand-badge">
                            <div class="brand-logo-icon">DS</div>
                            <div class="brand-info">
                                <span class="brand-name">Dipen Shah</span>
                                <span class="brand-title">Senior Solution Architect &amp; Tech Leader</span>
                            </div>
                        </div>
                    </a>
                    <nav class="nav-menu" id="nav-menu" aria-label="Main Navigation">
                        ${navLinksHTML}
                    </nav>
                    <button class="nav-toggle" id="nav-toggle" aria-label="Toggle Navigation Menu" aria-expanded="false">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                </div>
            </header>
        `;
    }

    init() {
        // Ensure DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.render());
        } else {
            this.render();
        }
    }

    render() {
        const existingNav = document.getElementById('navbar-header') || document.querySelector('.navbar-modern');
        if (existingNav) {
            existingNav.remove();
        }

        const body = document.body;
        const navHTML = this.getNavigationHTML();
        body.insertAdjacentHTML('afterbegin', navHTML);
        
        this.initMobileToggle();
        this.initScrollEffect();
    }

    initMobileToggle() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                const isOpen = navMenu.classList.toggle('show');
                navToggle.classList.toggle('active');
                navToggle.setAttribute('aria-expanded', isOpen);
            });

            navMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('show');
                    navToggle.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                });
            });
        }
    }

    initScrollEffect() {
        const navbar = document.getElementById('navbar-header');
        if (!navbar) return;

        const handleScroll = () => {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }
}

new CommonNavigation();
