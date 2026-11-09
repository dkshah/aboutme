// Common Footer Component - Solutions Architect & Technology Leader
class CommonFooter {
    constructor() {
        this.init();
    }

    getFooterHTML() {
        const currentYear = new Date().getFullYear();
        return `
            <footer class="footer-modern" id="site-footer">
                <div class="container">
                    <div class="footer-grid">
                        <div class="footer-brand">
                            <div class="brand-badge" style="margin-bottom: 1.25rem;">
                                <div class="brand-logo-icon">DS</div>
                                <div class="brand-info">
                                    <span class="brand-name" style="font-size: 1.3rem;">Dipen Shah</span>
                                    <span class="brand-title">Solutions Architect &bull; Azure &amp; AWS Specialist</span>
                                </div>
                            </div>
                            <p style="font-size: 0.95rem; color: var(--text-secondary); max-width: 360px; line-height: 1.7;">
                                A strategic Solutions Architect with over 15 years of experience leading enterprise software ecosystems, cloud-native modernizations on Azure and AWS, and guiding cross-functional teams of 30+ engineers.
                            </p>
                            <div class="footer-social">
                                <a href="https://www.linkedin.com/in/dipen-shah/" class="social-btn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="mailto:erdipenshah23@gmail.com" class="social-btn" aria-label="Send Direct Email">
                                    <i class="fas fa-envelope"></i>
                                </a>
                                <a href="https://topmate.io/dipen_shah" class="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Topmate Gold Mentorship Profile">
                                    <i class="fas fa-calendar-check"></i>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 class="footer-title">Portfolio Navigation</h4>
                            <ul class="footer-links">
                                <li><a href="index.html"><i class="fas fa-chevron-right" style="font-size: 0.7rem; color: var(--teal-light);"></i> Executive Home</a></li>
                                <li><a href="Projects.html"><i class="fas fa-chevron-right" style="font-size: 0.7rem; color: var(--teal-light);"></i> Architecture Projects</a></li>
                                <li><a href="blogs.html"><i class="fas fa-chevron-right" style="font-size: 0.7rem; color: var(--teal-light);"></i> Thought Leadership</a></li>
                                <li><a href="career-advice.html"><i class="fas fa-chevron-right" style="font-size: 0.7rem; color: var(--teal-light);"></i> Career Mentorship</a></li>
                                <li><a href="website-build.html"><i class="fas fa-chevron-right" style="font-size: 0.7rem; color: var(--teal-light);"></i> Personal Infrastructure</a></li>
                                <li><a href="resume.html"><i class="fas fa-chevron-right" style="font-size: 0.7rem; color: var(--teal-light);"></i> Solutions Architect Resume</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 class="footer-title">Active Certifications</h4>
                            <ul class="footer-links">
                                <li><span style="color: var(--text-secondary);"><i class="fas fa-certificate" style="font-size: 0.7rem; color: var(--blue-accent);"></i> Azure Solutions Architect Expert (AZ-305)</span></li>
                                <li><span style="color: var(--text-secondary);"><i class="fas fa-certificate" style="font-size: 0.7rem; color: var(--blue-accent);"></i> Azure Administrator Associate (AZ-104)</span></li>
                                <li><span style="color: var(--text-secondary);"><i class="fas fa-certificate" style="font-size: 0.7rem; color: var(--blue-accent);"></i> Azure Cosmos DB Specialty (DP-420)</span></li>
                                <li><span style="color: var(--text-secondary);"><i class="fas fa-certificate" style="font-size: 0.7rem; color: var(--teal-light);"></i> Informatica MDM SaaS &amp; CDGC</span></li>
                                <li><span style="color: var(--text-secondary);"><i class="fas fa-certificate" style="font-size: 0.7rem; color: var(--teal-light);"></i> ServiceNow Agentic AI &amp; Now Assist</span></li>
                                <li><span style="color: var(--text-secondary);"><i class="fas fa-certificate" style="font-size: 0.7rem; color: var(--blue-accent);"></i> Snyk Implementation Pro &amp; Databricks</span></li>
                            </ul>
                        </div>

                        <div>
                            <h4 class="footer-title">Direct Inquiries</h4>
                            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">
                                Available for Solutions Architecture Leadership, Enterprise Cloud Advisory, and Technical Consultation.
                            </p>
                            <div style="display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.9rem;">
                                <div style="display: flex; align-items: center; gap: 0.6rem; color: var(--text-secondary);">
                                    <i class="fas fa-envelope" style="color: var(--teal-light);"></i>
                                    <span>erdipenshah23@gmail.com</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 0.6rem; color: var(--text-secondary);">
                                    <i class="fas fa-map-marker-alt" style="color: var(--teal-light);"></i>
                                    <span>Ahmedabad, India</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 0.6rem; color: var(--teal-light); font-family: var(--font-mono); font-size: 0.8rem; margin-top: 0.5rem;">
                                    <span class="status-dot"></span>
                                    <span>ACTIVE ARCHITECTURAL LEADERSHIP</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        <p>&copy; ${currentYear} Dipen Shah. All rights reserved.</p>
                        <p style="font-family: var(--font-mono); font-size: 0.78rem;">
                            Engineered with Semantic Standards &bull; Zero Framework Bloat
                        </p>
                    </div>
                </div>
            </footer>
        `;
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.render());
        } else {
            this.render();
        }
    }

    render() {
        const existingFooter = document.getElementById('site-footer') || document.querySelector('.footer-modern');
        if (existingFooter) {
            existingFooter.remove();
        }

        const body = document.body;
        const footerHTML = this.getFooterHTML();
        body.insertAdjacentHTML('beforeend', footerHTML);
    }
}

new CommonFooter();
