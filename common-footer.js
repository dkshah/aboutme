// Common Footer Component
class CommonFooter {
    constructor() {
        this.init();
    }

    getFooterHTML() {
        return `
            <footer class="footer-modern">
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-brand">
                            <h3 style="color: white;">Dipen Shah</h3>
                            <p>Senior Solution Architect</p>
                        </div>
                        <div class="footer-links">
                            <a href="Projects.html">Portfolio</a>
                            <a href="resume.html">Resume</a>
                            <a href="blogs.html">Blogs</a>
                            <a href="carreradvice.html">Career Advice</a>
                        </div>
                        <div class="footer-social">
                            <a href="https://www.linkedin.com/in/dipen-shah/" class="social-link" aria-label="LinkedIn">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" class="social-link" aria-label="GitHub">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="mailto:erdipenshah23@gmail.com" class="social-link" aria-label="Email">
                                <i class="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2025 Dipen Shah. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            const body = document.body;
            const footerHTML = this.getFooterHTML();
            body.insertAdjacentHTML('beforeend', footerHTML);
        });
    }
}

// Initialize common footer
new CommonFooter();
