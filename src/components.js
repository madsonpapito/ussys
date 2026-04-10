// Injeção dinâmica da Sidebar e Header
document.addEventListener('DOMContentLoaded', () => {
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = `
            <aside class="sidebar">
                <a href="/hub.html" class="logo" style="color: var(--primary); margin-bottom: 2rem; font-size: 1.1rem;">
                    <div class="logo-icon" style="background: var(--primary); color: #fff;">
                        <i class="fas fa-flag-usa"></i>
                    </div>
                    USA <span style="font-weight: 300; color: var(--text);">System</span>
                </a>
                
                <nav style="flex: 1;">
                    <a href="/hub.html" class="sidebar-link ${window.location.pathname.includes('hub') ? 'active' : ''}">
                        <i class="fas fa-th-large"></i> Dashboard
                    </a>
                    <a href="/american-refunds.html" class="sidebar-link ${window.location.pathname.includes('american-refunds') ? 'active' : ''}">
                        <i class="fas fa-hand-holding-usd"></i> Refunds Guide
                    </a>
                    <a href="/step-by-step-training.html" class="sidebar-link ${window.location.pathname.includes('training') ? 'active' : ''}">
                        <i class="fas fa-graduation-cap"></i> Training
                    </a>
                    <a href="/paypal-now.html" class="sidebar-link ${window.location.pathname.includes('paypal') ? 'active' : ''}">
                        <i class="fas fa-wallet"></i> Payments
                    </a>
                    <a href="/safe.html" class="sidebar-link">
                        <i class="fas fa-shield-alt"></i> Compliance
                    </a>
                </nav>

                <div style="margin-top: auto; padding-top: 2rem; border-top: 1px solid var(--border);">
                    <div style="display: flex; align-items: center; gap: 10px; font-size: 0.8rem; color: #059669; font-weight: 700;">
                        <i class="fas fa-check-circle"></i> VERIFIED ACCESS
                    </div>
                    <p style="font-size: 0.7rem; color: var(--text-muted); margin-top: 5px;">ID: USA-88291-OFFICIAL</p>
                </div>
            </aside>
        `;
    }
});
