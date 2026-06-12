document.addEventListener('DOMContentLoaded', () => {
    const footerElement = document.querySelector('.site-footer');

    if (footerElement) {
        footerElement.innerHTML = `
            <div class="footer-container">
                <div class="footer-brand">
                    <a href="/" class="logo">
                        <div class="logo-icon">⚡</div>
                        <span class="logo-text">CalcSuite</span>
                    </a>
                    <p class="footer-desc">
                        Empowering your financial journey with accurate, interactive, and advanced calculation engines. Plan your tomorrow, today.
                    </p>
                    
                    <!-- NEW: Feedback and Contribution Buttons -->
                    <div class="footer-support-actions" style="margin-top: 20px; display: flex; gap: 10px; flex-wrap: wrap;">
                        <a href="https://docs.google.com/forms/d/1jEiXFA3rumblbJ3GCSkVjNoAvixVbEkwBYWEbRtSZ3s" target="_blank" rel="noopener noreferrer" style="padding: 8px 15px; background: #f3f4f6; color: #1f2937; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 0.9em; transition: opacity 0.2s;">
                            📝 Leave Feedback
                        </a>
                        <a href="upi://pay?pa=sahapritam8@ybl&pn=Pritam Saha&cu=INR"  target="_blank" rel="noopener noreferrer" style="padding: 8px 15px; background: #fbbf24; color: #1f2937; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 0.9em; transition: opacity 0.2s;">
                            ☕ Support My Work
                        </a>
                    </div>
                </div>

                <div class="footer-nav">
                    <div class="footer-col">
                        <h4 class="footer-title">
                            <div class="footer-title-icon">💎</div>
                            <span>Wealth Planning</span>
                        </h4>
                        <ul class="footer-links">
                            <li><a href="/calculator/wealthplanner" target="_blank" rel="noopener noreferrer">Wealth Planner</a></li>
                            <li><a href="/calculator/sipadvance" target="_blank" rel="noopener noreferrer">Advance SIP Calc</a></li>
                            <li><a href="/calculator/swp" target="_blank" rel="noopener noreferrer">Advance SWP Calculator</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4 class="footer-title">
                            <div class="footer-title-icon">💸</div>
                            <span>Income & Loans</span>
                        </h4>
                        <ul class="footer-links">
                            <li><a href="/calculator/inhandsalary" target="_blank" rel="noopener noreferrer">In-Hand Salary</a></li>
                            <li><a href="/calculator/homeloanplan" target="_blank" rel="noopener noreferrer">Home Loan Planner</a></li>
                            <li><a href="/calculator/gratuity" target="_blank" rel="noopener noreferrer">Gratuity Calc</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4 class="footer-title">
                            <div class="footer-title-icon">🔥</div>
                            <span>Life Milestones</span>
                        </h4>
                        <ul class="footer-links">
                            <li><a href="/calculator/fire" target="_blank" rel="noopener noreferrer">FIRE Calculator</a></li>
                            <li><a href="/calculator/childgrowthtracker" target="_blank" rel="noopener noreferrer">Child Growth Tracker</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="footer-bottom-container">
                    <p>&copy; 2026 CalcSuite. All rights reserved.</p>
                    <div class="footer-bottom-links">
                        <a href="/calculator/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                        <a href="/calculator/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>  
                    </div>
                </div>
            </div>
        `;
    }

    // --- Header Mobile Navigation Mechanics ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-navigation');
    const categoryTriggers = document.querySelectorAll('.category-trigger');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('is-active');
            mobileMenuBtn.textContent = mainNav.classList.contains('is-active') ? '✕' : '☰';
        });
    }

    categoryTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                const parentNavItem = trigger.closest('.nav-item');
                parentNavItem.classList.toggle('is-open');
            }
        });
    });
});