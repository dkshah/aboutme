// Common Navigation Component
class CommonNavigation {
    constructor() {
        this.currentPage = this.getCurrentPage();
        this.init();
    }

    getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';
        
        // Map filenames to navigation identifiers
        const pageMap = {
            'index.html': 'home',
            'index_new.html': 'home',
            'Projects.html': 'projects',
            'Projects_new.html': 'projects',
            'blogs.html': 'blogs',
            'blogs_new.html': 'blogs',
            'carreradvice.html': 'career',
            'carreradvice_new.html': 'career',
            'resume.html': 'resume'
        };
        
        return pageMap[filename] || 'home';
    }

    getNavigationHTML() {
        // Determine which version of files to link to based on current page
        const isNewVersion = window.location.pathname.includes('_new.html');
        
        const navItems = [
            { id: 'home', label: 'Home', href: isNewVersion ? 'index_new.html' : 'index.html' },
            { id: 'projects', label: 'Projects', href: isNewVersion ? 'Projects_new.html' : 'Projects.html' },
            { id: 'blogs', label: 'Blogs', href: isNewVersion ? 'blogs_new.html' : 'blogs.html' },
            { id: 'career', label: 'Career Advice', href: isNewVersion ? 'carreradvice_new.html' : 'carreradvice.html' },
            { id: 'resume', label: 'Resume', href: 'resume.html', isButton: true }
        ];

        const navLinksHTML = navItems.map(item => {
            const isActive = item.id === this.currentPage;
            const classes = `nav-link ${isActive ? 'active' : ''} ${item.isButton ? 'nav-cta' : ''}`;
            return `<a href="${item.href}" class="${classes}">${item.label}</a>`;
        }).join('');

        return `
            <nav class="navbar-modern">
                <div class="nav-container">
                    <div class="nav-brand">
                        <h1 class="brand-name">Dipen Shah</h1>
                        <span class="brand-title">Solution Architect</span>
                    </div>
                    <div class="nav-menu" id="nav-menu">
                        ${navLinksHTML}
                    </div>
                    <div class="nav-toggle" id="nav-toggle">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </div>
            </nav>
        `;
    }

    init() {
        // Insert navigation HTML at the beginning of body
        document.addEventListener('DOMContentLoaded', () => {
            const body = document.body;
            const navHTML = this.getNavigationHTML();
            body.insertAdjacentHTML('afterbegin', navHTML);
            
            // Initialize mobile navigation toggle
            this.initMobileToggle();
            
            // Initialize scroll effect
            this.initScrollEffect();
        });
    }

    initMobileToggle() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('show');
                navToggle.classList.toggle('active');
            });
        }
    }

    initScrollEffect() {
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar-modern');
            if (navbar) {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        });
    }
}

// Initialize common navigation
new CommonNavigation();
